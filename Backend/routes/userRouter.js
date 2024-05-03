const UserController = require('../controllers/userController')
const AuthController = require('../controllers/authController')

//router
const router = require('express').Router()

//review URl and Controller
//AuthController.isAuthenticated

router.get('/getAll', UserController.getAllUser)
router.delete('/deleteUser/:id', UserController.deleteUser)
router.put('/putUser/:id', UserController.PutUser)
router.put('/ChangeMoneyfor1User/:id', UserController.ChangeMoneyfor1User)
module.exports = router