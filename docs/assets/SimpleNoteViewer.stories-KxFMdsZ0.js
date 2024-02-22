import{S as T,a as s}from"./SimpleNoteViewer-KYrQ0BSj.js";import{S as d,N as u,T as w}from"./notu-Zi0Mo9zw.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-CiaD47-G.js";const O={title:"SimpleNoteViewer",component:T,parameters:{layout:"padded"},tags:["autodocs"]},n=new d("Space 1").clean();n.id=1;const m=new d("Space 2").clean();m.id=2;const o={args:{note:(()=>{const e=new u("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");e.ownTag.color="#0000FF";const t=new w("Tag 1",1).clean();return t.id=1,t.color="#FF0000",t.space=n,e.addTag(t),e})(),contextSpaceId:1,actions:[new s("Say Hello",e=>console.log("Hello")),new s("Say Goodbye",e=>console.log("Goodbye"))],isSelected:!0}},a={args:{note:(()=>{const e=new u("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");e.ownTag.color="#0000FF";const t=new w("Tag 1",1).clean();return t.id=1,t.color="#FF0000",t.space=n,e.addTag(t),e})(),contextSpaceId:1,actions:[],isSelected:!0}};var c,r,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1', 1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      tag1.space = space1;
      output.addTag(tag1);
      return output;
    })(),
    contextSpaceId: 1,
    actions: [new SimpleNoteViewerAction('Say Hello', n => console.log('Hello')), new SimpleNoteViewerAction('Say Goodbye', n => console.log('Goodbye'))],
    isSelected: true
  }
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var g,l,i;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1', 1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      tag1.space = space1;
      output.addTag(tag1);
      return output;
    })(),
    contextSpaceId: 1,
    actions: [],
    isSelected: true
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const V=["Primary","NoActions"];export{a as NoActions,o as Primary,V as __namedExportsOrder,O as default};
