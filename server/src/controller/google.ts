import passport from "passport"

//straties


const GoogleStrategy = require('passport-google-oauth20').Strategy;


//strategies config

//GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: "161165475594-olso0o49a0dibh391f2aha8cf47dk7nf.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:2000/auth/github/callback"
  },
  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    console.log(profile)
  }
));


//GitHubStrategy
passport.use(new GitHubStrategy({
    clientID: "da57dd355874c6f4790b",
    clientSecret: "c049e291855f3f7ebce2b04c8b612437d3730096",
    callbackURL: "http://localhost:2000/auth/github/callback"
  },
  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    console.log(profile)
  }
));
