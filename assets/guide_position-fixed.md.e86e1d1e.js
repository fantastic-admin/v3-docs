import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.e8ba32c2.js";const h=JSON.parse('{"title":"高级 position:fixed","description":"","frontmatter":{},"headers":[],"relativePath":"guide/position-fixed.md","filePath":"guide/position-fixed.md"}'),t={name:"guide/position-fixed.md"},n=o(`<h1 id="高级-position-fixed" tabindex="-1">高级 position:fixed <sup class="pro-badge"></sup> <a class="header-anchor" href="#高级-position-fixed" aria-label="Permalink to &quot;高级 position:fixed &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><p>我们都知道 <code>position:fixed</code> 是相对于浏览器窗口进行定位的，那在本框架中，要如何实现 <code>&lt;FixedActionBar /&gt;</code> 组件这种不管在任何布局场景下，始终固定在右侧内容区域内底部呢？</p><p>专业版已将这块处理封装成一个 HTML 的 data 属性了，就是 <code>data-fixed-calc-width</code> 。如果你有同样的需求，只需在最外层原本要设置 <code>position:fixed</code> 的 DOM 上增加 <code>data-fixed-calc-width</code> 即可。</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-fixed-calc-width</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-fixed-calc-width</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),p=[n];function i(l,c,d,r,E,_){return a(),e("div",null,p)}const u=s(t,[["render",i]]);export{h as __pageData,u as default};
