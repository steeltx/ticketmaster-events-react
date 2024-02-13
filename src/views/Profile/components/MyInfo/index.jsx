import { useForm } from "react-hook-form";
import styles from './MyInfo.module.css';
import { useEffect } from "react";

const USER_DATA = 'userData';

const MyInfo = () => {

    // instancia del formulario
    const {handleSubmit, register, setValue } = useForm();

    // cuando se carga el componente, precargar el formulario
    useEffect( () => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
            // establecer el valor que se obtiene desde LS
            setValue('name',userData?.name);
            setValue('email',userData?.email);
            setValue('age',userData?.age);
        } catch (error) {
            console.error(error);
        }
    },[setValue]);

    // guardar la informacion del form
    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            alert('Usuario actualizado');
        } catch (error) {
            alert('Ocurrio un error');
        }
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
            <label className={styles.label}>
                Name
                <input 
                    type="text" {...register('name', {required: true, minLength: 1, maxLength: 120})} 
                    className={styles.input}
                />
                <br/>
            </label>
            <label className={styles.label}>
                Email
                <input 
                    type="text" {...register('email', {required: true, minLength: 1, maxLength: 120})} 
                    className={styles.input} 
                />
                <br/>
            </label>
            <label className={styles.label}>
                Age
                <input 
                    type="number" {...register('age', {required: true, min: 1, max: 120, valueAsNumber: true})} 
                    className={styles.input} 
                />
                <br/>
            </label>
            <button type="submit" className={styles.submitButton}>Save</button>
        </form>
    );
}

export default MyInfo;