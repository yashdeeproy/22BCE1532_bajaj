const express = require('express');
const cors = require('cors');

const bfhlRoutes = require('./routes/bfhlRoutes');
const mainRoutes = require('./routes/index');
const { errorHandler, notFoundHandler } = require('./middleware/validation');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', mainRoutes);
app.use('/', bfhlRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Test the API at: http://localhost:${PORT}/bfhl`);
});

module.exports = app;