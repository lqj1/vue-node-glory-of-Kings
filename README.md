# vue-node-glory-of-Kings

使用 vue 和 node 开发王者荣耀相关的全栈项目

# 简介

## 项目结构

server: 服务端  
admin: 后台管理  
glory-of-kings: 前端

## 使用技术栈

前端(admin and glory-of-kings): vue2、element-ui、nodemon、router、axios

- nodemon 可以随时监听文件的变更，自动重启服务，我们开发时只需关注代码即可，不再需要手动重启服务

服务端(server): mongoDB、express
安装命令

```javascript
npm i express@next mongoose cors
```

- 其中 mongoose 用于连接数据库，cors 用于跨域请求
- mongodb-compass 用于可视化连接 mongodb

## ref

https://www.bilibili.com/video/BV1A4411Y7fi?p=4&spm_id_from=pageDriver

# 编程笔记

## server

进入 server, 在 node 项目中的初始化一般使用 `npm init -y`

## admin

使用`vue add element`导入 element-ui 组件

## 遇到的问题

- 安装 mongodb 的时候，不要选左下角的 compass，等安装完后再单独下载安装包安装，安装完之后提示 "MongoDB Server" failed to start，直接忽略，后面会解决。
- 安装 mongodb 之后，在服务中启动 Mongodb 会出现错误 1053
  - 首先清楚之前的数据库，`sc delete MongoDB`
  - 然后配置以下代码，路径根据自己安装的去修改，这里要先将 mongodb 的 bin 目录添加到系统环境变量中去，就可以不用在 bin 目录下执行 mongod 了。
    - `mongod --bind_ip 0.0.0.0 --logpath D:\MongoDB\Server\5.0\log\mongo.log --logappend --dbpath D:\MongoDB\Server\5.0\data\db --port 27017 --serviceName="MongoDB" --serviceDisplayName "MongoDB" --install`
