import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce((max, order) => Math.max(max, order.price), 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({ student: order.student, item: order.item }))
  );
}
