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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeeds = exports.createFeed = void 0;
const general_1 = require("../utils/general");
const feedService_1 = require("../services/feedService");
const createFeed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { feedName, feedDescription, feedSource, feedDate } = req.body;
        const savedFeed = yield (0, feedService_1.insertFeeds)(feedName, feedDescription, feedSource, feedDate);
        return (0, general_1.jsonOne)(res, 201, savedFeed);
    }
    catch (error) {
        next(error);
    }
});
exports.createFeed = createFeed;
const getAllFeeds = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pageOptions = {
            page: Number(req.query.page) || 1,
            limit: Number(req.query.limit) || 10,
        };
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        //const count = await Feed.countDocuments({});
        const count = yield (0, feedService_1.countFeeds)();
        let feeds = yield (0, feedService_1.findFeeds)(page, limit);
        const meta = {
            total: count,
            limit,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        };
        return (0, general_1.jsonAll)(res, 200, feeds, meta);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllFeeds = getAllFeeds;
