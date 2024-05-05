import{N as b}from"./NoteAttrBadge-2pOiyd8Z.js";import{S as k,A as n,N as a,T as f}from"./notu-B7rita-q.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";const j={title:"NoteAttrBadge",component:b,parameters:{layout:"centered"},tags:["autodocs"]},t=new k("Space 1").clean();t.id=1;const B=new k("Space 2").clean();B.id=2;const r={args:{noteAttr:(()=>{const e=new n("Test").in(t).asNumber().clean();return e.id=123,new a().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:null}},o={args:{noteAttr:(()=>{const e=new n("Test").in(t).asNumber().clean();return e.id=123,new a().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},c={args:{noteAttr:(()=>{const e=new n("Attr").in(t).asNumber().clean();e.id=123;const d=new f("Tag").in(B).clean();return d.id=234,new a().addAttr(e).onTag(d).withValue(15)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},s={args:{noteAttr:(()=>{const e=new n("Attr").in(t).asBoolean().clean();return e.id=234,new a().addAttr(e).withValue(!1)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},l={args:{noteAttr:(()=>{const e=new n("Attr").in(t).asDate().clean();return e.id=234,new a().addAttr(e).withValue(new Date(2024,6,5,17,23,46))})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,w;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var A,D,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Attr').in(space1).asNumber().clean();
      attr.id = 123;
      const tag = new Tag('Tag').in(space2).clean();
      tag.id = 234;
      return new Note().addAttr(attr).onTag(tag).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var N,V,T;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Attr').in(space1).asBoolean().clean();
      attr.id = 234;
      return new Note().addAttr(attr).withValue(false);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(T=(V=s.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var h,x,I;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Attr').in(space1).asDate().clean();
      attr.id = 234;
      return new Note().addAttr(attr).withValue(new Date(2024, 6, 5, 17, 23, 46));
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const q=["Primary","WithDeleteButton","OnTag","ForBooleanValue","ForDateValue"];export{s as ForBooleanValue,l as ForDateValue,c as OnTag,r as Primary,o as WithDeleteButton,q as __namedExportsOrder,j as default};
