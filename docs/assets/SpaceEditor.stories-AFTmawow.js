import{a as e,j as s}from"./jsx-runtime-VmuvLVu_.js";import{r as i}from"./index-XiNr8FW2.js";import{S as g}from"./notu-crZ7QRTU.js";import"./_commonjsHelpers-5-cIlDoe.js";const x="_errorBanner_yhr8k_1",k={errorBanner:x},t=({space:a,onConfirm:C})=>{const[y,S]=i.useState(a.name),[c,h]=i.useState(null);function _(r){S(r.target.value),a.name=r.target.value}function N(){const r=C();h(r??null)}function E(){if(c)return e("div",{className:k.errorBanner,children:s("label",{children:["Error: ",c]})})}return e("form",{className:"pure-form pure-form-aligned",children:s("fieldset",{children:[E(),s("div",{className:"pure-control-group",children:[e("label",{children:"Name"}),e("input",{type:"text",value:y,onChange:_})]}),e("div",{className:"pure-controls",children:e("button",{type:"button",onClick:N,className:"pure-button pure-button-primary",children:"Confirm"})})]})})};try{t.displayName="SpaceEditor",t.__docgenInfo={description:"",displayName:"SpaceEditor",props:{space:{defaultValue:null,description:"",name:"space",required:!0,type:{name:"Space"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => string"}}}}}catch{}const M={title:"SpaceEditor",component:t,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{space:new g("Test"),onConfirm:()=>(console.log("Confirm clicked"),null)}},o={args:{space:new g,onConfirm:()=>(console.log("Confirm clicked"),"Name already exists")}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    space: new Space('Test'),
    onConfirm: () => {
      console.log('Confirm clicked');
      return null;
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    space: new Space(),
    onConfirm: () => {
      console.log('Confirm clicked');
      return 'Name already exists';
    }
  }
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const j=["Primary","ShowsErrorMessageOnConfirm"];export{n as Primary,o as ShowsErrorMessageOnConfirm,j as __namedExportsOrder,M as default};
