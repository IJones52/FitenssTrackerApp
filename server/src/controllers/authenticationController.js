const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
   async register (req, res) {
        try{
        const user = await User.create(req.body)
        res.send({
            user: user.toJSON(),
            token: jwtSignUser(user.toJSON())
        })
        }
        catch (err){
            res.status(400).send({
                error: `${req.body.email} is already registered`
            })
        }
       
    },
    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email,
                }
            })
            
            if (!user){
                res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isValidPassword = await user.comparePassword(password)
            if(!isValidPassword){
                res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            res.send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON())
            })

        }
        catch (err){
            res.status(500).send({
                error: `An error has occured atempting login`
            })
        }
       
    },


}
