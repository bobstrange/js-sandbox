import express, { Request, Response } from "express";
import * as ItemService from "./items.service";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items = await ItemService.findAll();
    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const item = await ItemService.find(req.params.id);
    res.status(200).send(item);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item = req.body.item;
    const created = await ItemService.create(item);
    res.status(201).send(created);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

itemsRouter.put("/", async (req: Request, res: Response) => {
  try {
    const item = req.body.item;
    const updated = await ItemService.update(item);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await ItemService.remove(id);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
