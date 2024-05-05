import{N as m}from"./NoteList-Lh2J7ZWH.js";import{S as u,N as r}from"./notu-B7rita-q.js";import{N as a}from"./NoteViewer-B4byLE0Z.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-AUqrHrt_.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-2pOiyd8Z.js";const y={title:"NoteList",component:m,parameters:{layout:"padded"},tags:["autodocs"]},o=new u("Space 1");o.id=1;const n={args:{notes:(()=>{const e=new r("I am a first note").in(o).at(new Date(2024,0,14,20,6));e.id=123;const t=new r("And I'm another note").in(o).at(new Date(2024,0,15,21,15));return t.id=124,[e,t]})(),contextSpaceId:1,actionsGenerator:e=>{const t=new Array;return t.push(new a("Test",p=>{})),e.text.endsWith("first note")&&t.push(new a("Special First Note Action",p=>{})),t}}};var s,i,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      const output = new Array<NoteViewerAction>();
      output.push(new NoteViewerAction('Test', n => {}));
      if (n.text.endsWith('first note')) output.push(new NoteViewerAction('Special First Note Action', n => {}));
      return output;
    }
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const g=["Primary"];export{n as Primary,g as __namedExportsOrder,y as default};
