import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const ReachOutForm = ( props ) => {

    const [ formState, setFormState ] = useState(
        {
            name: '',
            email: '',
            message: '',
            appointment_date: ''
        }
    );

    const [ errorMessage, setErrorMessage ] = useState('');

    const { name, email, message, appointment_date } = formState;

    function handleChange(event) {

        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            setErrorMessage(!isValid ? 'Your email is invalid' : '')
        } else {
            setErrorMessage(!event.target.value.length ? `Your ${event.target.name} is required.` : ``);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [ event.target.name ] : event.target.value })
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return(
        <section className='contact'>
            <h2 className='col-12'>Contact Me</h2>
            <div className='contactForm mb-5'>
                <form id='contat-form' className='mb-3' onSubmit={handleSubmit}>
                    <div className='form-floating mb-3'>
                        <input className='form-control' type='text' id='name' name='name' defaultValue={name} onBlur={handleChange}/>
                        <label htmlFor='name'>Name:</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input className='form-control' type="email" id='email' name="email" defaultValue={email} onBlur={handleChange}/>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea className='form-control' name="message" id='message' defaultValue={message} onBlur={handleChange}/>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <textarea className='form-control' name="appointment_date" id='appointment_date' defaultValue={appointment_date} onBlur={handleChange}/>
                        <label htmlFor="appointment_date">Appointment Date:</label>
                    </div>
                    {
                        errorMessage && (
                            <div className='alert alert-danger'>
                                {errorMessage}
                            </div>
                        )
                    }
                    <button data-testid="button" className='btn btn-secondary' type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ReachOutForm;