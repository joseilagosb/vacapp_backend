import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";

import Place from "./Place";
import PlaceIndicator from "./PlaceIndicator";

@Table({
  modelName: "Indicator",
  tableName: "indicators",
  timestamps: false,
})
class Indicator extends Model {
  @Column
  indicator_name: string;

  @Column
  indicator_type: number;

  @Column
  indicator_description: number;

  @BelongsToMany(() => Place, () => PlaceIndicator)
  places: Array<Place>;
}

export default Indicator;
