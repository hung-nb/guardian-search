const React = require('react')
const InputField = require ('./components/InputField')
const ListResult = require ('./components/ListResult')
const NavigationBar = require ('./components/NavigationBar')
const Section = require ('./components/Section')

const { add_bookmark, remove_bookmark, set_all_articles } = require ('./redux/actions/bookmark')
const { connect } = require ('react-redux')
const Util = require ('./business/Util')

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      loading: false,
      keyword: '',
    }
  }
  
  _handleInputChange(event) {
    this.setState({ keyword: event.target.value })
  }
	
	async _handleKeyPress(event) {

		if (event.key == 'Enter') {
      try {
        this.setState({ loading: true })
        let searchKeyword = this.state.keyword;
        let response = await fetch(
          'https://content.guardianapis.com/search?q=' + searchKeyword + '&api-key=4a402017-ce18-4c2b-9c15-a1fa5be26d6b'
        )
        let responseJson = await response.json()
        
        // Add Bookmark
        let finalResult = Util.adjustData(
          responseJson.response.results,
          this.props.savedArticles
        )
        this.props.setAllArticles(finalResult)
        this.setState({ loading: false })
      } catch (error) {
        console.error(error);
      }
    }    
  }
  
  render() {                  
    return (
      <div>
        <NavigationBar />
        <InputField
          id="id_input"
          onChange={this._handleInputChange.bind(this)}
          onKeyPress={this._handleKeyPress.bind(this)}
          value={this.state.keyword}
          loading={this.state.loading}/>
        {this.props.savedArticles.length == 0
          ? null
          : <Section section='Bookmark' data={this.props.savedArticles}/>
        }
        {this.props.allArticles.length == 0
          ? <p style={{paddingLeft: 24}}>Nothing found</p>
          : null
        }
        <ListResult results={this.props.allArticles} />
      </div>    
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        savedArticles: state.bookmark.bookmark_articles,
        allArticles: state.bookmark.all_articles
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addBookmark: (webTitle, webPublicationDate, webUrl) => { dispatch(add_bookmark(webTitle, webPublicationDate, webUrl)); },
        removeBookmark: (webUrl) => { dispatch(remove_bookmark(webUrl)); },
        setAllArticles: (data) => { dispatch(set_all_articles(data)); },
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)