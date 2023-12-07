'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.hasMany(User, { foreignKey: "userId2" });
      this.hasMany(User, { foreignKey: "userId1" });
    }
  }
  Friend.init({
    userId1: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "cascade",
    },
    userId2: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};