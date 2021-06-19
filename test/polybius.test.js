// Write your tests here!

/* Criteria:
    - When encoding, i and j should translate to 42
    - When decoding, translates 42 to (i/j)
    - Ignoring capial letters ( == not ===)
    - Maintain spaces, before and after encoding/decoding
 */


const polybius = require('../src/polybius.js')
const expect = require('chai').expect

describe('Polybius', () => {
    it('(thinkful) should be: 4432423352125413', () => {
        let actual = polybius.polybius("thinkful")
        let expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })

    it(`(Hello world) should be: 3251131343 2543241341`, () => {
        let actual = polybius.polybius("Hello world")
        let expected = '3251131343 2543241341'
        expect(actual).to.equal(expected)
    })

    it(`(3251131343 2543241341, false) should be: hello world`, () => {
        let actual = polybius.polybius("3251131343 2543241341", false)
        let expected = "hello world"
        expect(actual).to.equal(expected)
    })

    it(`(4432423352125413, false) should be: th(i/j)nkful`, () => {
        let actual = polybius.polybius("4432423352125413", false)
        let expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })

    it(`(44324233521254134, false) should be: false`, () => {
        let actual = polybius.polybius("44324233521254134", false)
        let expected = false
        expect(actual).to.equal(expected)
    })

})
