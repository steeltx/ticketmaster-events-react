import { useForm } from "react-hook-form";

const SignupForm = () => {

    // se crea la instancia de hook form
    const {register, handleSubmit, reset, formState: { errors } } = useForm();

    // limpiar los valores de todos los input
    const handleClearClick = () => {
        reset();
    }

    // cuando se envia el formulario
    const handleSubmitForm = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="">
                Name
                <input type="text" {...register('name', {required: true})} />
                <br/>
            </label>
            <label htmlFor="">
                Age
                <input type="text" {...register('age',  {required: true})} />
                <br/>
            </label>
            <label htmlFor="">
                Address
                <input type="text" {...register('address',  {required: true})} />
                <br/>
            </label>
            <label htmlFor="">
                ZipCode
                <input type="text" {...register('zipCode',  {required: true})} />
                <br/>
            </label>
            <label htmlFor="">
                Phone
                <input type="text" {...register('phone',  {required: true})} />
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