import{a}from"./jsx-runtime-VmuvLVu_.js";import{S as w,a as c}from"./SimpleNoteViewer-JurReeZb.js";import{r as f}from"./index-XiNr8FW2.js";import{S as y,N as p}from"./notu-crZ7QRTU.js";import"./NoteTagBadge-m8jnesCh.js";import"./_commonjsHelpers-5-cIlDoe.js";const i=({notes:t,contextSpaceId:e,actionsGenerator:r})=>{const[l,S]=f.useState(null);function N(n){S(n)}return a("div",{children:t.map(n=>a("div",{onClick:()=>N(n),children:a(w,{note:n,contextSpaceId:e,actions:r(n),isSelected:l===n},n.id)}))})};try{i.displayName="SimpleNoteList",i.__docgenInfo={description:"",displayName:"SimpleNoteList",props:{notes:{defaultValue:null,description:"",name:"notes",required:!0,type:{name:"Note[]"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},actionsGenerator:{defaultValue:null,description:"",name:"actionsGenerator",required:!0,type:{name:"(note: Note) => SimpleNoteViewerAction[]"}}}}}catch{}const g={title:"SimpleNoteList",component:i,parameters:{layout:"padded"},tags:["autodocs"]},s=new y("Space 1");s.id=1;const o={args:{notes:(()=>{const t=new p("I am a first note").in(s).at(new Date(2024,0,14,20,6));t.id=123;const e=new p("And I'm another note").in(s).at(new Date(2024,0,15,21,15));return e.id=124,[t,e]})(),contextSpaceId:1,actionsGenerator:t=>{const e=new Array;return e.push(new c("Test",r=>{})),t.text.endsWith("first note")&&e.push(new c("Special First Note Action",r=>{})),e}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
