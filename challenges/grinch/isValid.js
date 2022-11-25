export function isValid(letter) {
  for (let word of letter) {
    if(word === '}' || word === '{'  || word === '[' || word === ']' ){
        return false
    }
  }
  return letter[0] === '(' && letter[letter.length-1] === ')'
}