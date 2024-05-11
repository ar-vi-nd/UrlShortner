const express = require('express')
const router = express.Router()
const Users = require('../../models/users')
const { v4 : uuidv4 } = require('uuid');
const {setcookie} = require('../../middleware/cookiesetter')


router.post('/login',async (req,res)=>{
    console.log(req.body)
    const {email,password} = req.body
    try {
        let user = await Users.findOne({email:email})
        if(!user){
            return res.redirect('/signup')
        }else{
            if(user.password == password){
                let uuid = uuidv4()
                setcookie(uuid,user)
                req.user = user
                res.cookie('uuid',uuid)
                return res.redirect('/')
            }else{
                return res.redirect('/login')
            }
        }

        
    } catch (error) {
        console.log('error logging in : ',error)
        
    }
})
.post('/signup',async(req,res)=>{
    console.log(req.body)
    const {name,email,password} = req.body
    let user = await Users.findOne({email:req.body.email})
    if(!user){
        let newuser = await Users.create({name,email,password})
        return res.redirect('/login')
    }
})

module.exports = router