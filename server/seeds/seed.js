const db = require('../config/connection');
const { Category, Order, Product, User } = require('../models');

const productData = require('./productData.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const products = await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});