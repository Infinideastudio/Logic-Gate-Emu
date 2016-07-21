#ifndef LGEMU_NETWORK_H
#define LGEMU_NETWORK_H
#include <uv.h>

class NetworkManager {
public:
    NetworkManager(const char *addr,int port);
private:
    uv_tcp_t *m_socket;
};

#endif //LGEMU_NETWORK_H
