import React from "react";

import "./sign-in-up.styles.scss";
import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/SignUp/SignUp";

const SignInandSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInandSingUp;
