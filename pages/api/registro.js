// Importa las bibliotecas necesarias
import mysql from 'mysql2';

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mynewdb",
  });
  
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await db.promise().execute('INSERT INTO usuarios (nombreUsuario, email, password) VALUES (?, ?, ?)', [
        req.body.nombreUsuario,
        req.body.email,
        req.body.password,
      ]);

      res.status(200).json({ message: 'Registro exitoso' });
      console.log('Inserción exitosa');
    } catch (error) {
        console.error('Error en la inserción en la base de datos:', error);
        res.status(500).json({ message: 'Error interno en el servidor' });
      }
  }
}
