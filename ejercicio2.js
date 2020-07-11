let result = 0
const summ = (n, m) => {
  for(let i = n; i <= m; i++){
    result += i
  }
  return result
}

console.log(summ(2, 8))