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
      `https://eventhood.worldtecno.com/api.php?db=logIn&email=${
        this.state.email
      }&password=${this.state.password}`
    ).then(res => console.log(res));
  };

  render() {
    return (
      <form id="loginForm" onSubmit={this.verifyUser}>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 m-auto">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={() => this.handleEmailChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={this.handlepPwdChange}
              />
            </div>

            <button className="form-control" id="login" type="submit">
              Login
            </button>
          </div>
        </div>
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
