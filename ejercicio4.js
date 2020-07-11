const array = require('./tests/testArray')
const getUnique = (arr) => {
  const newArr = arr.filter((e, i, self) => {
    return i === self.indexOf(e)
})
return newArr
}
module.exports = getUnique