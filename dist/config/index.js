"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaults = {
    PORT: 3000,
    TMDB_API_KEY: "17ffeed51af342618629bcf28529643b"
};
const config = Object.entries(defaults).reduce((config, [key, value]) => {
    config[key] = process.env[key] || value;
    return config;
}, {});
exports.default = config;
