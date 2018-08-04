const React = require('react')
const { AppBar, Toolbar, Typography } = require('@material-ui/core')
const NavigationBar = () => {
    return(
        <div>
          <AppBar position="static" style={{backgroundColor: '#283199'}}>
              <Toolbar>
                  <Typography style={{fontSize: '25px', fontWeight: 'bold'}} variant="title" color="inherit">
                    The Guardian Search
                  </Typography>
              </Toolbar>
          </AppBar>
        </div>
    )
}

module.exports = NavigationBar