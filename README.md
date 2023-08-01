# obsidian-scripts

JavaScript sucks. A lot. I don't ever want to use it.

But DataviewJS is super dope and I don't want to miss out on it.

This is my attempt to bring some type "safety" and a better DX when making DataviewJS scripts.

## Why

I wanted to be able to have a single source of truth for my scripts in case I wanted to change them, that way I could manage them more easily in templates and I wouldn't need to go note by note adding or fixing something.

Turns out [we are able to import modules](https://forum.obsidian.md/t/dataviewjs-code-reuse-common-place-for-scripts/18611/6) so this should be easy.

This also means we are able to open the scripts folder in an editor and use JSDoc for type annotations. We could technically also use TypeScript and transpile to JS but I'm not that much of a tryhard.

## How

In this repo there's a `types` folder to store TypeScript declaration files (`.d.ts`) for library declarations (like `momentjs`) and for your own types.

For some libraries you might find already existing declaration files, but for the `dv` object I had to clone the [Dataview repo](https://github.com/blacksmithgu/obsidian-dataview), build from source with [changed configurations for tsconfig.json](https://stackoverflow.com/a/73416945), and then copy the generated types to use them (there's garbage that isn't needed too but removing it is work).

Then we make a JavaScript file, import said declarations, and make a factory function to inject dependencies:

```js
// ${vaultPath}/scripts/date.js

// @ts-check

/**
 * @typedef {import("./types/dataview/api/inline-api").DataviewInlineApi} DataviewInlineApi
 *
 * @typedef {import("./types/moment")} moment
 * @typedef {import("./types/moment").Moment} Moment
 * // Note that I manually exported this namespace in the declaration file, it's not exported by default.
 *
 * @typedef {import("./types/custom").Custom} Custom
 */

/**
 * @param {DataviewInlineApi} dv
 * @param {moment} moment
 * @returns {(date: string) => void}
 */
function createRenderDate(dv, moment) {

  // your code here (use JSDoc annotations!)

  /**
    * @param {string} date
    * @returns {Moment}
    */
  function createDate(date) {
    return moment(date);
  }
  
  /**
    * you can return anything you want here, could be an object instead of a function
    * @param {string} date
    */
  return renderDate(date) {
    // your code here (use JSDoc annotations!)

    dv.paragraph(createDate(date).format("YYYY-MM-DDTHH:mm:ss.sssZ"));
  }
}

exports.createRenderDate = createRenderDate;
```

The reason we need to inject this dependencies is because those globals aren't injected into our code afaik. If this is improvable I'd love to change that.

Then in Obsidian we are able to require the module:

```js
```dataviewjs
const { createRenderDate } = require(app.vault.adapter.basePath + "/scripts/date.js");

const renderDate = createRenderDate(dv, moment);

renderDate("2020-03-30");
```.
```

Check the scripts in this repo for an example.

The one downside I've found so far is that Obsidian seems to be kinda finicky about importing the module after a change, I've had to reload the app quite a few times during development.

This has made the experience a lot better for me, I find myself not needing to check the console constantly.

Any and all feedback is appreciated :)
