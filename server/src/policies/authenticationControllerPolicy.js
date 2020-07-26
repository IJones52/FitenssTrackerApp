const Joi = require('@hapi/joi')

module.exports = {
    register (req, res, next){
        const schema = Joi.object({
            email: Joi.string().email({tlds: { allow: ["com", "net", "edu", "org"] } }),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{8,32}$/)
        })

        const {error, value}  = schema.validate(req.body)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email'
                    })
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following criteria
                            <br>
                            1. Password must contain ONLY: lower case, upper case, or numbers
                            <br>
                            2. Password must be at least 8 charachters in length and no longer than 32 charachters
                        `
                    })
                default:
                    res.status(400).send({
                        error: 'Invalid registration information '
                    })
            }
                
        }
        else{
            next()
        }
        
    }
}