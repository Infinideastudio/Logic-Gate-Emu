#include <cstring>
#include "telnet.h"
#include "globaluv.h"
#include "logio.h"

using namespace Logio;

void Telnet::init(const char *addr,int port)
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
        int *namelen = nullptr;
        //sockaddr_in *name = nullptr;
        //uv_tcp_getpeername(client, (sockaddr*)name,namelen);
        //cout << name->sin_addr.s_addr << ':' <<name->sin_port << " connected to server via telnet!";
        //delete namelen;
        //delete name;
        cout << "Someone connected to server via telnet!" << endl;
        uv_write_t req;
        uv_buf_t bufs;
        bufs.base = const_cast<char*>("\033[1;31mHello,world!\n\033[0;32mIt will be very interesting.");
        bufs.len = strlen(bufs.base);
        uv_write(&req,uv_tostream(client),&bufs,1,[](uv_write_t *req,int status) {});
    });
}
