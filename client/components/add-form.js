import React from 'react'
import {
  Form,
  Segment,
  Modal,
  Button,
  Header,
  Container
} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {addNewSymptom} from '../store/symptoms'

class AddForm extends React.Component {
  state = {symptom: '', modalOpen: false, submitted: false}

  handleChange = (e, {value}) => this.setState({symptom: value})

  handleSubmit = async () => {
    const {type} = this.props.match.params
    const {symptom} = this.state
    await this.props.createSymptom(type, symptom)
    this.setState({submitted: true, symptom: ''})
  }

  handleOpen = () => {
    this.setState({modalOpen: true})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const {symptom, submitted} = this.state
    return (
      <Segment textAlign="center" vertical>
        <Header as="h3">Don't see what you're looking for?</Header>
        <Modal
          trigger={
            <Button onClick={this.handleOpen} color="teal">
              Add It!
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Add your symptom below - keep it brief!</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                placeholder="What's up buttercup?"
                value={symptom}
                onChange={this.handleChange}
              />
              <Modal.Actions>
                {!submitted ? (
                  <Form.Button color="teal" content="Submit" />
                ) : (
                  <Container as="h4">
                    <Segment>
                      Got it, thanks! Check back soon to see if anyone has
                      suggested coping strategies or solutions!
                    </Segment>
                    <Form.Button
                      color="teal"
                      onClick={this.handleClose}
                      content="Thanks!"
                    />
                  </Container>
                )}
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createSymptom: (type, symptom) => dispatch(addNewSymptom(type, symptom))
})

export default withRouter(connect(null, mapDispatchToProps)(AddForm))
