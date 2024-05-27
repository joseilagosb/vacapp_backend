import { Migration } from "../../ts/types/database.types";

const migration: Migration = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("place_indicator", {
      place_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
          key: "id",
        },
      },
      indicator_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "indicators",
          key: "id",
        },
      },
      indicator_value: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      opinion_no: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable("place_indicator");
  },
};

export default migration;
