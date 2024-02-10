import { useState } from "react";

const Navbar = ({onSearch}) => {

    // estado para el input
    const [search, setSearch] = useState('');

    // en cada cambio, se setea el valor ingresado en el estado
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleInputKwyDown = (event) => {
        // cuando se presione enter, se llama la funcion del parametro
        if(event.keyCode === 13){
            onSearch(search);
        }
    }

    return (
        <div>
            <p>Mi boletera</p>
            <input 
                type="text" 
                placeholder="Buscar evento" 
                onChange={handleInputChange}
                onKeyDown={handleInputKwyDown}
                value={search}
            />
        </div>
    )
}

export default Navbar;