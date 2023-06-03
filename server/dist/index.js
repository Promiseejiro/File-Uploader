"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const session = require("express-session");
const passport_1 = __importDefault(require("passport"));
const routes_1 = __importDefault(require("./route/routes"));
const db_1 = __importDefault(require("./db/db"));
const port = 2000;
const app = (0, express_1.default)();
//medewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(session({
    secret: "promise",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/", routes_1.default);
app.listen(port, () => {
    (0, db_1.default)("mongodb+srv://promise:4128@cluster0.x9stvxh.mongodb.net/");
    console.log('Server started on port 2000');
});
