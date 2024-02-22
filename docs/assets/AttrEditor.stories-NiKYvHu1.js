import{a as e,j as a}from"./jsx-runtime-VmuvLVu_.js";import{r as t}from"./index-XiNr8FW2.js";import{A as h,S as N}from"./notu-Zi0Mo9zw.js";import"./_commonjsHelpers-5-cIlDoe.js";const c=({attr:r,spaces:l,onConfirm:v})=>{const[C,S]=t.useState(r.spaceId),[y,E]=t.useState(r.name),[T,w]=t.useState(r.type),[i,b]=t.useState(null);function A(n){S(n.target.value),r.space=l.find(M=>M.id==n.target.value)}function _(n){E(n.target.value),r.name=n.target.value}function k(n){w(n.target.value),r.type=n.target.value}function x(){const n=v();b(n??null)}function I(){if(i)return e("div",{className:"notification is-danger",children:a("label",{children:["Error: ",i]})})}return e("form",{children:a("fieldset",{children:[I(),a("div",{className:"field",children:[e("label",{className:"label",children:"Space"}),e("div",{className:"control",children:e("div",{className:"select",children:a("select",{value:C,onChange:A,children:[e("option",{value:null},"0"),l.map(n=>e("option",{value:n.id,children:n.name},n.id))]})})})]}),a("div",{className:"field",children:[e("label",{className:"label",children:"Name"}),e("div",{className:"control",children:e("input",{type:"text",className:"input",value:y,onChange:_})})]}),a("div",{className:"field",children:[e("label",{className:"label",children:"Type"}),e("div",{className:"control",children:e("div",{className:"select",children:a("select",{value:T,onChange:k,children:[e("option",{value:"TEXT",children:"Text"}),e("option",{value:"NUMBER",children:"Number"}),e("option",{value:"BOOLEAN",children:"Boolean"}),e("option",{value:"DATE",children:"Date"})]})})})]}),e("div",{className:"field",children:e("button",{type:"button",onClick:x,className:"button is-link",children:"Confirm"})})]})})};try{c.displayName="AttrEditor",c.__docgenInfo={description:"",displayName:"AttrEditor",props:{attr:{defaultValue:null,description:"",name:"attr",required:!0,type:{name:"Attr"}},spaces:{defaultValue:null,description:"",name:"spaces",required:!0,type:{name:"Space[]"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => string"}}}}}catch{}const V={title:"AttrEditor",component:c,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{attr:new h("Test"),spaces:(()=>{const r=new N("Test Space").clean();return r.id=1,[r]})(),onConfirm:()=>(console.log("Confirm clicked"),null)}},o={args:{attr:new h("Test"),spaces:(()=>{const r=new N("Test Space").clean();return r.id=1,[r]})(),onConfirm:()=>(console.log("Confirm clicked"),"Something went wrong!")}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Primary","ShowsErrorMessageOnConfirm"];export{s as Primary,o as ShowsErrorMessageOnConfirm,D as __namedExportsOrder,V as default};
