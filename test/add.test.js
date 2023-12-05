import { expect } from 'chai'
import add from '../src/add.js'

describe('add', () => {

    it('with positive numbers', () => {
        expect(add(2,4)).to.equal(6)
    })

    it('with negative numbers to be negative', () => {
        expect(add(-2, -1)).to.equal(-3)
    })

    it('with negative and positive numbers', () => {
        expect(add(10, -1)).to.equal(9)
    })

    it('with zeros to be zero', () => {
        expect(add(0, 0)).to.equal(0)
    })

    it('with empty to be default value (0)', () => {
        expect(add()).to.be.equal(0)
    })

    it('with floats', () => {
        expect(add(2.3, 5.78)).to.be.closeTo(8.08, 0.0001)
    })

    it('with non-numeric value', () => {
        expect(() => add('qwerty', 1)).to.throw()
    })
})