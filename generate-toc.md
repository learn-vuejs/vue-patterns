# To generate table of contents

```js
var toc = '';

document.getElementById('readme').querySelectorAll('h2, h3:not(.Box-title)')
.forEach((elem) => {
  const { tagName, innerText } = elem;
  const anchor = elem.querySelector('a').getAttribute('href');

  if (tagName === 'H2') {
    toc += `- [${innerText}](${anchor})\n`;
  }

  if (tagName === 'H3') {
    toc += `  - [${innerText}](${anchor})\n`;
  }
});

console.log(toc);
```
