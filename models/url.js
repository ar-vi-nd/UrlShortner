const mongoose = require('mongoose')
const { Schema } = mongoose;
// const shortid = require('shortid');

const urlSchema = new Schema({
//   shortId: {default : shortid(10),type: String ,required:true ,unique:true}, // String is shorthand for {type: String}
//   adding shortId as default here would only initialize it one when the modal is first created which would result in conflict as we've set shortId as unique true
//   now to solve this just pass shortId while creating a new url object in url.js in routes
//  another thing that i want to mention is that i'm still in doubt that it was working fine before but now since i believe in the solution above, let it be.
//   also i should have used git from start

  shortId: {type: String ,required:true ,unique:true},
  redirecturl: String,
  visitcount: Number,
  created_by : {type : mongoose.Schema.Types.ObjectId},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("URL", urlSchema);


