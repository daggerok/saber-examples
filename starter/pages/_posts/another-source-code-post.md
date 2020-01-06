---
title: Source code highlighting
---

<h1>$page.title: {{ $page.title }}</h1>

## Hello **Saber**!

This result of 1 + 1 is: {{ 1 + 1 }}

---

1. install:
   ```bash
   npm i -ED saber-plugin-prismjs
   npm i -E prismjs saber-highlight-css
   ```
1. configure in `saber-config.js` file:
   ```js
   module.exports = {
     plugins: [
       { resolve: 'saber-plugin-prismjs' },
     ],
   };
   ```
1. add css in `saber-browser.js` file:
   ```js
   import 'prismjs/themes/prism.css';
   import 'saber-highlight-css/default.css';
   ```
1. test it
   YAML:
   ```yaml {highlightLines:['2-3', 5]}
   siteConfig:
     title: Saber
     description: A framework for building modern static websites.
   
   theme: ./src
   ```
   JavaScript:
   ```js {lineNumbers:true,highlightLines:['2-5']}
   [
     {
       text: 'A page',
       slug: 'a-page',
       level: 1
     },
     {
       text: 'A section',
       slug: 'a-section',
       level: 2
     },
     {
       text: 'Another section',
       slug: 'another-section',
       level: 3
     }
   ]
   ```

---

```js
const foo = `{{ safe, this won't be interpolated! }}`
```

And `{{ bar }}` is safe too! <span v-pre>{{ yeah }}</span>

---

**This is an example:**

<template>
    <button @click="increment">{{ count }}</button>
</template>

<script>
export const data = {
  title: 'ololo',
}; 
export default {
  props: ['title'],
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
  },
};
</script>

---

<pre>available Object.keys($page): {{ Object.keys($page) }}</pre>

<pre>{{ $page.markdownHeadings }}</pre>

<pre>$siteConfig: {{ $siteConfig }}</pre>

<pre>$localePath: {{ $localePath }}</pre>

<pre>$themeConfig: {{ $themeConfig }}</pre>

---

_NOTE_: see https://saber.land/docs/markdown-features.html#code-highlighting
