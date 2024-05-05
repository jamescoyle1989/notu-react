import{a as D,N as p}from"./NoteViewer-B4byLE0Z.js";import{S as A,T as u,A as x,N as g,a as i}from"./notu-B7rita-q.js";import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NoteTagBadge-AUqrHrt_.js";/* empty css              */import"./NotuRender-CxO7SIv6.js";import"./NoteAttrBadge-2pOiyd8Z.js";const P={title:"NoteViewer",component:D,parameters:{layout:"padded"},tags:["autodocs"]},a=new A("Space 1").clean();a.id=1;const O=new A("Space 2").clean();O.id=2;const o=new u("Tag 1").in(a).clean();o.color="#FF0000";o.id=1;o.clean();const c=new x("Attr 1").in(a).asNumber().clean();c.id=1;const n={args:{note:(()=>{const t=new g("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");return t.ownTag.color="#0000FF",t.addTag(o),t.attrs.push(new i(1,c,12345)),t.attrs.push(new i(1,c,23456).onTag(o)),t})(),contextSpaceId:1,actions:[new p("Say Hello",t=>console.log("Hello")),new p("Say Goodbye",t=>console.log("Goodbye"))],isSelected:!0}},s={args:{note:(()=>{const t=new g("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");t.ownTag.color="#0000FF";const e=new u("Tag 1").in(a).clean();return e.id=1,e.color="#FF0000",t.addTag(e),t})(),contextSpaceId:1,actions:[],isSelected:!0}},r={args:{note:(()=>{const t=new g("Test test").at(new Date(2023,11,18)).setOwnTag("My Tag");t.ownTag.color="#0000FF";const e=new u("Tag 1").in(a).clean();return e.id=1,e.color="#FF0000",t.addTag(e),t})(),contextSpaceId:1,actions:[],isSelected:!0,showDate:!1}};var d,l,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      output.attrs.push(new NoteAttr(1, attr1, 12345));
      output.attrs.push(new NoteAttr(1, attr1, 23456).onTag(tag1));
      return output;
    })(),
    contextSpaceId: 1,
    actions: [new NoteViewerAction('Say Hello', n => console.log('Hello')), new NoteViewerAction('Say Goodbye', n => console.log('Goodbye'))],
    isSelected: true
  }
}`,...(w=(l=n.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var T,m,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1').in(space1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      output.addTag(tag1);
      return output;
    })(),
    contextSpaceId: 1,
    actions: [],
    isSelected: true
  }
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var F,y,N;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      const tag1 = new Tag('Tag 1').in(space1).clean();
      tag1.id = 1;
      tag1.color = '#FF0000';
      output.addTag(tag1);
      return output;
    })(),
    contextSpaceId: 1,
    actions: [],
    isSelected: true,
    showDate: false
  }
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const _=["Primary","NoActions","CanHideDate"];export{r as CanHideDate,s as NoActions,n as Primary,_ as __namedExportsOrder,P as default};
