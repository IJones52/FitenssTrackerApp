const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const exerciseController = require('./controllers/exerciseController');
const workoutController = require('./controllers/workoutController');

module.exports = (app) => {
    app.post('/register', 
        authenticationControllerPolicy.register,
        authenticationController.register);

    app.post('/login', 
        authenticationController.login);
   
    app.post('/exercises/new',
        exerciseController.newExercise)
   
    app.get('/exercises/all', 
        exerciseController.getAllExercises)

    
    //Make route for all user's info for dashboard

    //Make a route for workouts
    app.post('/workouts/new', 
        workoutController.newWorkout)

    app.get('/workouts/all', workoutController.getAllWorkouts)
    //Make a route for weight

    //Make a route for calories
  
}
