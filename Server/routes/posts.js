import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js" ;
import { verifyToken} from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); // sending all feeds to user in home page
router.get("/:userId/post", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;