import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		setPeople(people.filter((person) => person.id !== id));
	};

	return (
		<div style={{ margin: "50px auto" }}>
			<h2>useState array example</h2>
			{people.map((person) => {
				return (
					<div className="item" key={person.id}>
						<h4>{person.name}</h4>
						<button onClick={() => removeItem(person.id)}>Delete</button>
					</div>
				);
			})}
			<button className="btn" onClick={() => setPeople([])}>
				Clear Items
			</button>
			<hr style={{ margin: "10px auto" }} />
		</div>
	);
};

export default UseStateArray;
