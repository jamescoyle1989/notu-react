import{n as S,b as _,a as b,c as N}from"./StoryHelpers-Nro3gCTf.js";import{j as y,a as c}from"./jsx-runtime-VmuvLVu_.js";import{r as F}from"./index-XiNr8FW2.js";import{a as L,N as P}from"./NoteViewer-Pppd2jv9.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";const l=({notes:r,actionsGenerator:o,actionsPanel:p=null,isVisible:h=!0,noteViewer:m=null})=>{const[f,v]=F.useState(null);function G(e){const n=new Map;for(const a of e){let t=n.get(a.space);t==null&&(t=[],n.set(a.space,t)),t.push(a)}return n}function q(e){return Array.from(e.keys()).sort((a,t)=>a.name.localeCompare(t.name))}if(!h)return;function x(){if(p)return p()}function I(e,n){const a=e.get(n);return y("div",{children:[c("h2",{className:"title is-4 is-underlined mb-1 mt-3",children:n.name}),a.map(t=>c("div",{onClick:()=>v(t),children:M(t)},t.id))]},n.name)}function M(e,n){return m?m(e,o(e),f===e):c(L,{note:e,actions:o(e),isSelected:f===e})}const g=G(r);return y("div",{children:[x(),q(g).map(e=>I(g,e))]})};try{l.displayName="MultiSpaceNoteList",l.__docgenInfo={description:"",displayName:"MultiSpaceNoteList",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"any"}},actionsGenerator:{defaultValue:null,description:"",name:"actionsGenerator",required:!0,type:{name:"any"}},actionsPanel:{defaultValue:{value:"null"},description:"",name:"actionsPanel",required:!1,type:{name:"any"}},isVisible:{defaultValue:{value:"true"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},noteViewer:{defaultValue:{value:"null"},description:"",name:"noteViewer",required:!1,type:{name:"any"}}}}}catch{}const Q={title:"MultiSpaceNoteList",component:l,parameters:{layout:"padded"},tags:["autodocs"]},i=S("Space 1",1).clean(),T=S("Space 2",2).clean(),u=_("Tag 1",1).in(i);u.color="#FF0000";u.clean();const d=_("Tag 2",2).in(T);d.color="#00FF00";d.clean();const j=b("Attr 1",1).in(i).asNumber().clean(),k=b("Attr 2",2).in(i).asNumber().clean(),s={args:{notes:(()=>{const r=N("I am a note in space 1",123).in(i);r.addTag(u).addAttr(j,500);const o=N("I am a note in space 2",234).in(T);return o.addTag(d).addAttr(k,600),[r,o]})(),actionsGenerator:r=>[new P("Test",o=>{})],isVisible:!0}};var w,V,A;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = newNote('I am a note in space 1', 123).in(space1);
      note1.addTag(tag1).addAttr(attr1, 500);
      const note2 = newNote('I am a note in space 2', 234).in(space2);
      note2.addTag(tag2).addAttr(attr2, 600);
      return [note1, note2];
    })(),
    actionsGenerator: n => {
      return [new NoteViewerAction('Test', n => {})];
    },
    isVisible: true
  }
}`,...(A=(V=s.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const R=["Primary"];export{s as Primary,R as __namedExportsOrder,Q as default};
