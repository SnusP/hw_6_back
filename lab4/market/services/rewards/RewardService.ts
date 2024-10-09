import RewardRepository from "../../repositories/rewards/RewardRepository";

class RewardService {
  async getAll() {
    return RewardRepository.getAll();
  }

  async getById(id: number) {
    return RewardRepository.getById(id);
  }

  async create(rewardData: any) {
    return RewardRepository.create(rewardData);
  }

  async update(id: number, rewardData: any) {
    return RewardRepository.update(id, rewardData);
  }

  async delete(id: number) {
    return RewardRepository.delete(id);
  }
}

export default new RewardService();
