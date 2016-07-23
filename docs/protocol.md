# 前后端数据传输协议

| 名称        | 参数              | 返回值                 | 描述               |
| --------- | --------------- | ------------------- | ---------------- |
| Login     | token           | success,token,score | 登录。token为空表示新用户。 |
| Register  | token, password | success             | 使token关联password |
| FindToken | password        | token               | 用password找回token |
| Join      | 无               | room id             | 加入房间             |
| GetRoom   | room id         | map id, players     | 获得房间信息           |
| GetMap    | map id          | map data            | 获得地图             |
| GetModule | module id       | module data         | 获得模块             |

