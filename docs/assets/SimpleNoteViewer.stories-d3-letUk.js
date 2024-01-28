import{S as SimpleNoteViewer,a as SimpleNoteViewerAction}from"./SimpleNoteViewer-z8b5psRk.js";import{S as Space,N as Note,T as Tag}from"./notu-m_CwcKhx.js";import"./jsx-runtime-wvP3fMU7.js";import"./index-ZzCYUyIO.js";import"./_commonjsHelpers-uMlHD7dG.js";import"./NoteTagBadge-YuDQMR-7.js";const meta={title:"SimpleNoteViewer",component:SimpleNoteViewer,parameters:{layout:"padded"},tags:["autodocs"]},space1=new Space("Space 1").clean();space1.id=1;const space2=new Space("Space 2").clean();space2.id=2;const Primary={args:{note:(()=>{const output=new Note("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");output.ownTag.color="#0000FF";const tag1=new Tag("Tag 1",1).clean();tag1.id=1,tag1.color="#FF0000",tag1.space=space1,output.addTag(tag1);const tag2=new Tag("Tag 2",2).clean();return tag2.id=2,tag2.color="#00FF00",tag2.space=space2,output.addTag(tag2),output})(),contextSpaceId:1,actions:[new SimpleNoteViewerAction("Say Hello",n=>console.log("Hello")),new SimpleNoteViewerAction("Say Goodbye",n=>console.log("Goodbye"))]}},NoActions={args:{note:(()=>{const output=new Note("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");output.ownTag.color="#0000FF";const tag1=new Tag("Tag 1",1).clean();tag1.id=1,tag1.color="#FF0000",tag1.space=space1,output.addTag(tag1);const tag2=new Tag("Tag 2",2).clean();return tag2.id=2,tag2.color="#00FF00",tag2.space=space2,output.addTag(tag2),output})(),contextSpaceId:1,actions:[]}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;NoActions.parameters={...NoActions.parameters,docs:{...(_a2=NoActions.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
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
}`,...(_c2=(_b2=NoActions.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Primary","NoActions"];export{NoActions,Primary,__namedExportsOrder,meta as default};
//# sourceMappingURL=SimpleNoteViewer.stories-d3-letUk.js.map
