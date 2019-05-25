"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const cluster_1 = __importDefault(require("cluster"));
const numCPUs = require("os").cpus().length;
if (cluster_1.default.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster_1.default.fork();
    }
}
else {
    const PORT = process.env.PORT || 4000;
    app_1.default.listen(PORT, () => {
        console.log("listening on port " + PORT);
    });
}
