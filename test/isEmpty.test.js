import { expect } from 'chai'
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {

    it('should return true for null', () => {
        expect(isEmpty(null)).to.equal(true)
    })

    it('should return true for true', () => {
        expect(isEmpty(true)).to.equal(true)
    })
    it('should return true for 1', () => {
        expect(isEmpty(1)).to.equal(true)
    })

    it('should return false for non-empty array', () => {
        expect(isEmpty([1, 2, 3])).to.equal(false)
    })
    
    it('should return false for non-empty string', () => {
        expect(isEmpty('abc')).to.equal(false)
    })

    it('should return false for non-empty object', () => {
        expect(isEmpty({ 'a': 1 })).to.equal(false)
    })

    it('should return true for empty array-like object', () => {
        expect(isEmpty([])).to.equal(true)
    })

    it('should return true for empty string', () => {
        expect(isEmpty('')).to.equal(true)
    })

    it('should return true for empty arguments object', () => {
        expect(isEmpty((function() { return arguments; })())).to.equal(true)
    })
    
    it('should return true for empty buffer', () => {
        expect(isEmpty(Buffer.from(''))).to.equal(true)
    })

    it('should return true for empty typed array', () => {
        expect(isEmpty(new Uint8Array())).to.equal(true)
    })

    it('should return true for empty map', () => {
        expect(isEmpty(new Map())).to.equal(true)
    })

    it('should return true for empty set', () => {
        expect(isEmpty(new Set())).to.equal(true)
    })

    it('should return true for empty object with no own properties', () => {
        expect(isEmpty({})).to.equal(true)
    })
  
})