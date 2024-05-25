import{a as S,N as c}from"./NoteViewer-Pppd2jv9.js";import{n as F,b as N,a as A,N as s}from"./StoryHelpers-Nro3gCTf.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";const x={title:"NoteViewer",component:S,parameters:{layout:"padded"},tags:["autodocs"]},e=F("Space 1",1).clean(),o=N("Tag 1",1).in(e);o.color="#FF0000";o.clean();const u=A("Attr 1",1).in(e).asNumber().clean(),a={args:{note:(()=>{const t=new s("Test test").in(e).at(new Date(2023,11,18)).setOwnTag("My Tag");return t.ownTag.color="#0000FF",t.addAttr(u,12345),t.addTag(o).addAttr(u,23456),t})(),actions:[new c("Say Hello",t=>console.log("Hello")),new c("Say Goodbye",t=>console.log("Goodbye"))],isSelected:!0}},n={args:{note:(()=>{const t=new s("Test test").in(e).at(new Date(2023,11,18)).setOwnTag("My Tag");return t.ownTag.color="#0000FF",t.addTag(o),t})(),actions:[],isSelected:!0}},r={args:{note:(()=>{const t=new s("Test test").in(e).at(new Date(2023,11,18)).setOwnTag("My Tag");return t.ownTag.color="#0000FF",t.addTag(o),t})(),actions:[],isSelected:!0,showDate:!1}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addAttr(attr1, 12345);
      output.addTag(tag1).addAttr(attr1, 23456);
      return output;
    })(),
    actions: [new NoteViewerAction('Say Hello', n => console.log('Hello')), new NoteViewerAction('Say Goodbye', n => console.log('Goodbye'))],
    isSelected: true
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,l,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      return output;
    })(),
    actions: [],
    isSelected: true
  }
}`,...(w=(l=n.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var T,m,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: false
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const C=["Primary","NoActions","CanHideDate"];export{r as CanHideDate,n as NoActions,a as Primary,C as __namedExportsOrder,x as default};
