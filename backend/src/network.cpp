#include "network.h"
#include <cstring>
#include "globaluv.h"
#include "logio.h"
#include "player.h"
#include "main.h"

using namespace Logio;

NetworkManager::NetworkManager(const char *addr, int port)
{
    m_socket = new uv_tcp_t;
    uv_tcp_init(defloop,m_socket);
    sockaddr_in dest;
    uv_ip4_addr(addr,port, &dest);
    uv_tcp_bind(m_socket, (sockaddr*)&dest,0);
    uv_listen(uv_tostream(m_socket), 128, [](uv_stream_t* socket,int status)
    {
        uv_tcp_t *client = new uv_tcp_t;
        uv_tcp_init(defloop,client);
        uv_accept(socket, uv_tostream(client));
        Player *p = new Player(client);
        g->joinGame(p);
    });
}