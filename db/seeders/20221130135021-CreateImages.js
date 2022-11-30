/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        link: './images/socks/images/1.png',
      },
      {
        link: './images/socks/images/2.png',
      },
      {
        link: './images/socks/images/3.png',
      },
      {
        link: './images/socks/images/4.png',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
