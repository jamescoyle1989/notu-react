import{N as P}from"./NoteSearch-DLX0tohj.js";import{n as x,N as l}from"./StoryHelpers-BgcIDcDq.js";import"./index-SSXOyoI7.js";/* empty css              */const O={title:"NoteSearch",component:P,parameters:{layout:"padded"},tags:["autodocs"]};class p{async getNotes(c,I){return console.log({query:c,spaceId:I}),Promise.resolve([new l("Note 1"),new l("Note 2")])}}const o=x("Test1",1),n={args:{space:o,notu:new p,onFetched:console.log,onQueryChanged:e=>console.log("Query changed: "+e)}},r={args:{space:o,notu:new p,onFetched:console.log,query:"#Tag"}},a={args:{space:o,notu:new p,onFetched:e=>console.log(e),query:"I like pies",onQueryChanged:console.log}},s={args:{space:o,onFetchRequested:(e,c)=>Promise.resolve([new l("I am a manually generated note.")]),onFetched:console.log}},t={args:{space:o,onFetchRequested:(e,c)=>{throw new Error("Something went wrong!")},onFetched:console.log}};var u,d,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: console.log,
    onQueryChanged: query => console.log('Query changed: ' + query)
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,i,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: console.log,
    query: '#Tag'
  }
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var y,F,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    space: space1,
    notu: (new FakeHttpClient() as any),
    onFetched: notes => console.log(notes),
    query: 'I like pies',
    onQueryChanged: console.log
  }
}`,...(w=(F=a.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var C,q,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query: string, space: Space) => {
      return Promise.resolve([new Note('I am a manually generated note.')]);
    },
    onFetched: console.log
  }
}`,...(N=(q=s.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var S,Q,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query: string, space: Space) => {
      throw new Error('Something went wrong!');
    },
    onFetched: console.log
  }
}`,...(k=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:k.source}}};const T=["Primary","TextBoxIsDisabledIfNoOnQueryChanged","OnQueryChangedCallbackGetsCalled","CanManuallyProcessNoteFetching","HandlesErrorReturnedFromFetch"];export{s as CanManuallyProcessNoteFetching,t as HandlesErrorReturnedFromFetch,a as OnQueryChangedCallbackGetsCalled,n as Primary,r as TextBoxIsDisabledIfNoOnQueryChanged,T as __namedExportsOrder,O as default};
