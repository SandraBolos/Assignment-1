import { Router } from "express";
import { DisplayLoginPage, 
        DisplayRegistrationPage,
        ProcessLoginPage,
        ProcessRegisterPage,
        ProcessLogoutPage
       } from "../controllers/auth.js";

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage);
//Process Login Page
router.post('/login', ProcessLoginPage);

// Display Registration Page
router.get('/register', DisplayRegistrationPage);
// Process Register Page
router.post('/register', ProcessRegisterPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;