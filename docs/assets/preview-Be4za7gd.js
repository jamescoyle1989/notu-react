import{z as g,M as s}from"./index-B0VIIMBX.js";import"./index-CVPIwebV.js";const{global:m}=__STORYBOOK_MODULE_GLOBAL__;var r="storybook/highlight",d="storybookHighlight",H=`${r}/add`,_=`${r}/reset`,{document:h}=m,p=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,i=g.getChannel(),I=e=>{let t=d;n();let o=Array.from(new Set(e.elements)),l=h.createElement("style");l.setAttribute("id",t),l.innerHTML=o.map(a=>`${a}{
          ${p(e.color,e.style)}
         }`).join(" "),h.head.appendChild(l)},n=()=>{var o;let e=d,t=h.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};i.on(s,n);i.on(_,n);i.on(H,I);
