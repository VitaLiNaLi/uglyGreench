"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      img: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      rating: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      reviews: {
        type: Sequelize.TEXT,
      },
      profileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Profiles",
          key: "id",
        },
        onDelete: "cascade",
      },
      subCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "SubCategories",
          key: "id",
        },
        onDelete: "cascade",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
