/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      {
        link: './images/socks/pattern/1.png',
      },
      {
        link: './images/socks/pattern/2.png',
      },
      {
        link: './images/socks/pattern/3.png',
      },
      {
        link: './images/socks/pattern/4.png',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
