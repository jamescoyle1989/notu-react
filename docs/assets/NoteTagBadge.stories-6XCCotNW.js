import{N as F}from"./NoteTagBadge-IT_LJgyr.js";import{n as B,b as t,N as n}from"./StoryHelpers-Nro3gCTf.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";const _={title:"NoteTagBadge",component:F,parameters:{layout:"centered"},tags:["autodocs"]},g=B("Space",1).clean(),f=B("Space 2",2).clean(),a={args:{noteTag:(()=>{const e=t("Test",123).in(g).clean();return new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},r={args:{noteTag:(()=>{const e=t("Test",123).in(g).clean();return new n().addTag(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")},showAttrs:!0}},o={args:{noteTag:(()=>{const e=t("Test",123).in(f).clean();return new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},s={args:{noteTag:(()=>{const e=t("Test",123).in(g).clean();return e.color="#FF0000",new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},c={args:{noteTag:(()=>{const e=t("Test",123).in(g).clean();return e.color="#00FF00",new n().addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,T,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    },
    showAttrs: true
  }
}`,...(m=(T=r.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var i,w,S;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space2).clean();
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var h,D,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#FF0000';
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(x=(D=s.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var I,N,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#00FF00';
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const b=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","RedBadge","GreenBadge"];export{c as GreenBadge,a as Primary,s as RedBadge,o as ShowsSpaceNameIfRequired,r as WithDeleteButton,b as __namedExportsOrder,_ as default};
