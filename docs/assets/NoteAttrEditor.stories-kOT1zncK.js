import{N as h}from"./NoteAttrEditor-moSMD9s9.js";import{S as I,A as t,N as n}from"./notu-crZ7QRTU.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const E={title:"NoteAttrEditor",component:h,parameters:{layout:"padded"},tags:["autodocs"]},r=new I("Space 1").clean();r.id=1;const b=new I("Space 2").clean();b.id=2;const o={args:{noteAttr:(()=>{const e=new t("Test").in(r).asText().clean();return e.id=123,new n("Test").clean().addAttr(e).withValue("abc")})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},a={args:{noteAttr:(()=>{const e=new t("Test").in(r).asDate().clean();return e.id=123,new n("Test").clean().addAttr(e).withValue(new Date(2023,3,4))})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},s={args:{noteAttr:(()=>{const e=new t("Test").in(r).asBoolean().clean();return e.id=123,new n("Test").clean().addAttr(e)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},c={args:{noteAttr:(()=>{const e=new t("Test").in(r).asNumber().clean();return e.id=123,new n("Test").clean().addAttr(e)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},d={args:{noteAttr:(()=>{const e=new t("Test").in(b).asNumber().clean();return e.id=123,new n("Test").clean().addAttr(e)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asText().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue('abc');
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,i,A;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asDate().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue(new Date(2023, 3, 4));
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(A=(i=a.parameters)==null?void 0:i.docs)==null?void 0:A.source}}};var w,N,g;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asBoolean().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(g=(N=s.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var S,T,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var R,x,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space2).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(q=(x=d.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};const P=["Primary","DateAttr","BooleanAttr","NumberAttr","ShowsSpaceName"];export{s as BooleanAttr,a as DateAttr,c as NumberAttr,o as Primary,d as ShowsSpaceName,P as __namedExportsOrder,E as default};
