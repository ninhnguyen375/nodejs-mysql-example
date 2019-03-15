import knex from 'knex';
import knexConfig from '../models/knexConfigDB';
const DB = knex(knexConfig);

export const getCategories = async (req, res) => {
  try {
    const categories = await DB('Categories').select();
    res.json(categories);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const insertCategory = async (req, res) => {
  try {
    const myInsert = await DB('Categories').insert(req.body);
    return res.send(myInsert);
  } catch (err) {
    return res.status(400).send(err);
  }
};
