const express = require('express');
const mongosh = require('mongosh');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongosh.connect('mongodb://localhost/groceryCart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for items in the cart
const cartItemSchema = new mongosh.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const CartItem = mongosh.model('CartItem', cartItemSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/cart/add', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    const newItem = new CartItem({
      name,
      price,
      quantity,
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
