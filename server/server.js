const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3005;

app.use(express.static('../client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
