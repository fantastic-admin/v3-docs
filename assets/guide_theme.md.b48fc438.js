import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e8ba32c2.js";const p="/v3-docs/theme.gif",e="/v3-docs/menu-fill-style.png",o="/v3-docs/menu-active-style.png",c="/v3-docs/breadcrumb-style.png",t="/v3-docs/tabbar-style.png",b=JSON.parse('{"title":"主题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme.md","filePath":"guide/theme.md"}'),r={name:"guide/theme.md"},i=l(`<h1 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h1><h2 id="框架主题" tabindex="-1">框架主题 <a class="header-anchor" href="#框架主题" aria-label="Permalink to &quot;框架主题&quot;">​</a></h2><h3 id="基础版" tabindex="-1">基础版 <a class="header-anchor" href="#基础版" aria-label="Permalink to &quot;基础版&quot;">​</a></h3><p>基础版主题样式存放在 <code>/src/assets/styles/themes.scss</code> 文件中，均为 css 变量，修改后即可在页面上查看效果，注意明亮和暗黑模式的区分。</p><h3 id="专业版" tabindex="-1">专业版 <a class="header-anchor" href="#专业版" aria-label="Permalink to &quot;专业版&quot;">​</a></h3><p>与基础版不同，专业版默认提供了 6 款主题，并且主题在运行时共存，可实现动态切换。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * default 默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_green 绿色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_orange 橙色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_pink 粉色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_grey 灰色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_yellow 黄色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    theme: </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * default 默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_green 绿色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_orange 橙色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_pink 粉色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_grey 灰色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sys_yellow 黄色</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+p+`" alt="" data-zoomable=""></p><p>如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题。首先先打开默认主题了解下代码结构 <code>/src/assets/styles/themes/default.scss</code> ，主题的样式都存放在 <code>$theme-default</code> 这个变量里，注意明亮模式和暗黑模式的区分，两者里面属性名是完全一致的。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$theme-default</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 明亮模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 暗黑模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;dark&quot;</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">$theme-default</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 明亮模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  ),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 暗黑模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;dark&quot;</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><p>所以如果要创建一个新主题，例如要增加一个红色主题，可以将 <code>default.scss</code> 文件复制一份，并修改文件名为 <code>red.scss</code> ，同时将文件里的 <code>$theme-default</code> 变量名也修改为 <code>$theme-red</code> ，然后在 <code>/src/assets/styles/resources/themes.scss</code> 文件中增加以下代码：</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/default.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/green.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/orange.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/pink.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/grey.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/yellow.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#F97583;">@use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../themes/red.scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">$themes</span><span style="color:#E1E4E8;">: (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-default</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">sys_green</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-green</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">sys_orange</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-orange</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">sys_pink</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-pink</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">sys_grey</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-grey</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">sys_yellow</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-yellow</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$theme-red</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/default.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/green.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/orange.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/pink.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/grey.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/yellow.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">@use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../themes/red.scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">$themes</span><span style="color:#24292E;">: (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">default</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-default</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">sys_green</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-green</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">sys_orange</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-orange</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">sys_pink</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-pink</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">sys_grey</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-grey</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">sys_yellow</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-yellow</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#005CC5;">red</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$theme-red</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>最后在应用配置中设置主题为 <code>red</code> 就可以调用这个我们创建的主题了：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    theme: </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    theme: </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="颜色方案" tabindex="-1">颜色方案 <a class="header-anchor" href="#颜色方案" aria-label="Permalink to &quot;颜色方案&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空跟随系统</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * light 明亮模式</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * dark 暗黑模式</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    colorScheme: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空跟随系统</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * light 明亮模式</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * dark 暗黑模式</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    colorScheme: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="导航栏风格" tabindex="-1">导航栏风格 <sup class="pro-badge"></sup> <a class="header-anchor" href="#导航栏风格" aria-label="Permalink to &quot;导航栏风格 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h2><h3 id="填充风格" tabindex="-1">填充风格 <a class="header-anchor" href="#填充风格" aria-label="Permalink to &quot;填充风格&quot;">​</a></h3><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * radius 圆角</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    menuFillStyle: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  menu: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * radius 圆角</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    menuFillStyle: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+e+`" alt="" data-zoomable=""></p><h3 id="激活风格" tabindex="-1">激活风格 <a class="header-anchor" href="#激活风格" aria-label="Permalink to &quot;激活风格&quot;">​</a></h3><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * arrow 箭头</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * line 线条</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * dot 圆点</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    menuActiveStyle: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  menu: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * arrow 箭头</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * line 线条</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * dot 圆点</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    menuActiveStyle: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+o+`" alt="" data-zoomable=""></p><h2 id="面包屑导航风格" tabindex="-1">面包屑导航风格 <sup class="pro-badge"></sup> <a class="header-anchor" href="#面包屑导航风格" aria-label="Permalink to &quot;面包屑导航风格 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * modern 现代</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    style: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * 留空默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * modern 现代</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    style: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+c+`" alt="" data-zoomable=""></p><h2 id="标签栏风格" tabindex="-1">标签栏风格 <sup class="pro-badge"></sup> <a class="header-anchor" href="#标签栏风格" aria-label="Permalink to &quot;标签栏风格 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  tabbar: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * fashion 时尚</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * card 卡片</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * square 方块</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    tabStyle: </span><span style="color:#9ECBFF;">&#39;fashion&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  tabbar: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * fashion 时尚</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * card 卡片</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * square 方块</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    tabStyle: </span><span style="color:#032F62;">&#39;fashion&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+t+`" alt="" data-zoomable=""></p><h2 id="element-plus-主题" tabindex="-1">Element Plus 主题 <a class="header-anchor" href="#element-plus-主题" aria-label="Permalink to &quot;Element Plus 主题&quot;">​</a></h2><blockquote><p>详细可阅读 Element Plus 官方文档《<a href="https://element-plus.gitee.io/zh-CN/guide/theming.html" target="_blank" rel="noreferrer">自定义主题</a>》。</p></blockquote><p>你可以在 <code>/src/assets/style/element-plus/index.scss</code> 和 <code>/src/assets/style/element-plus/dark.scss</code> 文件中分别修改 Element Plus 的明亮和暗黑模式下的预设样式。</p><p>你可以到 Element Plus 的 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noreferrer"><code>packages/theme-chalk/src/common/var.scss</code></a> 和 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/dark/var.scss" target="_blank" rel="noreferrer"><code>packages/theme-chalk/src/dark/var.scss</code></a> 中查找更多明亮和暗黑模式下的 scss 变量。</p><h2 id="element-plus-样式" tabindex="-1">Element Plus 样式 <a class="header-anchor" href="#element-plus-样式" aria-label="Permalink to &quot;Element Plus 样式&quot;">​</a></h2><p>有时候，我们可能需要重写 Element Plus 组件的一些默认样式，除了可以在 SFC 单文件组件里单独重写外，你也可以在 <code>/src/assets/style/element-plus/override.scss</code> 文件中进行全局重写。</p><h2 id="element-plus-默认尺寸" tabindex="-1">Element Plus 默认尺寸 <a class="header-anchor" href="#element-plus-默认尺寸" aria-label="Permalink to &quot;Element Plus 默认尺寸&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * default 默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * large 大号</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * small 小号</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    elementSize: </span><span style="color:#9ECBFF;">&#39;default&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * default 默认</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * large 大号</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * small 小号</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    elementSize: </span><span style="color:#032F62;">&#39;default&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="开发注意" tabindex="-1">开发注意 <a class="header-anchor" href="#开发注意" aria-label="Permalink to &quot;开发注意&quot;">​</a></h2><p>如果只在明亮或暗黑模式中，选择其中一种模式进行业务开发，那没有什么需要注意的，你可以按照以往的开发习惯进行开发，这也是框架推荐的方式。</p><p>但如果需要让用户可以自己选择明亮或暗黑模式，或者是根据浏览器主题来判断是使用明亮还是暗黑模式。这时候开发则需要注意，业务页面里使用到的颜色将不能写成固定值（例如 color 、background-color 、border-color 、box-shadow 等有涉及到颜色的属性），因为同一个色值是无法顾及到明亮和暗黑两种模式的。</p><p>这时候建议使用 Element Plus 原生的 css 变量来代替原有的颜色，你可以在 Element Plus 官网<a href="https://element-plus.org/zh-CN/component/color.html#%E4%B8%BB%E8%89%B2" target="_blank" rel="noreferrer">这里</a>了解到这些颜色变量。为了方便，我们将这些颜色变量都整理了出来。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 主色 primary */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-primary-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 success */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-success-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 warning */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-warning-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 danger */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-danger-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 error */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-error-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 info */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info-light-3)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info-light-5)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info-light-7)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info-light-9)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-color-info-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 背景 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-bg-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-bg-color-page)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-bg-color-overlay)</span></span>
<span class="line"><span style="color:#6A737D;">/* 文字 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-text-color-primary)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-text-color-regular)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-text-color-secondary)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-text-color-placeholder)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-text-color-disabled)</span></span>
<span class="line"><span style="color:#6A737D;">/* 边框 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color-lighter)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color-extra-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color-dark)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-border-color-darker)</span></span>
<span class="line"><span style="color:#6A737D;">/* 填充 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-lighter)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-extra-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-dark)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-darker)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-fill-color-blank)</span></span>
<span class="line"><span style="color:#6A737D;">/* box-shadow */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-box-shadow)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-box-shadow-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-box-shadow-lighter)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-box-shadow-dark)</span></span>
<span class="line"><span style="color:#6A737D;">/* 禁用 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-disabled-bg-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-disabled-text-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-disabled-border-color)</span></span>
<span class="line"><span style="color:#6A737D;">/* 遮罩 */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-overlay-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-overlay-color-light)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-overlay-color-lighter)</span></span>
<span class="line"><span style="color:#6A737D;">/* mask */</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-mask-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-mask-color-extra-light)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 主色 primary */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-primary-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 success */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-success-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 warning */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-warning-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 danger */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-danger-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 error */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-error-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 辅助色 info */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info-light-3)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info-light-5)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info-light-7)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info-light-9)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-color-info-dark-2)</span></span>
<span class="line"><span style="color:#6A737D;">/* 背景 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-bg-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-bg-color-page)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-bg-color-overlay)</span></span>
<span class="line"><span style="color:#6A737D;">/* 文字 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-text-color-primary)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-text-color-regular)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-text-color-secondary)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-text-color-placeholder)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-text-color-disabled)</span></span>
<span class="line"><span style="color:#6A737D;">/* 边框 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color-lighter)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color-extra-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color-dark)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-border-color-darker)</span></span>
<span class="line"><span style="color:#6A737D;">/* 填充 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-lighter)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-extra-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-dark)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-darker)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-fill-color-blank)</span></span>
<span class="line"><span style="color:#6A737D;">/* box-shadow */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-box-shadow)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-box-shadow-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-box-shadow-lighter)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-box-shadow-dark)</span></span>
<span class="line"><span style="color:#6A737D;">/* 禁用 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-disabled-bg-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-disabled-text-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-disabled-border-color)</span></span>
<span class="line"><span style="color:#6A737D;">/* 遮罩 */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-overlay-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-overlay-color-light)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-overlay-color-lighter)</span></span>
<span class="line"><span style="color:#6A737D;">/* mask */</span></span>
<span class="line"><span style="color:#24292E;">var(--el-mask-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-mask-color-extra-light)</span></span></code></pre></div><p>另外，你可能还会用到以下这些 transition 变量，因为在明亮和暗黑模式切换过程中，如果没有 transition 的过渡效果，就会变得很突兀，和框架整体动效风格也不统一。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var(--el-transition-all)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-fade)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-fade-linear)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-md-fade)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-color)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-border)</span></span>
<span class="line"><span style="color:#E1E4E8;">var(--el-transition-box-shadow)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var(--el-transition-all)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-fade)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-fade-linear)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-md-fade)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-color)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-border)</span></span>
<span class="line"><span style="color:#24292E;">var(--el-transition-box-shadow)</span></span></code></pre></div><p>除此之外，你还可以使用下面这种方法，在页面中去自定义一些颜色。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">.dark</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;"> </span><span style="color:#22863A;">div</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>最后分享一篇关于暗黑模式的文章《<a href="http://www.woshipm.com/pd/4105894.html" target="_blank" rel="noreferrer">教你巧用UI设计中的暗黑模式——Dark Mode</a>》，希望帮助你更好地在暗黑模式下开发出优秀的页面。</p>`,53),E=[i];function y(h,g,d,v,u,F){return a(),n("div",null,E)}const A=s(r,[["render",y]]);export{b as __pageData,A as default};
