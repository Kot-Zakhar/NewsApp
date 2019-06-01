import Controller from './js/controller';
import debug from 'debug';
import env from '../env';
// import gh from 'gh-pages';

if (env.prod){
    debug.disable();
    // gh.publish
}
else
{
    debug.enable(env.debug);
}


const controller = new Controller();
controller.Init();