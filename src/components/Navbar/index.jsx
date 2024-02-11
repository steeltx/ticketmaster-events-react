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
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex'
        }}>
            <div style={{flex : 1, display: 'flex'}}>
                <p style={{
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>Mi boletera</p>
            </div>
            <div style={{
                    flex : 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-end'
                }}>
                <input 
                    type="text" 
                    placeholder="Buscar evento" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKwyDown}
                    value={search}
                    style={{
                        fontSize: 16,
                        padding: '6px 12px',
                        borderRadius: 4,
                        border: 'none',
                        width: 200
                    }}
                    />
            </div>
        </div>
    )
});

Navbar.displayName = 'Navbar';

export default Navbar;