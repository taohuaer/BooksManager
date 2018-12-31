###  项目依赖介绍
基于Express框架搭建服务器，views采用的是art-template规范渲染数据，使用express-art-template整合express和art-template，并使用第三方中间件bod-parser来处理express中post请求中获得请求体

### 使用
下载项目，进入bookmanager文件夹下执行下面代码：
```js
npm install 
node index.js
```

### 注意点
#### res.render()方法
res对象本身是没有rander()方法的，当配置了express-art-template才给其添加此方法，第一个参数是你要渲染的页面（views目录下相对路径）,第二个参数是你要渲染上的数据（一定要json格式）
```js
    res.render('index', { list: data })
```
#### 静态资源加载
```js
app.use('/www', express.static('public')); //加一个虚拟路径www
```