// Create variable //
const Intern = require('../lib/Intern');

// Begin with intern object //
test('Create intern object', () => {
    const int = new Intern();
    expect(typeof (int)).toEqual('object');
});
// Name //
test('Create intern name', () => {
    const name = 'James Halpert';
    const int = new Intern(name);
    expect(int.name).toEqual(name);
});
// ID //
test('Create intern ID', () => {
    const testValue = '24680';
    const int = new Intern('James Halpert', testValue);
    expect(int.id).toEqual(testValue);
});
// Email //
test('Create intern email address', () => {
    const testValue = 'james.halpert@dundermifflin.com';
    const int = new Intern('James Halpert', '24680', testValue);
    expect(int.email).toEqual(testValue);
});
// School //
test('Create intern school', () => {
    const testValue = 'UC Davis';
    const int = new Intern('James Halpert', '24680', 'james.halpert@dundermifflin.com', testValue);
    expect(int.school).toEqual(testValue);
});


// Get information //
test('Get school name', () => {
    const testValue = 'UC Davis';
    const int = new Intern('James Halpert', '24680', 'james.halpert@dundermifflin.com', testValue);
    expect(int.getSchool()).toEqual(testValue);
});

test('Gets intern role', () => {
    const testValue = 'Intern';
    const int = new Intern('James Halpert', '24680', 'james.halpert@dundermifflin.com', 'UC Davis');
    expect(int.getRole()).toEqual(testValue);
});