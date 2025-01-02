var y=Object.defineProperty,b=(a,t,e)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,n=(a,t,e)=>(b(a,typeof t!="symbol"?t+"":t,e),e);class O{constructor(t,e){n(this,"_client"),n(this,"_cache"),this._client=t,this._cache=e}get client(){return this._client}get cache(){return this._cache}async login(t,e){return await this.client.login(t,e)}async setup(){return await this.client.setup()}getSpaces(){return this.cache.getSpaces()}getSpace(t){return this.cache.getSpace(t)}getSpaceByName(t){return this.cache.getSpaceByName(t)}async saveSpace(t){const e=await this.client.saveSpace(t);return this.cache.spaceSaved(e)}getTags(t=null,e=!1){return this.cache.getTags(t,e)}getTag(t){return this.cache.getTag(t)}getTagByName(t,e){return this.cache.getTagByName(t,e)}async getNotes(t,e){return(await this.client.getNotes(t,e)).map(s=>this.cache.noteFromJSON(s))}async getNoteCount(t,e){return await this.client.getNoteCount(t,e)}async getRelatedNotes(t){return(await this.client.getRelatedNotes(t)).map(e=>this.cache.noteFromJSON(e))}async saveNotes(t){const e=t.filter(i=>!!i.ownTag).filter(i=>i.isDeleted||i.ownTag.isDeleted).map(i=>i.ownTag.toJSON()),s=await this.client.saveNotes(t);for(const i of s.filter(r=>!!r.ownTag&&!r.ownTag.isDeleted))i.ownTag.links=i.tags.map(r=>r.tagId),this.cache.tagSaved(i.ownTag);for(const i of e)i.state="DELETED",this.cache.tagSaved(i);return t=s.map(i=>this.cache.noteFromJSON(i)),t}async customJob(t,e){return await this.client.customJob(t,e)}}class p{constructor(){n(this,"state","NEW")}new(){return this.state="NEW",this}clean(){return this.state="CLEAN",this}dirty(){return this.state="DIRTY",this}delete(){return this.state="DELETED",this}get isNew(){return this.state=="NEW"}get isClean(){return this.state=="CLEAN"}get isDirty(){return this.state=="DIRTY"}get isDeleted(){return this.state=="DELETED"}validate(t=!1){return!0}}class f extends p{constructor(t){if(super(),n(this,"_tag"),n(this,"_data"),!t)throw Error("Cannot instanciate new NoteTag without a passed in tag.");if(t.isNew)throw Error("Cannot create a NoteTag object for a tag that hasn't been saved yet.");if(t.isDeleted)throw Error("Cannot create a NoteTag object for a tag marked as deleted.");this._tag=t}get tag(){return this._tag}get data(){return this._data}set data(t){this._data=t,this.isClean&&this.dirty()}withData(t){return this.data=t,this}duplicate(){const t=this.duplicateAsNew();return t.state=this.state,t}duplicateAsNew(){const t=new f(this.tag);return this.data&&(t._data=JSON.parse(JSON.stringify(this.data))),t}validate(t=!1){function e(s){if(t&&s!=null)throw Error(s);return s==null}return this.tag?!0:e("NoteTag must have a tag set.")}toJSON(){return{state:this.state,tagId:this.tag.id,data:this.data}}}class c extends p{constructor(t=""){super(),n(this,"_id",0),n(this,"_name",""),n(this,"_version","0.0.1"),n(this,"_useCommonSpace",!1),this._name=t}get id(){return this._id}set id(t){if(!this.isNew)throw Error("Cannot change the id of a Space once it has already been created.");this._id=t}get name(){return this._name}set name(t){t!==this._name&&(this._name=t,this.isClean&&this.dirty())}get version(){return this._version}set version(t){t!==this._version&&(this._version=t,this.isClean&&this.dirty())}v(t){return this.version=t,this}get useCommonSpace(){return this._useCommonSpace}set useCommonSpace(t){t!==this._useCommonSpace&&(this._useCommonSpace=t,this.isClean&&this.dirty())}duplicate(){const t=this.duplicateAsNew();return t.id=this.id,t.state=this.state,t}duplicateAsNew(){const t=new c;return t.name=this.name,t.version=this.version,t}validate(t=!1){let e=null;if(!this.isNew&&this.id<=0&&(e="Space id must be greater than zero if in non-new state."),t&&e!=null)throw Error(e);return e==null}toJSON(){return{state:this.state,id:this.id,name:this.name,version:this.version,useCommonSpace:this.useCommonSpace}}}class u extends p{constructor(t=""){super(),n(this,"_id",0),n(this,"_space",null),n(this,"_name",""),n(this,"_color",null),n(this,"_isPublic",!1),n(this,"links",[]),this._name=t}get id(){return this._id}set id(t){if(!this.isNew)throw Error("Cannot change the id of a Tag once it has already been created.");this._id=t}get space(){return this._space}set space(t){var e;if(t!==this._space){const s=(t==null?void 0:t.id)!=((e=this._space)==null?void 0:e.id);this._space=t,this.isClean&&s&&this.dirty()}}in(t){return this.space=t,this}get name(){return this._name}set name(t){t!==this._name&&(this._name=t,this.isClean&&this.dirty())}getFullName(){return`${this.space.name}.${this.name}`}getQualifiedName(t){var e;return t==((e=this.space)==null?void 0:e.id)?this.name:this.getFullName()}getUniqueName(t){return t.getTagsByName(this.name).length==1?this.name:this.getFullName()}get color(){return this._color}set color(t){t!==this._color&&(this._color=t,this.isClean&&this.dirty())}get isPublic(){return this._isPublic}set isPublic(t){if(!this.isNew&&this.isPublic&&!t)throw Error("Cannot change a tag from public to private once its already been saved.");t!==this._isPublic&&(this._isPublic=t,this.isClean&&this.dirty())}asPublic(){return this.isPublic=!0,this}asPrivate(){return this.isPublic=!1,this}linksTo(t){return!!this.links.find(e=>e==t)}duplicate(){const t=this.duplicateAsNew();return t.id=this.id,t.state=this.state,t}duplicateAsNew(){const t=new u(this.name);return t.color=this.color,t.space=this.space,t.isPublic=this.isPublic,t.links=this.links.slice(),t}validate(t=!1){let e=null;if(!this.isNew&&this.id<=0?e="Tag id must be greater than zero if in non-new state.":!this.name||!/^[a-zA-Z][a-zA-Z0-9 ]*[a-zA-Z0-9]?$/.test(this.name)?e="Tag name is invalid, must only contain letters, numbers, and spaces, starting with a letter":this.color&&!/^#?[A-z0-9]{6}$/.test(this.color)&&(e="Tag color is invalid, must be a 6 character hexadecimal."),t&&e!=null)throw Error(e);return e==null}toJSON(){var t;return{state:this.state,id:this.id,name:this.name,spaceId:(t=this.space)==null?void 0:t.id,color:this.color,isPublic:this.isPublic,links:this.links.map(e=>e.id)}}}class d extends p{constructor(t,e){super(),n(this,"_id",0),n(this,"_date",new Date),n(this,"_text",""),n(this,"_space",null),n(this,"_ownTag",null),n(this,"_tags",[]),t&&(this.text=t),this._ownTag=e}get id(){return this._id}set id(t){if(!this.isNew)throw Error("Cannot change the id of a Note once it has already been created.");this._id=t,this.ownTag&&this.ownTag.id!=t&&(this.ownTag.id=t)}get date(){return this._date}set date(t){t!==this._date&&(this._date=t,this.isClean&&this.dirty())}at(t){return this.date=t,this}get text(){return this._text}set text(t){t!==this._text&&(this._text=t,this.isClean&&this.dirty())}get space(){return this._space}set space(t){var e;if(t!==this._space){const s=(t==null?void 0:t.id)!=((e=this._space)==null?void 0:e.id);this._space=t,this.isClean&&s&&this.dirty(),this._setOwnTagSpace()}}in(t){return this.space=t,this}get ownTag(){return this._ownTag}setOwnTag(t){return this.ownTag==null?(this._ownTag=new u(t),this.ownTag.id=this.id):this.ownTag.isDeleted&&this.ownTag.dirty(),this.ownTag.name=t,this._setOwnTagSpace(),this}removeOwnTag(){return this.ownTag?(this.ownTag.isNew?this._ownTag=null:this.ownTag.delete(),this):this}_setOwnTagSpace(){this.ownTag&&this.space&&(this.ownTag.space=this.space)}get tags(){return this._tags.filter(t=>!t.isDeleted)}get tagsPendingDeletion(){return this._tags.filter(t=>t.isDeleted)}addTag(t){if(t.isDeleted)throw Error("Cannot add a tag marked as deleted to a note");if(t.isNew)throw Error("Cannot add a tag that hasn't yet been saved to a note");if(t.id==this.id)throw Error("Note cannot add its own tag as a linked tag");if(!t.isPublic&&t.space.id!=this.space.id)throw Error("Cannot add a private tag from another space");let e=this._tags.find(s=>s.tag.id==t.id);return e?(e.isDeleted&&e.dirty(),e):(e=new f(t),this._tags.push(e),e)}removeTag(t){const e=this._tags.find(s=>s.tag.id==t.id);return e?(e.isNew?this._tags=this._tags.filter(s=>s!==e):e.delete(),this):this}getTag(t,e=null){return t instanceof u?this.tags.find(s=>s.tag===t):(e&&e instanceof c&&(e=e.id),e!=null?this.tags.find(s=>s.tag.name==t&&s.tag.space.id==e):this.tags.find(s=>s.tag.name==t&&s.tag.space.id==this.space.id))}getTagData(t,e){const s=this.getTag(t);return s?new e(s):null}duplicate(){var t;const e=new d(this.text,(t=this.ownTag)==null?void 0:t.duplicate()).at(this.date).in(this.space);return e._tags=this.tags.map(s=>s.duplicate()),e.id=this.id,e.state=this.state,e}duplicateAsNew(){const t=new d(this.text).at(this.date).in(this.space);return t._tags=this.tags.map(e=>e.duplicateAsNew()),t}toJSON(){var t;return{state:this.state,id:this.id,date:this.date,text:this.text,spaceId:this.space.id,ownTag:(t=this.ownTag)==null?void 0:t.toJSON(),tags:this._tags.map(e=>e.toJSON())}}validate(t=!1){function e(s){if(t&&s!=null)throw Error(s);return s==null}if(this.space){if(!this.isNew&&this.id<=0)return e("Note id must be greater than zero if in non-new state.");if(this.ownTag&&this.ownTag.space.id!=this.space.id)return e("Note cannot belong to a different space than its own tag")}else return e("Note must belong to a space.");if(this.ownTag&&!this.ownTag.validate(t))return!1;for(const s of this._tags)if(!s.validate(t))return!1;return!0}}class D{constructor(t){if(n(this,"_fetcher"),n(this,"_spaces",null),n(this,"_tags",null),n(this,"_tagNames",null),!t)throw Error("NotuCache constructor must have a fetcher argument supplied.");this._fetcher=t}async populate(){await this._populateSpaces(),await this._populateTags(),this._populateTagNames()}async _populateSpaces(){const t=await this._fetcher.getSpacesData();this._spaces=new Map;for(const e of t){const s=this.spaceFromJSON(e);this._spaces.set(s.id,s)}}spaceFromJSON(t){const e=new c(t.name);return e.id=t.id,e.version=t.version,e.state=t.state,e}async _populateTags(){const t=await this._fetcher.getTagsData(),e=new Map;for(const s of t){const i=this.tagFromJSON(s);e.set(i.id,i),s.tag=i}this._tags=e;for(const s of t)this._populateTagLinks(s.tag,s)}_populateTagNames(){const t=new Map;for(const e of this._tags.values())t.has(e.name)?t.get(e.name).push(e):t.set(e.name,[e]);this._tagNames=t}tagFromJSON(t){const e=new u(t.name);return e.id=t.id,e.space=this._spaces.get(t.spaceId),e.color=t.color,e.isPublic=t.isPublic,e.state=t.state,this._tags&&this._populateTagLinks(e,t),e}_populateTagLinks(t,e){t.links=e.links.map(s=>this._tags.get(s))}noteFromJSON(t){const e=!t.ownTag||t.ownTag.state=="CLEAN"?this.getTag(t.id):this.tagFromJSON(t.ownTag),s=new d(t.text,e).at(new Date(t.date)).in(this.getSpace(t.spaceId));s.id=t.id,s.state=t.state;for(const i of t.tags){const r=s.addTag(this.getTag(i.tagId));r.data=i.data,r.state=i.state}return s}getSpaces(){return Array.from(this._spaces.values())}getSpace(t){return this._spaces.get(t)}getSpaceByName(t){for(const e of this._spaces.values())if(e.name==t)return e}spaceSaved(t){const e=this.spaceFromJSON(t);return e.state=="DELETED"?this._spaces.delete(e.id):this._spaces.set(e.id,e),e}getTags(t=null,e=!1){return t==null?Array.from(this._tags.values()):(t instanceof c&&(t=t.id),Array.from(this._tags.values()).filter(s=>s.isPublic&&e||s.space.id==t))}getTag(t){return this._tags.get(t)}getTagByName(t,e){e instanceof c&&(e=e.id);for(const s of this._tagNames.get(t)??[])if(s.name==t&&s.space.id==e)return s}getTagsByName(t){return this._tagNames.get(t)??[]}tagSaved(t){const e=this.tagFromJSON(t);return e.state=="DELETED"?this._tags.delete(e.id):this._tags.set(e.id,e),this._populateTagNames(),e}}class C{constructor(t,e,s){n(this,"text"),n(this,"start"),n(this,"processor"),this.text=t,this.start=e,this.processor=s}get end(){return this.start+this.text.length}}function P(a,t,e,s,i){const r=w(a.text,a,e,s),l=[];async function N(){a.text=l.map(o=>o.getText()).join(""),await t.saveNotes([a])}for(let o=0;o<r.length;o++){const _=r[o];if(!_.processor.componentShowsInlineInParagraph){l.push(_.processor.create(_,a,N));continue}for(let g=o;g<=r.length;g++){const T=r[g];if(!T||!T.processor.componentShowsInlineInParagraph){const v=r.slice(o,g).map(S=>S.processor.create(S,a,N));l.push(i(v)),o=g-1;break}}}return l}function w(a,t,e,s){let i=null;for(const l of e)if(i=l.identify(a),i)break;if(!i)return[new C(a,0,s)];const r=[];return i.start>0&&r.push(...w(a.substring(0,i.start),t,e,s)),r.push(i),i.end<a.length&&r.push(...w(a.substring(i.end),t,e,s)),r}function h(a,t=null){const e=new d(a);return e.id=t,e}function E(a,t=null){const e=new c(a);return e.id=t,e}function m(a,t=null){const e=new u(a);return e.id=t,e}class J{constructor(){this.log=[],this._space1=E("Space 1",1).clean()}getNotes(t,e){return this.log.push(`getNotes('${t}', ${e})`),Promise.resolve([h("Hello, this is a test",1).clean(),h("I like cherries",2).clean(),h("Curtain flappps",3).clean(),h(`Hello...
<Checklist>
Woop
Doop
</Checklist>`,4).clean()])}getRelatedNotes(t){return this.log.push(`getRelatedNotes('${t}')`),Promise.resolve([h("Related Note 1",1).clean(),h("Related Note 2",2).clean(),h("Boopity boopity",3).clean()])}getTags(t,e){return this.log.push(`getTags('${t}', ${e})`),[m("Tag 1",1).in(this._space1).clean(),m("Tag 2",2).in(this._space1).clean(),m("Tag 3",3).in(this._space1).clean()]}}class I{constructor(){this.spaces=[],this.tags=[]}getSpacesData(){return Promise.resolve(this.spaces.map(t=>t.toJSON()))}getTagsData(){return Promise.resolve(this.tags.map(t=>t.toJSON()))}}export{I as F,J as M,d as N,O as a,D as b,m as c,C as d,E as n,P as s};