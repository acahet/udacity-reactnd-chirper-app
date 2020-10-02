import React, { Component, Fragment } from 'react'

import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? 
            null : 
            <div> 
              <Route path='/' exact component={Dashboard} />
              <Route path='/tweet/:id' component={TweetPage} />
              <Route path='/new' component={NewTweet} />
              </div>}
          </div>
        </Fragment>
      </Router>
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