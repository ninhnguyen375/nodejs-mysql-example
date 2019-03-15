import knex from 'knex';
import knexConfig from '../models/knexConfigDB';
const DB = knex(knexConfig);

export const getProducts = async (req, res) => {
  try {
    const products = await DB('Products').select();
    res.json(products);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const insertProducts = async (req, res) => {
  try {
    const myInsert = await DB('Products').insert(req.body);
    return res.send(myInsert);
  } catch (err) {
    return res.status(400).send(err);
  }
};
