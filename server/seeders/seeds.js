const faker = require("faker");

const db = require("../config/connection");
const { Therapist, User } = require("../models");

db.once("open", async () => {
  await Therapist.deleteMany({});
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = "Test123$";
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const phone = faker.phone.phoneNumber();

    userData.push({
      username,
      email,
      password,
      first_name,
      last_name,
      phone,
    });
  }

  const createdUsers = await User.collection.insertMany(userData);

  const therapistData = [];

  const specialtiesArray = [
    "Speech therapy",
    "Group therapy",
    "Child psychology",
    "Music therapy",
    "Grief counseling",
    "Nutrition",
    "Family counseling",
    "Behavioral therapy",
    "Cognitive therapist",
  ];

  const skillsArray = [
    "Sign language",
    "Spanish",
    "Español",
    "French",
    "Guitar",
    "Dance",
    "Meditation",
    "Board games",
  ];

  for (let i = 0; i < 20; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = "Test123$";
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const phone = faker.phone.phoneNumber();
    const photo =
      "https://cdn.fakercloud.com/avatars/" +
      faker.image.avatar().split("/")[6] +
      "_128.jpg";
    const bio = faker.hacker.phrase();

    // https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg'

    let numberOfSkills = Math.floor(Math.random() * 5) + 1;
    let skills = [];
    for (let y = 0; y < numberOfSkills; y++) {
      const num = Math.floor(Math.random() * skillsArray.length);
      const skill = skillsArray[num];
      skills.push(skill);
    }
    let numberOfSpecialties = Math.floor(Math.random() * 3) + 1;
    let specialties = [];
    for (let y = 0; y < numberOfSpecialties; y++) {
      const specialtynum = Math.floor(Math.random() * specialtiesArray.length);
      specialties.push(specialtiesArray[specialtynum]);
    }
    therapistData.push({
      username,
      email,
      password,
      first_name,
      last_name,
      phone,
      skills,
      specialties,
      photo,
      bio,
    });
  }

  const createdTherapists = await Therapist.collection.insertMany(
    therapistData
  );
  console.log(createdTherapists);

  console.log("all done!");
  process.exit(0);
});
