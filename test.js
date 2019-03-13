const invokeDeep = require('./index.js');

const testObject = {
  a: null,
  b: new Date(),
  c: /regex/,
  d: new String('string'),
  e: responder('e'),
  f: [
    responder('f[0]'),
    [ responder('f[1][0]') ],
  ],
  g: {
    a: responder('g.a'),
    b: { a: responder('g.b.a') },
  },
};

function responder(value) {
  return function() {
    return value;
  }
}

test('invokeDeep', function() {
  const result = invokeDeep(testObject);

  expect(result.e).toBe('e');
  expect(result.f[0]).toBe('f[0]');
  expect(result.f[1][0]).toBe('f[1][0]');
  expect(result.g.a).toBe('g.a');
  expect(result.g.b.a).toBe('g.b.a');
});
