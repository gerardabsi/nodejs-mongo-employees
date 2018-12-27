'use strict';

const serviceLocator = require('../serviceLocator');
const logger = serviceLocator.get('logger');

class App {
    constructor(express, port, serverRouters) {
        this.express = express;
        this.port = port;
        this.serverRouters = serverRouters;
        this.initializeServer(this.port);
    }

    initializeServer(port) {
        const bodyParser = serviceLocator.get('body-parser');
        const app = this.express();
        app.use(bodyParser.json());
        app.listen(port, () => {
            logger.info(`server started on port ${port}`);
        });
        const router = new this.serverRouters();
        router(app);
        return app;
    }
}

module.exports = App;
