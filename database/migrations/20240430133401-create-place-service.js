"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("place_service", {
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
          key: "id",
        },
      },
      service_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("place_service");
  },
};
