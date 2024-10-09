import { Router } from "express";
import PromotionController from "../../controllers/promotions/PromotionController";

const router = Router();

router.get("/", PromotionController.getAll);
router.get("/:id", PromotionController.getById);
router.post("/", PromotionController.create);
router.put("/:id", PromotionController.update);
router.delete("/:id", PromotionController.delete);

export default router;
