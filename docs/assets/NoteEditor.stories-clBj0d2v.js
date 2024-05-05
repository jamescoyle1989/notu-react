import{a as t,j as r}from"./jsx-runtime-VmuvLVu_.js";import{r as f}from"./index-XiNr8FW2.js";import{N as ve}from"./NoteTagBadge-AUqrHrt_.js";/* empty css              */import{N as Ne}from"./NoteAttrEditor-TaoXafoP.js";import{S as K,T as L,A as X,N as g}from"./notu-B7rita-q.js";import{M as we}from"./MockHttpClient--DzGGkTL.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NotuRender-CxO7SIv6.js";const I=({notuClient:a,note:n,tags:A,attrs:Y,onConfirm:Z,onCancel:ee,onSave:te})=>{var x;if(!n.space)return t("p",{children:"Note must define the space that it belongs to"});const ne=n.date.toISOString().split("T")[0],ae=n.date.toTimeString().split(" ")[0].substring(0,5),[oe,re]=f.useState(((x=n.ownTag)==null?void 0:x.name)??""),[S,D]=f.useState(n.tags.map(e=>e.tagId)),[E,O]=f.useState(n.attrs.filter(e=>e.tagId==null).map(e=>e.attrId)),[P,V]=f.useState(null);async function le(e){e.preventDefault(),n.date=new Date(`${e.target.elements.date.value} ${e.target.elements.time.value}`),n.text=e.target.elements.text.value;try{if(await Z(n)){await a.saveNotes([n]);try{te(n)}catch{}}V(null)}catch(o){V(o.message)}}function se(e){re(e.target.value),e.target.value.length==0?n.removeOwnTag():n.setOwnTag(e.target.value)}function ie(e){const o=e.target.value,l=T().find(b=>b.id==o);if(!l)return;const d=S.slice();d.push(l.id),D(d),n.addTag(l)}function T(){return A.filter(e=>(e.isPublic||e.spaceId==n.spaceId)&&!n.tags.find(o=>e.id==o.tagId))}function ce(e){D(S.filter(o=>o!=e.id)),n.removeTag(e)}function y(){return Y.filter(e=>e.spaceId==n.spaceId)}function de(e){O(E.filter(o=>o!=e.attrId)),n.removeAttr(e.attr,e.tag)}function ue(e){const o=e.target.value,l=y().find(b=>b.id==o);if(!l)return;const d=E.slice();d.push(l.id),O(d),n.addAttr(l),e.target.value=null}function me(){ee(n)}function ge(){if(P)return t("div",{className:"notification is-danger",children:r("label",{children:["Error: ",P]})})}function pe(){if(T().length!=0)return t("div",{className:"control",children:t("div",{className:"select",children:r("select",{onChange:ie,children:[t("option",{value:null},"0"),T().map(e=>t("option",{value:e.id,children:e.getQualifiedName(n.spaceId)},e.id))]})})})}function fe(){if(n.tags.length!=0)return t("div",{className:"box",children:t("div",{children:n.tags.map(e=>t(ve,{noteTag:e,contextSpaceId:n.spaceId,onDelete:()=>ce(e.tag),showAttrs:!1},e.tag.id))})})}function Ce(){if(y().length!=0)return t("div",{className:"control",children:t("div",{className:"select",children:r("select",{onChange:ue,children:[t("option",{value:null},"0"),y().map(e=>t("option",{value:e.id,children:e.name},e.id))]})})})}function he(){if(n.attrs.length!=0)return t("div",{className:"box",children:n.attrs.map((e,o)=>t(Ne,{noteAttr:e,contextSpaceId:n.spaceId,tags:S.map(l=>A.find(d=>d.id==l)),onRemove:de},o))})}return t("form",{onSubmit:le,children:r("fieldset",{children:[ge(),r("div",{className:"field",children:[t("label",{className:"label",children:"Date"}),t("div",{className:"control",children:r("div",{className:"field has-addons",children:[t("p",{className:"control",children:t("input",{type:"date",className:"input",name:"date",defaultValue:ne})}),t("p",{className:"control",children:t("input",{type:"time",className:"input",name:"time",defaultValue:ae})})]})})]}),r("div",{className:"field",children:[t("label",{className:"label",children:"Own Tag"}),t("div",{className:"control",children:t("input",{type:"text",className:"input",value:oe,onChange:se})})]}),r("div",{className:"field",children:[t("label",{className:"label",children:"Text"}),t("div",{className:"control",children:t("textarea",{defaultValue:n.text,name:"text",className:"textarea"})})]}),r("div",{className:"field",children:[t("label",{className:"label",children:"Tags"}),pe()]}),fe(),r("div",{className:"field",children:[t("label",{className:"label",children:"Attrs"}),Ce()]}),he(),r("div",{className:"field",children:[t("button",{type:"submit",className:"button is-link mr-3",children:"Confirm"}),t("button",{type:"button",className:"button is-danger",onClick:me,children:"Cancel"})]})]})})};try{I.displayName="NoteEditor",I.__docgenInfo={description:"",displayName:"NoteEditor",props:{notuClient:{defaultValue:null,description:"Used for saving the note once changes have been confirmed",name:"notuClient",required:!0,type:{name:"NotuClient"}},note:{defaultValue:null,description:"The note to be edited",name:"note",required:!0,type:{name:"Note"}},tags:{defaultValue:null,description:"The collection of tags that can be added to the note",name:"tags",required:!0,type:{name:"Tag[]"}},attrs:{defaultValue:null,description:"The collection of attrs that can be added to the note",name:"attrs",required:!0,type:{name:"Attr[]"}},onConfirm:{defaultValue:null,description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor",name:"onConfirm",required:!0,type:{name:"(note: Note) => Promise<boolean>"}},onCancel:{defaultValue:null,description:"Called when the cancel button is clicked",name:"onCancel",required:!0,type:{name:"(note: Note) => void"}},onSave:{defaultValue:null,description:"Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully",name:"onSave",required:!0,type:{name:"(note: Note) => void"}}}}}catch{}const Oe={title:"NoteEditor",component:I,parameters:{layout:"padded"},tags:["autodocs"]},s=new K("Space 1").clean();s.id=1;const k=new K("Space 2").clean();k.id=2;const i=new L("Tag 1").in(s);i.id=1;i.space=s;i.clean();const c=new L("Tag 2").in(k);c.id=2;c.space=k;c.clean();const u=new X("Text Attr").in(s).asText().clean();u.id=1;const m=new X("Date Attr").in(s).asDate().clean();m.id=2;const p=new we,C={args:{notuClient:p,note:new g("hello").in(s).at(new Date(1987,6,5,4,3,2)),tags:[i,c],attrs:[u,m],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!0)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},h={args:{notuClient:p,note:new g("hello"),tags:[i,c],attrs:[u,m],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!0)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},v={args:{notuClient:p,note:new g("hello").in(s).at(new Date(1987,6,5,4,3,2)),tags:[i,c],attrs:[u,m],onConfirm:a=>{throw console.log("Confirm Clicked",a),new Error("This note is crap, try again!")},onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},N={args:{notuClient:p,note:new g("hello").in(s).at(new Date(1987,6,5,4,3,2)),tags:[i,c],attrs:[u,m],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},w={args:{notuClient:p,note:(()=>{const a=new g("Hello").in(s);return a.id=123,a.addAttr(u).withValue("Woo woo").clean(),a.clean(),a})(),tags:[i,c],attrs:[u,m],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}};var _,q,F;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(q=C.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,M,j;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: new Note('hello'),
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
}`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var B,H,W;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var $,Q,U;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var z,G,J;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    notuClient: (notuClient as any),
    note: (() => {
      const output = new Note('Hello').in(space1);
      output.id = 123;
      output.addAttr(attr1).withValue('Woo woo').clean();
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Pe=["Primary","ShowsErrorIfNoteDoesntSetSpace","DisplaysErrorMessageOnFailedConfirm","DoesntCallNotuClientIfOnConfirmReturnsFalse","AllowsRemovalOfAttrsFromSavedNote"];export{w as AllowsRemovalOfAttrsFromSavedNote,v as DisplaysErrorMessageOnFailedConfirm,N as DoesntCallNotuClientIfOnConfirmReturnsFalse,C as Primary,h as ShowsErrorIfNoteDoesntSetSpace,Pe as __namedExportsOrder,Oe as default};
