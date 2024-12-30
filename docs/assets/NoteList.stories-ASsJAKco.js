import{N as l}from"./NoteList-I7963Vjf.js";import{n as u,N as o}from"./StoryHelpers-BgcIDcDq.js";import{N as r}from"./NoteViewer-dcVEBox3.js";import{n as m}from"./NoteComponentHelpers-YOq-M9MO.js";import{N as d}from"./NotuRender-bVHJs86c.js";import"./index-SSXOyoI7.js";/* empty css              */import"./MockHttpClient-CrRj0xgx.js";const y={title:"NoteList",component:l,parameters:{layout:"padded"},tags:["autodocs"]},s=u("Space 1",1).clean(),w=new d(null,m,e=>null),n={args:{notes:(()=>{const e=new o(`I am a first note:
<Checklist>
123
456
</Checklist>`).in(s).at(new Date(2024,0,14,20,6));e.id=123;const t=new o("And I'm another note").in(s).at(new Date(2024,0,15,21,15));return t.id=124,[e,t]})(),actionsGenerator:e=>{const t=new Array;return t.push(new r("Test",p=>{console.log("Test")})),e.text.includes("first note")&&t.push(new r("Special First Note Action",p=>{console.log("Other test")})),t},notuRenderTools:w}};var a,i,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note:\\n<Checklist>\\n123\\n456\\n</Checklist>').in(space1).at(new Date(2024, 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2024, 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: n => {
      const output = new Array<NoteViewerAction>();
      output.push(new NoteViewerAction('Test', n => {
        console.log('Test');
      }));
      if (n.text.includes('first note')) output.push(new NoteViewerAction('Special First Note Action', n => {
        console.log('Other test');
      }));
      return output;
    },
    notuRenderTools: renderTools
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Primary"];export{n as Primary,k as __namedExportsOrder,y as default};
