class r{constructor(){this.calls=[]}login(e,s){return this.calls.push({name:"login",username:e,password:s}),Promise.resolve({error:null,token:"123.456.789"})}getSpaces(){return this.calls.push({name:"getSpaces"}),Promise.resolve([])}saveSpace(e){return this.calls.push({name:"saveSpace",space:e}),Promise.resolve(e)}getAttrs(){return this.calls.push({name:"getAttrs"}),Promise.resolve([])}saveAttr(e){return this.calls.push({name:"saveAttr",attr:e}),Promise.resolve(e)}getNotes(e,s){return this.calls.push({name:"getNotes",query:e,spaceId:s}),Promise.resolve([])}getNoteCount(e,s){return this.calls.push({name:"getNoteCount",query:e,spaceId:s}),Promise.resolve(0)}saveNotes(e){return this.calls.push({name:"saveNotes",notes:e}),Promise.resolve(e)}customJob(e,s){return this.calls.push({name:"customJob",jobName:e,data:s}),Promise.resolve(null)}}export{r as M};
