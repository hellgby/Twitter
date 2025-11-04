import express from "express";
import { createComment, listCommentsByPost } from "../controllers/comments.controller.js";

const router = express.Router();

router.post("/", createComment);
router.get("/:postId", listCommentsByPost);

export default router;
