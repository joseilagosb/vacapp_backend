import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Place from "./Place";

@Table({
  modelName: "CurrentCrowd",
  tableName: "current_crowds",
  timestamps: false,
})
class CurrentCrowd extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @Column
  people_no: number;

  @Column
  crowd_day_of_week: number;

  @Column
  crowd_hour: number;
}

export default CurrentCrowd;
