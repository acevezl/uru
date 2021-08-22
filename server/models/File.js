const { Schema, model } = require('mongoose');

const fileSchema = new Schema(
    {
        patient_name: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        allergies: {
            type: String
        },
        notes: {
            type: String,
            required: true,
        },
        therapist_id : {
            type: String
        }
    }
);

const File = model('File', fileSchema);

module.exports = File;
