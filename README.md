## foxtrel 
> 前后端集成解决方案,开箱即用

## foxtrel 功能点
*  脚手架,自动生成功能
*  项目自动构建工具功能
*  项目本地服务功能

## 安装使用
```
npm install -g foxtrel 
// 安装项目
foxtrel install 模板名称       //如: foxtrel install foxtrel-generater-webapp
//你的项目目录
cd your package dirname
//安装模块
npm install
//编译项目
foxtrel release
//开启本地服务,进行调试
foxtrel server 启动文件    //如 foxtrel server output/server.js
//访问 http://localhost:3110
```
注:如有权限问题,使用`sudo foxtrel <command>`。   
  项目Mac上可以完美运行，Windows暂时没测，嘿嘿;

## 项目生成

### 脚手架技术选型
* gulp 基于gulp自动化构建工具,生成项目。
* commander 命令行辅助工具,更好的处理用户输入。
* co 异步流程控制工具。
* inquirer 提供一个提问界面和查询会话流程。
* package-json 包更新检测功能。

### 自定义项目结构和API使用
[自定义项目结构说明](https://github.com/qzhongyou/foxtrel-generater-webapp/blob/master/README.md)


## 编译构建
> 基于webpack静态模块打包器,进行项目构建。根据用户配置信息加载不同的处理器,进行编译构建。
### 自定义配置
> 默认读取配置文件`foxtrel.config.js`。通过`foxtrel release -f,--file 项目名称`,修改默认文件。
* 项目类型配置
根据项目类型,将选择不同编译器进行编译。`foxtrel.config.set('type', 'react');`
* 项目名称配置
根据项目名称,生成编译输出地址`foxtrel.config.set('name', 'projectName');`
* webpack配置
**处理器会提供默认配置**,我们可以修改默认配置。如:`foxtrel.config.set('webpack.output.path',__dirname+"/dist")`。注意,设置
`output.path`后,编译输出地址将为当前地址,而不是根据项目名称的地址。
等等。。。。

### 功能点
* watch 监听文件变化,提供watch功能。`foxtrel release -w`
* clean 清除编译输出的缓存文件。    `foxtrel release -c`
* open 打开编译输出目录。          `foxtrel release open`

## 服务启动
* 支持多进程/集群的本地服务
* 支持服务端ES6编程
* 支持服务端自动刷新
* 支持客户端（浏览器）自动刷新  todo



## todo
* React项目热更新
* 客户端自动刷新
* 提供后端框架
* 提供单元测试






