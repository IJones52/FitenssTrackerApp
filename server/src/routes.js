const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const exerciseController = require('./controllers/exerciseController')

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

    //Make a route for weight

    //Make a route for calories
  
}
