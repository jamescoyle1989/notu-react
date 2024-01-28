import{j as jsxRuntimeExports}from"./jsx-runtime-wvP3fMU7.js";import{r as reactExports}from"./index-ZzCYUyIO.js";import{S as Space}from"./notu-m_CwcKhx.js";import"./_commonjsHelpers-uMlHD7dG.js";const errorBanner="_errorBanner_yhr8k_1",style={errorBanner},SpaceEditor=({space,onConfirm})=>{const[name,setName]=reactExports.useState(space.name),[error,setError]=reactExports.useState(null);function onNameChange(event){setName(event.target.value),space.name=event.target.value}function onConfirmClick(){const errorMessage=onConfirm();setError(errorMessage??null)}function renderErrorMessage(){if(error)return jsxRuntimeExports.jsx("div",{className:style.errorBanner,children:jsxRuntimeExports.jsxs("label",{children:["Error: ",error]})})}return jsxRuntimeExports.jsx("form",{className:"pure-form pure-form-aligned",children:jsxRuntimeExports.jsxs("fieldset",{children:[renderErrorMessage(),jsxRuntimeExports.jsxs("div",{className:"pure-control-group",children:[jsxRuntimeExports.jsx("label",{children:"Name"}),jsxRuntimeExports.jsx("input",{type:"text",value:name,onChange:onNameChange})]}),jsxRuntimeExports.jsx("div",{className:"pure-controls",children:jsxRuntimeExports.jsx("button",{type:"button",onClick:onConfirmClick,className:"pure-button pure-button-primary",children:"Confirm"})})]})})};try{SpaceEditor.displayName="SpaceEditor",SpaceEditor.__docgenInfo={description:"",displayName:"SpaceEditor",props:{space:{defaultValue:null,description:"",name:"space",required:!0,type:{name:"Space"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => string"}}}}}catch{}const meta={title:"SpaceEditor",component:SpaceEditor,parameters:{layout:"padded"},tags:["autodocs"]},Primary={args:{space:new Space("Test"),onConfirm:()=>(console.log("Confirm clicked"),null)}},ShowsErrorMessageOnConfirm={args:{space:new Space,onConfirm:()=>(console.log("Confirm clicked"),"Name already exists")}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    space: new Space('Test'),
    onConfirm: () => {
      console.log('Confirm clicked');
      return null;
    }
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;ShowsErrorMessageOnConfirm.parameters={...ShowsErrorMessageOnConfirm.parameters,docs:{...(_a2=ShowsErrorMessageOnConfirm.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
  args: {
    space: new Space(),
    onConfirm: () => {
      console.log('Confirm clicked');
      return 'Name already exists';
    }
  }
}`,...(_c2=(_b2=ShowsErrorMessageOnConfirm.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Primary","ShowsErrorMessageOnConfirm"];export{Primary,ShowsErrorMessageOnConfirm,__namedExportsOrder,meta as default};
//# sourceMappingURL=SpaceEditor.stories-SeGzVNTz.js.map
