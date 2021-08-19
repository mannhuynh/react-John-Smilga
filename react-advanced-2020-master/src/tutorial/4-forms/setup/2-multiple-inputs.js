import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const MultipleInputs = () => {
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
	const [people, setPeople] = useState([]);

	const handleChange = (e) => {
		const propName = e.target.name;
		const propValue = e.target.value;

		// [propName] is used dynamicly to inject value
		setPerson({ ...person, [propName]: propValue });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (person.firstName && person.email && person.age) {
			const newPerson = { ...person, id: new Date().getTime().toString() };

			setPeople([...people, newPerson]);
			setPerson({ firstName: "", email: "", age: "" });
		} else {
			console.log("empty values");
		}
	};

	const { firstName, email, age } = person;

	return (
		<>
			<h2>Multiple Inputs</h2>
			<article>
				<form className="form">
					<div className="form-control">
						<label htmlFor="firstName">Name : </label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email : </label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="age">Age : </label>
						<input
							type="age"
							id="age"
							name="age"
							value={age}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" onClick={handleSubmit}>
						add person
					</button>
				</form>
				{people.map((aPerson) => {
					const { id, firstName, email, age } = aPerson;
					return (
						<div className="item" key={id}>
							<h4>{firstName}</h4>
							<p>{age}</p>
							<p>{email}</p>
						</div>
					);
				})}
			</article>

			<hr />
		</>
	);
};

export default MultipleInputs;
