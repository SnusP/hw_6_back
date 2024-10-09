import { Request, Response } from "express";
import OrderService from "../../services/orders/OrderService";

class OrderController {
  private checkOrderOwnership = async (
    req: Request,
    res: Response,
    orderId: number
  ) => {
    const userId = parseInt(req.headers["user-id"] as string, 10);
    const order = await OrderService.getById(orderId);

    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return null;
    }

    if (order.userId !== userId) {
      res
        .status(403)
        .json({ error: "You do not have permission to access this order" });
      return null;
    }

    return order;
  };

  getAll = async (req: Request, res: Response) => {
    const userId = parseInt(req.headers["user-id"] as string, 10);
    const orders = await OrderService.getAll(userId);
    res.json(orders);
  };

  getById = async (req: Request, res: Response) => {
    const orderId = parseInt(req.params.id, 10);
    const order = await this.checkOrderOwnership(req, res, orderId);
    if (order) {
      res.json(order);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      body.userId = req.headers["user-id"];
      const newOrder = await OrderService.create(body);
      res.status(201).json(newOrder);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    const orderId = parseInt(req.params.id, 10);
    const order = await this.checkOrderOwnership(req, res, orderId);
    if (order) {
      const updatedOrder = await OrderService.update(orderId, req.body);
      res.json(updatedOrder);
    }
  };

  delete = async (req: Request, res: Response) => {
    const orderId = parseInt(req.params.id, 10);
    const order = await this.checkOrderOwnership(req, res, orderId);
    if (order) {
      await OrderService.delete(orderId);
      res.status(204).send();
    }
  };
}

export default new OrderController();
