import{j as m,a as s}from"./jsx-runtime-VmuvLVu_.js";import{R as I,r as p}from"./index-XiNr8FW2.js";import{n as L,M as G}from"./StoryHelpers-wxWbWVo0.js";import{P as F}from"./NoteSearch-89-7qCSH.js";import{P as C}from"./NoteList-WLfsXIUd.js";import{N as y}from"./NoteViewer-5b3C1m_P.js";import{P as j}from"./GroupedNoteList-KHjiZmaB.js";/* empty css              */import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-IT_LJgyr.js";import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-IjAUFas1.js";const f=I.forwardRef(({isVisible:t=!0,selector:e,display:n,actionsBar:o},u)=>{const[r,l]=p.useState([]);e.onNotesRetrieved=a=>l(a),p.useImperativeHandle(u,()=>({refresh:h}));async function h(){e.requestNotes()}if(!t)return;function g(){if(o)return o()}return m("div",{children:[e.render(),g(),n.render(r)]})});try{f.displayName="NotesPanel",f.__docgenInfo={description:"",displayName:"NotesPanel",props:{isVisible:{defaultValue:{value:"true"},description:"Used for selectively showing/hiding the panel without losing all associated state",name:"isVisible",required:!1,type:{name:"boolean"}},selector:{defaultValue:null,description:"",name:"selector",required:!0,type:{name:"NotesPanelSelector"}},display:{defaultValue:null,description:"",name:"display",required:!0,type:{name:"NotesPanelDisplay"}},actionsBar:{defaultValue:null,description:"",name:"actionsBar",required:!1,type:{name:"() => Element"}}}}}catch{}const N=({notu:t=null,tags:e=null,selectedTag:n=null,onTagChanged:o=null,onFetchRequested:u=null,onFetched:r=null})=>{function l(){return e||t.getTags()}function h(a){const k=Number(a.target.value),T=l().find(A=>A.id==k)??null;T!=n&&o(T)}async function g(){if(!n)return;let a;t?a=await t.getRelatedNotes(n):a=await u(n),r&&r(a)}return m("div",{className:"field has-addons is-flex",children:[s("div",{className:"control is-flex-grow-1",children:s("div",{className:"select is-fullwidth",children:m("select",{onChange:h,children:[s("option",{value:null},"0"),l().map(a=>s("option",{value:a.id,children:a.getQualifiedName(-1)},a.id))]})})}),s("div",{className:"control",children:s("button",{className:"button",onClick:g,children:"Search"})})]})};class E{constructor(e,n=null,o=null){this._notu=e,this._tags=n,this._selectedTag=o}async requestNotes(){if(!this._selectedTag)return;const e=await this._notu.getRelatedNotes(this._selectedTag);this.onNotesRetrieved(e)}handleFetchRequestFromNoteSearch(){return this.requestNotes(),Promise.resolve([])}render(){const[e,n]=p.useState(this._selectedTag);return this._selectedTag=e,s(N,{tags:this._tags??this._notu.getTags(),selectedTag:this._selectedTag,onTagChanged:o=>n(o),onFetchRequested:()=>this.handleFetchRequestFromNoteSearch()})}}try{N.displayName="RelatedTagSelector",N.__docgenInfo={description:"",displayName:"RelatedTagSelector",props:{notu:{defaultValue:{value:"null"},description:"The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you",name:"notu",required:!1,type:{name:"Notu"}},tags:{defaultValue:{value:"null"},description:"The set of tags which you're allowed to choose from, leave empty to get all from notu",name:"tags",required:!1,type:{name:"Tag[]"}},selectedTag:{defaultValue:{value:"null"},description:"The tag which should start off as selected",name:"selectedTag",required:!1,type:{name:"Tag"}},onTagChanged:{defaultValue:{value:"null"},description:"Optional callback for handling changes to the selected tag",name:"onTagChanged",required:!1,type:{name:"(tag: Tag) => void"}},onFetchRequested:{defaultValue:{value:"null"},description:"If notu param has not been defined, use this prop for handling the manual fetching of notes",name:"onFetchRequested",required:!1,type:{name:"(tag: Tag) => Promise<Note[]>"}},onFetched:{defaultValue:{value:"null"},description:"Callback that gets fired when the search has been executed and notes returned",name:"onFetched",required:!1,type:{name:"(notes: Note[]) => void"}}}}}catch{}const Y={title:"NotesPanel",component:f,parameters:{layout:"padded"},tags:["autodocs"]},D=L("Space1",1).clean(),w=new G,i={args:{selector:new F(w,D,"Test"),display:new C(t=>[new y("Do something",e=>console.log("Something done"))])}},c={args:{selector:new F(w,D,"Test"),display:new j(t=>[new y("Do something",e=>console.log("Something done"))],t=>t.text.length).withHeaders((t,e)=>`Text length: ${t}`)}},d={args:{selector:new E(w,null,null),display:new C(t=>[new y("Do something",e=>console.log("Something done"))])}};var S,_,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    selector: new PanelNoteSearch((notu as any), space1, 'Test'),
    display: new PanelNoteList(n => [new NoteViewerAction('Do something', n => console.log('Something done'))])
  }
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var P,R,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    selector: new PanelNoteSearch((notu as any), space1, 'Test'),
    display: new PanelGroupedNoteList(n => [new NoteViewerAction('Do something', n => console.log('Something done'))], n => n.text.length).withHeaders((key, notes) => \`Text length: \${key}\`)
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var V,b,x;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    selector: new PanelRelatedTagSelector((notu as any), null, null),
    display: new PanelNoteList(n => [new NoteViewerAction('Do something', n => console.log('Something done'))])
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Z=["Primary","Grouped","FetchRelatedTags"];export{d as FetchRelatedTags,c as Grouped,i as Primary,Z as __namedExportsOrder,Y as default};