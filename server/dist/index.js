"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./route/routes"));
const db_1 = __importDefault(require("./db/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + "/../.env" });
const app = (0, express_1.default)();
const port = process.env["PORT "] || 2000;
const mongodbUrl = process.env["MONGODB_URI"];
// check if the env is set, remember to delete this
console.log(process.env[`MONGODB_URI`]);
//medeware
app.use((0, cors_1.default)());
app.use("/", routes_1.default);
app.listen(port, () => {
    (0, db_1.default)(mongodbUrl);
    console.log("app is listenig on port 2000");
});
