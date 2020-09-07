module.exports = (sequelize, DataTypes) => {
    const Weight = sequelize.define('Weight', {
        date: {
            allowNull: false,
            type: DataTypes.DATE
        },
        value: {
            allowNull: false,
            type: DataTypes.NUMBER
        }
    })

    Weight.associate = function (models) {
        Weight.belongsTo(models.User)
    }

    return Weight

}