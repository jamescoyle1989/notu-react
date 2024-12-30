import{H as A,F as E,s as D}from"./index-B0VIIMBX.js";import{d as Y}from"./index-DrFu-skq.js";import"./index-CVPIwebV.js";const{global:j}=__STORYBOOK_MODULE_GLOBAL__;var g="backgrounds",R={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:$,window:G}=j,F=()=>{var r;return!!((r=G==null?void 0:G.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&r.matches)},B=r=>{(Array.isArray(r)?r:[r]).forEach(K)},K=r=>{var t;let e=$.getElementById(r);e&&((t=e.parentElement)==null||t.removeChild(e))},I=(r,e)=>{let t=$.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let d=$.createElement("style");d.setAttribute("id",r),d.innerHTML=e,$.head.appendChild(d)}},z=(r,e,t)=>{var a;let d=$.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let o=$.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,n=$.getElementById(i);n?(a=n.parentElement)==null||a.insertBefore(o,n):$.head.appendChild(o)}},P={cellSize:100,cellAmount:10,opacity:.8},C="addon-backgrounds",O="addon-backgrounds-grid",X=F()?"":"transition: background-color 0.3s;",N=(r,e)=>{let{globals:t,parameters:d,viewMode:a,id:o}=e,{options:i=R,disable:n,grid:s=P}=d[g]||{},c=t[g]||{},u=c.value,l=u?i[u]:void 0,b=(l==null?void 0:l.value)||"transparent",f=c.grid||!1,y=!!l&&!n,m=a==="docs"?`#anchor--${o} .docs-story`:".sb-show-main",h=a==="docs"?`#anchor--${o} .docs-story`:".sb-show-main",H=d.layout===void 0||d.layout==="padded",L=a==="docs"?20:H?16:0,{cellAmount:k,cellSize:p,opacity:x,offsetX:v=L,offsetY:S=L}=s,M=a==="docs"?`${C}-docs-${o}`:`${C}-color`,_=a==="docs"?o:null;A(()=>{let T=`
    ${m} {
      background: ${b} !important;
      ${X}
      }`;if(!y){B(M);return}z(M,T,_)},[m,M,_,y,b]);let w=a==="docs"?`${O}-docs-${o}`:`${O}`;return A(()=>{if(!f){B(w);return}let T=[`${p*k}px ${p*k}px`,`${p*k}px ${p*k}px`,`${p}px ${p}px`,`${p}px ${p}px`].join(", "),U=`
        ${h} {
          background-size: ${T} !important;
          background-position: ${v}px ${S}px, ${v}px ${S}px, ${v}px ${S}px, ${v}px ${S}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${x/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${x/2}) 1px, transparent 1px) !important;
        }
      `;I(w,U)},[k,p,h,w,f,v,S,x]),r()},q=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r)||r)return r;let d=e.find(a=>a.name===t);if(d)return d.value;if(t){let a=e.map(o=>o.name).join(", ");D.warn(Y`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},J=(r,e)=>{var u;let{globals:t,parameters:d}=e,a=(u=t[g])==null?void 0:u.value,o=d[g],i=E(()=>o.disable?"transparent":q(a,o.values,o.default),[o,a]),n=E(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=E(()=>`
      ${s} {
        background: ${i} !important;
        ${F()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return A(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!n){B(l);return}z(l,c,e.viewMode==="docs"?e.id:null)},[n,c,e]),r()},Q=(r,e)=>{var y;let{globals:t,parameters:d}=e,a=d[g].grid,o=((y=t[g])==null?void 0:y.grid)===!0&&a.disable!==!0,{cellAmount:i,cellSize:n,opacity:s}=a,c=e.viewMode==="docs",u=d.layout===void 0||d.layout==="padded"?16:0,l=a.offsetX??(c?20:u),b=a.offsetY??(c?20:u),f=E(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${n*i}px ${n*i}px`,`${n*i}px ${n*i}px`,`${n}px ${n}px`,`${n}px ${n}px`].join(", ");return`
      ${m} {
        background-size: ${h} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[n]);return A(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){B(m);return}I(m,f)},[o,f,e]),r()},re=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?[N]:[Q,J],ae={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!(FEATURES!=null&&FEATURES.backgroundsStoryGlobals)&&{values:Object.values(R)}}},W={[g]:{value:void 0,grid:!1}},de=FEATURES!=null&&FEATURES.backgroundsStoryGlobals?W:{[g]:null};export{re as decorators,de as initialGlobals,ae as parameters};
