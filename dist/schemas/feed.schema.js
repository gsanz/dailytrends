"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeedSchema = exports.CreateFeedSchema = void 0;
const zod_1 = require("zod");
exports.CreateFeedSchema = zod_1.z.object({
    body: zod_1.z.object({
        feedName: zod_1.z.string().nonempty(),
        feedDescription: zod_1.z.string().nonempty(),
        feedSource: zod_1.z.string().nonempty(),
        feedDate: zod_1.z.string().nonempty(),
    }),
});
exports.UpdateFeedSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        price: zod_1.z.number().nonnegative().optional(),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string().min(3),
    }),
    query: zod_1.z.object({
        title: zod_1.z.string(),
    }),
});
