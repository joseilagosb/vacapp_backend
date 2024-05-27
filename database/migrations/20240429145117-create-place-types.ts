import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("place_types", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      place_type_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("place_types");
  },
};

export default migration;
