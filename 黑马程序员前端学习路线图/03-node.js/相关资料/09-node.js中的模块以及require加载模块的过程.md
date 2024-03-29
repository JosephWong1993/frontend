

# node.js 模块

在 node.js 开发中一个文件就可以认为是一个模块。


## 一、node.js 模块分类

### 核心模块 Core Module、内置模块、原生模块
- fs
- http
- path
- url
- ...

所有内置模块在安装node.js的时候就已经编译成 二进制文件，可以直接加载运行（速度较快）
部分内置模块，在 node.exe 这个进程启动的时候就已经默认加载了，所以可以直接使用。





### 文件模块
#### 按文件后缀来分
如果加载时，没有指定后缀名，那么就按照如下顺序依次加载相应模块
1. .js
2. .json
3. .node（C/C++编写的模块）

<!-- require('./a.node') -->




### 自定义模块（第三方模块）
- mime
- cheerio
- moment
- mongo
- ...




## 二、require 加载模块顺序

1. 看 require() 加载模块时传入的参数是否以 './' 或 '../' 或 '/' 等等这样的路径方式开头（相对路径或绝对路径都可以）

2. 是，那么会按照传入的路径直接去查询对应的模块。
- 传入的是否为具体的文件名
  + require('./test.js') 是具体的文件名
    * 直接根据给定的路径去加载模块，找到了加载成功，找不到加载失败

  + require('./test'); 不是具体的文件名、
    * 第一步：根据给定的路径，依次添加文件后缀 .js、.json、.node进行匹配，如果找不到匹配执行第二步
    * 第二步：查找是否有 test 目录（尝试找 test 包）
      - 找不到：加载失败
      - 找到了：依次在 test 目录下查找 package.json 文件（找到该文件后尝试找 main 字段中的入口文件）、index.js、index.json、index.node，找不到则加载失败

3. 不是，那么就认为传入的是 "模块名称"（比如：require('http')、require('mime')）
- 是核心模块：直接加载核心模块
- 不是核心模块
  + 依次递归查找 node_modules 目录中是否有相应的包
    - 从当前目录开始，依次递归查找所有父目录下的 node_modules 目录中是否包含相应的包
    - 如果查找完毕磁盘根目录依然没有则加载失败
    - 打印输入 module.paths 查看


```javascript
// require('http')
// require('mime')


// 情况一：require() 的参数是一个路径
require('./index2.js')

// index2.js
// index2.json
// index2.node
// index2 文件夹 -> package.json -> main(入口文件 app.js -> index.js/index.json/index.node) -> 加载失败
require('ndex2')

// 情况二： require() 的参数不是路径，直接就是一个模块名称
// 1. 先在核心模块中查找，是否有和给定的名字一样的模块。如果有，则直接加载该核心模块。
// require('http')

// 2. 如果核心模块中没有该模块那么就会认为这个模块是一个第三方模块（自定义模块）
// 先会去当前js文件所在的目录下去找是否一个一个 node_modules 文件夹
// require('mime')
```



### require 加载模块注意点
1. 所有模块第一次加载完毕后都会有 缓存，二次加载直接读取缓存，避免了二次开销
  - 因为有缓存，所以模块中的代码只在第一次加载的时候执行一次

2. 每次加载模块的时候都优先从缓存中加载，缓存中没有的情况下才会按照 node.js 加载模块的规则去查找

3. 核心模块在 Node.js 源码编译的时候，都已经编译为二进制执行文件，所以加载速度较快（核心模块加载的优先级仅次于 缓存加载）
4. 核心模块都保存在 lib 目录下
5. 试图加载一个和 核心模块 同名的 自定义模块（第三方模块）是不会成功的
  + 自定义模块要么名字不要与核心模块同名
  + 要么使用路径的方式加载

6. 核心模块 只能通过 模块名称 来加载（错误示例：require('./http'); 这样是无法加载 核心模块 http的 ）
7. require() 加载模块使用 ./ 相对路径时，相对路径是相对当前模块，不受执行 node 命令的路径影响
8. 建议加载文件模块的时候始终添加文件后缀名，不要省略。




## 三、补充 CommonJS 规范
1. [CommonJS 规范](http://www.commonjs.org/)
2. [模块的定义](http://www.commonjs.org/specs/modules/1.0/)
3. 总结：CommonJS 是为 JavaScript 语言制定的一种 模块规范、编程 API规范
4. node.js 遵循了 CommonJS规范




## 关于 node.js 中 Module 详细介绍
- [Module](https://nodejs.org/dist/latest-v6.x/docs/api/modules.html)


