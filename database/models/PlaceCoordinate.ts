import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import Place from "./Place";
import Coordinate from "./Coordinate";

@Table({
  modelName: "PlaceCoordinate",
  tableName: "place_coordinate",
  timestamps: false,
})
class PlaceCoordinate extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @ForeignKey(() => Coordinate)
  @Column
  coordinate_id: number;
}

export default PlaceCoordinate;
