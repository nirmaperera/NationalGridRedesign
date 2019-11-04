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
            email: "",
            securityQuestion: "",
            securityAnswer: "",
            editName: false,
            editUser: false,
            editEmail: false,
            editPassword: false,
            editSecurity: false,
        }

    }

    componentDidMount() {
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        const userID = localStorage.getItem('userID');
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        const securityAns = localStorage.getItem('securityAns');
        const securityQue = localStorage.getItem('securityQues');

        this.setState({
            firstName: firstName,
            lastName: lastName,
            userID: userID,
            password: password,
            email: email,
            securityQuestion: securityQue,
            securityAnswer: securityAns
        })

    }

    handleName = () => {
        this.setState({
            editName: !this.state.editName,
        });
    }

    handleUserId = () => {
        this.setState({
            editUser: !this.state.editUser
        });

    }

    handleEmail = () => {
        this.setState({
            editEmail: !this.state.editEmail
        });

    }

    handlePassword = () => {
        this.setState({
            editPassword: !this.state.editPassword
        });

    }

    handleSecurity = () => {
        this.setState({
            editSecurity: !this.state.editSecurity
        });

    }

    handleUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="containerProfile">
                <h1>Profile</h1>
                <div className="signIn-creds">
                    <hr />
                    <div className="editName">
                        <label>Name</label>
                        <input type="text" value={this.state.firstName + " " + this.state.lastName} readOnly={true}></input>
                        <button value="edit" onClick={this.handleName}> edit</button>
                        {this.state.editName ?
                            <form>
                                <input onChange={this.handleUpdate} className="updatedInfo" type="text" placeholder={this.state.firstName + " " + this.state.lastName}></input>
                                <input type="submit" value="save" />
                                <input type="submit" value="cancel" />
                            </form>
                            : null
                        }
                    </div>
                    <div className="editUsername">
                        <label>User ID</label>
                        <input type="text" value={this.state.userID} readOnly={true}></input>
                        <button onClick={this.handleUserId}> edit</button>
                        <form>
                            {this.state.editUser ?
                                <div>
                                    <input onChange={this.handleUpdate} name="firstName" className="updatedInfo" type="text" placeholder={this.state.userID}></input>
                                    <input type="submit" value="save" />
                                    <input type="submit" value="cancel" />
                                </div>
                                : null}
                        </form>

                    </div>

                    <div className="editEmail">
                        <label>Email</label>
                        <input type="text" value={this.state.email} readOnly={true}></input>
                        <button onClick={this.handleEmail}> edit</button>
                        <form>
                            {this.state.editEmail ?
                                <div>
                                    <input onChange={this.handleUpdate} name="email" className="updatedInfo" type="text" placeholder={this.state.email}></input>
                                    <input type="submit" value="save" />
                                    <input type="submit" value="cancel" />
                                </div>
                                : null}
                        </form>

                    </div>

                    <div className="editPassword">
                        <label>Password</label>
                        <input type="password" value={this.state.password} readOnly={true}></input>
                        <button onClick={this.handlePassword}> edit</button>
                        <form>
                            {this.state.editPassword ?
                                <div>
                                    <input onChange={this.handleUpdate} name="password" className="updatedInfo" type="password" placeholder={this.state.password}></input>
                                    <input type="submit" value="save" />
                                    <input type="submit" value="cancel" />
                                </div>

                                : null}

                        </form>
                    </div>

                    <div className="editSecurity">
                        <label>Security Question</label>
                        <input type="text" value={this.state.securityQuestion} readOnly={true} />
                        <input type="password" value={this.state.securityAnswer} readOnly={true} />
                        <button onClick={this.handleSecurity}> edit</button>
                        <form>
                            {this.state.editSecurity ?
                                <div>
                                    <input onChange={this.handleUpdate} name="securityQuestion" type="text" placeholder={this.state.securityQuestion} />
                                    <input onChange={this.handleUpdate} name="securityAnswer" type="password" placeholder={this.state.securityAnswer} />
                                    <input type="submit" value="save" />
                                    <input type="submit" value="cancel" />
                                </div>
                                : null}

                        </form>
                    </div>

                </div>

            </div >

        )
    }
}


export default Profile;
