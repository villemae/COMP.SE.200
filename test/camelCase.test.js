import { expect } from 'chai'
import camelCase from '../src/camelCase.js'

describe('camelCase', () => {

    it('should work with spaces, dashes and underscores', () => {
        expect(camelCase('  Foo Bar ')).equal('fooBar')
        expect(camelCase('foo-----bar--')).to.equal('fooBar')
        expect(camelCase('_foo___bar_')).to.equal('fooBar')
        expect(camelCase('- _foo- -bar___ ')).to.equal('fooBar')
    })

    it('should work with uppercase string', () => {
        expect(camelCase('LOREM IPSUM')).to.equal('loremIpsum')
    })

    it('should work with lowercase string', () => {
        expect(camelCase('lorem')).to.equal('lorem')
    })

    it('should work with random upper- and lowercase letters in the string', () => {
        expect(camelCase('lOreM IpSUm DOlOR')).to.equal('loremIpsumDolor')
    })

    it('should throw and catch an error with non-string argument', () => {
        const testObject = {name: 'foo bar', age: 313}
        expect(() => camelCase(testObject)).to.throw(TypeError)
    })
})