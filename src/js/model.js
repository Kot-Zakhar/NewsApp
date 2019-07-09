import View from './view';
import Env from "../../env";
import debug from "debug";

var log = debug('model');

export default class Model{

    constructor(Controller){
        this.defaultParams = { country: "us" };
        this.controller = Controller;
        this.view = new View(this.controller, this);
        

        this.currentNews;
        this.selectedSources = [];
        this.allSources;
        
        this.newsAvailable = 0;
        this.pagesLoaded = 0;
        this.pageLength = Env.defaultQuery.pageSize;
        this.lastQueryParams = {};
    }

    /**
     * a request to NewsApi
     */
    GetRequest(params, apiInfo){
        log("request: ", params);

        if (params == null)
            params = this.defaultParams;
        let query = Env.api.name + apiInfo.name + "?";
        let queryParams = apiInfo.params.map( paramName => {
            let paramValue = (params[paramName] || Env.defaultQuery[paramName] || null);
            if (paramValue){
                return paramName + '=' + paramValue;
            } else 
                return null;
        }).filter(e => e);
        
        query += queryParams.join('&');

        log("request query: ", query);

        // let req = new Request(query);
        // return fetch(req).then((res) => {
        //     log(res.json());
        //     return res.json();
        // });

        let xhr = new XMLHttpRequest();
        xhr.open('GET', query, false);
        xhr.send();
        if (xhr.status == 200){
            return JSON.parse(xhr.responseText);
        } else {
            log(xhr);
            return {};
        }
    }

    GetSources(){
        let response = this.GetRequest(null, Env.api.sources);
        log("got response:", response)
        return response.sources;
    }

    /**
     * @param params - [apiKey, page, pageSize, lang, q, category, sources, country]
     * 
     * Param:       |If null                        |Available value
     * _____________|_______________________________|________________
     * apiKey       |Env.defaultQuery[apiKey]
     * page         |Env.defaultQuery[page]         |>0
     * pageSize     |Env.defaultQuery[pageSize]     |1 < n < 100
     * language     |Env.defaultQuery[language]     |ar de en es fr he it nl no pt ru se ud zh
     * q            |not passed
     * category     |not passed                     |business entertainment general health science sports technology
     * sources      |not passed                     |string of values, joined by ','
     * country      |not passed                     |ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
     * 
     * returns array of objects with fields:
     * source : {
     *  id, name
     * }
     * author
     * title
     * description
     * url
     * urlToImage
     * publishedAt
     * content
     */
    GetTopHeadlines(params){
        let response = this.GetRequest(params, Env.api.topHeadlines);
        log("got response:", response)
        if (response.status == "ok"){
            this.lastQueryParams = params ? params : this.defaultParams;
            this.pagesLoaded = params && params.page ? params.page : 1;
            this.newsAvailable = response.totalResults;
        }
        
        return response.articles;
    }

    LoadMore() {
        log("load more");
        if (Math.min(this.newsAvailable, Env.maxNewsAllowed) > this.pagesLoaded * this.pageLength) {
            this.lastQueryParams['page'] = ++this.pagesLoaded;
            this.view.AddNews(this.GetTopHeadlines(this.lastQueryParams));
            this.view.ToggleBottomInfoAlert(Env.alerts.loaded);
        } else {
            this.view.ToggleBottomInfoAlert(Env.alerts.noMewsLeft);
        }
    }

    LoadNews(params) {
        this.currentNews = this.GetTopHeadlines(params);
        this.view.ShowNews(this.currentNews);
    }

    SetSource(sourceId) {
        if (this.selectedSources.includes(sourceId)) {
            this.selectedSources.splice(this.selectedSources.indexOf(sourceId), 1);
            this.view.DehighlightSource(sourceId);
        } else {
            this.selectedSources.push(sourceId);
            this.view.HighlightSource(sourceId);
        }

        if (this.selectedSources.length) {
            this.LoadNews( {sources: this.selectedSources.join(',')} );
        } else {
            this.LoadNews();
        }
    }

    // LoadFromSource(sourceId){
    //     this.LoadNews({sources: sourceId});
    //     this.view.HighlightSource(sourceId);
    // }

    Init() {
        this.LoadNews();

        this.allSources = this.GetSources();
        this.view.ShowSources(this.allSources);
    }

}