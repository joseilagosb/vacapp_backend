import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import Place from "./Place";
import PlaceService from "./PlaceService";

@Table({
  modelName: "Service",
  tableName: "services",
  timestamps: false,
})
class Service extends Model {
  @Column
  service_name: string;

  @Column
  service_description: string;

  @BelongsToMany(() => Place, () => PlaceService)
  places: Array<Place>;
}

export default Service;
