#include <cstring>
#include "player.h"
#include "globaluv.h"

using namespace json11;

static void write_cb(uv_write_t *req,int status)
{
    uv_buf_t *bufs = (uv_buf_t*)req->data;
    delete[] bufs->base;
    delete bufs;
}

Player::Player(uv_tcp_t *socket)
    :m_socket(socket)
{
    sendRaw("to qzr:glew big law good!",26);
    /*
    sendJson(std::move(Json::object {
            {"t","test"},
            {"to","qiaozhanrong"},
            {"msg","glew big law good!"},
    }));
    */ //Segmentation fault...wtf?
}

void Player::sendRaw(const char *data,size_t len)
{
    uv_write_t req;
    uv_buf_t *bufs = new uv_buf_t;
    bufs->base = new char[len];
    strcpy(bufs->base,data);
    bufs->len = len;
    req.data = bufs;
    uv_write(&req,uv_tostream(m_socket),bufs,1,write_cb);
}

void Player::sendRaw(std::string &data)
{
    sendRaw(data.c_str(),data.size());
}

void Player::sendJson(Json &&json)
{
    std::string str = json.dump();
    sendRaw(str);
}