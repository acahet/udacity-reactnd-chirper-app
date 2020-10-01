import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Tweet from './Tweet'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : <Dashboard />}   
        <Tweet/>     
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