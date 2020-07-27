const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')


module.exports = (app) => {
    app.post('/register', 
        authenticationControllerPolicy.register,
        authenticationController.register);

    app.post('/login', 
        authenticationController.login);
    
}
