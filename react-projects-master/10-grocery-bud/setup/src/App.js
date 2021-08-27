import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(localStorage.getItem("list"));
	} else {
		return [];
	}
};

function App() {
	const [name, setName] = useState("");
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			// display Alert
			showAlert(true, "danger", "Please Enter Item");
		} else if (name && isEditing) {
			// editing
			setList(
				list.map((item) => {
					if (item.id == editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName("");
			setEditID(null);
			setIsEditing(false);
			showAlert(true, "success", "Edit Successful!!!");
		} else {
			//more alert
			showAlert(true, "success", "Item Added to the List");
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName("");
		}
	};

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, "danger", "List is Now Empty");
		setList([]);
	};

	const removeItem = (id) => {
		showAlert(true, "danger", "Item Removed");
		setList(list.filter((item) => item.id !== id));
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>Grocery List</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="items"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button className="submit-btn">
						{isEditing ? "Edit" : "Submit"}
					</button>
				</div>
			</form>

			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem} editItem={editItem} />

					<button className="clear-btn" onClick={clearList}>
						Clear Items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
