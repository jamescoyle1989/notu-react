import{j as l,a}from"./jsx-runtime-VmuvLVu_.js";import{r as s}from"./index-XiNr8FW2.js";const f=({noteAttr:e,contextSpaceId:v,tags:u,onRemove:N})=>{const[V,c]=s.useState(e.value),[S,h]=s.useState(e.tagId),o=s.useRef(),d=s.useRef();function m(n){e.value=n.target.value,c(e.value)}function p(){if(o.current&&d.current){const n=o.current.value,t=d.current.value;e.value=new Date(`${n} ${t}`),c(e.value)}}function g(){e.value=!e.value,c(e.value)}function y(n){const t=Number(n.target.value),T=u.find(I=>I.id==t);e.tag=T,h(t)}function i(){return a("p",{className:"control",children:l("a",{className:"button is-static",children:[e.attr.name,a("button",{type:"button",className:"delete ml-2",onClick:()=>N(e)})]})})}function r(){if(u.length!=0)return a("div",{className:"control",children:a("div",{className:"select",children:l("select",{value:e.tagId??0,onChange:y,children:[a("option",{value:0},"0"),u.map(n=>a("option",{value:n.id,children:n.getQualifiedName(v)},n.id))]})})})}function b(){if(e.attr.isText)return l("div",{className:"field has-addons",children:[i(),r(),a("p",{className:"control",children:a("input",{type:"text",className:"input",value:e.value,onChange:m})})]});if(e.attr.isDate){const n=e.value.toISOString().split("T")[0],t=e.value.toTimeString().split(" ")[0].substring(0,5);return l("div",{className:"field has-addons",children:[i(),r(),a("p",{className:"control",children:a("input",{ref:o,type:"date",className:"input",defaultValue:n,onBlur:p})}),a("p",{className:"control",children:a("input",{ref:d,type:"time",className:"input",defaultValue:t,onBlur:p})})]})}if(e.attr.isNumber)return l("div",{className:"field has-addons",children:[i(),r(),a("p",{className:"control",children:a("input",{type:"number",className:"input",value:e.value,onChange:m})})]});if(e.attr.isBoolean)return l("div",{className:"field has-addons",children:[i(),r(),a("p",{className:"control",children:a("button",{type:"button",className:`button ${e.value?"is-success":"is-danger"}`,onClick:g})})]})}return b()};try{f.displayName="NoteAttrEditor",f.__docgenInfo={description:"",displayName:"NoteAttrEditor",props:{noteAttr:{defaultValue:null,description:"",name:"noteAttr",required:!0,type:{name:"NoteAttr"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"Tag[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(noteAttr: NoteAttr) => void"}}}}}catch{}export{f as N};