#ifndef LGEMU_ROOM_H
#define LGEMU_ROOM_H

class Room {
public:
    Room(int num);
    bool exists(){return m_exists;};
    const char *name(){return m_name;}
    void name(const char *str){m_name = str;}
private:
    int m_num;
    const char *m_name;
    bool m_exists;
};

#endif //LGEMU_ROOM_H
