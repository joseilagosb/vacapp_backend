"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("coordinates", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 6),
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 6),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("coordinates");
  },
};
