"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("area_coordinate", {
      area_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "areas",
          key: "id",
        },
      },
      coordinate_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "coordinates",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("area_coordinate");
  },
};
