const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { Router } = require('express');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: function (origin, callback){
        callback(null, true);
    },
    metheods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
    optionSuccessStatus: 200,
    exposedHeaders: ["Content-Disposition"]
};

app.use(cors(corsOptions));

app.use('/project', express.static('project'), cors());

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});