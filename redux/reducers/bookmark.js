const defaultState = {
    bookmark_articles: [],
    all_articles: [],
}
 
function reducer(state = defaultState, action) {
    switch (action.type) {
        
        case 'ADD_BOOKMARK':
          // BOOKMARK
          let obj = state.bookmark_articles.find(function (obj) { return obj.webUrl === action.webUrl })
          if (obj === undefined) {
            let newArticle = {
              webTitle: action.webTitle,
              webPublicationDate: action.webPublicationDate,
              webUrl: action.webUrl,
              bookmark: true
            }
            state.bookmark_articles.push(newArticle)
            
            // UPDATE ALL ARTICLES
            state.all_articles.forEach((element, index) => {
                if(element.webUrl === action.webUrl) {
                    state.all_articles[index].bookmark = true;
                }
            });
          }
          
        case 'REMOVE_BOOKMARK':
          let newStateArray = state.bookmark_articles.filter(function( obj ) {
            return obj.webUrl !== action.payload
          });
        
          // UPDATE ALL ARTICLES
          state.all_articles.forEach((element, index) => {
              if(element.webUrl === action.payload) {
                  state.all_articles[index].bookmark = false;
              }
          });
        
          return {
            bookmark_articles: newStateArray,
            all_articles: state.all_articles
          }
        
        case 'SET_ALL_ARTICLES':
          return {
            bookmark_articles: state.bookmark_articles,
            all_articles: action.payload
          }
        
        default:
          return state
    }
}

module.exports = reducer