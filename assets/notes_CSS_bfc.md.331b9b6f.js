import{_ as l,c as t,o as e,a as i}from"./app.0c750671.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/CSS/bfc.md"}'),o={name:"notes/CSS/bfc.md"},a=i("<p>BFC, Block Formatting Context\uFF0C\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u662F\u9875\u9762\u4E0A\u7528\u4E8E\u6E32\u67D3 css \u7684\u4E00\u4E2A\u533A\u57DF\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5C0F\u578B\u7684\u5E03\u5C40\uFF0C\u5757\u7EA7\u5143\u7D20\u548C\u6D6E\u52A8\u5143\u7D20\u4F1A\u6839\u636E\u8FD9\u5757\u533A\u57DF\u8FDB\u884C\u5E03\u5C40\u3002</p><p>\u4F5C\u7528\u6709\u4E09\u4E2A\uFF1A\u6E05\u9664\u6D6E\u52A8\u3001\u5305\u88F9\u6D6E\u52A8\u3001\u907F\u514D\u8FB9\u8DDD\u584C\u9677\u3002</p><p>\u521B\u5EFA BFC \u6761\u4EF6\u6709\u5F88\u591A\u79CD\uFF1A</p><ul><li>html \u6839\u5143\u7D20</li><li>\u8BBE\u7F6E\u4E86 float \u5C5E\u6027\u7684\u5143\u7D20</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20</li><li>\u8BBE\u7F6E display: inline-block | table-*(table-cell table-caption table-raw)</li><li>\u8BBE\u7F6E overflow\uFF0C\u503C\u4E3A\u9664 visible \u548C clip \u4EE5\u5916\u7684\uFF0C\u4F8B\u5982 scroll\u3001hidden \u7B49</li><li>\u8BBE\u7F6E contain: (layout | content | paint)</li><li>Flex \u548C Grid \u5E03\u5C40\u7684\u5B50\u5143\u7D20\uFF08\u975E flex \u548C grid \u5E03\u5C40\u5BB9\u5668\u672C\u8EAB\uFF09</li></ul><p>\u5E38\u7528\u7684\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u8BBE\u7F6E overflow \u5C5E\u6027\uFF0C\u9664\u4E86visible \u548C clip\u4EE5\u5916\u7684\u503C\u90FD\u53EF\u4EE5\uFF0C\u4F8B\u5982 overflow: hidden</li><li>\u8BBE\u7F6E display: flow-root\uFF0C\u6700\u4F73\u65B9\u6848</li></ul>",6),c=[a];function n(s,r,_,p,d,f){return e(),t("div",null,c)}const u=l(o,[["render",n]]);export{m as __pageData,u as default};
