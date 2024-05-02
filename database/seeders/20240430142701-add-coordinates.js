"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "coordinates",
      [
        {
          id: "1",
          latitude: "-40.589958",
          longitude: "-73.104255",
        },
        {
          id: "2",
          latitude: "-40.589090",
          longitude: "-73.102887",
        },
        {
          id: "3",
          latitude: "-40.588451",
          longitude: "-73.103654",
        },
        {
          id: "4",
          latitude: "-40.589371",
          longitude: "-73.105027",
        },
        {
          id: "5",
          latitude: "-40.587713",
          longitude: "-73.103316",
        },
        {
          id: "6",
          latitude: "-40.588532",
          longitude: "-73.104282",
        },
        {
          id: "7",
          latitude: "-40.587738",
          longitude: "-73.105993",
        },
        {
          id: "8",
          latitude: "-40.586646",
          longitude: "-73.104748",
        },
        {
          id: "9",
          latitude: "-40.586722",
          longitude: "-73.122973",
        },
        {
          id: "10",
          latitude: "-40.586660",
          longitude: "-73.122816",
        },
        {
          id: "11",
          latitude: "-40.586816",
          longitude: "-73.122713",
        },
        {
          id: "12",
          latitude: "-40.586876",
          longitude: "-73.122870",
        },
        {
          id: "13",
          latitude: "-40.581130",
          longitude: "-73.116766",
        },
        {
          id: "14",
          latitude: "-40.580760",
          longitude: "-73.117297",
        },
        {
          id: "15",
          latitude: "-40.579704",
          longitude: "-73.116090",
        },
        {
          id: "16",
          latitude: "-40.580063",
          longitude: "-73.115506",
        },
        {
          id: "17",
          latitude: "-40.581365",
          longitude: "-73.117034",
        },
        {
          id: "18",
          latitude: "-40.581691",
          longitude: "-73.117367",
        },
        {
          id: "19",
          latitude: "-40.581299",
          longitude: "-73.117946",
        },
        {
          id: "20",
          latitude: "-40.580994",
          longitude: "-73.117597",
        },
        {
          id: "21",
          latitude: "-40.576504",
          longitude: "-73.111467",
        },
        {
          id: "22",
          latitude: "-40.576624",
          longitude: "-73.110746",
        },
        {
          id: "23",
          latitude: "-40.577366",
          longitude: "-73.110942",
        },
        {
          id: "24",
          latitude: "-40.577280",
          longitude: "-73.111639",
        },
        {
          id: "25",
          latitude: "-40.577130",
          longitude: "-73.108382",
        },
        {
          id: "26",
          latitude: "-40.577196",
          longitude: "-73.108175",
        },
        {
          id: "27",
          latitude: "-40.577408",
          longitude: "-73.108255",
        },
        {
          id: "28",
          latitude: "-40.577354",
          longitude: "-73.108449",
        },
        {
          id: "29",
          latitude: "-40.575691",
          longitude: "-73.110952",
        },
        {
          id: "30",
          latitude: "-40.575761",
          longitude: "-73.110611",
        },
        {
          id: "31",
          latitude: "-40.576190",
          longitude: "-73.110776",
        },
        {
          id: "32",
          latitude: "-40.576111",
          longitude: "-73.111116",
        },
        {
          id: "33",
          latitude: "-40.572415",
          longitude: "-73.127319",
        },
        {
          id: "34",
          latitude: "-40.572501",
          longitude: "-73.126360",
        },
        {
          id: "35",
          latitude: "-40.573018",
          longitude: "-73.126428",
        },
        {
          id: "36",
          latitude: "-40.572926",
          longitude: "-73.127441",
        },
        {
          id: "37",
          latitude: "-40.583240",
          longitude: "-73.109705",
        },
        {
          id: "38",
          latitude: "-40.583336",
          longitude: "-73.109574",
        },
        {
          id: "39",
          latitude: "-40.583465",
          longitude: "-73.109709",
        },
        {
          id: "40",
          latitude: "-40.583358",
          longitude: "-73.109862",
        },
        {
          id: "41",
          latitude: "-40.581222",
          longitude: "-73.129214",
        },
        {
          id: "42",
          latitude: "-40.581221",
          longitude: "-73.129103",
        },
        {
          id: "43",
          latitude: "-40.581265",
          longitude: "-73.129099",
        },
        {
          id: "44",
          latitude: "-40.581269",
          longitude: "-73.129208",
        },
        {
          id: "45",
          latitude: "-40.587492",
          longitude: "-73.113811",
        },
        {
          id: "46",
          latitude: "-40.587366",
          longitude: "-73.113639",
        },
        {
          id: "47",
          latitude: "-40.587274",
          longitude: "-73.113784",
        },
        {
          id: "48",
          latitude: "-40.587385",
          longitude: "-73.113959",
        },
        {
          id: "49",
          latitude: "-40.591680",
          longitude: "-73.119215",
        },
        {
          id: "50",
          latitude: "-40.591574",
          longitude: "-73.119071",
        },
        {
          id: "51",
          latitude: "-40.591641",
          longitude: "-73.118987",
        },
        {
          id: "52",
          latitude: "-40.591749",
          longitude: "-73.119129",
        },
        {
          id: "53",
          latitude: "-40.587361",
          longitude: "-73.123001",
        },
        {
          id: "54",
          latitude: "-40.587197",
          longitude: "-73.122558",
        },
        {
          id: "55",
          latitude: "-40.587813",
          longitude: "-73.122112",
        },
        {
          id: "56",
          latitude: "-40.587968",
          longitude: "-73.122577",
        },
        {
          id: "57",
          latitude: "-40.587656",
          longitude: "-73.126490",
        },
        {
          id: "58",
          latitude: "-40.587575",
          longitude: "-73.126331",
        },
        {
          id: "59",
          latitude: "-40.587712",
          longitude: "-73.126221",
        },
        {
          id: "60",
          latitude: "-40.587774",
          longitude: "-73.126389",
        },
        {
          id: "61",
          latitude: "-40.573481",
          longitude: "-73.130922",
        },
        {
          id: "62",
          latitude: "-40.573745",
          longitude: "-73.130267",
        },
        {
          id: "63",
          latitude: "-40.574094",
          longitude: "-73.129789",
        },
        {
          id: "64",
          latitude: "-40.574705",
          longitude: "-73.129755",
        },
        {
          id: "65",
          latitude: "-40.574660",
          longitude: "-73.130899",
        },
        {
          id: "66",
          latitude: "-40.574417",
          longitude: "-73.134395",
        },
        {
          id: "67",
          latitude: "-40.574429",
          longitude: "-73.134111",
        },
        {
          id: "68",
          latitude: "-40.574545",
          longitude: "-73.134102",
        },
        {
          id: "69",
          latitude: "-40.574540",
          longitude: "-73.134407",
        },
        {
          id: "70",
          latitude: "-40.574688",
          longitude: "-73.134791",
        },
        {
          id: "71",
          latitude: "-40.574691",
          longitude: "-73.134376",
        },
        {
          id: "72",
          latitude: "-40.574996",
          longitude: "-73.134357",
        },
        {
          id: "73",
          latitude: "-40.574995",
          longitude: "-73.134769",
        },
        {
          id: "74",
          latitude: "-40.574576",
          longitude: "-73.136613",
        },
        {
          id: "75",
          latitude: "-40.574576",
          longitude: "-73.136321",
        },
        {
          id: "76",
          latitude: "-40.574950",
          longitude: "-73.136312",
        },
        {
          id: "77",
          latitude: "-40.574950",
          longitude: "-73.136570",
        },
        {
          id: "78",
          latitude: "-40.574528",
          longitude: "-73.137049",
        },
        {
          id: "79",
          latitude: "-40.574544",
          longitude: "-73.136745",
        },
        {
          id: "80",
          latitude: "-40.574751",
          longitude: "-73.136751",
        },
        {
          id: "81",
          latitude: "-40.574739",
          longitude: "-73.137071",
        },
        {
          id: "82",
          latitude: "-40.573464",
          longitude: "-73.137054",
        },
        {
          id: "83",
          latitude: "-40.573449",
          longitude: "-73.136852",
        },
        {
          id: "84",
          latitude: "-40.573580",
          longitude: "-73.136840",
        },
        {
          id: "85",
          latitude: "-40.573593",
          longitude: "-73.137044",
        },
        {
          id: "86",
          latitude: "-40.572874",
          longitude: "-73.138807",
        },
        {
          id: "87",
          latitude: "-40.572878",
          longitude: "-73.138707",
        },
        {
          id: "88",
          latitude: "-40.572986",
          longitude: "-73.138703",
        },
        {
          id: "89",
          latitude: "-40.572982",
          longitude: "-73.138777",
        },
        {
          id: "90",
          latitude: "-40.572851",
          longitude: "-73.139084",
        },
        {
          id: "91",
          latitude: "-40.572853",
          longitude: "-73.138977",
        },
        {
          id: "92",
          latitude: "-40.572970",
          longitude: "-73.138975",
        },
        {
          id: "93",
          latitude: "-40.572968",
          longitude: "-73.139093",
        },
        {
          id: "94",
          latitude: "-40.573092",
          longitude: "-73.138848",
        },
        {
          id: "95",
          latitude: "-40.573126",
          longitude: "-73.138569",
        },
        {
          id: "96",
          latitude: "-40.573571",
          longitude: "-73.138535",
        },
        {
          id: "97",
          latitude: "-40.573570",
          longitude: "-73.138807",
        },
        {
          id: "98",
          latitude: "-40.573155",
          longitude: "-73.137952",
        },
        {
          id: "99",
          latitude: "-40.573163",
          longitude: "-73.137608",
        },
        {
          id: "100",
          latitude: "-40.573412",
          longitude: "-73.137604",
        },
        {
          id: "101",
          latitude: "-40.573405",
          longitude: "-73.137948",
        },
        {
          id: "102",
          latitude: "-40.574648",
          longitude: "-73.135155",
        },
        {
          id: "103",
          latitude: "-40.574655",
          longitude: "-73.134916",
        },
        {
          id: "104",
          latitude: "-40.574775",
          longitude: "-73.134914",
        },
        {
          id: "105",
          latitude: "-40.574759",
          longitude: "-73.135144",
        },
        {
          id: "106",
          latitude: "-40.575734",
          longitude: "-73.139531",
        },
        {
          id: "107",
          latitude: "-40.575777",
          longitude: "-73.138364",
        },
        {
          id: "108",
          latitude: "-40.576494",
          longitude: "-73.138318",
        },
        {
          id: "109",
          latitude: "-40.576490",
          longitude: "-73.139136",
        },
        {
          id: "110",
          latitude: "-40.574019",
          longitude: "-73.134931",
        },
        {
          id: "111",
          latitude: "-40.574004",
          longitude: "-73.134553",
        },
        {
          id: "112",
          latitude: "-40.574220",
          longitude: "-73.134539",
        },
        {
          id: "113",
          latitude: "-40.574243",
          longitude: "-73.134897",
        },
        {
          id: "114",
          latitude: "-40.573084",
          longitude: "-73.134719",
        },
        {
          id: "115",
          latitude: "-40.573088",
          longitude: "-73.134587",
        },
        {
          id: "116",
          latitude: "-40.573225",
          longitude: "-73.134581",
        },
        {
          id: "117",
          latitude: "-40.573220",
          longitude: "-73.134753",
        },
        {
          id: "118",
          latitude: "-40.575289",
          longitude: "-73.135574",
        },
        {
          id: "119",
          latitude: "-40.575291",
          longitude: "-73.135215",
        },
        {
          id: "120",
          latitude: "-40.575540",
          longitude: "-73.135208",
        },
        {
          id: "121",
          latitude: "-40.575478",
          longitude: "-73.135607",
        },
        {
          id: "122",
          latitude: "-40.574424",
          longitude: "-73.133885",
        },
        {
          id: "123",
          latitude: "-40.574423",
          longitude: "-73.133768",
        },
        {
          id: "124",
          latitude: "-40.574543",
          longitude: "-73.133764",
        },
        {
          id: "125",
          latitude: "-40.574538",
          longitude: "-73.133885",
        },
        {
          id: "126",
          latitude: "-40.573356",
          longitude: "-73.128854",
        },
        {
          id: "127",
          latitude: "-40.573385",
          longitude: "-73.128151",
        },
        {
          id: "128",
          latitude: "-40.574050",
          longitude: "-73.128242",
        },
        {
          id: "129",
          latitude: "-40.573993",
          longitude: "-73.128905",
        },
        {
          id: "130",
          latitude: "-40.573474",
          longitude: "-73.126816",
        },
        {
          id: "131",
          latitude: "-40.573529",
          longitude: "-73.126082",
        },
        {
          id: "132",
          latitude: "-40.573924",
          longitude: "-73.126178",
        },
        {
          id: "133",
          latitude: "-40.573853",
          longitude: "-73.126870",
        },
        {
          id: "134",
          latitude: "-40.570685",
          longitude: "-73.140351",
        },
        {
          id: "135",
          latitude: "-40.570616",
          longitude: "-73.139543",
        },
        {
          id: "136",
          latitude: "-40.570940",
          longitude: "-73.139507",
        },
        {
          id: "137",
          latitude: "-40.570988",
          longitude: "-73.140314",
        },
        {
          id: "138",
          latitude: "-40.573158",
          longitude: "-73.133457",
        },
        {
          id: "139",
          latitude: "-40.573156",
          longitude: "-73.133330",
        },
        {
          id: "140",
          latitude: "-40.573253",
          longitude: "-73.133337",
        },
        {
          id: "141",
          latitude: "-40.573249",
          longitude: "-73.133479",
        },
        {
          id: "142",
          latitude: "-40.573344",
          longitude: "-73.133469",
        },
        {
          id: "143",
          latitude: "-40.573355",
          longitude: "-73.133326",
        },
        {
          id: "144",
          latitude: "-40.573434",
          longitude: "-73.133320",
        },
        {
          id: "145",
          latitude: "-40.573432",
          longitude: "-73.133462",
        },
        {
          id: "146",
          latitude: "-40.573373",
          longitude: "-73.132833",
        },
        {
          id: "147",
          latitude: "-40.573375",
          longitude: "-73.132715",
        },
        {
          id: "148",
          latitude: "-40.573475",
          longitude: "-73.132718",
        },
        {
          id: "149",
          latitude: "-40.573472",
          longitude: "-73.132847",
        },
        {
          id: "150",
          latitude: "-40.583875",
          longitude: "-73.121762",
        },
        {
          id: "151",
          latitude: "-40.583845",
          longitude: "-73.121627",
        },
        {
          id: "152",
          latitude: "-40.584022",
          longitude: "-73.121534",
        },
        {
          id: "153",
          latitude: "-40.584051",
          longitude: "-73.121647",
        },
        {
          id: "154",
          latitude: "-40.583332",
          longitude: "-73.121999",
        },
        {
          id: "155",
          latitude: "-40.583511",
          longitude: "-73.121790",
        },
        {
          id: "156",
          latitude: "-40.583595",
          longitude: "-73.121919",
        },
        {
          id: "157",
          latitude: "-40.583377",
          longitude: "-73.122112",
        },
        {
          id: "158",
          latitude: "-40.574887",
          longitude: "-73.128963",
        },
        {
          id: "159",
          latitude: "-40.574890",
          longitude: "-73.128643",
        },
        {
          id: "160",
          latitude: "-40.575071",
          longitude: "-73.128653",
        },
        {
          id: "161",
          latitude: "-40.575049",
          longitude: "-73.128943",
        },
        {
          id: "162",
          latitude: "-40.576598",
          longitude: "-73.154940",
        },
        {
          id: "163",
          latitude: "-40.576609",
          longitude: "-73.154819",
        },
        {
          id: "164",
          latitude: "-40.576726",
          longitude: "-73.154837",
        },
        {
          id: "165",
          latitude: "-40.576714",
          longitude: "-73.154956",
        },
        {
          id: "166",
          latitude: "-40.573493",
          longitude: "-73.150810",
        },
        {
          id: "167",
          latitude: "-40.573523",
          longitude: "-73.150387",
        },
        {
          id: "168",
          latitude: "-40.573980",
          longitude: "-73.150446",
        },
        {
          id: "169",
          latitude: "-40.573942",
          longitude: "-73.150857",
        },
        {
          id: "170",
          latitude: "-40.577024",
          longitude: "-73.154709",
        },
        {
          id: "171",
          latitude: "-40.577072",
          longitude: "-73.153927",
        },
        {
          id: "172",
          latitude: "-40.577620",
          longitude: "-73.154002",
        },
        {
          id: "173",
          latitude: "-40.577551",
          longitude: "-73.154785",
        },
        {
          id: "174",
          latitude: "-40.572890",
          longitude: "-73.159409",
        },
        {
          id: "175",
          latitude: "-40.572867",
          longitude: "-73.158806",
        },
        {
          id: "176",
          latitude: "-40.573424",
          longitude: "-73.158757",
        },
        {
          id: "177",
          latitude: "-40.573422",
          longitude: "-73.159271",
        },
        {
          id: "178",
          latitude: "-40.572776",
          longitude: "-73.157377",
        },
        {
          id: "179",
          latitude: "-40.572756",
          longitude: "-73.156957",
        },
        {
          id: "180",
          latitude: "-40.573067",
          longitude: "-73.156993",
        },
        {
          id: "181",
          latitude: "-40.573086",
          longitude: "-73.157416",
        },
        {
          id: "182",
          latitude: "-40.572862",
          longitude: "-73.158669",
        },
        {
          id: "183",
          latitude: "-40.572876",
          longitude: "-73.157990",
        },
        {
          id: "184",
          latitude: "-40.573200",
          longitude: "-73.158025",
        },
        {
          id: "185",
          latitude: "-40.573177",
          longitude: "-73.158655",
        },
        {
          id: "186",
          latitude: "-40.572010",
          longitude: "-73.125445",
        },
        {
          id: "187",
          latitude: "-40.572089",
          longitude: "-73.124449",
        },
        {
          id: "188",
          latitude: "-40.572343",
          longitude: "-73.124502",
        },
        {
          id: "189",
          latitude: "-40.572284",
          longitude: "-73.125484",
        },
        {
          id: "190",
          latitude: "-40.567986",
          longitude: "-73.171324",
        },
        {
          id: "191",
          latitude: "-40.567676",
          longitude: "-73.170889",
        },
        {
          id: "192",
          latitude: "-40.567886",
          longitude: "-73.170610",
        },
        {
          id: "193",
          latitude: "-40.568226",
          longitude: "-73.171048",
        },
        {
          id: "194",
          latitude: "-40.591319",
          longitude: "-73.169969",
        },
        {
          id: "195",
          latitude: "-40.591412",
          longitude: "-73.169589",
        },
        {
          id: "196",
          latitude: "-40.591987",
          longitude: "-73.170031",
        },
        {
          id: "197",
          latitude: "-40.591922",
          longitude: "-73.170284",
        },
        {
          id: "198",
          latitude: "-40.563601",
          longitude: "-73.153732",
        },
        {
          id: "199",
          latitude: "-40.563565",
          longitude: "-73.153166",
        },
        {
          id: "200",
          latitude: "-40.563946",
          longitude: "-73.153107",
        },
        {
          id: "201",
          latitude: "-40.564003",
          longitude: "-73.153662",
        },
        {
          id: "202",
          latitude: "-40.585574",
          longitude: "-73.150376",
        },
        {
          id: "203",
          latitude: "-40.585236",
          longitude: "-73.150047",
        },
        {
          id: "204",
          latitude: "-40.585051",
          longitude: "-73.149474",
        },
        {
          id: "205",
          latitude: "-40.585512",
          longitude: "-73.149145",
        },
        {
          id: "206",
          latitude: "-40.585816",
          longitude: "-73.149783",
        },
        {
          id: "207",
          latitude: "-40.572927",
          longitude: "-73.134992",
        },
        {
          id: "208",
          latitude: "-40.572917",
          longitude: "-73.134809",
        },
        {
          id: "209",
          latitude: "-40.573171",
          longitude: "-73.134801",
        },
        {
          id: "210",
          latitude: "-40.573166",
          longitude: "-73.134968",
        },
        {
          id: "211",
          latitude: "-40.587792",
          longitude: "-73.129178",
        },
        {
          id: "212",
          latitude: "-40.587108",
          longitude: "-73.128502",
        },
        {
          id: "213",
          latitude: "-40.587116",
          longitude: "-73.127773",
        },
        {
          id: "214",
          latitude: "-40.588428",
          longitude: "-73.127086",
        },
        {
          id: "215",
          latitude: "-40.588843",
          longitude: "-73.128674",
        },
        {
          id: "269",
          latitude: "-40.577053",
          longitude: "-73.138533",
        },
        {
          id: "270",
          latitude: "-40.578062",
          longitude: "-73.116597",
        },
        {
          id: "271",
          latitude: "-40.583437",
          longitude: "-73.108789",
        },
        {
          id: "272",
          latitude: "-40.594312",
          longitude: "-73.123917",
        },
        {
          id: "273",
          latitude: "-40.585970",
          longitude: "-73.137821",
        },
        {
          id: "274",
          latitude: "-40.583437",
          longitude: "-73.108789",
        },
        {
          id: "275",
          latitude: "-40.587052",
          longitude: "-73.103221",
        },
        {
          id: "276",
          latitude: "-40.590566",
          longitude: "-73.100018",
        },
        {
          id: "277",
          latitude: "-40.599982",
          longitude: "-73.101343",
        },
        {
          id: "278",
          latitude: "-40.601481",
          longitude: "-73.124003",
        },
        {
          id: "279",
          latitude: "-40.594312",
          longitude: "-73.123917",
        },
        {
          id: "280",
          latitude: "-40.572605",
          longitude: "-73.147185",
        },
        {
          id: "281",
          latitude: "-40.568792",
          longitude: "-73.143053",
        },
        {
          id: "282",
          latitude: "-40.569671",
          longitude: "-73.115266",
        },
        {
          id: "283",
          latitude: "-40.567493",
          longitude: "-73.108388",
        },
        {
          id: "284",
          latitude: "-40.577426",
          longitude: "-73.111713",
        },
        {
          id: "285",
          latitude: "-40.579591",
          longitude: "-73.114383",
        },
        {
          id: "286",
          latitude: "-40.578062",
          longitude: "-73.116597",
        },
        {
          id: "287",
          latitude: "-40.577053",
          longitude: "-73.138533",
        },
        {
          id: "288",
          latitude: "-40.578221",
          longitude: "-73.144490",
        },
        {
          id: "289",
          latitude: "-40.568792",
          longitude: "-73.143053",
        },
        {
          id: "290",
          latitude: "-40.563901",
          longitude: "-73.142818",
        },
        {
          id: "291",
          latitude: "-40.559706",
          longitude: "-73.119676",
        },
        {
          id: "292",
          latitude: "-40.551986",
          longitude: "-73.121211",
        },
        {
          id: "293",
          latitude: "-40.549422",
          longitude: "-73.103177",
        },
        {
          id: "294",
          latitude: "-40.565788",
          longitude: "-73.098111",
        },
        {
          id: "295",
          latitude: "-40.571006",
          longitude: "-73.099274",
        },
        {
          id: "296",
          latitude: "-40.567493",
          longitude: "-73.108388",
        },
        {
          id: "297",
          latitude: "-40.569671",
          longitude: "-73.115266",
        },
        {
          id: "298",
          latitude: "-40.567493",
          longitude: "-73.108388",
        },
        {
          id: "299",
          latitude: "-40.571006",
          longitude: "-73.099274",
        },
        {
          id: "300",
          latitude: "-40.574432",
          longitude: "-73.099214",
        },
        {
          id: "301",
          latitude: "-40.582213",
          longitude: "-73.080692",
        },
        {
          id: "302",
          latitude: "-40.591484",
          longitude: "-73.083316",
        },
        {
          id: "303",
          latitude: "-40.590566",
          longitude: "-73.100018",
        },
        {
          id: "304",
          latitude: "-40.587052",
          longitude: "-73.103221",
        },
        {
          id: "305",
          latitude: "-40.583437",
          longitude: "-73.108789",
        },
        {
          id: "306",
          latitude: "-40.579591",
          longitude: "-73.114383",
        },
        {
          id: "307",
          latitude: "-40.577426",
          longitude: "-73.111713",
        },
        {
          id: "308",
          latitude: "-40.580612",
          longitude: "-73.148662",
        },
        {
          id: "309",
          latitude: "-40.578221",
          longitude: "-73.144490",
        },
        {
          id: "310",
          latitude: "-40.577053",
          longitude: "-73.138533",
        },
        {
          id: "311",
          latitude: "-40.585970",
          longitude: "-73.137821",
        },
        {
          id: "312",
          latitude: "-40.598522",
          longitude: "-73.142730",
        },
        {
          id: "313",
          latitude: "-40.592945",
          longitude: "-73.153942",
        },
        {
          id: "314",
          latitude: "-40.589190",
          longitude: "-73.156831",
        },
        {
          id: "315",
          latitude: "-40.585361",
          longitude: "-73.155802",
        },
        {
          id: "316",
          latitude: "-40.548840",
          longitude: "-73.166090",
        },
        {
          id: "317",
          latitude: "-40.562090",
          longitude: "-73.158215",
        },
        {
          id: "318",
          latitude: "-40.561455",
          longitude: "-73.166346",
        },
        {
          id: "319",
          latitude: "-40.568320",
          longitude: "-73.165205",
        },
        {
          id: "320",
          latitude: "-40.569043",
          longitude: "-73.170384",
        },
        {
          id: "321",
          latitude: "-40.565455",
          longitude: "-73.185831",
        },
        {
          id: "322",
          latitude: "-40.552833",
          longitude: "-73.180540",
        },
        {
          id: "323",
          latitude: "-40.565455",
          longitude: "-73.185831",
        },
        {
          id: "324",
          latitude: "-40.569043",
          longitude: "-73.170384",
        },
        {
          id: "325",
          latitude: "-40.568320",
          longitude: "-73.165205",
        },
        {
          id: "326",
          latitude: "-40.577374",
          longitude: "-73.158533",
        },
        {
          id: "327",
          latitude: "-40.585314",
          longitude: "-73.164238",
        },
        {
          id: "328",
          latitude: "-40.598365",
          longitude: "-73.167677",
        },
        {
          id: "329",
          latitude: "-40.595438",
          longitude: "-73.184192",
        },
        {
          id: "330",
          latitude: "-40.581016",
          longitude: "-73.180459",
        },
        {
          id: "331",
          latitude: "-40.561455",
          longitude: "-73.166346",
        },
        {
          id: "332",
          latitude: "-40.562090",
          longitude: "-73.158215",
        },
        {
          id: "333",
          latitude: "-40.568310",
          longitude: "-73.153923",
        },
        {
          id: "334",
          latitude: "-40.572605",
          longitude: "-73.147185",
        },
        {
          id: "335",
          latitude: "-40.578221",
          longitude: "-73.144490",
        },
        {
          id: "336",
          latitude: "-40.580612",
          longitude: "-73.148662",
        },
        {
          id: "337",
          latitude: "-40.585361",
          longitude: "-73.155802",
        },
        {
          id: "338",
          latitude: "-40.585314",
          longitude: "-73.164238",
        },
        {
          id: "339",
          latitude: "-40.577374",
          longitude: "-73.158533",
        },
        {
          id: "340",
          latitude: "-40.568320",
          longitude: "-73.165205",
        },
        {
          id: "341",
          latitude: "-40.568792",
          longitude: "-73.143053",
        },
        {
          id: "342",
          latitude: "-40.563901",
          longitude: "-73.142818",
        },
        {
          id: "343",
          latitude: "-40.546808",
          longitude: "-73.148073",
        },
        {
          id: "344",
          latitude: "-40.545969",
          longitude: "-73.160161",
        },
        {
          id: "345",
          latitude: "-40.548840",
          longitude: "-73.166090",
        },
        {
          id: "346",
          latitude: "-40.562075",
          longitude: "-73.158230",
        },
        {
          id: "347",
          latitude: "-40.568310",
          longitude: "-73.153923",
        },
        {
          id: "348",
          latitude: "-40.572605",
          longitude: "-73.147185",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coordinates", null, {});
  },
};
