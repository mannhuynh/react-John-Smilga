import React, { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Peter",
		age: 24,
		message: "Random Message",
	});

	const changeMessage = () => {
		// Spread the object person to keep a copy of it
		setPerson({ ...person, message: "Hello World" });
	};

	return (
		<>
			<h2>useState Object Spreading</h2>
			<h3>Name: {person.name}</h3>
			<h3>Age: {person.age}</h3>
			<h3>Message: {person.message}</h3>
			<button className="btn" onClick={changeMessage}>
				Change Message
			</button>
			<hr style={{ margin: "30px auto" }} />
		</>
	);
};

export default UseStateObject;
