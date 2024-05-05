import{a as e,j as n}from"./jsx-runtime-VmuvLVu_.js";import{r as b}from"./index-XiNr8FW2.js";/* empty css              */import{S as A,A as w}from"./notu-B7rita-q.js";import{M as S}from"./MockHttpClient--DzGGkTL.js";import"./_commonjsHelpers-5-cIlDoe.js";const s=({notuClient:t,attr:r,onConfirm:y})=>{if(!r.space)throw new Error("Attr must define the space that it belongs to prior to editing");const[c,v]=b.useState(null);async function E(i){i.preventDefault(),r.name=i.target.elements.name.value,r.type=i.target.elements.type.value;try{await y(r)&&t.saveAttr(r)}catch(m){v(m.message)}}function N(){if(c)return e("div",{className:"notification is-danger",children:n("label",{children:["Error: ",c]})})}return e("form",{onSubmit:E,children:n("fieldset",{children:[N(),n("div",{className:"field",children:[e("label",{className:"label",children:"Name"}),e("div",{className:"control",children:e("input",{type:"text",className:"input",name:"name",defaultValue:r.name})})]}),n("div",{className:"field",children:[e("label",{className:"label",children:"Type"}),e("div",{className:"control",children:e("div",{className:"select",children:n("select",{name:"type",defaultValue:r.type,children:[e("option",{value:"TEXT",children:"Text"}),e("option",{value:"NUMBER",children:"Number"}),e("option",{value:"BOOLEAN",children:"Boolean"}),e("option",{value:"DATE",children:"Date"})]})})})]}),e("div",{className:"field",children:e("button",{type:"submit",className:"button is-link",children:"Confirm"})})]})})};try{s.displayName="AttrEditor",s.__docgenInfo={description:"",displayName:"AttrEditor",props:{notuClient:{defaultValue:null,description:"Used for saving the attr once changes have been confirmed",name:"notuClient",required:!0,type:{name:"NotuClient"}},attr:{defaultValue:null,description:"The attr to be edited",name:"attr",required:!0,type:{name:"Attr"}},onConfirm:{defaultValue:null,description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the attr editor",name:"onConfirm",required:!0,type:{name:"(attr: Attr) => Promise<boolean>"}}}}}catch{}const P={title:"AttrEditor",component:s,parameters:{layout:"padded"},tags:["autodocs"]},l=new A("Space 1").clean();l.id=1;const C=new S,o={args:{notuClient:C,attr:new w("Test").in(l),onConfirm:t=>(console.log("Confirm clicked",t),Promise.resolve(!0))}},a={args:{notuClient:C,attr:new w("Test").in(l),onConfirm:t=>{throw console.log("Confirm clicked",t),Error("Something went wrong")}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    attr: new Attr('Test').in(space1),
    onConfirm: attr => {
      console.log('Confirm clicked', attr);
      return Promise.resolve(true);
    }
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    attr: new Attr('Test').in(space1),
    onConfirm: attr => {
      console.log('Confirm clicked', attr);
      throw Error('Something went wrong');
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const V=["Primary","ShowsErrorMessageOnConfirm"];export{o as Primary,a as ShowsErrorMessageOnConfirm,V as __namedExportsOrder,P as default};
