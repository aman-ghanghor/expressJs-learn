import express from "express";
const router = express.Router()

import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js"

router.get('/', UserController.getUsers)



// Route Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)


// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.resetUserPassword)


// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)




export default router;