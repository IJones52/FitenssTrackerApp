const {Weight, User} = require('../models')
const config = require('../config/config')

module.exports =  {
    async  newEntry (req, res){
        try{
            const weight = await Weight.create(req.body)
            res.send({
                    exercise: weight.toJSON()
                }  
            )
        }
        catch (err){
            console.log("Weight failed to create")
        }
    },
    async getAllEntries (req, res){
        try{  
            const id = req.query.UserId

            await Weight.findAll({
                where: {UserId: id}
            })
            .then(weights => res.send(weights))
        }
        catch (err){
            res.status(500).send({
                message: "failed to retreive weight data"
            }) 
        }
    }, 
}