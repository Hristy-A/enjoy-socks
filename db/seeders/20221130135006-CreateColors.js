/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      {
        link: './images/socks/color/blue.png',
      },
      {
        link: './images/socks/color/green.png',
      },
      {
        link: './images/socks/color/pink.png',
      },
      {
        link: './images/socks/color/purple.png',
      },
      {
        link: './images/socks/color/white.png',
      },
      {
        link: './images/socks/color/yellow.png',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
