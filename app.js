'use strict';

require('dotenv').config();
const config = require('./lib/config/configs')();
const serviceLocator = require('./lib/config/dependencyInjector');

const Database = require('./lib/config/database');
new Database(config.mongo.port, config.mongo.host, config.mongo.name);

serviceLocator.get('server');

