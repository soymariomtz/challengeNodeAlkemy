const bcrypt = require("bcrypt");
const db = require("../database/models");
const jwt = require("jsonwebtoken");
const welcomeMail = require("../email/send");

const usuariosController = {
  register: (req, res) => {
    let createPassword = bcrypt.hashSync(req.body.password, 10);

    db.Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    }).then((usuario) => {
      if (usuario) {
        return res.status(404).json({
          status: 404,
          data: "El usuario ya existe",
        });
      } else {
        return db.Usuarios.create({
          email: req.body.email,
          password: createPassword,
        })
          .then((usuario) => {
            res.status(200).json({
              status: 200,
              data: usuario,
              url: "http://localhost:3000/auth/register",
            });
            welcomeMail(usuario.email);
          })

          .catch((error) => {
            console.log(error);
          });
      }
    });
  },
  login: (req, res) => {
    db.Usuarios.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((usuario) => {
        if (usuario) {
          let validPassword = bcrypt.compareSync(
            req.body.password,
            usuario.password
          );
          if (validPassword) {
            let token = jwt.sign(
              { id: usuario.id, email: usuario.email },
              "secret",
              {
                expiresIn: "1h",
              }
            );
            res.status(200).json({
              status: 200,
              data: usuario,
              token,
              url: "http://localhost:3000/auth/login",
            });
          } else {
            res.status(404).json({
              status: 404,
              data: "Contraseña incorrecta",
              url: "http://localhost:3000/auth/login",
            });
          }
        } else {
          res.status(404).json({
            status: 404,
            data: "Usuario invalido",
            url: "http://localhost:3000/auth/login",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
module.exports = usuariosController;
