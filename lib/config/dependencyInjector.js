'use strict';

const serviceLocator = require('../serviceLocator');

serviceLocator.register('express', () => {
    return require('express');
});

serviceLocator.register('mongoose', () => {
    return require('mongoose');
});

module.exports = serviceLocator;
