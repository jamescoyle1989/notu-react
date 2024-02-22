import{j as I,a as y}from"./jsx-runtime-VmuvLVu_.js";import{S,A as o,N as s}from"./notu-Zi0Mo9zw.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const r=({noteAttr:e,contextSpaceId:h,onDelete:d})=>{function x(){return e.attr.spaceId==h?e.attr.name:`${e.attr.space.name}.${e.attr.name}`}function D(){if(d)return y("button",{className:"delete",onClick:d})}return I("span",{className:"tag is-small is-unselectable is-rounded",children:[x(),": ",e.value,D()]})};try{r.displayName="NoteAttrBadge",r.__docgenInfo={description:"",displayName:"NoteAttrBadge",props:{noteAttr:{defaultValue:null,description:"",name:"noteAttr",required:!0,type:{name:"NoteAttr"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}}}}}catch{}const T={title:"NoteAttrBadge",component:r,parameters:{layout:"centered"},tags:["autodocs"]},c=new S("Space 1").clean();c.id=1;const f=new S("Space 2").clean();f.id=2;const t={args:{noteAttr:(()=>{const e=new o("Test").in(c).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:null}},a={args:{noteAttr:(()=>{const e=new o("Test").in(c).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},n={args:{noteAttr:(()=>{const e=new o("Test").in(f).asNumber().clean();return e.id=123,new s().addAttr(e).withValue(15)})(),contextSpaceId:1,onDelete:null}};var l,u,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,m,N;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(N=(m=a.parameters)==null?void 0:m.docs)==null?void 0:N.source}}};var w,A,g;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space2).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(g=(A=n.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const q=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired"];export{t as Primary,n as ShowsSpaceNameIfRequired,a as WithDeleteButton,q as __namedExportsOrder,T as default};
