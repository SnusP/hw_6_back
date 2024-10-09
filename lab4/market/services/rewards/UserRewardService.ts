import UserRewardRepository from "../../repositories/rewards/UserRewardRepository";

class UserRewardService {
  async getAll() {
    return UserRewardRepository.getAll();
  }

  async getByUserId(userId: number) {
    return UserRewardRepository.getByUserId(userId);
  }

  async create(userRewardData: any) {
    return UserRewardRepository.create(userRewardData);
  }

  async update(id: number, userRewardData: any) {
    return UserRewardRepository.update(id, userRewardData);
  }

  async delete(id: number) {
    return UserRewardRepository.delete(id);
  }
}

export default new UserRewardService();
