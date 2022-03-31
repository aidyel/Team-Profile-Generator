
const Employee = require('../lib/Employee');
const employee = new Employee('aida', '123456', 'aida@gmail.com');

test('test if we can get the constructor values for the employe object', () => {
    expect(employee.name).toBe('aida');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('aida@gmail.com');
})

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('aida');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('aida@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
})