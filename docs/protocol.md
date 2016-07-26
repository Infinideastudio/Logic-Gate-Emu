# 前后端数据传输协议

## 客户端主动发送数据包
注：所有返回的type为名称+ret, 如loginbytoken的返回的type为loginbytokenret

| 名称        | 参数              | 返回值                   | 描述               | 实现      |
| --------- | --------------- | --------------------- | ---------------- | ------- |
| login     | name            | roomid                | 登录并返回分配到的房间      |         |
| getscore  | token           | success, token, score | 获得分数，token可为空    | 7/25/16 |
| bindtoken | token, password | success               | 使token关联password |         |
| findtoken | password        | token                 | 用password找回token |         |
| getroom   | roomid          | roominfo 或 `null`     | 获得房间信息           |         |
| join      | 无               | roomid                | 加入房间             |         |
| getmodule | moduleid        | moduledata            | 获得模块             |         |
## 服务端主动发送数据包
|            | 数据                 | 描述          | 实现      |
| ---------- | ------------------ | ----------- | ------- |
| serverinfo | nplayer, maxplayer | 发送目前人数和最大人数 | 7/25/16 |

## 协议参数与结构补充

```
object player{
    string name
    number score
}

object roominfo{
    string name
    string map
    player[] players
    status stat
}

enum status{
    1 = waiting
    2 = playing
}

bool success
string token
number roomid
number score
```