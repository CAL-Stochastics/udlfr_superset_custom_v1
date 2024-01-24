"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{33726:(e,t,r)=>{r.d(t,{Y:()=>s});var a=r(61988);const s={name:(0,a.t)("SQL"),tabs:[{name:"Saved queries",label:(0,a.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,a.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},6189:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(73126),s=(r(67294),r(51995)),l=r(61988),n=r(33743),o=r(49889),i=r(53459),u=r(22489),c=r(120),d=r(42110),g=r(70707),h=r(10222),p=r(11965);d.Z.registerLanguage("sql",n.Z),d.Z.registerLanguage("markdown",i.Z),d.Z.registerLanguage("html",o.Z),d.Z.registerLanguage("json",u.Z);const m=s.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  }
`;function b(e){let{addDangerToast:t,addSuccessToast:r,children:s,...n}=e;return(0,p.tZ)(m,null,(0,p.tZ)(g.Z.Copy,{tabIndex:0,role:"button",onClick:e=>{var a;e.preventDefault(),e.currentTarget.blur(),a=s,(0,h.Z)((()=>Promise.resolve(a))).then((()=>{r&&r((0,l.t)("SQL Copied!"))})).catch((()=>{t&&t((0,l.t)("Sorry, your browser does not support copying."))}))}}),(0,p.tZ)(d.Z,(0,a.Z)({style:c.Z},n),s))}},86185:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294);function s(e){let{queries:t,fetchData:r,currentQueryId:s}=e;const l=t.findIndex((e=>e.id===s)),[n,o]=(0,a.useState)(l),[i,u]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);function g(){u(0===n),d(n===t.length-1)}function h(e){const a=n+(e?-1:1);a>=0&&a<t.length&&(r(t[a].id),o(a),g())}return(0,a.useEffect)((()=>{g()})),{handleKeyPress:function(e){n>=0&&n<t.length&&("ArrowDown"===e.key||"k"===e.key?(e.preventDefault(),h(!1)):"ArrowUp"!==e.key&&"j"!==e.key||(e.preventDefault(),h(!0)))},handleDataChange:h,disablePrevious:i,disableNext:c}}},36444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var a=r(67294),s=r(16550),l=r(73727),n=r(51995),o=r(61988),i=r(31069),u=r(43716),c=r(30381),d=r.n(c),g=r(40768),h=r(14114),p=r(34858),m=r(86074),b=r(99299),y=r(33726),Z=r(93139),v=r(58593),f=r(42110),x=r(33743),q=r(120),S=r(27600),k=r(12),w=r(70707),C=r(74069),$=r(94184),T=r.n($),D=r(35932),L=r(6189),z=r(86185),H=r(11965);const _=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,U=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  padding: 4px 0 24px 0;
`,I=n.iK.div`
  margin: 0 0 ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px 0;
`,K=n.iK.div`
  display: inline;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px
    ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  margin-right: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.secondary.dark1}};

  &.active,
  &:focus,
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light4}};
    border-bottom: none;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &:hover:not(.active) {
    background: ${e=>{let{theme:t}=e;return t.colors.secondary.light5}};
  }
`,Q=(0,n.iK)(C.default)`
  .ant-modal-body {
    padding: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
  }

  pre {
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.xs}}px;
    font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
    line-height: ${e=>{let{theme:t}=e;return t.typography.sizes.l}}px;
    height: 375px;
    border: none;
  }
`,A=(0,h.ZP)((function(e){let{onHide:t,openInSqlLab:r,queries:s,query:l,fetchData:n,show:i,addDangerToast:u,addSuccessToast:c}=e;const{handleKeyPress:d,handleDataChange:g,disablePrevious:h,disableNext:p}=(0,z.Z)({queries:s,currentQueryId:l.id,fetchData:n}),[m,b]=(0,a.useState)("user"),{id:y,sql:Z,executed_sql:v}=l;return(0,H.tZ)("div",{role:"none",onKeyUp:d},(0,H.tZ)(Q,{onHide:t,show:i,title:(0,o.t)("Query preview"),footer:(0,H.tZ)(a.Fragment,null,(0,H.tZ)(D.Z,{key:"previous-query",disabled:h,onClick:()=>g(!0)},(0,o.t)("Previous")),(0,H.tZ)(D.Z,{key:"next-query",disabled:p,onClick:()=>g(!1)},(0,o.t)("Next")),(0,H.tZ)(D.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>r(y)},(0,o.t)("Open in SQL Lab")))},(0,H.tZ)(_,null,(0,o.t)("Tab name")),(0,H.tZ)(U,null,l.tab_name),(0,H.tZ)(I,null,(0,H.tZ)(K,{role:"button",className:T()({active:"user"===m}),onClick:()=>b("user")},(0,o.t)("User query")),(0,H.tZ)(K,{role:"button",className:T()({active:"executed"===m}),onClick:()=>b("executed")},(0,o.t)("Executed query"))),(0,H.tZ)(L.Z,{addDangerToast:u,addSuccessToast:c,language:"sql"},("user"===m?Z:v)||"")))}));var J=r(72570);const N=(0,n.iK)(Z.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;f.Z.registerLanguage("sql",x.Z);const E=(0,n.iK)(f.Z)`
  height: ${e=>{let{theme:t}=e;return 26*t.gridUnit}}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=n.iK.div`
  .count {
    margin-left: 5px;
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
    text-decoration: underline;
    cursor: pointer;
  }
`,F=n.iK.div`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark2}};
`,O=(0,h.ZP)((function(e){let{addDangerToast:t}=e;const{state:{loading:r,resourceCount:c,resourceCollection:h},fetchData:f}=(0,p.Yi)("query",(0,o.t)("Query history"),t,!1),[x,C]=(0,a.useState)(),$=(0,n.Fg)(),T=(0,s.k6)(),D=(0,a.useCallback)((e=>{i.Z.get({endpoint:`/api/v1/query/${e}`}).then((e=>{let{json:t={}}=e;C({...t.result})}),(0,g.v$)((e=>t((0,o.t)("There was an issue previewing the selected query. %s",e)))))}),[t]),L={activeChild:"Query history",...y.Y},z=[{id:k.J.start_time,desc:!0}],_=(0,a.useMemo)((()=>[{Cell:e=>{let{row:{original:{status:t}}}=e;const r={name:null,label:""};return t===u.Tb.SUCCESS?(r.name=(0,H.tZ)(w.Z.Check,{iconColor:$.colors.success.base}),r.label=(0,o.t)("Success")):t===u.Tb.FAILED||t===u.Tb.STOPPED?(r.name=(0,H.tZ)(w.Z.XSmall,{iconColor:t===u.Tb.FAILED?$.colors.error.base:$.colors.grayscale.base}),r.label=(0,o.t)("Failed")):t===u.Tb.RUNNING?(r.name=(0,H.tZ)(w.Z.Running,{iconColor:$.colors.primary.base}),r.label=(0,o.t)("Running")):t===u.Tb.TIMED_OUT?(r.name=(0,H.tZ)(w.Z.Offline,{iconColor:$.colors.grayscale.light1}),r.label=(0,o.t)("Offline")):t!==u.Tb.SCHEDULED&&t!==u.Tb.PENDING||(r.name=(0,H.tZ)(w.Z.Queued,{iconColor:$.colors.grayscale.base}),r.label=(0,o.t)("Scheduled")),(0,H.tZ)(v.u,{title:r.label,placement:"bottom"},(0,H.tZ)("span",null,r.name))},accessor:k.J.status,size:"xs",disableSortBy:!0},{accessor:k.J.start_time,Header:(0,o.t)("Time"),size:"xl",Cell:e=>{let{row:{original:{start_time:t,end_time:r}}}=e;const s=d().utc(t).local().format(S.v2).split(" "),l=(0,H.tZ)(a.Fragment,null,s[0]," ",(0,H.tZ)("br",null),s[1]);return r?(0,H.tZ)(v.u,{title:(0,o.t)("Duration: %s",d()(d().utc(r-t)).format(S.n2)),placement:"bottom"},(0,H.tZ)("span",null,l)):l}},{accessor:k.J.tab_name,Header:(0,o.t)("Tab name"),size:"xl"},{accessor:k.J.database_name,Header:(0,o.t)("Database"),size:"xl"},{accessor:k.J.database,hidden:!0},{accessor:k.J.schema,Header:(0,o.t)("Schema"),size:"xl"},{Cell:e=>{let{row:{original:{sql_tables:t=[]}}}=e;const r=t.map((e=>e.table)),s=r.length>0?r.shift():"";return r.length?(0,H.tZ)(P,null,(0,H.tZ)("span",null,s),(0,H.tZ)(b.Z,{placement:"right",title:(0,o.t)("TABLES"),trigger:"click",content:(0,H.tZ)(a.Fragment,null,r.map((e=>(0,H.tZ)(F,{key:e},e))))},(0,H.tZ)("span",{className:"count"},"(+",r.length,")"))):s},accessor:k.J.sql_tables,Header:(0,o.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:k.J.user_first_name,Header:(0,o.t)("User"),size:"xl",Cell:e=>{let{row:{original:{user:t}}}=e;return t?`${t.first_name} ${t.last_name}`:""}},{accessor:k.J.user,hidden:!0},{accessor:k.J.rows,Header:(0,o.t)("Rows"),size:"md"},{accessor:k.J.sql,Header:(0,o.t)("SQL"),Cell:e=>{let{row:{original:t,id:r}}=e;return(0,H.tZ)("div",{tabIndex:0,role:"button",onClick:()=>C(t)},(0,H.tZ)(E,{language:"sql",style:q.Z},(0,g.IB)(t.sql,4)))}},{Header:(0,o.t)("Actions"),id:"actions",disableSortBy:!0,Cell:e=>{let{row:{original:{id:t}}}=e;return(0,H.tZ)(v.u,{title:(0,o.t)("Open query in SQL Lab"),placement:"bottom"},(0,H.tZ)(l.rU,{to:`/sqllab?queryId=${t}`},(0,H.tZ)(w.Z.Full,{iconColor:$.colors.grayscale.base})))}}]),[]),U=(0,a.useMemo)((()=>[{Header:(0,o.t)("Database"),key:"database",id:"database",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:(0,o.t)("All"),fetchSelects:(0,g.tm)("query","database",(0,g.v$)((e=>t((0,o.t)("An error occurred while fetching database values: %s",e))))),paginate:!0},{Header:(0,o.t)("State"),key:"state",id:"status",input:"select",operator:Z.p.equals,unfilteredLabel:"All",fetchSelects:(0,g.wk)("query","status",(0,g.v$)((e=>t((0,o.t)("An error occurred while fetching schema values: %s",e))))),paginate:!0},{Header:(0,o.t)("User"),key:"user",id:"user",input:"select",operator:Z.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("query","user",(0,g.v$)((e=>t((0,o.t)("An error occurred while fetching user values: %s",e))))),paginate:!0},{Header:(0,o.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:Z.p.between},{Header:(0,o.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:Z.p.contains}]),[t]);return(0,H.tZ)(a.Fragment,null,(0,H.tZ)(m.Z,L),x&&(0,H.tZ)(A,{onHide:()=>C(void 0),query:x,queries:h,fetchData:D,openInSqlLab:e=>T.push(`/sqllab?queryId=${e}`),show:!0}),(0,H.tZ)(N,{className:"query-history-list-view",columns:_,count:c,data:h,fetchData:f,filters:U,initialSort:z,loading:r,pageSize:25,highlightRowId:null==x?void 0:x.id,refreshData:()=>{},addDangerToast:t,addSuccessToast:J.ws}))}))}}]);
//# sourceMappingURL=2941bd0fc1b412b65f14.chunk.js.map