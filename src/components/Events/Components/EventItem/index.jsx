const EventItem = ({info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (event) => {
        // se detiene la propagacion hacia el padre
        event.stopPropagation();
        onEventClick(id);
    }

    return (
        <div>
            <img src={ image } alt={ name } width={ 400 } height={ 200 } />
            <h4>{ name }</h4>
            <p>{ info }</p>
            <button onClick={handleSeeMoreClick}>Ver mas</button>
        </div>
    );
}

export default EventItem;