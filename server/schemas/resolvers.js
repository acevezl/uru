const { AuthenticationError } = require("apollo-server-express");
const { User, Therapist, File, Appointment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("files");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    user: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id })
        .select("-__v -password")
        .populate("files");
    },
    therapist: async (parent, { _id }) => {
      return Therapist.findOne({ _id }).select("-__v -password");
    },
    therapists: async (parent, args, context) => {
      const therapists = await Therapist.find({}).select("-__v -password");
      return therapists;
    },
    therapistcriteria: async (parent, args, context) => {
      const criteriaArray = args.criteria.split(" ");

      let searchCriteria = [];
      criteriaArray.forEach((word) => {
        searchCriteria.push({ bio: { $regex: word, $options: "i" } });
      });
      
      const therapists = await Therapist.find(
        { 
          $and: searchCriteria
        }
      ).select("-__v -password");
      return therapists;
    },
    file: async (parent,{ _id }) => {
      const file = await File.findOne({ _id })
        .populate("appointments");
      return file;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addFile: async (parent, args, context) => {
      if (context.user) {
        const file = await File.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { files: file._id } },
          { new: true }
        );

        await Therapist.findByIdAndUpdate(
          { _id: args.therapist_id },
          { $push: { files: file._id } },
          { new: true }
        );

        return file;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addAppointment: async (parent, args, context) => {
      if (context.user) {
        const appointment = await Appointment.create({...args});

        await File.findByIdAndUpdate(
          { _id: args.file_id},
          { $push: { appointments: appointment._id }},
          { new: true}
        )

        return appointment;
      }

      throw new AuthenticationError('You need to be logged in!');

    }
  },
};

module.exports = resolvers;
