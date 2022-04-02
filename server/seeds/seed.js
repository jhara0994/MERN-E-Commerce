const db = require('../config/connection');
const { Category, Order, Product, User } = require('../models');

const productData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});