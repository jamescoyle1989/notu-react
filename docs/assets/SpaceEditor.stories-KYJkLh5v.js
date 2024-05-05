import{a as e,j as t}from"./jsx-runtime-VmuvLVu_.js";import{r as E}from"./index-XiNr8FW2.js";/* empty css              */import{S as g}from"./notu-B7rita-q.js";import{M as b}from"./MockHttpClient--DzGGkTL.js";import"./_commonjsHelpers-5-cIlDoe.js";const s=({notuClient:r,space:n,onConfirm:w})=>{const[i,S]=E.useState(null);async function y(c){c.preventDefault(),n.name=c.target.elements.name.value;try{await w(n)&&r.saveSpace(n)}catch(l){S(l.message)}}function v(){if(i)return e("div",{className:"notification is-danger",children:t("label",{children:["Error: ",i]})})}return e("form",{onSubmit:y,children:t("fieldset",{children:[v(),t("div",{className:"field",children:[e("label",{className:"label",children:"Name"}),e("div",{className:"control",children:e("input",{type:"text",className:"input",name:"name",defaultValue:n.name})})]}),e("div",{className:"field",children:e("button",{type:"submit",className:"button is-link",children:"Confirm"})})]})})};try{s.displayName="SpaceEditor",s.__docgenInfo={description:"",displayName:"SpaceEditor",props:{notuClient:{defaultValue:null,description:"Used for saving the space once changes have been confirmed",name:"notuClient",required:!0,type:{name:"NotuClient"}},space:{defaultValue:null,description:"The space to be edited",name:"space",required:!0,type:{name:"Space"}},onConfirm:{defaultValue:null,description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the space editor",name:"onConfirm",required:!0,type:{name:"(space: Space) => Promise<boolean>"}}}}}catch{}const V={title:"SpaceEditor",component:s,parameters:{layout:"padded"},tags:["autodocs"]},C=new b,o={args:{notuClient:C,space:new g("Test"),onConfirm:()=>(console.log("Confirm clicked"),Promise.resolve(!0))}},a={args:{notuClient:C,space:new g,onConfirm:r=>{throw console.log("Confirm clicked",r),Error("Something went wrong!")}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    space: new Space('Test'),
    onConfirm: () => {
      console.log('Confirm clicked');
      return Promise.resolve(true);
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    space: new Space(),
    onConfirm: space => {
      console.log('Confirm clicked', space);
      throw Error('Something went wrong!');
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const j=["Primary","ShowsErrorMessageOnConfirm"];export{o as Primary,a as ShowsErrorMessageOnConfirm,j as __namedExportsOrder,V as default};
