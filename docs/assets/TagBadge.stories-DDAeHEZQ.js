import{T as q,N as y}from"./NotuRender-bVHJs86c.js";import{n as b,a as E,b as k,c as n}from"./StoryHelpers-BgcIDcDq.js";import"./index-SSXOyoI7.js";/* empty css              */const _={title:"TagBadge",component:q,parameters:{layout:"centered"},tags:["autodocs"]},u=b("Space",1).clean(),C=b("Space 2",2).clean(),A={getSpacesData:async function(){return[{state:"CLEAN",id:1,name:"Space",version:"1.0.0",useCommonSpace:!1},{state:"CLEAN",id:2,name:"Space 2",version:"1.0.0",useCommonSpace:!1}]},getTagsData:async function(){return[{state:"CLEAN",id:123,name:"Test",spaceId:1,color:null,isPublic:!0,links:[]},{state:"CLEAN",id:234,name:"Test 2",spaceId:2,color:null,isPUblic:!0,links:[]}]}},U=new E(null,new k(A));U.cache.populate();const t=new y(U,null,e=>null),a={args:{tag:n("Test",123).in(u).clean(),contextSpaceId:1,onDelete:null,notuRenderTools:t}},o={args:{tag:n("Test",123).in(u).clean(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")},notuRenderTools:t}},s={args:{tag:n("Test 2",234).in(C).asPublic().clean(),contextSpaceId:1,onDelete:null,notuRenderTools:t}},r={args:{tag:n("Test 2",234).in(C).asPublic().clean(),contextSpaceId:1,onDelete:null,notuRenderTools:t,useUniqueName:!0}},c={args:{tag:(()=>{const e=n("Test",123).in(u).clean();return e.color="#FF0000",e})(),contextSpaceId:1,onDelete:null,notuRenderTools:t}},l={args:{tag:(()=>{const e=n("Test",123).in(u).clean();return e.color="#00FF00",e})(),contextSpaceId:1,onDelete:null,notuRenderTools:t}};var g,d,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,T;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    },
    notuRenderTools: renderTools
  }
}`,...(T=(m=o.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var S,D,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var I,x,N;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools,
    useUniqueName: true
  }
}`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var w,f,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#FF0000';
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(F=(f=c.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,B,P;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#00FF00';
      return tag;
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const O=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","SupportsUsingUniqueName","RedBadge","GreenBadge"];export{l as GreenBadge,a as Primary,c as RedBadge,s as ShowsSpaceNameIfRequired,r as SupportsUsingUniqueName,o as WithDeleteButton,O as __namedExportsOrder,_ as default};
