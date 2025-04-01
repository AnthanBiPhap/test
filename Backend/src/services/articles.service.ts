import articleModel from "../models/article.model";

const getAllArticles = async (query: any) => {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    const articles = await articleModel.find().skip(skip).limit(limit);
    const count = await articleModel.countDocuments();
    return { articles, totalCount: count };
};

const getArticleById = async (id: string) => {
    const article = await articleModel.findById(id);
    if (!article) {
        throw new Error("Article not found");
    }
    return article;
};

const createArticle = async (payload: any) => {
    const newArticle = new articleModel(payload);
    await newArticle.save();
    return newArticle;
};

const deleteArticleById = async (id: string) => {
    const article = await articleModel.findByIdAndDelete(id);
    if (!article) {
        throw new Error("Article not found or already deleted");
    }
    return article;
};

export default {
    getAllArticles,
    getArticleById,
    createArticle,
    deleteArticleById
};
