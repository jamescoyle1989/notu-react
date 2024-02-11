import{S as F,a as g}from"./SimpleNoteViewer-FKbAqmUg.js";import{S as w,N as m,T as c}from"./notu-aEA2dNOf.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-xl3fl_OO.js";const V={title:"SimpleNoteViewer",component:F,parameters:{layout:"padded"},tags:["autodocs"]},s=new w("Space 1").clean();s.id=1;const r=new w("Space 2").clean();r.id=2;const o={args:{note:(()=>{const a=new m("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");a.ownTag.color="#0000FF";const e=new c("Tag 1",1).clean();e.id=1,e.color="#FF0000",e.space=s,a.addTag(e);const t=new c("Tag 2",2).clean();return t.id=2,t.color="#00FF00",t.space=r,a.addTag(t),a})(),contextSpaceId:1,actions:[new g("Say Hello",a=>console.log("Hello")),new g("Say Goodbye",a=>console.log("Goodbye"))]}},n={args:{note:(()=>{const a=new m("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");a.ownTag.color="#0000FF";const e=new c("Tag 1",1).clean();e.id=1,e.color="#FF0000",e.space=s,a.addTag(e);const t=new c("Tag 2",2).clean();return t.id=2,t.color="#00FF00",t.space=r,a.addTag(t),a})(),contextSpaceId:1,actions:[]}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1', 1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      tag1.space = space1;
      output.addTag(tag1);
      const tag2 = new Tag('Tag 2', 2).clean();
      tag2.id = 2;
      tag2.color = '#00FF00';
      tag2.space = space2;
      output.addTag(tag2);
      return output;
    })(),
    contextSpaceId: 1,
    actions: [new SimpleNoteViewerAction('Say Hello', n => console.log('Hello')), new SimpleNoteViewerAction('Say Goodbye', n => console.log('Goodbye'))]
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,T,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1', 1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      tag1.space = space1;
      output.addTag(tag1);
      const tag2 = new Tag('Tag 2', 2).clean();
      tag2.id = 2;
      tag2.color = '#00FF00';
      tag2.space = space2;
      output.addTag(tag2);
      return output;
    })(),
    contextSpaceId: 1,
    actions: []
  }
}`,...(u=(T=n.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};const b=["Primary","NoActions"];export{n as NoActions,o as Primary,b as __namedExportsOrder,V as default};
