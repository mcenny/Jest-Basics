const reverseString = require('./reverseString');

test('reverses Dave to return evad', () => {
  expect(reverseString('Dave')).toBe('evaD');
});
