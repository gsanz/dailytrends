import mongoose, { Document, Schema } from 'mongoose';
import { IFeed } from '../interfaces/IFeed';

//EXPORT INTERFACE WITH MONGOOSE DOCUMENT
export interface IFeedModel extends IFeed, Document {}

//DEFINE USER SCHEMA
const FeedSchema: Schema = new Schema(
    {
        feedName: {
            type: String,
            default: '',
        },
        feedDescription: {
            type: String,
            default: '',
        },
        feedSource: {
            type: String,
            default: '',
        },
        feedDate: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

//EXPORT
export default mongoose.model<IFeedModel>('Feed', FeedSchema);