import React from "react";
import Setup1 from "./tutorial/1-useState/setup/1-error-example";
import Setup3 from "./tutorial/1-useState/setup/3-useState-array";
import Setup4 from "./tutorial/1-useState/setup/4-useState-object";
import Setup5 from "./tutorial/1-useState/setup/5-useState-counter";

function App() {
	return (
		<div className="container">
			<h1 style={{ paddingBottom: "0px", marginBottom: "0px" }}>
				Advanced Tutorial
			</h1>
			<hr style={{ margin: "0px auto 20px auto" }} />
			<Setup1 />
			<Setup3 />
			<Setup4 />
			<Setup5 />
		</div>
	);
}

export default App;
