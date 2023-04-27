const app = require("../src/app");
const session = require("supertest");
const request = session(app);
const URL = "/rickandmorty/character/";

const character = {
  id: 924,
  name: 'cachilo',
  species: 'Human',
  gender: 'Female',
  status: 'Alive',
  origin: {
      name: 'Earth (C-137)'
  },
  image: 'image.jpg'
};

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const res = await request.get(`${URL}${1}`);
      expect(res.statusCode).toBe(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const res = await request.get(`${URL}1`);
      
      for(const prop in character){
        expect(res.body).toHaveProperty(prop)
      }
    });

    it("Si hay un error responde con status: 500", async () => {
      const res = await request.get(`${URL}${999}`);
      expect(res.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const access = { access: true };

    it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async () => {
      const res = await request.get("/rickandmorty/login/?email=pedro@gmail.com&password=hola123")
      expect(res.body).toEqual(access);
    });

    it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async () => {
      const res = await request.get("/rickandmorty/login/?email=pedro@gmail.com&password=hola321");
      access.access = false;
      expect(res.body).toEqual(access)
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it('Debe guardar el personaje en favoritos', async () => {
      const res = await request.post("/rickandmorty/fav").send(character)
      expect(res.body).toContainEqual(character)
    });

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      character.id = 1923;
      character.name = 'FT 37a';
      const res = await request.post("/rickandmorty/fav").send(character)
      expect(res.body.length).toBe(2)
    })
  })

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
      const res = await request.delete('/rickandmorty/fav/2gh56');
      expect(res.body.length).toBe(2);
    });

    it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
      const res = await request.delete('/rickandmorty/fav/1923');
      expect(res.body.length)
    });
  });

});
