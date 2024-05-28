import{N as F}from"./NoteTagBadge-IT_LJgyr.js";import{n as B,b as t,N as a}from"./StoryHelpers-wxWbWVo0.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";const W={title:"NoteTagBadge",component:F,parameters:{layout:"centered"},tags:["autodocs"]},n=B("Space",1).clean(),f=B("Space 2",2).clean(),r={args:{noteTag:(()=>{const e=t("Test",123).in(n).clean();return new a().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},o={args:{noteTag:(()=>{const e=t("Test",123).in(n).clean();return new a().in(n).addTag(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")},showAttrs:!0}},s={args:{noteTag:(()=>{const e=t("Test",123).in(f).asPublic().clean();return new a().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},c={args:{noteTag:(()=>{const e=t("Test",123).in(n).clean();return e.color="#FF0000",new a().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}},g={args:{noteTag:(()=>{const e=t("Test",123).in(n).clean();return e.color="#00FF00",new a().in(n).addTag(e)})(),contextSpaceId:1,onDelete:null,showAttrs:!0}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,i,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      return new Note().in(space1).addTag(tag);
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
      const tag = newTag('Test', 123).in(space2).asPublic().clean();
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var h,D,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#FF0000';
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var I,N,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = newTag('Test', 123).in(space1).clean();
      tag.color = '#00FF00';
      return new Note().in(space1).addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null,
    showAttrs: true
  }
}`,...(A=(N=g.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const _=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","RedBadge","GreenBadge"];export{g as GreenBadge,r as Primary,c as RedBadge,s as ShowsSpaceNameIfRequired,o as WithDeleteButton,_ as __namedExportsOrder,W as default};
