import{_ as e,c as o,o as d,a as r}from"./app.0c750671.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4EC0\u4E48\u662F\u6A21\u5757\u5316","slug":"\u4EC0\u4E48\u662F\u6A21\u5757\u5316","link":"#\u4EC0\u4E48\u662F\u6A21\u5757\u5316","children":[]},{"level":3,"title":"\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848","slug":"\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848","link":"#\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848","children":[]}],"relativePath":"notes/JavaScript/\u6A21\u5757\u5316\u65B9\u6848.md"}'),c={name:"notes/JavaScript/\u6A21\u5757\u5316\u65B9\u6848.md"},i=r('<h3 id="\u4EC0\u4E48\u662F\u6A21\u5757\u5316" tabindex="-1">\u4EC0\u4E48\u662F\u6A21\u5757\u5316 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6A21\u5757\u5316" aria-hidden="true">#</a></h3><p>\u767E\u79D1\uFF1A\u6A21\u5757\u5316\u662F\u6307\u89E3\u51B3\u4E00\u4E2A\u590D\u6742\u95EE\u9898\u65F6\u81EA\u9876\u5411\u4E0B\u9010\u5C42\u628A\u7CFB\u7EDF\u5212\u5206\u6210\u82E5\u5E72\u6A21\u5757\u7684\u8FC7\u7A0B\uFF0C\u6709\u591A\u79CD\u5C5E\u6027\uFF0C\u5206\u522B\u53CD\u6620\u5176\u5185\u90E8\u7279\u6027\u3002 Wiki\uFF1A\u6A21\u5757\u5316\u7F16\u7A0B\uFF08modular programming\uFF09\uFF0C\u662F\u5F3A\u8C03\u5C06\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7684\u529F\u80FD\u5206\u79BB\u6210\u72EC\u7ACB\u7684\u3001\u53EF\u76F8\u4E92\u6539\u53D8\u7684\u201C<a href="https://zh.wikipedia.org/wiki/%E8%BB%9F%E9%AB%94%E6%A8%A1%E7%B5%84" title="\u8F6F\u4EF6\u6A21\u5757" target="_blank" rel="noreferrer">\u6A21\u5757</a>\u201D\uFF08module\uFF09\u7684<a href="https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1" title="\u8F6F\u4EF6\u8BBE\u8BA1" target="_blank" rel="noreferrer">\u8F6F\u4EF6\u8BBE\u8BA1</a>\u6280\u672F\uFF0C\u5B83\u4F7F\u5F97\u6BCF\u4E2A\u6A21\u5757\u90FD\u5305\u542B\u7740\u6267\u884C\u9884\u671F\u529F\u80FD\u7684\u4E00\u4E2A\u552F\u4E00<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B" title="\u9762\u5411\u5207\u9762\u7F16\u7A0B" target="_blank" rel="noreferrer">\u65B9\u9762</a>\uFF08aspect\uFF09\u6240\u5FC5\u9700\u7684\u6240\u6709\u4E1C\u897F\u3002</p><h3 id="\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848" tabindex="-1">\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848 <a class="header-anchor" href="#\u524D\u7AEF\u6A21\u5757\u5316\u6709\u5F88\u591A\u65B9\u6848" aria-hidden="true">#</a></h3><ol><li><code>CommonJS</code>\uFF1A\u662F <code>Nodejs</code> \u4F7F\u7528\u7684\u4E00\u5957\u6A21\u5757\u5316\u89C4\u8303\uFF0C\u662F\u4E00\u79CD\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\u4F9D\u8D56\u7684\u65B9\u5F0F\uFF1B\u901A\u8FC7\xA0<code>require</code>\xA0\u53CA\xA0<code>exports</code>\xA0\u8FDB\u884C\u5BFC\u5165\u5BFC\u51FA (\u518D\u8FDB\u4E00\u6B65\u6269\u5C55\uFF0C<code>module.exports</code>\xA0\u5C5E\u4E8E\xA0<code>commonjs2</code> )</li></ol><ul><li><code>require</code> \uFF1A\u5F15\u5165\u4E00\u4E2A\u6A21\u5757</li><li><code>exports</code> \uFF1A\u5BFC\u51FA\u6A21\u5757\u5185\u5BB9</li><li><code>module</code> \uFF1A\u6A21\u5757\u672C\u8EAB</li></ul><ol start="2"><li><code>AMD</code>\uFF1A\u662F js \u6A21\u5757\u52A0\u8F7D\u5E93 RequireJS \u63D0\u51FA\u5E76\u4E14\u5B8C\u5584\u7684\u4E00\u5957\u6A21\u5757\u5316\u89C4\u8303\uFF0C<code>AMD</code> \u662F\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\u4F9D\u8D56\u7684\u65B9\u5F0F\uFF1B</li></ol><ul><li><code>id</code>\uFF1A\u6A21\u5757\u7684 <code>id </code></li><li><code>dependencies</code>\uFF1A\u6A21\u5757\u4F9D\u8D56</li><li><code>factory</code>\uFF1A\u6A21\u5757\u7684\u5DE5\u5382\u51FD\u6570\uFF0C\u5373\u6A21\u5757\u7684\u521D\u59CB\u5316\u64CD\u4F5C\u51FD\u6570</li><li><code>require</code>\uFF1A\u5F15\u5165\u6A21\u5757</li></ul><ol start="3"><li><code>ESM</code> (ES6 Module)\uFF1AES6 \u63A8\u51FA\u7684\u4E00\u5957\u6A21\u5757\u5316\u89C4\u8303\u3002</li></ol><ul><li><code>import</code>\uFF1A\u5F15\u5165\u6A21\u5757\u4F9D\u8D56</li><li><code>export</code>\uFF1A\u6A21\u5757\u5BFC\u51FA</li></ul><p>\u9664\u4E86\u4E0A\u9762\u4E09\u5927\u4E3B\u6D41\u89C4\u8303\uFF0C\u8FD8\u6709 CMD\uFF08\u56FD\u4EA7\u5E93 SeaJS \u63D0\u51FA\u6765\u7684\u4E00\u5957\u6A21\u5757\u89C4\u8303\uFF09\u548C UMD\uFF08\u517C\u5BB9 CommonJS \u548C AMD \u4E00\u5957\u89C4\u8303\uFF09\u3002\u76EE\u524D\u591A\u6570\u6A21\u5757\u7684\u5C01\u88C5\uFF0C\u662F\u65E2\u53EF\u4EE5\u5728 Node.js \u73AF\u5883\u53C8\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u8FD0\u884C\uFF0C \u90A3\u4E48\u4E00\u822C\u4F1A\u91C7\u7528 UMD \u7684\u89C4\u8303\u3002 <code>UMD</code>\uFF1A\u90FD\u53EF\u517C\u5BB9\xA0<code>CommonJS</code>\xA0\u4E0E\xA0<code>AMD</code>\xA0\u7684\u6A21\u5757\uFF0C\u65E2\u53EF\u4EE5\u5728 <code>Nodejs</code> \u548C <code>Webpack</code> \u73AF\u5883\u4E2D\u88AB\xA0<code>require</code>\xA0\u5F15\u7528\uFF0C\u53C8\u80FD\u5728 <code>browser</code> \u73AF\u5883\u4E2D\u76F4\u63A5\u7528 CDN \u88AB\xA0<code>script</code>\xA0\u6807\u7B7E\u5F15\u5165\u3002</p><p><a href="https://zhuanlan.zhihu.com/p/304552279" target="_blank" rel="noreferrer">cjs, umd, esm or iife? - \u77E5\u4E4E (zhihu.com)</a></p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>',12),a=[i];function t(l,s,n,h,p,_){return d(),o("div",null,a)}const E=e(c,[["render",t]]);export{m as __pageData,E as default};
