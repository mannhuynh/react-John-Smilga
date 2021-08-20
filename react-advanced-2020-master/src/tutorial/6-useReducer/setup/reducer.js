export const reducer = (state, action) => {
	if (action.type === "NEW_ITEM") {
		return {
			...state,
			people: [...state.people, action.payload],
			isModalOpen: true,
			modalContent: "New Name Added",
		};
	}
	if (action.type === "NO_VALUE") {
		return {
			...state,
			isModalOpen: true,
			modalContent: "Please Add A Valid Name",
		};
	}
	if (action.type === "CLOSE_MODAL") {
		return { ...state, isModalOpen: false };
	}
	if (action.type === "REMOVE_ITEM") {
		const newPeople = state.people.filter(
			(person) => person.id !== action.payload
		);
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: "Name removed successful",
		};
	}
	throw new Error("ERROR: Please fill the input!!!");
};
