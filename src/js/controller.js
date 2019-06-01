import Model from './model';
import Env from "../../env";
import chalk from "chalk";
import debug from "debug";

var log = debug('controller');

export default class Controller{
    constructor(){
        this.model = new Model();
        this.lastQueryParams = {};
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
    getTopHeadlines(params){
        if (params == null)
            params = {};
        let query = Env.api.name + Env.api.topHeadlines.name + "?";
        let queryParams = Env.api.topHeadlines.params.map( paramName => {
            if (params[paramName] != undefined)
                return paramName + '=' + params[paramName];
            else if (Env.defaultQuery[paramName] != undefined)
                return paramName + '=' + Env.defaultQuery[paramName];
            else
                return null;
        }).filter(e => e);

        // log(JSON.stringify(queryParams));
        
        query += queryParams.join('&');

        // let req = new Request(query);
        // return fetch(req).then((res) => {
        //     log(res.json());
        //     return res.json();
        // });

        let xhr = new XMLHttpRequest();
        xhr.open('GET', query, false);
        xhr.send();
        if (xhr.status == 200){
            this.lastQueryParams = params;
            return JSON.parse(xhr.responseText).articles;
        } else {
            return {};
        }
    }


    start() {
        let headlines = this.getTopHeadlines();
        // log(JSON.stringify(headlines));
        this.model.AddNews(headlines);

        // .then(
        //     (response, error) => {
        //         let headlines = responses.articles;
        //         log(headlines);
        //         if (Array.isArray(headlines) && headlines.length){
        //             this.model.AddNews(response.articles);    
        //         } else {
        //             log("bad response");
        //             return;
        //     }
        // });
    }
}