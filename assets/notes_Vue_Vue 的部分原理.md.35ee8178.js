import{_ as s,c as a,o as n,a as e}from"./app.0c750671.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"new Vue \u505A\u4E86\u4EC0\u4E48","slug":"new-vue-\u505A\u4E86\u4EC0\u4E48","link":"#new-vue-\u505A\u4E86\u4EC0\u4E48","children":[]},{"level":3,"title":"$mount \u505A\u4E86\u5565","slug":"mount-\u505A\u4E86\u5565","link":"#mount-\u505A\u4E86\u5565","children":[]},{"level":3,"title":"\u8BB2\u8BB2 render","slug":"\u8BB2\u8BB2-render","link":"#\u8BB2\u8BB2-render","children":[]},{"level":3,"title":"Virtual DOM","slug":"virtual-dom","link":"#virtual-dom","children":[]},{"level":3,"title":"v-model \u7684\u672C\u8D28","slug":"v-model-\u7684\u672C\u8D28","link":"#v-model-\u7684\u672C\u8D28","children":[]},{"level":3,"title":"\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","slug":"\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","link":"#\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406","children":[]}],"relativePath":"notes/Vue/Vue \u7684\u90E8\u5206\u539F\u7406.md"}'),l={name:"notes/Vue/Vue \u7684\u90E8\u5206\u539F\u7406.md"},o=e(`<h3 id="new-vue-\u505A\u4E86\u4EC0\u4E48" tabindex="-1">new Vue \u505A\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#new-vue-\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>\u6267\u884C init \u65B9\u6CD5\uFF1A\u5148\u662F\u5BF9 options \u8FDB\u884C\u5408\u5E76\uFF0C\u63A5\u4E0B\u6765\u6267\u884C\u4E00\u7CFB\u5217\u7684 init \u65B9\u6CD5\uFF0C\u5C24\u5176\u662F initState \u7684 proxy \u5904\u7406\uFF08\u4F7F\u7528\u4EE3\u7406\uFF1A<code>this.name</code> \u7B49\u4EF7\u4E8E <code>this._data.name</code>\uFF0C\u63A5\u7740\u6267\u884C observe \u54CD\u5E94\u5F0F\u5904\u7406\uFF09\uFF0C\u4E4B\u540E\u6267\u884C $mount \u3002</p><h3 id="mount-\u505A\u4E86\u5565" tabindex="-1">$mount \u505A\u4E86\u5565 <a class="header-anchor" href="#mount-\u505A\u4E86\u5565" aria-hidden="true">#</a></h3><p>\u5728\u6E90\u7801\u91CC\u9762\u6709\u591A\u4E2A\u6587\u4EF6\u90FD\u6709\u540C\u540D\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u53EA\u770B web \u5E73\u53F0\uFF08\u6E90\u7801\u6587\u4EF6 platforms/web\uFF09\u3002 \u5728 compiler \u7248\u672C\u91CC\uFF0C\u5904\u7406 el \uFF0C\u5982\u679C\u6CA1\u6709 render \u5C31\u5C1D\u8BD5\u83B7\u53D6\uFF08\u5BF9 template \u8FDB\u884C\u5904\u7406\u8F6C\u5316\u6210\u7F16\u8BD1\u7684 render \u51FD\u6570\uFF0C\u6700\u7EC8\u6302\u5230 vm.$options.render \u4E0A\uFF09\uFF0C\u7136\u540E\u518D\u6267\u884C mount \u65B9\u6CD5\uFF08\u5176\u5B9E\u8C03\u7528 mountComponent \u65B9\u6CD5\uFF09\u3002mountComponent \u65B9\u6CD5\u5185\u5B9A\u4E49 updateComponent \u51FD\u6570\uFF08\u8FD9\u4E2A\u51FD\u6570\u505A\u771F\u5B9E\u7684\u6E32\u67D3\uFF0C\u5176\u5B9E\u662F\u7528\u6765\u6E32\u67D3 watcher \u7684\uFF09\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">updateComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_update</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_render</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BB2\u8BB2-render" tabindex="-1">\u8BB2\u8BB2 render <a class="header-anchor" href="#\u8BB2\u8BB2-render" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 createElement \u65B9\u6CD5\u751F\u6210 vnode \uFF08Virtual DOM\uFF09\u3002\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">vnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> render</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_renderProxy</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$createElement)</span></span>
<span class="line"></span></code></pre></div><h3 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-hidden="true">#</a></h3><p>Virtual DOM \u5C31\u662F\u7528\u4E00\u4E2A\u539F\u751F\u7684 JS \u5BF9\u8C61\u53BB\u63CF\u8FF0\u4E00\u4E2A DOM \u8282\u70B9\uFF0C\u6240\u4EE5\u5B83\u6BD4\u521B\u5EFA\u4E00\u4E2A DOM \u7684\u4EE3\u4EF7\u8981\u5C0F\u5F88\u591A\u3002\u7528 VNode Class \u63CF\u8FF0 vnode \u3002VNode \u662F\u5BF9\u771F\u5B9E DOM \u7684\u4E00\u79CD\u62BD\u8C61\u63CF\u8FF0\uFF0C\u5173\u952E\u5C5E\u6027\u6709\u6807\u7B7E\u540D\u3001\u6570\u636E\u3001\u5B50\u8282\u70B9\u7B49\u7B49\uFF0C\u6620\u5C04\u5230\u771F\u5B9E\u7684 DOM \u9700\u8981\u7ECF\u5386 VNode \u7684 create\u3001diff\u3001patch \u7B49\u8FC7\u7A0B\u3002</p><h3 id="v-model-\u7684\u672C\u8D28" tabindex="-1">v-model \u7684\u672C\u8D28 <a class="header-anchor" href="#v-model-\u7684\u672C\u8D28" aria-hidden="true">#</a></h3><h3 id="\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h3><p>\u4F18\u5148\u7EA7\uFF1Adata &gt; props &gt; methods &gt; computed computed \u7F13\u5B58\u539F\u7406 \uFF1A\u5728\u4E8E Watcher \u5B9E\u4F8B\u4E0A\u7684 dirty \u5C5E\u6027\uFF0C\u4E0B\u9762\u4EE3\u7801\u6765\u81EA createComputedGetter \u51FD\u6570\u5185\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (watcher) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">watcher</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dirty</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">watcher</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">evaluate</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Dep</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">watcher</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">depend</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">watcher</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>computed \u548C watch \u533A\u522B\uFF1Acomputed \u9ED8\u8BA4\u61D2\u6267\u884C\uFF0C\u4E14\u4E0D\u53EF\u66F4\u6539\uFF0C\u4F46 watcher \u53EF\u914D\u7F6E\uFF1B\u4F7F\u7528\u573A\u666F\u4E0D\u540C\uFF0Ccomputed \u4E0D\u53EF\u4F7F\u7528\u5F02\u6B65\uFF08\u53EF\u4EE5\u4F9D\u8D56 Vuex \u4E2D\u7684\u6570\u636E\uFF0C\u6545\u901A\u8FC7\u8FD4\u56DE store.state \u53EF\u4EE5\u83B7\u5F97\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u4E5F\u53EF\u4EE5\u501F\u52A9\u63D2\u4EF6 vue-async-computed\uFF09\uFF0Cwatch \u53EF\u4EE5\u5904\u7406\u5F02\u6B65</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>`,16),p=[o];function t(r,c,d,i,y,D){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
