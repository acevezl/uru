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
        allergies: [{
            type: String
        }],
        therapist: {
            type: Schema.Types.ObjectId,
            ref: 'Therapist',
        },
        notes: {
            type: String,
            required: true,
        }
    }
);

const File = model('File', fileSchema);

module.exports = File;
