const Engineer = require('../lib/Engineer')

test("gets engineer's info as an object", ()=>{
    const engineer = new Engineer('channing', '12345', 'channing@gmail.com', "clarkspencerc");
    expect(engineer.name).toBe('channing'); 
    expect(engineer.id).toEqual('12345'); 
    expect(engineer.email).toBe('channing@gmail.com'); 
    expect(engineer.github).toEqual(expect.stringContaining('clarkspencerc'));
    });

test("gets engineer's github via getGithub()", () => {
    const engineer = new Engineer('channing', '12345', 'channing@gmail.com', "clarkspencerc");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("gets employee's role", () => {
    const engineer = new Engineer('channing', '12345', 'channing@gmail.com');

    expect(engineer.getRole()).toEqual('engineer');
}); 