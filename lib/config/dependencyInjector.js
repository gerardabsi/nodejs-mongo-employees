'use strict';

const serviceLocator = require('../serviceLocator');
const config = require('./configs')();

serviceLocator.register('express', () => {
    return require('express');
});

serviceLocator.register('mongoose', () => {
    return require('mongoose');
});

serviceLocator.register('body-parser', () => {
    return require('body-parser');
});

serviceLocator.register('logger', () => {
    return require('../logger').create(config.application_logging);
});

serviceLocator.register('employeeService', (serviceLocator) => {
    const log = serviceLocator.get('logger');
    const mongoose = serviceLocator.get('mongoose');
    const EmployeeService = require('../app/services/employeeService');

    return new EmployeeService(log, mongoose);
});

serviceLocator.register('employeeController', (serviceLocator) => {
    const log = serviceLocator.get('logger');
    const employeeService = serviceLocator.get('employeeService');
    const EmployeeController = require('../app/controllers/employeeController');
    return new EmployeeController(log, employeeService);
});

serviceLocator.register('employeeRouter', () => {
    const express = serviceLocator.get('express');
    const employeeController = serviceLocator.get('employeeController');
    const employeeRouter = require('../server/routers/employeeRouter');
    return new employeeRouter(express, employeeController)
});

serviceLocator.register('server', () => {
    const express = serviceLocator.get('express');
    const server = require('../server/server');
    const serverRouters = require('../server/serverRouters');
    const config = require('./configs')();
    return new server(express, config.app.port, serverRouters);
});

module.exports = serviceLocator;
