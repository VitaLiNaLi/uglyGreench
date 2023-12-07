"use strict";
const { Model } = require("sequelize");
const product = require("./product");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.hasMany(Product, { foreignKey: "profileId" });
    }
  }
  Profile.init(
    {
      phoneNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      money: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      premium: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      salesman: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      userId: {
        allowNull: false,
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
      modelName: "Profile",
    }
  );
  return Profile;
};
