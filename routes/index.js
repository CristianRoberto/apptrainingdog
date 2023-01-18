const { Router } = require('express');
const router = Router();

const { defectoUsers, getUsers, login, getUserById, createUser, updateUser, deleteUser, getMascotasById, getMascotas,createMascotas,reportesMascotas, updateMascotas, deleteMascotas } = require('../controllers/index.controller');

//router usuarios
router.get('/', defectoUsers);
router.get('/users', getUsers);
router.get('/usrs', login);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

//router Mascotas
router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotasById);
router.post('/mascotas', createMascotas);
router.put('/mascotas/:id', updateMascotas)
router.delete('/mascotas/:id', deleteMascotas);

//router ReportesMascotas
router.post('/reportes', reportesMascotas);


module.exports = router;