const Manager = require('../lib/Manager')


test("gets manager's office number ", () => {
    const manager = new Manager('channing', '12345', 'channing@gmail.com', '1');
    expect(manager.officeNumber).toBe('1'); 
    
}); 

test("gets employee's role", () => {
    const manager = new Manager('channing', '12345', 'channing@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
}); 

