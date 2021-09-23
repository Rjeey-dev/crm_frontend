const SECRET_KEY = 'g6XQw9nj';
const expiresIn = '1h';

let jwt = require('jsonwebtoken');

let userdb = JSON.parse(fs.readFileSync('../mocks/users.json', 'UTF-8'));

export const createToken = payload => jwt.sign(payload, SECRET_KEY, {expiresIn});

export const verifyToken = token => jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err);

export const findUser = ({login, password}) => userdb.users.find(user => user.login === login && user.password === password);

export const findUserById = id => userdb.users.find(user => user.id === id);

export const isLoginExists = login => userdb.users.findIndex(user => user.login === login) !== -1;

export const isEmailExists = email => userdb.users.findIndex(user => user.email === email) !== -1;