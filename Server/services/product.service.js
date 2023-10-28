const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };

    this.products.push(newProduct);
    return {
      message: 'Producto creado correctamente',
      product: newProduct,
    };
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: 'Lista de productos',
          count: this.products.length,
          products: this.products,
        });
        reject(new Error('Error al obtener la lista de productos'));
      }, 3000);
    });
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('Este producto no existe');
    }
    if (product.isBlock) {
      throw boom.conflict('Este producto esta bloqueado');
    }
    return {
      message: 'Producto encontrado',
      product: product,
    };
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Este producto no existe');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };

    return {
      message: 'Producto actualizado correctamente',
      product: this.products[index],
    };
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Este producto no existe');
    }

    this.products.splice(index, 1);
    return {
      message: 'Producto eliminado correctamente',
      id,
    };
  }
}

module.exports = ProductsService;
