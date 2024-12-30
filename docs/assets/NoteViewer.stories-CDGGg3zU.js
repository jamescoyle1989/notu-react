import{b as Z,N as h}from"./NoteViewer-dcVEBox3.js";import{n as $,c as ee,a as te,b as ne,N as o,F as oe}from"./StoryHelpers-BgcIDcDq.js";import{n as se}from"./NoteComponentHelpers-YOq-M9MO.js";import{N as re}from"./NotuRender-bVHJs86c.js";import{M as ae}from"./MockHttpClient-CrRj0xgx.js";import"./index-SSXOyoI7.js";/* empty css              */const we={title:"NoteViewer",component:Z,parameters:{layout:"padded"},tags:["autodocs"]},t=$("Space 1",1).clean(),s=ee("Tag 1",1).in(t);s.color="#FF0000";s.clean();const T=new oe;T.spaces=[t];T.tags=[s];const Y=new te(new ae,new ne(T));Y.cache.populate();const n=new re(Y,se,e=>null);console.log({renderTools:n});const r={args:{note:(()=>{const e=new o("Test test").in(t).at(new Date(2023,11,18)).setOwnTag("My Tag");return e.ownTag.color="#0000FF",e.addTag(s),e})(),actions:[new h("Say Hello",e=>console.log("Hello")),new h("Say Goodbye",e=>console.log("Goodbye"))],isSelected:!0,notuRenderTools:n}},a={args:{note:(()=>{const e=new o("Test test").in(t).at(new Date(2023,11,18)).setOwnTag("My Tag");return e.ownTag.color="#0000FF",e.addTag(s),e})(),actions:[],isSelected:!0,notuRenderTools:n}},c={args:{note:(()=>{const e=new o("Test test").in(t).at(new Date(2023,11,18)).setOwnTag("My Tag");return e.ownTag.color="#0000FF",e.addTag(s),e})(),actions:[],isSelected:!0,showDate:!1,notuRenderTools:n}},i={args:{note:new o(`Test test 

 and another test test`).in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},u={args:{note:new o(`Test test

<Checklist>
✔ Swim
Fight bear
</Checklist>`).in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},p={args:{note:new o(`Ive embedded an image into this note

<Image>
./src/stories/assets/docs.png
</Image>`).in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},l={args:{note:new o("I've embedded a link into this note: <Link>https://www.npmjs.com/~jamescoyle1989</Link>").in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},d={args:{note:new o("I've embedded a link into this note: <Link>(npm)https://www.npmjs.com/~jamescoyle1989</Link>").in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},m={args:{note:new o(`Back stretch
<RandomChoice>
4x Cobra
Halasana
</RandomChoice>`).in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},w={args:{note:new o("This is a piece of text that has a <Link>(link)https://www.google.com</Link> buried within it.").in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}},g={args:{note:new o("This is a piece of text that has an image <Image>./src/stories/assets/docs.png</Image> buried within it.").in(t),actions:[],isSelected:!0,showDate:!0,notuRenderTools:n}};var y,S,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      return output;
    })(),
    actions: [new NoteViewerAction('Say Hello', n => console.log('Hello')), new NoteViewerAction('Say Goodbye', n => console.log('Goodbye'))],
    isSelected: true,
    notuRenderTools: renderTools
  }
}`,...(D=(S=r.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var k,C,R;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    notuRenderTools: renderTools
  }
}`,...(R=(C=a.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var N,L,b;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test').in(space1).at(new Date(2023, 11, 18)).setOwnTag('My Tag');
      output.ownTag.color = '#0000FF';
      output.addTag(tag1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: false,
    notuRenderTools: renderTools
  }
}`,...(b=(L=c.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var I,F,f;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test \\n\\n and another test test').in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var x,H,O;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Test test\\n\\n<Checklist>\\n✔ Swim\\nFight bear\\n</Checklist>').in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var j,M,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('Ive embedded an image into this note\\n\\n<Image>\\n./src/stories/assets/docs.png\\n</Image>').in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var v,V,G;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note(\`I've embedded a link into this note: <Link>https://www.npmjs.com/~jamescoyle1989</Link>\`).in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var B,P,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note(\`I've embedded a link into this note: <Link>(npm)https://www.npmjs.com/~jamescoyle1989</Link>\`).in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var E,q,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note(\`Back stretch
<RandomChoice>
4x Cobra
Halasana
</RandomChoice>\`).in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('This is a piece of text that has a <Link>(link)https://www.google.com</Link> buried within it.').in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    note: (() => {
      const output = new Note('This is a piece of text that has an image <Image>./src/stories/assets/docs.png</Image> buried within it.').in(space1);
      return output;
    })(),
    actions: [],
    isSelected: true,
    showDate: true,
    notuRenderTools: renderTools
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ge=["Primary","NoActions","CanHideDate","DisplaysNewLinesCorrectly","DisplaysChecklistsCorrectly","DisplaysImagesCorrectly","DisplaysLinksCorrectly","DisplaysAliasedLinksCorrectly","DisplaysRandomChoiceCorrectly","LinksDisplayInline","ImagesDisplayOnSeparateLines"];export{c as CanHideDate,d as DisplaysAliasedLinksCorrectly,u as DisplaysChecklistsCorrectly,p as DisplaysImagesCorrectly,l as DisplaysLinksCorrectly,i as DisplaysNewLinesCorrectly,m as DisplaysRandomChoiceCorrectly,g as ImagesDisplayOnSeparateLines,w as LinksDisplayInline,a as NoActions,r as Primary,ge as __namedExportsOrder,we as default};
