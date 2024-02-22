import{a as e,j as s}from"./jsx-runtime-VmuvLVu_.js";import{r as i}from"./index-XiNr8FW2.js";import{S as g}from"./notu-Zi0Mo9zw.js";import"./_commonjsHelpers-5-cIlDoe.js";const t=({space:o,onConfirm:C})=>{const[S,h]=i.useState(o.name),[c,y]=i.useState(null);function N(r){h(r.target.value),o.name=r.target.value}async function E(){const r=await C();y(r??null)}function _(){if(c)return e("div",{className:"notification is-danger",children:s("label",{children:["Error: ",c]})})}return e("form",{children:s("fieldset",{children:[_(),s("div",{className:"field",children:[e("label",{className:"label",children:"Name"}),e("div",{className:"control",children:e("input",{type:"text",className:"input",value:S,onChange:N})})]}),e("div",{className:"field",children:e("button",{type:"button",onClick:E,className:"button is-link",children:"Confirm"})})]})})};try{t.displayName="SpaceEditor",t.__docgenInfo={description:"",displayName:"SpaceEditor",props:{space:{defaultValue:null,description:"",name:"space",required:!0,type:{name:"Space"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => Promise<string>"}}}}}catch{}const v={title:"SpaceEditor",component:t,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{space:new g("Test"),onConfirm:()=>(console.log("Confirm clicked"),null)}},a={args:{space:new g,onConfirm:()=>(console.log("Confirm clicked"),"Name already exists")}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    space: new Space('Test'),
    onConfirm: () => {
      console.log('Confirm clicked');
      return null;
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    space: new Space(),
    onConfirm: () => {
      console.log('Confirm clicked');
      return 'Name already exists';
    }
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const M=["Primary","ShowsErrorMessageOnConfirm"];export{n as Primary,a as ShowsErrorMessageOnConfirm,M as __namedExportsOrder,v as default};
