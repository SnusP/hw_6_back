import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  AllowNull,
  AutoIncrement,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Reward from "./Reward";

export type UserRewardAttributes = {
  id: number;
  userId: number;
  rewardId: number;
  status: string;
  dateAwarded?: Date;
};

export type UserRewardCreationAttributes = Optional<UserRewardAttributes, "id">;

@Table
export class UserReward extends Model<
  UserRewardAttributes,
  UserRewardCreationAttributes
> {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare userId: number;

  @ForeignKey(() => Reward)
  @AllowNull(false)
  @Column
  declare rewardId: number;

  @AllowNull(false)
  @Column
  declare status: string;

  @Column
  declare dateAwarded?: Date;
}

export default UserReward;
