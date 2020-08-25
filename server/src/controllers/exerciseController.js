const {Exercise, User} = require('../models')
const config = require('../config/config')
module.exports =  {
    async newExercise (req, res){
        try{
            const exercise = await Exercise.create(req.body)
            res.send({
                    exercise: exercise.toJSON()
                }  
            )
        }
        catch (err){
            console.log("Exercise failed to create")
        }
    },
    async getAllExercises (req, res){
        try{  
            const id = req.query.UserId

            await Exercise.findAll({
                where: {UserId: id}
            })
            .then(exercises => res.send(exercises))
        }
        catch (err){
            res.status(500).send({
                message: "failed to retreive all exercises"
            }) 
        }
    },

    async getExerciseById(req,res){
        try{
            const id = req.query.UserId
            const exerciseId = req.query.ExerciseId
            await Exercise.findOne({
                where: {
                    UserId: id,
                    id: exerciseId
                }
            })
            .then(exercise => res.send(exercise))
        }
        catch(err){
            res.status(500).send({
                message: 'failed to retrieve exercise' + req.query.ExerciseId
            })
        }
    },

    async deleteExerciseById(req,res){
        try{
            const id = req.query.UserId
            const exerciseId = req.query.ExerciseId
            await Exercise.findOne({
                where: {
                    UserId: id,
                    id: exerciseId
                }
            })
            .then(exercise =>  exercise.destroy())
            res.send({
                message: "Delete Successful"
            })
        }
        catch(err){
            res.status(500).send({
                message: 'failed to destroy exercise' + req.query.ExerciseId
            })
        }

    }
}