import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";

dotenv.config();

/**
 * App variables
 */

if (!process.env.PORT) {
  console.error("Please define PORT");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);
const app = express();

/**
 * App configs
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/items", itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Launch server
 */

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/**
 * Webpack HMR
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
