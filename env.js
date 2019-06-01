export default {
    defaultQuery: {
        apiKey: "7212e3966b5c450fa48c618ebf60d8f0",
        page: 1,
        lang: "en",
        pageSize: 10,
        country: "us"
    },
    api: {
        name: "https://newsapi.org/v2/",
        topHeadlines: {
            name: "top-headlines",
            params: ['apiKey', 'page', 'pageSize', 'q', 'sources', 'category', 'country']
        },
        sources: {
            name: "sources",
            params: ['apiKey', 'country', 'language', 'category']
        }
    },
    noImageSrc: "./src/img/noImgProvided.png",
    mode: "dev",
    debug: "*,-babel"
    //mode: "prod",
}