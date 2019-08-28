import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input.js";
import "./sign-in.style.scss";
import FormButton from "../form-button/form-button.js";
import { auth, GoogleLogin } from "../../firebase/firebase.js";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span> Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            required
            handleInput={this.handleInput}
            label="email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            handleInput={this.handleInput}
            label="password"
          />
          <div className="button">
            <FormButton type="submit"> Sign in </FormButton>
            <FormButton onClick={GoogleLogin} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}
