
const Engeneer = require('../lib/Engeneer')
const engeneer = new Engeneer('aida', '3456', 'aida@gmail.com', 'aidtavar');

test('test if we can get the constructor values for the engeneer object', () =>{
    expect(engeneer.name).toBe('aida');
    expect(engeneer.id).toBe('3456')
    expect(engeneer.email).toBe('aida@gmail.com')
 
})

test('test if we can get the name from the getName() method', () => {
    expect(engeneer.getName()).toBe('aida');
})

test('test if we can get the id from the getId() method', () => {
    expect(engeneer.getId()).toBe('3456');
})

test('test if we can get the email from the getEmail() method', () => {
    expect(engeneer.getEmail()).toBe('aida@gmail.com')
})

test('test if we can get the github usename from the getGitHub() method', () => {
    expect(engeneer.getGitHub()).toBe('aidtavar')
})

test('test if we can get the role from the getRole() method', () => {
    expect(engeneer.getRole()).toBe('Engeneer');
})