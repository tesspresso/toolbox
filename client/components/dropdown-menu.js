import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Container} from 'semantic-ui-react'
import {fetchSymptomsFromDB} from '../store/symptoms'
import solution from '../../utils'
// { countryOptions } from '../common'
// import list of symptoms
const countryOptions = [
  {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'}
]

class DropdownMenu extends React.Component {
  async componentDidMount() {
    await this.props.getSymptoms(this.props.match.params.type)
  }

  render() {
    const symptomsArr = this.props.symptoms.map(symp => symp.name)
    const forMenu = solution(symptomsArr)
    console.log('SYMP NAMES', forMenu)

    return (
      <Container textAlign="center">
        <div>Choose from the physical symptoms below:</div>
        <Dropdown
          placeholder="Select Symptom"
          fluid
          search
          selection
          options={forMenu}
        />
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
