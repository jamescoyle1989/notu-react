import{N as y}from"./NoteAttrBadge-IjAUFas1.js";import{n as O,a as d,b as h,A as f,c as n}from"./StoryHelpers-Nro3gCTf.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";const C={title:"NoteAttrBadge",component:y,parameters:{layout:"centered"},tags:["autodocs"]},t=O("Space 1",1).clean(),l=d("Num",1).in(t).asNumber().clean();l.color="#FF8800";const i=d("Bool",2).in(t).asBoolean().clean(),p=d("Date",3).in(t).asDate().clean(),P=h("Tag",1).in(t).clean(),o={args:{noteAttr:(()=>{const e=new f("Test").in(t).asNumber().clean();return e.id=123,n("abc",123).in(t).addAttr(e,15).getAttr(e)})(),contextSpaceId:1,onDelete:null}},r={args:{noteAttr:(()=>{const e=new f("Test").in(t).asNumber().clean();return e.id=123,n("abc",123).in(t).addAttr(e,15).getAttr(e)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},a={args:{noteAttr:n("abc",123).in(t).addTag(P).addAttr(l,15).getAttr(l),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},c={args:{noteAttr:n("abc",123).in(t).addAttr(i,!1).getAttr(i),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},s={args:{noteAttr:n("abc",123).in(t).addAttr(p,new Date(2024,6,5,17,23,46)).getAttr(p),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}};var A,u,g;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      const note = newNote('abc', 123).in(space1).addAttr(attr, 15);
      return note.getAttr(attr);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,D,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      const note = newNote('abc', 123).in(space1).addAttr(attr, 15);
      return note.getAttr(attr);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(b=(D=r.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var S,w,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const nt = newNote('abc', 123).in(space1).addTag(tag).addAttr(numAttr, 15);
      return nt.getAttr(numAttr);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(N=(w=a.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var x,I,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = newNote('abc', 123).in(space1).addAttr(boolAttr, false);
      return note.getAttr(boolAttr);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var k,B,F;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = newNote('abc', 123).in(space1).addAttr(dateAttr, new Date(2024, 6, 5, 17, 23, 46));
      return note.getAttr(dateAttr);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const G=["Primary","WithDeleteButton","OnTag","ForBooleanValue","ForDateValue"];export{c as ForBooleanValue,s as ForDateValue,a as OnTag,o as Primary,r as WithDeleteButton,G as __namedExportsOrder,C as default};
