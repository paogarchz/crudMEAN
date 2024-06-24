const mongoose = require('mongoose');
const {Schema} = mongoose;

const VideojuegoSchema = new Schema({
    
        nombre: { type: String, required: true },
        precio: { type: String, required: true },
        iva: { type: String, required: true },
        codigo: { type: String, required: true },
        stock: { type: String, required: true },
      },
    
      {
        versionKey: false,
        timestamps: true,
      }
    );


module.exports = mongoose.model('Videojuego', VideojuegoSchema);