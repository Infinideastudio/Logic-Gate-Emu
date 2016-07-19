#include <uv.h>
#include "logio.h"
#include "version.h"
#include "game.h"
#include "globaluv.h"
#include "telnet.h"

using namespace Logio;

uv_loop_t *defloop = uv_default_loop();

int main()
{
    cout << "Logic Gate Emulator Server " << Version::num << endl;

    cout << "initializing game core" << endl;
    Game g();

    cout << "initializing gateway: telnet"<<endl;
    Telnet tel;
    tel.init("0.0.0.0",7999);

    uv_run(defloop,UV_RUN_DEFAULT);
}