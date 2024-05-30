# hina-project

> 我只是想做个在线资料收集(online data collect)系统

> hina来自《神様になる日》（成神之日）女主角的名字。当然我已经知道她的真实名字了（麻哥你别这样

## 项目结构

使用`SvelteKit`框架进行开发，样式使用`TailwindCSS`

## 安装使用

## 路由

* GET `/` 主页
* GET `/new` 新建表单
* GET `/edit` 输入将编辑的表单
* POST `/edit` 验证对应表单的存在，存在且可以编辑则进入编辑，不存在则报错
* GET `/edit/code/[code]` 如果正确跳转到`/edit/id/[id]`，否则显示错误
* GET `/edit/id/[id]` 编辑某个表单
* POST `/edit/id/[id]` 提交表单的编辑
* GET `/save/[id]` 保存某个表单
* GET `/publish/[id]` 发布某个表单
* GET `/fill/id/[id]` 填写某个表单

## 验证设计

由于表单系统存在就用一次的问题，没有必要一定弄个用户系统，我们决定这样设计：

* 使用生成唯一的随机字符作为凭证 （具体是使用4个五位字母的单词，有1860个，4组就是约120万亿个，这也太多了）
* 会根据此字符串查找对应的uuid

## 数据库设计
需要两张表，一张存表单的内容`sheet`，一张存表单结果`result`

#### `sheet`表设计

| name        | data_type | comments                 |
| ----------- | --------- | ------------------------ |
| id          | uuid      | pk                       |
| end_time    | datetime  |                          |
| published   | int       | 0=unpublish, 1=published |
| content     | text      |                          |
| visit_code  | varchar   |                          |
| create_time | datetime  |                          |

#### `result`表设计

| name        | date_type | comments     |
| ----------- | --------- | ------------ |
| id          | uuid      | pk           |
| sheet_id    | uuid      | fk(sheet id) |
| result_json | text      |              |
| create_time | datetime  |              |  