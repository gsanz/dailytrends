import { pagination } from '../interfaces/pagination';
import Feed, { IFeedModel } from '../models/feed';
export default class feedRepository{
    
  static async create(feedName:string,feedDescription:string,feedSource:string,feedDate:string): Promise<IFeedModel>
  {
      let feed = new Feed({
        feedName,
        feedDescription,
        feedSource,
        feedDate
      });
      let savedFeed = await feed.save();
      return savedFeed;
     
  }

  static async find(pageOptions:pagination):Promise<IFeedModel[]>{
    return await Feed.find()
    .limit(pageOptions.limit * 1)
    .skip((pageOptions.page - 1) * pageOptions.limit)
    .sort({ createdAt: -1 });
  }

  static async count():Promise<number>{
    return await Feed.countDocuments()
  }



}