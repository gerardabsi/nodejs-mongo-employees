'use strict';

class EmployeeService {

    constructor(log, mongoose) {
        this.log = log;
        this.mongoose = mongoose;
    }

    async createEmployee(body) {
        const Employees = this.mongoose.model('Employees');
        const employee = await Employees.findOne({username: body.username});

        if (employee) {
            return new Error(
                'User with username already exists'
            );
        }

        let newEmployee = new Employees(body);
        newEmployee = await newEmployee.save();

        this.log.info('User Created Successfully');
        return newEmployee;
    }

    async getEmployee(username) {
        console.log('came here');
        const Employees = this.mongoose.model('Employees');
        const user = await Employees.findOne({username});

        if (!user) {
            return new Error(
                `User with username - ${username} does not exists`
            );
        }

        this.log.info('User fetched Successfully');
        return user;
    }

}

module.exports = EmployeeService;
