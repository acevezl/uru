import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from 'emailjs-com';

import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from '../utils/queries';
import { ADD_APPOINTMENT } from "../utils/mutations";

const AppointmentForm = (props) => {

    const file = props.file;
    const therapist = props.therapist;

    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};

    const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);

    const [formState, setFormState] = useState(
        {
            date: '',
            time: '',
            notes: ''
        }
    );

    function sendEmail() {
        const templateParams = {
            therapist_first_name: therapist.first_name,
            therapist_email: therapist.email,
            user_email: user.email,
            user_first_name: user.first_name
        };

        emailjs.send('service_v6o96rr', 'template_8c3zmlp', templateParams, 'user_QURpyb1Ov7NpwPVclx5Di')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    const [errorMessage, setErrorMessage] = useState('');
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [formVisibility, setFormVisibility] = useState(false);

    const { date, time, notes } = formState;

    function handleChange(event) {

        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            setErrorMessage(!isValid ? 'Your email is invalid' : '')
        } else {
            setErrorMessage(!event.target.value.length ? `Your ${event.target.name} is required.` : ``);
        }

        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }

    }

    const handleSubmit = async event => {
        event.preventDefault();

        const file_id = file._id;

        try {
            await addAppointment({
                variables: {
                    date, time, notes, file_id
                }
            });
            sendEmail();
            setSubmissionSuccess(true);
        } catch (e) {
            console.error(e);
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return (
        <>
        <h4>Something went wrong while sending your request.</h4>
        <p>
            Please try refreshing this page and try again. If the problem persists, please contact us at
             <a href='mailto:admin@uru.com'>admin@uru.com</a>. Thank you.
        </p>
        </>
        )
    }

    return (
        <section className='contact'>
            { !formVisibility ? (
                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white" onClick={() => setFormVisibility(true)}>
                    Schedule an Appointment
                </button>
            ) : (
                    <>
                        <h2 className='col-12'>Schedule an appointment with {therapist.first_name} {therapist.last_name}</h2>
                        <div className='contactForm mb-5'>
                            {submissionSuccess ? (
                                <>
                                    <h3>Thank you for your appointment request.</h3>
                                    <p>We have sent your appointment to {therapist.first_name}. They will respond to your message within the next 24-48 hours.</p>
                                    <button data-testid="button" className='btn btn-primary' onClick={() => { setFormVisibility(false); setSubmissionSuccess(false); }}>Ok</button>
                                </>
                            ) : (
                                    <form id='contact-form' className='mb-3' onSubmit={handleSubmit}>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='date'>Date</label>
                                            </div>
                                            <input className='form-control' type='text' id='date' name='date' defaultValue={date} onBlur={handleChange} />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='time'>Time:</label>
                                            </div>
                                            <input className='form-control' type='text' id='time' name='time' defaultValue={time} onBlur={handleChange} />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='notes'>Messasge</label>
                                            </div>
                                            <textarea className='form-control' rows='5' type='text' id='notes' name='notes' defaultValue={notes} onBlur={handleChange} />
                                        </div>
                                        {
                                            errorMessage && (
                                                <div className='alert alert-danger'>
                                                    {errorMessage}
                                                </div>
                                            )
                                        }
                                        <button data-testid="button" className='btn btn-primary mr-3' type="submit" >Submit</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => setFormVisibility(false)}>Cancel</button>
                                    </form>
                                )}

                        </div>
                    </>
                )}

        </section>
    );
}

export default AppointmentForm;

