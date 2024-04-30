"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("place_working_days", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
          key: "id",
        },
      },
      day_of_week: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      opening_time: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      closing_time: {
        allowNull: false,
        type: Sequelize.TIME,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("place_working_days");
  },
};
