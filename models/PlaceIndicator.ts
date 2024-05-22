import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import Place from "./Place";
import Indicator from "./Indicator";

@Table({
  modelName: "PlaceIndicator",
  tableName: "place_indicator",
  timestamps: false,
})
class PlaceIndicator extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @ForeignKey(() => Indicator)
  @Column
  indicator_id: number;
}

export default PlaceIndicator;
