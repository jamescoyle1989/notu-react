import{j as P,a as i}from"./jsx-runtime-VmuvLVu_.js";import{R as Z,r as u}from"./index-XiNr8FW2.js";import{a as H,N as R}from"./NoteViewer-B4byLE0Z.js";import{N as $}from"./NoteSearch-vy-Cx2Un.js";import{S as ee,N as y}from"./notu-B7rita-q.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-AUqrHrt_.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-2pOiyd8Z.js";const g=Z.forwardRef(({space:t,notuClient:r=null,onFetchRequested:n=null,defaultQuery:a=null,onQueryChanged:N=null,noteActionsGenerator:w,actionsPanel:v=null,isVisible:f=!0,groupBy:d=null,groupHeader:S=null,orderGroupsBy:V=null,noteViewer:D=null},W)=>{const[h,O]=u.useState(a??""),[l,q]=u.useState(new Map),[x,L]=u.useState(!1),[T,E]=u.useState(null);u.useImperativeHandle(W,()=>({refresh:M,setQuery:G})),u.useEffect(()=>{f&&!x&&(L(!0),M())},[f]);async function M(){q(A(await j()))}async function j(){let e;return r?e=await r.getNotes(h,t.id):e=await n(h,t),e}function A(e){const o=new Map;if(!d)o.set(null,e);else for(const b of e){const I=d(b);let c=o.get(I);c==null&&(c=[],o.set(I,c)),c.push(b)}return o}function z(){return!d||!V?Array.from(l.keys()):Array.from(l.keys()).map(e=>({key:e,order:V(e,l.get(e))})).sort((e,o)=>e.order-o.order).map(e=>e.key)}function G(e){O(e),N&&N(e)}if(!f)return;function J(){if(v)return v()}function K(e){const o=l.get(e);return P("div",{children:[U(e,o),Y(o)]},e)}function U(e,o){if(!(!d||!S))return i("h2",{className:"title is-4 is-underlined mb-1 mt-3",children:S(e,o)})}function X(e){return D?D(e,w(e),T===e):i(H,{note:e,contextSpaceId:t.id,actions:w(e),isSelected:T===e})}function Y(e){return i("div",{children:e.map(o=>i("div",{onClick:()=>E(o),children:X(o)},o.id))})}return P("div",{children:[i($,{notuClient:r,space:t,onFetched:e=>q(A(e)),query:h,onFetchRequested:n,onQueryChanged:G}),J(),z().map(e=>K(e))]})});try{g.displayName="GroupedNoteList",g.__docgenInfo={description:"",displayName:"GroupedNoteList",props:{space:{defaultValue:null,description:"The space which we're fetching notes from",name:"space",required:!0,type:{name:"Space"}},notuClient:{defaultValue:{value:"null"},description:"The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you",name:"notuClient",required:!1,type:{name:"CachedClient"}},onFetchRequested:{defaultValue:{value:"null"},description:"If notuClient has not been defined, then use this prop for handling the manual fetching of notes",name:"onFetchRequested",required:!1,type:{name:"(query: string, space: Space) => Promise<Note[]>"}},defaultQuery:{defaultValue:{value:"null"},description:"The optional default value for the search field to have. If not defined then defaults to empty",name:"defaultQuery",required:!1,type:{name:"string"}},onQueryChanged:{defaultValue:{value:"null"},description:"Optional handler for when the query gets changed",name:"onQueryChanged",required:!1,type:{name:"(query: string) => void"}},noteActionsGenerator:{defaultValue:null,description:"The set of options which get generated for each note",name:"noteActionsGenerator",required:!0,type:{name:"(note: Note) => NoteViewerAction[]"}},actionsPanel:{defaultValue:{value:"null"},description:"",name:"actionsPanel",required:!1,type:{name:"() => Element"}},isVisible:{defaultValue:{value:"true"},description:"",name:"isVisible",required:!1,type:{name:"boolean"}},groupBy:{defaultValue:{value:"null"},description:"",name:"groupBy",required:!1,type:{name:"(note: Note) => any"}},groupHeader:{defaultValue:{value:"null"},description:"",name:"groupHeader",required:!1,type:{name:"(key: any, notes: Note[]) => string"}},orderGroupsBy:{defaultValue:{value:"null"},description:"",name:"orderGroupsBy",required:!1,type:{name:"(key: any, notes: Note[]) => number"}},noteViewer:{defaultValue:{value:"null"},description:"",name:"noteViewer",required:!1,type:{name:"(note: Note, actions: NoteViewerAction[], isSelected: boolean) => Element"}}}}}catch{}function te(t,r,n,a){return i(H,{note:t,actions:r,isSelected:n,contextSpaceId:a,showDate:!1})}const pe={title:"GroupedNoteList",component:g,parameters:{layout:"padded"},tags:["autodocs"]},s=new ee("Space 1");s.id=1;const p={args:{space:s,onFetchRequested:(t,r)=>{const n=new y("I am a first note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));n.id=123;const a=new y("And I'm another note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return a.id=124,Promise.resolve([n,a])},defaultQuery:"#Tag1 AND NOT #Tag2",noteActionsGenerator:t=>[new R("Do something",async r=>Promise.resolve(!0))],isVisible:!0,groupBy:t=>t.date.getDay(),groupHeader:(t,r)=>{const n=Number(t);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]},orderGroupsBy:(t,r)=>Number(t)}},m={args:{space:s,onFetchRequested:(t,r)=>{const n=new y("I am a first note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,14,20,6));n.id=123;const a=new y("And I'm another note").in(s).at(new Date(2e3+Math.floor(Math.random()*50),0,15,21,15));return a.id=124,Promise.resolve([n,a])},defaultQuery:"#Tag1 AND NOT #Tag2",noteActionsGenerator:t=>[new R("Do something",async r=>Promise.resolve(!0))],isVisible:!0,groupBy:t=>t.date.getDay(),groupHeader:(t,r)=>{const n=Number(t);return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]},orderGroupsBy:(t,r)=>Number(t),noteViewer:(t,r,n)=>te(t,r,n,s.id)}};var Q,k,F;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var _,C,B;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    noteViewer: (note, actions, isSelected) => noteViewerWithoutDate(note, actions, isSelected, space1.id)
  }
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const me=["Primary","CanShowNotesWithoutDates"];export{m as CanShowNotesWithoutDates,p as Primary,me as __namedExportsOrder,pe as default};
