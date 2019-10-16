import React, { Component } from 'react'

import './login.css';

class Login extends Component {
    render() {
        return (
            <form className="main-form">
                <h2>NYC Gas and MA Gas Sign in</h2>

                <p> All other customers, go to our <a href="https://www.nationalgridus.com/NY-Home/Default.aspx"> homepage</a> <br /> and change your location on the top left of the page to sign in.</p>

                <div className="inputFields">
                    <input className="form-row" type="text" placeholder="User ID"></input>
                    <input className="form-row" type="password" placeholder="Password"></input>

                </div>

                <div className="main-inputs">
                    <input className="form-row" type="button" value="login"></input>
                    <a href="/">Register</a>

                </div>

                <div className="note">
                    <a href="https://online.nationalgridus.com/viewmybills/LoginActivate?applicurl=aHR0cHM6Ly9vbmxpbmUubmF0aW9uYWxncmlkdXMuY29tL3ZpZXdteWJpbGxzL215YWNjb3VudC8=&auth_method=0" >
                        Trying to sign in with account number?</a>
                </div>
                <div className="forgotCreds">
                    <a href="https://online.nationalgridus.com/forgetpass/KSE_Password.jsp">Forgot Password?</a>
                    <span> | </span>
                    <a href="https://online.nationalgridus.com/forgetpass/KSE_userid.jsp">Forgot UserID?</a>

                </div>
            </form>
        )
    }
}


export default Login;
