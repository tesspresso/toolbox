import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Container} from 'semantic-ui-react'

export class SymptomChoice extends React.Component {
  redirectToPhys = () => {
    this.props.history.push('/symptoms/physical')
  }

  redirectToMenEmo = () => {
    this.props.history.push('/symptoms/menemo')
  }

  render() {
    return (
      <Container textAlign="center">
        <h3>Welcome, {this.props.name}</h3>
        <h4>What type of symptom is troubling you today?</h4>
        <Button.Group size="large">
          <Button onClick={this.redirectToPhys}>physical </Button>
          <Button.Or />
          <Button onClick={this.redirectToMenEmo}>mental/emotional</Button>
        </Button.Group>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    name: state.user.name
  }
}

export default connect(mapState)(SymptomChoice)

SymptomChoice.propTypes = {
  name: PropTypes.string
}
