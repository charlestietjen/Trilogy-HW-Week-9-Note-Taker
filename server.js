const { application } = require('express');
const express = require('express');
const log = console.log;

const { error, success } = require("./utils/logFuncs");

const PORT = process.env.port || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(success('Server started on port ' + PORT));
});