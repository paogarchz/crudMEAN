const Videojuego = require("../models/Videojuego");

const videoCtrl = {};

videoCtrl.getVideojuegos = async (req, res, next) => {
  const videojuegos = await Videojuego.find();
  res.json(videojuegos);
};

videoCtrl.crearVideojuego = async (req, res, next) => {
  const videojuego = new Videojuego({
    nombre: req.body.nombre,
    precio: req.body.precio,
    iva: req.body.iva,
    codigo: req.body.codigo,
    stock: req.body.stock,
  });
  await videojuego.save();
  res.json({ status: "Videojuego creado" });
};

videoCtrl.getVideojuego = async (req, res, next) => {
  const { id } = req.params;
  const videojuego = await Videojuego.findById(id);
  res.json(videojuego);
};

videoCtrl.actualizarVideojuego = async (req, res, next) => {
  const { id } = req.params;
  await Videojuego.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Videojuego actualizado" });
};

videoCtrl.eliminarVideojuego = async (req, res, next) => {
  await Videojuego.findByIdAndDelete(req.params.id);
  res.json({ status: "Videojuego borrado" });
};

module.exports = videoCtrl;