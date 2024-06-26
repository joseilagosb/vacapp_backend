import { Seed } from "../../ts/types/database.types";

const seed: Seed = {
  up: async (queryInterface, _) => {
    await queryInterface.bulkInsert(
      "place_coordinate",
      [
        { place_id: "1", coordinate_id: "1" },
        { place_id: "1", coordinate_id: "2" },
        { place_id: "1", coordinate_id: "3" },
        { place_id: "1", coordinate_id: "4" },
        { place_id: "2", coordinate_id: "5" },
        { place_id: "2", coordinate_id: "6" },
        { place_id: "2", coordinate_id: "7" },
        { place_id: "2", coordinate_id: "8" },
        { place_id: "3", coordinate_id: "9" },
        { place_id: "3", coordinate_id: "10" },
        { place_id: "3", coordinate_id: "11" },
        { place_id: "3", coordinate_id: "12" },
        { place_id: "4", coordinate_id: "13" },
        { place_id: "4", coordinate_id: "14" },
        { place_id: "4", coordinate_id: "15" },
        { place_id: "4", coordinate_id: "16" },
        { place_id: "5", coordinate_id: "17" },
        { place_id: "5", coordinate_id: "18" },
        { place_id: "5", coordinate_id: "19" },
        { place_id: "5", coordinate_id: "20" },
        { place_id: "6", coordinate_id: "21" },
        { place_id: "6", coordinate_id: "22" },
        { place_id: "6", coordinate_id: "23" },
        { place_id: "6", coordinate_id: "24" },
        { place_id: "7", coordinate_id: "25" },
        { place_id: "7", coordinate_id: "26" },
        { place_id: "7", coordinate_id: "27" },
        { place_id: "7", coordinate_id: "28" },
        { place_id: "8", coordinate_id: "29" },
        { place_id: "8", coordinate_id: "30" },
        { place_id: "8", coordinate_id: "31" },
        { place_id: "8", coordinate_id: "32" },
        { place_id: "9", coordinate_id: "33" },
        { place_id: "9", coordinate_id: "34" },
        { place_id: "9", coordinate_id: "35" },
        { place_id: "9", coordinate_id: "36" },
        { place_id: "10", coordinate_id: "37" },
        { place_id: "10", coordinate_id: "38" },
        { place_id: "10", coordinate_id: "39" },
        { place_id: "10", coordinate_id: "40" },
        { place_id: "11", coordinate_id: "41" },
        { place_id: "11", coordinate_id: "42" },
        { place_id: "11", coordinate_id: "43" },
        { place_id: "11", coordinate_id: "44" },
        { place_id: "12", coordinate_id: "45" },
        { place_id: "12", coordinate_id: "46" },
        { place_id: "12", coordinate_id: "47" },
        { place_id: "12", coordinate_id: "48" },
        { place_id: "13", coordinate_id: "49" },
        { place_id: "13", coordinate_id: "50" },
        { place_id: "13", coordinate_id: "51" },
        { place_id: "13", coordinate_id: "52" },
        { place_id: "14", coordinate_id: "53" },
        { place_id: "14", coordinate_id: "54" },
        { place_id: "14", coordinate_id: "55" },
        { place_id: "14", coordinate_id: "56" },
        { place_id: "15", coordinate_id: "57" },
        { place_id: "15", coordinate_id: "58" },
        { place_id: "15", coordinate_id: "59" },
        { place_id: "15", coordinate_id: "60" },
        { place_id: "16", coordinate_id: "61" },
        { place_id: "16", coordinate_id: "62" },
        { place_id: "16", coordinate_id: "63" },
        { place_id: "16", coordinate_id: "64" },
        { place_id: "16", coordinate_id: "65" },
        { place_id: "17", coordinate_id: "66" },
        { place_id: "17", coordinate_id: "67" },
        { place_id: "17", coordinate_id: "68" },
        { place_id: "17", coordinate_id: "69" },
        { place_id: "18", coordinate_id: "70" },
        { place_id: "18", coordinate_id: "71" },
        { place_id: "18", coordinate_id: "72" },
        { place_id: "18", coordinate_id: "73" },
        { place_id: "19", coordinate_id: "74" },
        { place_id: "19", coordinate_id: "75" },
        { place_id: "19", coordinate_id: "76" },
        { place_id: "19", coordinate_id: "77" },
        { place_id: "20", coordinate_id: "78" },
        { place_id: "20", coordinate_id: "79" },
        { place_id: "20", coordinate_id: "80" },
        { place_id: "20", coordinate_id: "81" },
        { place_id: "21", coordinate_id: "82" },
        { place_id: "21", coordinate_id: "83" },
        { place_id: "21", coordinate_id: "84" },
        { place_id: "21", coordinate_id: "85" },
        { place_id: "22", coordinate_id: "86" },
        { place_id: "22", coordinate_id: "87" },
        { place_id: "22", coordinate_id: "88" },
        { place_id: "22", coordinate_id: "89" },
        { place_id: "23", coordinate_id: "90" },
        { place_id: "23", coordinate_id: "91" },
        { place_id: "23", coordinate_id: "92" },
        { place_id: "23", coordinate_id: "93" },
        { place_id: "24", coordinate_id: "94" },
        { place_id: "24", coordinate_id: "95" },
        { place_id: "24", coordinate_id: "96" },
        { place_id: "24", coordinate_id: "97" },
        { place_id: "25", coordinate_id: "98" },
        { place_id: "25", coordinate_id: "99" },
        { place_id: "25", coordinate_id: "100" },
        { place_id: "25", coordinate_id: "101" },
        { place_id: "26", coordinate_id: "102" },
        { place_id: "26", coordinate_id: "103" },
        { place_id: "26", coordinate_id: "104" },
        { place_id: "26", coordinate_id: "105" },
        { place_id: "27", coordinate_id: "106" },
        { place_id: "27", coordinate_id: "107" },
        { place_id: "27", coordinate_id: "108" },
        { place_id: "27", coordinate_id: "109" },
        { place_id: "28", coordinate_id: "110" },
        { place_id: "28", coordinate_id: "111" },
        { place_id: "28", coordinate_id: "112" },
        { place_id: "28", coordinate_id: "113" },
        { place_id: "29", coordinate_id: "114" },
        { place_id: "29", coordinate_id: "115" },
        { place_id: "29", coordinate_id: "116" },
        { place_id: "29", coordinate_id: "117" },
        { place_id: "30", coordinate_id: "118" },
        { place_id: "30", coordinate_id: "119" },
        { place_id: "30", coordinate_id: "120" },
        { place_id: "30", coordinate_id: "121" },
        { place_id: "31", coordinate_id: "122" },
        { place_id: "31", coordinate_id: "123" },
        { place_id: "31", coordinate_id: "124" },
        { place_id: "31", coordinate_id: "125" },
        { place_id: "32", coordinate_id: "126" },
        { place_id: "32", coordinate_id: "127" },
        { place_id: "32", coordinate_id: "128" },
        { place_id: "32", coordinate_id: "129" },
        { place_id: "33", coordinate_id: "130" },
        { place_id: "33", coordinate_id: "131" },
        { place_id: "33", coordinate_id: "132" },
        { place_id: "33", coordinate_id: "133" },
        { place_id: "34", coordinate_id: "134" },
        { place_id: "34", coordinate_id: "135" },
        { place_id: "34", coordinate_id: "136" },
        { place_id: "34", coordinate_id: "137" },
        { place_id: "35", coordinate_id: "138" },
        { place_id: "35", coordinate_id: "139" },
        { place_id: "35", coordinate_id: "140" },
        { place_id: "35", coordinate_id: "141" },
        { place_id: "36", coordinate_id: "142" },
        { place_id: "36", coordinate_id: "143" },
        { place_id: "36", coordinate_id: "144" },
        { place_id: "36", coordinate_id: "145" },
        { place_id: "37", coordinate_id: "146" },
        { place_id: "37", coordinate_id: "147" },
        { place_id: "37", coordinate_id: "148" },
        { place_id: "37", coordinate_id: "149" },
        { place_id: "38", coordinate_id: "150" },
        { place_id: "38", coordinate_id: "151" },
        { place_id: "38", coordinate_id: "152" },
        { place_id: "38", coordinate_id: "153" },
        { place_id: "39", coordinate_id: "154" },
        { place_id: "39", coordinate_id: "155" },
        { place_id: "39", coordinate_id: "156" },
        { place_id: "39", coordinate_id: "157" },
        { place_id: "40", coordinate_id: "158" },
        { place_id: "40", coordinate_id: "159" },
        { place_id: "40", coordinate_id: "160" },
        { place_id: "40", coordinate_id: "161" },
        { place_id: "41", coordinate_id: "162" },
        { place_id: "41", coordinate_id: "163" },
        { place_id: "41", coordinate_id: "164" },
        { place_id: "41", coordinate_id: "165" },
        { place_id: "42", coordinate_id: "166" },
        { place_id: "42", coordinate_id: "167" },
        { place_id: "42", coordinate_id: "168" },
        { place_id: "42", coordinate_id: "169" },
        { place_id: "43", coordinate_id: "170" },
        { place_id: "43", coordinate_id: "171" },
        { place_id: "43", coordinate_id: "172" },
        { place_id: "43", coordinate_id: "173" },
        { place_id: "44", coordinate_id: "174" },
        { place_id: "44", coordinate_id: "175" },
        { place_id: "44", coordinate_id: "176" },
        { place_id: "44", coordinate_id: "177" },
        { place_id: "45", coordinate_id: "178" },
        { place_id: "45", coordinate_id: "179" },
        { place_id: "45", coordinate_id: "180" },
        { place_id: "45", coordinate_id: "181" },
        { place_id: "46", coordinate_id: "182" },
        { place_id: "46", coordinate_id: "183" },
        { place_id: "46", coordinate_id: "184" },
        { place_id: "46", coordinate_id: "185" },
        { place_id: "47", coordinate_id: "186" },
        { place_id: "47", coordinate_id: "187" },
        { place_id: "47", coordinate_id: "188" },
        { place_id: "47", coordinate_id: "189" },
        { place_id: "48", coordinate_id: "190" },
        { place_id: "48", coordinate_id: "191" },
        { place_id: "48", coordinate_id: "192" },
        { place_id: "48", coordinate_id: "193" },
        { place_id: "49", coordinate_id: "194" },
        { place_id: "49", coordinate_id: "195" },
        { place_id: "49", coordinate_id: "196" },
        { place_id: "49", coordinate_id: "197" },
        { place_id: "50", coordinate_id: "198" },
        { place_id: "50", coordinate_id: "199" },
        { place_id: "50", coordinate_id: "200" },
        { place_id: "50", coordinate_id: "201" },
        { place_id: "51", coordinate_id: "202" },
        { place_id: "51", coordinate_id: "203" },
        { place_id: "51", coordinate_id: "204" },
        { place_id: "51", coordinate_id: "205" },
        { place_id: "51", coordinate_id: "206" },
        { place_id: "52", coordinate_id: "207" },
        { place_id: "52", coordinate_id: "208" },
        { place_id: "52", coordinate_id: "209" },
        { place_id: "52", coordinate_id: "210" },
        { place_id: "53", coordinate_id: "211" },
        { place_id: "53", coordinate_id: "212" },
        { place_id: "53", coordinate_id: "213" },
        { place_id: "53", coordinate_id: "214" },
        { place_id: "53", coordinate_id: "215" },
      ],
      {}
    );
  },

  down: async (queryInterface, _) => {
    await queryInterface.bulkDelete("place_coordinate", null, {});
  },
};

export default seed;
