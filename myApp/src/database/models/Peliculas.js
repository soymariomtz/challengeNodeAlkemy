module.exports = (sequelize, DataTypes) => {
  let alias = "Peliculas";

  let cols = {
    id: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    imagen: {
      type: DataTypes.STRING(255),
    },
    titulo: {
      type: DataTypes.STRING(255),
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.DECIMAL(5),
    },
    genero_id: {
      type: DataTypes.BIGINT(11),
    },
  };
  let config = {
    timestamps: false,
    // createdAt: "created_at",
    // updatedAt: "updated_at",
    // deletedAt: "deleted_at",
  };

  const Peliculas = sequelize.define(alias, cols, config);

  Peliculas.associate = function (models) {
    Peliculas.belongsToMany(models.Personajes, {
      as: "personajes",
      through: "peliculas_personajes",
      foreignKey: "peliculas_id",
      otherKey: "personaje_id",
      timestamps: false,
    });
    Peliculas.belongsTo(models.Generos, {
      as: "generos",
      foreignKey: "genero_id",
      timestamps: false,
    });
  };

  return Peliculas;
};
