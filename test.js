const { tambah, kurang } = require('./index');

test('2 + 3 harus 5', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('5 - 3 harus 2', () => {
  expect(kurang(5, 3)).toBe(3);
});