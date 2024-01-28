import{N as NoteAttrEditor}from"./NoteAttrEditor-FJ4r0ycL.js";import{S as Space,A as Attr,N as Note}from"./notu-m_CwcKhx.js";import"./jsx-runtime-wvP3fMU7.js";import"./index-ZzCYUyIO.js";import"./_commonjsHelpers-uMlHD7dG.js";const meta={title:"NoteAttrEditor",component:NoteAttrEditor,parameters:{layout:"padded"},tags:["autodocs"]},space1=new Space("Space 1").clean();space1.id=1;const space2=new Space("Space 2").clean();space2.id=2;const Primary={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asText().clean();return attr.id=123,new Note("Test").clean().addAttr(attr).withValue("abc")})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},DateAttr={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asDate().clean();return attr.id=123,new Note("Test").clean().addAttr(attr).withValue(new Date(2023,3,4))})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},BooleanAttr={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asBoolean().clean();return attr.id=123,new Note("Test").clean().addAttr(attr)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},NumberAttr={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space1).asNumber().clean();return attr.id=123,new Note("Test").clean().addAttr(attr)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}},ShowsSpaceName={args:{noteAttr:(()=>{const attr=new Attr("Test").in(space2).asNumber().clean();return attr.id=123,new Note("Test").clean().addAttr(attr)})(),contextSpaceId:1,onRemove:()=>{console.log("Requested to remove NoteAttr")}}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asText().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue('abc');
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;DateAttr.parameters={...DateAttr.parameters,docs:{...(_a2=DateAttr.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asDate().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue(new Date(2023, 3, 4));
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(_c2=(_b2=DateAttr.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;BooleanAttr.parameters={...BooleanAttr.parameters,docs:{...(_a3=BooleanAttr.parameters)==null?void 0:_a3.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asBoolean().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(_c3=(_b3=BooleanAttr.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;NumberAttr.parameters={...NumberAttr.parameters,docs:{...(_a4=NumberAttr.parameters)==null?void 0:_a4.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(_c4=(_b4=NumberAttr.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;ShowsSpaceName.parameters={...ShowsSpaceName.parameters,docs:{...(_a5=ShowsSpaceName.parameters)==null?void 0:_a5.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space2).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(_c5=(_b5=ShowsSpaceName.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};const __namedExportsOrder=["Primary","DateAttr","BooleanAttr","NumberAttr","ShowsSpaceName"];export{BooleanAttr,DateAttr,NumberAttr,Primary,ShowsSpaceName,__namedExportsOrder,meta as default};
//# sourceMappingURL=NoteAttrEditor.stories-J9fg5bxO.js.map
