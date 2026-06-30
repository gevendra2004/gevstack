import { GUI } from 'https://esm.sh/dat.gui@0.7.9';
import Color from 'https://esm.sh/color@4.2.3';
import gsap from 'https://esm.sh/gsap@3.12.5';
import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';

const ROOT_NODE = document.querySelector('#app');

console.clear();

const PHRASES = [
'Wherever you go,<br/>the cursor follows',
'One event listener powers it all',
'Lean into CSS<br/>and the cascade',
'One attribute,<br/>make it glow'];


const LABELS = [
'Background',
'Border Mask',
'Shine Mask'];


const PATHS = [
'M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z',
'M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z',
'M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z',
'M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'];


// Not using React? Jus' take this and drop it into a <script>
const useGlowPointer = () => {
  const UPDATE = React.useCallback(({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty(
    '--xp',
    (x / window.innerWidth).toFixed(2));

    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty(
    '--yp',
    (y / window.innerHeight).toFixed(2));

  }, []);
  React.useEffect(() => {
    document.body.addEventListener('pointermove', UPDATE);
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, []);
  return null;
};

const App = () => {
  const setGlow = useGlowPointer();
  const controller = React.useRef(null);
  const cardsFolder = React.useRef(null);
  const sceneFolder = React.useRef(null);
  const explodingRef = React.useRef(null);
  const exploder = React.useRef(null);
  const spreader = React.useRef(null);
  const spreadingRef = React.useRef(null);
  const [cards, setCards] = React.useState([]);
  const [exploding, setExploding] = React.useState(false);
  const [spreading, setSpreading] = React.useState(false);

  const removeCard = React.useCallback(
  id => {
    if (explodingRef.current) return null;
    cardsFolder.current.removeFolder(
    cardsFolder.current.__folders[`Card (${id})`]);

    setCards(cards => {
      return cards.filter(card => card.id !== id);
    });
  },
  [cards]);


  const addCard = () => {
    setCards(cards => {
      if (cards.length === 4) return cards;
      const newCard = {
        id: crypto.randomUUID(),
        spread: gsap.utils.random(0, 1000),
        outer: true,
        control: true,
        base: gsap.utils.random(0, 359) };

      // Add a folder to the controller when GUI is available
      const CARD_CONFIG = {
        removeCard: () => removeCard(newCard.id),
        ...newCard };

      const UPDATE = () => {
        setCards(cards => {
          return cards.map((card, index) => {
            if (card.id === newCard.id)
            return {
              ...newCard,
              ...CARD_CONFIG };

            return card;
          });
        });
      };
      if (cardsFolder.current) {
        const newCardFolder = cardsFolder.current.addFolder(
        `Card (${newCard.id})`);

        // Add characteristics for each card here
        newCardFolder.
        add(CARD_CONFIG, 'base', 0, 359, 1).
        name('Base Hue').
        onChange(UPDATE);
        newCardFolder.
        add(CARD_CONFIG, 'spread', 0, 1000, 1).
        name('Hue Spread').
        onChange(UPDATE);
        newCardFolder.
        add(CARD_CONFIG, 'outer').
        name('Outer Glow').
        onChange(UPDATE);
        newCardFolder.
        add(CARD_CONFIG, 'control').
        name('Control Glow').
        onChange(UPDATE);

        // Add a way to remove the card
        newCardFolder.add(CARD_CONFIG, 'removeCard').name('Remove Card');
      }

      return [...cards, newCard];
    });
  };

  const spread = () => {
    document.documentElement.toggleAttribute('data-spread');
    setSpreading(spreading => !spreading);
  };

  React.useEffect(() => {
    if (cards.length > 0) {
      document.body.style.setProperty('--base', cards[0].base);
      document.body.style.setProperty('--spread', cards[0].spread);
    }
  }, [spreading]);

  React.useEffect(() => {
    if (exploding) {
      const CENTER_CARD = document.querySelector('.dummy__backdrop');
      const BOUNDS = CENTER_CARD.getBoundingClientRect();
      const CONTROL = document.querySelector('.wrapper:first-of-type :is(a, button)');
      const CONTROL_BOUNDS = CONTROL.getBoundingClientRect();
      gsap.set('.wrapper:first-of-type', {
        '--left': BOUNDS.x,
        '--top': BOUNDS.y });

      gsap.set(CONTROL, {
        '--left': CONTROL_BOUNDS.x,
        '--top': CONTROL_BOUNDS.y });

    }
  }, [exploding]);

  const explode = () => {
    setExploding(exploding => {
      document.documentElement.toggleAttribute('data-explode');
      return !exploding;
    });
  };

  const CONFIG = {
    body: 'rgb(0, 10, 15)',
    icon: 0,
    movement: 150,
    addCard: () => {
      addCard();
    },
    explode: false,
    spread: false,
    border: 2,
    radius: 12,
    saturation: 100,
    lightness: 50,
    size: 150,
    card: 'rgb(153, 153, 153)',
    cardalpha: 0.15,
    cardblur: 4,
    'bg-spot-opacity': 0.1,
    'border-spot-opacity': 1,
    'border-light-opacity': 1 };


  const SYNC_STYLES = () => {
    for (const key of Object.keys(CONFIG)) {
      if (
      key !== 'addCard' &&
      key !== 'explode' &&
      key !== 'card' &&
      key !== 'cardalpha')
      {
        document.body.style.setProperty(`--${key}`, CONFIG[key]);
      }
      if (key === 'card') {
        const hsl = new Color(CONFIG.card).hsl();
        document.body.style.setProperty(
        '--backdrop',
        `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${CONFIG.cardalpha})`);

        document.body.style.setProperty(
        '--backup-border',
        `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${Math.max(
        CONFIG.cardalpha,
        0.2)
        })`);

      }
    }
  };
  // Use an effect to add Cards
  React.useEffect(() => {
    // Create a controller and use it to add/remove cards
    try {
      controller.current = new GUI({ width: 320 });
      sceneFolder.current = controller.current.addFolder('Scene');
      cardsFolder.current = controller.current.addFolder('Cards');
      const generalFolder = cardsFolder.current.addFolder('General');
      generalFolder.
      add(CONFIG, 'border', 1, 5, 1).
      name('Border (px)').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'radius', 0, 20, 1).
      name('Radius (px)').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'saturation', 0, 100, 1).
      name('Saturation').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'lightness', 0, 100, 1).
      name('Lightness').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'size', 1, 250, 1).
      name('Spotlight (px)').
      onChange(SYNC_STYLES);
      generalFolder.
      addColor(CONFIG, 'card').
      name('Backdrop').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'cardalpha', 0, 1, 0.01).
      name('Backdrop Alpha').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'cardblur', 0, 20, 1).
      name('Backdrop Blur (px)').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'bg-spot-opacity', 0, 1, 0.01).
      name('Backdrop Spot Alpha').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'border-spot-opacity', 0, 1, 0.01).
      name('Border Spot Alpha').
      onChange(SYNC_STYLES);
      generalFolder.
      add(CONFIG, 'border-light-opacity', 0, 1, 0.01).
      name('Border Light Alpha').
      onChange(SYNC_STYLES);
      sceneFolder.current.
      addColor(CONFIG, 'body').
      name('Background').
      onChange(SYNC_STYLES);
      sceneFolder.current.
      add(CONFIG, 'icon', 0, 1, 0.01).
      name('Icon Alpha').
      onChange(SYNC_STYLES);
      sceneFolder.current.
      add(CONFIG, 'movement', 0, 200, 1).
      name('Icon Movement (px)').
      onChange(SYNC_STYLES);
      exploder.current = sceneFolder.current.
      add(CONFIG, 'explode').
      name('Explode?').
      onChange(explode);
      spreader.current = sceneFolder.current.
      add(CONFIG, 'spread').
      name('Spread?').
      onChange(spread);
      controller.current.add(CONFIG, 'addCard').name('Add Card');
    } catch (error) {
      console.error('GUI init failed:', error);
    }
    // Add some default cards
    addCard();
    SYNC_STYLES();
  }, []);

  return /*#__PURE__*/(
    React.createElement("main", null,
    cards.map((card, index) => {
      if (spreading && index > 0) return null;

      return /*#__PURE__*/(
        React.createElement(React.Fragment, null, /*#__PURE__*/
        React.createElement("div", { className: "wrapper" },
        exploding && index === 0 ? /*#__PURE__*/
        React.createElement("div", {
          className: "dummy",
          style: {
            '--base': card.base,
            '--spread': card.spread } }, /*#__PURE__*/


        React.createElement("div", { className: "dummy__backdrop" }, /*#__PURE__*/
        React.createElement("span", null, "Background")), /*#__PURE__*/

        React.createElement("div", { className: "dummy__border" }, /*#__PURE__*/
        React.createElement("span", null, "Border Mask")), /*#__PURE__*/

        React.createElement("div", { className: "dummy__glow" }, /*#__PURE__*/
        React.createElement("span", null, "Shine Mask"))) :


        null, /*#__PURE__*/
        React.createElement("article", {
          className: "card",
          "data-glow": true,
          style: {
            '--base': card.base,
            '--spread': card.spread } },


        card.outer ? /*#__PURE__*/React.createElement("div", { "data-glow": true }) : null, /*#__PURE__*/
        React.createElement("div", { className: "card__content" }, /*#__PURE__*/
        React.createElement("span", null, "Pro"), /*#__PURE__*/
        React.createElement("div", null, /*#__PURE__*/
        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "none",
          dataSlot: "icon",
          className: "w-6 h-6" }, /*#__PURE__*/

        React.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: PATHS[index] })), /*#__PURE__*/


        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "none",
          dataSlot: "icon",
          className: "w-6 h-6" }, /*#__PURE__*/

        React.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: PATHS[index] })), /*#__PURE__*/


        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "none",
          dataSlot: "icon",
          className: "w-6 h-6" }, /*#__PURE__*/

        React.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: PATHS[index] })), /*#__PURE__*/


        React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "none",
          dataSlot: "icon",
          className: "w-6 h-6" }, /*#__PURE__*/

        React.createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: PATHS[index] }))), /*#__PURE__*/



        React.createElement("h2", { dangerouslySetInnerHTML: { __html: PHRASES[index] } })), /*#__PURE__*/

        React.createElement("a", { href: "#" },
        card.control ? /*#__PURE__*/React.createElement("span", { "data-glow": true }) : null, "Follow"))),




        spreading &&
        new Array(3).fill(0).map((_, index) => {
          return /*#__PURE__*/(
            React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
            React.createElement("span", null, LABELS[index]), /*#__PURE__*/
            React.createElement("article", {
              className: "card",
              "data-glow": true,
              style: {
                '--base': card.base,
                '--spread': card.spread } },


            card.outer ? /*#__PURE__*/React.createElement("div", { "data-glow": true }) : null, /*#__PURE__*/
            React.createElement("div", { className: "card__content" }, /*#__PURE__*/
            React.createElement("span", null, "Pro"), /*#__PURE__*/
            React.createElement("div", null, /*#__PURE__*/
            React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "none",
              dataSlot: "icon",
              className: "w-6 h-6" }, /*#__PURE__*/

            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: PATHS[index + 1] })), /*#__PURE__*/


            React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "none",
              dataSlot: "icon",
              className: "w-6 h-6" }, /*#__PURE__*/

            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: PATHS[index + 1] })), /*#__PURE__*/


            React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "none",
              dataSlot: "icon",
              className: "w-6 h-6" }, /*#__PURE__*/

            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: PATHS[index + 1] })), /*#__PURE__*/


            React.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "none",
              dataSlot: "icon",
              className: "w-6 h-6" }, /*#__PURE__*/

            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: PATHS[index + 1] }))), /*#__PURE__*/



            React.createElement("h2", {
              dangerouslySetInnerHTML: { __html: PHRASES[index + 1] } })), /*#__PURE__*/


            React.createElement("a", { href: "#" },
            card.control ? /*#__PURE__*/React.createElement("span", { "data-glow": true }) : null, "Follow"))));





        })));


    })));


};

createRoot(ROOT_NODE).render(/*#__PURE__*/React.createElement(App, null));
