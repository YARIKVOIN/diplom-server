'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BoilerParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      memory: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      proccesor: {
        type: Sequelize.STRING,
      },
      display: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING(20000),
      },
      images: {
        type: Sequelize.STRING(20000),
      },
      in_stock: {
        type: Sequelize.INTEGER,
      },
      bestseller: {
        type: Sequelize.BOOLEAN,
      },
      new: {
        type: Sequelize.BOOLEAN,
      },
      popularity: {
        type: Sequelize.INTEGER,
      },
      camera: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      vendor_code: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BoilerParts');
  },
};
