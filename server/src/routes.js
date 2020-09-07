const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const exerciseController = require('./controllers/exerciseController');
const workoutController = require('./controllers/workoutController');
const weightController = require('./controllers/weightController')
module.exports = (app) => {
    //Login Routes
    app.post('/register', 
        authenticationControllerPolicy.register,
        authenticationController.register);

    app.post('/login', 
        authenticationController.login);
  
        
    //Exercise Routes
    app.post('/exercises/new',
        exerciseController.newExercise)
   
    app.get('/exercises/all', 
        exerciseController.getAllExercises)
    
    app.get('/exercises',
        exerciseController.getExerciseById)
    
    app.post('/exercises/delete',
        exerciseController.deleteExerciseById)
    

    //Workout Routes
    app.post('/workouts/new', 
        workoutController.newWorkout)

    app.get('/workouts/all', workoutController.getAllWorkouts)
    
    app.get('/workouts', workoutController.getWorkoutById)

    app.post('/workouts/delete', workoutController.deleteWorkoutById)

    //Weight Routes
    app.post('/weight/new', weightController.newEntry)

    app.get('/weight/all', weightController.getAllEntries)

}
