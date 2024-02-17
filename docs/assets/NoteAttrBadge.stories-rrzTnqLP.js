import{j as D,a as I}from"./jsx-runtime-VmuvLVu_.js";import{S as _,A as o,N as s}from"./notu-crZ7QRTU.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const y="_mainbadge_jcp26_1",V="_deletebutton_jcp26_17",l={mainbadge:y,deletebutton:V},r=({noteAttr:e,contextSpaceId:f,onDelete:d})=>{function h(){return e.attr.spaceId==f?e.attr.name:`${e.attr.space.name}.${e.attr.name}`}function x(){if(d)return I("span",{className:l.deletebutton,onClick:d,children:"✖"})}return D("div",{className:l.mainbadge,children:[h(),": ",e.value,x()]})};try{r.displayName="NoteAttrBadge",r.__docgenInfo={description:"",displayName:"NoteAttrBadge",props:{noteAttr:{defaultValue:null,description:"",name:"noteAttr",required:!0,type:{name:"NoteAttr"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}}}}}catch{}const k={title:"NoteAttrBadge",component:r,parameters:{layout:"centered"},tags:["autodocs"]},c=new _("Space 1").clean();c.id=1;const b=new _("Space 2").clean();b.id=2;const t={args:{noteAttr:(()=>{const e=new o("Test").in(c).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:null}},n={args:{noteAttr:(()=>{const e=new o("Test").in(c).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},a={args:{noteAttr:(()=>{const e=new o("Test").in(b).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:null}};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,N;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(N=(g=n.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var w,A,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space2).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const v=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired"];export{t as Primary,a as ShowsSpaceNameIfRequired,n as WithDeleteButton,v as __namedExportsOrder,k as default};
