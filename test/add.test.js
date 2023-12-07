import { expect } from 'chai'
import add from '../src/add.js'

describe('add', () => {

    it('should work with positive numbers', () => {
        expect(add(2,4)).to.equal(6)
    })

    it('with negative arguments should return negative value', () => {
        expect(add(-2, -1)).to.equal(-3)
    })

    it('should work with negative and positive numbers', () => {
        expect(add(10, -1)).to.equal(9)
    })

    it('with zeros should return zero', () => {
        expect(add(0, 0)).to.equal(0)
    })

    it('with empty arguments should return zero', () => {
        expect(add()).to.be.equal(0)
    })

    it('should work with floats', () => {
        expect(add(2.3, 5.78)).to.be.closeTo(8.08, 0.0001)
    })

    it('should throw an error with non-numeric arguments', () => {
        expect(() => add('qwerty', 1)).to.throw
    })
})