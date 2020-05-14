import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../fomr-unput/Form-input";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already Have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            label="email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            value={this.state.password}
            required
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
          <CustomButton type="submit" value="Submit form" >SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN with Google</CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
