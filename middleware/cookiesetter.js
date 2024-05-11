const cookietousermap = new Map()

function setcookie(id,user){
    cookietousermap.set(id,user)
}

function getcookie(id){
    return cookietousermap.get(id)
}

module.exports = {setcookie,getcookie}