import { expect } from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo:', () => {

  it('should return the original value if not null or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo('hello', 'default')).to.equal('hello');
    expect(defaultTo(true, false)).to.equal(true);
    expect(defaultTo([], 'empty list')).to.deep.equal([])
  });

  it('should return the default value if value is null or undefined', () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
    expect(defaultTo(null, 'default')).to.equal('default');
    expect(defaultTo(undefined, null)).to.equal(null);
  });

  it('should return the default value if value is NaN', () => {
    expect(defaultTo(NaN, 'default')).to.equal('default');
  });

  it('should handle different types of default values', () => {
    expect(defaultTo('value', 10)).to.equal('value');
    expect(defaultTo(null, 0)).to.equal(0);
    expect(defaultTo(undefined, true)).to.equal(true);
  });

  it('should handle complex objects as values and default values', () => {
    const obj = { prop: 'value' };
    const defaultValue = { prop: 'default' };
    expect(defaultTo(obj, defaultValue)).to.equal(obj);
  });

});
