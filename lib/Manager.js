const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    }

    getRole() {
        //This function would return the response of the user
        console.log(`Manager`);
    }
};

module.exports = Manager;