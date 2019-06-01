import View from './view';

var debug = require("debug")('model');

export default class Model{
    constructor(){
        this.currentNews = new Array();
        this.view = new View();
    }

    AddNews(news){
        // debug(news);
        // this.currentNews.concat(news);
        // debug(this.currentNews);
        // this.view.ShowNews(this.currentNews);
        this.view.ShowNews(news);
    }

}