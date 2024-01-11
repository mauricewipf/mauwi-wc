# mauwi-wc (Web Components)

## Installation

`npm install`

## How to create a new component

1. Create a file "src/my-element/my-element.ts"
2. Create a file "src/my-element/index.ts" with the content:

```
export { MyElement } from '/my-element';
```

3. Add to the file src/index.ts the following:

```
export { MyElement } from './my-element/my-element';
```

4. Use `mauwi-my-element` in index.html.

## Publish

1. `npm run build`
2. `npm run publish`

## Integration

### In HTML via CDN

```html
<!-- HTML -->
<script type="module" src="https://unpkg.com/@mauwi-org/mauwi-wc/dist/entry-index.js"></script>

<!-- Or specify version -->
<script type="module" src="https://unpkg.com/@mauwi-org/mauwi-wc@0.0.3/dist/entry-index.js"></script>

<!-- Or load only specific web component -->
<script type="module" src="https://unpkg.com/@mauwi-org/mauwi-wc/dist/entry-multi-page-form.js"></script>

<!-- Finally use custom tag -->
<mauwi-multi-page-form></mauwi-multi-page-form>
```

### In NPM project via NPM

1. In Terminal or Console:

`npm install @mauwi-org/mauwi-wc`

2. In HTML

```html
<!-- HTML -->
<script type="module" src="node_modules/@mauwi-org/mauwi-wc/dist/entry-index.js"></script>

<!-- Or load only specific web component -->
<script type="module" src="node_modules/@mauwi-org/mauwi-wc/dist/entry-multi-page-form.js"></script>

<!-- Finally use custom tag -->
<mauwi-multi-page-form></mauwi-multi-page-form>
```

### In React project

1. In Terminal or Console:

`npm install @mauwi-org/mauwi-wc @lit/react`

2. In JSX

https://lit.dev/docs/frameworks/react/

```jsx
import React from 'react';
import {createComponent} from '@lit/react';
import {MauwiElement} from './mauwi-element.js';

export const MauwiElementComponent = createComponent({
  tagName: 'mauwi-element',
  elementClass: MauwiElement,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
```

3. Use React component

```jsx
<MauwiElementComponent
  active={isActive}
  onactivate={(e) => setIsActive(e.active)}
  onchange={handleChange}
/>
```

## Project based on: Tailwind web components starter kit

This is a starter kit to develop web components using Tailwind CSS. 

Tailwind and web components do not play well together. 

We managed to find a way to make them work without hacks or weird tech: just common technologies combined in a elegant way.

No dependencies, based on [lit-element](https://lit.dev/docs/).

### How will you create a tailwind component?
Here is a sample code:

```typescript
import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TailwindElement} from '../shared/tailwind.element';

import style from './test.component.scss?inline'; // #1

@customElement('test-component')
export class TestComponent extends TailwindElement(style) { // #2

  @property()
  name?: string = 'World';

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `;
  }
}
```
It is based on the [lit element](https://lit.dev/docs/) technology: if you wrote a lit component before, you'll find it familiar.  

There are only two differences to a standard _LitElement_:
1) You must import your styles from a separate file. And this is good for two reasons:
   - it separates the CSS from the logic
   - you can decide to use CSS or SCSS
   - note the `?inline` at the end of the file path: if you don't add it, then vite will add the style to the head of the html. If you add it, the style is scoped into the component only  
2) the class extends a _TailwindElement_ rather than a LitElement

A _TailwindElement_ extends a _LitElmement_ (see below) and adds the logic to integrate tailwind and your styles.

### Get started

To run the project:
1) `npm install` (only the first time)
2) `npm start` to run the server
3) to develop the library, run `npm build` and copy the static assets where you need them.

You may clone this repo and start developing your components by looking at the _test.component_ as reference.

As an alternative, and if you like to have control over every piece, do the following:

1) copy the files in the shared folder: 
   - _tailwind.element.ts_ extends LitElement by adding the tailwind support
   - _tailwind.global.css_ includes tha Tailwind base classes into each component
   - _globals.d.ts_ is used to avoid TypeScript errors whe nimporting CSS/Scss files in typescript files (thanks [@emaant96](https://github.com/emaant96))
2) copy the _package.json_ or the devDependencies inside into your own _package.json_  (**there are no dependencies**)
3) copy _postcss.config.js_, _tailwind.config.js_ and _tsconfig.js_ 

That's all.

### Show me the pieces
If you want to understand how it works, it's simple:

- the **package.json** integrates these technolgies:
```json
"autoprefixer": "^10.4.12",
"postcss": "^8.4.18",
"lit": "^2.4.0",
"tailwindcss": "^3.2.0",
"typescript": "^4.8.4",
"vite": "^3.1.8",
"sass": "^1.55.0"
```

- **vite** does almost all the work automatically
- to integrate tailwind, the most important file is in _src/shared/tailwind.element.ts_

```typescript
import {LitElement, unsafeCSS} from "lit";

import style from "./tailwind.global.css";

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style) =>
    class extends LitElement {

        static styles = [tailwindElement, unsafeCSS(style)];
    
    };

```

It extends a _LitElement_ class at runtime and adds the component tailwind classes.

The _style_ variable comes from your component, where it is imported from an external CSS (or SCSS) file.

Then it is combined with the default tailwind classes.

If you add more components, the common parts are reused.
