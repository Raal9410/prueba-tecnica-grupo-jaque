const sum = (n, m) => {
    let result = 0
  for(let i = n; i <= m; i++){
    result += i
  }
  return result
}

module.exports = sum