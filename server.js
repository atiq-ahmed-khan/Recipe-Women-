const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const userRoutes = require('./routes/user');
const recipeRoutes = require('./routes/recipe');
const productRoutes = require('./routes/product');
const forumRoutes = require('./routes/forum'); 

app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/forum', forumRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
