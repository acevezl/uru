const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const therapistSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    // Specialties are: 'Mental health', 'Autism', 'Group therapy', 'Child abuse', 'Speech therapy'
    specialties: [{
      type: String,
      required: true,
    }],
    // Skills are: 'Sign Language', 'Music', 'Arts', etc
    skills: [{
      type: String,
      required: true,
    }]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
therapistSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
therapistSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Therapist = model('Therapist', therapistSchema);

module.exports = Therapist;
