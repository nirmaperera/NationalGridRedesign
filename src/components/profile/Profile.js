import React, { Component } from "react";
import './profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userID: "",
            password: "",
            email: ""
        }

    }

    componentDidMount() {
        const userID = localStorage.getItem('userID');
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');

        this.setState({
            userID: userID,
            password: password,
            email: email
        })

    }
    render() {
        return (
            <div className="main-profile">
                <h1>Profile</h1>
                <div className="signIn-creds">
                    <h2>Sign In </h2>
                    <hr />
                    <input type="text" value={this.state.userID} readOnly={true}></input>
                    <input type="password" value={this.state.password} readOnly={true}></input>

                </div>

            </div>

        )
    }
}


export default Profile;
