import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import SignupForm from "./components/SignupForm";
import "./App.css";

function App() {

	// estado que contiene el valor del input de busqueda
	const [searchTerm, setSearchTerm] = useState('');

	const handleNavbarSeach = (term) => {
		setSearchTerm(term);
	}

	return (
		<>
			<Navbar onSearch={handleNavbarSeach} />
			<Events searchTerm={searchTerm} />
			{/* <SignupForm /> */}
		</>
	);
}

export default App;
