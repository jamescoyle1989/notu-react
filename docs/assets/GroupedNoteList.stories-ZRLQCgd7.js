import{G as M}from"./GroupedNoteList-KHjiZmaB.js";import{n as N,N as o}from"./StoryHelpers-wxWbWVo0.js";import{a as f,N as i}from"./NoteViewer-5b3C1m_P.js";import{a as S}from"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";function D(e,n,t){return S(f,{note:e,actions:n,isSelected:t,showDate:!1})}const B={title:"GroupedNoteList",component:M,parameters:{layout:"padded"},tags:["autodocs"]},a=N("Space 1",1).clean(),r={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new i("Do something",async n=>Promise.resolve(!0))],groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]}}},s={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new i("Do something",async n=>Promise.resolve(!0))],groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},noteViewer:(e,n,t)=>D(e,n,t)}},d={args:{notes:(()=>{const e=new o("I am a first note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));e.id=123;const n=new o("And I'm another note").in(a).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return n.id=124,[e,n]})(),actionsGenerator:e=>[new i("Do something",async n=>Promise.resolve(!0))],groupBy:e=>e.date.getDay(),groupHeader:(e,n)=>{const t=Number(e);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},groups:e=>[0,1,2,3,4,5,6],noteViewer:(e,n,t)=>D(e,n,t)}};var u,c,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    }
  }
}`,...(y=(c=r.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var w,g,l;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    notes: (() => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return [note1, note2];
    })(),
    actionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    groups: notes => [0, 1, 2, 3, 4, 5, 6],
    noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
  }
}`,...(l=(g=d.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const F=["Primary","CanShowNotesWithoutDates","CanAddGroupsThatNoNoteSatisfies"];export{d as CanAddGroupsThatNoNoteSatisfies,s as CanShowNotesWithoutDates,r as Primary,F as __namedExportsOrder,B as default};
