#ifndef LGEMU_PLAYER_H
#define LGEMU_PLAYER_H

#include <uv.h>
#include <string>
#include <json11.hpp>

class Player {
public:
    Player(uv_tcp_t *socket);
private:
    uv_tcp_t *m_socket;
    void sendJson(json11::Json &&json);
    void sendRaw(const char *data,size_t len);
    void sendRaw(std::string &data);
};


#endif //LGEMU_PLAYER_H
