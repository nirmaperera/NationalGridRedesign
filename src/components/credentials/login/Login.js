import React, { Component } from 'react'

import './login.css';

class Login extends Component {
    render() {
        return (
            <form className="base-container" ref={this.props.containerRef}>
                <div className="header">
                    <h3>NYC Gas and MA Gas Sign in</h3>
                    <p> All other customers, go to our <a className="homeLink" href="https://www.nationalgridus.com/NY-Home/Default.aspx"> homepage</a>  and change your location on the top left of the page to sign in.</p>
                </div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">

                            <input type="text" name="username" placeholder="User ID" required />
                        </div>
                        <div className="form-group">

                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <input type="submit" className="btn" value="Login" />



                    <div className="forgotCreds">
                        <a href="https://online.nationalgridus.com/forgetpass/KSE_Password.jsp">Forgot Password?</a>
                        <span>  |  </span>
                        <a href="https://online.nationalgridus.com/forgetpass/KSE_userid.jsp">Forgot UserID?</a>

                    </div>
                </div>
            </form>
        )
    }
}

export default Login;
