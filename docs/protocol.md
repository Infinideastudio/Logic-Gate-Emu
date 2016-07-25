# 前后端数据传输协议

注：所有返回的type为名称+ret, 如loginbytoken的返回的type为loginbytokenret

| 名称         | 参数              | 返回值                   | 描述               | 实现      |
| ---------- | --------------- | --------------------- | ---------------- | ------- |
| setname    | name            | 无                     | 设置名称             | 7/25/16 |
| getscore   | token           | success, token, score | 获得分数。token可为空。   | 7/25/16 |
| bindtoken  | token, password | success               | 使token关联password |         |
| findtoken  | password        | token                 | 用password找回token |         |
| join       | 无               | roomid                | 加入房间             |         |
| getroom    | roomid          | mapid, players        | 获得房间信息           |         |
| getmap     | mapid           | mapdata               | 获得地图             |         |
| getmodule  | moduleid        | moduledata            | 获得模块             |         |
| serverinfo | 无               | nplayers              | 获得在线玩家数量         |         |

