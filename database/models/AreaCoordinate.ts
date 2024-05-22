import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import Area from "./Area";
import Coordinate from "./Coordinate";

@Table({
  modelName: "AreaCoordinate",
  tableName: "area_coordinate",
  timestamps: false,
})
class AreaCoordinate extends Model {
  @ForeignKey(() => Area)
  @Column
  area_id: number;

  @ForeignKey(() => Coordinate)
  @Column
  coordinate_id: number;
}

export default AreaCoordinate;
