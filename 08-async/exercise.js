// 08-async — your work goes in this file.

import { findProduct, findAllProducts } from "./fake-db.js";

/**
 * The name of one product, looked up by id.
 * await productName(1) -> "Notebook"
 *
 * @param {number} id
 * @returns {Promise<string>} the product's name
 */
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

/**
 * A price label for one product, looked up by id.
 * await priceLabel(1) -> "Notebook costs 45 EGP"
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function priceLabel(id) {
  const product = await findProduct(id);
  return `${product.name} costs ${product.price} EGP`;
}

/**
 * The name of a product, or "Not found" if there is no such product.
 *
 * await safeProductName(1)  -> "Notebook"
 * await safeProductName(99) -> "Not found"
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

/**
 * The names of every product that is in stock, in the order they come back.
 *
 * await namesInStock() -> ["Notebook", "Pen", "Desk lamp"]
 *
 * @returns {Promise<string[]>}
 */
export async function namesInStock() {
  const products = await findAllProducts();

  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}