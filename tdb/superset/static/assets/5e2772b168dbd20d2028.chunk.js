"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5336],{94222:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(51995),s=r(61988),o=(r(67294),r(58593)),l=r(70707),n=r(90335),c=r(11965);function i(e,t,r){switch(e){case n.Z.Working:return r.colors.primary.base;case n.Z.Error:return r.colors.error.base;case n.Z.Success:return t?r.colors.success.base:r.colors.alert.base;case n.Z.Noop:return r.colors.success.base;case n.Z.Grace:return r.colors.alert.base;default:return r.colors.grayscale.base}}function u(e){let{state:t,isReportEnabled:r=!1}=e;const u=(0,a.Fg)(),d={icon:l.Z.Check,label:"",status:""};switch(t){case n.Z.Success:d.icon=r?l.Z.Check:l.Z.AlertSolidSmall,d.label=r?(0,s.t)("Report sent"):(0,s.t)("Alert triggered, notification sent"),d.status=n.Z.Success;break;case n.Z.Working:d.icon=l.Z.Running,d.label=r?(0,s.t)("Report sending"):(0,s.t)("Alert running"),d.status=n.Z.Working;break;case n.Z.Error:d.icon=l.Z.XSmall,d.label=r?(0,s.t)("Report failed"):(0,s.t)("Alert failed"),d.status=n.Z.Error;break;case n.Z.Noop:d.icon=l.Z.Check,d.label=(0,s.t)("Nothing triggered"),d.status=n.Z.Noop;break;case n.Z.Grace:d.icon=l.Z.AlertSolidSmall,d.label=(0,s.t)("Alert Triggered, In Grace Period"),d.status=n.Z.Grace;break;default:d.icon=l.Z.Check,d.label=(0,s.t)("Nothing triggered"),d.status=n.Z.Noop}const g=d.icon;return(0,c.tZ)(o.u,{title:d.label,placement:"bottomLeft"},(0,c.tZ)(g,{iconColor:i(d.status,r,u)}))}},90335:(e,t,r)=>{var a,s;r.d(t,{Z:()=>a,u:()=>s}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(a||(a={})),function(e){e.Email="Email",e.Slack="Slack"}(s||(s={}))},58883:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(51995),s=r(11965),o=r(61988),l=r(30381),n=r.n(l),c=r(67294),i=r(16550),u=r(73727),d=r(93139),g=r(58593),Z=r(86074),p=r(14114),m=r(44814),b=r(94222),h=r(34858);const f=a.iK.div`
  ${e=>{let{theme:t}=e;return s.iv`
    display: flex;
    flex-direction: row;

    a,
    Link {
      margin-left: ${4*t.gridUnit}px;
      font-size: ${t.typography.sizes.s};
      font-weight: ${t.typography.weights.normal};
      text-decoration: underline;
    }
  `}}
`,k=(0,p.ZP)((function(e){let{addDangerToast:t,addSuccessToast:r,isReportEnabled:a}=e;const{alertId:l}=(0,i.UO)(),{state:{loading:p,resourceCount:k,resourceCollection:S},fetchData:w}=(0,h.Yi)(`report/${l}/log`,(0,o.t)("log"),t,!1),{state:{loading:C,resource:D},fetchResource:E}=(0,h.LE)("report",(0,o.t)("reports"),t);(0,c.useEffect)((()=>{null===l||C||E(l)}),[l]);const y=(0,c.useMemo)((()=>[{Cell:e=>{let{row:{original:{state:t}}}=e;return(0,s.tZ)(b.Z,{state:t,isReportEnabled:a})},accessor:"state",Header:(0,o.t)("State"),size:"xs",disableSortBy:!0},{Cell:e=>{let{row:{original:{uuid:t}}}=e;return t?t.slice(0,6):"none"},accessor:"uuid",Header:(0,o.t)("Execution ID"),size:"xs",disableSortBy:!0},{Cell:e=>{let{row:{original:{scheduled_dttm:t}}}=e;return n()(new Date(t)).format("YYYY-MM-DD hh:mm:ss a")},accessor:"scheduled_dttm",Header:(0,o.t)("Scheduled at (UTC)")},{Cell:e=>{let{row:{original:{start_dttm:t}}}=e;return n()(new Date(t)).format("YYYY-MM-DD hh:mm:ss a")},Header:(0,o.t)("Start at (UTC)"),accessor:"start_dttm"},{Cell:e=>{let{row:{original:{start_dttm:t,end_dttm:r}}}=e;return(0,m.zQ)(new Date(t).getTime(),new Date(r).getTime())},Header:(0,o.t)("Duration"),disableSortBy:!0},{accessor:"value",Header:(0,o.t)("Value")},{accessor:"error_message",Header:(0,o.t)("Error message"),Cell:e=>{let{row:{original:{error_message:t=""}}}=e;return(0,s.tZ)(g.u,{title:t,placement:"topLeft"},(0,s.tZ)("span",null,t))}}]),[a]),T=`/${a?"report":"alert"}/list/`,R=(0,o.t)("Alert"),N=(0,o.t)("Report");return(0,s.tZ)(c.Fragment,null,(0,s.tZ)(Z.Z,{name:(0,s.tZ)(f,null,(0,s.tZ)("span",null,D?"Alert"===D.type?`${R}:`:"Report"===D.type?`${N}:`:null:null," ",null==D?void 0:D.name),(0,s.tZ)("span",null,(0,s.tZ)(u.rU,{to:T},(0,o.t)("Back to all"))))}),(0,s.tZ)(d.Z,{className:"execution-log-list-view",columns:y,count:k,data:S,fetchData:w,initialSort:[{id:"start_dttm",desc:!0}],loading:p,addDangerToast:t,addSuccessToast:r,refreshData:()=>{},pageSize:25}))}))}}]);
//# sourceMappingURL=5e2772b168dbd20d2028.chunk.js.map