const InventaireController = require('../controllers/inventaireController')
const AuthController = require('../controllers/authController')
const { inventaire } = require('../models')

//router
const router = require('express').Router()

//review URl and Controller
router.post('/addInventaire', InventaireController.addInventaire)
router.get('/getAll', InventaireController.getAllInventaire)
router.get('/getInventairebyId/:id', InventaireController.getInventairebyId)
router.delete('deleteInventaire/:id', InventaireController.deleteInventaire)
router.post('/RetirerPokemonDeInventaire', InventaireController.RetirerPokemonDeInventaire)



module.exports = router