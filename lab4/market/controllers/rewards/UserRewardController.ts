import { Request, Response } from "express";
import UserRewardService from "../../services/rewards/UserRewardService";

class UserRewardController {
  private async checkUserOwnership(
    req: Request,
    res: Response,
    userRewardId: number
  ) {
    const userId = parseInt(req.headers["user-id"] as string, 10);
    const userRewards = await UserRewardService.getByUserId(userId);

    const userReward = userRewards.find(
      (reward: any) => reward.id === userRewardId
    );

    if (!userReward) {
      res.status(404).json({ error: "User reward not found" });
      return null;
    }

    return userReward;
  }

  getAll = async (req: Request, res: Response) => {
    const userId = parseInt(req.headers["user-id"] as string, 10);
    const userRewards = await UserRewardService.getByUserId(userId);
    res.json(userRewards);
  };

  getByUserId = async (req: Request, res: Response) => {
    const userId = parseInt(req.headers["user-id"] as string, 10);
    const userRewards = await UserRewardService.getByUserId(userId);
    res.json(userRewards);
  };

  create = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      body.userId = req.headers["user-id"];
      const newUserReward = await UserRewardService.create(body);
      res.status(201).json(newUserReward);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    const rewardId = parseInt(req.params.id, 10);
    const userReward = await this.checkUserOwnership(req, res, rewardId);
    if (userReward) {
      const updatedUserReward = await UserRewardService.update(
        rewardId,
        req.body
      );
      res.json(updatedUserReward);
    }
  };

  delete = async (req: Request, res: Response) => {
    const rewardId = parseInt(req.params.id, 10);
    const userReward = await this.checkUserOwnership(req, res, rewardId);
    if (userReward) {
      await UserRewardService.delete(rewardId);
      res.status(204).send();
    }
  };
}

export default new UserRewardController();
