require('./jest-xml-matcher')

describe('jest-xml-matcher', () => {
  it('compares same XML structures', () => {
    const xml = `<root><child name="foo" value="bar">test</child></root>`
    expect(xml).toEqualXML(xml)
  })

  it('compares different XML structures', () => {
    const xmlOne = `<root><child name="foo" value="bar">test</child></root>`
    const xmlTwo = '<root><dad name="foo" value="baz">test</dad></root>'
    expect(xmlOne).not.toEqualXML(xmlTwo)
  })

  it('new line are ignored', () => {
    const xmlOne = `<root></root>`
    const xmlTwo = `
    <root>

    </root>

    `

    expect(xmlOne).toEqualXML(xmlTwo)
  })

  it('child order is ignored', () => {
    const xmlOne = `<root><child1></child1><child2></child2></root>`
    const xmlTwo = `<root><child2></child2><child1></child1></root>`

    expect(xmlOne).toEqualXML(xmlTwo)
  })

  it('attribute order is ignored', () => {
    const xmlOne = `<root><child attr1='1' attr2='2'></child></root>`
    const xmlTwo = `<root><child attr2='2' attr1='1'></child></root>`

    expect(xmlOne).toEqualXML(xmlTwo)
  })

  it('whitespaces inside tag are ignored', () => {
    const xmlOne = `<root><child attr1='1' attr2='2'></child></root>`
    const xmlTwo = `<root><child attr1='1'           attr2='2'>              </child></root>`

    expect(xmlOne).toEqualXML(xmlTwo)
  })

  it('whitespaces in content are ignored', () => {
    const xmlOne = `<root>content</root>`
    const xmlTwo = `<root>       content             </root>`

    expect(xmlOne).toEqualXML(xmlTwo)
  })

  it('whitespaces in CDATA ontent are not ignored', () => {
    const xmlOne = `<root><![CDATA[content]]</root>`
    const xmlTwo = `<root><![CDATA[           content            ]]</root>`

    expect(xmlOne).not.toEqualXML(xmlTwo)
  })

  it('different attr values are considered errors', () => {
    const xmlOne = `<root><child attr='1'></child></root>`
    const xmlTwo = `<root><child attr='2'></child></root>`

    expect(xmlOne).not.toEqualXML(xmlTwo)
  })

})
