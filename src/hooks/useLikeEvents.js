import { useState } from "react";

// llave con que se almacena en LS
const LIKED_EVENTS_STORAGE_KEY = 'likedEvents'

const checkIsEventLiked = (eventId) => {
    // obtener lo guardado en LS con la key indicada
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    // revisar si el id del evento tiene like
    return likedEvents.includes(eventId);
}

const useLikeEvents = (eventId) => {
    const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));
    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
        // si existe, obtener con un indice diferente de -1
        const eventIndex = likedEvents.indexOf(eventId);
        if(eventIndex !== -1){
            // quitar el elemento del arreglo
            likedEvents.splice(eventIndex, 1);
            setIsEventLiked(false);
        } else{
            likedEvents.push(eventId);
            setIsEventLiked(true);
        }
        // guardar el arreglo en forma de string
        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    }

    return{
        isEventLiked,
        toggleEventLike
    }

}

export default useLikeEvents;