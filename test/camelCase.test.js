import { expect } from 'chai'
import camelCase from '../src/camelCase.js'

describe('camelCase', () => {

    it('with spaces', () => {
        expect(camelCase('  Foo Bar ')).equal('fooBar')
    })

    it('with dashes', () => {
        expect(camelCase('foo-----bar--')).to.equal('fooBar')
    })

    it('with underscores', () => {
        expect(camelCase('_foo___bar_')).to.equal('fooBar')
    })

    it('with dashes, underscores and spaces', () => {
        expect(camelCase('- _lorem- -ipsum___ ')).to.equal('loremIpsum')
    })

    it('with all uppercase', () => {
        expect(camelCase('LOREM IPSUM')).to.equal('loremIpsum')
    })

    it('with all lowercase', () => {
        expect(camelCase('lorem')).to.equal('lorem')
    })

    it('with random upper- and lowercase', () => {
        expect(camelCase('lOreM IpSUm DOlOR')).to.equal('loremIpsumDolor')
    })

    it('with non-string value', () => {
        const testObject = {name: 'foo bar', age: 313}
        expect(() => camelCase(testObject)).to.throw(TypeError)
    })
})