// when you make a middleware it has access to req res and next ()
// but lets say you want to send  some more info to this middleware
// for example if your middleware takes a filename also in which it writes something how would you pass that file name to the middleware from main file

// for this you would make the middleware as a function that takes filename as parameter that returns a function in return


//  main.js

// app.get('/',logrequest,(req,res)=>{
// do something
// })


// middleware
// const filename = "filename.txt"
// function logrequest(req,res,next){
// fs.writefile(filename,req.body,(err,res)=>{console.log(err)})
// }
// module.exports = logrequest

// ===========================================================================================================


// this is normal case but say you want to pass file name from main.js

// ===========================================================================================================

// main.js
// const filename = "filename.txt"
// app.get('/',logrequest(filename),(req,res)=>{
// do something
// })


// middleware

// function logrequest(filename){
// return function(req,res,next){
    // fs.writefile(filename,req.body,(err,res)=>{console.log(err)})
// }
// }
// module.exports = logrequest

// in this case you would wrap a function inside a function to make a closure
// from main file you would send filename, in other words execute logrequest which will return a funciton which has filename in its closure

// same is for connectiong mongodb and you want to give mongouri from mainfile (pyush garg playlist nodejs)

// same is for a middleware that accepts an array to check for roles and based on that role gives access or redirects to login page (piyush garg authorization video)

// for chat gpt reference
// https://chat.openai.com/share/bfe3fc40-c96e-4b5c-98bc-481afa556718