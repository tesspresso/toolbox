import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Container, Form, Button} from 'semantic-ui-react'

export class AuthForm extends React.Component {
  google = () => {
    this.props.history.push('/auth/google')
  }

  render() {
    console.log('EVENT.TARGET', event.target)
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <Container textAlign="center">
        <h4>Give us the deets!:</h4>
        <Form onSubmit={handleSubmit} name={name}>
          <Form.Group widths="equal">
            {displayName === 'Sign Up' ? (
              <Form.Input
                placeholder="preferred name"
                onChange={this.handleChange}
              />
            ) : (
              <span />
            )}
            <Form.Input placeholder="email address" name="email" type="text" />
            <Form.Input
              placeholder="password"
              name="password"
              type="password"
            />
          </Form.Group>
          <Form.Button circular type="submit" content={displayName} />
          {error && error.response && <div> {error.response.data} </div>}
          <div>- OR -</div>
        </Form>
        <Button circular onClick={this.google}>
          {displayName} with Google
        </Button>
      </Container>
    )
  }
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
