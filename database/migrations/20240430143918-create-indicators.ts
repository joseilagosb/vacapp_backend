import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
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

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("indicators");
  },
};

export default migration;
