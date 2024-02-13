import { useEffect, useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constans";
import EventItem from '../../../../components/Events/Components/EventItem';
import { useNavigate } from "react-router-dom";

const LikedEvents = () => {

    // estado local para los datos del evento
    const [events, setEvents] = useState([]);
    // estados de carga y error
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventsDetails = async () => {
            try {
                setIsLoading(true);
                // obtener los elementos en el LS
                const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
                const results = [];
                // recorrer los elementos y obtener su informacion para pasarla al estado
                for (const eventId of likedEvents){
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
                    const data = await response.json();
                    results.push(data);
                }
                setEvents(results);
            } catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchEventsDetails();
    },[]);

    // enviar hacia la pagina de detalle
    const handleEventItemClick = (eventId) => {
        navigate(`/detail/${eventId}`);
    }

    if(Object.keys(error).length > 0){
        return <div>Ha ocurrido un error</div>
    }

    if(isLoading) {
        return <div>Cargando ...</div>
    }

    if(events.length < 1){
        return <div>Sin eventos.</div>
    }

    return (
        <div>
            {events.map( (event, index) => (
                <EventItem 
                    key={`liked-event-item-${event.id}`}
                    name={event.name}
                    info={event.info}
                    image={event.images[0].url}
                    onEventClick={handleEventItemClick}
                    id={event.id}
                />
            ))}
        </div>
    );
}

export default LikedEvents;