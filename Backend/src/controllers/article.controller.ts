import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import articlesService from '../services/articles.service';
import { sendJsonSuccess, httpStatus } from '../helpers/reponse.helper';
import articleModel from '../models/article.model';

const getAllArticles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articles = await articlesService.getAllArticles(req.query); 
        sendJsonSuccess(res, articles, httpStatus.OK.message, httpStatus.OK.statusCode);
    } catch (error) {
        next(error);
    }
}

const getArticleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const article = await articlesService.getArticleById(id);
        sendJsonSuccess(res, article, httpStatus.OK.message, httpStatus.OK.statusCode);
    } catch (error) {
        next(error);
    }
}

const createArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("Request body:", req.body);  // Kiểm tra dữ liệu đầu vào
        const article = new articleModel(req.body);
        await article.save();
        sendJsonSuccess(res, article, httpStatus.CREATED.message, httpStatus.CREATED.statusCode);
    } catch (error) {
        console.error("Error saving article:", error);
        next(error);
    }
};



const deleteArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedArticle = await articlesService.deleteArticleById(id);
        sendJsonSuccess(res, deletedArticle, httpStatus.OK.message, httpStatus.OK.statusCode);
    } catch (error) {
        next(error);
    }
}



export default {
    getAllArticles,
    getArticleById,
    createArticle,
    deleteArticle,
};
