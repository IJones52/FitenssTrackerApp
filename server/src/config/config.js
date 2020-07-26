module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'fitnesstracker',
        user: process.env.DB_USER || 'fitnesstracker',
        passowrd: process.env.DB_PASS || 'fitnesstracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.host || 'localhost',
            storage: './fitnesstracker.sqlite',
        }
    }
}
