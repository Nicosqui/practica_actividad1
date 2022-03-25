const express = require('express');
const personRouter = require('./person.router')

function routerApi(app) {
    const router = express.Router();
    /* Endpoint: http://localhost:5000/api/v1 */
    app.use('/api/v1', router);
    /* Endpoint: http://localhost:5000/api/v1/people 
     GET: Endpoint: http://localhost:5000/api/v1/people
     GET{:id}: Endpoint: http://localhost:5000/api/v1/people/:personId 
     POST: Endpoint: http://localhost:5000/api/v1/people/person 
     PUT: Endpoint: http://localhost:5000/api/v1/people/:personId*/
    router.use('/people', personRouter);
}

module.exports = routerApi;