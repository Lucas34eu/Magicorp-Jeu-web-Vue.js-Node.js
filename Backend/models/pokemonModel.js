module.exports = (sequelize, DataTypes) => {

    const Pokemon = sequelize.define("pokemon", {

        titre: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        rarete: {
            type: DataTypes.INTEGER,
        },
    })

    return Pokemon
}