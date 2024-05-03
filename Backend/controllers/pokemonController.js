const db = require("../models");

// model
const Pokemon = db.pokemon;

//function

// ADD articlle
const addPokemon = async(req, res) => {
    let info = {
        titre: req.body.titre,
        description: req.body.description,
        image: req.body.image,
        rarete: req.body.rarete,
    };

    const pokemon = await Pokemon.create(info);
    res.status("200").send(pokemon);
};

// get all pokemon
const getAllPokemon = async(req, res) => {
    const pokemons = await Pokemon.findAll({
        order: [
            ['rarete', 'ASC']
        ]
    });
    if (pokemons.length === 0) {
        res.status(400).send("Aucun pokemons a afficher");

    } else {
        res.status(200).send(pokemons);
    }

};
//deletepokemon

const deletePokemon = async(req, res) => {
    let id = req.params.id;
    let pokemon = await Pokemon.findOne({ where: { id: id } });

    if (pokemon) {
        await Pokemon.destroy({ where: { id: id } });
        res.status(200).send("pokemon deleted GG");
    } else {
        res.status(400).send(`Aucun pokemon trouvé. Suppresion annulé`);
    }
};

const PutPokemon = async(req, res) => {

    let id = req.params.id;
    let pokemon = await Pokemon.findOne({ where: { id: id } });

    if (pokemon) {
        const pokemons = await Pokemon.update({ titre: req.body.titre }, { description: req.body.description }, { image: req.body.image }, { rarete: req.body.rarete },

            { where: { id: id } });
        res.status(200).send(pokemons);
    } else {
        res.status(400).send(`Aucun pokemon a modif pour ${id}`);
    }
};

const getPokemonbyId = async(req, res) => {
    let id = req.params.id;
    let pokemon = await Pokemon.findOne({ where: { id: id } });
    if (pokemon) {
        res.status(200).send(pokemon);
    } else {
        res.status(400).send("Aucun pokemons a afficher");
    }

};

/*
Pokemon.create({ titre: "Magicarpe Violet", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/violet.png", rarete: 0 });
Pokemon.create({ titre: "Magicarpe Bicolor", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/bicolor.png", rarete: 0 });
Pokemon.create({ titre: "Magicarpe Bicolor Rose", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/bicolor-rose.png", rarete: 0 });
Pokemon.create({ titre: "Magicarpe Bleu", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/bleu.png", rarete: 0 });
Pokemon.create({ titre: "Magicarpe Bulle Gris", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/bulle-gris.png", rarete: 0 });
Pokemon.create({ titre: "Magicarpe Bulle Violet", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/bulle-violet.png", rarete: 1 });
Pokemon.create({ titre: "Magicarpe Chocolat", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/chocolat.png", rarete: 1 });
Pokemon.create({ titre: "Magicarpe Koy", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/koî.png", rarete: 1 });
Pokemon.create({ titre: "Magicarpe Voleur", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/masquer.png", rarete: 2 });
Pokemon.create({ titre: "Magicarpe Strié", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/strier.png", rarete: 2 });
Pokemon.create({ titre: "Magicarpe Tigré", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/tigrer.png", rarete: 2 });
Pokemon.create({ titre: "Magicarpe Doré", description: "Wow Regardez comment il brille, n'oubliez pas de porter vos lunettes de soleil", image: "images/dorer.png", rarete: 3 });
*/

module.exports = {
    getAllPokemon,
    addPokemon,
    deletePokemon,
    PutPokemon,
    getPokemonbyId
};