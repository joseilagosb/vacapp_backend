import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import PlaceType from "./PlaceType";

@Table({
  modelName: "Place",
  tableName: "places",
  timestamps: false,
})
class Place extends Model {
  @Column
  place_name: string;

  @Column
  place_short_name: string;

  @Column
  place_address: string;

  @ForeignKey(() => PlaceType)
  @Column
  place_type: number;

  @Column
  surface: number;

  @Column
  attention_surface: number;
}

export default Place;

// //   // Hace una "búsqueda invertida" del modelo asociado a Place
// //   // En otras palabras, hace una consulta SQL al associatedModel haciendo una carga inmediata (Eager Loading)
// //   // de los Place relacionados a cada fila resultante.
// //   Place.findByPlaceKeys = (associatedModel, placeKeys) => {
// //     return associatedModel.findAll({
// //       include: {
// //         model: Place,
// //         as: "places",
// //         where: { id: { [Op.in]: placeKeys } },
// //         attributes: ["id"],
// //       },
// //     });
// //   };
// //   return Place;
// // };
