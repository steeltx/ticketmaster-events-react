import { useNavigate } from "react-router-dom";
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./Components/EventItem";

const Events = ({ searchTerm }) => {

    // usar el hook creado
    const { events, isLoading,  error } = useEventsData();

    const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        // redireccionar  a la pagina de detalle del id correspondiente
        navigate(`/detail/${id}`);
    }

    // iterar cada evento y mostrar el componente con sus propiedades
    const renderEvents = () => {
        let eventsFiltered = events;
        // en caso de que exista una busqueda, filtrar por el nombre
        if(searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
        }
        return eventsFiltered.map( (eventItem) => (
            <EventItem 
                key={`event-item-${eventItem.id}`} 
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ));
    };

    if(error){
        return <div>Ha ocurrido un error</div>
    }
    if(isLoading){
        return <div>Cargando resultados ...</div>
    }

    return (
        <div>
            Eventos
            { renderEvents() }
        </div>
    )
}

export default Events;