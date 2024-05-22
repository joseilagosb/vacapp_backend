import { Column, Model, Table } from "sequelize-typescript";

@Table({
  modelName: "User",
  tableName: "users",
  timestamps: false,
})
class User extends Model {
  @Column
  username: string;

  @Column
  password: string;
}

export default User;
