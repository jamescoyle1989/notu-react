import{N as S}from"./NoteSearch-vy-Cx2Un.js";import{S as q,N as t}from"./notu-B7rita-q.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */const b={title:"NoteSearch",component:S,parameters:{layout:"padded"},tags:["autodocs"]};class c{async getNotes(l,Q){return console.log({query:l,spaceId:Q}),Promise.resolve([new t("Note 1"),new t("Note 2")])}}const n=new q("Test1");n.id=1;const k=new q("Test2");k.id=2;const o={args:{space:n,notuClient:new c,onFetched:console.log,onQueryChanged:e=>console.log("Query changed: "+e)}},a={args:{space:n,notuClient:new c,onFetched:console.log,query:"#Tag AND @Attr.Exists"}},s={args:{space:n,notuClient:new c,onFetched:e=>console.log(e),query:"I like pies",onQueryChanged:console.log}},r={args:{space:n,onFetchRequested:(e,l)=>Promise.resolve([new t("I am a manually generated note.")]),onFetched:console.log}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    space: space1,
    notuClient: (new FakeHttpClient() as any),
    onFetched: console.log,
    onQueryChanged: query => console.log('Query changed: ' + query)
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,i,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    space: space1,
    notuClient: (new FakeHttpClient() as any),
    onFetched: console.log,
    query: '#Tag AND @Attr.Exists'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var y,h,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    space: space1,
    notuClient: (new FakeHttpClient() as any),
    onFetched: notes => console.log(notes),
    query: 'I like pies',
    onQueryChanged: console.log
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var F,N,w;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query: string, space: Space) => {
      return Promise.resolve([new Note('I am a manually generated note.')]);
    },
    onFetched: console.log
  }
}`,...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const A=["Primary","TextBoxIsDisabledIfNoOnQueryChanged","OnQueryChangedCallbackGetsCalled","CanManuallyProcessNoteFetching"];export{r as CanManuallyProcessNoteFetching,s as OnQueryChangedCallbackGetsCalled,o as Primary,a as TextBoxIsDisabledIfNoOnQueryChanged,A as __namedExportsOrder,b as default};
