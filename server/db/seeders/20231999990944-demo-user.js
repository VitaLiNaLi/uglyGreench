'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Users', [
      {
        name: 'Alice',
        surname: 'White',
        email: '1@mail.com',
        password: '123',
        description:'new life',
        iconId: 1,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'Ozzy',
          surname: 'Black',
          email: '2@mail.com',
          password: '321',
          description:'new iphone',
          iconId: 2,
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            name: 'Mike',
            surname: 'Green',
            email: '3@mail.com',
            password: '345',
            description:'new job',
            iconId: 2,
            admin: true,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
              name: 'Frey',
              surname: 'Red',
              email: '4@mail.com',
              password: '987',
              description:'new pen',
              iconId: 3,
              admin: true,
              createdAt: new Date(),
              updatedAt: new Date()
              }
     ], {});

  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
  
  }
};
