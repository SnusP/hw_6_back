import { Reward } from "../../models/rewards/Reward";

class RewardRepository {
  async getAll() {
    return Reward.findAll();
  }

  async getById(id: number) {
    return Reward.findByPk(id);
  }

  async create(rewardData: any) {
    return Reward.create(rewardData);
  }

  async update(id: number, rewardData: any) {
    const reward = await Reward.findByPk(id);
    if (reward) {
      return reward.update(rewardData);
    }
    return null;
  }

  async delete(id: number) {
    const reward = await Reward.findByPk(id);
    if (reward) {
      return reward.destroy();
    }
    return null;
  }
}

export default new RewardRepository();
