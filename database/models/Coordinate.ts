import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";

import Area from "./Area";
import AreaCoordinate from "./AreaCoordinate";
import Place from "./Place";
import PlaceCoordinate from "./PlaceCoordinate";

@Table({
  modelName: "Coordinate",
  tableName: "coordinates",
  timestamps: false,
})
class Coordinate extends Model {
  @Column
  latitude: number;

  @Column
  longitude: number;

  @BelongsToMany(() => Area, () => AreaCoordinate)
  areas: Array<Area>;

  @BelongsToMany(() => Place, () => PlaceCoordinate)
  places: Array<Place>;
}

export default Coordinate;
