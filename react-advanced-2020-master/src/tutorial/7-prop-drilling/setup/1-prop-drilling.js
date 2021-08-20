import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
	const [people, setPeople] = useState(data);

	const handleRemove = (id) => {
		setPeople((people) => people.filter((person) => person.id !== id));
	};

	return (
		<>
			<h2>prop drilling</h2>
			<PeopleList people={people} handleRemove={handleRemove} />
			<hr />
		</>
	);
};

const PeopleList = ({ people, handleRemove }) => {
	return (
		<div>
			{people.map((person) => {
				return (
					<Person key={person.id} {...person} handleRemove={handleRemove} />
				);
			})}
		</div>
	);
};

const Person = ({ id, name, handleRemove }) => {
	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => handleRemove(id)}>remove</button>
		</div>
	);
};
export default PropDrilling;
