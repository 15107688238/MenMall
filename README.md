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

#### 2.1. navbar的封装和使用

- 封装navbar包含三个插槽：left、center、right
- 设置navbar相关的样式
- 使用navbar实现首页的导航栏

#### 2.2. 请求首页数据

- 封装请求首页更多数据
- 将banner数据放在banners变量中
- 将recommend数据放在recommends变量中



#### 2.3. 根据Swiper封装HomeSwiper

- 使用Swiper和SwiperItem
- 传入banners进行展示
