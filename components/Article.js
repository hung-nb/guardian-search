const React = require('react')
const { Icon, Card, CardActions, CardContent, CardMedia, Button, Typography } = require('@material-ui/core')
const { add_bookmark, remove_bookmark } = require ('../redux/actions/bookmark')
const { connect } = require ('react-redux')

const Article = (props) => {
    return(
        <div>
          <Card style={{backgroundColor: '#F0F1FB'}}>
            <CardContent>
              <Icon
                style={{cursor:'pointer', float:'right', marginTop: '0px', width: '40px', fontSize: '30px'}}
                color={props.data.bookmark == false ? 'disabled' : 'primary'}
                onClick={() => {
                  props.data.bookmark == false 
                    ? props.addBookmark(props.data.webTitle, props.data.webPublicationDate, props.data.webUrl)  // save to redux
                    : props.removeBookmark(props.data.webUrl)  // save to redux
                }}>
                bookmark
              </Icon>
              <Typography gutterBottom variant="headline" component="h3" style={{fontWeight: 'bold'}}>
                  {props.data.webTitle}
              </Typography>
              <Typography component="p">
                  {props.data.webPublicationDate}
              </Typography>
            </CardContent>
            <CardActions style={{cursor:'pointer', float:'right'}}>
              <Button
                style={{fontWeight: 'bold'}}
                size="small" 
                color="primary" 
                href={props.data.webUrl} target="_blank">
                  Go To Article
              </Button>
            </CardActions>
          </Card>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        savedArticles: state.bookmark.bookmark_articles
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addBookmark: (webTitle, webPublicationDate, webUrl) => { dispatch(add_bookmark(webTitle, webPublicationDate, webUrl)); },
        removeBookmark: (webUrl) => { dispatch(remove_bookmark(webUrl)); },
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Article)