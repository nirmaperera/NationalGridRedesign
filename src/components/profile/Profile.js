import React, { Component } from "react";
import './profile.scss';

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
        window.scrollTo(0, 0)
        document.title = 'Profile | National Grid';
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

    handleSelect = (event) => {
        this.setState({
            securityQuestion: event.target.value
        });

        console.log('this.state.securityquestion', this.state.securityQuestion);

    }

    handleSubmit = () => {
        const { userID, password, firstName, lastName, email, securityQuestion, securityAnswer } = this.state;
        localStorage.setItem('userID', userID);
        localStorage.setItem('password', password);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('securityAns', securityAnswer);
        localStorage.setItem('securityQues', securityQuestion);

    }

    render() {
        return (
            <div className="containerProfile">
                <h1 className="animated slideInDown">Profile <i className="fas fa-users-cog"></i></h1>
                <div className="signIn-creds">
                    <hr />

                    <div className="profile-group">
                        <div className="head">
                            <label>Name</label>
                            <button className="edit-btn" value="edit" onClick={this.handleName}><i className="fas fa-user-edit"></i></button>
                        </div>
                        <input type="text" value={this.state.firstName + " " + this.state.lastName} readOnly={true}></input>
                        <form>
                            {this.state.editName ?
                                <div className="group-update animated slideInDown">
                                    <input onChange={this.handleUpdate} name="firstName" className="updatedInfo" type="text" placeholder={this.state.firstName}></input>
                                    <input onChange={this.handleUpdate} name="lastName" className="updatedInfo" type="text" placeholder={this.state.lastName}></input>
                                    <div className="profile-btns">
                                        <input onClick={this.handleSubmit} type="submit" value="save" />
                                        <input type="submit" value="cancel" />
                                    </div>
                                </div>
                                : null}
                        </form>
                    </div>
                    <div className="profile-group">
                        <div className="head">
                            <label>User ID</label>
                            <button className="edit-btn" onClick={this.handleUserId}><i className="fas fa-user-edit"></i></button>
                        </div>
                        <input type="text" value={this.state.userID} readOnly={true}></input>
                        <form>
                            {this.state.editUser ?
                                <div className="group-update animated slideInDown">
                                    <input onChange={this.handleUpdate} name="userID" className="updatedInfo" type="text" placeholder={this.state.userID}></input>
                                    <div className="profile-btns">
                                        <input onClick={this.handleSubmit} type="submit" value="save" />
                                        <input type="submit" value="cancel" />
                                    </div>
                                </div>
                                : null}
                        </form>

                    </div>

                    <div className="profile-group">
                        <div className="head">
                            <label>Email</label>
                            <button className="edit-btn" onClick={this.handleEmail}> <i className="fas fa-user-edit"></i></button>
                        </div>
                        <input type="text" value={this.state.email} readOnly={true}></input>
                        <form>
                            {this.state.editEmail ?
                                <div className="group-update animated slideInDown">
                                    <input onChange={this.handleUpdate} name="email" className="updatedInfo" type="text" placeholder={this.state.email}></input>
                                    <div className="profile-btns">
                                        <input onClick={this.handleSubmit} type="submit" value="save" />
                                        <input type="submit" value="cancel" />
                                    </div>
                                </div>
                                : null}
                        </form>

                    </div>

                    <div className="profile-group">
                        <div className="head">
                            <label>Password</label>
                            <button className="edit-btn" onClick={this.handlePassword}> <i className="fas fa-user-edit"></i></button>
                        </div>
                        <input type="password" value={this.state.password} readOnly={true}></input>

                        <form>
                            {this.state.editPassword ?
                                <div className="group-update animated slideInDown">
                                    <input onChange={this.handleUpdate} name="password" className="updatedInfo" type="password" placeholder={this.state.password}></input>
                                    <div className="profile-btns">
                                        <input onClick={this.handleSubmit} type="submit" value="save" />
                                        <input type="submit" value="cancel" />
                                    </div>
                                </div>

                                : null}

                        </form>
                    </div>

                    <div className="profile-group">
                        <div className="head">
                            <label>Security Question</label>
                            <button className="edit-btn" onClick={this.handleSecurity}> <i className="fas fa-user-edit"></i></button>
                        </div>
                        <input type="text" value={this.state.securityQuestion} readOnly={true} />
                        <input type="password" value={this.state.securityAnswer} readOnly={true} />

                        <form>
                            {this.state.editSecurity ?
                                <div className="group-update animated slideInDown">
                                    <select onChange={this.handleSelect} value={this.state.securityQuestion} >
                                        <label>Security Question </label>
                                        <option>Security Question</option>
                                        <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                                        <option value="What's the name of your favorite pet?">What's the name of your favorite pet?</option>
                                        <option value="What's your favorite color?">What's your favorite color?</option>
                                        <option value="What's the your first teacher's last name?">What's the your first teacher's last name?</option>
                                    </select>
                                    <div>
                                        <input onChange={this.handleUpdate} name="securityAnswer" type="password" placeholder={this.state.securityAnswer} />
                                    </div>
                                    <div className="profile-btns">
                                        <input onClick={this.handleSubmit} type="submit" value="save" />
                                        <input type="submit" value="cancel" />
                                    </div>
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
