"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, { foreignKey: "donorId" });
      this.belongsTo(User, { foreignKey: "recipientId" });
    }
  }
  Friend.init(
    {
      recipientId: {
      type: DataTypes.INTEGER,
      references: {
      model: "Users",
      key: "id",
      },
      onDelete: "cascade",
    },
    donorId: {
      type: DataTypes.INTEGER,
      references: {
      model: "Users",
      key: "id",
      },
      onDelete: "cascade",
    },
    },
    {
      sequelize,
      modelName: "Friend",
    }
  );
  return Friend;
};
