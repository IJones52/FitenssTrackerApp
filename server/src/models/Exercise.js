module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        focus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    Exercise.associate = function (models) {
        Exercise.belongsTo(models.User)
    }
    
    return Exercise
}