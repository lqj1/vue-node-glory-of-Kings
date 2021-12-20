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
