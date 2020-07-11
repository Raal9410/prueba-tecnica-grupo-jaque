const testArray = require('./testArray')
const newArr = [ 3, 2, 5, 9, 1 ]
const sum = require('../ejercicio2')
const getNumber = require('../ejercicio3')
const getUnique = require('../ejercicio4')
const isBalanced = require('../ejercicio5')

test('add numbers starting on n and ending with m', () => {
    expect(sum(2,8)).toBe(35)
})

test('get unique elements of an array', () => {
    expect(getUnique(testArray)).toEqual(newArr)
})

test('get selected greater number of an array', () => {
    expect(getNumber(testArray, 2)).toBe(testArray[1])
})

test('return true if string is balanced', () => {
    expect(isBalanced('([])')).toBe(true)
})

test('return false if string is not balanced', () => {
    expect(isBalanced('()(([)}')).toBe(false)
})