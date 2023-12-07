import { expect } from 'chai'
import chunk from '../src/chunk.js'

describe('chunk', () => {
    const empty_array = []
    const array_with_1 = [1]
    const array_with_6 = [0, 1, 2, 3, 4, 5]
    const array_with_15 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

    it('with empty array as argument should return empty array', () => {
        expect(chunk(empty_array)).to.be.empty
    })

    it('should work with array of one element', () => {
        const result = chunk(array_with_1, 1)
        expect(result).to.have.lengthOf(1)
        expect(result).to.deep.include([1])
    })

    it('should return chunks of length one when no second argument is given', () => {
        const result1 = chunk(array_with_6)
        const result2 = chunk(array_with_15)
        expect(result1).to.have.lengthOf(6)
        expect(result2).to.have.lengthOf(15)  
    })

    it('should work with array of multiple numbers', () => {
        const result = chunk(array_with_6, 4)
        console.log(result)
        expect(result).to.have.lengthOf(2)
        expect(result).to.deep.equal([[0, 1, 2, 3], [4, 5]])
    })

    it('should work with array of multiple strings', () => {
        const result = chunk(array_with_15, 3)
        console.log(result)
        expect(result).to.have.lengthOf(5)
        expect(result).to.deep.equal([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o']])
    })

    it('with non-array argument should throw an error', () => {
        expect(() => chunk('string')).to.throw()
    })

})