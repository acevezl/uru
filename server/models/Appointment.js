const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema (
    {
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        status: {
            type: String
        },
        notes: {
            type: String,
            required: true
        },
        file_id: {
            type: String,
            required: true
        }
    }
)

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;