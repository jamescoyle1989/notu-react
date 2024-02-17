import{a as r,j as t}from"./jsx-runtime-VmuvLVu_.js";import{r as a}from"./index-XiNr8FW2.js";import{A as h,S as C}from"./notu-crZ7QRTU.js";import"./_commonjsHelpers-5-cIlDoe.js";const M="_errorBanner_yhr8k_1",O={errorBanner:M},c=({attr:n,spaces:l,onConfirm:S})=>{const[y,v]=a.useState(n.spaceId),[E,N]=a.useState(n.name),[T,w]=a.useState(n.type),[i,_]=a.useState(null);function A(e){v(e.target.value),n.space=l.find(I=>I.id==e.target.value)}function b(e){N(e.target.value),n.name=e.target.value}function k(e){w(e.target.value),n.type=e.target.value}function B(){const e=S();_(e??null)}function x(){if(i)return r("div",{className:O.errorBanner,children:t("label",{children:["Error: ",i]})})}return r("form",{className:"pure-form pure-form-aligned",children:t("fieldset",{children:[x(),t("div",{className:"pure-control-group",children:[r("label",{children:"Space"}),t("select",{value:y,onChange:A,children:[r("option",{value:null},"0"),l.map(e=>r("option",{value:e.id,children:e.name},e.id))]})]}),t("div",{className:"pure-control-group",children:[r("label",{children:"Name"}),r("input",{type:"text",value:E,onChange:b})]}),t("div",{className:"pure-control-group",children:[r("label",{children:"Type"}),t("select",{value:T,onChange:k,children:[r("option",{value:"TEXT",children:"Text"}),r("option",{value:"NUMBER",children:"Number"}),r("option",{value:"BOOLEAN",children:"Boolean"}),r("option",{value:"DATE",children:"Date"})]})]}),r("div",{className:"pure-controls",children:r("button",{type:"button",onClick:B,className:"pure-button pure-button-primary",children:"Confirm"})})]})})};try{c.displayName="AttrEditor",c.__docgenInfo={description:"",displayName:"AttrEditor",props:{attr:{defaultValue:null,description:"",name:"attr",required:!0,type:{name:"Attr"}},spaces:{defaultValue:null,description:"",name:"spaces",required:!0,type:{name:"Space[]"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"() => string"}}}}}catch{}const P={title:"AttrEditor",component:c,parameters:{layout:"padded"},tags:["autodocs"]},o={args:{attr:new h("Test"),spaces:(()=>{const n=new C("Test Space").clean();return n.id=1,[n]})(),onConfirm:()=>(console.log("Confirm clicked"),null)}},s={args:{attr:new h("Test"),spaces:(()=>{const n=new C("Test Space").clean();return n.id=1,[n]})(),onConfirm:()=>(console.log("Confirm clicked"),"Something went wrong!")}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,g,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Primary","ShowsErrorMessageOnConfirm"];export{o as Primary,s as ShowsErrorMessageOnConfirm,L as __namedExportsOrder,P as default};
