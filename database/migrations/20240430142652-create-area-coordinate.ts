import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
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

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("area_coordinate");
  },
};

export default migration;
