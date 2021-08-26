import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	// const textLength
	// console.log(textLength);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		if (amount >= 8) {
			amount = 8;
		} else if (amount <= 0) {
			amount = 1;
		}
		setText(data.slice(0, amount));
	};

	return (
		<section className="section-center">
			<h2>Tired of boring Lorem Ipsum???</h2>
			<form action="" className="lorem-form" onClick={handleSubmit}>
				<label htmlFor="amout">Paragraphs:</label>
				<input
					type="number"
					name="amount"
					value={count}
					id="amount"
					onChange={(e) => setCount(e.target.value)}
				/>
				<button className="btn" type="submit">
					Generate
				</button>
			</form>

			{text.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</section>
	);
}

export default App;
