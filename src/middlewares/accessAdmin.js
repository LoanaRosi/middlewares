let admins = ["Greta", "Ada", "Vim", "Tim"];

const access = (req, res, next) =>{
    if(admins.includes(req.query.user)){
        next()
    }else{
        res.send("No tienes privilegios de administrador")
    }
}
module.exports = access;