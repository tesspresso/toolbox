import React from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Header,
  Button,
  Divider,
  Icon,
} from 'semantic-ui-react'

class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        <Container textAlign="center">
          <Header size="huge">TOOLBOX</Header>
          <Icon size="huge" loading name="cog" />
          <Header size="large">
            A collaborative community that supports you during your period.
          </Header>
          <Divider />
          <Header size="medium">
            What type of symptom is troubling you today?
          </Header>
          <Button.Group size="large">
            <Button as={Link} to="/symptoms/physical" color="teal">
              physical
            </Button>
            <Button.Or />
            <Button as={Link} to="/symptoms/menemo" color="teal">
              mental/emotional
            </Button>
          </Button.Group>
        </Container>
      </Container>
    )
  }
}

export default LandingPage
