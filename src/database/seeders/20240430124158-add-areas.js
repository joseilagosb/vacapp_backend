"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("areas", [
      {
        id: "1",
        area_name: "Centro Oriente",
      },
      {
        id: "2",
        area_name: "Bellavista",
      },
      {
        id: "3",
        area_name: "Centro Norte",
      },
      {
        id: "4",
        area_name: "Pilauco/Los Notros",
      },
      {
        id: "5",
        area_name: "Chuyaca/Cañal Bajo",
      },
      {
        id: "6",
        area_name: "Ovejería",
      },
      {
        id: "7",
        area_name: "Quinto Centenario",
      },
      {
        id: "8",
        area_name: "Rahue Alto",
      },
      {
        id: "9",
        area_name: "Rahue Bajo",
      },
      {
        id: "10",
        area_name: "Francke",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("areas", null, {});
  },
};
