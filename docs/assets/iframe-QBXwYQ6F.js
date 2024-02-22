import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",p=function(i,_){return new URL(i,_).href},E={},t=function(_,n,c){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=p(o,c),o in E)return;E[o]=!0;const a=o.endsWith(".css"),O=a?'[rel="stylesheet"]':"";if(!!c)for(let m=r.length-1;m>=0;m--){const l=r[m];if(l.href===o&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${O}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":d,a||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),a)return new Promise((m,l)=>{s.addEventListener("load",m),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./src/stories/AttrEditor.stories.ts":async()=>t(()=>import("./AttrEditor.stories-NiKYvHu1.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>t(()=>import("./Configure-y0mbfoQ5.js"),__vite__mapDeps([6,1,2,3,7,8,9,10,11,12]),import.meta.url),"./src/stories/NoteAttrBadge.stories.ts":async()=>t(()=>import("./NoteAttrBadge.stories-N816CTsZ.js"),__vite__mapDeps([13,1,2,3,4,5]),import.meta.url),"./src/stories/NoteAttrEditor.stories.ts":async()=>t(()=>import("./NoteAttrEditor.stories-s2ESiAWX.js"),__vite__mapDeps([14,15,1,2,3,4,5]),import.meta.url),"./src/stories/NoteEditor.stories.ts":async()=>t(()=>import("./NoteEditor.stories-6dqLDCQc.js"),__vite__mapDeps([16,1,2,3,17,4,5,15]),import.meta.url),"./src/stories/NoteSearch.stories.ts":async()=>t(()=>import("./NoteSearch.stories--2lzWjWd.js"),__vite__mapDeps([18,1,2,3,4,5]),import.meta.url),"./src/stories/NoteTagBadge.stories.ts":async()=>t(()=>import("./NoteTagBadge.stories-czwDgVJn.js"),__vite__mapDeps([19,17,1,2,3,4,5]),import.meta.url),"./src/stories/SimpleNoteList.stories.ts":async()=>t(()=>import("./SimpleNoteList.stories-AMjeIuQr.js"),__vite__mapDeps([20,1,2,3,21,4,5,17]),import.meta.url),"./src/stories/SimpleNoteViewer.stories.ts":async()=>t(()=>import("./SimpleNoteViewer.stories-KxFMdsZ0.js"),__vite__mapDeps([22,21,1,2,3,4,5,17]),import.meta.url),"./src/stories/SpaceEditor.stories.ts":async()=>t(()=>import("./SpaceEditor.stories-TZ5Per_9.js"),__vite__mapDeps([23,1,2,3,4,5]),import.meta.url)};async function T(i){return P[i]()}const{composeConfigs:L,PreviewWeb:w,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-PSo23f1w.js"),__vite__mapDeps([24,2,3,25,8]),import.meta.url),t(()=>import("./entry-preview-docs-Zsivb1kh.js"),__vite__mapDeps([26,10,3,11,2]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([27,9]),import.meta.url),t(()=>import("./preview-cG0Cry4d.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([28,11]),import.meta.url),t(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([29,11]),import.meta.url),t(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([30,11]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([31,3]),import.meta.url),t(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AttrEditor.stories-NiKYvHu1.js","./jsx-runtime-VmuvLVu_.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./notu-Zi0Mo9zw.js","./notu-o5Zt8AAx.css","./Configure-y0mbfoQ5.js","./index-DOr0FUH5.js","./index-9vG4XYWr.js","./index-ogXoivrg.js","./index-mLPG47JP.js","./index-PPLHz8o0.js","./index-7MmEg4M7.js","./NoteAttrBadge.stories-N816CTsZ.js","./NoteAttrEditor.stories-s2ESiAWX.js","./NoteAttrEditor-BAMDFnwu.js","./NoteEditor.stories-6dqLDCQc.js","./NoteTagBadge-CiaD47-G.js","./NoteSearch.stories--2lzWjWd.js","./NoteTagBadge.stories-czwDgVJn.js","./SimpleNoteList.stories-AMjeIuQr.js","./SimpleNoteViewer-KYrQ0BSj.js","./SimpleNoteViewer.stories-KxFMdsZ0.js","./SpaceEditor.stories-TZ5Per_9.js","./entry-preview-PSo23f1w.js","./react-18-sFOusbzT.js","./entry-preview-docs-Zsivb1kh.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
