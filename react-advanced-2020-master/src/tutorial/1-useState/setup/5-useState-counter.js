import React, { useState } from "react";

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const complexIncrease = () => {
		setTimeout(() => {
			// setValue(value + 1) will not working. Use below function
			setValue((preValue) => preValue + 1);
		}, 2000);
	};

	return (
		<>
			<section style={{ margin: "4rem 0" }}>
				<h2>Regular Counter</h2>

				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>
					Decrement
				</button>
				<button className="btn" onClick={() => setValue(0)}>
					Reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					Increment
				</button>
			</section>
			<section style={{ margin: "4rem 0" }}>
				<h2>More Complex Counter</h2>
				<h1>{value}</h1>
				<p>Click several times and wait!!!</p>
				<button
					style={{ marginTop: "0px" }}
					className="btn"
					onClick={complexIncrease}
				>
					Increase Later
				</button>
			</section>
			<hr style={{ margin: "0px auto 50px auto" }} />
		</>
	);
};

export default UseStateCounter;
