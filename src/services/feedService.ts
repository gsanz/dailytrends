import { feedsElPais,feedsElMundo } from "../lib/scrapping";
import { IFeedModel } from "../models/feed";
import feedRepository from "../repository/feed";
import { feedInfo } from "../types/feedInfo";
import { pageOptions } from "../utils/general";

export default class feedService{

static async  insertFeeds(header:string,description:string,dataSource:string,date:string): Promise<IFeedModel>{
    return await feedRepository.create(header,description,dataSource,date)
  }

  static async getReadFeeds():Promise<feedInfo> {
    const feedsELPais = await feedsElPais();
    const feedsELMundo = await feedsElMundo();
    return { elPais: feedsELPais, elMundo: feedsELMundo };
}

  static async findFeeds(page?:number,limit?:number): Promise<IFeedModel[]>{
    return await feedRepository.find(pageOptions(page,limit))
  }

  static async countFeeds(): Promise<number>{
    return await feedRepository.count()
  }  

}
