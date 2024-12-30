import{r as Y,R as o}from"./index-SSXOyoI7.js";import{a as Ee}from"./NoteViewer-dcVEBox3.js";/* empty css              */import{g as ye,N as E}from"./NotuRender-bVHJs86c.js";import{D as ke}from"./DateTimePicker-D-ZOQjmU.js";import{n as Z,c as ee,N as d}from"./StoryHelpers-BgcIDcDq.js";import{M as be}from"./MockHttpClient-CrRj0xgx.js";import{T as ne}from"./ReactSnippets-BfUqKE1P.js";function De(){const[e,t]=Y.useState(!1);return()=>{t(!e)}}const oe=({notuRenderTools:e,note:t,tags:g,onConfirm:te,onCancel:ae,onSave:re,ownTagMode:k="Optional"})=>{if(!t.space)return o.createElement("p",null,"Note must define the space that it belongs to");const[b,D]=Y.useState(null),u=De();async function le(n){n.preventDefault(),t.text=n.target.elements.text.value;try{if(await te(t)){await e.notu.saveNotes([t]);try{re(t)}catch{}}D(null)}catch(a){D(a.message)}}function se(n){n.target.value.length==0?t.removeOwnTag():t.setOwnTag(n.target.value),u()}function ce(n){const a=n.target.value,r=S().find(c=>c.id==a);r&&(t.addTag(r),u())}function S(){return g.filter(n=>(n.isPublic||n.space.id==t.space.id)&&!t.tags.find(a=>n.id==a.tag.id))}function ie(n){t.removeTag(n),u()}function de(){ae(t)}function ue(n){const a=n.target.value;t.ownTag.color=a,u()}function me(n){const a=Number(n.target.value),r=g.find(c=>c.id==a);r&&(t.ownTag.color=r.color,u())}function ge(){t.ownTag.isPublic=!t.ownTag.isPublic,u()}function pe(){if(b)return o.createElement("div",{className:"notification is-danger"},o.createElement("label",null,"Error: ",b))}function Ce(n,a){if(n.length!=0)return n=n.sort((r,c)=>r.space==t.space&&c.space!=t.space?-1:c.space==t.space&&r.space!=t.space?1:r.space==c.space?r.name.localeCompare(c.name):r.space.name.localeCompare(c.space.name)),o.createElement("div",{className:"control is-inline-block"},o.createElement("div",{className:"select"},o.createElement("select",{onChange:a},o.createElement("option",{key:"0",value:null}),n.map(r=>o.createElement("option",{key:r.id,value:r.id},r.getQualifiedName(t.space.id))))))}function fe(){if(t.tags.length!=0)return o.createElement("div",{className:"box"},o.createElement("div",null,t.tags.map(n=>o.createElement(Ee,{key:n.tag.id,noteTag:n,note:t,notuRenderTools:e,contextSpaceId:t.space.id,onDelete:()=>ie(n.tag)}))))}function Te(){var n;if(k!="None")return o.createElement("div",null,o.createElement("label",{className:"label"},"Own Tag"),o.createElement("div",{className:`field ${t.ownTag?"has-addons":""}`},o.createElement("div",{className:"control is-expanded"},o.createElement("input",{type:"text",className:"input",value:((n=t.ownTag)==null?void 0:n.name)??"",onChange:se})),we()))}function we(){if(t.ownTag)return[o.createElement("div",{className:"control",key:"1",style:{minWidth:"70px"}},o.createElement("input",{type:"color",className:"input",value:t.ownTag.color??"#969DA3",onChange:ue,style:{boxShadow:"none",borderRight:0}})),Ne(),o.createElement("div",{className:"control",key:"3"},o.createElement("button",{type:"button",className:"button",onClick:ge},t.ownTag.isPublic?"Public":"Private"))]}function Ne(){const n=g.filter(a=>!!a.color).sort((a,r)=>a.name.localeCompare(r.name));if(n.length!=0)return o.createElement("div",{className:"control",key:"2"},o.createElement("div",{className:"select"},o.createElement("select",{onChange:me,style:{width:0,paddingRight:"2em",borderLeftWidth:0}},o.createElement("option",{key:"0",value:null}),n.map(a=>o.createElement("option",{key:a.id,value:a.id,style:{background:a.color},className:ye(a.color)},a.getQualifiedName(t.space.id))))))}function ve(n){const a=e.noteTagDataComponentResolver(n.tag,t);if(a)return n.data||(n.data={}),o.createElement("div",{key:n.tag.id},o.createElement("label",{className:"label"},n.tag.getQualifiedName(t.space.id)),o.createElement("div",{className:"box mb-3"},a.getEditorComponent(n,t,e.notu)))}function he(){return!(k=="Required"&&!t.ownTag)}return o.createElement("form",{onSubmit:le},o.createElement("fieldset",null,pe(),o.createElement("div",{className:"field"},o.createElement("label",{className:"label"},"Date"),o.createElement("div",{className:"control"},o.createElement(ke,{value:t.date,onChange:n=>t.date=n}))),Te(),o.createElement("div",{className:"field"},o.createElement("label",{className:"label"},"Text"),o.createElement("div",{className:"control"},o.createElement("textarea",{defaultValue:t.text,name:"text",className:"textarea"}))),o.createElement("div",{className:"field"},o.createElement("label",{className:"label"},"Tags"),Ce(S(),ce)),fe(),t.tags.map(n=>ve(n)),o.createElement("div",{className:"field"},o.createElement("button",{type:"submit",className:"button is-link mr-3",disabled:!he()},"Confirm"),o.createElement("button",{type:"button",className:"button is-danger",onClick:de},"Cancel"))))};oe.__docgenInfo={description:"",methods:[],displayName:"NoteEditor",props:{notuRenderTools:{required:!0,tsType:{name:"NotuRenderTools"},description:"Used for saving the note once changes have been confirmed"},note:{required:!0,tsType:{name:"Note"},description:"The note to be edited"},tags:{required:!0,tsType:{name:"Array",elements:[{name:"Tag"}],raw:"Array<Tag>"},description:"The collection of tags that can be added to the note"},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"(note: Note) => Promise<boolean>",signature:{arguments:[{type:{name:"Note"},name:"note"}],return:{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}}},description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor"},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"(note: Note) => void",signature:{arguments:[{type:{name:"Note"},name:"note"}],return:{name:"void"}}},description:"Called when the cancel button is clicked"},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(note: Note) => void",signature:{arguments:[{type:{name:"Note"},name:"note"}],return:{name:"void"}}},description:"Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully"},ownTagMode:{required:!1,tsType:{name:"unknown"},description:"Default mode is Optional, which allows the user to choose if they want to give a note its own tag. Required means that the note must have its own tag set, and None hides the own tag field entirely.",defaultValue:{value:"'Optional'",computed:!1}}}};const Ie={title:"NoteEditor",component:oe,parameters:{layout:"padded"},tags:["autodocs"]},i=Z("Space 1",1).clean(),Se=Z("Space 2",2).clean(),l=ee("Tag 1",1).in(i);l.color="#FF8800";l.clean();const s=ee("Tag 2",2).in(Se).asPublic();s.color="#112211";s.clean();const y=new be,m=new E(y,null,e=>null),p={args:{notuRenderTools:m,note:new d("hello").in(i).at(new Date(1987,6,5,4,3,2)),tags:[s,l],onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!0)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},C={args:{notuRenderTools:m,note:new d("hello").in(i).at(new Date(1987,6,5,4,3,2)),tags:[l,s],onConfirm:e=>{throw console.log("Confirm Clicked",e),new Error("This note is crap, try again!")},onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},f={args:{notuRenderTools:m,note:new d("hello").in(i).at(new Date(1987,6,5,4,3,2)),tags:[l,s],onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!1)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},T={args:{notuRenderTools:m,note:(()=>{const e=new d("Hello").in(i).at(new Date(2024,8,10,23,30));return e.id=123,e})(),tags:[l,s],onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!1)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},w={args:{notuRenderTools:new E(y,null,e=>{if(e==l)return new ne}),note:(()=>{const e=new d("Hello").in(i);return e.addTag(l).withData({name:"Barnabus"}),e.id=123,e})(),tags:[l,s],onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!1)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},N={args:{notuRenderTools:new E(y,null,e=>{if(e==l)return new ne}),note:(()=>{const e=new d("Add Tag 1 to this note").in(i);return e.id=123,e})(),tags:[l,s],onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!1)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},v={args:{notuRenderTools:m,note:new d("hello").in(i).at(new Date(1987,6,5,4,3,2)),tags:[s,l],ownTagMode:"Required",onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!0)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}},h={args:{notuRenderTools:m,note:new d("hello").in(i).at(new Date(1987,6,5,4,3,2)),tags:[s,l],ownTagMode:"None",onConfirm:e=>(console.log("Confirm Clicked",e),Promise.resolve(!0)),onCancel:e=>{console.log("Cancel Clicked")},onSave:e=>{console.log("Note saved")}}};var R,P,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag2, tag1],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(true);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(O=(P=p.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var M,q,F;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag1, tag2],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      throw new Error('This note is crap, try again!');
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(F=(q=C.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var A,x,I;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag1, tag2],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(false);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(I=(x=f.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var H,B,_;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: (() => {
      const output = new Note('Hello').in(space1).at(new Date(2024, 8, 10, 23, 30));
      output.id = 123;
      return output;
    })(),
    tags: [tag1, tag2],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(false);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(_=(B=T.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var L,Q,W;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    notuRenderTools: new NotuRenderTools((notu as any), null, t => {
      if (t == tag1) return new TestNoteTagDataComponentFactory();
    }),
    note: (() => {
      const output = new Note('Hello').in(space1);
      output.addTag(tag1).withData({
        name: 'Barnabus'
      });
      output.id = 123;
      return output;
    })(),
    tags: [tag1, tag2],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(false);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(W=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var V,U,$;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    notuRenderTools: new NotuRenderTools((notu as any), null, t => {
      if (t == tag1) return new TestNoteTagDataComponentFactory();
    }),
    note: (() => {
      const output = new Note('Add Tag 1 to this note').in(space1);
      output.id = 123;
      return output;
    })(),
    tags: [tag1, tag2],
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(false);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...($=(U=N.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,z,G;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag2, tag1],
    ownTagMode: 'Required',
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(true);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    notuRenderTools: renderTools,
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag2, tag1],
    ownTagMode: 'None',
    onConfirm: note => {
      console.log('Confirm Clicked', note);
      return Promise.resolve(true);
    },
    onCancel: note => {
      console.log('Cancel Clicked');
    },
    onSave: note => {
      console.log('Note saved');
    }
  }
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const He=["Primary","DisplaysErrorMessageOnFailedConfirm","DoesntCallNotuClientIfOnConfirmReturnsFalse","DisplaysCorrectDateLateAtNightCanadianTime","EditorSupportsNoteTagDataComponent","EditorSupportsAddingNewNoteTagDataComponent","CanSetOwnTagModeToRequired","CanSetOwnTagModeToNone"];export{h as CanSetOwnTagModeToNone,v as CanSetOwnTagModeToRequired,T as DisplaysCorrectDateLateAtNightCanadianTime,C as DisplaysErrorMessageOnFailedConfirm,f as DoesntCallNotuClientIfOnConfirmReturnsFalse,N as EditorSupportsAddingNewNoteTagDataComponent,w as EditorSupportsNoteTagDataComponent,p as Primary,He as __namedExportsOrder,Ie as default};
