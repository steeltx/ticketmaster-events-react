import { memo } from "react";
import { useNavigate } from "react-router-dom";
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./Components/EventItem";

const Events = ({ searchTerm, events }) => {

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
        if(eventsFiltered.length < 1){
            return(
                <p>No hay eventos que coincidan con la busqueda, intente nuevamente.</p>
            );
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

    return (
        <div>
            <h2>Eventos</h2>
            { renderEvents() }
        </div>
    )
}

// se implementa memo para no re rederizar los elementos hijo
export default memo(Events);