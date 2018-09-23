import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {LandingPage, DropdownMenu, SolutionsList} from './components'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/symptoms/:type" component={DropdownMenu} />
          <Route
            exact
            path="/symptoms/:type/:symptomId"
            component={SolutionsList}
          />
          {/* <Route component={404} /> */}
        </div>
      </Router>
    )
  }
}

export default Routes
