// import {ConnectedRouter} from "connected-react-router";
// import {createBrowserHistory} from "history";
// import {History} from "history";
import React from 'react';
import ReactDOMServer, {renderToString} from 'react-dom/server';
// import { renderToStaticMarkup } from 'react-dom/server'
// @ts-ignore
import { Helmet } from 'react-helmet';
import {LocalizeProvider} from "react-localize-redux";
import {Provider} from "react-redux";
import {matchPath} from "react-router";
import { StaticRouter } from 'react-router-dom';

// TODO move config to common
// import { basename } from 'client/config';
// import initApp from "client/init";
import {defaultLanguage, languages} from 'client/config';
// TODO move translations to common
import globalEnTranslations from "client/translations/en";
import App from 'common/components/App';
import Routes from 'common/routes';
import {createStore} from "redux";
import {
    URL_AUTH_GOOGLE_REDIRECT,
    URL_HOME,
    URL_HOME_LOCALIZED
} from "common/routes/paths";
import {supportsLanguage} from "services/common/translations";
// import configureStore from "store/configure";

const express = require("express");
const compression = require("compression");
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
// general config
app.set('views', path.resolve(process.cwd(), 'build/server/static'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

// @ts-ignore
const renderApp = ({store, location}) => {
    return renderToString(<Provider store={store}>
        <LocalizeProvider initialize={{
            languages,
            options: {
                defaultLanguage,
                renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup
            },
            translation: globalEnTranslations,
        }}>
            <StaticRouter location={location}><App/></StaticRouter>
        </LocalizeProvider>
    </Provider>);
};

// @ts-ignore
/*const renderHtml = ({serverState, initialState, content, sheet,}) => {
    const styles = sheet.getStyleElement();
    // const { assets } = global;
    const state = `
    window.__SERVER_STATE__ = ${serialize(serverState)};
    window.__INITIAL_STATE__ = ${serialize(initialState)};
  `;
    const props = {
        styles, state, content,
    };

    const html = <Html {...props} />;

    return `<!doctype html>\n${renderToStaticMarkup(html)}`
};*/

app.use(compression({
    level: 9,               // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
}));

function shouldCompress(req: any, res: any) {
    if (req.headers["x-no-compression"]) { return false; }

    return compression.filter(req, res);
}

app.get('/sp-push-manifest.json', (req: any, res: any) => {
    serveStaticFile(res, 'sp-push-manifest.json', 'application/json');
});

app.get('/sp-push-worker-fb.js', (req: any, res: any) => {
    serveStaticFile(res, 'sp-push-worker-fb.js', 'text/javascript');
});

app.get('/robots.txt', (req: any, res: any) => {
    serveStaticFile(res, 'robots.txt', 'text/plain');
});

app.get('/sitemap.xml', (req: any, res: any) => {
    serveStaticFile(res, 'sitemap.xml', 'application/xml');
});

app.use(express.static('build/client'));
app.use('/static/*', express.static('build/client'));

app.use((req: any, res: any, next: any) => {
  /*if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }*/

  const host = req.get('Host');
  const baseUrl = req.protocol + '://';

  if (req.url.indexOf('index.html') !== -1) {
    return res.redirect(301, baseUrl + host);
  }

  /*if (host.indexOf('www') !== -1) {
    return res.redirect(301, baseUrl + host.replace("www.",""));
  }*/

  /*if (/[A-Z]/.test(req.url)) {
    return res.redirect(301, baseUrl + host + req.url.toLowerCase());
  }*/

  /*if (req.url.substr(-1) === '/' && req.url.length > 1) {
    const url = req.url.substring(0, req.url.length -1);

    return res.redirect(301, baseUrl + host + url);
  }*/

  return next();
});

app.get('/*', (req: any, res: any) => {
    const location = req.path;
    let statusCode = 200;
    const host = req.get('Host');
    const baseUrl = req.protocol + '://';

    // @ts-ignore
    const currentRoute = Routes.find(route => matchPath(location, route)) || {};

    // @ts-ignore
    if (currentRoute.path === URL_HOME_LOCALIZED &&
        !supportsLanguage(req.params[0]) &&
        location !== URL_AUTH_GOOGLE_REDIRECT &&
        location !== URL_HOME
    ) {
        return res.redirect(301, baseUrl + host + '/' + defaultLanguage + req.url);
    }

    if (Object.keys(currentRoute).length === 0 && currentRoute.constructor === Object) {
        const urlParts = req.url.split('/');
        const lang = urlParts[1];

        if (!supportsLanguage(lang)) {
            return res.redirect(301, baseUrl + host + '/en' + req.url);
        }

        statusCode = 404;
    }

    renderPage(req, res, statusCode);
});

https.createServer({
    key: fs.readFileSync(path.resolve(process.cwd(), 'build/server/travelix.io.key')),
    cert: fs.readFileSync(path.resolve(process.cwd(), 'build/server/www_travelix_io.crt')),
    ca: [
        fs.readFileSync(path.resolve(process.cwd(), 'build/server/SectigoRSADomainValidationSecureServerCA.crt')),
        fs.readFileSync(path.resolve(process.cwd(), 'build/server/USERTrustRSAAAACA.crt'))
    ]
}, app).listen(443, () => {
    console.log('Prod https server is running on port 443')
});

app.listen(80,() => {
    console.log('Prod http server is running on port 80')
});

function serveStaticFile(res: any, file: string, contentType: string) {
    const filePath = path.resolve(process.cwd(), 'build/client/' + file);
    fs.readFile(filePath, 'utf8', (err: any, data: any) => {
        if (!err) {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': data.length
            });
            res.end(data);
        }
    });
}

function _500error(res: any, err: any) {
    console.error('Something went wrong:', err);

    return res.status(500).render('error', {statusCode: 500, title: 'Internal server error!', errorClass: 'bg-info', description:'Something bad happened. Please try again later, service is tired.', content: 'Internal server error!'});
}

function isPublicPage(req: any): boolean {
    // return req.url === '/';

    return false;
}

function renderPage(req: any, res: any, statusCode: number) {
    const location = req.url;
    let render = '';

    const indexFile = path.resolve(process.cwd(), 'build/client/index.html');
    fs.readFile(indexFile, 'utf8', (err: any, indexData: any) => {
        if (err) {
            return _500error(res, err);
        }

        if (statusCode === 404) {
            return res.status(statusCode).render('error', {statusCode, title: 'Page is not found', errorClass: 'bg-primary', description:'Page is not found, please try another one', content: 'The page you’re looking for was not found.'});
        }

        /*if (location) {
            return res.redirect(301, location);
        }*/

        if (isPublicPage(req)) {
            const store = createStore((state = []) => state);

            render = renderApp({store, location});
            indexData = indexData.replace('<div id="app"></div>', `<div id="app">${render}</div>`);
        }

        const helmet = Helmet.renderStatic();
        return res.send(indexData.replace('<title></title>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`));
    });
}
