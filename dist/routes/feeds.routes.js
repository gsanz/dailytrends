"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feed_controller_1 = require("../controllers/feed.controller");
const router = (0, express_1.Router)();
router.post("/feeds", feed_controller_1.createFeed);
router.post("/feeds/all", feed_controller_1.getAllFeeds);
exports.default = router;
