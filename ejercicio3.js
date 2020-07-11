const arr1 = [3, 2, 5, 9, 1, 3]

const getNumber = (arr, k) => {
  arr.sort((a,b)=> b - a)
  return arr[k-1]
}

console.log(getNumber(arr1, 1))