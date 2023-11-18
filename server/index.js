import express from "express";

import dotenv from "dotenv";
import router from "./router/router.js";

import cors from "cors";
dotenv.config();
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
