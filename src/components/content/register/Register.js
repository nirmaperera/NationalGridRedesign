import React, { Component } from 'react'
import './register.css';

class Register extends Component {
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header"><h3>Register</h3></div>
                <div className="content">

                    <div className="form">
                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <input type="text" name="FirstName" placeholder="First Name" />
                            </div>
                            <div className="form-row-reg">
                                <input type="text" name="lastName" placeholder="Last Name" />
                            </div>

                        </div>
                        <div className="form-group-reg">

                            <div className="form-row-reg">
                                <input type="text" name="userId" placeholder="User ID" />
                            </div>
                            <div className="form-row-reg">
                                <input type="number" name="ssn" placeholder="ssn (last 4 digits)" />
                            </div>
                        </div>

                        <div className="form-group-reg">


                            <div className="form-row-reg">
                                <input type="password" name="password" placeholder="password" />
                            </div>
                            <div className="form-row-reg">
                                <input type="password" name="password2" placeholder="confirm password" />
                            </div>
                        </div>


                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <input type="email" name="email" placeholder="email" />
                            </div>
                            <div className="form-row-reg">
                                <input type="email" name="email2" placeholder="confirm email" />
                            </div>
                        </div>

                        <div className="form-group-reg">
                            <div className="form-row-reg">
                                <select>
                                    <label>Security Question</label>
                                    <option value="q1">What is your mother's maiden name?</option>
                                    <option value="q2">What's the name of your favorite pet?</option>
                                    <option value="q3">What's your favorite color?</option>
                                    <option value="q4">What's the your first teacher's last name?</option>
                                </select>

                                <input className="form-row-reg" type="text" placeholder="Answer" ></input>
                            </div>
                        </div>
                        <div className="form-group-reg">
                            <input className="form-row-reg" type="number" placeholder="zip code"></input>
                        </div>

                    </div>
                </div>
                <div className="footer-reg">
                    <button type="button" className="btn-reg">
                        Register
              </button>
                </div>
            </div >

        )
    }



}

export default Register;
