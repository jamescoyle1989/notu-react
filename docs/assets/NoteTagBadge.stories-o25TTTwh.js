import{N as NoteTagBadge}from"./NoteTagBadge-YuDQMR-7.js";import{T as Tag,N as Note,S as Space}from"./notu-m_CwcKhx.js";import"./jsx-runtime-wvP3fMU7.js";import"./index-ZzCYUyIO.js";import"./_commonjsHelpers-uMlHD7dG.js";const meta={title:"NoteTagBadge",component:NoteTagBadge,parameters:{layout:"centered"},tags:["autodocs"]},Primary={args:{noteTag:(()=>{const tag=new Tag("Test",1).clean();return tag.id=123,new Note().addTag(tag)})(),contextSpaceId:1,onDelete:null}},WithDeleteButton={args:{noteTag:(()=>{const tag=new Tag("Test",1).clean();return tag.id=123,new Note().addTag(tag)})(),contextSpaceId:1,onDelete:()=>{console.log("Delete clicked")}}},ShowsSpaceNameIfRequired={args:{noteTag:(()=>{const tag=new Tag("Test",2).clean();tag.id=123;const space=new Space("Space 2").clean();return space.id=2,tag.space=space,new Note().addTag(tag)})(),contextSpaceId:1,onDelete:null}},RedBadge={args:{noteTag:(()=>{const tag=new Tag("Test",1).clean();tag.color="#FF0000",tag.id=123;const space=new Space("Space").clean();return space.id=1,tag.space=space,new Note().addTag(tag)})(),contextSpaceId:1,onDelete:null}},GreenBadge={args:{noteTag:(()=>{const tag=new Tag("Test",1).clean();tag.color="#00FF00",tag.id=123;const space=new Space("Space").clean();return space.id=1,tag.space=space,new Note().addTag(tag)})(),contextSpaceId:1,onDelete:null}};var _a,_b,_c;Primary.parameters={...Primary.parameters,docs:{...(_a=Primary.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c=(_b=Primary.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;WithDeleteButton.parameters={...WithDeleteButton.parameters,docs:{...(_a2=WithDeleteButton.parameters)==null?void 0:_a2.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.id = 123;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: () => {
      console.log('Delete clicked');
    }
  }
}`,...(_c2=(_b2=WithDeleteButton.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;ShowsSpaceNameIfRequired.parameters={...ShowsSpaceNameIfRequired.parameters,docs:{...(_a3=ShowsSpaceNameIfRequired.parameters)==null?void 0:_a3.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 2).clean();
      tag.id = 123;
      const space = new Space('Space 2').clean();
      space.id = 2;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c3=(_b3=ShowsSpaceNameIfRequired.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;RedBadge.parameters={...RedBadge.parameters,docs:{...(_a4=RedBadge.parameters)==null?void 0:_a4.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.color = '#FF0000';
      tag.id = 123;
      const space = new Space('Space').clean();
      space.id = 1;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c4=(_b4=RedBadge.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;GreenBadge.parameters={...GreenBadge.parameters,docs:{...(_a5=GreenBadge.parameters)==null?void 0:_a5.docs,source:{originalSource:`{
  args: {
    noteTag: (() => {
      const tag = new Tag('Test', 1).clean();
      tag.color = '#00FF00';
      tag.id = 123;
      const space = new Space('Space').clean();
      space.id = 1;
      tag.space = space;
      return new Note().addTag(tag);
    })(),
    contextSpaceId: 1,
    onDelete: null
  }
}`,...(_c5=(_b5=GreenBadge.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};const __namedExportsOrder=["Primary","WithDeleteButton","ShowsSpaceNameIfRequired","RedBadge","GreenBadge"];export{GreenBadge,Primary,RedBadge,ShowsSpaceNameIfRequired,WithDeleteButton,__namedExportsOrder,meta as default};
//# sourceMappingURL=NoteTagBadge.stories-o25TTTwh.js.map
