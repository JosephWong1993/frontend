//API Server
import express from 'express';
import cors from 'cors';

import config = require("./config.json")
import router = require('./routers/api')

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

app.use('/api/', router);

app.listen(config.port, () => {
    console.log(`API Server is on ${config.port}...`);
});