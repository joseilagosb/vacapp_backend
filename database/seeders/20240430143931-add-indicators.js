"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "indicators",
      [
        {
          id: "1",
          indicator_name: "Distanciamiento social",
          indicator_type: "0",
          indicator_description:
            "Tanto el personal del recinto como los clientes cumplen las recomendaciones de distanciamiento.\nEl personal se preocupa de que estas indicaciones se cumplan.",
        },
        {
          id: "2",
          indicator_name: "Disposición de alcohol gel",
          indicator_type: "0",
          indicator_description:
            "Existen dispensadores de desinfectante para manos en puntos estratégicos del recinto.\nEl guardia desinfecta las manos de los clientes que ingresan al local.",
        },
        {
          id: "3",
          indicator_name: "Cantidad adecuada de personas en su interior",
          indicator_type: "0",
          indicator_description:
            "Existe un número apropiado de personas al interior del establecimiento",
        },
        {
          id: "4",
          indicator_name: "Seguridad en el local",
          indicator_type: "0",
          indicator_description:
            "Tanto el recinto como sus alrededores constituyen un entorno seguro para realizar la actividad y no pone en riesgo la integridad del cliente.",
        },
        {
          id: "5",
          indicator_name: "Tiempo de espera promedio en la fila",
          indicator_type: "1",
          indicator_description:
            "Tiempo que se demora desde el momento que llega a la fila al momento de ser atendido finalmente.",
        },
        {
          id: "6",
          indicator_name: "Capacidad de respuesta",
          indicator_type: "0",
          indicator_description:
            "El personal del recinto ofrecen el servicio solicitado en espacios de tiempo adecuados y de manera rápida.",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("indicators", null, {});
  },
};
