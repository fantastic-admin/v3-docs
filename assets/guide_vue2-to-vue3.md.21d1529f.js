import{_ as e,o,c as a,Q as c}from"./chunks/framework.e8ba32c2.js";const _=JSON.parse('{"title":"从 Vue2 版本迁移","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue2-to-vue3.md","filePath":"guide/vue2-to-vue3.md"}'),d={name:"guide/vue2-to-vue3.md"},t=c('<h1 id="从-vue2-版本迁移" tabindex="-1">从 Vue2 版本迁移 <a class="header-anchor" href="#从-vue2-版本迁移" aria-label="Permalink to &quot;从 Vue2 版本迁移&quot;">​</a></h1><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>首先你需要准备一份 <code>Vue3版本</code> 的模版源码，并确保能在本地正常启动运行。</p><p>迁移的整个过程是将 <code>Vue2版本</code> 的项目环境，通过拷贝文件、修改代码的方式，一步步将 <code>Vue3版本</code> 的项目环境快速构建起来，所以不建议使用 <code>Vue3版本</code> 的演示源码做为迁移目标。</p><h2 id="细节" tabindex="-1">细节 <a class="header-anchor" href="#细节" aria-label="Permalink to &quot;细节&quot;">​</a></h2><h3 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h3><p><code>Vue2版本</code> 和 <code>Vue3版本</code> 提供了相同的环境配置文件，但仅限于文件名相同，文件内的配置参数略有变化。例如从 <code>VUE_APP_API_ROOT</code> 变更为 <code>VITE_APP_API_BASEURL</code> ，在迁移过程中，需特别注意，建议可将原有配置的变量逐一覆盖到 <code>Vue3版本</code> 的环境配置文件中。</p><p>如果在 <code>Vue2版本</code> 中自定义了一些环境变量，注意在迁移的时候，需要将 <code>VUE_APP_</code> 开通的变量替换为 <code>VITE_</code> 开头，并在项目中使用 <code>p<wbr>rocess.env.VUE_APP_[xxx]</code> 的地方改写为 <code>i<wbr>mport.meta.env.VITE_[xxx]</code> 。</p><p>另，<code>Vue3版本</code> 目前不支持 CDN 开启。</p><h3 id="应用配置" tabindex="-1">应用配置 <a class="header-anchor" href="#应用配置" aria-label="Permalink to &quot;应用配置&quot;">​</a></h3><p>应用配置除了布局相关的配置外，并无太大变化，建议逐一对照修改。</p><p>至于布局相关的配置，<code>Vue2版本</code> 中是通过 <code>showHeader</code> 的开启或关闭切换头部导航布局和侧边栏布局，另外侧边栏布局还需要动态调整路由数据结构才可以实现双侧边栏布局和单侧边栏布局，而在 <code>Vue3版本</code> 中，统一使用 <code>menuMode</code> 这一参数来控制导航栏的模式，同时专业版还另外提供了 2 种模式，具体可阅读《<a href="./layout.html#导航栏模式">布局 - 导航栏模式</a>》。</p><h3 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h3><p><code>Vue3版本</code> 的专业版将原本把所有主题放在一个文件里，拆分成了多个主题独立文件，详细可阅读《<a href="./theme.html">主题</a>》。</p><p>如果有自定义新增主题，也需要按照新的自定义主题的方式去修改。</p><p>另，主题里的配置参数名无变化。</p><h3 id="全局资源" tabindex="-1">全局资源 <a class="header-anchor" href="#全局资源" aria-label="Permalink to &quot;全局资源&quot;">​</a></h3><p>全局资源目录结构与 <code>Vue2版本</code> 保持一致，迁移可直接复制并覆盖。</p><p>框架默认提供的全局组件有一定程度的优化和扩充，迁移过程中，请勿直接将全局组件目录下的文件直接覆盖，可找出自定义新增的全局组件拷贝到 <code>Vue3版本</code> 项目中，这样不会影响到框架默认提供的全局组件。</p><h3 id="与服务端交互" tabindex="-1">与服务端交互 <a class="header-anchor" href="#与服务端交互" aria-label="Permalink to &quot;与服务端交互&quot;">​</a></h3><p>接口请求即 <code>/src/api/index.ts</code> 文件，由于 <code>baseURL</code> 和跨域代理搭配使用代码耦合较高，请勿直接覆盖文件，建议可以只复制拦截器部分代码进行替换。</p><p>跨域开启本地代理仅需要在 <code>.env.development</code> 文件里 <code>VITE_OPEN_PROXY = true</code> 开启代理即可。</p><p>Mock 部分变动较大，在 <code>Vue2版本</code> 里提供了 2 种方案，并且 mock 数据的配置也不一样，而在 <code>Vue3版本</code> 中，只需要配置一份 mock 数据，就可以同时实现原有 2 种方案的优点，唯一的缺点就是如果在 <code>Vue2版本</code> 的项目中如果使用了 mock ，无法直接将 mock 文件拷贝到 <code>Vue3版本</code> 项目中，因为数据结构和使用方式均有调整，具体可阅读《<a href="./axios.html#mock">与服务端交互 - Mock</a>》。</p><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h3><p><code>Vue3版本</code> 的路由配置项是在 <code>Vue2版本</code> 上进行了扩充，也就意味着路由文件可直接拷贝到 <code>Vue3版本</code> 项目中。</p><p>另外在 <code>Vue2版本</code> 的应用配置里提供了 <code>enableFlatRoutes</code> 这项配置，如果原本就是开启状态，那无需注意，如果是未开启状态，那需要注意的是，在 <code>Vue3版本</code> 中多级路由会强制转为二级路由，可以理解为强制开启了 <code>enableFlatRoutes: true</code> 设置，如果你对这部分还不了解，可阅读《<a href="./router.html#多级路由">路由 - 基本配置 - 多级路由</a>》。</p><h3 id="页面缓存" tabindex="-1">页面缓存 <a class="header-anchor" href="#页面缓存" aria-label="Permalink to &quot;页面缓存&quot;">​</a></h3><p><code>Vue3版本</code> 中对页面缓存提供了更加智能的方式，从而无需像 <code>Vue2版本</code> 中在页面文件里手动添加缓存相关代码，只需在路由的配置项里设置 <code>cache</code> 以及 <code>noCache</code> 参数即可，具体可阅读《<a href="./keep-alive.html">页面缓存</a>》。</p><h3 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h3><p>国际化的入口文件有变化，从 <code>Vue2版本</code> 的 <code>/src/lang/index.js</code> 变为 <code>Vue3版本</code> 的 <code>/src/locales/index.ts</code> ，请比对后修改，同时语言包的目录也从 <code>/src/lang/packages/</code> 变为 <code>/src/locales/lang/</code> ，另外语言包的格式为 <code>.json</code> 文件，具体可阅读《<a href="./i18n.html">国际化</a>》。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>本篇迁移文档仅对整体做简单说明，迁移项目毕竟是个庞大工程，过程中难免会出现各种无法预测的问题，建议可以加讨论群自由讨论寻求帮助。</p>',32),r=[t];function h(u,l,i,n,s,p){return o(),a("div",null,r)}const m=e(d,[["render",h]]);export{_ as __pageData,m as default};