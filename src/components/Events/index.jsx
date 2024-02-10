import { useState } from "react";
import EventItem from "./Components/EventItem";
import eventsJSON from '../../data/events.json';

const Events = ({ searchTerm }) => {

    const [ data, setData ] = useState(eventsJSON);
    // obtener la lista de los eventos del JSON
    const { _embedded: { events } } = data;

    const handleEventItemClick = (id) => {
        console.log(id)
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

    return (
        <div>
            Eventos
            { renderEvents() }
        </div>
    )
}

export default Events;