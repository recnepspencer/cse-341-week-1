"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const envFile = `.env.${process.env.NODE_ENV}`;
dotenv_1.default.config({ path: envFile });
const app = (0, express_1.default)();
app.use('/', routes_1.default);
exports.default = app;
