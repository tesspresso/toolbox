import React from 'react'
import {connect} from 'react-redux'
import {fetchSolutionsFromDB, updateLikeCount} from '../store/solutions'
import {Card, Container, Button, Icon, Form, Segment} from 'semantic-ui-react'

export class SolutionsList extends React.Component {
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
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  solutions: state.solutions
})

const mapDispatchToProps = dispatch => ({
  getSolutions: (type, id) => dispatch(fetchSolutionsFromDB(type, id)),
  updateLike: (id, likecount) => dispatch(updateLikeCount(id, likecount))
})

export default connect(mapStateToProps, mapDispatchToProps)(SolutionsList)
