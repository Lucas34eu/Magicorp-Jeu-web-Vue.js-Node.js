const db = require("../models");

// model
const Inventaire = db.inventaire;

//function

// ADD articlle
const addInventaire = async(req, res) => {
    let userid = req.body.userId
    let pokemonid = req.body.pokemonId
    let inventaire = await Inventaire.findOne({ where: { userId: userid, pokemonId: pokemonid } });

    if (inventaire) {

        let newQTE = inventaire.quantite + 1
        Inventaire.update({ quantite: newQTE }, { where: { userId: req.body.userId, pokemonId: req.body.pokemonId } }, );
        res.status("200").send("inventaire add ");
    } else {
        let info = {
            quantite: 1,
            userId: req.body.userId,
            pokemonId: req.body.pokemonId
        };
        Inventaire.create(info);
        res.status("200").send("inventaire add ");
    }


};

const RetirerPokemonDeInventaire = async(req, res) => {
    let userid = req.body.userId
    let pokemonid = req.body.pokemonId
    let inventaire = await Inventaire.findOne({ where: { userId: userid, pokemonId: pokemonid } });

    if (inventaire) {
        if (inventaire.quantite > 1) {
            let newQTE = inventaire.quantite - 1
            Inventaire.update({ quantite: newQTE }, { where: { userId: req.body.userId, pokemonId: req.body.pokemonId } }, );
            res.status("200").send("inventaire modifié ");
        } else {
            Inventaire.destroy({ where: { userId: req.body.userId, pokemonId: req.body.pokemonId } });
            res.status("200").send("delete");
        }

    } else {
        res.status("400").send("error");
    }


};

// get all inventaire
const getAllInventaire = async(req, res) => {
    const inventaires = await Inventaire.findAll();
    if (inventaires.length === 0) {
        res.status(400).send("Aucun inventaires a afficher");

    } else {
        res.status(200).send(inventaires);
    }

};

// get all inventaire
const getInventairebyId = async(req, res) => {
    let id = req.params.id;
    const inventaires = await Inventaire.findAll({ where: { userId: id } });
    if (inventaires) {

        res.status(200).send(inventaires);
    } else {
        res.status(400).send("Aucun inventaires a afficher");
    }

};
//deleteinventaire

const deleteInventaire = async(req, res) => {
    let inventaire = await Inventaire.findOne({ where: { userId: req.body.userId, pokemonId: req.body.pokemonId } });

    if (inventaire) {
        await Inventaire.destroy({ where: { userId: req.body.userId, pokemonId: req.body.pokemonId } });
        res.status(200).send("inventaire deleted GG");
    } else {
        res.status(400).send(`Aucun inventaire trouvé. Suppresion annulé`);
    }
};




module.exports = {
    getAllInventaire,
    addInventaire,
    deleteInventaire,
    getInventairebyId,
    RetirerPokemonDeInventaire
};