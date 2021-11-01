// 连接到mongodb
import mongo from 'mongoose';
import config = require('../config.json');

export const init = () => {
    mongo.connect(config.mongodbUrl, config.mongodbOptions);
    const conn = mongo.connection;
    conn.on("errir", (err) => {
        console.error("mongodb error:" + err.stack);
    });
    conn.on("connected", () => {
        console.log(`connected to mongodb [${config.mongodbUrl}]`);
    });
    conn.on("disconnected", () => {
        console.error(`disconnected to mongodb [${config.mongodbUrl}]`);
    });
}