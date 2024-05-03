module.exports = (sequelize, DataTypes) => {

    const Inventaire = sequelize.define("inventaire", {


        quantite: {
            type: DataTypes.INTEGER,
        },

    })

    return Inventaire
}