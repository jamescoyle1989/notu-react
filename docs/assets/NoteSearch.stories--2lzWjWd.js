import{j as H,a as e}from"./jsx-runtime-VmuvLVu_.js";import{r as u}from"./index-XiNr8FW2.js";import{S as y,N as m}from"./notu-Zi0Mo9zw.js";import"./_commonjsHelpers-5-cIlDoe.js";const i=({notuClient:t,space:l,availableSpaces:n,onFetch:b})=>{const[p,_]=u.useState(""),[s,x]=u.useState(l);function F(a){_(a.target.value)}function d(a){x(n.find(q=>q.id==a.target.value))}async function T(){const a=await t.getNotes(p,s.id);b(a)}function k(){return n?e("div",{className:"control",children:e("div",{className:"select",children:e("select",{value:s.id,onChange:d,children:n.map(a=>e("option",{value:a.id,children:a.name},a.id))})})}):e("div",{className:"control",children:e("div",{className:"select",children:e("select",{value:s.id,onChange:d,disabled:!0,children:e("option",{value:s.id,children:s.name})})})})}return H("div",{className:"field has-addons is-flex",children:[k(),e("div",{className:"control is-flex-grow-1",children:e("input",{type:"text",className:"input",value:p,onChange:F})}),e("div",{className:"control",children:e("button",{className:"button",onClick:T,children:"Search"})})]})};try{i.displayName="NoteSearch",i.__docgenInfo={description:"",displayName:"NoteSearch",props:{notuClient:{defaultValue:null,description:"",name:"notuClient",required:!0,type:{name:"HttpClient"}},space:{defaultValue:null,description:"",name:"space",required:!0,type:{name:"Space"}},availableSpaces:{defaultValue:null,description:"",name:"availableSpaces",required:!0,type:{name:"Space[]"}},onFetch:{defaultValue:null,description:"",name:"onFetch",required:!0,type:{name:"(notes: Note[]) => void"}}}}}catch{}const E={title:"NoteSearch",component:i,parameters:{layout:"padded"},tags:["autodocs"]};class C{async getNotes(l,n){return console.log({query:l,spaceId:n}),Promise.resolve([new m("Note 1"),new m("Note 2")])}}const r=new y("Test1");r.id=1;const w=new y("Test2");w.id=2;const o={args:{space:r,availableSpaces:[r,w],notuClient:new C,onFetch:t=>console.log(t)}},c={args:{space:r,availableSpaces:null,notuClient:new C,onFetch:t=>console.log(t)}};var h,S,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    space: space1,
    availableSpaces: [space1, space2],
    notuClient: (new FakeHttpClient() as any),
    onFetch: notes => console.log(notes)
  }
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,N,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    space: space1,
    availableSpaces: null,
    notuClient: (new FakeHttpClient() as any),
    onFetch: notes => console.log(notes)
  }
}`,...(f=(N=c.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const D=["Primary","NoAvailableSpaces"];export{c as NoAvailableSpaces,o as Primary,D as __namedExportsOrder,E as default};
