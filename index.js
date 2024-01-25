class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      console.error("El codigo ya existe. Debe ser unico");
      return;
    }

    const product = new Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const foundProduct = this.products.find((product) => product.id === id);

    if (foundProduct) {
      return foundProduct;
    } else {
      console.error("Producto no encontrado.");
      return null;
    }
  }

  displayProducts() {
    this.products.forEach((product) => console.log(product.toString()));
  }
}

const productManager = new ProductManager();

console.log("Productos al inicio", productManager.getProduct());

productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

console.log(
  "\nProductos despues de agregar uno:",
  productManager.getProducts()
);

productManager.addProduct(
  "Otro producto",
  "Otra descripción",
  150,
  "Otra imagen",
  "abc123",
  30
);

console.log(
  "\nProductos después de intentar agregar un producto duplicado:",
  productManager.getProducts()
);

const productIdToFind = 1;
const foundProduct = productManager.getProductById(productIdToFind);

if (foundProduct) {
  console.log(`\nProducto encontrado por ID (${productIdToFind}):`);
  console.log(foundProduct);
} else {
  console.error(`\nProducto no encontrado por ID (${productIdToFind}).`);
}
