
const Manager = require('../lib/Manager');
const manager = new Manager('aida', '54321', 'aida@gmail.com', '657');

test('test if we can get the contructor values for the manager object', () => {

    expect(manager.name).toBe('aida');
    expect(manager.id).toBe('54321');
    expect(manager.email).toBe('aida@gmail.com');
    expect(manager.officeNumber).toBe('657');
})

test('test if we can get the name from the getName method', () => {
    expect(manager.getName()).toBe('aida');
});


test('test if we can get the id from the getId method', () => {
    expect(manager.getId()).toBe('54321');
});


test('test if we can get the email from the getEmail method', () => {
    expect(manager.getEmail()).toBe('aida@gmail.com');
});


test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('657');
});

test('test if we can get the role from the getRole method', () => {
    expect(manager.getRole()).toBe('Manager');
});
