import{N as Q}from"./NoteSearch-89-7qCSH.js";import{n as k,N as t}from"./StoryHelpers-wxWbWVo0.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */const T={title:"NoteSearch",component:Q,parameters:{layout:"padded"},tags:["autodocs"]};class c{async getNotes(l,q){return console.log({query:l,spaceId:q}),Promise.resolve([new t("Note 1"),new t("Note 2")])}}const r=k("Test1",1),o={args:{space:r,notu:new c,onFetched:console.log,onQueryChanged:e=>console.log("Query changed: "+e)}},n={args:{space:r,notu:new c,onFetched:console.log,query:"#Tag AND @Attr.Exists"}},a={args:{space:r,notu:new c,onFetched:e=>console.log(e),query:"I like pies",onQueryChanged:console.log}},s={args:{space:r,onFetchRequested:(e,l)=>Promise.resolve([new t("I am a manually generated note.")]),onFetched:console.log}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: console.log,
    onQueryChanged: query => console.log('Query changed: ' + query)
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,m,i;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: console.log,
    query: '#Tag AND @Attr.Exists'
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var y,h,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: notes => console.log(notes),
    query: 'I like pies',
    onQueryChanged: console.log
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var F,N,w;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query: string, space: Space) => {
      return Promise.resolve([new Note('I am a manually generated note.')]);
    },
    onFetched: console.log
  }
}`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const b=["Primary","TextBoxIsDisabledIfNoOnQueryChanged","OnQueryChangedCallbackGetsCalled","CanManuallyProcessNoteFetching"];export{s as CanManuallyProcessNoteFetching,a as OnQueryChangedCallbackGetsCalled,o as Primary,n as TextBoxIsDisabledIfNoOnQueryChanged,b as __namedExportsOrder,T as default};
