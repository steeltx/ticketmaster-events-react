import { useState } from "react";
import EventItem from "./Components/EventItem";
import eventsJSON from '../../data/events.json';

const Events = () => {

    const [ data, setData ] = useState(eventsJSON);
    // obtener la lista de los eventos del JSON
    const { _embedded: { events } } = data;

    // iterar cada evento y mostrar el componente con sus propiedades
    const eventsComponent = events.map( (eventItem) => (
        <EventItem 
            key={`event-item-${eventItem.id}`} 
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
        />
    ));

    return (
        <div>
            Eventos
            { eventsComponent }
        </div>
    )
}

export default Events;