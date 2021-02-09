import React, { useState, useEffect } from "react";
import './profile.scss';

const Profile = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [userID, setUserID] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [editName, setEditName] = useState(false)
	const [editUser, setEditUser] = useState(false)
	const [editEmail, setEditEmail] = useState(false)
	const [editPassword, setEditPassword] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
		document.title = 'Profile | National Grid';
		const firstName = localStorage.getItem('firstName');
		const lastName = localStorage.getItem('lastName');
		const userID = localStorage.getItem('userID');
		const password = localStorage.getItem('password');
		const email = localStorage.getItem('email');

		setFirstName(firstName);
		setLastName(lastName);
		setUserID(userID);
		setPassword(password);
		setEmail(email);
	})

	const handleSubmit = () => {
		localStorage.setItem('userID', userID);
		localStorage.setItem('password', password);
		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);
		localStorage.setItem('email', email);
	}

	return (
		<div className="containerProfile">
			<div className="signIn-creds">
				<h1 className="animated slideInDown">Profile <i className="fas fa-users-cog"></i></h1>
				<div className="signIn-cols">
					<div className="profile-group">
						<div className="head">
							<label>Name</label>
							<button className="edit-btn" value="edit" onClick={() => { setEditName(!editName) }}><i className="fas fa-user-edit"></i></button>
						</div>
						<input type="text" value={firstName + " " + lastName} readOnly={true}></input>
						<form>
							{editName ?
								<div className="group-update animated slideInDown">
									<input onChange={e => setFirstName(e.target.value)} vale={firstName} className="updatedInfo" type="text" placeholder={firstName}></input>
									<input onChange={e => setLastName(e.target.value)} value={lastName} className="updatedInfo" type="text" placeholder={lastName}></input>
									<div className="profile-btns">
										<input onClick={handleSubmit()} type="submit" value="save" />
										<input type="submit" value="cancel" />
									</div>
								</div>
								: null}
						</form>
					</div>

					<div className="profile-group">
						<div className="head">
							<label>User ID</label>
							<button className="edit-btn" onClick={() => { setEditUser(!editUser) }}><i className="fas fa-user-edit"></i></button>
						</div>
						<input type="text" value={userID} readOnly={true}></input>
						<form>
							{editUser ?
								<div className="group-update animated slideInDown">
									<input onChange={e => setUserID(e.target.value)} value={userID} className="updatedInfo" type="text" placeholder={userID}></input>
									<div className="profile-btns">
										<input onClick={handleSubmit()} type="submit" value="save" />
										<input type="submit" value="cancel" />
									</div>
								</div>
								: null}
						</form>
					</div>
				</div>

				<div className="signIn-cols">
					<div className="profile-group">
						<div className="head">
							<label>Email</label>
							<button className="edit-btn" onClick={() => { setEditEmail(!editEmail) }}> <i className="fas fa-user-edit"></i></button>
						</div>
						<input type="text" value={email} readOnly={true}></input>
						<form>
							{editEmail ?
								<div className="group-update animated slideInDown">
									<input onChange={e => setEmail(e.target.value)} value={email} className="updatedInfo" type="text" placeholder={email}></input>
									<div className="profile-btns">

										<input onClick={handleSubmit()} type="submit" value="save" />
										<input type="submit" value="cancel" />
									</div>
								</div>
								: null}
						</form>
					</div>

					<div className="profile-group">
						<div className="head">
							<label>Password</label>
							<button className="edit-btn" onClick={() => { setEditPassword(!editPassword) }}> <i className="fas fa-user-edit"></i></button>
						</div>
						<input type="password" value={password} readOnly={true}></input>
						<form>
							{editPassword ?
								<div className="group-update animated slideInDown">
									<input onChange={e => setPassword(e.target.value)} value={password} className="updatedInfo" type="password" placeholder={password}></input>
									<div className="profile-btns">
										<input onClick={handleSubmit()} type="submit" value="save" />
										<input type="submit" value="cancel" />
									</div>
								</div>
								: null}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;
