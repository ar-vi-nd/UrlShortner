const express = require('express')
const router = express.Router()
const urls = require('../../models/url')
const shortid = require('shortid');

router.route('/')

.get(async(req,res)=>{
const url = await urls.find({})
// console.log(url,typeof(url))
let array = ['<li>1</li>,<li>2</li>,<li>3</li>']
let array1 = [1,2,3]
// console.log(array1,typeof array1)
let html = `<head><body><h2>All url and their list</h2>
${url.map((url)=>{return `<li>${url.redirecturl} ==> ${url.shortId}==> ${url.visitcount} </li> ` }).join("")}

[<li>1</li>,<li>2</li>,,<li>3</li>]
${url}
${array}
${array1}
</body><head>`
// console.log(html,typeof(html))
return res.send(html)
})
// here i was wondering why an array inside this html [<li>1</li>,<li>2</li>,,<li>3</li>] is rendering with sq brackets and reason is because the outer sq brackets are treated as string not 
// brackets to represent array
.post(async(req,res)=>{
    // console.log(req.body)
    try{

        console.log(req.body)

        let shortId = shortid()

        let url = await urls.create({shortId:shortId,redirecturl:req.body.redirecturl,visitcount:0,created_by:req.user.id})
        // console.log(url)
        return res.redirect('/')
        // return res.render('home',{id:url.shortId})

        
    }catch(error){
        console.log("error in creating short url : ",error)
    }

});

router.get('/:id',async(req,res)=>{
    // console.log(req.params.id)
    try{

        let url = await urls.findOne({"shortId":req.params.id})
        // console.log(url)
        if(url){
            const filter = {"shortId":req.params.id}
            const update = {$set:{"visitcount":url.visitcount+1}}
            const redirecturl = await urls.findOneAndUpdate(filter,update,{new:true})
            // console.log(redirecturl)
            return res.redirect(redirecturl.redirecturl)
        }
    }catch(error){
        console.log("error getting redirect url for shortid : ",error)
    }
})

module.exports = router