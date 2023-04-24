import mongoose from "mongoose";

const url = 'mongodb+srv://localhost:4001/cafe-branch';

// mongoose.connect(url);

const connection = mongoose.connection;
connection.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err);
  });
// connection.once('open', ()=>{
//     console.log('BD conectada')
// })