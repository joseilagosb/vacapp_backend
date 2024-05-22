import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Place from "./Place";

@Table({
  modelName: "PlaceWorkingDay",
  tableName: "place_working_days",
  timestamps: false,
})
class PlaceWorkingDay extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @Column
  day_of_week: number;

  @Column
  opening_time: Date;

  @Column
  closing_time: Date;
}

export default PlaceWorkingDay;
