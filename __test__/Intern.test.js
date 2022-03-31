
const Intern = require('../lib/Intern')
const intern = new Intern('scott', '7890', 'scott@gmail.com', 'Nashville');

test('test if we can get the constructor values for the intern object', () =>{
    expect(intern.name).toBe('scott');
    expect(intern.id).toBe('7890')
    expect(intern.email).toBe('scott@gmail.com')
    expect(intern.school).toBe('Nashville');
})

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('scott');
})

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('7890');
})

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('scott@gmail.com')
})

test('test if we can get the school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Nashville')
})

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
})