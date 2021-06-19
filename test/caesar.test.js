// Write your tests here!

/* Criteria:
    - Capital Letters ignored (== not ===)
    - When encoding, shifts should wrap to beginning of alphabet again (z becomes c)
    - Maintain spaces/non-alphabet symbols in the mesage, before and after encoding.
*/

const caesar = require('../src/caesar')
const expect = require('chai').expect


describe('Caesar', () => {

    it('(thinkful, 3) should be: wklqnixo', () => {
        let actual = caesar.caesar("thinkful", 3)
        let expected = 'wklqnixo'

        expect(actual).to.equal(expected)
    })

    it(`(thinkful, -3) should be: qefkhcri`, () => {
        let actual = caesar.caesar("thinkful", -3)
        let expected = 'qefkhcri'
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, 3, false) should be: thinkful`, () => {
        let actual = caesar.caesar("wklqnixo", 3, false)
        let expected = 'thinkful'
        expect(actual).to.equal(expected)
    })

    it(`(This is a secret message!, 8) should be bpqa qa i amkzmb umaaiom!`, () => {
        let actual = caesar.caesar("This is a secret message!", 8)
        let expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })

    it(`(thinkful) should be: false`, () => {
        let actual = caesar.caesar("thinkful")
        let expected = false
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, 99) should be: false`, () => {
        let actual = caesar.caesar("thinkful", 99)
        let expected = false
        expect(actual).to.equal(expected)
    })

    it(`(thinkful, -26) should be: false`, () => {
        let actual = caesar.caesar("thinkful", -26)
        let expected = false
        expect(actual).to.equal(expected)
    })
})