"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport, from;
"passport";
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express_1.default.Router();
passport.use(new GoogleStrategy({
    clientID: "161165475594-olso0o49a0dibh391f2aha8cf47dk7nf.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:2000/auth/google/callback",
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    cb(null, profile);
}));
router.route('/auth/google').get(passport.authenticate('google', { scope: ['profile'] }));
router.route("/auth/google/callback").get(passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    console.log("");
    res.send("successful");
});
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send('Dashboard');
    }
    else {
        res.redirect('/login');
    }
});
exports.default = Router;
