#ifndef LGEMU_TELNET_H
#define LGEMU_TELNET_H
#include "gateway.h"
#include <uv.h>

class Telnet : Gateway
{
public:
    void init(const char *addr,int port);
private:
    uv_tcp_t *m_socket;
};

#endif //LGEMU_TELNET_H
