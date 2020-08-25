const {Exercise, User, Workout} = require('../models')
const config = require('../config/config')
const {Op} = require('sequelize')
module.exports =  {

    /**
     * Request a workout to be created
     * the req contains the ids of the exercises to be added to
     * the workout
     */
    async newWorkout  (req, res){
        try{
            exerciseIds = req.body.exerciseIds
            //Find all where the id is one of the input ids
            const Exercises = await Exercise.findAll({
                where: {
                    UserId: req.body.UserId,
                    id: {
                        [Op.or]: exerciseIds
                    }
                },
                raw: true
            })
            //Need to figure out how to add a sequilze models to am odel
            //Add exercises, create the workout and echo it back
            req.body.exercises = Exercises
           
            const workout = await Workout.create(req.body)
            res.send({
                workout: workout.toJSON()
            })

        }
        catch(err) {
            res.send({
                message: "failed to create workout"
            })
        }
    },


    async getAllWorkouts (req,res){
        try{
            const id = req.query.UserId

           await Workout.findAll({
                where: {
                    UserId: id
                }
            })

        }
        catch (err){
            res.status(500).send({
                message: "Failed to retireve workouts"
            })
        }
    },


    async getWorkoutById(req,res){
        try{
            const id = req.query.UserId
            const workoutId = req.query.workoutId

            await Workout.findOne({
                where: {
                    UserId: id,
                    id: workoutId
                }
            })
            .then(workout => res.send(workout))
        }
        catch (err){
            res.status(500).send({
                message: "Failed to retireve workout " + req.query.id
            })
         }
    },

    async deleteWorkoutById(req,res){
        try{
            const id = req.query.UserId
            const workoutId = req.query.workoutId

            await Workout.findOne({
                where: {
                    UserId: id,
                    id: workoutId
                }
            })
            .then(workout =>  workout.destroy())
            res.send({
                message: "Delete Successful"
            })
        }
        catch (err){
            res.status(500).send({
                message: "Failed to delete workout " + req.query.id
            })
         }
    },
}