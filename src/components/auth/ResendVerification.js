import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import FormErrors from '../FormErrors';
import Validate from '../../lib/formValidation';

class ResendVerification extends Component {
  state = {
    username: '',
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      await Auth.resendSignUp(this.state.username);
      this.props.history.push('/verify', { username: this.state.username });
    } catch (error) {
      let err = null;
      !error.message ? err = { 'message': error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove('is-danger');
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Resend verification code</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Resend Verify code
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ResendVerification;