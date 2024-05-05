import{N as f}from"./NoteTagBadge-AUqrHrt_.js";import{S as B,T as t,N as n}from"./notu-B7rita-q.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";const _={title:"NoteTagBadge",component:f,parameters:{layout:"centered"},tags:["autodocs"]},a=new B("Space").clean();a.id=1;const F=new B("Space 2").clean();F.id=2;const r={args:{noteTag:(()=>{const e=new t("Test").in(a).clean();return e.id=123,new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},o={args:{noteTag:(()=>{const e=new t("Test").in(a).clean();return e.id=123,new n().addTag(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")},showAttrs:!0}},s={args:{noteTag:(()=>{const e=new t("Test").in(F).clean();return e.id=123,new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},c={args:{noteTag:(()=>{const e=new t("Test").in(a).clean();return e.color="#FF0000",e.id=123,new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},d={args:{noteTag:(()=>{const e=new t("Test").in(a).clean();return e.color="#00FF00",e.id=123,new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}};var g,l,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test').in(space1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,i,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test').in(space1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    },
    showAttrs: true
  }
}`,...(T=(i=o.parameters)==null?void 0:i.docs)==null?void 0:T.source}}};var m,w,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test').in(space2).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var h,D,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test').in(space1).clean();
      tag.color = '#FF0000';
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var I,N,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test').in(space1).clean();
      tag.color = '#00FF00';
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const E=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","RedBadge","GreenBadge"];export{d as GreenBadge,r as Primary,c as RedBadge,s as ShowsSpaceNameIfRequired,o as WithDeleteButton,E as __namedExportsOrder,_ as default};
