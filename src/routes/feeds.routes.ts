import { Router } from "express";
import feedController from "../controllers/feed.controller";
;


const router = Router();

router.post("/feeds", feedController.createFeed);
router.post("/feeds/all",feedController.getAllFeeds);


export default router;