import passport from "passport";
const GitHubStrategy = require('passport-github2').Strategy;
passport.use(new GitHubStrategy({
    clientID: "da57dd355874c6f4790b",
    clientSecret: "c049e291855f3f7ebce2b04c8b612437d3730096",
    callbackURL: "http://localhost:2000/auth/github/callback"
  },
  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    console.log(profile)
  }
));