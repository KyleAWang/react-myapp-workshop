/**
 * Created by Kyle on 12/1/2016.
 */
const path = require('path');

module.exports = function (app) {
    var users = require(path.resolve('server/controllers/users/users.authentication.server.controller'));
    app.route('/api/auth/signup').post(users.signup);
    app.route('/api/auth/signin').post(users.signin);
    app.route('/api/auth/signout').get(users.signout);
};
