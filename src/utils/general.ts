import { pagination } from '../interfaces/pagination';
import { Response } from '../interfaces/responseInterface';

//SEND RESPONSE FOR LIST
const jsonAll = function <Res>(
    res: any,
    status: number,
    data: Res | Array<Res>,
    meta: Object = {}
): Response<Res> {
    return res.status(status).json({
        data: data,
        meta: {
            ...meta,
        },
    });
};

//SEND RESPONSE FOR DETAIL
const jsonOne = function <Res>(res: any, status: number, data: Res): Res {
    return res.status(status).json({
        data,
    });
};


const pageOptions = function (page?:number,limit?:number):pagination{
  return  {
    page: page || 1,
    limit: limit || 10,
  };
}

//EXPORT
export { jsonAll, jsonOne, pageOptions };