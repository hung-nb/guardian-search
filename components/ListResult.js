const React = require('react')
const Article = require('./Article')
const Section = require('./Section')
const { Toolbar,Typography,Grid } = require('@material-ui/core')

const ListResult = (props) => {
  
    // Group by sectionName
    const articles = props.results
    const sections = articles.reduce(
      (article, { sectionName, webTitle, webPublicationDate, webUrl, bookmark }) => {
        let obj = {webTitle, webPublicationDate, webUrl, bookmark}
        if (!article[sectionName]) article[sectionName] = [];
          article[sectionName].push(obj);
        return article;
      }, {})
  
    // Render by section name
    const Layout = Object.keys(sections).map(
      key => <Section section={key} data={sections[key]}/>
    )
    
    // Render
    return (
      Layout
    )
}

module.exports = ListResult