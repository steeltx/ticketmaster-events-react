import {useState, forwardRef, useImperativeHandle } from "react";

// al usar ref, se debe envolver el componente con forwardRef
const Navbar = forwardRef(({onSearch}, ref) => {

    // estado para el input
    const [search, setSearch] = useState('');

    // exponer search para que sea accedido desde el padre con la referencia
    useImperativeHandle(ref, () => ({
        search
    }));

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
        <div ref={ref}>
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
});

Navbar.displayName = 'Navbar';

export default Navbar;