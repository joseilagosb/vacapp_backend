import {
  Association,
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
  NonAttribute,
} from "sequelize";
import sequelize from "../database/connection";

import { PlaceType } from "./PlaceType";
import { Coordinate } from "./Coordinate";
import { Service } from "./Service";
import { Indicator } from "./Indicator";
import { CurrentCrowd } from "./CurrentCrowd";
import { CurrentQueue } from "./CurrentQueue";

export class Place extends Model<InferAttributes<Place>, InferCreationAttributes<Place>> {
  declare id: CreationOptional<number>;
  declare place_name: string;
  declare place_short_name: string;
  declare place_address: string;
  declare place_type: ForeignKey<number>;
  declare surface: number;
  declare attention_surface: number;
  declare coordinates?: NonAttribute<Array<Coordinate>>;
  declare services?: NonAttribute<Array<Service>>;
  declare indicators?: NonAttribute<Array<Indicator>>;
  declare currentCrowds?: NonAttribute<Array<CurrentCrowd>>;
  declare currentQueues?: NonAttribute<Array<CurrentQueue>>;

  declare static associations: {
    place_type: Association<Place, PlaceType>;
    coordinates: Association<Place, Coordinate>;
    services: Association<Place, Service>;
    indicators?: Association<Place, Indicator>;
    currentCrowds?: Association<Place, CurrentCrowd>;
    currentQueues?: Association<Place, CurrentQueue>;
  };
}

export const placeAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  place_name: DataTypes.STRING,
  place_short_name: DataTypes.STRING,
  place_address: DataTypes.STRING,
  place_type: DataTypes.INTEGER,
  surface: DataTypes.INTEGER,
  attention_surface: DataTypes.INTEGER,
};

export const placeOptions: InitOptions = {
  sequelize,
  modelName: "Place",
  tableName: "places",
  timestamps: false,
};

//   // Hace una "búsqueda invertida" del modelo asociado a Place
//   // En otras palabras, hace una consulta SQL al associatedModel haciendo una carga inmediata (Eager Loading)
//   // de los Place relacionados a cada fila resultante.
//   Place.findByPlaceKeys = (associatedModel, placeKeys) => {
//     return associatedModel.findAll({
//       include: {
//         model: Place,
//         as: "places",
//         where: { id: { [Op.in]: placeKeys } },
//         attributes: ["id"],
//       },
//     });
//   };
//   return Place;
// };
