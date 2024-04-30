"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "area_coordinate",
      [
        {
          area_id: "1",
          coordinate_id: "269",
        },
        {
          area_id: "1",
          coordinate_id: "270",
        },
        {
          area_id: "1",
          coordinate_id: "271",
        },
        {
          area_id: "1",
          coordinate_id: "272",
        },
        {
          area_id: "1",
          coordinate_id: "273",
        },
        {
          area_id: "2",
          coordinate_id: "274",
        },
        {
          area_id: "2",
          coordinate_id: "275",
        },
        {
          area_id: "2",
          coordinate_id: "276",
        },
        {
          area_id: "2",
          coordinate_id: "277",
        },
        {
          area_id: "2",
          coordinate_id: "278",
        },
        {
          area_id: "2",
          coordinate_id: "279",
        },
        {
          area_id: "3",
          coordinate_id: "280",
        },
        {
          area_id: "3",
          coordinate_id: "281",
        },
        {
          area_id: "3",
          coordinate_id: "282",
        },
        {
          area_id: "3",
          coordinate_id: "283",
        },
        {
          area_id: "3",
          coordinate_id: "284",
        },
        {
          area_id: "3",
          coordinate_id: "285",
        },
        {
          area_id: "3",
          coordinate_id: "286",
        },
        {
          area_id: "3",
          coordinate_id: "287",
        },
        {
          area_id: "3",
          coordinate_id: "288",
        },
        {
          area_id: "4",
          coordinate_id: "289",
        },
        {
          area_id: "4",
          coordinate_id: "290",
        },
        {
          area_id: "4",
          coordinate_id: "291",
        },
        {
          area_id: "4",
          coordinate_id: "292",
        },
        {
          area_id: "4",
          coordinate_id: "293",
        },
        {
          area_id: "4",
          coordinate_id: "294",
        },
        {
          area_id: "4",
          coordinate_id: "295",
        },
        {
          area_id: "4",
          coordinate_id: "296",
        },
        {
          area_id: "4",
          coordinate_id: "297",
        },
        {
          area_id: "5",
          coordinate_id: "298",
        },
        {
          area_id: "5",
          coordinate_id: "299",
        },
        {
          area_id: "5",
          coordinate_id: "300",
        },
        {
          area_id: "5",
          coordinate_id: "301",
        },
        {
          area_id: "5",
          coordinate_id: "302",
        },
        {
          area_id: "5",
          coordinate_id: "303",
        },
        {
          area_id: "5",
          coordinate_id: "304",
        },
        {
          area_id: "5",
          coordinate_id: "305",
        },
        {
          area_id: "5",
          coordinate_id: "306",
        },
        {
          area_id: "5",
          coordinate_id: "307",
        },
        {
          area_id: "6",
          coordinate_id: "308",
        },
        {
          area_id: "6",
          coordinate_id: "309",
        },
        {
          area_id: "6",
          coordinate_id: "310",
        },
        {
          area_id: "6",
          coordinate_id: "311",
        },
        {
          area_id: "6",
          coordinate_id: "312",
        },
        {
          area_id: "6",
          coordinate_id: "313",
        },
        {
          area_id: "6",
          coordinate_id: "314",
        },
        {
          area_id: "6",
          coordinate_id: "315",
        },
        {
          area_id: "7",
          coordinate_id: "316",
        },
        {
          area_id: "7",
          coordinate_id: "317",
        },
        {
          area_id: "7",
          coordinate_id: "318",
        },
        {
          area_id: "7",
          coordinate_id: "319",
        },
        {
          area_id: "7",
          coordinate_id: "320",
        },
        {
          area_id: "7",
          coordinate_id: "321",
        },
        {
          area_id: "7",
          coordinate_id: "322",
        },
        {
          area_id: "8",
          coordinate_id: "323",
        },
        {
          area_id: "8",
          coordinate_id: "324",
        },
        {
          area_id: "8",
          coordinate_id: "325",
        },
        {
          area_id: "8",
          coordinate_id: "326",
        },
        {
          area_id: "8",
          coordinate_id: "327",
        },
        {
          area_id: "8",
          coordinate_id: "328",
        },
        {
          area_id: "8",
          coordinate_id: "329",
        },
        {
          area_id: "8",
          coordinate_id: "330",
        },
        {
          area_id: "9",
          coordinate_id: "331",
        },
        {
          area_id: "9",
          coordinate_id: "332",
        },
        {
          area_id: "9",
          coordinate_id: "333",
        },
        {
          area_id: "9",
          coordinate_id: "334",
        },
        {
          area_id: "9",
          coordinate_id: "335",
        },
        {
          area_id: "9",
          coordinate_id: "336",
        },
        {
          area_id: "9",
          coordinate_id: "337",
        },
        {
          area_id: "9",
          coordinate_id: "338",
        },
        {
          area_id: "9",
          coordinate_id: "339",
        },
        {
          area_id: "9",
          coordinate_id: "340",
        },
        {
          area_id: "10",
          coordinate_id: "341",
        },
        {
          area_id: "10",
          coordinate_id: "342",
        },
        {
          area_id: "10",
          coordinate_id: "343",
        },
        {
          area_id: "10",
          coordinate_id: "344",
        },
        {
          area_id: "10",
          coordinate_id: "345",
        },
        {
          area_id: "10",
          coordinate_id: "346",
        },
        {
          area_id: "10",
          coordinate_id: "347",
        },
        {
          area_id: "10",
          coordinate_id: "348",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("area_coordinate", null, {});
  },
};
