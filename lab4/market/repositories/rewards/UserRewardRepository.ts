import { UserReward } from "../../models/rewards/UserReward";

class UserRewardRepository {
  async getAll() {
    return UserReward.findAll();
  }

  async getByUserId(userId: number) {
    return UserReward.findAll({ where: { userId: userId } });
  }

  async create(userRewardData: any) {
    return UserReward.create(userRewardData);
  }

  async update(id: number, userRewardData: any) {
    const userReward = await UserReward.findByPk(id);
    if (userReward) {
      return userReward.update(userRewardData);
    }
    return null;
  }

  async delete(id: number) {
    const userReward = await UserReward.findByPk(id);
    if (userReward) {
      return userReward.destroy();
    }
    return null;
  }
}

export default new UserRewardRepository();
