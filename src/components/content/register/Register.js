import React, { Component } from 'react'

import './register.css';

class Register extends Component {
    render() {
        return (
            <form className="main-form">
                <h2>Account Sign Up</h2>
                <div className="inputFields">
                    <input className="form-row" type="text" placeholder="First Name"></input>
                    <input className="form-row" type="text" placeholder="Last Name"></input>
                    <input className="form-row" type="text" placeholder="User ID"></input>
                    <input className="form-row" type="number" placeholder="SSN (last 4 digits)"></input>
                    <input className="form-row" type="email" placeholder="email"></input>
                    <input className="form-row" type="email" placeholder="Confirm email"></input>
                    <input className="form-row" type="password" placeholder="Password"></input>
                    <input className="form-row" type="password" placeholder="Confirm Password"></input>
                    <div className="securityQuestion">
                        <select>
                            <label>Security Question</label>
                            <option value="q1">What is your mother's maiden name?</option>
                            <option value="q2">What's the name of your favorite pet?</option>
                            <option value="q3">What's your favorite color?</option>
                            <option value="q4">What's the your first teacher's last name?</option>
                        </select>
                        <label>Answer</label>
                        <input className="form-row" type="text" ></input>
                    </div>
                    <input className="form-row" type="number" placeholder="zip code"></input>
                </div>

                <div className="main-inputs">
                    <input className="form-row" type="button" value="login"></input>
                    <a href="/">Register</a>
                </div>

            </form>

        )
    }
}

export default Register;
