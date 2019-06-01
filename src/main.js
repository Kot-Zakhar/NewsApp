import Controller from './js/controller';
import debug from 'debug';
import env from '../env';

if (env.mode = "dev")
    debug.enable(env.debug);
else
{
    debug.disable();
}


const controller = new Controller();
controller.Init();