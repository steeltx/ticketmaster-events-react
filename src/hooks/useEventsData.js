import { useState } from 'react';
import eventsJSON from '../data/events.json';

const useEventsData = () => {

    const [ data, setData ] = useState(eventsJSON);
    // obtener la lista de los eventos del JSON
    const { _embedded: { events } } = data;

    return {
        events
    }
}

export default useEventsData;