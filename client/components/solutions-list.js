import React from 'react'
import {connect} from 'react-redux'
import {fetchSolutionsFromDB} from '../store/solutions'
import {Card, Container} from 'semantic-ui-react'

export class SolutionsList extends React.Component {
  async componentDidMount() {
    await this.props.getSolutions(
      this.props.match.params.type,
      this.props.match.params.symptomId
    )
  }

  render() {
    const {solutions} = this.props
    console.log('SOLUTIONS!', solutions[0])
    return (
      <Container textAlign="center">
        {solutions.map(sol => (
          <Card key={sol.id}>
            <Card.Content>
              <Card.Header content={sol.name} />
              <Card.Description content={sol.description} />
            </Card.Content>
          </Card>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  solutions: state.solutions
})

const mapDispatchToProps = dispatch => ({
  getSolutions: (type, id) => dispatch(fetchSolutionsFromDB(type, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SolutionsList)
