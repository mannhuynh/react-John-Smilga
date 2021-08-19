import React from "react";
import UseState1 from "./tutorial/1-useState/setup/1-error-example";
import UseState3 from "./tutorial/1-useState/setup/3-useState-array";
import UseState4 from "./tutorial/1-useState/setup/4-useState-object";
import UseState5 from "./tutorial/1-useState/setup/5-useState-counter";
import UseEffect1 from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffect2 from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffect3 from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";
import Conditional1 from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import Conditional2 from "./tutorial/3-conditional-rendering/setup/2-short-circuit";

function App() {
	return (
		<div className="container">
			<h1>Advanced Tutorial</h1>
			<hr />
			<UseState1 />
			<UseState3 />
			<UseState4 />
			<UseState5 />
			<UseEffect1 />
			<UseEffect2 />
			<UseEffect3 />
			<Conditional1 />
			<Conditional2 />
		</div>
	);
}

export default App;
