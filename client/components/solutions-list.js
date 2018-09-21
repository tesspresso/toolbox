import React from 'react'
import {connect} from 'react-redux'
import {Button, Container} from 'semantic-ui-react'

export class SolutionsList extends React.Component {

  render() {
    return (
   <h1>I'm rendering!</h1>
    )
  }
}

export default SolutionsList

// const mapState = state => {
//   return {
//     name: state.user.name
//   }
// }

// export default connect(mapState)(SymptomChoice)
