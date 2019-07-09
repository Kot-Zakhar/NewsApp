import Model from './model';
import debug from "debug";
import Env from '../../env';

var log = debug('controller');

export default class Controller{
    constructor(){
        this.model = new Model(this);
    }

    SourceSelected(sourceId) {
        log("source selected: " + sourceId);
        this.model.SetSource(sourceId);
    }

    Init() {
        log("init");
        this.model.Init();

        document.querySelector("#loadMore").addEventListener('click', () => this.model.LoadMore());
        document.getElementById("searchButton").addEventListener("click", () => {
            let search = document.getElementById("searchText").value;
            log("search for: " + search);
            if (search.length >= Env.search.minLength)
                this.model.LoadNews({ q: search });
                /* TODO:
                    !search-phrase removes searches through all the sources, ignoring the selection done previously
                 */
        })
        document.getElementById("searchText").addEventListener("keyup", (event) => {
            if (event.keyCode == 13) {
                document.getElementById("searchButton").click();
            }
        })
    }
}