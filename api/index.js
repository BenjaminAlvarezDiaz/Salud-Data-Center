const server = require ('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const dbConnection = process.env.DB_CONNECTION;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(
      `Servidor de Salud Data Center esta esuchando el puerto : ${process.env.PORT} 🚀`
    ); // eslint-disable-line no-console
  });
});