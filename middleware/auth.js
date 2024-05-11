const {getcookie} = require('./cookiesetter')
const fetchuser = (req,res,next)=>{
    console.log(req.cookies)
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