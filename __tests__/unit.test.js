// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('checks my phone number', () => {
  expect(isPhoneNumber("(661)979-4321")).toBe(true);
});
test('checks arbitrary phone number', () => {
  expect(isPhoneNumber("303-819-4829")).toBe(true);
});
test('checks 8 digit phone number', () => {
  expect(isPhoneNumber("404-142-342")).toBe(false);
});
test('checks letter input', () => {
  expect(isPhoneNumber("42d-234-3fa3")).toBe(false);
});

// isEmail
test('checks my email', () => {
  expect(isEmail("dlt002@ucsd.edu")).toBe(true);
});
test('checks email w/ capitals', () => {
  expect(isEmail("jonnydoe@gmail.com")).toBe(true);
});
test('checks w/o @ symbol', () => {
  expect(isEmail("korea.com")).toBe(false);
});
test('checks without .___', () => {
  expect(isEmail("chickpea@gmail")).toBe(false);
});

// isStrongPassword
test('checks arbitrary strong password', () => {
  expect(isStrongPassword("dylan_tran")).toBe(true);
});
test('exactly 15 character', () => {
  expect(isStrongPassword("abcdefghijklmno")).toBe(true);
});
test('invalid characters', () => {
  expect(isStrongPassword("n~od/aw'c")).toBe(false);
});
test('first character is a number', () => {
  expect(isStrongPassword("1234567890")).toBe(false);
});

// isDate
test('my birthday', () => {
  expect(isDate("8/16/2004")).toBe(true);
});
test('double digit month, 0 initial digit day', () => {
  expect(isDate("10/04/2004")).toBe(true);
});
test('invalid format', () => {
  expect(isDate("5-23-1234")).toBe(false);
});
test('letter input', () => {
  expect(isDate("fe/29/2045")).toBe(false);
});

// isHexColor
test('blue', () => {
  expect(isHexColor("#0000FF")).toBe(true);
});
test('3 character', () => {
  expect(isHexColor("#b58")).toBe(true);
});
test('invalid character count', () => {
  expect(isHexColor("#0000000")).toBe(false);
});
test('invalid letter', () => {
  expect(isHexColor("#0000JK")).toBe(false);
});
