module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

        email: {
            type: DataTypes.STRING,
        },
        pseudo: {
            type: DataTypes.STRING,
        },
        money: {
            type: DataTypes.INTEGER,
        },
        password: {
            type: DataTypes.STRING,
        }
    })

    return User
}