import{j as F,a as d}from"./jsx-runtime-VmuvLVu_.js";import{R as oe,r as i}from"./index-XiNr8FW2.js";import{a as x,N as w}from"./NoteViewer-Pppd2jv9.js";import{N as ae}from"./NoteSearch-V4MwRVvS.js";import{n as se,N as l}from"./StoryHelpers-Nro3gCTf.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";const N=oe.forwardRef(({space:t,notuClient:r=null,onFetchRequested:n=null,defaultQuery:a=null,onQueryChanged:D=null,noteActionsGenerator:T,actionsPanel:S=null,isVisible:h=!0,groupBy:c=null,groups:V=null,groupHeader:M=null,orderGroupsBy:v=null,noteViewer:A=null},j)=>{const[g,z]=i.useState(a??""),[p,q]=i.useState(new Map),[J,K]=i.useState(!1),[G,U]=i.useState(null);i.useImperativeHandle(j,()=>({refresh:b,setQuery:k})),i.useEffect(()=>{h&&!J&&(K(!0),b())},[h]);async function b(){q(P(await X()))}async function X(){let e;return r?e=await r.getNotes(g,t.id):e=await n(g,t),e}function P(e){const o=new Map;if(!c)o.set(null,e);else{if(V)for(const u of V(e))o.set(u,[]);else for(const u of e)o.set(c(u),[]);for(const u of e){const re=c(u);let I=o.get(re);I!=null&&I.push(u)}}return o}function Y(){return!c||!v?Array.from(p.keys()):Array.from(p.keys()).map(e=>({key:e,order:v(e,p.get(e))})).sort((e,o)=>e.order-o.order).map(e=>e.key)}function k(e){z(e),D&&D(e)}if(!h)return;function Z(){if(S)return S()}function $(e){const o=p.get(e);return F("div",{children:[ee(e,o),ne(o)]},e)}function ee(e,o){if(!(!c||!M))return d("h2",{className:"title is-4 is-underlined mb-1 mt-3",children:M(e,o)})}function te(e){return A?A(e,T(e),G===e):d(x,{note:e,actions:T(e),isSelected:G===e})}function ne(e){return d("div",{children:e.map(o=>d("div",{onClick:()=>U(o),children:te(o)},o.id))})}return F("div",{children:[d(ae,{notuClient:r,space:t,onFetched:e=>q(P(e)),query:g,onFetchRequested:n,onQueryChanged:k}),Z(),Y().map(e=>$(e))]})});try{N.displayName="GroupedNoteList",N.__docgenInfo={description:"",displayName:"GroupedNoteList",props:{space:{defaultValue:null,description:"The space which we're fetching notes from",name:"space",required:!0,type:{name:"Space"}},notuClient:{defaultValue:{value:"null"},description:"The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you",name:"notuClient",required:!1,type:{name:"Notu"}},onFetchRequested:{defaultValue:{value:"null"},description:"If notuClient has not been defined, then use this prop for handling the manual fetching of notes",name:"onFetchRequested",required:!1,type:{name:"(query: string, space: Space) => Promise<Note[]>"}},defaultQuery:{defaultValue:{value:"null"},description:"The optional default value for the search field to have. If not defined then defaults to empty",name:"defaultQuery",required:!1,type:{name:"string"}},onQueryChanged:{defaultValue:{value:"null"},description:"Optional handler for when the query gets changed",name:"onQueryChanged",required:!1,type:{name:"(query: string) => void"}},noteActionsGenerator:{defaultValue:null,description:"The set of options which get generated for each note",name:"noteActionsGenerator",required:!0,type:{name:"(note: Note) => NoteViewerAction[]"}},actionsPanel:{defaultValue:{value:"null"},description:"",name:"actionsPanel",required:!1,type:{name:"() => Element"}},isVisible:{defaultValue:{value:"true"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},groupBy:{defaultValue:{value:"null"},description:"",name:"groupBy",required:!1,type:{name:"(note: Note) => any"}},groups:{defaultValue:{value:"null"},description:"",name:"groups",required:!1,type:{name:"(notes: Note[]) => number[]"}},groupHeader:{defaultValue:{value:"null"},description:"",name:"groupHeader",required:!1,type:{name:"(key: any, notes: Note[]) => string"}},orderGroupsBy:{defaultValue:{value:"null"},description:"",name:"orderGroupsBy",required:!1,type:{name:"(key: any, notes: Note[]) => number"}},noteViewer:{defaultValue:{value:"null"},description:"",name:"noteViewer",required:!1,type:{name:"(note: Note, actions: NoteViewerAction[], isSelected: boolean) => Element"}}}}}catch{}function E(t,r,n){return d(x,{note:t,actions:r,isSelected:n,showDate:!1})}const ge={title:"GroupedNoteList",component:N,parameters:{layout:"padded"},tags:["autodocs"]},s=se("Space 1",1).clean(),y={args:{space:s,onFetchRequested:(t,r)=>{const n=new l("I am a first note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));n.id=123;const a=new l("And I'm another note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return a.id=124,Promise.resolve([n,a])},defaultQuery:"#Tag1 AND NOT #Tag2",noteActionsGenerator:t=>[new w("Do something",async r=>Promise.resolve(!0))],isVisible:!0,groupBy:t=>t.date.getDay(),groupHeader:(t,r)=>{const n=Number(t);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]},orderGroupsBy:(t,r)=>Number(t)}},m={args:{space:s,onFetchRequested:(t,r)=>{const n=new l("I am a first note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));n.id=123;const a=new l("And I'm another note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return a.id=124,Promise.resolve([n,a])},defaultQuery:"#Tag1 AND NOT #Tag2",noteActionsGenerator:t=>[new w("Do something",async r=>Promise.resolve(!0))],isVisible:!0,groupBy:t=>t.date.getDay(),groupHeader:(t,r)=>{const n=Number(t);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]},orderGroupsBy:(t,r)=>Number(t),noteViewer:(t,r,n)=>E(t,r,n)}},f={args:{space:s,onFetchRequested:(t,r)=>{const n=new l("I am a first note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));n.id=123;const a=new l("And I'm another note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return a.id=124,Promise.resolve([n,a])},defaultQuery:"#Tag1 AND NOT #Tag2",noteActionsGenerator:t=>[new w("Do something",async r=>Promise.resolve(!0))],isVisible:!0,groupBy:t=>t.date.getDay(),groupHeader:(t,r)=>{const n=Number(t);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]},groups:t=>[0,1,2,3,4,5,6],orderGroupsBy:(t,r)=>Number(t),noteViewer:(t,r,n)=>E(t,r,n)}};var Q,B,W;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query, space) => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return Promise.resolve([note1, note2]);
    },
    defaultQuery: '#Tag1 AND NOT #Tag2',
    noteActionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    isVisible: true,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    orderGroupsBy: (key, notes) => Number(key)
  }
}`,...(W=(B=y.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var H,R,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query, space) => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return Promise.resolve([note1, note2]);
    },
    defaultQuery: '#Tag1 AND NOT #Tag2',
    noteActionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    isVisible: true,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    orderGroupsBy: (key, notes) => Number(key),
    noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var C,O,L;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    space: space1,
    onFetchRequested: (query, space) => {
      const note1 = new Note('I am a first note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 14, 20, 6));
      note1.id = 123;
      const note2 = new Note('And I\\'m another note').in(space1).at(new Date(2000 + Math.floor(Math.random() * 50), 0, 15, 21, 15));
      note2.id = 124;
      return Promise.resolve([note1, note2]);
    },
    defaultQuery: '#Tag1 AND NOT #Tag2',
    noteActionsGenerator: note => [new NoteViewerAction('Do something', async n => Promise.resolve(true))],
    isVisible: true,
    groupBy: n => n.date.getDay(),
    groupHeader: (key, notes) => {
      const day = Number(key);
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    },
    groups: notes => [0, 1, 2, 3, 4, 5, 6],
    orderGroupsBy: (key, notes) => Number(key),
    noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected)
  }
}`,...(L=(O=f.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const Ne=["Primary","CanShowNotesWithoutDates","CanAddGroupsThatNoNoteSatisfies"];export{f as CanAddGroupsThatNoNoteSatisfies,m as CanShowNotesWithoutDates,y as Primary,Ne as __namedExportsOrder,ge as default};
