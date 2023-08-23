import React, { Component } from 'react';
import './style.css'
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import axios from 'axios';
class Login_Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      email: '',
      password: '',
      username: '',
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    if (this.state.username == "") {
      e.preventDefault();
      const formData = new FormData();
      formData.append('email', this.state.email);
      formData.append('password', this.state.password);

      try {
        const response = await sendRequest({
          method: "POST",
          route: "/auth/login",
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
      } catch (error) {
        console.log(error);
      }
    }
    else {
      e.preventDefault();
      const formData = new FormData();
      formData.append('email', this.state.email);
      formData.append('password', this.state.password);
      formData.append('name', this.state.username);

      try {
        const response = await sendRequest({
          method: "POST",
          route: "/auth/register",
          body: formData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }


  };

  render() {
    const { isLogin, email, password, username } = this.state;

    return (
      <div>
        <input
          type="radio"
          checked={isLogin}
          id="toggle--login"
          name="toggle"
          className="ghost"
        />
        <input
          type="radio"
          checked={!isLogin}
          id="toggle--signup"
          name="toggle"
          className="ghost"
        />
        <span className='h1s'>
          <h1 className='Onbooks'>Online Books</h1>

        </span>

        <form className={`form form-${isLogin ? 'login' : 'signup'} framed`} onSubmit={this.handleSubmit}>
          {isLogin ? (
            <>
              <h1 className="text text--centered text--omega">Login</h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input--top"
                value={email}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="Log in"
                className="input input--submit"
              />
              <label
                htmlFor="toggle--signup"
                className="text text--small text--centered"
              >
                New? <b onClick={this.toggleForm}>Sign up</b>
              </label>
            </>
          ) : (
            <>
              <h2 className="text text--centered text--omega">Signup</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input--top"
                value={email}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input"
                value={username}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="Sign up"
                className="input input--submit"
              />
              <label
                htmlFor="toggle--login"
                className="text text--small text--centered"
              >
                Not new? <b onClick={this.toggleForm}>Log in</b>
              </label>
            </>
          )}
        </form>




        <div className="fullscreen-bg"></div>
      </div>
    );
  }
}

export default Login_Register;
