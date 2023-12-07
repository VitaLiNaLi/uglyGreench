'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Icons', [            
      {
      img: 'server/assets/год-дракона.png',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        img: 'server/assets/конфета.png',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          img: 'server/assets/новогодняя-елка.png',
          createdAt: new Date(),
          updatedAt: new Date()
          }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Icons', null, {});
    
  }
};
