const reverse = require('./index').reverse;
const sum = require('./index').sum;
const sumOfValuesInObject = require('./index').sumOfValuesInObject;
const flattenArray = require('./index').flattenArray;
const countInstances = require('./index').countInstances;

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('sum function exists', () => {
  expect(sum).toBeDefined();
});

test('Sum of an array', () => {
  expect(sum([1,2,3])).toEqual(6);
});

test('sum of values in object array', () => {
  expect(sumOfValuesInObject([{x:1},{x:2},{x:3}])).toEqual(6);
});

test('flatten an array', () => {
  expect(flattenArray([[1,2],[3,4],[5,6]])).toEqual([1,2,3,4,5,6]);
});

test('count instances', () => {
  expect(countInstances(['mohan','kumar','mohan'])).toEqual({'mohan':2, 'kumar':1});
});