"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8464],{8464:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var a=l(73126),n=l(55786),u=l(10581),s=l(61988),o=l(67294),r=l(4715),i=l(74448),h=l(11965);function c(e){var t;const{data:l,formData:c,height:d,width:v,setDataMask:g,setHoveredFilter:m,unsetHoveredFilter:p,setFocusedFilter:f,unsetFocusedFilter:b,setFilterActive:w,filterState:F,inputRef:S}=e,{defaultValue:Z,multiSelect:k}=c,[C,M]=(0,o.useState)(null!=Z?Z:[]),x=e=>{const t=(0,n.Z)(e);M(t);const l={};t.length&&(l.interactive_groupby=t),g({filterState:{value:t.length?t:null},extraFormData:l})};(0,o.useEffect)((()=>{x(F.value)}),[JSON.stringify(F.value),k]),(0,o.useEffect)((()=>{x(null!=Z?Z:null)}),[JSON.stringify(Z),k]);const y=(0,n.Z)(c.groupby).map(u.Z),D=null!=(t=y[0])&&t.length?y[0]:null,_=D?l.filter((e=>D.includes(e.column_name))):l,A=l?_:[],E=0===A.length?(0,s.t)("No columns"):(0,s.tn)("%s option","%s options",A.length,A.length),K={};F.validateMessage&&(K.extra=(0,h.tZ)(i.Am,{status:F.validateStatus},F.validateMessage));const N=A.map((e=>{const{column_name:t,verbose_name:l}=e;return{label:null!=l?l:t,value:t}}));return(0,h.tZ)(i.un,{height:d,width:v},(0,h.tZ)(i.jp,(0,a.Z)({validateStatus:F.validateStatus},K),(0,h.tZ)(r.Ph,{allowClear:!0,value:C,placeholder:E,mode:k?"multiple":void 0,onChange:x,onBlur:b,onFocus:f,onMouseEnter:m,onMouseLeave:p,ref:S,options:N,onDropdownVisibleChange:w})))}},74448:(e,t,l)=>{l.d(t,{Am:()=>o,jp:()=>s,un:()=>u});var a=l(51995),n=l(4591);const u=a.iK.div`
  min-height: ${e=>{let{height:t}=e;return t}}px;
  width: ${e=>{let{width:t}=e;return t}}px;
`,s=(0,a.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,o=a.iK.div`
  color: ${e=>{var t;let{theme:l,status:a="error"}=e;return null==(t=l.colors[a])?void 0:t.base}};
`}}]);
//# sourceMappingURL=71f3b6e2e39a7c8416fc.chunk.js.map