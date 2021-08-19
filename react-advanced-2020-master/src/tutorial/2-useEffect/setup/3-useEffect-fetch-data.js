import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<h2>fetch data</h2>
			<h3>Github Users</h3>
			<ul className="users">
				{users.map((user) => {
					return (
						<li key={user.id}>
							<img src={user.avatar_url} alt={user.login} />
							<div>
								<h4>{user.login}</h4>
								<a href={user.html_url}>Go to Profile</a>
							</div>
						</li>
					);
				})}
      </ul>
      <hr/>
		</>
	);
};

export default UseEffectFetchData;
