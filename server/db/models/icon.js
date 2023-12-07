"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Icon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasMany(User, { foreignKey: "iconId" });
    }
  }
  Icon.init(
    {
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Icon",
    }
  );
  return Icon;
};
