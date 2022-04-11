module.exports = (sequelize, DataTypes) => {
  let alias = "Personajes";
  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    imagen: {
      type: DataTypes.STRING(255),
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    edad: {
      type: DataTypes.INTEGER(11),
    },
    peso: {
      type: DataTypes.INTEGER(11),
    },
    historia: {
      type: DataTypes.TEXT(),
    },
    // peliculas_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    // },
  };
  let config = {
    timestamps: false,
    // createdAt: "created_at",
    // updatedAt: "updated_at",
    // deletedAt: "deleted_at",
  };

  const Personajes = sequelize.define(alias, cols, config);

  Personajes.associate = function (models) {
    Personajes.belongsToMany(models.Peliculas, {
      as: "peliculas",
      through: "peliculas_personajes",
      foreignKey: "personajes_id",
      otherKey: "peliculas_id",
      timestamps: false,
    });
  };

  return Personajes;
};
