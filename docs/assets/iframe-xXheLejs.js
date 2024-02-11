import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",p=function(i,_){return new URL(i,_).href},E={},t=function(_,n,c){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=p(o,c),o in E)return;E[o]=!0;const a=o.endsWith(".css"),O=a?'[rel="stylesheet"]':"";if(!!c)for(let m=r.length-1;m>=0;m--){const l=r[m];if(l.href===o&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${O}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":d,a||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),a)return new Promise((m,l)=>{s.addEventListener("load",m),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./src/stories/AttrEditor.stories.ts":async()=>t(()=>import("./AttrEditor.stories-PdA9goDS.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/stories/Configure.mdx":async()=>t(()=>import("./Configure-y_5SUZhw.js"),__vite__mapDeps([7,1,2,3,8,9,10,11,12,13]),import.meta.url),"./src/stories/NoteAttrBadge.stories.ts":async()=>t(()=>import("./NoteAttrBadge.stories-WOIX6PIQ.js"),__vite__mapDeps([14,1,2,3,4,5,15]),import.meta.url),"./src/stories/NoteAttrEditor.stories.ts":async()=>t(()=>import("./NoteAttrEditor.stories-fdnkPfWT.js"),__vite__mapDeps([16,17,1,2,3,18,4,5]),import.meta.url),"./src/stories/NoteEditor.stories.ts":async()=>t(()=>import("./NoteEditor.stories-98aPR7sz.js"),__vite__mapDeps([19,1,2,3,20,4,5,21,17,18,22]),import.meta.url),"./src/stories/NoteSearch.stories.ts":async()=>t(()=>import("./NoteSearch.stories-D7o7gBy0.js"),__vite__mapDeps([23,1,2,3,4,5,24]),import.meta.url),"./src/stories/NoteTagBadge.stories.ts":async()=>t(()=>import("./NoteTagBadge.stories-xGrH93x8.js"),__vite__mapDeps([25,20,1,2,3,4,5,21]),import.meta.url),"./src/stories/SimpleNoteList.stories.ts":async()=>t(()=>import("./SimpleNoteList.stories-kqWctTCs.js"),__vite__mapDeps([26,1,2,3,27,4,5,20,21,28]),import.meta.url),"./src/stories/SimpleNoteViewer.stories.ts":async()=>t(()=>import("./SimpleNoteViewer.stories-U-wi6kZ1.js"),__vite__mapDeps([29,27,1,2,3,4,5,20,21,28]),import.meta.url),"./src/stories/SpaceEditor.stories.ts":async()=>t(()=>import("./SpaceEditor.stories-Vh2x2sG_.js"),__vite__mapDeps([30,1,2,3,4,5,6]),import.meta.url)};async function T(i){return P[i]()}const{composeConfigs:L,PreviewWeb:w,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-PSo23f1w.js"),__vite__mapDeps([31,2,3,32,9]),import.meta.url),t(()=>import("./entry-preview-docs-Zsivb1kh.js"),__vite__mapDeps([33,11,3,12,2]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([34,10]),import.meta.url),t(()=>import("./preview-wB0r6RSM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([35,12]),import.meta.url),t(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([36,12]),import.meta.url),t(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([37,12]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([38,3]),import.meta.url),t(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return L(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AttrEditor.stories-PdA9goDS.js","./jsx-runtime-VmuvLVu_.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./notu-aEA2dNOf.js","./notu-8PfibE0v.css","./AttrEditor-aGju33ug.css","./Configure-y_5SUZhw.js","./index-B_yspqV0.js","./index-9vG4XYWr.js","./index-ogXoivrg.js","./index-mLPG47JP.js","./index-PPLHz8o0.js","./index-7MmEg4M7.js","./NoteAttrBadge.stories-WOIX6PIQ.js","./NoteAttrBadge-5aOfyWJa.css","./NoteAttrEditor.stories-fdnkPfWT.js","./NoteAttrEditor-moSMD9s9.js","./NoteAttrEditor-ua3KsgUj.css","./NoteEditor.stories-98aPR7sz.js","./NoteTagBadge-xl3fl_OO.js","./NoteTagBadge-vI6odZy-.css","./NoteEditor-k1KoIXQG.css","./NoteSearch.stories-D7o7gBy0.js","./NoteSearch-DS5S83Y-.css","./NoteTagBadge.stories-xGrH93x8.js","./SimpleNoteList.stories-kqWctTCs.js","./SimpleNoteViewer-FKbAqmUg.js","./SimpleNoteViewer-I8PwhgCg.css","./SimpleNoteViewer.stories-U-wi6kZ1.js","./SpaceEditor.stories-Vh2x2sG_.js","./entry-preview-PSo23f1w.js","./react-18-sFOusbzT.js","./entry-preview-docs-Zsivb1kh.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}