module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'fitnesstrackerdatabase',
        user: process.env.DB_USER || 'fitnesstrackerdatabase',
        passowrd: process.env.DB_PASS || 'fitnesstrackerdatabase',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './fitnesstrackerdatabase.sqlite',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
