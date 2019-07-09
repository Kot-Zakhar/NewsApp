import Env from '../../env';
import debug from 'debug';

var log = debug('view');

export default class View{
    constructor(Controller, Model){
        this.model = Model;
        this.controller = Controller;
    }

    ToggleAlert(hidden = false, alertId, message){
        let alert = document.querySelector(alertId);
        if (hidden){
            alert.setAttribute("hidden", true);
        }
        else
        {
            alert.removeAttribute('hidden');
            log("alert " + alertId);
            setTimeout(this.ToggleAlert, Env.alerts.timeout, true, alertId, "");
        }
        if (message){
            document.querySelector(alertId).textContent = message;
        }

    }

    ToggleErrorAlert(message){
        this.ToggleAlert(false, "#error", message);
    }

    ToggleBottomInfoAlert(message){
        this.ToggleAlert(false, "#bottomInfo", message);
    }

    ToggleTopInfoAlert(message){
        this.ToggleAlert(false, "#topInfo", message);
    }

    /**
     * info: {
        * source : { id, name }
        * author
        * title
        * description
        * url
        * urlToImage
        * publishedAt
        * content
     * }
    */
    FillNewsFragmentWithInfo(fragment, info){
        fragment.querySelector(".newsTitle").textContent = info['title'];
        fragment.querySelector(".newsImg").setAttribute("src", info['urlToImage'] ? info['urlToImage'] : Env.noImageSrc);
        fragment.querySelector(".newsDescription").textContent = info['description'];
        fragment.querySelector(".newsAuthor").textContent = info['author'];
        fragment.querySelector(".newsSourceName").textContent = info['source']['name'];
        fragment.querySelector(".newsUrl").setAttribute("href", info['url']);
        fragment.querySelector(".newsPublishedAt").textContent = new Date(Date.parse(info['publishedAt'])).toDateString();
    }

    AddNews(news){
        
        if (Array.isArray(news) && news.length){
            let newNews = document.createDocumentFragment();
            let pieceOfNewsTemplate = document.querySelector("#newsTemplate");
            log(pieceOfNewsTemplate);
            news.forEach(pieceOfNews => {
                let pieceOfNewsFragment = pieceOfNewsTemplate.content.cloneNode(true).querySelector('.pieceOfNews');
                this.FillNewsFragmentWithInfo(pieceOfNewsFragment, pieceOfNews);
                newNews.appendChild(pieceOfNewsFragment);
            })
            
            document.querySelector("#news").appendChild(newNews);
        } else {}
    }

    CleanNews(){
        document.querySelector("#news").textContent = "";
    }

    ShowNews(news){
        if (Array.isArray(news) && news.length){
            this.CleanNews();
            this.AddNews(news);
            this.ToggleTopInfoAlert(Env.alerts.loaded);
        } else {
            this.ToggleErrorAlert(Env.alerts.noNews);
        }
    }

    ShowSources(sources){
        if (Array.isArray(sources) && sources.length){
            let sourcesFragment = document.createDocumentFragment();
            let sourceTemplate = document.querySelector("#sourceTemplate");
            sources.forEach(source => {
                let sourceFragment = sourceTemplate.content.cloneNode(true).querySelector(".source");
                
                sourceFragment.querySelector(".sourceName").textContent = source.name;
                ((btn) => {
                    btn.setAttribute("id", source.id);
                    btn.addEventListener("click", () => this.controller.SourceSelected(source.id));
                    btn.classList.add(Env.styles.notSelectedSourceClass);
                }) (sourceFragment.querySelector(".btn"));
                sourcesFragment.appendChild(sourceFragment);
            })
            
            document.querySelector("#sources").appendChild(sourcesFragment);
        } else {
            log("error in showing sources");
        }
    }

    HighlightSource(sourceId) {
        // let sourcesFragments = document.querySelectorAll("#sources .source");
        let sourceFragment = document.getElementById(sourceId);
        if (sourceFragment) {
            sourceFragment.classList.add(Env.styles.selectedSourceClass);
            sourceFragment.classList.remove(Env.styles.notSelectedSourceClass);
        }
        log(sourceId + ' is selected.');
    }

    DehighlightSource(sourceId) {
        let sourceFragment = document.getElementById(sourceId);
        if (sourceFragment) {
            sourceFragment.classList.remove(Env.styles.selectedSourceClass);
            sourceFragment.classList.add(Env.styles.notSelectedSourceClass);
        }
        log(sourceId + ' is selected.');
        log(sourceId + ' is deselected.')
    }

}