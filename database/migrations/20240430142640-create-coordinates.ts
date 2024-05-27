import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
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

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("coordinates");
  },
};

export default migration;
