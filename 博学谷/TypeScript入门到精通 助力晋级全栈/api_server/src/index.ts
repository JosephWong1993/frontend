//API Server
import express from 'express';
import cors from 'cors';
import config = require("./config.json");
import * as db from "./models2/index";
db.init();
const app = express();

app.use(async (req, res, next) => {
    console.log(`received ${req.method} : ${req.path}`);
    await next();
})

//处理跨域
app.use(cors())
//处理json数据
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//静态资源文件处理
app.use(express.static('./static'));

// app.get('/*', (req, res, next) => {
//     res.send("hello world.\n");
// });

// app.use('/api/', require("./routers/api"));
app.use('/api/', require("./routers/api2"));

app.listen(config.port, () => {
    console.log(`API Server is on ${config.port}...`);
});