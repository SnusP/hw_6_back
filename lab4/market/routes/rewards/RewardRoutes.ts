import { Router } from "express";
import RewardController from "../../controllers/rewards/RewardController";

const router = Router();

router.get("/", RewardController.getAll);
router.get("/:id", RewardController.getById);
router.post("/", RewardController.create);
router.put("/:id", RewardController.update);
router.delete("/:id", RewardController.delete);

export default router;
