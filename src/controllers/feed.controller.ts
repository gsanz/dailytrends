import { NextFunction, Request, Response } from "express";
import Feed, { IFeedModel } from '../models/feed';
import { jsonAll, jsonOne } from "../utils/general";
import { CreateFeedType } from "../schemas/feed.schema";
import feedService from "../services/feedService";

export default class feedController{

  static async createFeed  (
  req: Request<unknown, unknown, CreateFeedType>,
  res: Response,
  next: NextFunction
)  {
  try {
    const { feedName, feedDescription,feedSource, feedDate } = req.body;
    const savedFeed:IFeedModel = await feedService.insertFeeds(feedName, feedDescription,feedSource, feedDate)
    return jsonOne<IFeedModel>(res, 201, savedFeed);
  } catch (error) {
    next(error)
  }
};


static async getAllFeeds(req: Request, res: Response, next: NextFunction) {
  try {
    const page =  Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const count = await feedService.countFeeds();    
    let feeds:IFeedModel[] = await feedService.findFeeds(page,limit);

     const meta = {
      total: count,
      limit,
      totalPages: Math.ceil(count / limit),
      currentPage:page,
    };
    return jsonAll<any>(res, 200, feeds, meta);
  } catch (error) {
    next(error);
  }
}

}
