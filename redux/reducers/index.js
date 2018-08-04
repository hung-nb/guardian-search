const { combineReducers } = require('redux')
const bookmark = require('./bookmark')
 
const rootReducer = combineReducers({
    bookmark
});
 
module.exports = rootReducer