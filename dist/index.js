"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const feeds_routes_1 = __importDefault(require("./routes/feeds.routes"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.default.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    console.log('Connected to mongoDB.');
})
    .catch((error) => {
    console.error('Unable to connect.');
});
app.use(express_1.default.json());
app.use(feeds_routes_1.default);
app.listen(config_1.default.server.port);
console.log("Server on port", config_1.default.server.port);
