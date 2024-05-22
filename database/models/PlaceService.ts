import { Column, ForeignKey, Model, Table } from "sequelize-typescript";

import Place from "./Place";
import Service from "./Service";

@Table({
  modelName: "PlaceService",
  tableName: "place_service",
  timestamps: false,
})
class PlaceService extends Model {
  @ForeignKey(() => Place)
  @Column
  place_id: number;

  @ForeignKey(() => Service)
  @Column
  service_id: number;
}

export default PlaceService;
