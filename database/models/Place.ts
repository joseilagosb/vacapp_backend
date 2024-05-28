import { BelongsToMany, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

import PlaceType from "./PlaceType";
import CurrentCrowd from "./CurrentCrowd";
import CurrentQueue from "./CurrentQueue";
import PlaceIndicator from "./PlaceIndicator";
import Indicator from "./Indicator";

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

  @BelongsToMany(() => Indicator, () => PlaceIndicator)
  indicators: Array<Indicator>;

  @HasMany(() => CurrentCrowd)
  current_crowds: Array<CurrentCrowd>;

  @HasMany(() => CurrentQueue)
  current_queues: Array<CurrentQueue>;
}

export default Place;
