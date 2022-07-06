# hina-project

> 我只是想做个在线资料收集(online data collect)系统

> hina来自《神様になる日》（成神之日）女主角的名字。当然我已经知道她的真实名字了（麻哥你别这样

## 依赖

放弃`koa`了，还是用[express](https://expressjs.com/)做中间件

使用`postgresql`做数据存储

使用`express-generator`生成的项目结构

## 路由

### GET

* `/` 主页
* `/users/signup` 注册用户
* `/users/signout` 退出登录
* `/form/create` 新建表单
* `/form/{id}/edit` 编辑对应id的表单
* `/form/{id}/fill` 查看对应id的表单
* `/form/{id}/result` 查看对应id表单的收集结果

### POST

* `/users/signup` 提交用户注册信息
* `/form/{id}/edit` 提交对应id的表单的修改
* `/form/{id}/fill` 提交对应id的表单的填写

### DELETE

* `/form/{id}` 删除对应id表单及收集结果