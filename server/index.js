const config = require('./config/config');

const express = require('express');
const app = express();

require('./config/express')(app);
require('./config/database')();

const routes = require('./routes');
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on port http://localhost:${config.PORT}...`));
