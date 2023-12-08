import { expect } from 'chai'
import clamp from '../src/clamp.js'

describe('clamp', () => {

    it('should return the lower bound when the number is below given bounds', () => {
        expect(clamp(-10, 0, 5)).to.equal(0)
    })

    it('should return the upper bound when the number is above given bounds', () => {
        expect(clamp(10, 0, 5)).to.equal(5)
    })
    
    it('should return itself when the number is between the given bounds', () => {
        expect(clamp(3, 0, 5)).to.equal(3)
    })

    it('should throw an error when upper bound is smaller than lower bound', () => {
        expect(() => clamp(0, 10, -10)).to.throw()
    })

    it('should throw an error when wrong number of arguments are given', () => {
        expect(() => clamp()).to.throw()
        expect(() => clamp(0)).to.throw()
        expect(() => clamp(0, -5)).to.throw()
    })

    it('should throw an error when non-numeric arguments are given', () => {
        expect(() => clamp('string', '4', 3)).to.throw()
    })
    
})