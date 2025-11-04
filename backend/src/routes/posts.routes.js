import express from "express";
import { createPost, listPosts, getPostById } from "../controllers/posts.controller.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", listPosts);
router.get("/:id", getPostById);

export default router;
