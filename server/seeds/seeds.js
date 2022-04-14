const db = require('../config/connection');
const { Category, Product, User } = require('../models');

db.once('open', async () => {
    await Category.deleteMany()

    const categories = await Category.insertMany([
        { name: 'Renaissance'},
        { name: 'Baroque'},
        { name: 'Post-Impressionism'},
        { name: 'Modernism'},
        { name: 'Surrealism'},
        { name: 'Impressionism'},
        { name: 'Realism'}
    ]);
    console.log('************ Categories seeded! ************');

    await User.deleteMany()
    const users = await User.insertMany([
        { username: "Shaq", email: "shaq@gmail.com", password: "shaq01" },
        { username: "Jrod", email: "jrod@yahoo.com", password: "jrod29" },
        { username: "Chilo", email: "chilo@gmail.com", password: "chilo12" },
        { username: "Aubrey", email: "aubrey@hotmail.com", password: "acrook18" }
    ])
    console.log('************ Users seeded! ************');


    await Product.deleteMany()
    const products = await Product.insertMany([
        {
            title: "Mona Lisa",
            description: "Leonardo da Vinci",
            price: 1500000,
            image: "mona_lisa.png",
            category: categories[0]._id,
            sellerId: users[1]._id
        },
        {
            title: "The Starry Night",
            description: "Vincent Van Gogh",
            price: 900000,
            image: "starry_night.png",
            category: categories[2]._id,
            sellerId: users[0]._id
        },
        {
            title: "American Gothic",
            description: "Grant Wood",
            price: 950000,
            image: "american_gothic.png",
            category: categories[3]._id,
            sellerId: users[2]._id
        },
        {
            title: "The Persistence of Memory",
            description: "Salvador Dali",
            price: 1200000,
            image: "persistence.png",
            category: categories[4]._id,
            sellerId: users[0]._id
        },
        {
            title: "The Tower of Babel",
            description: "Pieter Bruegel the Elder",
            price: 500000,
            image: "babel.png",
            category: categories[0]._id,
            sellerId: users[2]._id
        },
        {
            title: "The Musicians",
            description: "Michelangelo Merisi da Caravaggio",
            price: 1100000,
            image: "musician.png",
            category: categories[1]._id,
            sellerId: users[0]._id
        },
        {
            title: "Vitruvian Man",
            description: "Leonardo da Vinci",
            price: 1300000,
            image: "vitruvian.png",
            category: categories[0]._id,
            sellerId: users[1]._id
        },
        {
            title: "Irises",
            description: "Vincent Van Gogh",
            price: 1300000,
            image: "irises.png",
            category: categories[2]._id,
            sellerId: users[3]._id
        },
        {
            title: "Paris Street; Rainy Day",
            description: "Gustave Caillebotte",
            price: 800000,
            image: "rainy.png",
            category: categories[5]._id,
            sellerId: users[2]._id
        },
        {
            title: "Portrait of Madame X",
            description: "John Singer Sargent",
            price: 850000,
            image: "madame.png",
            category: categories[5]._id,
            sellerId: users[1]._id
        },
        {
            title: "The Night Cafe",
            description: "Vincent Van Gogh",
            price: 950000,
            image: "cafe.png",
            category: categories[2]._id,
            sellerId: users[0]._id
        }
    ])
    console.log('************ Products seeded! ************');

    process.exit()

})