import { useState } from "react";

const SignupForm = () => {

    // se crean los estados para los difetentes campos
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');

    // limpiar los valores de todos los input
    const handleClearClick = () => {
        setName('');
        setAge('');
        setAddress('');
        setZipCode('');
        setPhone('');
    }

    // cuando se envia el formulario
    const handleSubmitForm = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">
                Name
                <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} required />
                <br/>
            </label>
            <label htmlFor="">
                Age
                <input type="text" value={age} onChange={(evt) => setAge(evt.target.value)} required />
                <br/>
            </label>
            <label htmlFor="">
                Address
                <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} required />
                <br/>
            </label>
            <label htmlFor="">
                ZipCode
                <input type="text" value={zipCode} onChange={(evt) => setZipCode(evt.target.value)} required />
                <br/>
            </label>
            <label htmlFor="">
                Phone
                <input type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)} required />
                <br/>
            </label>
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SignupForm;