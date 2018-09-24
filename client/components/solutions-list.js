import React from 'react'
import {connect} from 'react-redux'
import {fetchSolutionsFromDB, updateLikeCount} from '../store/solutions'
import AddSol from './add-sol'
import {Card, Container, Button, Icon} from 'semantic-ui-react'

export class SolutionsList extends React.Component {
  async componentDidMount() {
    await this.props.getSolutions(
      this.props.match.params.type,
      this.props.match.params.symptomId
    )
  }

  handleClick = async (event, data) => {
    event.preventDefault()
    let likeCount = event.target.textContent
    const solId = data.value
    const {type, symptomId} = this.props.match.params
    likeCount++
    await this.props.updateLike(type, symptomId, solId, likeCount)
    await this.props.getSolutions(
      this.props.match.params.type,
      this.props.match.params.symptomId
    )
  }

  render() {
    const {solutions} = this.props
    return (
      <Container textAlign="center">
        <Card.Group itemsPerRow={3}>
          {solutions.map(sol => (
            <React.Fragment key={sol.id}>
              <Card>
                <Card.Content>
                  <Card.Header content={sol.name} />
                  <Card.Description
                    textAlign="left"
                    content={sol.description}
                  />
                </Card.Content>
                <Button
                  onClick={this.handleClick}
                  value={sol.id}
                  animated
                  attached="bottom"
                  color="google plus"
                >
                  <Button.Content visible>
                    <Icon name="heart" />
                  </Button.Content>
                  <Button.Content hidden>{sol.likecount}</Button.Content>
                </Button>
              </Card>
            </React.Fragment>
          ))}
        </Card.Group>
        <AddSol />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  solutions: state.solutions
})

const mapDispatchToProps = dispatch => ({
  getSolutions: (type, id) => dispatch(fetchSolutionsFromDB(type, id)),
  updateLike: (type, sympId, solId, likeCount) =>
    dispatch(updateLikeCount(type, sympId, solId, likeCount))
})

export default connect(mapStateToProps, mapDispatchToProps)(SolutionsList)
