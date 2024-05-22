import { Column, Model, Table } from "sequelize-typescript";

@Table({
  modelName: "PlaceType",
  tableName: "place_types",
  timestamps: false,
})
class PlaceType extends Model {
  @Column
  place_type_name: string;
}

export default PlaceType;
