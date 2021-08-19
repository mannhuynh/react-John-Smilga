import React from "react";
import UseState1 from "./tutorial/1-useState/setup/1-error-example";
import UseState3 from "./tutorial/1-useState/setup/3-useState-array";
import UseState4 from "./tutorial/1-useState/setup/4-useState-object";
import UseState5 from "./tutorial/1-useState/setup/5-useState-counter";
import UseEffect1 from "./tutorial/2-useEffect/setup/1-useEffect-basics";

function App() {
	return (
		<div className="container">
			<h1 style={{ paddingBottom: "0px", marginBottom: "0px" }}>
				Advanced Tutorial
			</h1>
			<hr style={{ margin: "0px auto 20px auto" }} />
			<UseState1 />
			<UseState3 />
			<UseState4 />
			<UseState5 />
			<UseEffect1 />
		</div>
	);
}

export default App;
