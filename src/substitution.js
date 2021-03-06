// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alpha, encode = true) {
    if(!alpha) return false
    if(alpha.length !== 26) return false
    if(Array.from(new Set(alpha)).length !== 26) return false
    
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    alpha = alpha.split('')
    input = input.toLowerCase()
    let map = {}
    let decode = {}
    let result = ''
    abc.split('').forEach((letter,index) => {
      map[letter] = alpha[index]
      decode[alpha[index]] = letter
    })

    if(!encode) map = decode
    input.split('').forEach(input => {
      result += input === ' ' ? ' ' : map[input]
    })
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
