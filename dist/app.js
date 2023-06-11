"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000; // Maybe 5000?
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, '../static')))
app.use(express_1.default.static('public'));
// Sample test data
const products = [
    { id: 1, name: "Black T-Shirt", price: 20, image: "/images/black-tshirt.jpg" },
    { id: 2, name: "Blue Jeans", price: 30, image: "/images/blue-jeans.jpg" },
    // Add more products if needed
];
// Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/shop', (req, res) => {
    res.render('shop', { products });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
