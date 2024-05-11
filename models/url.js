const mongoose = require('mongoose')
const { Schema } = mongoose;
const shortid = require('shortid');

const urlSchema = new Schema({
  shortId: {default : shortid(10),type: String ,required:true ,unique:true}, // String is shorthand for {type: String}
  redirecturl: String,
  visitcount: Number,
  created_by : {type : mongoose.Schema.Types.ObjectId},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("URL", urlSchema);


