'use strict';

class EmployeeController {

    constructor(log, userService) {
        this.log = log;
        this.userService = userService;
    }

    async addEmployee(req, res) {
        try {
            const {body} = req;
            const result = await this.userService.createEmployee(body);

            res.send(result);
        } catch (err) {
            this.log.error(err.message);
            res.send(err);
        }
    }

    async getEmployee(req, res) {
        try {
            const username = req.query.username;
            const result = await this.userService.getEmployee(username);

            res.send(result);
        } catch (err) {
            this.log.error(err.message);
            res.send(err);
        }
    }
}

module.exports = EmployeeController;
