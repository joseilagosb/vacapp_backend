"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("indicators", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      indicator_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      indicator_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      indicator_description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("indicators");
  },
};
