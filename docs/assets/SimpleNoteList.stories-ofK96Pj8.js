import{j as jsxRuntimeExports}from"./jsx-runtime-wvP3fMU7.js";import{S as SimpleNoteViewer,a as SimpleNoteViewerAction}from"./SimpleNoteViewer-z8b5psRk.js";import{S as Space,N as Note}from"./notu-m_CwcKhx.js";import"./index-ZzCYUyIO.js";import"./_commonjsHelpers-uMlHD7dG.js";import"./NoteTagBadge-YuDQMR-7.js";const SimpleNoteList=({notes,contextSpaceId,actionsGenerator})=>jsxRuntimeExports.jsx("div",{children:notes.map(n=>jsxRuntimeExports.jsx(SimpleNoteViewer,{note:n,contextSpaceId,actions:actionsGenerator(n)},n.id))});try{SimpleNoteList.displayName="SimpleNoteList",SimpleNoteList.__docgenInfo={description:"",displayName:"SimpleNoteList",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},actionsGenerator:{defaultValue:null,description:"",name:"actionsGenerator",required:!0,type:{name:"(note: Note) => SimpleNoteViewerAction[]"}}}}}catch{}const meta={title:"SimpleNoteList",component:SimpleNoteList,parameters:{layout:"padded"},tags:["autodocs"]},space1=new Space("Space 1");space1.id=1;const Primary={args:{notes:(()=>{const note1=new Note("I am a first note").in(space1).at(new Date(2024,0,14,20,6));note1.id=123;const note2=new Note("And I'm another note").in(space1).at(new Date(2024,0,15,21,15));return note2.id=124,[note1,note2]})(),contextSpaceId:1,actionsGenerator:n=>{const output=new Array;return output.push(new SimpleNoteViewerAction("Test",n2=>{})),n.text.endsWith("first note")&&output.push(new SimpleNoteViewerAction("Special First Note Action",n2=>{})),output}}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2024, 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2024, 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    contextSpaceId: 1,
    actionsGenerator: n => {
      const output = new Array<SimpleNoteViewerAction>();
      output.push(new SimpleNoteViewerAction('Test', n => {}));
      if (n.text.endsWith('first note')) output.push(new SimpleNoteViewerAction('Special First Note Action', n => {}));
      return output;
    }
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Primary"];export{Primary,__namedExportsOrder,meta as default};
//# sourceMappingURL=SimpleNoteList.stories-ofK96Pj8.js.map
