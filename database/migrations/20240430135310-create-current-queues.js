"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("current_queues", {
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
      queue_day_of_week: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_hour: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      people_no: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("current_queues");
  },
};
