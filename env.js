export default {
    defaultQuery: {
        apiKey: "7212e3966b5c450fa48c618ebf60d8f0",
        page: 1,
        lang: "en",
        pageSize: 5
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
    alerts: {
        timeout: 3000,
        noNews: "There are no news matching your request.",
        noMewsLeft: "There are no more news left.",
        loaded: "Available news are loaded."
    },
    search: {
        minLength: 3
    },
    maxNewsAllowed: 40,
    noImageSrc: "./img/noImgProvided.png",
    prod: true,
    debug: "*",
    gpOptions: {

    }
}