import React from "react";
import SignIn from "../../components/sign-in/sign-in.js";
import SignUp from "../../components/sign-up/sign-up.js";
import "./signIn-up.style.scss";

const SignInUP = () => (
  <div className="signinUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUP;
