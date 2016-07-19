#ifndef LGEMU_GLOBALUV_H
#define LGEMU_GLOBALUV_H

#include <uv.h>

extern uv_loop_t *defloop;
#define uv_tostream(s) (uv_stream_t*)(s)

#endif //LGEMU_GLOBALUV_H
