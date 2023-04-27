const server = require("./app")

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost/${PORT}...`);
})