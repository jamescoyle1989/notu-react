import{j as jsxRuntimeExports}from"./jsx-runtime-wvP3fMU7.js";import{r as reactExports}from"./index-ZzCYUyIO.js";import{A as Attr,S as Space}from"./notu-m_CwcKhx.js";import"./_commonjsHelpers-uMlHD7dG.js";const errorBanner="_errorBanner_yhr8k_1",styles={errorBanner},AttrEditor=({attr,spaces,onConfirm})=>{const[spaceId,setSpaceId]=reactExports.useState(attr.spaceId),[name,setName]=reactExports.useState(attr.name),[type,setType]=reactExports.useState(attr.type),[error,setError]=reactExports.useState(null);function onSpaceIdChange(event){setSpaceId(event.target.value),attr.space=spaces.find(x=>x.id==event.target.value)}function onNameChange(event){setName(event.target.value),attr.name=event.target.value}function onTypeChange(event){setType(event.target.value),attr.type=event.target.value}function onConfirmClick(){const errorMessage=onConfirm();setError(errorMessage??null)}function renderErrorMessage(){if(error)return jsxRuntimeExports.jsx("div",{className:styles.errorBanner,children:jsxRuntimeExports.jsxs("label",{children:["Error: ",error]})})}return jsxRuntimeExports.jsx("form",{className:"pure-form pure-form-aligned",children:jsxRuntimeExports.jsxs("fieldset",{children:[renderErrorMessage(),jsxRuntimeExports.jsxs("div",{className:"pure-control-group",children:[jsxRuntimeExports.jsx("label",{children:"Space"}),jsxRuntimeExports.jsxs("select",{value:spaceId,onChange:onSpaceIdChange,children:[jsxRuntimeExports.jsx("option",{value:null},"0"),spaces.map(x=>jsxRuntimeExports.jsx("option",{value:x.id,children:x.name},x.id))]})]}),jsxRuntimeExports.jsxs("div",{className:"pure-control-group",children:[jsxRuntimeExports.jsx("label",{children:"Name"}),jsxRuntimeExports.jsx("input",{type:"text",value:name,onChange:onNameChange})]}),jsxRuntimeExports.jsxs("div",{className:"pure-control-group",children:[jsxRuntimeExports.jsx("label",{children:"Type"}),jsxRuntimeExports.jsxs("select",{value:type,onChange:onTypeChange,children:[jsxRuntimeExports.jsx("option",{value:"TEXT",children:"Text"}),jsxRuntimeExports.jsx("option",{value:"NUMBER",children:"Number"}),jsxRuntimeExports.jsx("option",{value:"BOOLEAN",children:"Boolean"}),jsxRuntimeExports.jsx("option",{value:"DATE",children:"Date"})]})]}),jsxRuntimeExports.jsx("div",{className:"pure-controls",children:jsxRuntimeExports.jsx("button",{type:"button",onClick:onConfirmClick,className:"pure-button pure-button-primary",children:"Confirm"})})]})})};try{AttrEditor.displayName="AttrEditor",AttrEditor.__docgenInfo={description:"",displayName:"AttrEditor",props:{attr:{defaultValue:null,description:"",name:"attr",required:!0,type:{name:"Attr"}},spaces:{defaultValue:null,description:"",name:"spaces",required:!0,type:{name:"Space[]"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => string"}}}}}catch{}const meta={title:"AttrEditor",component:AttrEditor,parameters:{layout:"padded"},tags:["autodocs"]},Primary={args:{attr:new Attr("Test"),spaces:(()=>{const space1=new Space("Test Space").clean();return space1.id=1,[space1]})(),onConfirm:()=>(console.log("Confirm clicked"),null)}},ShowsErrorMessageOnConfirm={args:{attr:new Attr("Test"),spaces:(()=>{const space1=new Space("Test Space").clean();return space1.id=1,[space1]})(),onConfirm:()=>(console.log("Confirm clicked"),"Something went wrong!")}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    attr: new Attr('Test'),
    spaces: (() => {
      const space1 = new Space('Test Space').clean();
      space1.id = 1;
      return [space1];
    })(),
    onConfirm: () => {
      console.log('Confirm clicked');
      return null;
    }
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;ShowsErrorMessageOnConfirm.parameters={...ShowsErrorMessageOnConfirm.parameters,docs:{...(_a2=ShowsErrorMessageOnConfirm.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
  args: {
    attr: new Attr('Test'),
    spaces: (() => {
      const space1 = new Space('Test Space').clean();
      space1.id = 1;
      return [space1];
    })(),
    onConfirm: () => {
      console.log('Confirm clicked');
      return 'Something went wrong!';
    }
  }
}`,...(_c2=(_b2=ShowsErrorMessageOnConfirm.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Primary","ShowsErrorMessageOnConfirm"];export{Primary,ShowsErrorMessageOnConfirm,__namedExportsOrder,meta as default};
//# sourceMappingURL=AttrEditor.stories-9XZ4_BOr.js.map
