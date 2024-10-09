import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type RewardAttributes = {
  id: number;
  name: string;
  description: string;
  pointsRequired: number;
};

export type RewardCreationAttributes = Optional<RewardAttributes, "id">;

@Table
export class Reward extends Model<RewardAttributes, RewardCreationAttributes> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare name: string;

  @AllowNull(false)
  @Column
  declare description: string;

  @AllowNull(false)
  @Column
  declare pointsRequired: number;
}

export default Reward;
