
// import { fstat } from "fs";

// const express = require('express')
// const app = express();
// const port = 3000;
// const fs = require('fs');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!

//   const kittySchema = new mongoose.Schema({
//       name: String
//   });

//   kittySchema.methods.speak = function() {
//     const greeting = this.name ? "Meow name is " + this.name :
//     "I dont have a name";
    
//     console.log(greeting);
//   }

//   const Kitten = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitten({name: 'fluffy'});
//   // silence.speak(); @ Meow name is fluffy

//   silence.save(function (err, silence) {
//     if(err) return console.log(err);
//     silence.speak();
//   })

//   Kitten.find(function(err, silence) {
//     if (err) return console.log(err);
//     console.log(Kitten)
//   })

//   Kitten.find({name: 'fluffy'}, (arr) => {
//     console.log("Returned array:" + arr)
//   });

// });

// app.listen(port);


// // var blogSchema = new Schema({
// //   title: String,
// //   author: String,
// //   body: String,
// //   comments: [{
// //     body:String,
// //     date: Date
// //   }],
// //   date: {
// //     type: Date,
// //     default: Date.now
// //   },
// //   hidden: Boolean,
// //   meta: {
// //     votes: Number,
// //     favs: Number
// //   }
// // });

// // const Blog = mongoose.model('Blog', blogSchema);

// // const schema = new Schema({_id: Number});
// // const Model = mongoose.model('Test', schema);

// // const doc = new Model();
// // // doc.save(); throws error of not having an id

// // doc._id = 1;

// // // doc.save();


// // define a schema

// const personSchema = new Schema({
//   name: {
//     first: String,
//     last: String
//   }
// });

// personSchema.virtual('fullName').get(function() {
//   return this.name.first + ' ' + this.name.last;
// });

// // compile our model
// const Person = mongoose.model('Person', personSchema);

// // create a document
// const axl = new Person({
//   name: { first: 'Axl', last: 'Rose' }
// });

// console.log(axl.fullName); // Axl Rose

// const userSchema = new Schema({
//   socialMediaHandles: {
//     type: Map,
//     of: String
//   }
// });

// const user = mongoose.model('User', userSchema);

// console.log(
//   new user({
//     socialMediaHandles: {
//       github: "irfan___khan",
//       twitter: "@IK367698"
//     }
//   })
//   );

// import  mongoose  from "mongoose";
// const {Schema} = mongoose;




// const userSchema = new Schema({
//   socialMediaHandles: {
//     type: Map,
//     of: new Schema({
//       handle: String,
//       oauth: {
//         type: Object,
//         ref: 'OAuth'
//       }
//     })
//   }
// });
// const User = mongoose.model('User', userSchema);
// const user = User.findOne().populate('socialMediaHandles.$*.oauth');

