import React from 'react'
import {Route} from 'react-router-dom'
import {LandingPage, DropdownMenu, SolutionsList, Navbar} from './components'

const App = () => {
  return (
      <div className="allText">
        <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/symptoms/:type" component={DropdownMenu} />
          <Route
            exact
            path="/symptoms/:type/:symptomId"
            component={SolutionsList}
          />
          {/* <Route component={404} /> */}
      </div>
  )
}

export default App
