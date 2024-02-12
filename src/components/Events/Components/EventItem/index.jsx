import HearthFilled from '../../../../assets/hearth-filled.png';
import HearthUnfilled from '../../../../assets/hearth-unfilled.png';
import useLikeEvents from '../../../../hooks/useLikeEvents';
import styles from './EventItem.module.css';

const EventItem = ({info, id, name, image, onEventClick }) => {
    
    // hook creado para like
    const { isEventLiked, toggleEventLike } = useLikeEvents(id);

    const handleSeeMoreClick = (event) => {
        // se detiene la propagacion hacia el padre
        event.stopPropagation();
        onEventClick(id);
    }

    const handleHearthClick = () => {
        toggleEventLike();
    }

    return (
        <div className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                <img src={isEventLiked ? HearthFilled : HearthUnfilled} alt='Hearth button' className={styles.hearthImage}  onClick={handleHearthClick}/>
                <img src={ image } alt={ name } width={ 200 } height={ 200 } />
            </div>
            
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{ name }</h4>
                <p className={styles.eventInfo}>{ info }</p>
                <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
                    {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
                    Ver mas
                </button>
            </div>
        </div>
    );
}

export default EventItem;