import{N as V}from"./NoteAttrEditor-TaoXafoP.js";import{S as P,A as a,N as r,T as i}from"./notu-B7rita-q.js";/* empty css              */import"./jsx-runtime-VmuvLVu_.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const z={title:"NoteAttrEditor",component:V,parameters:{layout:"padded"},tags:["autodocs"]},t=new P("Space 1").clean();t.id=1;const o=new P("Space 2").clean();o.id=2;const s={args:{noteAttr:(()=>{const e=new a("Test").in(t).asText().clean();return e.id=123,new r("Test").clean().addAttr(e).withValue("abc")})(),contextSpaceId:1,tags:[],onRemove:()=>{console.log("Requested to remove NoteAttr")}}},c={args:{noteAttr:(()=>{const e=new a("Test").in(t).asDate().clean();return e.id=123,new r("Test").clean().addAttr(e).withValue(new Date(2023,3,4))})(),contextSpaceId:1,tags:[],onRemove:()=>{console.log("Requested to remove NoteAttr")}}},d={args:{noteAttr:(()=>{const e=new a("Test").in(t).asBoolean().clean();return e.id=123,new r("Test").clean().addAttr(e)})(),contextSpaceId:1,tags:[],onRemove:()=>{console.log("Requested to remove NoteAttr")}}},l={args:{noteAttr:(()=>{const e=new a("Test").in(t).asNumber().clean();return e.id=123,new r("Test").clean().addAttr(e)})(),contextSpaceId:1,tags:[],onRemove:()=>{console.log("Requested to remove NoteAttr")}}},g={args:{noteAttr:(()=>{const e=new a("Test").in(t).asNumber().clean();return e.id=123,new r("Test").clean().addAttr(e)})(),contextSpaceId:1,tags:(()=>{const e=new i("Tag1").in(t);e.id=123,e.space=t;const n=new i("Tag2").in(o);return n.id=234,n.space=o,[e.clean(),n.clean()]})(),onRemove:e=>{console.log("Requested to remove NoteAttr",e)}}},p={args:{noteAttr:(()=>{const e=new a("Test").in(t).asNumber().clean();return e.id=123,new r("Test").clean().addAttr(e).onTag(234)})(),contextSpaceId:1,tags:(()=>{const e=new i("Tag1").in(t);e.id=123,e.space=t;const n=new i("Tag2").in(o);return n.id=234,n.space=o,[e.clean(),n.clean()]})(),onRemove:e=>{console.log("Requested to remove NoteAttr",e)}}};var m,u,A;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asText().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue('abc');
    })(),
    contextSpaceId: 1,
    tags: [],
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(A=(u=s.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var T,w,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asDate().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).withValue(new Date(2023, 3, 4));
    })(),
    contextSpaceId: 1,
    tags: [],
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,R,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asBoolean().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    tags: [],
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var x,q,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    tags: [],
    onRemove: () => {
      console.log('Requested to remove NoteAttr');
    }
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var b,y,D;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr);
    })(),
    contextSpaceId: 1,
    tags: (() => {
      const tag1 = new Tag('Tag1').in(space1);
      tag1.id = 123;
      tag1.space = space1;
      const tag2 = new Tag('Tag2').in(space2);
      tag2.id = 234;
      tag2.space = space2;
      return [tag1.clean(), tag2.clean()];
    })(),
    onRemove: noteAttr => {
      console.log('Requested to remove NoteAttr', noteAttr);
    }
  }
}`,...(D=(y=g.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var h,B,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    noteAttr: (() => {
      const attr = new Attr('Test').in(space1).asNumber().clean();
      attr.id = 123;
      return new Note('Test').clean().addAttr(attr).onTag(234);
    })(),
    contextSpaceId: 1,
    tags: (() => {
      const tag1 = new Tag('Tag1').in(space1);
      tag1.id = 123;
      tag1.space = space1;
      const tag2 = new Tag('Tag2').in(space2);
      tag2.id = 234;
      tag2.space = space2;
      return [tag1.clean(), tag2.clean()];
    })(),
    onRemove: noteAttr => {
      console.log('Requested to remove NoteAttr', noteAttr);
    }
  }
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const F=["Primary","DateAttr","BooleanAttr","NumberAttr","CanAddTag","DisplaysPreviouslySelectedTagCorrectly"];export{d as BooleanAttr,g as CanAddTag,c as DateAttr,p as DisplaysPreviouslySelectedTagCorrectly,l as NumberAttr,s as Primary,F as __namedExportsOrder,z as default};
