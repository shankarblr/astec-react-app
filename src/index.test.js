import expect from 'expect';
import { describe } from 'mocha';

describe('Our First test',()=>{
    it('should pass',()=>{
        expect(true).toEqual(true);
    });
});

describe("This is my 2nd test case",() =>{
    it("Should fail",()=> {
        expect(10).toEqual(10);
    });

});