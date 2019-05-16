const EquivalentXml = require('./xml-difference-checker').EquivalentXml

const previousValue = `<test><deep>test</deep></test>`
const nextValue = `<parent>test</parent>`

describe('xml-difference-checker', () => {
//   it('formats input values', () => {
//     diffChecker = new DiffChecker(previousValue, nextValue)

//     var doc1 = EquivalentXml.xml(previousValue);
//     var doc2 = EquivalentXml.xml(nextValue);
//     EquivalentXml.isEquivalent(doc1,doc2);

//     const expectedNextValue = `<parent>test</parent>`
//     const expectedPreviousValue = `<test>
//   <deep>test</deep>
// </test>`

//     expect(diffChecker.formattedPreviousValue).toEqual(expectedPreviousValue)
//     expect(diffChecker.formattedNextValue).toEqual(expectedNextValue)
//   })

  describe('#hasDifferences', () => {
    it('returns false if there are differences between xml structures', () => {
      var doc1 = EquivalentXml.xml(previousValue);
      var doc2 = EquivalentXml.xml(nextValue);
      expect(EquivalentXml.isEquivalent(doc1,doc2)).toBe(false)
    })

    it('returns true if xml structures are same', () => {
      var doc1 = EquivalentXml.xml(previousValue);
      var doc2 = EquivalentXml.xml(previousValue);
      expect(EquivalentXml.isEquivalent(doc1,doc2)).toBe(true)
    })
  })

  // describe('#formattedDifferences', () => {
  //   it('returns string of formatted differences', () => {
  //     diffChecker = new DiffChecker(previousValue, nextValue)

  //     expect(diffChecker.formattedDifferences).toContain(`<parent>test</parent>`)
  //   })
  // })

  // describe('#differences', () => {
  //   it('returns differences between xml structures as array of diff objects', () => {
  //     diffChecker = new DiffChecker(previousValue, nextValue)

  //     expect(diffChecker.differences).toEqual([
  //       {
  //         count: 3,
  //         added: undefined,
  //         removed: true,
  //         value: `<test>\n  <deep>test</deep>\n</test>`
  //       },
  //       {
  //         count: 1,
  //         added: true,
  //         removed: undefined,
  //         value: `<parent>test</parent>`
  //       }
  //     ])
  //   })
  // })
})
