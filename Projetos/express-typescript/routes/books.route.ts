import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksController = new BooksController();

const router = Router();

router.get('/', booksController.getAll);


export default router;
