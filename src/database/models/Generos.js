module.exports = (sequelize, DataTypes) => {
  let alias = "Generos";

  let cols = {
    id: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    imagen: {
      type: DataTypes.STRING(255),
    },
  };
  let config = {
    timestamps: false,
  };

  const Generos = sequelize.define(alias, cols, config);

  Generos.associate = function (models) {
    Generos.hasMany(models.Peliculas, {
      as: "peliculas",
      foreignKey: "genero_id",
      timestamps: false,
    });
  };

  return Generos;
};
