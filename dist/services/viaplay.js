"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const ramda_1 = require("ramda");
exports.pickIMDB = ramda_1.path(["_embedded", "viaplay:product", "content", "imdb"]);
exports.getMovieInfo = (viaplayURL) => request_promise_1.default(viaplayURL)
    .then(JSON.parse)
    .then(exports.pickIMDB);
