
const Engineer = require('../lib/Engineer')
const engineer = new Engineer('aida', '3456', 'aida@gmail.com', 'aidtavar');

test('test if we can get the constructor values for the engineer object', () =>{
    expect(engineer.name).toBe('aida');
    expect(engineer.id).toBe('3456')
    expect(engineer.email).toBe('aida@gmail.com')
 
})

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('aida');
})

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('3456');
})

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('aida@gmail.com')
})

test('test if we can get the github usename from the getGitHub() method', () => {
    expect(engineer.getGitHub()).toBe('aidtavar')
})

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
})