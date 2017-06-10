const express = require('express');
const graphQLHTTP = require('express-graphql');
const session = require('express-session');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const MongoStore = require('connect-mongo')(session);

const core = require(path.resolve('server/controllers/core.server.controller'));
const setup = require('./middlewares/frontendMiddleware');
const { schema } = require('../data/elegantSchema');
const logger = require('./logger');
const mongoose = require('../config/mongoose');
const config = require('./config/env/default');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;


if (cluster.isMaster){
  for(let i = 0; i < numCPUs; i++){
    cluster.fork();
  }

  cluster.on('exit', function () {
    console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);
    cluster.fork();
  });

}else{

  mongoose.connect((db) => {

    const app = express();

// Request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    app.use(cookieParser());
    app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret,
      cookie: {
        maxAge: config.sessionCookie.maxAge,
        httpOnly: config.sessionCookie.httpOnly,
      },
      key: config.sessionKey,
      store: new MongoStore({
        mongooseConnection: db.connection,
        collection: config.sessionCollection,
        auto_reconnect: true
      })
    }));

    app.use(flash());

    require(path.resolve('server/config/users.server.config.js'))(app);

    app.use('/graphql', graphQLHTTP({ schema, pretty: true, graphiql: true }));
    app.route('/:url(api)/*').get(core.renderNotFound);
    require(path.resolve('server/routes/auth.server.routes.js'))(app);

// In production we need to pass these values in instead of relying on webpack
    setup(app, {
      outputPath: resolve(process.cwd(), 'build'),
      publicPath: '/',
    });

// get the intended host and port number, use localhost and port 3000 if not provided
//     const customHost = argv.host || process.env.HOST;
//     const host = customHost || null; // Let http.Server use its default IPv6/4 host
//     const prettyHost = customHost || 'localhost';
//
//     const port = argv.port || process.env.PORT || 3000;

// Start your app.
    app.listen(config.port, config.host, (err) => {
      if (err) {
        return logger.error(err.message);
      }

      // Connect to ngrok in dev mode
      if (ngrok) {
        ngrok.connect(config.port, (innerErr, url) => {
          if (innerErr) {
            return logger.error(innerErr);
          }

          logger.appStarted(config.port, config.prettyHost, url);
        });
      } else {
        logger.appStarted(config.port, config.prettyHost);
      }
    });
  });

}

