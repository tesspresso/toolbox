import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {addNewSolution} from '../store/solutions'
import {
  Container,
  Button,
  Form,
  Segment,
  Header,
  Modal
} from 'semantic-ui-react'

export class AddSol extends React.Component {
  state = {
    name: '',
    description: '',
    modalOpen: false,
    submitted: false
  }

  handleNameChange = (e, {value}) => this.setState({name: value})

  handleDescriptionChange = (e, {value}) => this.setState({description: value})

  handleSubmit = async () => {
    // where is symptomId coming from?
    const {type, symptomId} = this.props.match.params
    const {name, description} = this.state
    await this.props.createSolution(type, symptomId, name, description)
    this.setState({submitted: true, name: '', description: ''})
  }

  handleOpen = () => {
    this.setState({modalOpen: true})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const {submitted, name, description} = this.state
    return (
      <Container>
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
            <Modal.Header>Add your solution below:</Modal.Header>
            <Modal.Content>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  placeholder="Solution in brief"
                  value={name}
                  onChange={this.handleNameChange}
                />
                <Form.Input
                  placeholder="Share your magic! Tell us your story!"
                  value={description}
                  onChange={this.handleDescriptionChange}
                />
                <Modal.Actions>
                  {!submitted ? (
                    <Form.Button color="teal" content="Submit" />
                  ) : (
                    <Container as="h4">
                      <Segment>Thanks for sharing!</Segment>
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
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createSolution: (type, symptomId, name, description) =>
    dispatch(addNewSolution(type, symptomId, name, description))
})

export default withRouter(connect(null, mapDispatchToProps)(AddSol))

