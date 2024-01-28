import{j as jsxRuntimeExports}from"./jsx-runtime-wvP3fMU7.js";import{S as Space,A as Attr,N as Note}from"./notu-m_CwcKhx.js";import"./index-ZzCYUyIO.js";import"./_commonjsHelpers-uMlHD7dG.js";const mainbadge="_mainbadge_jcp26_1",deletebutton="_deletebutton_jcp26_17",style={mainbadge,deletebutton},NoteAttrBadge=({noteAttr,contextSpaceId,onDelete})=>{function getAttrName(){return noteAttr.attr.spaceId==contextSpaceId?noteAttr.attr.name:`${noteAttr.attr.space.name}.${noteAttr.attr.name}`}function renderDeleteButton(){if(onDelete)return jsxRuntimeExports.jsx("span",{className:style.deletebutton,onClick:onDelete,children:"✖"})}return jsxRuntimeExports.jsxs("div",{className:style.mainbadge,children:[getAttrName(),": ",noteAttr.value,renderDeleteButton()]})};try{NoteAttrBadge.displayName="NoteAttrBadge",NoteAttrBadge.__docgenInfo={description:"",displayName:"NoteAttrBadge",props:{noteAttr:{defaultValue:null,description:"",name:"noteAttr",required:!0,type:{name:"NoteAttr"}},contextSpaceId:{defaultValue:null,description:"",name:"contextSpaceId",required:!0,type:{name:"number"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"() => void"}}}}}catch{}const meta={title:"NoteAttrBadge",component:NoteAttrBadge,parameters:{layout:"centered"},tags:["autodocs"]},space1=new Space("Space 1").clean();space1.id=1;const space2=new Space("Space 2").clean();space2.id=2;const Primary={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asNumber().clean();return attr.id=123,new Note().addAttr(attr).withValue(15)})(),contextSpaceId:1,onDelete:null}},WithDeleteButton={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asNumber().clean();return attr.id=123,new Note().addAttr(attr).withValue(15)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},ShowsSpaceNameIfRequired={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space2).asNumber().clean();return attr.id=123,new Note().addAttr(attr).withValue(15)})(),contextSpaceId:1,onDelete:null}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;WithDeleteButton.parameters={...WithDeleteButton.parameters,docs:{...(_a2=WithDeleteButton.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
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
}`,...(_c2=(_b2=WithDeleteButton.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;ShowsSpaceNameIfRequired.parameters={...ShowsSpaceNameIfRequired.parameters,docs:{...(_a3=ShowsSpaceNameIfRequired.parameters)==null?void 0:_a3.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space2).asNumber().clean();
      attr.id = 123;
      return new Note().addAttr(attr).withValue(15);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c3=(_b3=ShowsSpaceNameIfRequired.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired"];export{Primary,ShowsSpaceNameIfRequired,WithDeleteButton,__namedExportsOrder,meta as default};
//# sourceMappingURL=NoteAttrBadge.stories-n1ppg1Vj.js.map
