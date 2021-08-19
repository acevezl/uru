const faker = require('faker');

const db = require('../config/connection');
const { Therapist, User } = require('../models');

db.once('open', async () => {

    await Therapist.deleteMany({});
    await User.deleteMany({});

    const userData = [];

    for (let i = 0; i<10; i++) {
        const username=faker.internet.userName();
        const email = faker.internet.email(username);
        const password = 'Test123$';
        const first_name = faker.name.firstName();
        const last_name = faker.name.lastName();
        const phone = faker.phone.phoneNumber();

        userData.push({
            username,
            email,
            password,
            first_name,
            last_name,
            phone
        });
    }

    const createdUsers = await User.collection.insertMany(userData);
    console.log (createdUsers);

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
        "Cognitive therapist"
    ]

    const skillsArray = [
        "Sign language",
        "Spanish",
        "Español",
        "French",
        "Guitar",
        "Dance",
        "Meditation",
        "Board games"
    ]

    for (let i = 0; i<200; i++) {
        const username=faker.internet.userName();
        const email = faker.internet.email(username);
        const password = 'Test123$';
        const first_name = faker.name.firstName();
        const last_name = faker.name.lastName();
        const phone = faker.phone.phoneNumber();
        const photo = 'https://cdn.fakercloud.com/avatars/'+faker.image.avatar().split('/')[6]+'_128.jpg';

        // https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg'

        let numberOfSkills = Math.floor(Math.random * 5);
        let skills = [];
        for (let y = 0; y < numberOfSkills; y++){
            skills.push(skillsArray[y]);    
        }

        let numberOfSpecialties = Math.floor(Math.random * 3);
        let specialties = [];
        for (let y = 0; y < numberOfSpecialties; y++){
            specialties.push(specialtiesArray[y]);    
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
            photo
        });
    }

    const createdTherapists = await Therapist.collection.insertMany(therapistData);
    console.log(createdTherapists);

    console.log('all done!');
    process.exit(0);
});