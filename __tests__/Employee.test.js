const Employee = require('../lib/Employee.js'); 


test('crate an employee object', ()=> {
    const employee = new Employee('channing', '12345', 'channing@gmail.com'); 
    
    expect(employee.name).toBe('channing');
    expect(employee.id).toBe('12345'); 
    expect(employee.email).toBe('channing@gmail.com');  
});

test("gets employee's name", () => {
    const employee = new Employee('channing', '12345', 'channing@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString())); 
}); 

test("gets employee's id", () => {
    const employee = new Employee('channing', '12345', 'channing@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
}); 

test("gets employee's email", () => {
    const employee = new Employee('channing', '12345', 'channing@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
}); 

test("gets employee's role", () => {
    const employee = new Employee('channing', '12345', 'channing@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
}); 