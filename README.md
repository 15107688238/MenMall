# menmall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 1.1. 目录结构

- network
- components -> common/content
- pages -> 路由分层
- common 
- assets
- router
- store

#### 1.2项目初始化
 + 配置vue.config.js,设置路径别名
 + 配置.editorconfig
 + 设置全局样式
  - normalize.css
  - base.css

#### 1.3tabbar的封装
 + 封装tabbar
 + 封装tabbarItem
 + 点击响应切换
 + 封装完成后，使用时对HYTabbar重新包装

#### 1.4. axios的封装

- 创建axios实例
- 拦截响应，返回.data数据
- 根据传入的options发送请求，并且调用对应resolve和reject
