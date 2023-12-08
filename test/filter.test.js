import { expect } from 'chai'
import filter from '../src/filter.js'

describe('filter function', () => {

  it('should filter elements based on the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
    const result = filter(users, ({ active }) => active)

    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }])
  })

  it('should handle an empty array', () => {
    const result = filter([], () => true)

    expect(result).to.deep.equal([])
  })

  it('should handle a predicate that filters nothing', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ]

    const result = filter(users, () => false)

    expect(result).to.deep.equal([])
  })

  it('should handle a predicate that filters everything', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ]

    const result = filter(users, () => true)

    expect(result).to.deep.equal(users)
  })

})
