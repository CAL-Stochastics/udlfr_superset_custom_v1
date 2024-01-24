"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4717],{2275:(e,t,r)=>{r.d(t,{$6:()=>d,$X:()=>u,DZ:()=>p,Er:()=>h,Rw:()=>c,cP:()=>o,ck:()=>b});var i=r(45697),l=r.n(i),a=r(81255),n=r(713),s=r(79271);const o=l().shape({id:l().string.isRequired,type:l().oneOf(Object.values(a.ZP)).isRequired,parents:l().arrayOf(l().string),children:l().arrayOf(l().string),meta:l().shape({width:l().number,height:l().number,headerSize:l().oneOf(s.Z.map((e=>e.value))),background:l().oneOf(n.Z.map((e=>e.value))),chartId:l().number})}),d=l().shape({id:l().number.isRequired,chartAlert:l().string,chartStatus:l().string,chartUpdateEndTime:l().number,chartUpdateStartTime:l().number,latestQueryFormData:l().object,queryController:l().shape({abort:l().func}),queriesResponse:l().arrayOf(l().object),triggerQuery:l().bool,lastRendered:l().number}),c=l().shape({slice_id:l().number.isRequired,slice_url:l().string.isRequired,slice_name:l().string.isRequired,datasource:l().string,datasource_name:l().string,datasource_link:l().string,changed_on:l().number.isRequired,modified:l().string,viz_type:l().string.isRequired,description:l().string,description_markeddown:l().string,owners:l().arrayOf(l().string)}),h=l().shape({chartId:l().number.isRequired,componentId:l().string.isRequired,filterName:l().string.isRequired,datasourceId:l().string.isRequired,directPathToFilter:l().arrayOf(l().string).isRequired,isDateFilter:l().bool.isRequired,isInstantFilter:l().bool.isRequired,columns:l().object,labels:l().object,scopes:l().object}),p=l().shape({sliceIds:l().arrayOf(l().number),expandedSlices:l().object,editMode:l().bool,isPublished:l().bool,colorNamespace:l().string,colorScheme:l().string,updatedColorScheme:l().bool,hasUnsavedChanges:l().bool}),u=l().shape({id:l().number,metadata:l().object,slug:l().string,dash_edit_perm:l().bool,dash_save_perm:l().bool,common:l().object,userId:l().string}),m=l().shape({value:l().oneOfType([l().number,l().string]).isRequired,label:l().string.isRequired}),g={value:l().oneOfType([l().number,l().string]).isRequired,label:l().string.isRequired,children:l().arrayOf(l().oneOfType([l().shape((f=()=>g,()=>f().apply(void 0,arguments))),m]))};var f;const b=l().oneOfType([l().shape(g),m])},79789:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(67294),l=r(51995),a=r(61988),n=r(70707),s=r(58593),o=r(11965);const d=function(e){let{certifiedBy:t,details:r,size:d="l"}=e;const c=(0,l.Fg)();return(0,o.tZ)(s.u,{id:"certified-details-tooltip",title:(0,o.tZ)(i.Fragment,null,t&&(0,o.tZ)("div",null,(0,o.tZ)("strong",null,(0,a.t)("Certified by %s",t))),(0,o.tZ)("div",null,r))},(0,o.tZ)(n.Z.Certified,{iconColor:c.colors.primary.base,iconSize:d}))}},17198:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(51995),l=r(61988),a=r(67294),n=r(9875),s=r(74069),o=r(49238),d=r(11965);const c=i.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
    text-transform: uppercase;
  }
`,h=i.iK.div`
  line-height: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  padding-top: 16px;
`;function p(e){let{description:t,onConfirm:r,onHide:i,open:p,title:u}=e;const[m,g]=(0,a.useState)(!0),[f,b]=(0,a.useState)(""),v=()=>{b(""),r()};return(0,d.tZ)(s.default,{disablePrimaryButton:m,onHide:()=>{b(""),i()},onHandledPrimaryAction:v,primaryButtonName:(0,l.t)("delete"),primaryButtonType:"danger",show:p,title:u},(0,d.tZ)(h,null,t),(0,d.tZ)(c,null,(0,d.tZ)(o.lX,{htmlFor:"delete"},(0,l.t)('Type "%s" to confirm',(0,l.t)("DELETE"))),(0,d.tZ)(n.II,{type:"text",id:"delete",autoComplete:"off",value:f,onChange:e=>{var t;const r=null!=(t=e.target.value)?t:"";g(r.toUpperCase()!==(0,l.t)("DELETE")),b(r)},onPressEnter:()=>{m||v()}})))}},36674:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(67294),l=r(51995),a=r(11965),n=r(61988),s=r(58593),o=r(70707);const d=l.iK.a`
  ${e=>{let{theme:t}=e;return a.iv`
    font-size: ${t.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*t.gridUnit}px;
  `}};
