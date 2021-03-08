// Create variable //
const Manager = require('../lib/Manager');

// Begin with manager object //
test('Create manager object', () => {
    const mgr = new Manager();
    expect(typeof (mgr)).toEqual('object');
});
// Name //
test('Create manager name', () => {
    const name = 'Michael Scott';
    const mgr = new Manager(name);
    expect(mgr.name).toEqual(name);
});
// ID //
test('Create manager ID', () => {
    const testValue = '13570';
    const mgr = new Manager('Michael Scott', testValue);
    expect(mgr.id).toEqual(testValue);
});
// Email //
test('Create manager email address', () => {
    const testValue = 'michael.scott@dundermifflin.com';
    const mgr = new Manager('Michael Scott', '13570', testValue);
    expect(mgr.email).toEqual(testValue);
});
// Office Phone Number //
test('Create office phone number', () => {
    const testValue = '(778) 668-7216';
    const mgr = new Manager('Michael Scott', '13570', 'michael.scott@dundermifflin.com', testValue);
    expect(mgr.officeNumber).toEqual(testValue);
});


// Get information //
test('Get office phone number', () => {
    const testValue = '(612) 517-6775)';
    const mgr = new Manager('Michael Scott', '13570', 'michael.scott@dundermifflin.com', testValue);
    expect(mgr.getOfficeNumber()).toEqual(testValue);
});

test('Gets manager role', () => {
    const testValue = 'Manager';
    const mgr = new Manager('Michael Scott', '13570', 'michael.scott@dundermifflin.com', '(612) 517-6775)');
    expect(mgr.getRole()).toEqual(testValue);
});