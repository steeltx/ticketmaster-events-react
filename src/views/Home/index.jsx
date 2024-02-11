import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventsData from "../../hooks/useEventsData";

const Home = () => {
	
	const { events, isLoading,  error, fetchEvents } = useEventsData();

    // estado que contiene el valor del input de busqueda
	const [searchTerm, setSearchTerm] = useState('');
	const containerRef = useRef();

	useEffect( () => {
		// al cargar el componente, llamar el API
		fetchEvents();
	},[]);

	const handleNavbarSeach = (term) => {
		setSearchTerm(term);
		// cuando se busque, llamar nuevamente al API con el parametro de la busqueda
		fetchEvents(`&keyword=${term}`);
	}

	return (
		<>
			<Navbar onSearch={handleNavbarSeach} ref={containerRef} />
			{isLoading ?  <div>Cargando resultados ...</div> : <Events searchTerm={searchTerm} events={events} />}
			{!!error && <div>Ha ocurrido un error</div>}
			{/* <SignupForm /> */}
		</>
	);
}

export default Home;