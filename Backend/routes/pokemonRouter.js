const PokemonController = require('../controllers/pokemonController')
const AuthController = require('../controllers/authController')

//router
const router = require('express').Router()
    //AuthController.isAuthenticated,
    //review URl and Controller
router.post('/addPokemon', PokemonController.addPokemon)
router.get('/getAll', PokemonController.getAllPokemon)
router.delete('/deletePokemon/:id', PokemonController.deletePokemon)
router.put('/putPokemon/:id', PokemonController.PutPokemon)
router.get('/getPokemonbyId/:id', PokemonController.getPokemonbyId)
module.exports = router