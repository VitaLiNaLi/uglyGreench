"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Icons",
      [
        {
          src: "img/assets/год-дракона.png",
          alt: "год-дракона",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          src: "img/assets/конфета.png",
          alt: "конфета",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          src: "img/assets/новогодняя-елка.png",
          alt: "новогодняя-елка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Icons", null, {});
  },
};
