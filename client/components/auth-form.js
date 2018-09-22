import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Container, Input, Form, Button} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export class AuthForm extends React.Component {

  google = () => {
    this.props.history.push('/auth/google')
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <Container textAlign="center">
        <h4>Give us the deets!:</h4>
        <Form onSubmit={handleSubmit} name={name}>
          {displayName === 'Sign Up' ? (
            <Form.Field>
              <input
                placeholder="preferred name"
                onChange={this.handleChange}
              />
            </Form.Field>
          ) : (
            <span />
          )}
          <Form.Field>
            <input placeholder="email address" name="email" type="text"/>
          </Form.Field>
          <Form.Field>
            <input placeholder="password" name="password" type="password"/>
          </Form.Field>
          <div>
            <Button type="submit">{displayName}</Button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          <div>- OR -</div>
        </Form>
        <Button onClick={this.google}>
            {displayName} with Google
          </Button>
      </Container>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
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
