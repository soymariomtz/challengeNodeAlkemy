const db = require("../database/models");
const { Op } = require("sequelize");

const personajesController = {
  list: (req, res) => {
    db.Personajes.findAll({
      atributtes: ["id", "nombre", "imagen", "edad", "peso", "historia"],
    })
      .then((personajes) => {
        return res.status(200).json({
          meta: {
            total: personajes.length,
            status: 200,
            url: "http://localhost:3000/characters",
          },
          data: personajes,
        });
      })
      .catch((error) => console.log(error));
  },
  detail: (req, res) => {
    db.Personajes.findByPk(req.params.id, {
      include: [{ association: "peliculas" }],
    })
      .then((personaje) => {
        return res.status(200).json({
          data: personaje,
          status: 200,
          url: "http://localhost:3000/characters/detail/:id",
        });
      })
      .catch((error) => console.log(error));
  },
  search: (req, res) => {
    let { nombre, edad, peso } = req.query;
    db.Personajes.findAll({
      include: ["peliculas"],
      atributtes: ["nombre", "edad", "peso"],
      where: {
        [Op.or]: [
          { nombre: { [Op.like]: `%${nombre}%` } },
          { edad: { [Op.like]: `%${edad}%` } },
          { peso: { [Op.like]: `%${peso}%` } },
        ],
      },
    })
      .then((personajes) => {
        return res.status(200).json({
          meta: {
            total: personajes.length,
            status: 200,
            url: "http://localhost:3000/characters/search",
          },
          data: personajes,
          peliculas: personajes.peliculas,
        });
      })
      .catch((e) => console.log(e));
  },
  create: (req, res) => {
    db.Personajes.create({
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      edad: req.body.edad,
      peso: req.body.peso,
      historia: req.body.historia,
      peliculas_id: req.body.peliculas_id,
    })
      .then((personaje) => {
        return res.status(200).json({
          data: personaje,
          status: 200,
          url: "http://localhost:3000/characters/create",
        });
      })
      .catch((error) => console.log(error));
  },
  edit: (req, res) => {
    db.Personajes.update(
      {
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((personaje) => {
        return res.status(200).json({
          data: personaje,
          status: 200,
          url: "http://localhost:3000/characters/edit/:id",
        });
      })
      .catch((error) => console.log(error));
  },
  delete: (req, res) => {
    db.Personajes.destroy({
      where: { id: req.params.id },
    })
      .then((personaje) => {
        return res.status(200).json({
          data: personaje,
          status: 200,
          url: "http://localhost:3000/characters/delete/:id",
        });
      })
      .catch((error) => console.log(error));
  },
};

module.exports = personajesController;
