"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailVerification = exports.login = exports.register = void 0;
const auth_1 = __importDefault(require("../modal/auth"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validator_1 = __importDefault(require("validator"));
const nodemailer_1 = __importDefault(require("nodemailer"));
/*import passport from 'passport';
import LocalStrategy from "passport-local";
*/
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = yield req.body;
    if (!email || !password) {
        res.send({ message: "email and password is required" });
    }
    else {
        const validate = yield validator_1.default.isEmail(email);
        if (validate) {
            try {
                const UserExist = yield auth_1.default.findOne({ email });
                if (UserExist) {
                    res.send({ message: "user with this email already exist" });
                }
                else {
                    const newUser = auth_1.default.create(Object.assign({}, req.body));
                    const token = yield jsonwebtoken_1.default.sign({
                        email: email,
                    }, "JwtSecrete", {
                        expiresIn: "1h"
                    });
                    res.status(200).send({
                        token
                    });
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            res.send({
                message: "Invalid email"
            });
        }
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send({
            message: "Email and password is required"
        });
    }
    else {
        try {
            const user = yield auth_1.default.findOne({ email });
            if (user) {
                const passwordMatch = yield bcryptjs_1.default.compare(password, user.password);
                if (passwordMatch) {
                    const token = yield jsonwebtoken_1.default.sign({ email: email }, "JwtSecrete", { expiresIn: "1h" });
                    res.status(200).send({
                        email, token
                    });
                }
                else {
                    res.send({
                        message: "incorrect password"
                    });
                }
            }
            else {
                res.send({ message: "this email doesn't exist" });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.login = login;
const emailVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = yield req.body;
    const user = yield auth_1.default.findOne({ email });
    if (user) {
        const encryptedToken = yield bcryptjs_1.default.hash(user.email.toString(), 8);
        const jwtToken = jsonwebtoken_1.default.sign({ userId: user._id }, "JwtSecrete", {
            expiresIn: "60m",
        });
        const testaccount = yield nodemailer_1.default.createTestAccount();
        const transporter = nodemailer_1.default.createTransport({ host: "smtp.ethereal.email", port: 587,
            secure: false,
            auth: {
                user: testaccount.user,
                pass: testaccount.pass
            }
        });
        const mailOptions = {
            from: testaccount.user,
            to: 'promiseemosivbe43@gmail.com',
            subject: 'authentication-app',
            text: 'emailVerification enter maill'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                console.log("error");
            }
            else {
                console.log("sending");
                res.send('Email sent: ' + info.response);
                // do something useful
            }
        });
    }
});
exports.emailVerification = emailVerification;
