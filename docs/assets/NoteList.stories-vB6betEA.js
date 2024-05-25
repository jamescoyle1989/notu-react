import{N as m}from"./NoteList-Nrotrev4.js";import{n as u,N as o}from"./StoryHelpers-Nro3gCTf.js";import{N as r}from"./NoteViewer-Pppd2jv9.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";const x={title:"NoteList",component:m,parameters:{layout:"padded"},tags:["autodocs"]},a=u("Space 1",1).clean(),n={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2024,0,14,20,6));e.id=123;const t=new o("And I'm another note").in(a).at(new Date(2024,0,15,21,15));return t.id=124,[e,t]})(),actionsGenerator:e=>{const t=new Array;return t.push(new r("Test",c=>{})),e.text.endsWith("first note")&&t.push(new r("Special First Note Action",c=>{})),t}}};var s,i,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2024, 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2024, 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: n => {
      const output = new Array<NoteViewerAction>();
      output.push(new NoteViewerAction('Test', n => {}));
      if (n.text.endsWith('first note')) output.push(new NoteViewerAction('Special First Note Action', n => {}));
      return output;
    }
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["Primary"];export{n as Primary,D as __namedExportsOrder,x as default};
