import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ba32c2.js";const u=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure.md","filePath":"guide/configure.md"}'),p={name:"guide/configure.md"},e=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><p>默认提供三套环境配置，分别为：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZGCeQ" id="tab-bEtkKJB" checked="checked"><label for="tab-bEtkKJB">.env.development 开发环境</label><input type="radio" name="group-ZGCeQ" id="tab-68JtHHp"><label for="tab-68JtHHp">.env.test 测试环境</label><input type="radio" name="group-ZGCeQ" id="tab-jTVBqyq"><label for="tab-jTVBqyq">.env.production 生产环境</label></div><div class="blocks"><div class="language-yaml vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否开启代理</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_OPEN_PROXY = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否开启代理</span></span>
<span class="line"><span style="color:#032F62;">VITE_OPEN_PROXY = false</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_MOCK = true</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#9ECBFF;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_TITLE = Fantastic-admin</span></span>
<span class="line"><span style="color:#6A737D;"># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span style="color:#6A737D;"># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span style="color:#032F62;">VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在打包时启用 Mock</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_MOCK = false</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时生成 sourcemap</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span style="color:#6A737D;"># 在构建时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span style="color:#032F62;">VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div></div></div><p>其中 <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p><h2 id="应用配置-框架配置" tabindex="-1">应用配置（框架配置） <a class="header-anchor" href="#应用配置-框架配置" aria-label="Permalink to &quot;应用配置（框架配置）&quot;">​</a></h2><p>开发者请在 <code>/src/settings.ts</code> 文件中设置自定义配置，而 <code>/src/settings.default.ts</code> 为框架的默认配置，请勿在该文件内修改。</p><p>关于配置的类型定义，可以在 <code>/src/types/globals.d.ts</code> 文件中查阅。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 这是基础版演示源码里的自定义配置示例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enablePermission: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableDynamicTitle: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableAppSetting: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  layout: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableMobileAdaptation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  menu: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableSubMenuCollapseButton: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableHotkeys: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  topbar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;fixed&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  toolbar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableFullscreen: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    enablePageReload: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    enableColorScheme: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 这是基础版演示源码里的自定义配置示例</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  app: {</span></span>
<span class="line"><span style="color:#24292E;">    enablePermission: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    enableDynamicTitle: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    enableAppSetting: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  layout: {</span></span>
<span class="line"><span style="color:#24292E;">    enableMobileAdaptation: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  menu: {</span></span>
<span class="line"><span style="color:#24292E;">    enableSubMenuCollapseButton: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    enableHotkeys: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  topbar: {</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;fixed&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  toolbar: {</span></span>
<span class="line"><span style="color:#24292E;">    enableFullscreen: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    enablePageReload: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    enableColorScheme: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    enableAppSetting: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    enableAppSetting: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>该功能主要是方便开发者在开发阶段调试，生产环境下建议关闭。</p></div>`,11),o=[e];function c(t,r,i,E,y,d){return n(),a("div",null,o)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};
