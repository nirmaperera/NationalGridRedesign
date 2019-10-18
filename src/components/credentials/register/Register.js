import React, { Component } from 'react'
import './register.css';

class Register extends Component {
    render() {
        return (
            <form className="base-container" ref={this.props.containerRef}>
                <div className="header-reg"><h3>Register</h3></div>
                <div className="content">

                    <div className="form">
                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <input type="text" name="FirstName" placeholder="First Name" required />
                            </div>
                            <div className="form-row-reg">
                                <input type="text" name="lastName" placeholder="Last Name" required />
                            </div>

                        </div>
                        <div className="form-group-reg">

                            <div className="form-row-reg">
                                <input type="text" name="userId" placeholder="User ID" required />
                            </div>
                            <div className="form-row-reg">
                                <input type="number" name="ssn" placeholder="ssn (last 4 digits)" required />
                            </div>
                        </div>

                        <div className="form-group-reg">


                            <div className="form-row-reg">
                                <input type="password" name="password" placeholder="password" required />
                            </div>
                            <div className="form-row-reg">
                                <input type="password" name="password2" placeholder="confirm password" required />
                            </div>
                        </div>


                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <input type="email" name="email" placeholder="email" required />
                            </div>
                            <div className="form-row-reg">
                                <input type="email" name="email2" placeholder="confirm email" required />
                            </div>
                        </div>

                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <select >
                                    <label>Security Question</label>
                                    <i class="fas fa-arrow-down"></i>
                                    <option value="q1">What is your mother's maiden name?</option>
                                    <option value="q2">What's the name of your favorite pet?</option>
                                    <option value="q3">What's your favorite color?</option>
                                    <option value="q4">What's the your first teacher's last name?</option>
                                </select>

                                <input className="form-row-reg" type="text" placeholder="Answer" required />
                            </div>
                        </div>
                        <div className="form-group-reg">
                            <input className="form-row-reg" type="number" placeholder="zip code" required />
                        </div>

                    </div>
                </div>
                <div className="footer-reg">
                    <input type="submit" className="btn-reg" value="Register" />

                </div>
            </form >

        )
    }
}

export default Register;
