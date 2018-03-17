import hello from './hello';

describe('hello', () => {
  it('returns full name', () => {
    expect(hello('Jean', 'Toledo')).toBe('Hello World Jean Toledo');
  });
});
