// for statefull 
// const cookietousermap = new Map()

// function setcookie(id,user){
//     cookietousermap.set(id,user)
// }

// function getcookie(id){
//     return cookietousermap.get(id)
// }

// for stateless

const jwt = require('jsonwebtoken')

const secretkey = "Mike@gangsta"
function setcookie(user){
   const authtoken =  jwt.sign({_id:user._id,name:user.name,email:user.email},secretkey)
   return authtoken
}

function getcookie(authtoken){
const user = jwt.verify(authtoken,secretkey)
return user
}

module.exports = {setcookie,getcookie}