import{D as h}from"./DateTimePicker-D-ZOQjmU.js";import{r as f,R as a}from"./index-SSXOyoI7.js";/* empty css              */const S={title:"DateTimePicker",component:h,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{value:new Date,onChange:t=>console.log(t)}},o={render:()=>{const[t,s]=f.useState(new Date);function C(e){s(e),console.log(`Value changed from UI: ${e}`)}function w(){let e=new Date(t);e.setDate(e.getDate()+1),e.setHours(11,59),s(e),console.log(`Value changed from code: ${e}`)}return a.createElement("div",null,a.createElement("p",null,"Current value: ",t.toLocaleString()),a.createElement(h,{value:t,onChange:C}),a.createElement("button",{onClick:w},"Change Date To Tomorrow Almost Midnight"))}},r={args:{value:new Date,onChange:t=>console.log(t),showTime:!1}};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: new Date(),
    onChange: d => console.log(d)
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState(new Date());
    function onDateChange(value: Date) {
      setDate(value);
      console.log(\`Value changed from UI: \${value}\`);
    }
    function onButtonClick() {
      let newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      newDate.setHours(11, 59);
      setDate(newDate);
      console.log(\`Value changed from code: \${newDate}\`);
    }
    return <div>\r
            <p>Current value: {date.toLocaleString()}</p>\r
            <DateTimePicker value={date} onChange={onDateChange} />\r
            <button onClick={onButtonClick}>Change Date To Tomorrow Almost Midnight</button>\r
        </div>;
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,D,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: new Date(),
    onChange: d => console.log(d),
    showTime: false
  }
}`,...(p=(D=r.parameters)==null?void 0:D.docs)==null?void 0:p.source}}};const E=["Primary","UpdatesToReflectNonUiInitiatedValueChange","DateOnly"];export{r as DateOnly,n as Primary,o as UpdatesToReflectNonUiInitiatedValueChange,E as __namedExportsOrder,S as default};
