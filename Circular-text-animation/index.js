import { GUI } from 'https://cdn.skypack.dev/dat.gui';

const canTrig = CSS.supports('(top: calc(sin(1) * 1px))');
const HEADING = document.querySelector('h1');
const CTRL = new GUI();

const OPTIONS = {
  SPACING: 1.3,
  SIZE: 1,
  TEXT: 'Made BY GEVSTACK • ' };


const genCode = () => `
.ring {
  --char-count: ${HEADING.children.length};
  --inner-angle: calc((360 / var(--char-count, ${HEADING.children.length})) * 1deg);
  --character-width: ${OPTIONS.SPACING.toFixed(1)};
  --radius: calc((var(--character-width, ${OPTIONS.SPACING.toFixed(1)}) / ${canTrig ? 'sin(var(--inner-angle))' : Math.sin(
360 / HEADING.children.length / (180 / Math.PI))
}) * -1ch);
  --font-size: ${OPTIONS.SIZE.toFixed(1)}rem;
  font-family: monospace;
  text-transform: uppercase;
  font-size: calc(var(--font-size, 1) * 1rem);
  animation: rotation 6s infinite linear;
  position: relative;
}
.char {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:
    translate(-50%, -50%)
    rotate(calc(var(--inner-angle) * var(--char-index)))
    translateY(var(--radius));
}
@keyframes rotation {
  to {
    rotate: -360deg;
  }
}
  `.trim();

const CSS_CODE = Object.assign(document.createElement('li'), {
  className: 'code-block',
  innerHTML: `<pre><code>${genCode()}</code></pre>` });


const HTML_CODE = Object.assign(document.createElement('li'), {
  className: 'code-block',
  innerHTML: `<pre><code>${HEADING.outerHTML}</code></pre>` });


const onUpdate = () => {
  // Make the ring text
  const text = OPTIONS.TEXT;
  // 1. Take the text and split it into spans...
  const chars = text.split('');
  HEADING.innerHTML = '';
  HEADING.style.setProperty('--char-count', chars.length);

  for (let c = 0; c < chars.length; c++) {
    HEADING.innerHTML += `<span aria-hidden="true" class="char" style="--char-index: ${c};">${chars[c]}</span>`;
  }
  HEADING.innerHTML += `<span class="sr-only">${OPTIONS.TEXT}</span>`;
  // Set the styles
  HEADING.style.setProperty('--font-size', OPTIONS.SIZE);
  HEADING.style.setProperty('--character-width', OPTIONS.SPACING);
  HEADING.style.setProperty(
  '--radius',
  canTrig ?
  'calc((var(--character-width) / sin(var(--inner-angle))) * -1ch' :
  `calc(
      (${OPTIONS.SPACING} / ${Math.sin(
  360 / HEADING.children.length / (180 / Math.PI))
  })
      * -1ch
    )`);


  if (HEADING.children.length > 3) {
    document.documentElement.style.setProperty(
    '--buffer',
    canTrig ?
    `calc((${OPTIONS.SPACING} / sin(${
    360 / HEADING.children.length
    }deg)) * ${OPTIONS.SIZE}rem)` :
    `calc((${OPTIONS.SPACING} / ${Math.sin(
    360 / HEADING.children.length / (180 / Math.PI))
    }) * ${OPTIONS.SIZE}rem)`);

  }
  CSS_CODE.innerHTML = `<pre><code>${genCode()}</code></pre>`;
  // HTML_CODE.innerText = `<pre><code>${HEADING.outerHTML}</code></pre>`
};

CTRL.add(OPTIONS, 'SPACING', 0.5, 2, 0.1).name('Spacing (ch)').onChange(onUpdate);
CTRL.add(OPTIONS, 'SIZE', 0.25, 2, 0.1).name('Size (rem)').onChange(onUpdate);
CTRL.add(OPTIONS, 'TEXT').name('Text').onChange(onUpdate);
// const MARKUP = CTRL.addFolder('HTML')
const STYLES = CTRL.addFolder('CSS');

STYLES.domElement.querySelector('ul').appendChild(CSS_CODE);
// MARKUP.domElement.querySelector('ul').appendChild(HTML_CODE)

// const CODE = document.querySelector('#code')

onUpdate();