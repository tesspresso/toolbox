import React from 'react'
import {Form, Segment, Modal, Button, Header, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {addNewSymptom} from '../store/symptoms'

class AddForm extends React.Component {
  state = {symptom: ''}

  handleChange = (e, {value}) => this.setState({symptom: value})

  handleSubmit = async () => {
    const {type} = this.props.match.params
    const {symptom} = this.state
    await this.props.createSymptom(type, symptom)
    // then push to another page??
  }
  render() {
    const {symptom} = this.state
    return (
      <Segment textAlign="center" vertical>
        <Header as="h3">Don't see what you're looking for?</Header>
        <Modal trigger={<Button color="teal">Add It!</Button>}>
          <Modal.Header>Add your symptom below - keep it brief!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  placeholder="What's up buttercup?"
                  value={symptom}
                  onChange={this.handleChange}
                />
                <Message
                  success
                  header="Symptom submitted!"
                  content="We've added your symptom. Check back soon to see if anyone has suggested coping strategies or solutions!"
                />
                <Form.Button content="Submit" />
              </Form>
            </Modal.Description>
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
