// for statefull authentication i.e. the server is keeping users data corresponding to a secret uuid 
// server gives back user the uuid and when the user visits back to the server , server checks if the uuid belongs to a user or not 
// if yes it fetches user info and puts it in req.
// in this case i am using cookies to store uuid and map to map the uuid to user details
// drawback is if server restarts the all uuid become invalid because the map is reinitialized and all users get log out 
// they can still login again and use the website but each time server crashes the get logged out


// const {getcookie} = require('./cookiesetter')
// const fetchuser = (req,res,next)=>{
//     console.log(req.cookies)
//     if(!req.cookies.uuid){
//         return res.redirect('/login')
//     }
//     else{
//         let user = getcookie(req.cookies.uuid)
//         console.log('user : ',user)
//         req.user = user
//         if(!req.user){
//             return res.redirect('/login')
//         }
//     }
//     next()
// }


// for stateless authentication
// in this case everything is working fine but when you generate shorturls you wont see reflected changes on home page 
// reason is i am changing req.user 
// in statefull auth i used to store map bw user and uuid and embedded this user in req.user. This user object had a field _id which was a mongodb object
// but in this case jwt cant sign this type of objects so i had to make a new object (see cookiesetter.js for reference) and when i login, it takes me to ('/') and fetchuser runs
// it embedd this user object in req. But this user has _id as a string and now if i create a new short url it keeps the 'created_by' field empty because it only takes a mongodb object
// thats why these new short urls are generated but not fetched
// to solve this i only have to do one thing use this user (let user = getcookie(req.cookies.uuid)) to fetch the user from db and then embedd that user in req.
// then it will all work fine

const {getcookie} = require('./cookiesetter')
const fetchuser = (req,res,next)=>{
    if(!req.cookies.uuid){
                return res.redirect('/login')
            }
            else{
                let user = getcookie(req.cookies.uuid)
                console.log('user : ',user)
                req.user = user
                if(!req.user){
                    return res.redirect('/login')
                }
            }
            next()

}



module.exports = fetchuser