const peek = (stack) => {
    return stack[stack.length - 1]
  }
  
const isBalanced = (str) => {
    let opening = '(['
    let closing = ')]'
    let stack = []
    for(let i =0; i < str.length; i++){
      let char = str.charAt(i)
      if(opening.includes(char)){
          stack.push(char)
      } else if(closing.includes(char)){
          if(stack.length === 0){
              return false
          } else {
              let first = peek(stack)
              if(opening.indexOf(first) === closing.indexOf(char)){
                  stack.pop()
              } else {
                  return false
              }
          }
      }
    }
    return stack.length === 0
  }

module.exports = isBalanced