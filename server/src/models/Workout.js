module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        exercises: {
            type: DataTypes.JSON
        }
    })

    Workout.associate = function (models) {
        Workout.belongsTo(models.User)
    }
    
    return Workout
}