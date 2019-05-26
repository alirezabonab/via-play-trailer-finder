"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const ramda_1 = require("ramda");
const config_1 = __importDefault(require("../config"));
exports.pickId = (data) => ramda_1.compose(ramda_1.path(["id"]), ramda_1.head, ramda_1.flatten, ramda_1.values)(data);
exports.getMovieInfoURL = (imdbId) => `https://api.themoviedb.org/3/find/${imdbId}?api_key=${config_1.default.TMDB_API_KEY}&language=en-US&external_source=imdb_id`;
exports.getMovieId = (imdbId) => request_promise_1.default(exports.getMovieInfoURL(imdbId))
    .then(JSON.parse)
    .then(exports.pickId);
exports.pickVideos = (data) => ramda_1.compose(ramda_1.map((videoData) => `https://www.youtube.com/watch?v=${videoData.key}`), ramda_1.path(["results"]))(data);
exports.getMovieVideosURL = (tmdbId) => `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${config_1.default.TMDB_API_KEY}&language=en-US`;
exports.getMovieVideos = (tmdbId) => request_promise_1.default(exports.getMovieVideosURL(tmdbId))
    .then(JSON.parse)
    .then(exports.pickVideos);
