import{a}from"./jsx-runtime-VmuvLVu_.js";import{S as w,a as c}from"./SimpleNoteViewer-KYrQ0BSj.js";import{r as f}from"./index-XiNr8FW2.js";import{S as y,N as p}from"./notu-Zi0Mo9zw.js";import"./NoteTagBadge-CiaD47-G.js";import"./_commonjsHelpers-5-cIlDoe.js";const i=({notes:n,contextSpaceId:e,actionsGenerator:r})=>{const[l,S]=f.useState(null);function N(t){S(t)}return a("div",{children:n.map(t=>a("div",{onClick:()=>N(t),children:a(w,{note:t,contextSpaceId:e,actions:r(t),isSelected:l===t},t.id)},t.id))})};try{i.displayName="SimpleNoteList",i.__docgenInfo={description:"",displayName:"SimpleNoteList",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},actionsGenerator:{defaultValue:null,description:"",name:"actionsGenerator",required:!0,type:{name:"(note: Note) => SimpleNoteViewerAction[]"}}}}}catch{}const g={title:"SimpleNoteList",component:i,parameters:{layout:"padded"},tags:["autodocs"]},s=new y("Space 1");s.id=1;const o={args:{notes:(()=>{const n=new p("I am a first note").in(s).at(new Date(2024,0,14,20,6));n.id=123;const e=new p("And I'm another note").in(s).at(new Date(2024,0,15,21,15));return e.id=124,[n,e]})(),contextSpaceId:1,actionsGenerator:n=>{const e=new Array;return e.push(new c("Test",r=>{})),n.text.endsWith("first note")&&e.push(new c("Special First Note Action",r=>{})),e}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const D=["Primary"];export{o as Primary,D as __namedExportsOrder,g as default};
