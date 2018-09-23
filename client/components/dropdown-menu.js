import React from 'react'
import {connect} from 'react-redux'
import {Select, Container, Form, Segment, Header} from 'semantic-ui-react'
import {fetchSymptomsFromDB} from '../store/symptoms'
import solution from '../../utils'
import AddSymp from './add-symp'

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSymp: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.props.getSymptoms(this.props.match.params.type)
  }

  handleChange(event) {
    event.persist()
    this.setState({selectedSymp: event.target.textContent})
  }

  handleSubmit(event) {
    event.preventDefault()
    const symptom = this.props.symptoms.filter(
      symp => symp.name === this.state.selectedSymp
    )
    this.props.history.push(`/symptoms/${symptom[0].category}/${symptom[0].id}`)
  }

  render() {
    const symptomsArr = this.props.symptoms.map(symp => symp.name)
    const forMenu = solution(symptomsArr)

    return (
      <Container textAlign="center">
        <Segment vertical>
          <Header as="h2">Choose from the symptoms below:</Header>
          <span />
          <Select
            onChange={this.handleChange}
            placeholder="Select Symptom"
            search
            options={forMenu}
            value={this.state.value}
          />
          <Form onSubmit={this.handleSubmit}>
            <Form.Button content="Show me solutions!" color="teal" size="big" />
          </Form>
        </Segment>
        <AddSymp />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  symptoms: state.symptoms
})

const mapDispatchToProps = dispatch => ({
  getSymptoms: type => dispatch(fetchSymptomsFromDB(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu)
