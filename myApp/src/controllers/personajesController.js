const db = require("../database/models");
const { Op } = require("sequelize");
const res = require("express/lib/response");

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
          data: personaje,
        });
      })
      .catch((error) => console.log(error));
  },
  detail: (req, res) => {
    db.Personajes.findByPk({
      include: [{ association: "peliculas", atributtes: ["id", "nombre"] }],
    })
      .then((personaje) => {
        return res.status(200).json({
          data: personaje,
          status: 200,
          url: "http://localhost:3000/characters/:id",
        });
      })
      .catch((error) => console.log(error));
  },
  search: (req, res) => {
    db.Personajes.findAll({
      include: ["peliculas"],
      where: {
        nombre: { [Op.like]: "%" + req.query + "%" },
        edad: { [Op.like]: "%" + req.query + "%" },
        peliculas: { [Op.like]: "%" + req.query + "%" },
      },
    })
      .then((personajes) => {
        return res.status(200).json({
          meta: {
            total: personajes.length,
            status: 200,
            url: "http://localhost:3000/characters/search?",
          },
          data: personajes,
          pelicula: personajes.peliculas,
        });
      })
      .catch((error) => console.log(error));
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
        peliculas_id: req.body.peliculas_id,
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
    db.Personajes.delete({
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
