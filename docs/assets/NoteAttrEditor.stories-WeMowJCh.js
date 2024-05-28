import{N as S}from"./NoteAttrEditor-mJ8pi6tC.js";import{n as C,a as s,b as D,N as c}from"./StoryHelpers-wxWbWVo0.js";/* empty css              */import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const O={title:"NoteAttrEditor",component:S,parameters:{layout:"padded"},tags:["autodocs"]},t=C("Space 1",1).clean(),B=C("Space 2",2).clean(),d=s("Test",123).in(t).asText().clean(),l=s("Bool Test",234).asBoolean().clean(),g=s("Date Attr",345).asDate().clean(),m=s("Number Attr",456).asNumber().clean();D("Tag 1",123).in(t).clean();D("Tag 2",234).in(B).clean();const o={args:{noteAttr:new c("Test").in(t).clean().addAttr(d,"abc").getAttr(d),onRemove:()=>console.log("Requested to remove NoteAttr"),onChanged:e=>console.log("Text changed")}},n={args:{noteAttr:new c("Test").in(t).clean().addAttr(g,new Date(2023,3,4)).getAttr(g),onRemove:()=>console.log("Requested to remove NoteAttr"),onChanged:e=>console.log("Date changed")}},r={args:{noteAttr:new c("Test").in(t).clean().addAttr(l).getAttr(l),onRemove:()=>console.log("Requested to remove NoteAttr"),onChanged:e=>console.log("Boolean changed")}},a={args:{noteAttr:new c("Test").in(t).clean().addAttr(m).getAttr(m),onRemove:()=>console.log("Requested to remove NoteAttr"),onChanged:e=>console.log("Number changed")}};var A,u,p;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = new Note('Test').in(space1).clean().addAttr(attr, 'abc');
      return note.getAttr(attr);
    })(),
    onRemove: () => console.log('Requested to remove NoteAttr'),
    onChanged: na => console.log('Text changed')
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,N,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = new Note('Test').in(space1).clean().addAttr(dateAttr, new Date(2023, 3, 4));
      return note.getAttr(dateAttr);
    })(),
    onRemove: () => console.log('Requested to remove NoteAttr'),
    onChanged: na => console.log('Date changed')
  }
}`,...(h=(N=n.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var v,R,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = new Note('Test').in(space1).clean().addAttr(boolAttr);
      return note.getAttr(boolAttr);
    })(),
    onRemove: () => console.log('Requested to remove NoteAttr'),
    onChanged: na => console.log('Boolean changed')
  }
}`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var b,w,q;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const note = new Note('Test').in(space1).clean().addAttr(numberAttr);
      return note.getAttr(numberAttr);
    })(),
    onRemove: () => console.log('Requested to remove NoteAttr'),
    onChanged: na => console.log('Number changed')
  }
}`,...(q=(w=a.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const j=["Primary","DateAttr","BooleanAttr","NumberAttr"];export{r as BooleanAttr,n as DateAttr,a as NumberAttr,o as Primary,j as __namedExportsOrder,O as default};
