import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../../services/redux/actions/loginActions'

class Login extends Component {
  login = () => {
    this.props.login();
  };

  render = () => <button onClick={this.login.bind(this)}>login</button>;
}

export default connect(null, {login})(Login);