import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";


import path from "path";
import articleRoutes from './routes/v1/articleRoutes';
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
// Routes
app.get('/', (req, res) => {
    res.send("Welcome");
});
app.use('/api/v1', articleRoutes);
// Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ 
        statusCode: statusCode, 
        message: err.message
    });
});

export default app;