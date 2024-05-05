import{j as d,a as t}from"./jsx-runtime-VmuvLVu_.js";/* empty css              */const i=({space:a,notuClient:r=null,query:n="",onQueryChanged:l=null,onFetchRequested:s=null,onFetched:o=null})=>{function u(e){l&&l(e.target.value)}async function c(){let e;r?e=await r.getNotes(n,a.id):e=await s(n,a),o(e)}return d("div",{className:"field has-addons is-flex",children:[t("div",{className:"control is-flex-grow-1",children:t("input",{type:"text",className:"input",disabled:!l,value:n,onChange:u})}),t("div",{className:"control",children:t("button",{className:"button",onClick:c,children:"Search"})})]})};try{i.displayName="NoteSearch",i.__docgenInfo={description:"",displayName:"NoteSearch",props:{space:{defaultValue:null,description:"The space which we're fetching notes from",name:"space",required:!0,type:{name:"Space"}},notuClient:{defaultValue:{value:"null"},description:"The client used for fetching results from the server, only add this if you want notes to be auto-fetched for you",name:"notuClient",required:!1,type:{name:"HttpClient"}},query:{defaultValue:{value:""},description:"The query string which the search field will display and use for querying",name:"query",required:!1,type:{name:"string"}},onQueryChanged:{defaultValue:{value:"null"},description:"Optional callback for handling changes to the query text",name:"onQueryChanged",required:!1,type:{name:"(query: string) => void"}},onFetchRequested:{defaultValue:{value:"null"},description:"If notuClient has not been defined, then use this prop for handling the manual fetching of notes",name:"onFetchRequested",required:!1,type:{name:"(query: string, space: Space) => Promise<Note[]>"}},onFetched:{defaultValue:{value:"null"},description:"Callback that gets fired when the search has been executed and notes returned",name:"onFetched",required:!1,type:{name:"(notes: Note[]) => void"}}}}}catch{}export{i as N};
