import { expect } from 'chai'
import capitalize from '../src/capitalize.js'

describe('capitalize', () => {

    it('with empty string as an argument should return an empty string', () => {
        expect(capitalize('')).to.equal('')
    })

    it('with no arguments should return an empty string', () => {
        expect(capitalize()).to.equal('')
    })

    it('should work with uppercase string', () => {
        expect(capitalize('LOREM IPSUM')).to.equal('Lorem ipsum')
    })

    it('should work with lowercase string', () => {
        expect(capitalize('lorem')).to.equal('Lorem')
    })

    it('should work with random upper- and lowercase letters in the string', () => {
        expect(capitalize('lOreM IpSUm DOlOR')).to.equal('Lorem ipsum dolor')
    })

    it('should throw an error with non-string argument', () => {
        const testObject = {name: 'foo bar', age: 313}
        const testNumber = 85.2
        expect(() => capitalize(testObject)).to.throw()
        expect(() => capitalize(testNumber)).to.throw()
    })
})