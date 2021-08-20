import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
	people: data,
	isModalOpen: false,
	modalContent: "",
};

const Index = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			dispatch({
				type: "NEW_ITEM",
				payload: { id: new Date().getTime().toString(), name },
			});
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};

	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};
	return (
		<div style={{ position: "relative" }}>
			<h2>useReducer</h2>
			{state.isModalOpen && (
				<Modal modalContent={state.modalContent} closeModal={closeModal} />
			)}
			<form action="" className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button
					type="submit"
					style={{ display: "block", margin: " 10px auto" }}
				>
					Add Name
				</button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id} className="item">
						<h4>{person.name}</h4>
						<button
							onClick={() =>
								dispatch({ type: "REMOVE_ITEM", payload: person.id })
							}
						>
							Remove
						</button>
					</div>
				);
			})}
			<hr />
		</div>
	);
};

export default Index;
