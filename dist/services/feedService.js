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
exports.countFeeds = exports.findFeeds = exports.insertFeeds = void 0;
const feed_1 = __importDefault(require("../repository/feed"));
const general_1 = require("../utils/general");
function insertFeeds(header, description, dataSource, date) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield feed_1.default.create(header, description, dataSource, date);
    });
}
exports.insertFeeds = insertFeeds;
function findFeeds(page, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield feed_1.default.find((0, general_1.pageOptions)(page, limit));
    });
}
exports.findFeeds = findFeeds;
function countFeeds() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield feed_1.default.count();
    });
}
exports.countFeeds = countFeeds;
module.exports = { insertFeeds, findFeeds, countFeeds };
