import{j as l,a as s}from"./jsx-runtime-VmuvLVu_.js";import"./notu-Zi0Mo9zw.js";const t=({noteTag:e,contextSpaceId:r,onDelete:a})=>{function n(){return e.tag.spaceId==r?e.tag.name:`${e.tag.space.name}.${e.tag.name}`}function o(){if(a)return s("button",{className:"delete",onClick:a})}return l("span",{className:"tag is-small is-unselectable is-rounded mr-1",style:{backgroundColor:e.tag.color??"#969DA3"},children:[n(),o()]})};try{t.displayName="NoteTagBadge",t.__docgenInfo={description:"",displayName:"NoteTagBadge",props:{noteTag:{defaultValue:null,description:"",name:"noteTag",required:!0,type:{name:"NoteTag"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}}}}}catch{}export{t as N};