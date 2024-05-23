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
