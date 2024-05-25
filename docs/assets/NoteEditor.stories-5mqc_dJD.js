import{a as n,j as l}from"./jsx-runtime-VmuvLVu_.js";import{r as b}from"./index-XiNr8FW2.js";import{N as Te}from"./NoteTagBadge-IT_LJgyr.js";/* empty css              */import{N as be}from"./NoteAttrEditor-mJ8pi6tC.js";import{n as J,b as K,a as L,N as g}from"./StoryHelpers-Nro3gCTf.js";import{M as Se}from"./MockHttpClient-GIFSx4qd.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./NotuRender-CxO7SIv6.js";function ye(){const[a,t]=b.useState(!1);return()=>{t(!a)}}const y=({notuClient:a,note:t,tags:A,attrs:X,onConfirm:Y,onCancel:Z,onSave:ee})=>{var x;if(!t.space)return n("p",{children:"Note must define the space that it belongs to"});const te=t.date.toISOString().split("T")[0],ne=t.date.toTimeString().split(" ")[0].substring(0,5),[ae,oe]=b.useState(((x=t.ownTag)==null?void 0:x.name)??""),[s,k]=b.useState(null),[D,P]=b.useState(null),i=ye();async function re(e){e.preventDefault(),t.date=new Date(`${e.target.elements.date.value} ${e.target.elements.time.value}`),t.text=e.target.elements.text.value;try{if(await Y(t)){await a.saveNotes([t]);try{ee(t)}catch{}}P(null)}catch(o){P(o.message)}}function le(e){oe(e.target.value),e.target.value.length==0?t.removeOwnTag():t.setOwnTag(e.target.value)}function se(e){const o=e.target.value,r=E().find(c=>c.id==o);r&&(t.addTag(r),i())}function ie(e){var c;const o=e.target.value,r=(c=t.tags.find(S=>S.tag.id==o))==null?void 0:c.tag;k(r)}function ce(){return s?t.getTag(s).attrs:t.attrs}function E(){return A.filter(e=>(e.isPublic||e.space.id==t.space.id)&&!t.tags.find(o=>e.id==o.tag.id))}function de(e){t.removeTag(e),e==s&&k(null),i()}function O(){let e=X.filter(o=>o.space.id==t.space.id);if(s){const o=t.getTag(s);e=e.filter(r=>!o.getAttr(r))}else e=e.filter(o=>!t.getAttr(o));return e}function ue(e){t.removeAttr(e.attr),i()}function ge(e){var c;const o=e.target.value,r=O().find(S=>S.id==o);r&&(s?(c=t.getTag(s))==null||c.addAttr(r):t.addAttr(r),e.target.value=null,i())}function me(){Z(t)}function fe(e){const o=e.target.value;t.ownTag.color=o,i()}function pe(){t.ownTag.isPublic=!t.ownTag.isPublic,i()}function he(){if(D)return n("div",{className:"notification is-danger",children:l("label",{children:["Error: ",D]})})}function F(e,o){if(e.length!=0)return n("div",{className:"control is-inline-block",children:n("div",{className:"select",children:l("select",{onChange:o,children:[n("option",{value:null},"0"),e.map(r=>n("option",{value:r.id,children:r.getQualifiedName(t.space.id)},r.id))]})})})}function Ce(){if(t.tags.length!=0)return n("div",{className:"box",children:n("div",{children:t.tags.map(e=>n(Te,{noteTag:e,contextSpaceId:t.space.id,onDelete:()=>de(e.tag),showAttrs:!0},e.tag.id))})})}function ve(){return l("div",{className:"field has-addons",children:[F(t.tags.map(e=>e.tag),ie),n("div",{className:"control",children:n("div",{className:"select",children:l("select",{onChange:ge,children:[n("option",{value:null},"0"),O().map(e=>n("option",{value:e.id,children:e.name},e.id))]})})})]})}function Ne(){let e=ce();if(e.length!=0)return n("div",{className:"box",children:e.map((o,r)=>n(be,{noteAttr:o,onRemove:ue,onChanged:i},r))})}function we(){if(t.ownTag)return[n("div",{className:"control",style:{minWidth:"70px"},children:n("input",{type:"color",className:"input",value:t.ownTag.color??"#969DA3",onChange:fe})},"1"),n("div",{className:"control",children:n("button",{type:"button",className:"button",onClick:pe,children:t.ownTag.isPublic?"Public":"Private"})},"2")]}return n("form",{onSubmit:re,children:l("fieldset",{children:[he(),l("div",{className:"field",children:[n("label",{className:"label",children:"Date"}),n("div",{className:"control",children:l("div",{className:"field has-addons",children:[n("p",{className:"control",children:n("input",{type:"date",className:"input",name:"date",defaultValue:te})}),n("p",{className:"control",children:n("input",{type:"time",className:"input",name:"time",defaultValue:ne})})]})})]}),n("label",{className:"label",children:"Own Tag"}),l("div",{className:`field ${t.ownTag?"has-addons":""}`,children:[n("div",{className:"control is-expanded",children:n("input",{type:"text",className:"input",value:ae,onChange:le})}),we()]}),l("div",{className:"field",children:[n("label",{className:"label",children:"Text"}),n("div",{className:"control",children:n("textarea",{defaultValue:t.text,name:"text",className:"textarea"})})]}),l("div",{className:"field",children:[n("label",{className:"label",children:"Tags"}),F(E(),se)]}),Ce(),l("div",{className:"field",children:[n("label",{className:"label",children:"Attrs"}),ve()]}),Ne(),l("div",{className:"field",children:[n("button",{type:"submit",className:"button is-link mr-3",children:"Confirm"}),n("button",{type:"button",className:"button is-danger",onClick:me,children:"Cancel"})]})]})})};try{y.displayName="NoteEditor",y.__docgenInfo={description:"",displayName:"NoteEditor",props:{notuClient:{defaultValue:null,description:"Used for saving the note once changes have been confirmed",name:"notuClient",required:!0,type:{name:"NotuClient"}},note:{defaultValue:null,description:"The note to be edited",name:"note",required:!0,type:{name:"Note"}},tags:{defaultValue:null,description:"The collection of tags that can be added to the note",name:"tags",required:!0,type:{name:"Tag[]"}},attrs:{defaultValue:null,description:"The collection of attrs that can be added to the note",name:"attrs",required:!0,type:{name:"Attr[]"}},onConfirm:{defaultValue:null,description:"Called when the confirm button is clicked. A false return value will prevent saving, so will a thrown error, which will also display on the note editor",name:"onConfirm",required:!0,type:{name:"(note: Note) => Promise<boolean>"}},onCancel:{defaultValue:null,description:"Called when the cancel button is clicked",name:"onCancel",required:!0,type:{name:"(note: Note) => void"}},onSave:{defaultValue:null,description:"Called when onConfirm has indicated that the NoteEditor should proceed with the save automatically, and the save has gone through successfully",name:"onSave",required:!0,type:{name:"(note: Note) => void"}}}}}catch{}const Ve={title:"NoteEditor",component:y,parameters:{layout:"padded"},tags:["autodocs"]},u=J("Space 1",1).clean(),Ae=J("Space 2",2).clean(),m=K("Tag 1",1).in(u).clean(),f=K("Tag 2",2).in(Ae).clean(),d=L("Text Attr",1).in(u).asText().clean(),p=L("Date Attr",2).in(u).asDate().clean(),h=new Se,C={args:{notuClient:h,note:new g("hello").in(u).at(new Date(1987,6,5,4,3,2)),tags:[m,f],attrs:[d,p],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!0)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},v={args:{notuClient:h,note:new g("hello"),tags:[m,f],attrs:[d,p],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!0)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},N={args:{notuClient:h,note:new g("hello").in(u).at(new Date(1987,6,5,4,3,2)),tags:[m,f],attrs:[d,p],onConfirm:a=>{throw console.log("Confirm Clicked",a),new Error("This note is crap, try again!")},onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},w={args:{notuClient:h,note:new g("hello").in(u).at(new Date(1987,6,5,4,3,2)),tags:[m,f],attrs:[d,p],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}},T={args:{notuClient:h,note:(()=>{const a=new g("Hello").in(u);return a.id=123,a.addAttr(d,"Woo woo"),a.getAttr(d).clean(),a.clean(),a})(),tags:[m,f],attrs:[d,p],onConfirm:a=>(console.log("Confirm Clicked",a),Promise.resolve(!1)),onCancel:a=>{console.log("Cancel Clicked")},onSave:a=>{console.log("Note saved")}}};var I,R,V;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(R=C.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,q,M;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(q=v.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var j,B,H;N.parameters={...N.parameters,docs:{...(j=N.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(B=N.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var W,$,Q;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=($=w.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var U,z,G;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(z=T.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const _e=["Primary","ShowsErrorIfNoteDoesntSetSpace","DisplaysErrorMessageOnFailedConfirm","DoesntCallNotuClientIfOnConfirmReturnsFalse","AllowsRemovalOfAttrsFromSavedNote"];export{T as AllowsRemovalOfAttrsFromSavedNote,N as DisplaysErrorMessageOnFailedConfirm,w as DoesntCallNotuClientIfOnConfirmReturnsFalse,C as Primary,v as ShowsErrorIfNoteDoesntSetSpace,_e as __namedExportsOrder,Ve as default};
