import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("services", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      service_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      service_description: {
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("services");
  },
};

export default migration;
