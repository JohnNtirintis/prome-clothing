import express, {Request, Response} from 'express';
import { url } from 'inspector';
import path from 'path';

const app = express();
const port = 3000; // Maybe 5000?

app.set('views', path.join(__dirname, '../views')); 
app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static('public'));


// Sample test data
const products = [
    { id: 1, name: "Black T-Shirt", price: 20, image: "/images/black-tshirt.jpg" },
    { id: 2, name: "Blue Jeans", price: 30, image: "/images/blue-jeans.jpg" },
    // Add more products if needed
];

// Routes
app.get('/', (req: Request, res: Response) =>  {
    res.render('index')
});

app.get('/shop', (req: Request, res: Response) =>  {
    res.render('shop', {products})
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
