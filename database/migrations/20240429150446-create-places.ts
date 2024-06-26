import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("places", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      place_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      place_short_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      place_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      place_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "place_types",
          key: "id",
        },
      },
      surface: {
        type: Sequelize.FLOAT,
      },
      attention_surface: {
        type: Sequelize.FLOAT,
      },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("places");
  },
};

export default migration;
