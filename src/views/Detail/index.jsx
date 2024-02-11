import { useParams } from "react-router-dom";

const Detail = () => {

    // obtener el valor
    const { eventId } = useParams();

    return (
        <div>Detail</div>
    );
}

export default Detail;