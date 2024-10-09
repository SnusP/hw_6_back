import { Router } from "express";
import ProductRoutes from "./products/ProductRoutes";
import TagRoutes from "./tags/TagRoutes";
import PromotionRoutes from "./promotions/PromotionRoutes";
import OrderRoutes from "./orders/OrderRoutes";
import productTagRoutes from "./productTags/ProductTagRoutes";
import RewardRoutes from "./rewards/RewardRoutes";
import UserRewardRoutes from "./rewards/UserRewardRoutes";

const router = Router();

router.use("/products", ProductRoutes);
router.use("/tags", TagRoutes);
router.use("/promotions", PromotionRoutes);
router.use("/orders", OrderRoutes);
router.use("/productTags", productTagRoutes);
router.use("/rewards", RewardRoutes);
router.use("/userRewards", UserRewardRoutes);

export default router;
