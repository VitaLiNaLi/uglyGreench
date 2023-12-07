"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Profile, SubCategory }) {
      this.belongsTo(Profile, { foreignKey: "profileId" });
      this.belongsTo(SubCategory, { foreignKey: "subCategoryId" });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      img: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      rating: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      reviews: {
        type: DataTypes.TEXT,
      },
      profileId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Profiles",
          key: "id",
        },
        onDelete: "cascade",
      },
      subCategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "SubCategories",
          key: "id",
        },
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
