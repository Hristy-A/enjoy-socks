const path = require('path');
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const parametersPath = path.resolve('public', 'images', 'socks');
    const folders = fs.readdirSync(parametersPath);

    await Promise.all(folders.map((folder) => {
      const files = fs.readdirSync(path.join(parametersPath, folder));
      return queryInterface.bulkInsert(
        folder[0].toUpperCase().concat(folder.slice(1)),
        files.map((file) => ({ link: `./socks/${folder}/${file}` })),
        {},
      );
    }));
  },

  async down(queryInterface, Sequelize) {
    const parametersPath = path.resolve('public', 'images', 'socks');
    const folders = fs.readdirSync(parametersPath);

    await Promise.all(folders.map((folder) => queryInterface.bulkDelete(
      folder[0].toUpperCase().concat(folder.slice(1)),
      {
        truncate: true,
        restartIdentity: true,
      },
      {},
    )));
  },
};
