import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Product from '../entity/Product';

class ProductController {
  public async list(req: Request, res: Response) {
    try {
      res.status(200);
      res.json(await getRepository(Product).find());
    } catch (e) {
      res.status(500);
      res.json(e.message);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      res.status(201);
      res.json(getRepository(Product).save(req.body));
    } catch (e) {
      res.status(400);
      res.json(e.message);
    }
  }
}

export default new ProductController();
