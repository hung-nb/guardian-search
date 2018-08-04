const React = require('react')
const { CircularProgress, Grid, TextField, Button, Input } = require('@material-ui/core')

const InputField = (props) => {
    return (
        <div>
          <TextField style={{padding: 24}}
            id="searchInput"
            placeholder="Enter a keyword"   
            margin="normal"
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            value={props.value}/>
          {props.loading == true
            ? <CircularProgress size={20} />
            : null}
        </div>
    )
}

module.exports = InputField