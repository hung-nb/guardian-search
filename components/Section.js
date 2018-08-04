const React = require('react')
const Article = require('./Article')
const { Icon,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,Grid } = require('@material-ui/core')

const Section = (props) => {

    return (
      <ExpansionPanel style={{ marginLeft: 24, marginRight: 200, marginTop: '5px' }}>
        <ExpansionPanelSummary
          style={ 
            props.section == 'Bookmark'
              ? { backgroundColor: '#EB5757' }
              : { backgroundColor: '#666FD7' }
          }
          expandIcon={
            <Icon
              style={{ color: 'white' }}
              color='primary'>
            expand_more
            </Icon>
          }>
          <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: '18px'}}>{ props.section }</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={24} style={{padding: 24, backgroundColor: '#F7F7FD'}}>
            { props.data.map(item => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Article data={item} />
                </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
}

module.exports = Section