import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <div>
        <LoadingBar />
        
        {this.props.loading === true ? null : <Dashboard />}   
          <hr />
        <NewTweet />   
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return { loading: authedUser === null}
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App)