import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
    
    it('should return the original number if the value is already a number', () => {
        expect(toNumber(1)).to.equal(1)
        expect(toNumber(0)).to.equal(0)
        expect(toNumber(-1)).to.equal(-1)
        expect(toNumber(0.0)).to.equal(0)
        expect(toNumber(3.14159)).to.equal(3.14159)
        expect(toNumber(-3.14159)).to.equal(-3.14159)
    })

    it('should handle empty input', () => {
        expect(toNumber()).to.deep.equal(NaN)
    })

    it('should convert empty string to 0', () => {
        expect(toNumber('')).to.equal(0)
    })

    it('should convert strings to numbers', () => {
        expect(toNumber('0')).to.equal(0)
        expect(toNumber('3.14159')).to.equal(3.14159)
        expect(toNumber('-3.14159')).to.equal(-3.14159)
    })
        
    it('should handle strings with leading/trailing whitespaces', () => {
        expect(toNumber('   3.14  ')).to.equal(3.14)
        expect(toNumber('   -3.14159   ')).to.equal(-3.14159)
    })

    it('should handle object values with valueOf method', () => {
        const objWithValueOf = { valueOf: () => 42 }
        expect(toNumber(objWithValueOf)).to.equal(42)
    })

    it('should return NaN for symbol values', () => {
        expect(isNaN(toNumber(Symbol.iterator))).to.equal(true)
    })

    it('should convert objects to strings and then to numbers', () => {
        const obj = { toString: () => '123' };
        expect(toNumber(obj)).to.equal(123);
    })
    
    it('should handle binary, octal, and hexadecimal strings', () => {
        expect(toNumber('0b1010')).to.equal(10)
        expect(toNumber('0o777')).to.equal(511)
        expect(isNaN(toNumber('0xabc'))).to.equal(true)
    })

    it('should return NaN for invalid hexadecimal strings', () => {
        expect(isNaN(toNumber('-0x123'))).to.equal(true)
    })

    it('should return NaN for non-numeric strings', () => {
        expect(isNaN(toNumber('abc'))).to.equal(true)
    })

})
