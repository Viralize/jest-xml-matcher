const { EquivalentXml } = require('./xml-difference-checker')

expect.extend({
  toEqualXML (actual, expected) {

    const doc1 = EquivalentXml.xml(actual.trim());
    const doc2 = EquivalentXml.xml(expected.trim());

    if (EquivalentXml.isEquivalent(doc1, doc2)) {
      return {
        message: () => `XML structures are equal`,
        pass: true
      }
    } else {
      return {
        message: () => `Expected ${actual} to be equivalent to ${expected}`,
        pass: false
      }
    }
  }
})
