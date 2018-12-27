'use strict';

module.exports = () => ({
    app: {
        port: process.env.APP_PORT || 8000,
    },
    mongo: {
        port: process.env.DB_PORT || 27017,
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME || 'EmployeesDI'
    },
    application_logging: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || 'info',
        console: process.env.LOG_ENABLE_CONSOLE || true
    }
});