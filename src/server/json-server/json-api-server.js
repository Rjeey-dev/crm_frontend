const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jsonApiServer = jsonServer.create();
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const jwt = require('jsonwebtoken');
const request = require('request');

const SECRET_KEY = 'g6XQw9nj';
const expiresIn = '1h';

// Parse all mocks
let obj = {};
let files = fs.readdirSync(path.resolve(__dirname, './mocks'))

files.forEach((file) => {
    if (file.indexOf('.json') > -1) {
        lodash.extend(obj, require(path.resolve(__dirname, './mocks/', file)))
    }
});

// Set default middlewares (logger, static, cors and no-cache)
jsonApiServer.use(jsonServer.defaults());

jsonApiServer.use(function(req, res, next){
    setTimeout(next, 1150);
});

jsonApiServer.use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
}));

let userdb = JSON.parse(fs.readFileSync('./mocks/users.json', 'UTF-8'));
let settingsdb = JSON.parse(fs.readFileSync('./mocks/settings.json', 'UTF-8'));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
jsonApiServer.use(bodyParser.urlencoded({extended: true}));
jsonApiServer.use(bodyParser.json());

jsonApiServer.use(/^(?!\/auth).*$/,  (req, res, next) => {
    if (req.headers.authorization === undefined || getBearer(req.headers.authorization) !== 'Bearer') {
        const status = 401;
        const message = 'Bad authorization header';
        res.status(status).json({status, message});
        return
    }
    try {
        verifyToken(req.headers.authorization);
        next()
    } catch (err) {
        const status = 401;
        const message = 'Error: access_token is not valid';
        res.status(status).json({status, message});
    }
});

//////////////////// User auth  ////////////////////////////

// Add custom routes before JSON Server router
jsonApiServer.post('/auth/login', (req, res) => {
    const {login, password} = req.body;

    let user = findUser({login, password});

    if (user) {
        user.token = createToken({login, password});

        res.status(200).json(user);
    } else {
        let error = '';

        if (!isLoginExists({login})) {
            error = {
                login: {
                    id: 'validation.username_is_not_found'
                }
            };
        } else {
            error = {
                password: {
                    id: 'validation.password_is_incorrect'
                }
            };
        }
        res.status(401).json({
            error: error
        });
    }
});

jsonApiServer.post('/auth/instagram', (req, res) => {
    const {code} = req.body;

    const params = {
        client_id: '5bc8266242b44beba5182c2e15f1e81c',
        client_secret: '4a9b6cd255e9421eb54f28198f2b4b9a',
        redirect_uri: 'http://localhost:3000/',
        grant_type: 'authorization_code',
        code,
    };

    const sendParams = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    let options = {
        url: 'https://api.instagram.com/oauth/access_token',
        method: 'POST',
        body: sendParams,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    };

    request(options, function (error, apiResponse, body) {
        if (error) {
            console.log(error);
            console.log(JSON.parse(body));
            error = {
                password: {
                    id: 'validation.something_went_wrong'
                }
            };

            res.status(401).json({
                error: error
            });
        } else {
            const userResponse = JSON.parse(body);
            console.log(userResponse);
            // console.log(userResponse);
            let user = {};
            user.token = createToken({userName: userResponse.user.username, fullName: userResponse.user.fullName});
            user.id = userResponse.user.id;
            user.username = userResponse.user.full_name;
            user.image = userResponse.user.profile_picture;
            user.login = userResponse.user.username;
            user.login = userResponse.user.username;
            user.role = 'admin';
            user.created = "2018-11-28T13:50:50+0300";
            user.verified = true;
            user.active = true;

            res.status(200).json(user);
        }
    });
});

jsonApiServer.post('/auth/register', (req, res) => {
    const {login, password, email} = req.body;
    if (!isLoginExists({login}) && !isEmailExists({email})) {
        res.status(200).json({
            id: 2,
            isValid: true,
            name: login,
            email: email,
            token: createToken({login, password}),
            image: '../../../client/static/images/faces/face1.jpg',
            role: 'manager'
        });
    } else {
        let error = '';

        if (isEmailExists({login, email})) {
            error = {
                email: {
                    id: 'validation.email_already_exists'
                }
            };
        } else if(isLoginExists({login})) {
            error = {
                login: {
                    id: 'validation.username_already_exists'
                }
            };
        } else {
            error = {
                login: {
                    id: 'validation.username_already_exists'
                }
            };
        }

        res.status(404).json({
            error: error
        });
    }
});

jsonApiServer.post('/auth/remind', (req, res) => {
    const {email} = req.body;
    if (isEmailExists({email})) {
        res.status(200).json({
            email: email,
        });
    } else {
        res.status(404).json({
            error: {
                email: {
                    id: 'validation.no_user_with_such_email'
                }
            }
        });
    }
});

//////////////////// User  ////////////////////////////

jsonApiServer.patch('/users/:id', (req, res) => {
    const {oldPassword} = req.body;

    if (oldPassword && oldPassword !== 'aaaaaaaa') {
        res.status(401).json({
            error: {
                oldPassword: {
                    id: 'validation.password_is_not_correct'
                }
            }
        });
    }
    else {
        res.status(200).json({});
    }
});

jsonApiServer.post('/users/:id/check-password', (req, res) => {
    const {password} = req.body;

    if (password !== 'aaaaaaaa') {
        res.status(401).json({
            error: {
                password: {
                    id: 'validation.password_is_not_correct'
                }
            }
        });
    } else {
        res.status(200).json({});
    }
});

/*jsonApiServer.get('/users/:id', (req, res) => {
    const {id, settings} = req.body;

    let user = findUserById(id);

    if (!user) {
        res.status(404).json({
            isValid: false,
        });
    }

    res.status(200).json({
        isValid: true,
        settings: settings,
    });
});*/

// Use mocks routes
jsonApiServer.use(jsonServer.router(obj));

jsonApiServer.listen(3001, () => {
    console.log('JSON Server is running')
});

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function getToken(auth) {
    return auth.split(' ')[1];
}

function getBearer(auth) {
    return auth.split(' ')[0];
}

function verifyToken(auth) {
    let token = getToken(auth);

    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

function findUser({login, password}) {
    return userdb.users.find(user => user.login === login && user.password === password)
}

function findUserById(id) {
    return userdb.users.find(user => user.id === id);
}

function isLoginExists({login}) {
    return userdb.users.findIndex(user => user.login === login) !== -1
}

function isEmailExists({email}) {
    return userdb.users.findIndex(user => user.email === email) !== -1
}
