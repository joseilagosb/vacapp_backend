"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "place_service",
      [
        {
          place_id: "1",
          service_id: "2",
        },
        {
          place_id: "1",
          service_id: "3",
        },
        {
          place_id: "1",
          service_id: "4",
        },
        {
          place_id: "1",
          service_id: "6",
        },
        {
          place_id: "2",
          service_id: "2",
        },
        {
          place_id: "2",
          service_id: "3",
        },
        {
          place_id: "2",
          service_id: "9",
        },
        {
          place_id: "3",
          service_id: "3",
        },
        {
          place_id: "3",
          service_id: "6",
        },
        {
          place_id: "4",
          service_id: "2",
        },
        {
          place_id: "4",
          service_id: "3",
        },
        {
          place_id: "5",
          service_id: "2",
        },
        {
          place_id: "5",
          service_id: "3",
        },
        {
          place_id: "5",
          service_id: "4",
        },
        {
          place_id: "5",
          service_id: "5",
        },
        {
          place_id: "5",
          service_id: "6",
        },
        {
          place_id: "6",
          service_id: "2",
        },
        {
          place_id: "6",
          service_id: "3",
        },
        {
          place_id: "6",
          service_id: "4",
        },
        {
          place_id: "6",
          service_id: "5",
        },
        {
          place_id: "6",
          service_id: "6",
        },
        {
          place_id: "7",
          service_id: "3",
        },
        {
          place_id: "7",
          service_id: "4",
        },
        {
          place_id: "7",
          service_id: "7",
        },
        {
          place_id: "8",
          service_id: "2",
        },
        {
          place_id: "8",
          service_id: "4",
        },
        {
          place_id: "9",
          service_id: "2",
        },
        {
          place_id: "9",
          service_id: "3",
        },
        {
          place_id: "9",
          service_id: "4",
        },
        {
          place_id: "9",
          service_id: "6",
        },
        {
          place_id: "10",
          service_id: "7",
        },
        {
          place_id: "10",
          service_id: "9",
        },
        {
          place_id: "11",
          service_id: "7",
        },
        {
          place_id: "12",
          service_id: "7",
        },
        {
          place_id: "13",
          service_id: "3",
        },
        {
          place_id: "13",
          service_id: "7",
        },
        {
          place_id: "14",
          service_id: "2",
        },
        {
          place_id: "14",
          service_id: "3",
        },
        {
          place_id: "14",
          service_id: "4",
        },
        {
          place_id: "14",
          service_id: "6",
        },
        {
          place_id: "15",
          service_id: "3",
        },
        {
          place_id: "15",
          service_id: "6",
        },
        {
          place_id: "16",
          service_id: "2",
        },
        {
          place_id: "16",
          service_id: "3",
        },
        {
          place_id: "16",
          service_id: "4",
        },
        {
          place_id: "16",
          service_id: "6",
        },
        {
          place_id: "17",
          service_id: "1",
        },
        {
          place_id: "17",
          service_id: "2",
        },
        {
          place_id: "18",
          service_id: "2",
        },
        {
          place_id: "18",
          service_id: "14",
        },
        {
          place_id: "19",
          service_id: "2",
        },
        {
          place_id: "19",
          service_id: "12",
        },
        {
          place_id: "20",
          service_id: "2",
        },
        {
          place_id: "20",
          service_id: "11",
        },
        {
          place_id: "21",
          service_id: "1",
        },
        {
          place_id: "22",
          service_id: "3",
        },
        {
          place_id: "22",
          service_id: "6",
        },
        {
          place_id: "23",
          service_id: "2",
        },
        {
          place_id: "23",
          service_id: "9",
        },
        {
          place_id: "24",
          service_id: "2",
        },
        {
          place_id: "24",
          service_id: "3",
        },
        {
          place_id: "24",
          service_id: "4",
        },
        {
          place_id: "24",
          service_id: "6",
        },
        {
          place_id: "25",
          service_id: "2",
        },
        {
          place_id: "25",
          service_id: "13",
        },
        {
          place_id: "26",
          service_id: "2",
        },
        {
          place_id: "26",
          service_id: "9",
        },
        {
          place_id: "27",
          service_id: "2",
        },
        {
          place_id: "27",
          service_id: "3",
        },
        {
          place_id: "28",
          service_id: "10",
        },
        {
          place_id: "29",
          service_id: "10",
        },
        {
          place_id: "30",
          service_id: "10",
        },
        {
          place_id: "31",
          service_id: "2",
        },
        {
          place_id: "31",
          service_id: "5",
        },
        {
          place_id: "32",
          service_id: "2",
        },
        {
          place_id: "32",
          service_id: "3",
        },
        {
          place_id: "32",
          service_id: "4",
        },
        {
          place_id: "32",
          service_id: "6",
        },
        {
          place_id: "33",
          service_id: "2",
        },
        {
          place_id: "33",
          service_id: "3",
        },
        {
          place_id: "33",
          service_id: "4",
        },
        {
          place_id: "34",
          service_id: "2",
        },
        {
          place_id: "34",
          service_id: "3",
        },
        {
          place_id: "34",
          service_id: "4",
        },
        {
          place_id: "35",
          service_id: "3",
        },
        {
          place_id: "35",
          service_id: "6",
        },
        {
          place_id: "36",
          service_id: "3",
        },
        {
          place_id: "36",
          service_id: "6",
        },
        {
          place_id: "37",
          service_id: "3",
        },
        {
          place_id: "37",
          service_id: "6",
        },
        {
          place_id: "38",
          service_id: "3",
        },
        {
          place_id: "38",
          service_id: "6",
        },
        {
          place_id: "39",
          service_id: "3",
        },
        {
          place_id: "39",
          service_id: "6",
        },
        {
          place_id: "40",
          service_id: "3",
        },
        {
          place_id: "40",
          service_id: "6",
        },
        {
          place_id: "41",
          service_id: "1",
        },
        {
          place_id: "42",
          service_id: "2",
        },
        {
          place_id: "42",
          service_id: "3",
        },
        {
          place_id: "42",
          service_id: "4",
        },
        {
          place_id: "42",
          service_id: "5",
        },
        {
          place_id: "42",
          service_id: "6",
        },
        {
          place_id: "43",
          service_id: "2",
        },
        {
          place_id: "43",
          service_id: "3",
        },
        {
          place_id: "43",
          service_id: "4",
        },
        {
          place_id: "44",
          service_id: "2",
        },
        {
          place_id: "44",
          service_id: "3",
        },
        {
          place_id: "44",
          service_id: "4",
        },
        {
          place_id: "44",
          service_id: "6",
        },
        {
          place_id: "45",
          service_id: "3",
        },
        {
          place_id: "45",
          service_id: "4",
        },
        {
          place_id: "45",
          service_id: "6",
        },
        {
          place_id: "46",
          service_id: "8",
        },
        {
          place_id: "47",
          service_id: "8",
        },
        {
          place_id: "48",
          service_id: "8",
        },
        {
          place_id: "49",
          service_id: "8",
        },
        {
          place_id: "50",
          service_id: "8",
        },
        {
          place_id: "51",
          service_id: "8",
        },
        {
          place_id: "52",
          service_id: "2",
        },
        {
          place_id: "52",
          service_id: "11",
        },
        {
          place_id: "53",
          service_id: "8",
        },
        {
          place_id: "53",
          service_id: "9",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("place_service", null, {});
  },
};