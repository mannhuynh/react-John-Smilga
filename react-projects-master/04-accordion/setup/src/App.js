import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<div className="container">
				<h3>Arcordion Questions and Answers</h3>

				<section className="info">
					{questions.map((question) => {
						return (
							<SingleQuestion
								className="item"
								key={question.id}
								question={question}
							/>
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
