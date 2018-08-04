const add_bookmark = (webTitle, webPublicationDate, webUrl) => {
    return {
        type: 'ADD_BOOKMARK',
        webTitle: webTitle,
        webPublicationDate: webPublicationDate,
        webUrl: webUrl
    };
};

const remove_bookmark = (webUrl) => {
    return {
        type: 'REMOVE_BOOKMARK',
        payload: webUrl
    };
};

const set_all_articles = (data) => {
    return {
        type: 'SET_ALL_ARTICLES',
        payload: data
    };
};

module.exports = {add_bookmark, remove_bookmark, set_all_articles}