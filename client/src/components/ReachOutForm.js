import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import emailjs from 'emailjs-com';

import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_FILE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const ReachOutForm = (props) => {

    const therapist = props.therapist;

    const { loading, data } = useQuery(QUERY_ME);
    const user = data?.me || {};
    console.log(user);

    const [addFile, { error }] = useMutation(ADD_FILE);

    const [formState, setFormState] = useState(
        {
            patient_name: '',
            dob: '',
            allergies: '',
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

        emailjs.send('service_v6o96rr', 'template_f1mty9m', templateParams, 'user_QURpyb1Ov7NpwPVclx5Di')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    const [errorMessage, setErrorMessage] = useState('');
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [formVisibility, setFormVisibility] = useState(false);


    const { patient_name, dob, allergies, notes } = formState;

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

        const therapist_id = therapist._id;

        try {
            await addFile({
                variables: {
                    patient_name, dob, allergies, notes, therapist_id
                }
            });
            sendEmail();
            setSubmissionSuccess(true);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <section className='contact'>
            { !formVisibility ? (
                <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 text-white" onClick={() => setFormVisibility(true)}>
                    Establish Care
                </button>
            ) : (
                    <>
                        <h2 className='col-12'>Establish Care with {therapist.first_name} {therapist.last_name}</h2>
                        <div className='contactForm mb-5'>
                            {submissionSuccess ? (
                                <>
                                    <h3>Thank you for your interest.</h3>
                                    <p>We have sent your Care request to {therapist.first_name}. They will respond to your message within the next 24-48 hours.</p>
                                    <button data-testid="button" className='btn btn-primary' onClick={() => { setFormVisibility(false); setSubmissionSuccess(false); }}>Ok</button>
                                </>
                            ) : (
                                    <form id='contat-form' className='mb-3' onSubmit={handleSubmit}>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='patient_name'>Patient Name:</label>
                                            </div>
                                            <input className='form-control' type='text' id='patient_name' name='patient_name' defaultValue={patient_name} onBlur={handleChange} />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='dob'>Date of birth:</label>
                                            </div>
                                            <input className='form-control' type='text' id='dob' name='dob' defaultValue={dob} onBlur={handleChange} />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='allergies'>Allergies:</label>
                                            </div>
                                            <input className='form-control' type='text' id='allergies' name='allergies' defaultValue={allergies} onBlur={handleChange} />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className='input-group-prepend'>
                                                <label className='input-group-text' htmlFor='notes'>How can {therapist.first_name} help you? </label>
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

export default ReachOutForm;

