import {Router} from 'express';
import { DisplayBusinessContactAddPage, DisplayBusinessContactEditPage, DisplayBusinessContactList, ProcessBusinessContactAddPage, ProcessBusinessContactDelete, ProcessBusinessContactEditPage } from '../controllers/contacts.js';

import { AuthGuard } from '../utils/index.js';  
const router = Router();

// R ead
router.get('/contacts-list',AuthGuard, DisplayBusinessContactList);

// C reate
router.get('/contacts-add', AuthGuard,DisplayBusinessContactAddPage);
router.post('/contacts-add', AuthGuard, ProcessBusinessContactAddPage);

// U pdate
router.get('/contacts-edit/:id', AuthGuard,DisplayBusinessContactEditPage);
router.post('/contacts-edit/:id', AuthGuard,ProcessBusinessContactEditPage);

// D elete
router.get('/contacts-delete/:id', AuthGuard, ProcessBusinessContactDelete);

export default router;