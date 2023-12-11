import { expect } from 'chai'
import words from '../src/words.js'

describe('words', () => {
    
    it('with empty string', () => {
        expect(words('')).to.deep.equal([])
    })

    it('with string of alphabet characters', () => {
        expect(words('abc')).to.deep.equal(['abc'])
    })

    it('with string of random alphabet characters and spaces', () => {
        expect(words('  ab  c d ef      g ')).to.deep.equal(['ab', 'c', 'd', 'ef', 'g'])
    })

    it('with string of numeric characters', () => {
        expect(words('123')).to.deep.equal(['123'])
    })

    it('with string of random numeric characters and spaces', () => {
        expect(words('  1 23   4      567      ')).to.deep.equal(['1', '23', '4', '567'])
    })


    it('with string of random alphanumeric characters and spaces', () => {
        expect(words('  a b 1  cd2  e  3  f gh456  7i8j 90kl m ')).to.deep.equal(['a', 'b', '1', 'cd2', 'e', '3', 'f', 'gh456', '7i8j', '90kl', 'm'])
    })

    it('with string of special characters', () => {
        expect(words('#!?,.')).to.deep.equal([])
    })

    it('with string of random special characters and spaces', () => {
        expect(words(' .  , ?? !!  [ ] # " @£$¤ %&')).to.deep.equal([])
    })

    it('with string of random special characters, alphanumeric characters and spaces', () => {
        expect(words(' a .b  c1, d23?? !!4ef  g[56  h7]8 # " 9@£0i¤jk &lm')).to.be.equal(
            ['a', 'b', 'c1', 'd23', '4ef', 'g', '56', 'h7', '8', '9', '0i', 'jk', 'lm'])
    })

})