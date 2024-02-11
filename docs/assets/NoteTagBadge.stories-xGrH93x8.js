import{N as h}from"./NoteTagBadge-xl3fl_OO.js";import{T as n,N as t,S as g}from"./notu-aEA2dNOf.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const P={title:"NoteTagBadge",component:h,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{noteTag:(()=>{const e=new n("Test",1).clean();return e.id=123,new t().addTag(e)})(),contextSpaceId:1,onDelete:null}},o={args:{noteTag:(()=>{const e=new n("Test",1).clean();return e.id=123,new t().addTag(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},s={args:{noteTag:(()=>{const e=new n("Test",2).clean();e.id=123;const a=new g("Space 2").clean();return a.id=2,e.space=a,new t().addTag(e)})(),contextSpaceId:1,onDelete:null}},r={args:{noteTag:(()=>{const e=new n("Test",1).clean();e.color="#FF0000",e.id=123;const a=new g("Space").clean();return a.id=1,e.space=a,new t().addTag(e)})(),contextSpaceId:1,onDelete:null}},d={args:{noteTag:(()=>{const e=new n("Test",1).clean();e.color="#00FF00",e.id=123;const a=new g("Space").clean();return a.id=1,e.space=a,new t().addTag(e)})(),contextSpaceId:1,onDelete:null}};var p,l,i;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(i=(l=c.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,T,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(m=(T=o.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var S,w,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 2).clean();
      tag.id = 123;
      const space = new Space('Space 2').clean();
      space.id = 2;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var x,I,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.color = '#FF0000';
      tag.id = 123;
      const space = new Space('Space').clean();
      space.id = 1;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(N=(I=r.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var B,F,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.color = '#00FF00';
      tag.id = 123;
      const space = new Space('Space').clean();
      space.id = 1;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(f=(F=d.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const W=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","RedBadge","GreenBadge"];export{d as GreenBadge,c as Primary,r as RedBadge,s as ShowsSpaceNameIfRequired,o as WithDeleteButton,W as __namedExportsOrder,P as default};
