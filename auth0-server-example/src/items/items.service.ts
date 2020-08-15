import { Item } from "./item.interface";
import { Items } from "./items.interface";
import { uuid } from "uuidv4";

/**
 * Tmp in memory store
 */

const [item1Id, item2Id, item3Id] = [uuid(), uuid(), uuid()];

const items: Items = {
  [item1Id]: {
    id: item1Id,
    name: "Item 1",
    price: 1.99,
    description: "Item1 desc",
  },
  [item2Id]: {
    id: item2Id,
    name: "Item 2",
    price: 2.99,
    description: "Item2 desc",
  },
  [item3Id]: {
    id: item3Id,
    name: "Item 3",
    price: 3.99,
    description: "Item3 desc",
  },
};

export const findAll = async (): Promise<Items> => {
  return items;
};

export const find = async (id: string): Promise<Item> => {
  const item = items[id];

  if (item) {
    return item;
  }

  throw new Error(`Item id: ${id} not found`);
};

export const create = async (item: Item): Promise<Item> => {
  const id = uuid();
  items[id] = {
    ...item,
    id,
  };
  return items[id];
};

export const update = async (item: Item): Promise<Item> => {
  if (items[item.id]) {
    items[item.id] = item;
    return item;
  }

  throw new Error(`Item id: ${item.id} not found`);
};

export const remove = async (id: string): Promise<string> => {
  if (items[id]) {
    delete items[id];
    return id;
  }

  throw new Error(`Item id: ${id} not found`);
};
