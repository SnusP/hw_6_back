import { Router } from "express";
import UserRewardController from "../../controllers/rewards/UserRewardController";

const router = Router();

router.get("/", UserRewardController.getAll);
router.get("/user/:userId", UserRewardController.getByUserId);
router.post("/", UserRewardController.create);
router.put("/:id", UserRewardController.update);
router.delete("/:id", UserRewardController.delete);

export default router;
