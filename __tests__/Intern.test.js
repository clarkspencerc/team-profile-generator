const Intern = require('../lib/Intern'); 


test("gets intern's info as an object", () => {
    const intern = new Intern('channing', '12345', 'channing@gmail.com', 'byu');
    expect(intern.name).toBe('channing');
    expect(intern.id).toEqual('12345');
    expect(intern.email).toBe('channing@gmail.com');
    expect(intern.school).toEqual('byu');
});

test("gets intern's school via getSchool()", () => {
    const intern = new Intern('channing', '12345', 'channing@gmail.com', 'byu');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get Intern's role", () => {
    const intern = new Intern('channing', '12345', 'channing@gmail.com', 'byu');

    expect(intern.getRole()).toEqual('intern');
}); 