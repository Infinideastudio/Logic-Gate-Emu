#include <uv.h>
#include "logio.h"
#include "version.h"
#include "game.h"
#include "globaluv.h"

using namespace Logio;

uv_loop_t *defloop = uv_default_loop();
Game *g;

int main()
{
    cout << "Logic Gate Emulator Server " << Version::num << endl;

    cout << "initializing game core" << endl;
    g = new Game("0.0.0.0",7999);

    uv_run(defloop,UV_RUN_DEFAULT);

    delete g;
    return 0;
}