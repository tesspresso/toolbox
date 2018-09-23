import React from 'react'
import {connect} from 'react-redux'
import {
  fetchSolutionsFromDB,
  updateLikeCount,
  addNewSolution
} from '../store/solutions'
import {
  Card,
  Container,
  Button,
  Icon,
  Form,
  Segment,
  Header,
  Modal
} from 'semantic-ui-react'

export class SolutionsList extends React.Component {
  state = {
    solution: {name: '', description: ''},
    modalOpen: false,
    submitted: false
  }

  handleChange = (e, {value}) => this.setState({solution: value})

  handleSubmit = async () => {
    const {name, description} = this.state.solution
    const {type, symptomId} = this.props.match.params
    await this.props.createSolution(type, symptomId, name, description)
    this.setState({submitted: true, solution: {}})
  }

  handleOpen = () => {
    this.setState({modalOpen: true})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  async componentDidMount() {
    await this.props.getSolutions(
      this.props.match.params.type,
      this.props.match.params.symptomId
    )
  }

  handleClick = event => {
    event.preventDefault()
    let likeCount = event.target.textContent
    likeCount++
    console.log('EVENT VALUE', event.target.value)
    console.log('LIKECOUNT', likeCount)
    // const solution = this.props.solutions.filter(
    //   sol => sol.name === this.state.selectedSol
    // )
    // await this.props.updateLike(solution[0].id, likecount)
  }

  render() {
    const {solutions} = this.props
    const {submitted} = this.state
    const {name, description} = this.state.solution
    return (
      <Container textAlign="center">
        <Card.Group itemsPerRow={3}>
          {solutions.map(sol => (
            <Card key={sol.id}>
              <Card.Content>
                <Card.Header content={sol.name} />
                <Card.Description textAlign="left" content={sol.description} />
              </Card.Content>
              <Button
                onClick={this.handleClick}
                animated
                attached="bottom"
                color="google plus"
              >
                <Button.Content visible>
                  <Icon name="heart" />
                </Button.Content>
                <Button.Content hidden value={sol.id}>
                  {sol.likecount}
                </Button.Content>
              </Button>
            </Card>
          ))}
        </Card.Group>
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
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Share your magic! Tell us your story!"
                  value={description}
                  onChange={this.handleChange}
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

const mapStateToProps = state => ({
  solutions: state.solutions
})

const mapDispatchToProps = dispatch => ({
  getSolutions: (type, id) => dispatch(fetchSolutionsFromDB(type, id)),
  updateLike: (id, likecount) => dispatch(updateLikeCount(id, likecount)),
  createSolution: (type, symptomId, name, description) =>
    dispatch(addNewSolution(type, symptomId, name, description))
})

export default connect(mapStateToProps, mapDispatchToProps)(SolutionsList)