`,c=e=>{let{itemId:t,isStarred:r,showTooltip:l,saveFaveStar:c,fetchFaveStar:h}=e;(0,i.useEffect)((()=>{null==h||h(t)}),[h,t]);const p=(0,i.useCallback)((e=>{e.preventDefault(),c(t,!!r)}),[r,t,c]),u=(0,a.tZ)(d,{href:"#",onClick:p,className:"fave-unfave-icon",role:"button"},r?(0,a.tZ)(o.Z.FavoriteSelected,null):(0,a.tZ)(o.Z.FavoriteUnselected,null));return l?(0,a.tZ)(s.u,{id:"fave-unfave-tooltip",title:(0,n.t)("Click to favorite/unfavorite")},u):u}},4144:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(73126),l=r(67294),a=r(51995),n=r(68492),s=r(11965);const o=a.iK.div`
  background-image: url(${e=>{let{src:t}=e;return t}});
  background-size: cover;
  background-position: center ${e=>{let{position:t}=e;return t}};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function d(e){let{src:t,fallback:r,isLoading:a,position:d,...c}=e;const[h,p]=(0,l.useState)(r);return(0,l.useEffect)((()=>(t&&fetch(t).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);p(t)}})).catch((e=>{n.Z.error(e),p(r)})),()=>{p(r)})),[t,r]),(0,s.tZ)(o,(0,i.Z)({src:a?r:h},c,{position:d}))}},60718:(e,t,r)=>{r.d(t,{m:()=>p});var i=r(31069),l=r(61988),a=r(15926),n=r.n(a),s=r(65108),o=r(98286);const d=new Map,c=(0,s.g)(i.Z.get,d,(e=>{let{endpoint:t}=e;return t||""})),h=e=>({value:e.name,label:e.name,key:e.name}),p=async(e,t,r)=>{const i="name",a=n().encode({filters:[{col:i,opr:"ct",value:e}],page:t,page_size:r,order_column:i,order_direction:"asc"});return c({endpoint:`/api/v1/tag/?q=${a}`}).then((e=>({data:e.json.result.filter((e=>1===e.type)).map(h),totalCount:e.json.count}))).catch((async e=>{const t=(e=>{let{error:t,message:r}=e,i=r||t||(0,l.t)("An error has occurred");return"Forbidden"===r&&(i=(0,l.t)("You do not have permission to read tags")),i})(await(0,o.O$)(e));throw new Error(t)}))}},20818:(e,t,r)=>{r.d(t,{Z:()=>A});var i=r(57557),l=r.n(i),a=r(67294),n=r(9875),s=r(49238),o=r(51127),d=r.n(o),c=r(35932),h=r(4715),p=r(15926),u=r.n(p),m=r(51995),g=r(61988),f=r(81545),b=r(31069),v=r(55786),y=r(78161),F=r(28062),x=r(93185),Z=r(74069),C=r(94670),S=r(45697),k=r.n(S),$=r(76787),w=r(11965);const T={onChange:k().func,labelMargin:k().number,colorScheme:k().string,hasCustomLabelColors:k().bool};class N extends a.PureComponent{constructor(e){super(e),this.state={hovered:!1},this.categoricalSchemeRegistry=(0,f.Z)(),this.choices=this.categoricalSchemeRegistry.keys().map((e=>[e,e])),this.schemes=this.categoricalSchemeRegistry.getMap()}setHover(e){this.setState({hovered:e})}render(){const{colorScheme:e,labelMargin:t=0,hasCustomLabelColors:r}=this.props;return(0,w.tZ)($.Z,{description:(0,g.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),labelMargin:t,name:"color_scheme",onChange:this.props.onChange,value:e,choices:this.choices,clearable:!0,schemes:this.schemes,hovered:this.state.hovered,hasCustomLabelColors:r})}}N.propTypes=T,N.defaultProps={hasCustomLabelColors:!1,colorScheme:void 0,onChange:()=>{}};const I=N;var _=r(87999),O=r(98286),j=r(14114),E=r(48273),U=r(60718);const R=(0,m.iK)(s.xJ)`
  margin-bottom: 0;
`,q=(0,m.iK)(C.Ad)`
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondary.light2}};
`;var M={name:"1blj7km",styles:"margin-top:1em"};const A=(0,j.ZP)((e=>{let{addSuccessToast:t,addDangerToast:r,colorScheme:i,dashboardId:o,dashboardInfo:p,dashboardTitle:m,onHide:S=(()=>{}),onlyApply:k=!1,onSubmit:$=(()=>{}),show:T=!1}=e;const[N]=h.qz.useForm(),[j,A]=(0,a.useState)(!1),[D,L]=(0,a.useState)(!1),[X,z]=(0,a.useState)(i),[J,B]=(0,a.useState)(""),[K,P]=(0,a.useState)(),[H,G]=(0,a.useState)([]),[Y,W]=(0,a.useState)([]),V=k?(0,g.t)("Apply"):(0,g.t)("Save"),[Q,ee]=(0,a.useState)([]),te=(0,f.Z)(),re=(0,a.useMemo)((()=>Q.map((e=>({value:e.name,label:e.name,key:e.name})))),[Q.length]),ie=async e=>{const{error:t,statusText:r,message:i}=await(0,O.O$)(e);let l=t||r||(0,g.t)("An error has occurred");"object"==typeof i&&"json_metadata"in i?l=i.json_metadata:"string"==typeof i&&(l=i,"Forbidden"===i&&(l=(0,g.t)("You do not have permission to edit this dashboard"))),Z.default.error({title:(0,g.t)("Error"),content:l,okButtonProps:{danger:!0,className:"btn-danger"}})},le=(0,a.useCallback)((function(e,t,r,i){void 0===e&&(e="owners"),void 0===t&&(t="");const l=u().encode({filter:t,page:r,page_size:i});return b.Z.get({endpoint:`/api/v1/dashboard/related/${e}?q=${l}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),ae=(0,a.useCallback)((e=>{const{id:t,dashboard_title:r,slug:i,certified_by:a,certification_details:n,owners:s,roles:o,metadata:c,is_managed_externally:h}=e,p={id:t,title:r,slug:i||"",certifiedBy:a||"",certificationDetails:n||"",isManagedExternally:h||!1};N.setFieldsValue(p),P(p),G(s),W(o),z(c.color_scheme);const u=l()(c,["positions","shared_label_colors","color_scheme_domain"]);B(u?d()(u):"")}),[N]),ne=(0,a.useCallback)((()=>{A(!0),b.Z.get({endpoint:`/api/v1/dashboard/${o}`}).then((e=>{var t;const r=e.json.result,i=null!=(t=r.json_metadata)&&t.length?JSON.parse(r.json_metadata):{};ae({...r,metadata:i}),A(!1)}),ie)}),[o,ae]),se=()=>{try{return null!=J&&J.length?JSON.parse(J):{}}catch(e){return{}}},oe=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,full_name:e.label})));G(t)},de=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,name:e.label})));W(t)},ce=()=>(H||[]).map((e=>({value:e.id,label:e.full_name||`${e.first_name} ${e.last_name}`}))),he=function(e,t){void 0===e&&(e="");let{updateMetadata:r=!0}=void 0===t?{}:t;const i=te.keys(),l=se();if(e&&!i.includes(e))throw Z.default.error({title:(0,g.t)("Error"),content:(0,g.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),new Error("A valid color scheme is required");r&&(l.color_scheme=e,l.label_colors=l.label_colors||{},B(d()(l))),z(e)};return(0,a.useEffect)((()=>{T&&(p?ae(p):ne()),C.Ad.preload()}),[p,ne,ae,T]),(0,a.useEffect)((()=>{m&&K&&K.title!==m&&N.setFieldsValue({...K,title:m})}),[K,m,N]),(0,a.useEffect)((()=>{if((0,x.cr)(x.TT.TAGGING_SYSTEM))try{(0,E.$3)({objectType:E.g.DASHBOARD,objectId:o,includeTypes:!1},(e=>ee(e)),(e=>{r(`Error fetching tags: ${e.text}`)}))}catch(e){ie(e)}}),[o]),(0,w.tZ)(Z.default,{show:T,onHide:S,title:(0,g.t)("Dashboard properties"),footer:(0,w.tZ)(a.Fragment,null,(0,w.tZ)(c.Z,{htmlType:"button",buttonSize:"small",onClick:S,cta:!0},(0,g.t)("Cancel")),(0,w.tZ)(c.Z,{onClick:N.submit,buttonSize:"small",buttonStyle:"primary",className:"m-r-5",cta:!0,disabled:null==K?void 0:K.isManagedExternally,tooltip:null!=K&&K.isManagedExternally?(0,g.t)("This dashboard is managed externally, and can't be edited in Superset"):""},V)),responsive:!0},(0,w.tZ)(h.qz,{form:N,onFinish:()=>{var e,i,l,a;const{title:n,slug:s,certifiedBy:c,certificationDetails:h}=N.getFieldsValue();let p,u=X,m="",f=J;try{if(!f.startsWith("{")||!f.endsWith("}"))throw new Error;p=JSON.parse(f)}catch(e){return void r((0,g.t)("JSON metadata is invalid!"))}u=(null==(e=p)?void 0:e.color_scheme)||X,m=null==(i=p)?void 0:i.color_namespace,null!=(l=p)&&l.shared_label_colors&&delete p.shared_label_colors,null!=(a=p)&&a.color_scheme_domain&&delete p.color_scheme_domain;const v=(0,y.ZP)();var Z;if(F.getNamespace(m).resetColors(),u?(v.updateColorMap(m,u),p.shared_label_colors=Object.fromEntries(v.getColorMap()),p.color_scheme_domain=(null==(Z=te.get(X))?void 0:Z.colors)||[]):(v.reset(),p.shared_label_colors={},p.color_scheme_domain=[]),f=d()(p),he(u,{updateMetadata:!1}),(0,x.cr)(x.TT.TAGGING_SYSTEM))try{(0,E.$3)({objectType:E.g.DASHBOARD,objectId:o,includeTypes:!1},(e=>{return t=e,(r=Q).map((e=>{t.some((t=>t.name===e.name))||(0,E._U)({objectType:E.g.DASHBOARD,objectId:o,includeTypes:!1},e.name,(()=>{}),(()=>{}))})),void t.map((e=>{r.some((t=>t.name===e.name))||(0,E.OY)({objectType:E.g.DASHBOARD,objectId:o},e,(()=>{}),(()=>{}))}));var t,r}),(e=>{ie(e)}))}catch(e){ie(e)}const C={},w={};(0,x.cr)(x.TT.DASHBOARD_RBAC)&&(C.roles=Y,w.roles=(Y||[]).map((e=>e.id)));const T={id:o,title:n,slug:s,jsonMetadata:f,owners:H,colorScheme:u,colorNamespace:m,certifiedBy:c,certificationDetails:h,...C};k?($(T),S(),t((0,g.t)("Dashboard properties updated"))):b.Z.put({endpoint:`/api/v1/dashboard/${o}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:n,slug:s||null,json_metadata:f||null,owners:(H||[]).map((e=>e.id)),certified_by:c||null,certification_details:c&&h?h:null,...w})}).then((()=>{$(T),S(),t((0,g.t)("The dashboard has been saved"))}),ie)},layout:"vertical",initialValues:K},(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",null,(0,g.t)("Basic information")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(s.xJ,{label:(0,g.t)("Title"),name:"title"},(0,w.tZ)(n.II,{type:"text",disabled:j}))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,{label:(0,g.t)("URL slug"),name:"slug"},(0,w.tZ)(n.II,{type:"text",disabled:j})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("A readable URL for your dashboard")))),(0,x.cr)(x.TT.DASHBOARD_RBAC)?(()=>{const e=se(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.tZ)(a.Fragment,null,(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,g.t)("Access")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,{label:(0,g.t)("Owners")},(0,w.tZ)(h.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,g.t)("Owners"),disabled:j,mode:"multiple",onChange:oe,options:(e,t,r)=>le("owners",e,t,r),value:ce()})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,{label:(0,g.t)("Roles")},(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,g.t)("Roles"),disabled:j,mode:"multiple",onChange:de,options:(e,t,r)=>le("roles",e,t,r),value:(Y||[]).map((e=>({value:e.id,label:`${e.name}`})))})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.")))),(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(I,{hasCustomLabelColors:t,onChange:he,colorScheme:X,labelMargin:4}))))})():(()=>{const e=se(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,g.t)("Access")),(0,w.tZ)(R,{label:(0,g.t)("Owners")},(0,w.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,g.t)("Owners"),disabled:j,mode:"multiple",onChange:oe,options:(e,t,r)=>le("owners",e,t,r),value:ce()})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,g.t)("Colors")),(0,w.tZ)(I,{hasCustomLabelColors:t,onChange:he,colorScheme:X,labelMargin:4})))})(),(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",null,(0,g.t)("Certification")))),(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,{label:(0,g.t)("Certified by"),name:"certifiedBy"},(0,w.tZ)(n.II,{type:"text",disabled:j})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("Person or group that has certified this dashboard."))),(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,{label:(0,g.t)("Certification details"),name:"certificationDetails"},(0,w.tZ)(n.II,{type:"text",disabled:j})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("Any additional detail to show in the certification tooltip.")))),(0,x.cr)(x.TT.TAGGING_SYSTEM)?(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)("h3",{css:M},(0,g.t)("Tags")))):null,(0,x.cr)(x.TT.TAGGING_SYSTEM)?(0,w.tZ)(h.X2,{gutter:16},(0,w.tZ)(h.JX,{xs:24,md:12},(0,w.tZ)(R,null,(0,w.tZ)(h.qb,{ariaLabel:"Tags",mode:"multiple",value:re,options:U.m,onChange:e=>{const t=[...new Set(e.map((e=>e.label)))];ee([...t.map((e=>({name:e})))])},allowClear:!0})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("A list of tags that have been applied to this chart.")))):null,(0,w.tZ)(h.X2,null,(0,w.tZ)(h.JX,{xs:24,md:24},(0,w.tZ)("h3",{style:{marginTop:"1em"}},(0,w.tZ)(c.Z,{buttonStyle:"link",onClick:()=>L(!D)},(0,w.tZ)("i",{className:"fa fa-angle-"+(D?"down":"right"),style:{minWidth:"1em"}}),(0,g.t)("Advanced"))),D&&(0,w.tZ)(a.Fragment,null,(0,w.tZ)(R,{label:(0,g.t)("JSON metadata")},(0,w.tZ)(q,{showLoadingForImport:!0,name:"json_metadata",value:J,onChange:B,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0})),(0,w.tZ)("p",{className:"help-block"},(0,g.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),k&&(0,w.tZ)(a.Fragment,null," ",(0,g.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,w.tZ)(_.Z,{triggerNode:(0,w.tZ)("span",{className:"alert-link"},(0,g.t)('Use "%(menuName)s" menu instead.',{menuName:(0,g.t)("Set filter mapping")}))}))))))))}))},87999:(e,t,r)=>{r.d(t,{Z:()=>ge});var i=r(67294),l=r(51995),a=r(1304),n=r(28216),s=r(14890),o=r(81395),d=r(9467),c=r(45697),h=r.n(c),p=r(94184),u=r.n(p),m=r(35932),g=r(11965),f=r(61988),b=r(41609),v=r.n(b),y=r(80621),F=r(81255);const x=[F.gn,F.U0];function Z(e){let{currentNode:t={},components:r={},filterFields:i=[],selectedChartId:l}=e;if(!t)return null;const{type:a}=t;if(F.dW===a&&t&&t.meta&&t.meta.chartId){const e={value:t.meta.chartId,label:t.meta.sliceName||`${a} ${t.meta.chartId}`,type:a,showCheckbox:l!==t.meta.chartId};return{...e,children:i.map((r=>({value:`${t.meta.chartId}:${r}`,label:`${e.label}`,type:"filter_box",showCheckbox:!1})))}}let n=[];if(t.children&&t.children.length&&t.children.forEach((e=>{const t=Z({currentNode:r[e],components:r,filterFields:i,selectedChartId:l}),a=r[e].type;x.includes(a)?n.push(t):n=n.concat(t)})),x.includes(a)){let e=null;return e=a===F.U0?(0,f.t)("All charts"):t.meta&&t.meta.text?t.meta.text:`${a} ${t.id}`,{value:t.id,label:e,type:a,children:n}}return n}function C(e){let{components:t={},filterFields:r=[],selectedChartId:i}=e;return v()(t)?[]:[{...Z({currentNode:t[y._4],components:t,filterFields:r,selectedChartId:i})}]}function S(e,t){void 0===e&&(e=[]),void 0===t&&(t=-1);const r=[],i=(e,l)=>{e&&e.children&&(-1===t||l<t)&&(r.push(e.value),e.children.forEach((e=>i(e,l+1))))};return e.length>0&&e.forEach((e=>{i(e,0)})),r}var k=r(9679);function $(e){let{activeFilterField:t,checkedFilterFields:r}=e;return(0,k.o)(t?[t]:r)}var w=r(20194);function T(e){let{activeFilterField:t,checkedFilterFields:r}=e;if(t)return(0,w._)(t).chartId;if(r.length){const{chartId:e}=(0,w._)(r[0]);return r.some((t=>(0,w._)(t).chartId!==e))?null:e}return null}function N(e){let{checkedFilterFields:t=[],activeFilterField:r,filterScopeMap:i={},layout:l={}}=e;const a=$({checkedFilterFields:t,activeFilterField:r}),n=r?[r]:t,s=C({components:l,filterFields:n,selectedChartId:T({checkedFilterFields:t,activeFilterField:r})}),o=new Set;n.forEach((e=>{(i[e].checked||[]).forEach((t=>{o.add(`${t}:${e}`)}))}));const d=[...o],c=i[a]?i[a].expanded:S(s,1);return{[a]:{nodes:s,nodesFiltered:[...s],checked:d,expanded:c}}}var I=r(94654),_=r.n(I),O=r(83927),j=r.n(O),E=r(58809),U=r.n(E),R=r(8816),q=r.n(R);function M(e){let{tabScopes:t,parentNodeValue:r,forceAggregate:i=!1,hasChartSiblings:l=!1,tabChildren:a=[],immuneChartSiblings:n=[]}=e;if(i||!l&&Object.entries(t).every((e=>{let[t,{scope:r}]=e;return r&&r.length&&t===r[0]}))){const e=function(e){let{tabs:t=[],tabsInScope:r=[]}=e;const i=[];return t.forEach((e=>{let{value:t,children:l}=e;l&&!r.includes(t)&&l.forEach((e=>{let{value:t,children:l}=e;l&&!r.includes(t)&&i.push(...l.filter((e=>{let{type:t}=e;return t===F.dW})))}))})),i.map((e=>{let{value:t}=e;return t}))}({tabs:a,tabsInScope:_()(t,(e=>{let{scope:t}=e;return t}))}),i=_()(Object.values(t),(e=>{let{immune:t}=e;return t}));return{scope:[r],immune:[...new Set([...e,...i])]}}const s=Object.values(t).filter((e=>{let{scope:t}=e;return t&&t.length}));return{scope:_()(s,(e=>{let{scope:t}=e;return t})),immune:s.length?_()(s,(e=>{let{immune:t}=e;return t})):_()(Object.values(t),(e=>{let{immune:t}=e;return t})).concat(n)}}function A(e){let{currentNode:t={},filterId:r,checkedChartIds:i=[]}=e;if(!t)return{};const{value:l,children:a}=t,n=a.filter((e=>{let{type:t}=e;return t===F.dW})),s=a.filter((e=>{let{type:t}=e;return t===F.gn})),o=n.filter((e=>{let{value:t}=e;return r!==t&&!i.includes(t)})).map((e=>{let{value:t}=e;return t})),d=q()(U()((e=>e.value)),j()((e=>A({currentNode:e,filterId:r,checkedChartIds:i}))))(s);if(!v()(n)&&n.some((e=>{let{value:t}=e;return i.includes(t)}))){if(v()(s))return{scope:[l],immune:o};const{scope:e,immune:t}=M({tabScopes:d,parentNodeValue:l,forceAggregate:!0,tabChildren:s});return{scope:e,immune:o.concat(t)}}return s.length?M({tabScopes:d,parentNodeValue:l,hasChartSiblings:!v()(n),tabChildren:s,immuneChartSiblings:o}):{scope:[],immune:o}}function D(e){let{filterKey:t,nodes:r=[],checkedChartIds:i=[]}=e;if(r.length){const{chartId:e}=(0,w._)(t);return A({currentNode:r[0],filterId:e,checkedChartIds:i})}return{}}var L=r(43399),X=r(2275),z=r(28388),J=r.n(z),B=r(70707);const K=(0,l.iK)(B.Z.BarChartOutlined)`
  ${e=>{let{theme:t}=e;return`\n    position: relative;\n    top: ${t.gridUnit-1}px;\n    color: ${t.colors.primary.base};\n    margin-right: ${2*t.gridUnit}px;\n  `}}
`;function P(e){let{currentNode:t={},selectedChartId:r}=e;if(!t)return null;const{label:i,value:l,type:a,children:n}=t;if(n&&n.length){const e=n.map((e=>P({currentNode:e,selectedChartId:r})));return{...t,label:(0,g.tZ)("span",{className:u()(`filter-scope-type ${a.toLowerCase()}`,{"selected-filter":r===l})},a===F.dW&&(0,g.tZ)(K,null),i),children:e}}return{...t,label:(0,g.tZ)("span",{className:u()(`filter-scope-type ${a.toLowerCase()}`,{"selected-filter":r===l})},i)}}function H(e){let{nodes:t,selectedChartId:r}=e;return t?t.map((e=>P({currentNode:e,selectedChartId:r}))):[]}var G=r(13842);const Y={check:(0,g.tZ)(G.lU,null),uncheck:(0,g.tZ)(G.zq,null),halfCheck:(0,g.tZ)(G.dc,null),expandClose:(0,g.tZ)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,g.tZ)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,g.tZ)("span",{className:"rct-icon rct-icon-expand-all"},(0,f.t)("Expand all")),collapseAll:(0,g.tZ)("span",{className:"rct-icon rct-icon-collapse-all"},(0,f.t)("Collapse all")),parentClose:(0,g.tZ)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,g.tZ)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,g.tZ)("span",{className:"rct-icon rct-icon-leaf"})},W={nodes:h().arrayOf(X.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,selectedChartId:h().number},V=()=>{};function Q(e){let{nodes:t=[],checked:r=[],expanded:i=[],onCheck:l,onExpand:a,selectedChartId:n}=e;return(0,g.tZ)(J(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:H({nodes:t,selectedChartId:n}),checked:r,expanded:i,onCheck:l,onExpand:a,onClick:V,icons:Y})}Q.propTypes=W,Q.defaultProps={selectedChartId:null};var ee=r(49238);const te={label:h().string.isRequired,isSelected:h().bool.isRequired};function re(e){let{label:t,isSelected:r}=e;return(0,g.tZ)("span",{className:u()("filter-field-item filter-container",{"is-selected":r})},(0,g.tZ)(ee.lX,{htmlFor:t},t))}function ie(e){let{nodes:t,activeKey:r}=e;if(!t)return[];const i=t[0],l=i.children.map((e=>({...e,children:e.children.map((e=>{const{label:t,value:i}=e;return{...e,label:(0,g.tZ)(re,{isSelected:i===r,label:t})}}))})));return[{...i,label:(0,g.tZ)("span",{className:"root"},i.label),children:l}]}re.propTypes=te;const le={activeKey:h().string,nodes:h().arrayOf(X.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,onClick:h().func.isRequired};function ae(e){let{activeKey:t,nodes:r=[],checked:i=[],expanded:l=[],onClick:a,onCheck:n,onExpand:s}=e;return(0,g.tZ)(J(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:ie({nodes:r,activeKey:t}),checked:i,expanded:l,onClick:a,onCheck:n,onExpand:s,icons:Y})}ae.propTypes=le,ae.defaultProps={activeKey:null};const ne={dashboardFilters:h().objectOf(X.Er).isRequired,layout:h().object.isRequired,updateDashboardFiltersScope:h().func.isRequired,setUnsavedChanges:h().func.isRequired,onCloseModal:h().func.isRequired},se=l.iK.div`
  ${e=>{let{theme:t}=e;return g.iv`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*t.gridUnit}px;
    font-size: ${t.typography.sizes.m}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*t.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*t.gridUnit}px;
    }
  `}}
`,oe=l.iK.div`
  ${e=>{let{theme:t}=e;return g.iv`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*t.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}}
`,de=l.iK.div`
  ${e=>{let{theme:t}=e;return g.iv`
    height: ${16*t.gridUnit}px;
    border-bottom: 1px solid ${t.colors.grayscale.light2};
    padding-left: ${6*t.gridUnit}px;
    margin-left: ${-6*t.gridUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*t.gridUnit}px 0 ${4*t.gridUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${t.gridUnit}px;
      }
    }
  `}}
`,ce=l.iK.div`
  ${e=>{let{theme:t}=e;return g.iv`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${t.typography.families.sansSerif};
        font-size: ${t.typography.sizes.m}px;
        color: ${t.colors.primary.base};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*t.gridUnit}px;
        padding-left: 0;
        border-right: 1px solid ${t.colors.grayscale.light2};

        .filter-container label {
          font-weight: ${t.typography.weights.normal};
          margin: 0 0 0 ${4*t.gridUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*t.gridUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*t.gridUnit}px;
          margin-left: ${-6*t.gridUnit}px;

          &.is-selected {
            border: 1px solid ${t.colors.text.label};
            border-radius: ${t.borderRadius}px;
            background-color: ${t.colors.grayscale.light4};
            margin-left: ${-6*t.gridUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${t.typography.weights.bold};
          }

          .rct-text {
            height: ${10*t.gridUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*t.gridUnit}px;
        padding-right: ${6*t.gridUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${t.colors.grayscale.dark1};
        font-size: ${t.typography.sizes.m}px;

        .filter-scope-type {
          padding: ${2*t.gridUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${t.typography.weights.normal};
          }

          &.selected-filter {
            padding-left: ${7*t.gridUnit}px;
            position: relative;
            color: ${t.colors.text.label};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*t.gridUnit}px;
              height: ${4*t.gridUnit}px;
              border-radius: ${t.borderRadius}px;
              margin-top: ${-2*t.gridUnit}px;
              box-shadow: inset 0 0 0 2px ${t.colors.grayscale.light2};
              background: ${t.colors.grayscale.light3};
            }
          }

          &.root {
            font-weight: ${t.typography.weights.bold};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*t.gridUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${t.gridUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*t.gridUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        &.filter-scope-pane {
          .rct-node.rct-node-leaf .filter-scope-type.filter_box {
            display: none;
          }
        }

        .filter-field-item {
          padding: 0 ${4*t.gridUnit}px 0 ${12*t.gridUnit}px;
          margin-left: ${-12*t.gridUnit}px;

          &.is-selected {
            margin-left: ${-13*t.gridUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*t.gridUnit}px;
        top: ${4*t.gridUnit}px;
        border-radius: ${t.borderRadius}px;
        border: 1px solid ${t.colors.grayscale.light2};
        padding: ${t.gridUnit}px ${2*t.gridUnit}px;
        font-size: ${t.typography.sizes.m}px;
        outline: none;

        &:focus {
          border: 1px solid ${t.colors.primary.base};
        }
      }
    }
  `}}
`,he=l.iK.div`
  ${e=>{let{theme:t}=e;return`\n    height: ${16*t.gridUnit}px;\n\n    border-top: ${t.gridUnit/4}px solid ${t.colors.primary.light3};\n    padding: ${6*t.gridUnit}px;\n    margin: 0 0 0 ${6*-t.gridUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*t.gridUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}}
`;class pe extends i.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:r}=e;if(Object.keys(t).length>0){const e=function(e){let{dashboardFilters:t={}}=e;const r=Object.values(t).map((e=>{const{chartId:t,filterName:r,columns:i,labels:l}=e,a=Object.keys(i).map((e=>({value:(0,w.w)({chartId:t,column:e}),label:l[e]||e})));return{value:t,label:r,children:a,showCheckbox:!0}}));return[{value:y.dU,type:F.U0,label:(0,f.t)("All filters"),children:r}]}({dashboardFilters:t}),i=e[0].children;this.allfilterFields=[],i.forEach((e=>{let{children:t}=e;t.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=i[0].children[0].value;const l=Object.values(t).reduce(((e,i)=>{let{chartId:l,columns:a}=i;return{...e,...Object.keys(a).reduce(((e,i)=>{const a=(0,w.w)({chartId:l,column:i}),n=C({components:r,filterFields:[a],selectedChartId:l}),s=S(n,1),o=((0,L.up)({filterScope:t[l].scopes[i]})||[]).filter((e=>e!==l));return{...e,[a]:{nodes:n,nodesFiltered:[...n],checked:o,expanded:s}}}),{})}}),{}),{chartId:a}=(0,w._)(this.defaultFilterKey),n=[],s=this.defaultFilterKey,o=[y.dU].concat(a),d=N({checkedFilterFields:n,activeFilterField:s,filterScopeMap:l,layout:r});this.state={showSelector:!0,activeFilterField:s,searchText:"",filterScopeMap:{...l,...d},filterFieldNodes:e,checkedFilterFields:n,expandedFilterIds:o}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e){void 0===e&&(e=[]);const{activeFilterField:t,filterScopeMap:r,checkedFilterFields:i}=this.state,l=$({activeFilterField:t,checkedFilterFields:i}),a=t?[t]:i,n={...r[l],checked:e},s=function(e){let{checked:t=[],filterFields:r=[],filterScopeMap:i={}}=e;const l=t.reduce(((e,t)=>{const[r,i]=t.split(":");return{...e,[i]:(e[i]||[]).concat(parseInt(r,10))}}),{});return r.reduce(((e,t)=>{const{chartId:r}=(0,w._)(t),a=(l[t]||[]).filter((e=>e!==r));return{...e,[t]:{...i[t],checked:a}}}),{})}({checked:e,filterFields:a,filterScopeMap:r});this.setState((()=>({filterScopeMap:{...r,...s,[l]:n}})))}onExpandFilterScope(e){void 0===e&&(e=[]);const{activeFilterField:t,checkedFilterFields:r,filterScopeMap:i}=this.state,l=$({activeFilterField:t,checkedFilterFields:r}),a={...i[l],expanded:e};this.setState((()=>({filterScopeMap:{...i,[l]:a}})))}onCheckFilterField(e){void 0===e&&(e=[]);const{layout:t}=this.props,{filterScopeMap:r}=this.state,i=N({checkedFilterFields:e,activeFilterField:null,filterScopeMap:r,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...r,...i}})))}onExpandFilterField(e){void 0===e&&(e=[]),this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e){void 0===e&&(e={});const{layout:t}=this.props,r=e.value,{activeFilterField:i,checkedFilterFields:l,filterScopeMap:a}=this.state;if(r===i){const e=N({checkedFilterFields:l,activeFilterField:null,filterScopeMap:a,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...a,...e}})}else if(this.allfilterFields.includes(r)){const e=N({checkedFilterFields:l,activeFilterField:r,filterScopeMap:a,layout:t});this.setState({activeFilterField:r,filterScopeMap:{...a,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,r)=>{const{nodes:i}=e[r];return{...t,[r]:D({filterKey:r,nodes:i,checkedChartIds:e[r].checked})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:r,filterScopeMap:i}=e,l=$({activeFilterField:t,checkedFilterFields:r}),a=i[l].nodes.reduce(this.filterNodes,[]),n=S([...a]),s={...i[l],nodesFiltered:a,expanded:n};return{filterScopeMap:{...i,[l]:s}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:r,filterScopeMap:i}=e,l=$({activeFilterField:t,checkedFilterFields:r}),a={...i[l],nodesFiltered:i[l].nodes};return{filterScopeMap:{...i,[l]:a}}}))}filterNodes(e,t){void 0===e&&(e=[]),void 0===t&&(t={});const{searchText:r}=this.state,i=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(r.toLocaleLowerCase())>-1||i.length)&&e.push({...t,children:i}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:r,expandedFilterIds:i}=this.state;return(0,g.tZ)(ae,{activeKey:e,nodes:t,checked:r,expanded:i,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:r,searchText:l}=this.state,a=$({activeFilterField:t,checkedFilterFields:r}),n=T({activeFilterField:t,checkedFilterFields:r});return(0,g.tZ)(i.Fragment,null,(0,g.tZ)("input",{className:"filter-text scope-search multi-edit-mode",placeholder:(0,f.t)("Search..."),type:"text",value:l,onChange:this.onSearchInputChange}),(0,g.tZ)(Q,{nodes:e[a].nodesFiltered,checked:e[a].checked,expanded:e[a].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:n}))}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:r}=this.state,i=[].concat(t||r).map((t=>{const{chartId:r,column:i}=(0,w._)(t);return e[r].labels[i]||i}));return(0,g.tZ)("div",{className:"selected-fields multi-edit-mode"},0===i.length&&(0,f.t)("No filter is selected."),1===i.length&&(0,f.t)("Editing 1 filter:"),i.length>1&&(0,f.t)("Batch editing %d filters:",i.length),(0,g.tZ)("span",{className:"selected-scopes"},i.join(", ")))}render(){const{showSelector:e}=this.state;return(0,g.tZ)(se,null,(0,g.tZ)(de,null,(0,g.tZ)("h4",null,(0,f.t)("Configure filter scopes")),e&&this.renderEditingFiltersName()),(0,g.tZ)(oe,{className:"filter-scope-body"},e?(0,g.tZ)(ce,{className:"filters-scope-selector"},(0,g.tZ)("div",{className:u()("filter-field-pane multi-edit-mode")},this.renderFilterFieldList()),(0,g.tZ)("div",{className:"filter-scope-pane multi-edit-mode"},this.renderFilterScopeTree())):(0,g.tZ)("div",{className:"warning-message"},(0,f.t)("There are no filters in this dashboard."))),(0,g.tZ)(he,null,(0,g.tZ)(m.Z,{buttonSize:"small",onClick:this.onClose},(0,f.t)("Close")),e&&(0,g.tZ)(m.Z,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave},(0,f.t)("Save"))))}}pe.propTypes=ne;const ue=(0,n.$j)((function(e){let{dashboardLayout:t,dashboardFilters:r}=e;return{dashboardFilters:r,layout:t.present}}),(function(e){return(0,s.DE)({updateDashboardFiltersScope:o.l6,setUnsavedChanges:d.if},e)}))(pe),me=l.iK.div((e=>{let{theme:{gridUnit:t}}=e;return{padding:2*t,paddingBottom:3*t}}));class ge extends i.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=i.createRef(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e,t;null==this||null==(e=this.modal)||null==(t=e.current)||null==t.close||t.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,g.tZ)(a.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,g.tZ)(me,null,(0,g.tZ)(ue,e)),width:"80%"})}}},713:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(61988),l=r(80621);const a=[{value:l.HE,label:(0,i.t)("Transparent"),className:"background--transparent"},{value:l.b5,label:(0,i.t)("White"),className:"background--white"}]},79271:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(61988),l=r(80621);const a=[{value:l.u_,label:(0,i.t)("Small"),className:"header-style-option header-small"},{value:l.OE,label:(0,i.t)("Medium"),className:"header-style-option header-medium"},{value:l.pQ,label:(0,i.t)("Large"),className:"header-style-option header-large"}]},48273:(e,t,r)=>{r.d(t,{$3:()=>h,LS:()=>c,OY:()=>p,Qz:()=>u,Y4:()=>g,_U:()=>m,g:()=>s});var i=r(31069),l=r(15926),a=r.n(l);const n=Object.freeze(["dashboard","chart","saved_query"]),s=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"}),o={saved_query:1,chart:2,dashboard:3},d=e=>{if(!n.includes(e))throw new Error(`objectType ${e} is invalid`);return o[e]};function c(e,t,r){i.Z.get({endpoint:`/api/v1/tag/${e}`}).then((e=>{let{json:r}=e;return t(r.result)})).catch((e=>r(e)))}function h(e,t,r){let{objectType:l,objectId:a,includeTypes:s=!1}=e;if(void 0===l||void 0===a)throw new Error("Need to specify objectType and objectId");if(!n.includes(l))throw new Error(`objectType ${l} is invalid`);i.Z.get({endpoint:`/api/v1/${l}/${a}`}).then((e=>{let{json:r}=e;return t(r.result.tags.filter((e=>-1===e.name.indexOf(":")||s)))})).catch((e=>r(e)))}function p(e,t,r,l){let{objectType:a,objectId:s}=e;if(void 0===a||void 0===s)throw new Error("Need to specify objectType and objectId");if(!n.includes(a))throw new Error(`objectType ${a} is invalid`);i.Z.delete({endpoint:`/api/v1/tag/${d(a)}/${s}/${t.name}`}).then((e=>{let{json:t}=e;return r(t?JSON.stringify(t):"Successfully Deleted Tagged Objects")})).catch((e=>{const t=e.message;return l(t||"Error Deleting Tagged Objects")}))}function u(e,t,r){const l=e.map((e=>e.name));i.Z.delete({endpoint:`/api/v1/tag/?q=${a().encode(l)}`}).then((e=>{let{json:r}=e;return r.message?t(r.message):t("Successfully Deleted Tag")})).catch((e=>{const t=e.message;return r(t||"Error Deleting Tag")}))}function m(e,t,r,l){let{objectType:a,objectId:n,includeTypes:s=!1}=e;if(void 0===a||void 0===n)throw new Error("Need to specify objectType and objectId");if(-1!==t.indexOf(":")&&!s)return;const o=d(a);i.Z.post({endpoint:`/api/v1/tag/${o}/${n}/`,body:JSON.stringify({properties:{tags:[t]}}),parseMethod:"json",headers:{"Content-Type":"application/json"}}).then((e=>{let{json:t}=e;return r(JSON.stringify(t))})).catch((e=>l(e)))}function g(e,t,r){let{tags:l="",types:a}=e,n=`/api/v1/tag/get_objects/?tags=${l}`;a&&(n+=`&types=${a}`),i.Z.get({endpoint:n}).then((e=>{let{json:r}=e;return t(r.result)})).catch((e=>r(e)))}},65108:(e,t,r)=>{r.d(t,{g:()=>i});const i=function(e,t,r){return void 0===r&&(r=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return JSON.stringify([...t])}),function(){const i=r(...arguments);if(t.has(i))return t.get(i);const l=e(...arguments);return t.set(i,l),l}}}}]);
//# sourceMappingURL=4717.fcc3e948e64d4c3d2c00.entry.js.map