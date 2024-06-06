import { Column, HasMany, Model, Table } from "sequelize-typescript";
import Place from "./Place";

@Table({
  modelName: "PlaceType",
  tableName: "place_types",
  timestamps: false,
})
class PlaceType extends Model {
  @Column
  place_type_name: string;

  @HasMany(() => Place)
  places: Place;
}

export default PlaceType;
