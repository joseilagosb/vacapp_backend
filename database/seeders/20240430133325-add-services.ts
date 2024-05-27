import { Seed } from "../../ts/types/database.types";

const seed: Seed = {
  up: async (queryInterface, _) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          id: "1",
          service_name: "Cédula de identidad",
          service_description:
            "Aquí puede desempeñar actividades presenciales relacionadas a la cédula de identidad como las siguientes:\n1. Reimpresión de cédula perdida o vencida\n2. Solicitud de cédula para extranjeros\n3. Obtención de clave única",
        },
        {
          id: "2",
          service_name: "Giro de dinero en cajero",
          service_description:
            "Aquí puede efectuar retiros de efectivo por medio de un cajero automático.",
        },
        {
          id: "3",
          service_name: "Compra de artículos de aseo",
          service_description:
            "Aquí puede comprar productos e implementos sanitarios para la seguridad personal",
        },
        {
          id: "4",
          service_name: "Compra de abarrotes",
          service_description:
            "Aquí puede encontrar los alimentos fundamentales para la hora de almuerzo.",
        },
        {
          id: "5",
          service_name: "Pago de servicios básicos (agua, luz, gas)",
          service_description:
            "Aquí puede encontrar puntos Sencillito o Servipag para que pueda pagar sus cuentas.",
        },
        {
          id: "6",
          service_name: "Compra de medicamentos",
          service_description:
            "Aquí puede encontrar una farmacia o un centro de venta de medicamentos con y sin receta médica.",
        },
        {
          id: "7",
          service_name: "Compra rápida (pan, bebida, postres)",
          service_description:
            "Aquí puede hallar una oferta más reducida de productos pero puede realizar las compras de un producto puntual en un tiempo más reducido.",
        },
        {
          id: "8",
          service_name: "Atención ambulatoria",
          service_description:
            "Aquí puede ser atendid@ si sufre alguna afección o problema de salud.",
        },
        {
          id: "9",
          service_name: "Caja Vecina",
          service_description:
            "Aquí puede hallar una Caja Vecina donde puede efectuar depósitos y retiros a una Cuenta Rut.",
        },
        {
          id: "10",
          service_name: "Escrituras públicas",
          service_description:
            "Aquí puede firmar ante un notario público una escritura o documento",
        },
        {
          id: "11",
          service_name: "Depósito de dinero - Santander",
          service_description:
            "Aquí puede efectuar un depósito ya sea a una cuenta propia o a un tercero.",
        },
        {
          id: "12",
          service_name: "Depósito de dinero - Bci",
          service_description:
            "Aquí puede efectuar un depósito ya sea a una cuenta propia o a un tercero.",
        },
        {
          id: "13",
          service_name: "Depósito de dinero - Banco Estado",
          service_description:
            "Aquí puede efectuar un depósito ya sea a una cuenta propia o a un tercero.",
        },
        {
          id: "14",
          service_name: "Depósito de dinero - Banco de Chile",
          service_description:
            "Aquí puede efectuar un depósito ya sea a una cuenta propia o a un tercero.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _) => {
    await queryInterface.bulkDelete("services", null, {});
  },
};

export default seed;
