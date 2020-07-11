const arr1 = [3, 2, 5, 9, 1, 3]

const getUnique = (arr) => {
  const newArr = arr.filter((e, i, self) => {
    return i === self.indexOf(e)
})
return newArr
}

console.log(getUnique(arr1))