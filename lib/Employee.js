class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`${this.name}`);
        //return back to index.js
    }
    getId() {
        console.log(`${this.id}`);
    }
    getEmail() {
        console.log(`${this.email}`);
    }
    getRole() {
        console.log(`Employee`);
    }
}
module.exports = Employee;