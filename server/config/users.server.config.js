/**
 * Created by Kyle on 11/23/2016.
 */
'use strict';

var passport = require('passport'),
    User = require('mongoose').model('User'),
    path = require('path');

module.exports = function (app, db) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({
            _id: id
        }, '-salt -password', function (err, user) {
            done(err, user);
        });
    });

    require(path.resolve('server/config/strategies/local'))();

    app.use(passport.initialize());
    app.use(passport.session());

};
