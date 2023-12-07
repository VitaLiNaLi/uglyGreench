"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Category }) {
      this.hasMany(Product, { foreignKey: "subCategoryId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
    }
  }
  SubCategory.init(
    {
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "cascade",
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },

    {
      sequelize,
      modelName: "SubCategory",
    }
  );
  return SubCategory;
};
