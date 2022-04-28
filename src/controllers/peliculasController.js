const db = require("../database/models");
const { Op } = require("sequelize");

const peliculasController = {
  list: (req, res) => {
    db.Peliculas.findAll({
      atributtes: [
        "id",
        "imagen",
        "titulo",
        "calificacion",
        "fechaCreacion",
        "genero_id",
      ],
    })
      .then((peliculas) => {
        return res.status(200).json({
          meta: {
            total: peliculas.length,
            status: 200,
            url: "http://localhost:3000/movies",
            data: peliculas,
          },
        });
      })
      .catch((error) => console.log(error));
  },
  detail: (req, res) => {
    db.Peliculas.findByPk(req.params.id, {
      include: ["personajes", "generos"],
    })
      .then((pelicula) => {
        res.status(200).json({
          data: pelicula,
          status: 200,
          url: "http://localhost:3000/movies/detail/:id",
        });
      })
      .catch((error) => console.log(error));
  },
  search: (req, res) => {
    let { titulo, fechaCreacion, genero } = req.query;
    db.Peliculas.findAll({
      include: ["generos"],
      where: {
        [Op.or]: [
          { titulo: { [Op.like]: `%${titulo}%` } },
          { fechaCreacion: { [Op.like]: `%${fechaCreacion}%` } },
          { genero_id: { [Op.like]: `%${genero}%` } },
        ],
      },
      order: [["fechaCreacion", "DESC" || "ASC"]],
    })
      .then((peliculas) => {
        return res.status(200).json({
          meta: {
            total: peliculas.length,
            status: 200,
            url: "http://localhost:3000/movies/search",
          },
          data: peliculas,
        });
      })
      .catch((error) => console.log(error));
  },

  create: (req, res) => {
    db.Peliculas.create({
      imagen: req.body.imagen,
      titulo: req.body.titulo,
      calificacion: req.body.calificacion,
      fechaCreacion: req.body.fechaCreacion,
      genero_id: req.body.genero_id,
    })
      .then((pelicula) => {
        res.status(200).json({
          data: pelicula,
          status: 200,
          url: "http://localhost:3000/movies/create",
        });
      })
      .catch((error) => console.log(error));
  },
  edit: (req, res) => {
    db.Peliculas.update(
      {
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        calificacion: req.body.calificacion,
        fechaCreacion: req.body.fechaCreacion,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((pelicula) => {
        res.status(200).json({
          data: pelicula,
          status: 200,
          url: "http://localhost:3000/movies/edit/:id",
        });
      })
      .catch((error) => console.log(error));
  },
  delete: (req, res) => {
    db.Peliculas.destroy({
      where: { id: req.params.id },
    })
      .then((pelicula) => {
        res.status(200).json({
          ok: true,
          data: pelicula,
          status: 200,
          url: "http://localhost:3000/movies/delete/:id",
        });
      })
      .catch((error) => console.log(error));
  },
};

module.exports = peliculasController;
