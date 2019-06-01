import Controller from './js/controller';
import debug from 'debug';
import env from '../env';

if (env.prod){
    debug.disable();
}
else
{
    debug.enable(env.debug);
}


const controller = new Controller();
controller.Init();