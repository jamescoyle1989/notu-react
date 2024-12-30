import{a as v}from"./NoteViewer-dcVEBox3.js";import{n as E,a as G,b as J,c as a,N as t}from"./StoryHelpers-BgcIDcDq.js";import{T as W}from"./ReactSnippets-BfUqKE1P.js";import{N as k}from"./NotuRender-bVHJs86c.js";import"./index-SSXOyoI7.js";/* empty css              */const Q={title:"NoteTagBadge",component:v,parameters:{layout:"centered"},tags:["autodocs"]},n=E("Space",1).clean(),A=E("Space 2",2).clean(),_={getSpacesData:async function(){return[{state:"CLEAN",id:1,name:"Space",version:"1.0.0",useCommonSpace:!1},{state:"CLEAN",id:2,name:"Space 2",version:"1.0.0",useCommonSpace:!1}]},getTagsData:async function(){return[{state:"CLEAN",id:123,name:"Test",spaceId:1,color:null,isPublic:!0,links:[]},{state:"CLEAN",id:234,name:"Test 2",spaceId:2,color:null,isPUblic:!0,links:[]}]}},L=new G(null,new J(_));L.cache.populate();const o=new k(L,null,e=>null),s={args:{noteTag:(()=>{const e=a("Test",123).in(n).clean();return new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,notuRenderTools:o}},r={args:{noteTag:(()=>{const e=a("Test",123).in(n).clean();return new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")},notuRenderTools:o}},c={args:{noteTag:(()=>{const e=a("Test 2",234).in(A).asPublic().clean();return new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,notuRenderTools:o}},l={args:{noteTag:(()=>{const e=a("Test 2",234).in(A).asPublic().clean();return new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,notuRenderTools:o,useUniqueName:!0}},d={args:{noteTag:(()=>{const e=a("Test",123).in(n).clean();return e.color="#FF0000",new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,notuRenderTools:o}},u={args:{noteTag:(()=>{const e=a("Test",123).in(n).clean();return e.color="#00FF00",new t().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,notuRenderTools:o}},g={args:{noteTag:(()=>{const e=a("Test",123).in(n).clean();return new t().in(n).addTag(e).withData({name:"James"})})(),contextSpaceId:1,onDelete:null,notuRenderTools:new k(null,null,e=>{if(e.id==123)return new W})}};var p,i,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(T=(i=s.parameters)==null?void 0:i.docs)==null?void 0:T.source}}};var m,S,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    },
    notuRenderTools: renderTools
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,D,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var I,x,f;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test 2', 234).in(space2).asPublic().clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools,
    useUniqueName: true
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,F,h;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#FF0000';
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(h=(F=d.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var B,P,b;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#00FF00';
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: renderTools
  }
}`,...(b=(P=u.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var y,U,q;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().in(space1).addTag(tag).withData({
        name: 'James'
      });
    })(),
    contextSpaceId: 1,
    onDelete: null,
    notuRenderTools: new NotuRenderTools(null, null, t => {
      if (t.id == 123) return new TestNoteTagDataComponentFactory();
    })
  }
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const V=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","SupportsUsingUniqueName","RedBadge","GreenBadge","BadgeSupportsDataComponent"];export{g as BadgeSupportsDataComponent,u as GreenBadge,s as Primary,d as RedBadge,c as ShowsSpaceNameIfRequired,l as SupportsUsingUniqueName,r as WithDeleteButton,V as __namedExportsOrder,Q as default};
