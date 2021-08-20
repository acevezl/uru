const { AuthenticationError } = require("apollo-server-express");
const { User, Therapist } = require("../models");
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
      console.log(context.user);
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
      const criteriaArray = args.criteria.split(' ');
      
      let orCriteria = [];
      criteriaArray.forEach( word => {
        orCriteria.push({specialties: { "$regex": word, "$options": "i" }});
        orCriteria.push({skills: { "$regex": word, "$options": "i" }});
      });
      console.log(orCriteria);
      const therapists = await Therapist.find({
        $or: orCriteria 
      }).select("-__v -password");
      return therapists;
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
  },
};

module.exports = resolvers;
