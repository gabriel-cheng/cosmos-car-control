import IndexController from "../controllers/index.controller.js";
import { Router } from "express";
const index_controller = new IndexController();
const index_router = Router();

index_router.get("/", index_controller.index);

export default index_router;
