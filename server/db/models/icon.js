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
      src: {
        defaultValue: "server/assets/год-дракона.png",
        type: DataTypes.STRING,
      },
      alt: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Icon",
    }
  );
  return Icon;
};
