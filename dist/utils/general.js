"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageOptions = exports.jsonOne = exports.jsonAll = void 0;
//SEND RESPONSE FOR LIST
const jsonAll = function (res, status, data, meta = {}) {
    return res.status(status).json({
        data: data,
        meta: Object.assign({}, meta),
    });
};
exports.jsonAll = jsonAll;
//SEND RESPONSE FOR DETAIL
const jsonOne = function (res, status, data) {
    return res.status(status).json({
        data,
    });
};
exports.jsonOne = jsonOne;
const pageOptions = function (page, limit) {
    return {
        page: page || 1,
        limit: limit || 10,
    };
};
exports.pageOptions = pageOptions;
