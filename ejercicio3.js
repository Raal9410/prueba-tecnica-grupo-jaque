const getNumber = (arr, k) => {
  arr.sort((a,b)=> b - a)
  return arr[k-1]
}

module.exports = getNumber
