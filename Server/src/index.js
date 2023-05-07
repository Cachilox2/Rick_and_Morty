const server = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(
        `El servidor esta escuchando en el puerto http://localhost/${PORT}...`
      );
    });
  })
  .catch((err) => console.log(err));
