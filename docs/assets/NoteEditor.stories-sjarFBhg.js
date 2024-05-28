import{a as n,j as l}from"./jsx-runtime-VmuvLVu_.js";import{r as h}from"./index-XiNr8FW2.js";import{N as Ce}from"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import{N as ve}from"./NoteAttrEditor-mJ8pi6tC.js";import{n as Q,b as U,a as z,N as C}from"./StoryHelpers-wxWbWVo0.js";import{M as Ne}from"./MockHttpClient-GIFSx4qd.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NotuRender-CxO7SIv6.js";function we(){const[a,t]=h.useState(!1);return()=>{t(!a)}}const y=({notuClient:a,note:t,tags:A,attrs:G,onConfirm:J,onCancel:K,onSave:L})=>{var F;if(!t.space)return n("p",{children:"Note must define the space that it belongs to"});const X=t.date.toISOString().split("T")[0],Y=t.date.toTimeString().split(" ")[0].substring(0,5),[Z,ee]=h.useState(((F=t.ownTag)==null?void 0:F.name)??""),[s,S]=h.useState(null),[k,D]=h.useState(null),i=we();async function te(e){e.preventDefault(),t.date=new Date(`${e.target.elements.date.value} ${e.target.elements.time.value}`),t.text=e.target.elements.text.value;try{if(await J(t)){await a.saveNotes([t]);try{L(t)}catch{}}D(null)}catch(o){D(o.message)}}function ne(e){ee(e.target.value),e.target.value.length==0?t.removeOwnTag():t.setOwnTag(e.target.value)}function ae(e){const o=e.target.value,r=O().find(c=>c.id==o);r&&(t.addTag(r),i())}function oe(e){var c;const o=e.target.value,r=(c=t.tags.find(b=>b.tag.id==o))==null?void 0:c.tag;S(r)}function re(){return s?t.getTag(s).attrs:t.attrs}function O(){return A.filter(e=>(e.isPublic||e.space.id==t.space.id)&&!t.tags.find(o=>e.id==o.tag.id))}function le(e){t.removeTag(e),e==s&&S(null),i()}function P(){let e=G.filter(o=>o.space.id==t.space.id);if(s){const o=t.getTag(s);e=e.filter(r=>!o.getAttr(r))}else e=e.filter(o=>!t.getAttr(o));return e}function se(e){t.removeAttr(e.attr),i()}function ie(e){var c;const o=e.target.value,r=P().find(b=>b.id==o);r&&(s?(c=t.getTag(s))==null||c.addAttr(r):t.addAttr(r),e.target.value=null,i())}function ce(){K(t)}function de(e){const o=e.target.value;t.ownTag.color=o,i()}function ue(){t.ownTag.isPublic=!t.ownTag.isPublic,i()}function ge(){if(k)return n("div",{className:"notification is-danger",children:l("label",{children:["Error: ",k]})})}function E(e,o){if(e.length!=0)return n("div",{className:"control is-inline-block",children:n("div",{className:"select",children:l("select",{onChange:o,children:[n("option",{value:null},"0"),e.map(r=>n("option",{value:r.id,children:r.getQualifiedName(t.space.id)},r.id))]})})})}function me(){if(t.tags.length!=0)return n("div",{className:"box",children:n("div",{children:t.tags.map(e=>n(Ce,{noteTag:e,contextSpaceId:t.space.id,onDelete:()=>le(e.tag),showAttrs:!0},e.tag.id))})})}function fe(){return l("div",{className:"field has-addons",children:[E(t.tags.map(e=>e.tag),oe),n("div",{className:"control",children:n("div",{className:"select",children:l("select",{onChange:ie,children:[n("option",{value:null},"0"),P().map(e=>n("option",{value:e.id,children:e.name},e.id))]})})})]})}function pe(){let e=re();if(e.length!=0)return n("div",{className:"box",children:e.map((o,r)=>n(ve,{noteAttr:o,onRemove:se,onChanged:i},r))})}function he(){if(t.ownTag)return[n("div",{className:"control",style:{minWidth:"70px"},children:n("input",{type:"color",className:"input",value:t.ownTag.color??"#969DA3",onChange:de})},"1"),n("div",{className:"control",children:n("button",{type:"button",className:"button",onClick:ue,children:t.ownTag.isPublic?"Public":"Private"})},"2")]}return n("form",{onSubmit:te,children:l("fieldset",{children:[ge(),l("div",{className:"field",children:[n("label",{className:"label",children:"Date"}),n("div",{className:"control",children:l("div",{className:"field has-addons",children:[n("p",{className:"control",children:n("input",{type:"date",className:"input",name:"date",defaultValue:X})}),n("p",{className:"control",children:n("input",{type:"time",className:"input",name:"time",defaultValue:Y})})]})})]}),n("label",{className:"label",children:"Own Tag"}),l("div",{className:`field ${t.ownTag?"has-addons":""}`,children:[n("div",{className:"control is-expanded",children:n("input",{type:"text",className:"input",value:Z,onChange:ne})}),he()]}),l("div",{className:"field",children:[n("label",{className:"label",children:"Text"}),n("div",{className:"control",children:n("textarea",{defaultValue:t.text,name:"text",className:"textarea"})})]}),l("div",{className:"field",children:[n("label",{className:"label",children:"Tags"}),E(O(),ae)]}),me(),l("div",{className:"field",children:[n("label",{className:"label",children:"Attrs"}),fe()]}),pe(),l("div",{className:"field",children:[n("button",{type:"submit",className:"button is-link mr-3",children:"Confirm"}),n("button",{type:"button",className:"button is-danger",onClick:ce,children:"Cancel"})]})]})})};try{y.displayName="NoteEditor",y.__docgenInfo={description:"",displayName:"NoteEditor",props:{notuClient:{defaultValue:null,description:"Used for saving the note once changes have been confirmed",name:"notuClient",required:!0,type:{name:"NotuClient"}},note:{defaultValue:null,description:"The note to be edited",name:"note",required:!0,type:{name:"Note"}},tags:{defaultValue:null,description:"The collection of tags that can be added to the note",name:"tags",required:!0,type:{name:"Tag[]"}},attrs:{defaultValue:null,description:"The collection of attrs that can be added to the note",name:"attrs",required:!0,type:{name:"Attr[]"}},onConfirm:{defaultValue:null,description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor",name:"onConfirm",required:!0,type:{name:"(note: Note) => Promise<boolean>"}},onCancel:{defaultValue:null,description:"Called when the cancel button is clicked",name:"onCancel",required:!0,type:{name:"(note: Note) => void"}},onSave:{defaultValue:null,description:"Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully",name:"onSave",required:!0,type:{name:"(note: Note) => void"}}}}}catch{}const Fe={title:"NoteEditor",component:y,parameters:{layout:"padded"},tags:["autodocs"]},d=Q("Space 1",1).clean(),Te=Q("Space 2",2).clean(),v=U("Tag 1",1).in(d).clean(),N=U("Tag 2",2).in(Te).clean(),u=z("Text Attr",1).in(d).asText().clean(),w=z("Date Attr",2).in(d).asDate().clean(),T=new Ne,g={args:{notuClient:T,note:new C("hello").in(d).at(new Date(1987,6,5,4,3,2)),tags:[v,N],attrs:[u,w],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!0)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},m={args:{notuClient:T,note:new C("hello").in(d).at(new Date(1987,6,5,4,3,2)),tags:[v,N],attrs:[u,w],onConfirm:a=>{throw console.log("Confirm Clicked",a),new Error("This note is crap, try again!")},onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},f={args:{notuClient:T,note:new C("hello").in(d).at(new Date(1987,6,5,4,3,2)),tags:[v,N],attrs:[u,w],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},p={args:{notuClient:T,note:(()=>{const a=new C("Hello").in(d);return a.id=123,a.addAttr(u,"Woo woo"),a.getAttr(u).clean(),a.clean(),a})(),tags:[v,N],attrs:[u,w],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}};var x,R,V;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag1, tag2],
    attrs: [attr1, attr2],
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
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,I,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag1, tag2],
    attrs: [attr1, attr2],
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var M,j,B;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: new Note('hello').in(space1).at(new Date(1987, 6, 5, 4, 3, 2)),
    tags: [tag1, tag2],
    attrs: [attr1, attr2],
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
}`,...(B=(j=f.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var H,W,$;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: (() => {
      const output = new Note('Hello').in(space1);
      output.id = 123;
      output.addAttr(attr1, 'Woo woo');
      output.getAttr(attr1).clean();
      output.clean();
      return output;
    })(),
    tags: [tag1, tag2],
    attrs: [attr1, attr2],
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
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const xe=["Primary","DisplaysErrorMessageOnFailedConfirm","DoesntCallNotuClientIfOnConfirmReturnsFalse","AllowsRemovalOfAttrsFromSavedNote"];export{p as AllowsRemovalOfAttrsFromSavedNote,m as DisplaysErrorMessageOnFailedConfirm,f as DoesntCallNotuClientIfOnConfirmReturnsFalse,g as Primary,xe as __namedExportsOrder,Fe as default};
