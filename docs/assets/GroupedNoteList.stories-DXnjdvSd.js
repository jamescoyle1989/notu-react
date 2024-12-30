import{G as T}from"./GroupedNoteList-yKWhaRmZ.js";import{n as f,N as o}from"./StoryHelpers-BgcIDcDq.js";import{N as u}from"./NoteViewer-dcVEBox3.js";import{n as D}from"./ReactSnippets-BfUqKE1P.js";import{n as S}from"./NoteComponentHelpers-YOq-M9MO.js";import{N as A}from"./NotuRender-bVHJs86c.js";import"./index-SSXOyoI7.js";/* empty css              */import"./MockHttpClient-CrRj0xgx.js";const B={title:"GroupedNoteList",component:T,parameters:{layout:"padded"},tags:["autodocs"]},a=f("Space 1",1).clean(),r=new A(null,S,e=>null),s={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new u("Do something",async n=>Promise.resolve(!0))],notuRenderTools:r,groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]}}},d={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new u("Do something",async n=>Promise.resolve(!0))],notuRenderTools:r,groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},noteViewer:(e,n,t,N)=>D(e,r,n,t)}},i={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new u("Do something",async n=>Promise.resolve(!0))],notuRenderTools:r,groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},groups:e=>[0,1,2,3,4,5,6],noteViewer:(e,n,t,N)=>D(e,r,n,t)}};var c,y,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    notuRenderTools: renderTools,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    }
  }
}`,...(m=(y=s.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var p,h,l;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    notuRenderTools: renderTools,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    noteViewer: (note, actions, isSelected, splitter) => noteViewerWithoutDate(note, renderTools, actions, isSelected)
  }
}`,...(l=(h=d.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var w,g,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    notuRenderTools: renderTools,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    groups: notes => [0, 1, 2, 3, 4, 5, 6],
    noteViewer: (note, actions, isSelected, splitter) => noteViewerWithoutDate(note, renderTools, actions, isSelected)
  }
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};const F=["Primary","CanShowNotesWithoutDates","CanAddGroupsThatNoNoteSatisfies"];export{i as CanAddGroupsThatNoNoteSatisfies,d as CanShowNotesWithoutDates,s as Primary,F as __namedExportsOrder,B as default};
