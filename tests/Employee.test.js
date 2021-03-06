const Employee = require('../lib/Employee.js');

describe("Child", () => {
    // Begin with employee object //
    test('Create employee object', () => {
        const emp = new Employee();
        expect(typeof (emp)).toEqual('object');
    });
    // Name //
    test('Create employee name', () => {
        const name = 'Dwight Schrute';
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    });
    // ID //
    test('Create employee ID', () => {
        const testValue = '12345';
        const emp = new Employee('Dwight Schrute', testValue);
        expect(emp.id).toEqual(testValue);
    });
    // Email //
    test('Create employee email address', () => {
        const testValue = 'dwight.schrute@dundermifflin.com';
        const emp = new Employee('Dwight Schrute', '12345', testValue);
        expect(emp.email).toEqual(testValue);
    });

    // Get information //
    // Name //
    test('Gets employee name', () => {
        const testValue = 'Dwight Schrute';
        const emp = new Employee(testValue);
        expect(emp.getName()).toEqual(testValue);
    });
    // ID //
    test('Gets employee ID', () => {
        const testValue = '12345';
        const emp = new Employee('Dwight Schrute', testValue);
        expect(emp.getId()).toEqual(testValue);
    });
    // Email //
    test('Gets employee email address', () => {
        const testValue = 'dwight.schrute@dundermifflin.com';
        const emp = new Employee('Dwight Schrute', '12345', testValue);
        expect(emp.getEmail()).toEqual(testValue);
    });

    // Get role to equal the values ^ //
    test('Gets employee role', () => {
        const testValue = 'Employee';
        const emp = new Employee('Dwight Schrute', '12345', 'dwight.schrute@dundermifflin.com');
        expect(emp.getRole()).toEqual(testValue);
    });
});