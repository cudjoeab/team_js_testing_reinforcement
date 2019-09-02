const teamObj = require('./team.js');

test('when input is supplied, an object should be returned', () => {
    const result = new teamObj('Optimus Prime', 10, 0); 


    expect(result).toBeInstanceOf(Object);
    expect(result.teamName).toEqual('Optimus Prime');
    expect(result.level).toEqual(10);
    expect(result.points).toEqual(0); 

});




