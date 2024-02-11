import{j as V,a as t}from"./jsx-runtime-VmuvLVu_.js";import{r as d}from"./index-XiNr8FW2.js";import{S as C,N as m}from"./notu-aEA2dNOf.js";import"./_commonjsHelpers-5-cIlDoe.js";const j="_notesearch_base_9i0a9_1",A="_notesearch_text_9i0a9_9",h={notesearch_base:j,notesearch_text:A},i=({notuClient:a,space:l,availableSpaces:n,onFetch:x})=>{const[p,w]=d.useState(""),[s,F]=d.useState(l);function T(e){w(e.target.value)}function u(e){F(n.find(H=>H.id==e.target.value))}async function k(){const e=await a.getNotes(p,s.id);x(e)}function q(){return n?t("select",{value:s.id,onChange:u,children:n.map(e=>t("option",{value:e.id,children:e.name},e.id))}):t("select",{value:s.id,onChange:u,disabled:!0,children:t("option",{value:s.id,children:s.name})})}return V("div",{className:h.notesearch_base,children:[q(),t("input",{type:"text",className:h.notesearch_text,value:p,onChange:T}),t("button",{onClick:k,children:"Search"})]})};try{i.displayName="NoteSearch",i.__docgenInfo={description:"",displayName:"NoteSearch",props:{notuClient:{defaultValue:null,description:"",name:"notuClient",required:!0,type:{name:"HttpClient"}},space:{defaultValue:null,description:"",name:"space",required:!0,type:{name:"Space"}},availableSpaces:{defaultValue:null,description:"",name:"availableSpaces",required:!0,type:{name:"Space[]"}},onFetch:{defaultValue:null,description:"",name:"onFetch",required:!0,type:{name:"(notes: Note[]) => void"}}}}}catch{}const O={title:"NoteSearch",component:i,parameters:{layout:"padded"},tags:["autodocs"]};class f{async getNotes(l,n){return console.log({query:l,spaceId:n}),Promise.resolve([new m("Note 1"),new m("Note 2")])}}const r=new C("Test1");r.id=1;const b=new C("Test2");b.id=2;const o={args:{space:r,availableSpaces:[r,b],notuClient:new f,onFetch:a=>console.log(a)}},c={args:{space:r,availableSpaces:null,notuClient:new f,onFetch:a=>console.log(a)}};var S,_,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    space: space1,
    availableSpaces: [space1, space2],
    notuClient: (new FakeHttpClient() as any),
    onFetch: notes => console.log(notes)
  }
}`,...(g=(_=o.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var v,y,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    space: space1,
    availableSpaces: null,
    notuClient: (new FakeHttpClient() as any),
    onFetch: notes => console.log(notes)
  }
}`,...(N=(y=c.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const R=["Primary","NoAvailableSpaces"];export{c as NoAvailableSpaces,o as Primary,R as __namedExportsOrder,O as default};
