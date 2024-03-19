

# node.js 介绍

### node.js 是什么？

1. node.js 是一个开发平台，就像Java开发平台、.Net开发平台、PHP开发平台、Apple开发平台一样。
  - 何为开发平台？有对应的编程语言、有语言运行时、有能实现特定功能的API（SDK：Software Development Kit）
2. 该平台使用的编程语言是 JavaScript 语言。 
3. node.js 平台是基于 Chrome V8 JavaScript 引擎构建。
4. 基于 node.js 可以开发控制台程序（命令行程序、CLI程序）、桌面应用程序（GUI）（借助 node-webkit、electron 等框架实现）、Web 应用程序（网站）


PHP开发技术栈: LAMP - Linux Apache MySQL PHP

node.js 全栈开发技术栈: MEAN - MongoDB Express Angular Node.js


### node.js 有哪些特点？

1. 事件驱动(当事件被触发时，执行传递过去的回调函数)
2. 非阻塞 I/O 模型（当执行I/O操作时，不会阻塞线程）
3. 单线程
4. 拥有世界最大的开源库生态系统 —— npm。


### node.js 网站

1. [node.js官方网站](https://nodejs.org/)
2. [node.js中文网](http://nodejs.cn/)
3. [node.js 中文社区](https://cnodejs.org/)




### 为什么要学习Node.js?

1. 通过学习Node.js开发深入理解**服务器开发**、**Web请求和响应过程**、 **了解服务器端如何与客户端配合**
2. 学习服务器端渲染
3. 学习服务器端为客户端编写接口
4. 现在前端工程师面试，对 Node.js 开发有要求
5. 补充提问：
  - 在Node.js平台开发时，能使用Dom API吗？比如：`document.getElementById('id'); window.location 等`?
6. 复习 浏览器端 JavaScript 组成：ECMAscript、Dom、Bom



### 学习目标

1. 了解服务器开发过程
2. 会使用 node.js 开发基本的 http 服务程序（Web应用程序）




### Node.js安装和配置

1. 下载地址
  + [当前版本](https://nodejs.org/en/download/)
  + [历史版本](https://nodejs.org/en/download/releases/)

2. 官网术语解释
  + LTS 版本：Long-term Support 版本，长期支持版，即稳定版。
  + Current 版本：Latest Features 版本，最新版本，新特性会在该版本中最先加入。

3. 注意：
  + 安装完毕后通过命令：`node -v`来确定是否安装成功【注意：打开"命令窗口"的时候建议使用"管理员方式"打开】
  + 如果需要则配置环境变量。

![配置环境变量](assets/env_path.png)

4. 通过 nvm-windows 管理一台计算机上的多个 node 版本



### Node.js 开发 Web 应用程序 和 PHP、Java、ASP.Net等传统模式开发Web应用程序区别

1. **传统模式**
  - 有 Web 容器

![有Web容器开发模型](assets/Web.png)


2. **Node.js开发Web应用程序**
  - 没有 Web 容器

![Node.js无Web容器开发模型](assets/nodeWeb.png) 

3. 补充提问：
- 什么是动态网页？什么是静态网页？



