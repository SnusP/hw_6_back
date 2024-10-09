import { Request, Response } from "express";
import RewardService from "../../services/rewards/RewardService";

class RewardController {
  async getAll(req: Request, res: Response) {
    const rewards = await RewardService.getAll();
    res.json(rewards);
  }

  async getById(req: Request, res: Response) {
    const reward = await RewardService.getById(parseInt(req.params.id, 10));
    res.json(reward);
  }

  async create(req: Request, res: Response) {
    const newReward = await RewardService.create(req.body);
    res.status(201).json(newReward);
  }

  async update(req: Request, res: Response) {
    const updatedReward = await RewardService.update(
      parseInt(req.params.id, 10),
      req.body
    );
    res.json(updatedReward);
  }

  async delete(req: Request, res: Response) {
    await RewardService.delete(parseInt(req.params.id, 10));
    res.status(204).send();
  }
}

export default new RewardController();
