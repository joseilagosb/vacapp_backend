import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";

import Coordinate from "./Coordinate";
import AreaCoordinate from "./AreaCoordinate";

@Table({
  modelName: "Area",
  tableName: "areas",
  timestamps: false,
})
class Area extends Model {
  @Column
  area_name: string;

  @BelongsToMany(() => Coordinate, () => AreaCoordinate)
  coordinates: Array<Coordinate>;
}

export default Area;
