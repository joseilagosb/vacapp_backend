import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("place_coordinate", {
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
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
    await queryInterface.dropTable("place_coordinate");
  },
};

export default migration;
