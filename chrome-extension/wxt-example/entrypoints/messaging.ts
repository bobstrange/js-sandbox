import { defineExtensionMessaging } from "@webext-core/messaging";
import { Todo } from "./types";

interface ProtocolMap {
  getTodo(id: number): Todo;
}

export const { sendMessage, onMessage } =
  defineExtensionMessaging<ProtocolMap>();
