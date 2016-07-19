#ifndef LGEMU_GATEWAY_H
#define LGEMU_GATEWAY_H
/* The way players join the game.May be websocket,telnet or so. */

class Gateway
{
public:
    virtual void init() {};
private:

};

#endif //LGEMU_GATEWAY_H
