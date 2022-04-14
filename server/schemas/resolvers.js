const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Product, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, title, id }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (title) {
          params.title = {
            $regex: title
          };
        }
        if(id){
          params._id = id
        }
  
        return await Product.find(params);
      },
      multipleProducts: async(parent, {ids}) => {
        const products = ids.map(async (id)=>{
         const product = await Product.findById(id)
         return product 
        } 
        )
        return products;
      },
      user: async (parent,{_id}) =>{
        if(_id){
          const user = await User.findById(_id)
          
          return user;
        }
        else{
          throw new AuthenticationError('No ID Provided!');
        }
      } ,
      order: async (parent, { userId }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate('orders');
          
  
          return user.orders;
        }
          else if (userId){
            const user = await User.findById(userId).populate('orders');
            //console.log(user)
            return user.orders;
          }
        
        throw new AuthenticationError('Not logged in');
      },
      checkout: async (parent, args, context) => {
        
        const url = new URL(context.headers.referer).origin;
        
        const order = new Order({ products: args.products });
        const line_items = [];
  
        const { products } = await order.populate('products');

        for (let i = 0; i < products.length; i++) {
          try {
            const product = await stripe.products.create({
            name: products[i].title,
            description: products[i].description,
            // images: [`${url}/images/${products[i].image}`]
          });
  
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price*100 ,
            currency: 'usd',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
          } catch (error) {
            console.log(error)
          }
        }
        
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      addOrder: async (parent, { products, buyerId, sellerId }, context) => {
        
        if (context.user) {
          const order = await Order.create({ products, buyerId: context.user._id, sellerId });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order._id } });
  
          return order;
        } else if (buyerId) {
          const order = await Order.create({ products, buyerId, sellerId });
          
  
          await User.findByIdAndUpdate(buyerId, { $push: { orders: order._id } });
        
          return order;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },
      addProduct: async (parent, args) => {
          try {
            const newProduct = await Product.create({ ...args })
          await User.findByIdAndUpdate(newProduct.sellerId, {$addToSet: {'catalog':newProduct._id}})
          return newProduct
          } catch (err) {
            console.log(`Error adding product: ${err}`)
          }
          
        
      },
      updateProduct: async (parent, { _id, args }) => {

        if(args) {
          return await Product.findByIdAndUpdate(_id, { ...args });
        } else {
          return console.log('Product has not been updated!')
        }
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;