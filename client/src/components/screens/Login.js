import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions";
import { Alert } from "react-bootstrap";

class Login extends Component {
  state = {
    nickname: "",
    pwd: "",
    email: ""
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlepPwdChange = e => {
    this.setState({
      pwd: e.target.value
    });
  };

  verifyUser = e => {
    e.preventDefault();
    fetch(
      `http://eventhood.worldtecno.com/?db=logIn&email=${
        this.state.email
      }&password=${this.state.password}`
    ).then(res => console.log(res));
    /* const { users } = this.props;
    const bet =
      users.find(user => user.nickname === this.state.nickname) &&
      users.find(user => user.pwd === this.state.pwd) &&
      users.find(user => user.email === this.state.email);
    console.log("BET", bet);
    if (bet !== undefined) {
    } */
  };

  render() {
    return (
      <form className="loginForm" onSubmit={this.verifyUser}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={() => this.handleEmailChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={this.handlepPwdChange}
        />
        <button type="submit">LOG ME IN</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  setSessionUser: user => dispatch(setUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
