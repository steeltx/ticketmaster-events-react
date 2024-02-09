const EventItem = ({info, name, image}) => {
    return (
        <div>
            <img src={ image } alt={ name } width={ 400 } height={ 200 } />
            <h4>{ name }</h4>
            <p>{ info }</p>
        </div>
    );
}

export default EventItem;