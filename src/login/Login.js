import React from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
 
const Login = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Access Granted!');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert('Access Granted!');
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Access Granted!');
    };
    return (
        <div>
            <ReactSignupLoginComponent
                title="Signup/ Login"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};
 
export default Login;