// ES Modules syntax
import fetch from 'node-fetch';
global.fetch = fetch;

// require syntax
const fetch = require('node-fetch');
global.fetch = fetch;

// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';
// require syntax
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const data = require('/key.json');

const unsplash = new Unsplash({ accessKey: data.APP_ACCESS_KEY });
const unsplash = new Unsplash({
  accessKey: data.APP_ACCESS_KEY,
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 1800 // values set in ms
});

unsplash.users.profile("naoufal")
  .catch(err => {
    console.log('Caught an error 😥')
  });

const pressed = [];
const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('Haxxor Mode Activated');
        cornify_add()
    }
})

unsplash.photos.getRandomPhoto({ query: "nature" })
  .then(toJson)
  .then(json => {
    console.log(json)
  });

/* Site creat de Toma Petrica */