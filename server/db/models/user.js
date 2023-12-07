"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Friend }) {
      this.hasMany(Friend, { foreignKey: "userId1" });
      this.belongsTo(Icon,{foreignKey:"iconId"})
      this.hasMany(Friend, { foreignKey: "userId2" });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      surname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      iconId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Icons",
          key: "id",
        },
        onDelete: "cascade",
      },
      admin: {
        defaultValue:false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
