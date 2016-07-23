# 前后端数据传输协议

| 名称           | 参数              | 返回值                      | 描述               | 实现   |
| ------------ | --------------- | ------------------------ | ---------------- | ---- |
| loginbytoken | token           | success,token,score      | 登录               |      |
| register     | username        | token                    | 使用用户名新建一个账户      |      |
| bindtoken    | token, password | success                  | 使token关联password |      |
| findtoken    | password        | token                    | 用password找回token |      |
| join         | 无               | room id                  | 加入房间             |      |
| getroom      | room id         | map id, players          | 获得房间信息           |      |
| getmap       | map id          | map data                 | 获得地图             |      |
| getmodule    | module id       | module data              | 获得模块             |      |
| serverinfo   | 无               | number of online players | 获得在线玩家数量         |      |

