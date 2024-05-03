const dbConfig = require('../config/dbConfig.js');
const router = require('express').Router()
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }
)
sequelize.authenticate()
    .then(() => {
        console.log('connected gg')
    })
    .catch(err => {
        console.log('Error:' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.pokemon = require('./pokemonModel')(sequelize, DataTypes)
db.user = require('./userModel')(sequelize, DataTypes)
db.inventaire = require('./inventaireModel')(sequelize, DataTypes)



db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })


db.user.belongsToMany(db.pokemon, { through: db.inventaire })
db.pokemon.belongsToMany(db.user, { through: db.inventaire })

/* 1 to many relation
db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
})


//clef etrangere
db.user.belongsTo(db.vehicule, {
    foreignKey: 'vehicule',
    as: 'product'
})
*/

/*Création de la clef etrangere Forum -> User
db.forum.belongsTo(db.user);
//Création de la clef etrangere article -> user
db.article.belongsTo(db.user);

//Création de la clef etrangere post -> forum
db.post.belongsTo(db.forum);
//Création de la clef etrangere post -> user
db.post.belongsTo(db.user);

//Création de la clef etrangere post -> user
db.historiqueEntretien.belongsTo(db.vehicule);



//Création de la table de jointure UserVehicule entre vehicule et users
db.user.belongsToMany(db.vehicule, { through: db.uservehicule })
db.vehicule.belongsToMany(db.user, { through: db.uservehicule })

//Création de la table de jointure Historique entre appel et users
db.user.belongsToMany(db.appel, { through: db.historique })
db.appel.belongsToMany(db.user, { through: db.historique })

//Création de la table de jointure EnregistrerArticle entre article et users
db.user.belongsToMany(db.article, { through: db.enregistrer_article })
db.article.belongsToMany(db.user, { through: db.enregistrer_article })

//Création de la table de jointure EnregistrerForum entre forum et users
db.user.belongsToMany(db.forum, { through: db.enregistrer_forum })
db.forum.belongsToMany(db.user, { through: db.enregistrer_forum })
*/
module.exports = db