"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const controller = __importStar(require("../controller/auth"));
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
passport_1.default.use(new TwitterStrategy({
    consumerKey: "u6HMvVjImWdPDihxsC3tgoDBw",
    consumerSecret: "Y0vQXohP3GqB22e8F2eoRNKMatDlf08JxcVmv5Ot9gh3lXFZZz",
    callbackURL: "http:localhost:2000/auth/twitter/callback"
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
}));
passport_1.default.use(new GitHubStrategy({
    clientID: "825885645825104",
    clientSecret: "a936689eccac41474f0aace2a8f05f2e",
    callbackURL: "http://localhost:2000/auth/github/callback"
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
}));
passport_1.default.use(new FacebookStrategy({
    clientID: "640549644612277",
    clientSecret: "eaa49820ff8ff4918c4d55e49a14de91",
    callbackURL: "http://localhost:2000/auth/facebook/callback",
    passReqToCallback: true,
    // profileFields: ['emails']
}, function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log("successful");
}));
//strategies
require("../controller/google");
const router = express_1.default.Router();
///GitHub 
router.route('/auth/github').get(passport_1.default.authenticate('github'));
router.route('/auth/github/callback').get(passport_1.default.authenticate('github', { failureRedirect: '/NotFound',
    successRedirect: '/success',
}));
//twitter 
router.route('/auth/twitter').get(passport_1.default.authenticate('twitter'));
router.route('/auth/twitter/callback').get(passport_1.default.authenticate('twitter', { failureRedirect: '/NotFound',
    successRedirect: '/success', }));
//google
router.route("/auth/google").get(passport_1.default.authenticate('google', { scope: ['email', 'profile'] }));
router.route("/auth/google/callback").get(passport_1.default.authenticate('google', {
    failureRedirect: '/NotFound',
    successRedirect: '/success',
}));
//Facebook 
router.route('/auth/facebook').get(passport_1.default.authenticate('facebook'));
router.route('/auth/facebook/callback').get(passport_1.default.authenticate('facebook', {
    failureRedirect: '/NotFound',
    successRedirect: '/success',
}));
//GitHub end 
//strategies 
router.route("/register").post(controller.register);
router.route("/login").post(controller.login);
router.route("/verify").post(controller.emailVerification);
router.route("/NotFound").post((req, res) => {
    res.send("no user found");
});
router.route("/success").get((req, res) => {
    res.send("successful login");
});
exports.default = router;
