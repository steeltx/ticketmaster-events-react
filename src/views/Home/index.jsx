import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import useEventResults from "../../state/events-results";
import styles from './Home.module.css';

const Home = () => {
	// se llama a store de zustand	
	const { data, isLoading,  error, fetchEvents} = useEventResults();
	const events = useMemo( () => data?._embedded?.events || [], [data?._embedded?.events]);
	const page = useMemo( () => data?.page || {}, [data?.page]);

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

	// solo recrearse cuando cambie su dependencia de searchTerm o fetchEvents
	const handlePageClick = useCallback(( {selected} ) => {
		fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
	}, [searchTerm, fetchEvents]);

	const renderEvents = () => {
		if(isLoading){
			return <div>Cargando resultados ...</div>
		}
		if(error){
			return <div>Ha ocurrido un error</div>;
		}
		return (
			<div>
				<Events searchTerm={searchTerm} events={events} />
				<ReactPaginate 
					className={styles.pagination}
					nextClassName={styles.next}
					previousClassName={styles.previus}
					pageClassName={styles.page}
					activeClassName={styles.activePage}
					disabledClassName={styles.disabledPage}
					breakLabel='...'
					nextLabel='>'
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={page.totalPages}
					previousLabel='<'
					renderOnZeroPageCount={null}
				/>
			</div>
		);
	}

	return (
		<>
			<Navbar onSearch={handleNavbarSeach} ref={containerRef} />
			{ renderEvents() }
		</>
	);
}

export default Home;