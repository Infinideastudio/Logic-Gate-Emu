#ifndef LGEMU_GAME_H
#define LGEMU_GAME_H
#include <vector>
#include "rooms.h"
#include "room.h"
#include "network.h"
#include "player.h"

class Game
{
public:
    Game(const char *addr,int port);
    void joinGame(Player *p);
private:
    RoomManager m_rooms;
    NetworkManager m_network;
};

#endif //LGEMU_GAME_H
