//Rutas para videojugo
const express = require('express');
const router = express.Router();
const videojuegoController = require('../controllers/videojuegoController');

// api/videojuegos
router.get("/", videojuegoController.getVideojuegos);

router.post("/", videojuegoController.crearVideojuego);

router.get("/:id", videojuegoController.getVideojuego);

router.put("/:id", videojuegoController.actualizarVideojuego);

router.delete("/:id", videojuegoController.eliminarVideojuego);

module.exports = router;