'use strict';

const serviceLocator = require('../serviceLocator');

class AppRoutes {
    constructor(app) {
        this.app = app;
        console.log('came here');
        return function initialize(app) {
            const employeeRouter = serviceLocator.get('employeeRouter');
            app.use('/employee', employeeRouter);
        }
    }
}

module.exports = AppRoutes;
