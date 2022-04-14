const db = require('../config/connection');
const { Category, Order, Product, User } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const categoryData = require('./categoryData.json');
// const orderData = require('/orderData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Category.deleteMany({});


  
  await User.create(userData);
  console.log('************ Users seeded! ************');
  
  await Category.create(categoryData);
    console.log('************ Categories seeded! ************');

  const users = await User.find();
  const userIds = users.map(user => user._id);
  const categories = await Category.find();
  const categoryIds = categories.map(category => category._id);
  for (let i = 0; i < productData.length; i++) {
    const product = productData[i];
    product.sellerId = userIds[Math.floor(Math.random()*userIds.length)]
    product.category = categoryIds[Math.floor(Math.random()*categoryIds.length)]
  }

  

  await Product.create(productData);
  console.log('************ Products seeded! ************');


  process.exit(0);
});