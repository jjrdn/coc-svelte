# Svelte extension for [coc](https://github.com/neoclide/coc.nvim)

Thin wrapper around [svelte language server](https://github.com/sveltejs/language-tools/tree/master/packages/language-server).

Originally forked from [coc-svelte](https://github.com/coc-extensions/coc-svelte), and [svelte-vscode](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-vscode)

## Install

``` vim
:CocInstall coc-svelte-fork
```

### Settings

##### `svelte.language-server.runtime`

Path to the node executable you would like to use to run the language server.
This is useful when you depend on native modules such as node-sass as without
this they will run in the context of coc.nvim, meaning v8 version mismatch is likely.

##### `svelte.plugin.typescript.enable`

Enable the TypeScript plugin. _Default_: `true`

##### `svelte.plugin.typescript.diagnostics`

Enable diagnostic messages for TypeScript. _Default_: `true`

##### `svelte.plugin.typescript.hover`

Enable hover info for TypeScript. _Default_: `true`

##### `svelte.plugin.typescript.documentSymbols`

Enable document symbols for TypeScript. _Default_: `true`

##### `svelte.plugin.typescript.completions`

Enable completions for TypeScript. _Default_: `true`

##### `svelte.plugin.typescript.definitions`

Enable go to definition for TypeScript. _Default_: `true`

##### `svelte.plugin.typescript.codeActions`

Enable code actions for TypeScript. _Default_: `true`

##### `svelte.plugin.css.enable`

Enable the CSS plugin. _Default_: `true`

##### `svelte.plugin.css.diagnostics`

Enable diagnostic messages for CSS. _Default_: `true`

##### `svelte.plugin.css.hover`

Enable hover info for CSS. _Default_: `true`

##### `svelte.plugin.css.completions`

Enable auto completions for CSS. _Default_: `true`

##### `svelte.plugin.css.documentColors`

Enable document colors for CSS. _Default_: `true`

##### `svelte.plugin.css.colorPresentations`

Enable color picker for CSS. _Default_: `true`

##### `svelte.plugin.css.documentSymbols`

Enable document symbols for CSS. _Default_: `true`

##### `svelte.plugin.html.enable`

Enable the HTML plugin. _Default_: `true`

##### `svelte.plugin.html.hover`

Enable hover info for HTML. _Default_: `true`

##### `svelte.plugin.html.completions`

Enable auto completions for HTML. _Default_: `true`

##### `svelte.plugin.html.tagComplete`

Enable HTML tag auto closing. _Default_: `true`

##### `svelte.plugin.html.documentSymbols`

Enable document symbols for HTML. _Default_: `true`

##### `svelte.plugin.svelte.enable`

Enable the Svelte plugin. _Default_: `true`

##### `svelte.plugin.svelte.diagnostics.enable`

Enable diagnostic messages for Svelte. _Default_: `true`

##### `svelte.plugin.svelte.format.enable`

Enable formatting for Svelte (includes css & js). _Default_: `true`

### Recommend syntax highlight plugin

[evanleck/vim-svelte](https://github.com/evanleck/vim-svelte)
