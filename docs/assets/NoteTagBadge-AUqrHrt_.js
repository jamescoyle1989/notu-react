import{j as a,a as u}from"./jsx-runtime-VmuvLVu_.js";/* empty css              */import{r as i}from"./NotuRender-CxO7SIv6.js";const n=({noteTag:e,contextSpaceId:o,onDelete:r,showAttrs:l})=>{function s(){if(r)return u("button",{type:"button",className:"delete",onClick:r})}function d(){if(!(!e.note||!l))return e.attrs.map(t=>a("span",{className:"ml-1",children:[t.attr.name,": ",i(t)]},`${e.tagId}_${t.attrId}`))}return a("span",{className:"tag is-small is-unselectable is-rounded mr-1",style:{backgroundColor:e.tag.color??"#969DA3"},children:[e.tag.getQualifiedName(o),d(),s()]})};try{n.displayName="NoteTagBadge",n.__docgenInfo={description:"",displayName:"NoteTagBadge",props:{noteTag:{defaultValue:null,description:"",name:"noteTag",required:!0,type:{name:"NoteTag"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}},showAttrs:{defaultValue:null,description:"",name:"showAttrs",required:!0,type:{name:"boolean"}}}}}catch{}export{n as N};
