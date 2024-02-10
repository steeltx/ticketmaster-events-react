import Navbar from "./components/Navbar";
import "./App.css";
import Events from "./components/Events";
import { useState } from "react";

function App() {

	const [searchTerm, setSearchTerm] = useState('');

	const handleNavbarSeach = (term) => {
		setSearchTerm(term);
	}

	return (
		<>
			<Navbar onSearch={handleNavbarSeach} />
			<Events searchTerm={searchTerm} />
		</>
	);
}

export default App;
