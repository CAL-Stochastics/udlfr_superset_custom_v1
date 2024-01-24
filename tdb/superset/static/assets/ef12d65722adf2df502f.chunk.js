"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[232],{81788:(e,t,a)=>{a.d(t,{B8:()=>d,TZ:()=>s,mf:()=>l,u7:()=>i});var n=a(31069),r=a(68492);const o=(e,t,a)=>{let n=`api/v1/dashboard/${e}/filter_state`;return t&&(n=n.concat(`/${t}`)),a&&(n=n.concat(`?tab_id=${a}`)),n},s=(e,t,a,s)=>n.Z.put({endpoint:o(e,a,s),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(r.Z.error(e),null))),i=(e,t,a)=>n.Z.post({endpoint:o(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(r.Z.error(e),null))),d=(e,t)=>n.Z.get({endpoint:o(e,t)}).then((e=>{let{json:t}=e;return JSON.parse(t.value)})).catch((e=>(r.Z.error(e),null))),l=e=>n.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((e=>{let{json:t}=e;return t})).catch((e=>(r.Z.error(e),null)))},50232:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>O,DashboardPageIdContext:()=>L,default:()=>z});var n=a(67294),r=a(11965),o=a(16550),s=a(51995),i=a(93185),d=a(78161),l=a(28062),c=a(61988),p=a(78718),u=a.n(p),h=a(28216),m=a(14114),g=a(38703),b=a(67417),f=a(4305),v=a(50810),y=a(14505),x=a(35693),_=a(61337),$=a(27600),w=a(23525),E=a(52794),S=a(9467),T=a(81788),Z=a(14670),j=a.n(Z),k=a(43399);const U=e=>r.iv`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,C=e=>r.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,D=e=>r.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`,L=n.createContext("");(0,x.Z)();const N=n.lazy((()=>Promise.all([a.e(1216),a.e(9612),a.e(1247),a.e(8),a.e(981),a.e(9258),a.e(5640),a.e(3197),a.e(95),a.e(868),a.e(1880),a.e(8149),a.e(4717),a.e(452)]).then(a.bind(a,55455)))),R=document.title,F=()=>{const e=(0,_.rV)(_.dR.dashboard__explore_context,{});return Object.fromEntries(Object.entries(e).filter((e=>{let[,t]=e;return!t.isRedundant})))},I=(e,t)=>{const a=F();(0,_.LS)(_.dR.dashboard__explore_context,{...a,[e]:t})},O=e=>{let{idOrSlug:t}=e;const a=(0,s.Fg)(),p=(0,h.I0)(),x=(0,o.k6)(),Z=(()=>{const e=(0,n.useMemo)((()=>j().generate()),[]),t=(0,h.v9)((t=>{var a,n,r;let{dashboardInfo:o,dashboardState:s,nativeFilters:i,dataMask:d}=t;return{labelColors:(null==(a=o.metadata)?void 0:a.label_colors)||{},sharedLabelColors:(null==(n=o.metadata)?void 0:n.shared_label_colors)||{},colorScheme:null==s?void 0:s.colorScheme,chartConfiguration:(null==(r=o.metadata)?void 0:r.chart_configuration)||{},nativeFilters:Object.entries(i.filters).reduce(((e,t)=>{let[a,n]=t;return{...e,[a]:u()(n,["chartsInScope"])}}),{}),dataMask:d,dashboardId:o.id,filterBoxFilters:(0,k.De)(),dashboardPageId:e}}));return(0,n.useEffect)((()=>(I(e,t),()=>{I(e,{...t,isRedundant:!0})})),[t,e]),e})(),{addDangerToast:O}=(0,m.e1)(),{result:z,error:A}=(0,b.QU)(t),{result:J,error:P}=(0,b.Es)(t),{result:q,error:B,status:K}=(0,b.JL)(t),M=(0,n.useRef)(!1),Q=A||P,V=Boolean(z&&J),{dashboard_title:Y,css:H,metadata:X,id:G=0}=z||{},W=(0,i.cr)(i.TT.DASHBOARD_NATIVE_FILTERS_SET)&&(0,i.cr)(i.TT.DASHBOARD_NATIVE_FILTERS);if((0,n.useEffect)((()=>{const e=()=>{const e=F();(0,_.LS)(_.dR.dashboard__explore_context,{...e,[Z]:{...e[Z],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[Z]),(0,n.useEffect)((()=>{p((0,S.sL)(K))}),[p,K]),(0,n.useEffect)((()=>{G&&async function(){const e=(0,w.eY)($.KD.permalinkKey),t=(0,w.eY)($.KD.nativeFiltersKey),a=(0,w.eY)($.KD.nativeFilters);let n,r=t||{};if(e){const t=await(0,T.mf)(e);t&&({dataMask:r,activeTabs:n}=t.state)}else t&&(r=await(0,T.B8)(G,t));a&&(r=a),V&&(M.current||(M.current=!0,W&&p((0,E.pi)(G))),p((0,f.Y)({history:x,dashboard:z,charts:J,activeTabs:n,dataMask:r})))}()}),[V]),(0,n.useEffect)((()=>(Y&&(document.title=Y),()=>{document.title=R})),[Y]),(0,n.useEffect)((()=>"string"==typeof H?(0,y.Z)(H):()=>{}),[H]),(0,n.useEffect)((()=>{const e=(0,d.ZP)();return e.source=d.Ag.dashboard,()=>{l.getNamespace(null==X?void 0:X.color_namespace).resetColors(),e.clear()}}),[null==X?void 0:X.color_namespace]),(0,n.useEffect)((()=>{B?O((0,c.t)("Error loading chart datasources. Filters may not work correctly.")):p((0,v.Fy)(q))}),[O,q,B,p]),Q)throw Q;return V&&M.current?(0,r.tZ)(n.Fragment,null,(0,r.tZ)(r.xB,{styles:[C(a),U(a),D(a),"",""]}),(0,r.tZ)(L.Provider,{value:Z},(0,r.tZ)(N,null))):(0,r.tZ)(g.Z,null)},z=O},14505:(e,t,a)=>{function n(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],n=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in n?n.styleSheet.cssText=e:n.innerHTML=e,a.appendChild(n),function(){n.remove()}}a.d(t,{Z:()=>n})},67417:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>h.Kt,CN:()=>n.CN,tableEndpoints:()=>u.QD,hb:()=>d,QU:()=>l,Es:()=>c,JL:()=>p,L8:()=>g,Xx:()=>h.Xx,SJ:()=>u.SJ,uY:()=>u.uY,zA:()=>u.zA});var n=a(45673),r=a(42190),o=a(15926);function s(e){let{owners:t}=e;return t?t.map((e=>`${e.first_name} ${e.last_name}`)):null}const i=a.n(o)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function d(e){return(0,r.l6)((0,r.s_)(`/api/v1/chart/${e}?q=${i}`),s)}const l=e=>(0,r.l6)((0,r.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json)}))),c=e=>(0,r.s_)(`/api/v1/dashboard/${e}/charts`),p=e=>(0,r.s_)(`/api/v1/dashboard/${e}/datasets`);var u=a(23936),h=a(69279);const m=a(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:e=>{let{dbId:t,schema:a,sql:n,templateParams:r}=e,o=r;try{o=JSON.parse(r||"")}catch(e){o=void 0}const s={schema:a,sql:n,...o&&{template_params:o}};return{method:"post",endpoint:`/api/v1/database/${t}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(s),transformResponse:e=>{let{json:t}=e;return t.result}}}})})}),{useQueryValidationsQuery:g}=m}}]);
//# sourceMappingURL=ef12d65722adf2df502f.chunk.js.map