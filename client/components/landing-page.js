import React from 'react'
import {Container, Header, Button} from 'semantic-ui-react'

export class LandingPage extends React.Component {
  signup = () => {
    this.props.history.push('/signup')
  }

  login = () => {
    this.props.history.push('/login')
  }

  render() {
    console.log('Im rendering!!')
    return (
      <Container textAlign="center">
        <Header as="h1">TOOLBOX</Header>
        <Header as="h2">
          A collaborative community that supports you during your period.
        </Header>
        <Button.Group>
          <Button onClick={this.signup}>Sign Up </Button>
          <Button.Or />
          <Button onClick={this.login}>Log In</Button>
        </Button.Group>
      </Container>
    )
  }
}

export default LandingPage
