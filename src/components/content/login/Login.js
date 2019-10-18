import React, { Component } from 'react'

import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">
                    <h3>NYC Gas and MA Gas Sign in</h3>
                    <p> All other customers, go to our <a href="https://www.nationalgridus.com/NY-Home/Default.aspx"> homepage</a>  and change your location on the top left of the page to sign in.</p>
                </div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">

                            <input type="text" name="username" placeholder="User ID" />
                        </div>
                        <div className="form-group">

                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Login
              </button>

                    <div className="forgotCreds">
                        <a href="https://online.nationalgridus.com/forgetpass/KSE_Password.jsp">Forgot Password?</a>
                        <span>  |  </span>
                        <a href="https://online.nationalgridus.com/forgetpass/KSE_userid.jsp">Forgot UserID?</a>

                    </div>
                </div>
            </div>


        )
    }



}

export default Login;
