import { Seed } from "../../ts/types/database.types";

const seed: Seed = {
  up: async (queryInterface, _) => {
    await queryInterface.bulkInsert(
      "place_types",
      [
        { id: "1", place_type_name: "Supermercado" },
        { id: "2", place_type_name: "Servicio público" },
        { id: "3", place_type_name: "Banco/Finanzas" },
        { id: "4", place_type_name: "Notaría" },
        { id: "5", place_type_name: "Establecimiento de salud pública" },
        { id: "6", place_type_name: "Farmacia" },
        { id: "7", place_type_name: "Ferretería" },
        { id: "8", place_type_name: "Panadería/Minimercado" },
        { id: "9", place_type_name: "Correos/Encomiendas" },
      ],
      {}
    );
  },

  down: async (queryInterface, _) => {
    await queryInterface.bulkDelete("place_types", null, {});
  },
};

export default seed;
