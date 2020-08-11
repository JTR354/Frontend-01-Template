import assert from 'assert'
import htmlParser, {EOF} from '../src/parser'

it('base', function () {
  const doc = htmlParser('<div></div>')
  console.log(doc)
  assert.equal(doc.children[0].tagName, 'div');
});

it('attribute', function() {
  const doc = htmlParser('<div id="btn" class="cls">123</div>')
  
})

it('attribute', function() {
  try {
    const doc = htmlParser('<div id="btn" class="cls" data=`jk&lt`><h1>6666</h1></div>')

  } catch(e) {

  }
  
})


it('Tag start end doesnt match!', function() {
  try {
    const doc = htmlParser(`<div id="btn" class="cls c2" k=12 name ls=ava ><h1>6666</h1></vdiv>`)
  } catch(e) {
    assert(e.message, 'Tag start end doesnt match!')
  }
})

it('This is an eof-before-tag-name parse error', function() {
  try {
    const doc = htmlParser('<div id="btn" class="cls"' + EOF)
  } catch(e) {
    assert(e.message, 'This is an eof-before-tag-name parse error')
  }
})
it('This is a missing-end-tag-name parse error.', function() {
  try {
    const doc = htmlParser('<div></div>>' + EOF)
  } catch(e) {
    assert(e.message, 'This is a missing-end-tag-name parse error.')
  }
})

it('selfClosingStartTag', function() {
  const doc = htmlParser(`<div><img src="a.jpg" alt=kls class='12'/>  </div>`)
})

it('attribute2', function() {
  const doc = htmlParser(`<div    i =  123123    ><img src="a.jpg" alt=kls class='12'/>  </div>`)
})

it('This is a missing-whitespace-between-attributes parse error.', function() {
  try {
    htmlParser(`<div    i =  123123jas=123    ><img src="a.jpg" alt=kls class='12'/>  </div>`)
  } catch(e) {
    assert(e.message, 'This is a missing-whitespace-between-attributes parse error.')
  }
})

it('This is a missing-whitespace-between-attributes parse error.', function() {
  try {
    htmlParser(`<div ></div>`)
  } catch(e) {
    assert(e.message, 'This is a missing-whitespace-between-attributes parse error.')
  }
})

it('unQuotedAttributeValue???error', function() {
  try {
    htmlParser('<div id=778 name=889>span</div')
  } catch(e) {
    assert(e.message, 'This is an eof-in-tag parse error.')
  }
})


it('This is a missing-attribute-value parse error.', function() {
  try {
    htmlParser('<div id=778 name=  >span</div')
  } catch(e) {
    assert(e.message, 'This is a missing-attribute-value parse error.')
  }
})

it('tagName', function() {
  try{
    htmlParser(`<div =`)
    // htmlParser('/>')
  } catch(e) {
    assert(e.message, 'This is an unexpected-equals-sign-before-attribute-name parse error.')
  }
  
})

it('This is a missing-whitespace-between-attributes parse error.', function() {
  try {
    htmlParser('<html lang=123jt=asd/>')
  } catch (e) {
    assert(e.message, 'This is a missing-whitespace-between-attributes parse error.')
  }
})

it('tagOpen', function() {
  try {
    htmlParser('<div   ></>')
  } catch(e) {
    // todo
  }
 
})

it('singleQuotedAttributeValue', function() {
  try {
    htmlParser(`<div kk=a&b att="b=1&c=2" btt='a=9&b=90'></div>`)
    htmlParser(`<div kk=a&b  btt='a=9&b=90' att="b=1&c=2"   ></div>`)
    htmlParser(`<div  att="b=1&c=2" btt='a=9&b=90' kk=a&b  ></div>`)
  } catch(e) {

  }
})

it('This is an eof-in-tag parse error. ', function() {
  htmlParser(`<div id/>`)
})

it('This is an invalid-first-character-of-tag-name parse error.', function() {
  try{
    htmlParser(`<div/`)
  } catch(e) {
    assert(e.message, 'This is an invalid-first-character-of-tag-name parse error.')
  }
})