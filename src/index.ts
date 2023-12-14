import express from "express";
import mongoose from 'mongoose';
import feedRoutes from './routes/feeds.routes'
import config from "./config/config";

const app = express();

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
      console.log('Connected to mongoDB.');
    })
    .catch((error) => {
      console.error('Unable to connect.');
    })
    
app.use(express.json());
app.use(feedRoutes)
app.listen(config.server.port);
console.log("Server on port", config.server.port);