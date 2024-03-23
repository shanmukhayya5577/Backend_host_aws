const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('swagger-jsdoc');
const cors = require('cors');
const app = express();


//importing app middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Enabling Cors Middleware
app.use(cors());

//connected BD
require('dotenv').config();
require('./DB');

// Define Swagger options
const options = {
    swaggerDefinition: {
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for your Express.js application',
        },
    },
    host: 'localhost:5700', // Your server's hostname
    basePath: '/', // The base path on which the API is served, which is optional.
    apis: ['./routes/routes.js'], // Path to the API routes
};

// Initialize Swagger-jsdoc
const specs = swaggerDoc(options);

// Serve Swagger UI at /api-docs endpoint
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));


//imporing routing middleware
const router = require('./routes/routes');
app.use('/',router);

app.get('/',(req,res,next)=>{
    res.send('Empty path, so page not found')
});

module.exports = app;