import express from "express";
import articlesController from "../../controllers/article.controller"; 

const router = express.Router();

// Route để lấy tất cả bài viết
router.get("/articles", articlesController.getAllArticles);

// Route để lấy bài viết theo ID
router.get("/articles/:id", articlesController.getArticleById);

// Route để tạo bài viết mới
router.post("/articles", articlesController.createArticle);

// Route để xóa bài viết theo ID
router.delete("/articles/:id", articlesController.deleteArticle);

export default router;
