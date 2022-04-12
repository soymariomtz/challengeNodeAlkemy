module.exports = (sequelize, DataTypes) => {
  let alias = "Usuarios";
  let cols = {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  };
  let config = {
    timestamps: false,
  };
  const Usuarios = sequelize.define(alias, cols, config);
  return Usuarios;
};
