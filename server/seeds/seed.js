const db = require('../config/connection');
const { Category, Order, Product, User } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
// const categoryData = require('/categoryData.json');
// const orderData = require('/orderData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  
  await User.create(userData)
  console.log('************ Users seeded! ************');

  await Product.create(productData);
  console.log('************ Products seeded! ************');



  process.exit(0);
});