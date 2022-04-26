const express= require('express')
const router = express.Router()
const userController= require("../controllers/user.controller")


router.post('/user', userController.addUser);
router.get('/users', userController.getUsers);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id', userController.updateUser);
router.get('/user/:id',userController.getUser)


module.exports = router;