"use strict";
const { Category, SubCategory } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Создаем категории
    const Mammals = await Category.create({ name: "Млекопитающие " });
    const Fish = await Category.create({ name: "Рыбы" });
    const Skullless = await Category.create({ name: "Бесчерепные " });
    const Shellfish = await Category.create({ name: "Моллюски  " });
    const Arthropods = await Category.create({ name: "Членистоногие   " });

    // Создаем подкатегории и задаем связи с категориями
    await SubCategory.bulkCreate([
      {
        name: "Киты",
        img: "/img/whales-transformed.png",
        categoryId: Mammals.id,
      },
      {
        name: "Дельфины",
        img: "/img/laptop.png",
        categoryId: Mammals.id,
      },
      {
        name: "Тюлени ",
        img: "/img/iphone.png",
        categoryId: Mammals.id,
      },
      {
        name: "Окуневые",
        img: "/img/iphone.png",
        categoryId: Fish.id,
      },
      {
        name: "Лососевые",
        img: "/img/iphone.png",
        categoryId: Fish.id,
      },
      {
        name: "Скорпеновые ",
        img: "/img/iphone.png",
        categoryId: Fish.id,
      },
      {
        name: "Медузы",
        img: "/img/iphone.png",
        categoryId: Skullless.id,
      },
      {
        name: "Осьминоги",
        img: "/img/iphone.png",
        categoryId: Skullless.id,
      },
      {
        name: "Кораллы ",
        img: "/img/iphone.png",
        categoryId: Skullless.id,
      },
      {
        name: "Улитки",
        img: "/img/iphone.png",
        categoryId: Shellfish.id,
      },
      {
        name: "Мидии",
        img: "/img/iphone.png",
        categoryId: Shellfish.id,
      },
      {
        name: "Каракатицы ",
        img: "/img/iphone.png",
        categoryId: Shellfish.id,
      },
      {
        name: "Крабы",
        img: "/img/iphone.png",
        categoryId: Arthropods.id,
      },
      {
        name: "креветки",
        img: "/img/iphone.png",
        categoryId: Arthropods.id,
      },
      {
        name: "Раки",
        img: "/img/iphone.png",
        categoryId: Arthropods.id,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Category.destroy({ truncate: { cascade: true } });
  },
};
