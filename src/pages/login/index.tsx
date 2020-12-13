import React, { Component } from "react";
import "./_style.scss";

class Login extends Component {

  state = { username: "", password: "", isChecked: false }

  // HandlesSubmit of the Form
  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state.username, this.state.password, this.state.isChecked);
  }
  
  // Handles Checkbox and Remember
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Admin</b>LTE
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              {/* Function Submit to serve username password and check */}
              <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="name"
                    className="form-control"
                    placeholder="Email"
                    value={username}
                    // Change the var state of username
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="name"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    // Change the var state of password
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="remember"
                        // Change the var state of checkbox
                        onChange={(event) => this.handleChecked()}
                      />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              {/* <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using
                  Google+
                </a>
              </div> */}
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </div>
    );
  }
}

export default Login;
