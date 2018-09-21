import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Container, Form} from 'semantic-ui-react'
import {fetchSymptomsFromDB} from '../store/symptoms'
import solution from '../../utils'

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
    console.log('SELECTED LOCAL STATE', this.state.selectedSymp)
    // const rightSymp = this.props.symptoms.filter(
    //   symp => symp.name === this.selectedSymp
    // )
    console.log('ALL SYMPS ==>', this.props.symptoms)
    // this.props.history.push('/symptoms/physical/${id}')
  }

  render() {
    const symptomsArr = this.props.symptoms.map(symp => symp.name)
    const forMenu = solution(symptomsArr)

    return (
      <Container textAlign="center">
        <h3>Choose from the physical symptoms below:</h3>
        <span />
        <Dropdown
          onChange={this.handleChange}
          placeholder="Select Symptom"
          fluid
          search
          selection
          options={forMenu}
          value={this.state.value}
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Button content="Show me solutions!" />
        </Form>
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
