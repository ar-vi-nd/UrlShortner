const express = require('express')
const router = express.Router()
const Urls = require('../../models/url')
const fetchuser = require('../../middleware/auth')

router.get('/',fetchuser,async(req,res)=>{
    let urls = await Urls.find({created_by:req.user._id})
    // console.log(urls)
    res.render('home',{urls:urls})
})
.get('/login',(req,res)=>{
    res.render('login')
})
.get('/signup',(req,res)=>{
    res.render('signup')
})

module.exports = router