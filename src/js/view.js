import Env from '../../env';
var debug = require("debug")('view');

export default class View{
    constructor(){

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
    FillFragmentWithInfo(fragment, info){
        fragment.querySelector(".newsTitle").textContent = info['title'];
        fragment.querySelector(".newsImg").setAttribute("src", info['urlToImage'] ? info['urlToImage'] : Env.noImageSrc);
        fragment.querySelector(".newsDescription").textContent = info['description'];
        fragment.querySelector(".newsAuthor").textContent = info['author'];
        fragment.querySelector(".newsSourceName").textContent = info['source']['name'];
        fragment.querySelector(".newsUrl").setAttribute("href", info['url']);
        fragment.querySelector(".newsPublishedAt").textContent = new Date(Date.parse(info['publishedAt'])).toDateString();
    }

    AddNews(news){
        let newNews = document.createDocumentFragment();
        let pieceOfNewsTemplate = document.querySelector("#newsTemplate");
        news.forEach(pieceOfNews => {
            // debug(pieceOfNews);
            let pieceOfNewsFragment = pieceOfNewsTemplate.content ? 
                pieceOfNewsTemplate.content.cloneNode(true).querySelector('.pieceOfNews')
                : pieceOfNewsFragment.querySelector(".pieceOfNews").cloneNode(true);
            this.FillFragmentWithInfo(pieceOfNewsFragment, pieceOfNews);
            newNews.appendChild(pieceOfNewsFragment);
        })
        
        document.querySelector("#news").appendChild(newNews);
    }

    CleanNews(){
        document.querySelector("#news").textContent = "";
    }

    ToggleAlert(hidden = false){
        let alert = document.querySelector("#error");
        if (hidden){
            alert.setAttribute("hidden", true);
        }
        else
            alert.removeAttribute('hidden');
    }

    ShowNews(news){
        debug(news);
        if (Array.isArray(news) && news.length){
            // debug("showing news: " + JSON.stringify(news));
            this.CleanNews();
            this.AddNews(news);
        } else {
            this.ToggleAlert();
        }
    }
}