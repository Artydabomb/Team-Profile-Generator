// Create variable //
const Engineer = require('../lib/Engineer');

// Begin with engineer object //
test('Create engineer object', () => {
    const eng = new Engineer();
    expect(typeof (eng)).toEqual('object');
});
// Name //
test('Create engineer name', () => {
    const name = 'Pamela Beesly';
    const eng = new Engineer(name);
    expect(eng.name).toEqual(name);
});
// ID //
test('Create engineer ID', () => {
    const testValue = '67890';
    const eng = new Engineer('Pamela Beesley', testValue);
    expect(eng.id).toEqual(testValue);
});
// Email //
test('Create engineer email address', () => {
    const testValue = 'Pamela.Beesley@dundermifflin.com';
    const eng = new Engineer('Pamela Beesly', '67890', testValue);
    expect(eng.email).toEqual(testValue);
});
// GitHub //
test('Create engineer github account', () => {
    const testValue = 'pambeesly';
    const eng = new Engineer('Pamela Beesly', '67890', 'Pamela.Beesley@dundermifflin.com', testValue);
    expect(eng.github).toEqual(testValue);
});


// Get information //
test('Get GitHub username', () => {
    const testValue = 'github';
    const eng = new Engineer('Pamela Beesly', '67890', 'Pamela.Beesley@dundermifflin.com', testValue);
    expect(eng.getGithub()).toEqual(testValue);
});

test('Gets employee role', () => {
    const testValue = 'Engineer';
    const eng = new Engineer('Pamela Beesly', '67890', 'Pamela.Beesley@dundermifflin.com', 'pambeesly');
    expect(eng.getRole()).toEqual(testValue);
});