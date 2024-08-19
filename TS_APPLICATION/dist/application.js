"use strict";
// Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Order class
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
// Base class for Payment
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
// CreditCardPayment class
class CreditCardPayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }
    processPayment() {
        console.log(`Processing credit card payment of $${this.amount} using card number ${this.cardNumber}`);
    }
}
// PayPalPayment class
class PayPalPayment extends Payment {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }
    processPayment() {
        console.log(`Processing PayPal payment of $${this.amount} using PayPal account ${this.email}`);
    }
}
// Customer class
class Customer {
    constructor(name) {
        this.name = name;
    }
    placeOrder(order, payment) {
        console.log(`${this.name} has placed an order.`);
        console.log(`Total amount to pay: $${order.calculateTotal()}`);
        payment.processPayment();
    }
}
// --- Usage ---
// Create products
const product1 = new Product('Laptop', 1500);
const product2 = new Product('Headphones', 200);
// Create an order and add products
const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
// Choose payment method
const payment = new CreditCardPayment(order.calculateTotal(), '1234-5678-9012-3456');
// Create a customer and place the order
const customer = new Customer('Alice');
customer.placeOrder(order, payment);
