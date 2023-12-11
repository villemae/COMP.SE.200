import { expect } from 'chai'
import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
    
    it('with integer', () => {
        expect(toNumber(1)).to.equal(1)
        expect(toNumber(0)).to.equal(0)
        expect(toNumber(-1)).to.equal(-1)
    })

    it('with float', () => {
        expect(toNumber(0.0)).to.equal(0)
        expect(toNumber(3.14159)).to.equal(3.14159)
        expect(toNumber(-3.14159)).to.equal(-3.14159)
    })

    it('with no parameters', () => {
        expect(toNumber()).to.deep.equal(NaN)
    })

    it('with empty string', () => {
        expect(toNumber('')).to.equal(0)
    })

    it('with number string', () => {
        expect(toNumber('0')).to.equal(0)
        expect(toNumber('3.14159')).to.equal(3.14159)
        expect(toNumber('-3.14159')).to.equal(-3.14159)
    })

})