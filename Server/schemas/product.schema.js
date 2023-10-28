const Joi = require('joi');

const id = Joi.string().uuid().message('Ingresa un id valido');
const name = Joi.string()
  .min(3)
  .max(50)
  .message('Ingresa un nombre de producto valido');
const price = Joi.number().integer().min(10).max(10000).message({
  'number.base': 'Ingresa un precio valido',
  'number.empty': 'Ingresa un precio valido',
  'number.min': 'Ingresa un precio mínimo de $10.00',
  'number.max': 'Ingresa un precio máximo de $10000.00',
});
const image = Joi.string().uri().message({
  'string.uri': 'Ingresa una url valida',
  'string.empty': 'Ingresa una url valida',
});
const isBlock = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  isBlock: isBlock.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  isBlock: isBlock,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
