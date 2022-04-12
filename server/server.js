const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config();
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
var fs = require('fs');
var busboy = require('connect-busboy');
const {User} = require('./models');
const Auth = require('./utils/auth.js')


const cloudinary = require('cloudinary').v2;
console.log(cloudinary.config().cloud_name);



const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: Auth.authMiddleware
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(busboy()); 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/images',function(req, res) {
  var fstream;
  
  const token = req.headers.authorization.split(' ').pop().trim();
  const {data} = Auth.getProfile(token);
  const {_id: userId} = data
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
      console.log("Uploading photo"); 
     
      fstream = fs.createWriteStream(__dirname + '/images/' + filename);
      file.pipe(fstream);
      fstream.on('close', function () {
        cloudinary.uploader.upload(__dirname + '/images/' + filename).then(async (res)=>{
          fs.unlink(__dirname + '/images/' + filename, (err) => {
            if (err) throw err;
          })
          
        
         await User.findByIdAndUpdate(userId,{avatarUrl: res.url})
          
        })
          res.redirect('back');
      });
  });
});



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 