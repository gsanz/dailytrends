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
const feed_1 = __importDefault(require("../models/feed"));
class feedRepository {
    static create(feedName, feedDescription, feedSource, feedDate) {
        return __awaiter(this, void 0, void 0, function* () {
            let feed = new feed_1.default({
                feedName,
                feedDescription,
                feedSource,
                feedDate
            });
            let savedFeed = yield feed.save();
            return savedFeed;
        });
    }
    static find(pageOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield feed_1.default.find()
                .limit(pageOptions.limit * 1)
                .skip((pageOptions.page - 1) * pageOptions.limit)
                .sort({ createdAt: -1 });
        });
    }
    static count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield feed_1.default.countDocuments();
        });
    }
}
exports.default = feedRepository;
