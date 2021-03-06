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
import Conditional3 from "./tutorial/3-conditional-rendering/setup/3-show-hide";
import Form1 from "./tutorial/4-forms/setup/1-controlled-inputs";
import Form2 from "./tutorial/4-forms/setup/2-multiple-inputs";
import Ref from "./tutorial/5-useRef/setup/1-useRef-basics";
import Reducer from "./tutorial/6-useReducer/setup";
import PropDrilling from "./tutorial/7-prop-drilling/setup/1-prop-drilling";
import ContextAPI from "./tutorial/8-useContext/setup/1-context-api";
import CustomHook from "./tutorial/9-custom-hooks/setup/1-fetch-example";
import PropType from "./tutorial/10-prop-types/setup";
import ReactRouter from "./tutorial/11-react-router/setup";

function App() {
	return (
		<div className="container">
			<h1>Advanced Tutorial</h1>
			<hr />
			<ReactRouter />
			<PropType />
			<CustomHook />
			<ContextAPI />
			<PropDrilling />
			<Reducer />
			<Ref />
			<Form1 />
			<Form2 />
			<Conditional1 />
			<Conditional2 />
			<Conditional3 />
			<UseEffect1 />
			<UseEffect2 />
			<UseEffect3 />
			<UseState1 />
			<UseState3 />
			<UseState4 />
			<UseState5 />
		</div>
	);
}

export default App;
