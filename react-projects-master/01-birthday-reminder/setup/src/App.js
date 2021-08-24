import React, { useState } from "react";
import data from "./data";
// import List from "./List";

function App() {
	const [people, setPeople] = useState(data);

	return (
		<main>
			<section className="container">
				<h3>{people.length} Birthdays Today</h3>
				{/* <List people={people} /> */}
				{people.map((person) => {
					const { id, name, age, image } = person;
					return (
						<article key={id} className="person">
							<img src={image} alt={name} />
							<div>
								<h4>{name}</h4>
								<p>{age} years</p>
							</div>
						</article>
					);
				})}
				<button onClick={() => setPeople([])}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
