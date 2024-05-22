import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import Place from "./Place";

@Table({
  modelName: "CurrentQueue",
  tableName: "current_queues",
  timestamps: false,
})
class CurrentQueue extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @Column
  people_no: number;

  @Column
  queue_day_of_week: number;

  @Column
  queue_hour: number;
}

export default CurrentQueue;
