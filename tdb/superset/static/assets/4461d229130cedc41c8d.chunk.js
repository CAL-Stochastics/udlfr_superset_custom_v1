"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3197],{93197:(e,t,n)=>{n.d(t,{tR:()=>C,iZ:()=>E,iA:()=>A,ex:()=>T,ZP:()=>Z});var l=n(73126),o=n(67294),r=n(2307),i=n(31929),s=n(51995),a=n(61988),d=n(68492),u=n(38703);const c=(e,t,n)=>{let l=!1;const o=t-e;return o>0&&o<=n&&(l=!0),l};class h{constructor(e,t,n){var l=this;this.tableRef=void 0,this.columnRef=void 0,this.setDerivedColumns=void 0,this.isDragging=void 0,this.resizable=void 0,this.reorderable=void 0,this.derivedColumns=void 0,this.RESIZE_INDICATOR_THRESHOLD=void 0,this.clearListeners=()=>{document.removeEventListener("mouseup",this.handleMouseup),this.initializeResizableColumns(!1,this.tableRef),this.initializeDragDropColumns(!1,this.tableRef)},this.setTableRef=e=>{this.tableRef=e},this.getColumnIndex=()=>{var e;let t=-1;const n=null==(e=this.columnRef)?void 0:e.parentNode;return n&&(t=Array.prototype.indexOf.call(n.children,this.columnRef)),t},this.handleColumnDragStart=e=>{var t;const n=null==e?void 0:e.currentTarget;n&&(this.columnRef=n),this.isDragging=!0;const l=this.getColumnIndex(),o={index:l,columnData:this.derivedColumns[l]};null==e||null==(t=e.dataTransfer)||t.setData(E,JSON.stringify(o))},this.handleDragDrop=e=>{var t;if(null==(t=e.dataTransfer)||null==t.getData?void 0:t.getData(E)){var n;e.preventDefault();const t=null==(n=e.currentTarget)?void 0:n.parentNode,l=Array.prototype.indexOf.call(t.children,e.currentTarget),o=this.getColumnIndex(),r=[...this.derivedColumns],i=r.slice(o,o+1);r.splice(o,1),r.splice(l,0,i[0]),this.derivedColumns=[...r],this.setDerivedColumns(r)}},this.allowDrop=e=>{e.preventDefault()},this.handleMouseDown=e=>{const t=null==e?void 0:e.currentTarget;t&&(this.columnRef=t,e&&c(e.offsetX,t.offsetWidth,this.RESIZE_INDICATOR_THRESHOLD)?(t.mouseDown=!0,t.oldX=e.x,t.oldWidth=t.offsetWidth,t.draggable=!1):this.reorderable&&(t.draggable=!0))},this.handleMouseMove=e=>{if(!0===this.resizable&&!this.isDragging){const t=e.currentTarget;e&&c(e.offsetX,t.offsetWidth,this.RESIZE_INDICATOR_THRESHOLD)?t.style.cursor="col-resize":t.style.cursor="default";const n=this.columnRef;if(null!=n&&n.mouseDown){let t=n.oldWidth;const l=e.x-n.oldX;n.oldWidth+(e.x-n.oldX)>0&&(t=n.oldWidth+l);const o=this.getColumnIndex();if(!Number.isNaN(o)){const e={...this.derivedColumns[o]};e.width=t,this.derivedColumns[o]=e,this.setDerivedColumns([...this.derivedColumns])}}}},this.handleMouseup=()=>{this.columnRef&&(this.columnRef.mouseDown=!1,this.columnRef.style.cursor="default",this.columnRef.draggable=!1),this.isDragging=!1},this.initializeResizableColumns=function(e,t){var n,o;void 0===e&&(e=!1),l.tableRef=t;const r=null==(n=l.tableRef)||null==(o=n.rows)?void 0:o[0];if(r){const{cells:t}=r,n=t.length;for(let o=0;o<n;o+=1){const n=t[o];!0===e?(l.resizable=!0,n.addEventListener("mousedown",l.handleMouseDown),n.addEventListener("mousemove",l.handleMouseMove,!0)):(l.resizable=!1,n.removeEventListener("mousedown",l.handleMouseDown),n.removeEventListener("mousemove",l.handleMouseMove,!0))}}},this.initializeDragDropColumns=function(e,t){var n,o;void 0===e&&(e=!1),l.tableRef=t;const r=null==(n=l.tableRef)||null==(o=n.rows)?void 0:o[0];if(r){const{cells:t}=r,n=t.length;for(let o=0;o<n;o+=1){const n=t[o];!0===e?(l.reorderable=!0,n.addEventListener("mousedown",l.handleMouseDown),n.addEventListener("dragover",l.allowDrop),n.addEventListener("dragstart",l.handleColumnDragStart),n.addEventListener("drop",l.handleDragDrop)):(l.reorderable=!1,n.draggable=!1,n.removeEventListener("mousedown",l.handleMouseDown),n.removeEventListener("dragover",l.allowDrop),n.removeEventListener("dragstart",l.handleColumnDragStart),n.removeEventListener("drop",l.handleDragDrop))}}},this.setDerivedColumns=n,this.tableRef=e,this.isDragging=!1,this.RESIZE_INDICATOR_THRESHOLD=8,this.resizable=!1,this.reorderable=!1,this.derivedColumns=[...t],document.addEventListener("mouseup",this.handleMouseup)}}var g=n(94184),f=n.n(g),p=n(99612),v=n(74061),m=n(32103),b=n(11965);const w=(0,s.iK)("div")((e=>{let{theme:t,height:n}=e;return`\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: ${2*t.gridUnit}px;\n  padding-right: ${t.gridUnit}px;\n  border-bottom: 1px solid ${t.colors.grayscale.light3};\n  transition: background 0.3s;\n  line-height: ${n}px;\n  box-sizing: border-box;\n`})),D=(0,s.iK)(r.Z)((e=>{let{theme:t}=e;return`\n    th.ant-table-cell {\n      font-weight: ${t.typography.weights.bold};\n      color: ${t.colors.grayscale.dark1};\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .ant-pagination-item-active {\n      border-color: ${t.colors.primary.base};\n      }\n    }\n    .ant-table.ant-table-small {\n      font-size: ${t.typography.sizes.s}px;\n    }\n`})),E="superset/table-column";var R,C,T;!function(e){e.DISABLED="disabled",e.SINGLE="single",e.MULTI="multi"}(R||(R={})),function(e){e.PAGINATE="paginate",e.SORT="sort",e.FILTER="filter"}(C||(C={})),function(e){e.SMALL="small",e.MIDDLE="middle"}(T||(T={}));const y=[],L=40,S=68,x=(0,s.iK)(r.Z)((e=>{let{theme:t,height:n}=e;return`\n    .ant-table-body {\n      overflow: auto;\n      height: ${n?`${n}px`:void 0};\n    }\n\n    th.ant-table-cell {\n      font-weight: ${t.typography.weights.bold};\n      color: ${t.colors.grayscale.dark1};\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .ant-table-tbody > tr > td {\n      user-select: none;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      border-bottom: 1px solid ${t.colors.grayscale.light3};\n    }\n\n    .ant-pagination-item-active {\n      border-color: ${t.colors.primary.base};\n    }\n\n    .ant-table.ant-table-small {\n      font-size: ${t.typography.sizes.s}px;\n    }\n  `})),I=(0,s.iK)((e=>{var t;const{columns:n,pagination:r,onChange:i,height:a,scroll:d,size:u,allowHTML:c=!1}=e,[h,g]=(0,o.useState)(0),E=(0,o.useCallback)((e=>{g(e)}),[]),{ref:R}=(0,p.NB)({onResize:E}),y=(0,s.Fg)(),L=37*(null==y?void 0:y.gridUnit)||150,S=n.filter((e=>{let{width:t}=e;return!t})).length;let x=0;null==n||n.forEach((e=>{e.width&&(x+=e.width)}));let I=0;const z=Math.max(Math.floor((h-x)/S),50),N=null!=(t=null==n||null==n.map?void 0:n.map((e=>{const t={...e};return e.width||(t.width=z),I+=t.width,t})))?t:[];if(I<h){const e=N[N.length-1];e.width=e.width+Math.floor(h-I)}const M=(0,o.useRef)(),[A]=(0,o.useState)((()=>{const e={};return Object.defineProperty(e,"scrollLeft",{get:()=>{var e,t;return M.current?null==(e=M.current)||null==(t=e.state)?void 0:t.scrollLeft:null},set:e=>{M.current&&M.current.scrollTo({scrollLeft:e})}}),e})),Z=()=>{var e;null==(e=M.current)||e.resetAfterIndices({columnIndex:0,shouldForceUpdate:!0})};(0,o.useEffect)((()=>Z),[h,n,u]);const O={...r,onChange:(e,t)=>{var n;null==(n=M.current)||null==n.scrollTo||n.scrollTo({scrollTop:0}),null==i||i({...r,current:e,pageSize:t},{},{},{action:C.PAGINATE,currentDataSource:[]})}};return(0,b.tZ)("div",{ref:R},(0,b.tZ)(D,(0,l.Z)({},e,{sticky:!1,className:"virtual-table",columns:N,components:{body:(e,t)=>{let{ref:n,onScroll:l}=t;n.current=A;const o=u===T.MIDDLE?47:39;return(0,b.tZ)(v.cd,{ref:M,className:"virtual-grid",columnCount:N.length,columnWidth:e=>{const{width:t=L}=N[e];return t},height:a||d.y,rowCount:e.length,rowHeight:()=>o,width:h,onScroll:e=>{let{scrollLeft:t}=e;l({scrollLeft:t})}},(t=>{var n,l;let{columnIndex:r,rowIndex:i,style:s}=t;const a=null==e?void 0:e[i];let d=null==a?void 0:a[null==N||null==(n=N[r])?void 0:n.dataIndex];const u=null==(l=N[r])?void 0:l.render;return"function"==typeof u&&(d=u(d,a,i)),c&&"string"==typeof d&&(d=(0,m.Ul)(d)),(0,b.tZ)(w,{className:f()("virtual-table-cell",{"virtual-table-cell-last":r===N.length-1}),style:s,title:"string"==typeof d?d:void 0,theme:y,height:o},d)}))}},pagination:!!r&&O})))}))((e=>{let{theme:t}=e;return`\n  .virtual-table .ant-table-container:before,\n  .virtual-table .ant-table-container:after {\n    display: none;\n  }\n  .virtual-table-cell {\n    box-sizing: border-box;\n    padding: ${4*t.gridUnit}px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n`})),z={filterTitle:(0,a.t)("Filter menu"),filterConfirm:(0,a.t)("OK"),filterReset:(0,a.t)("Reset"),filterEmptyText:(0,a.t)("No filters"),filterCheckall:(0,a.t)("Select all items"),filterSearchPlaceholder:(0,a.t)("Search in filters"),emptyText:(0,a.t)("No data"),selectAll:(0,a.t)("Select current page"),selectInvert:(0,a.t)("Invert current page"),selectNone:(0,a.t)("Clear all data"),selectionAll:(0,a.t)("Select all data"),sortTitle:(0,a.t)("Sort"),expand:(0,a.t)("Expand row"),collapse:(0,a.t)("Collapse row"),triggerDesc:(0,a.t)("Click to sort descending"),triggerAsc:(0,a.t)("Click to sort ascending"),cancelSort:(0,a.t)("Click to cancel sorting")},N={},M=()=>{};function A(e){const{data:t,bordered:n,columns:r,selectedRows:a=y,handleRowSelection:c,size:g=T.SMALL,selectionType:f=R.DISABLED,sticky:p=!0,loading:v=!1,resizable:m=!1,reorderable:w=!1,usePagination:D=!0,defaultPageSize:E=15,pageSizeOptions:C=["5","15","25","50","100"],hideData:A=!1,emptyComponent:Z,locale:O,height:k,virtualize:$=!1,onChange:H=M,recordCount:P,onRow:U,allowHTML:W=!1,childrenColumnName:_}=e,B=(0,o.useRef)(null),[F,X]=(0,o.useState)(r),[K,G]=(0,o.useState)(E),[j,J]=(0,o.useState)({...z}),[q,Q]=(0,o.useState)(a),V=(0,o.useRef)(null),Y=N[f],ee={type:Y,selectedRowKeys:q,onChange:e=>{Q(e),null==c||c(e)}};(0,o.useEffect)((()=>{!0===w&&d.Z.warn('EXPERIMENTAL FEATURE ENABLED: The "reorderable" prop of Table is experimental and NOT recommended for use in production deployments.'),!0===m&&d.Z.warn('EXPERIMENTAL FEATURE ENABLED: The "resizable" prop of Table is experimental and NOT recommended for use in production deployments.')}),[w,m]),(0,o.useEffect)((()=>{let e;e=O?{...z,...O}:{...z},J(e)}),[O]),(0,o.useEffect)((()=>X(r)),[r]),(0,o.useEffect)((()=>{var e,t;V.current&&(null==(t=V.current)||t.clearListeners());const n=null==(e=B.current)?void 0:e.getElementsByTagName("table")[0];var l,o;n&&(V.current=new h(n,F,X),w&&(null==V||null==(l=V.current)||l.initializeDragDropColumns(w,n)),m&&(null==V||null==(o=V.current)||o.initializeResizableColumns(m,n)));return()=>{var e;null==V||null==(e=V.current)||null==e.clearListeners||e.clearListeners()}}),[B,w,m,$,V]);const te=(0,s.Fg)(),ne=!!D&&{hideOnSinglePage:!0,pageSize:K,pageSizeOptions:C,onShowSizeChange:(e,t)=>G(t)};ne&&P&&(ne.total=P);let le=k;le&&(le-=S,D&&P&&P>K&&(le-=L));const oe={loading:{spinning:null!=v&&v,indicator:(0,b.tZ)(u.Z,null)},hasData:!A&&t,columns:F,dataSource:A?void 0:t,size:g,pagination:ne,locale:j,showSorterTooltip:!1,onChange:H,onRow:U,theme:te,height:le,bordered:n,expandable:{childrenColumnName:_}};return(0,b.tZ)(i.default,{renderEmpty:()=>null!=Z?Z:(0,b.tZ)("div",null,j.emptyText)},(0,b.tZ)("div",{ref:B},!$&&(0,b.tZ)(x,(0,l.Z)({},oe,{rowSelection:Y?ee:void 0,sticky:p})),$&&(0,b.tZ)(I,(0,l.Z)({},oe,{scroll:{y:300,x:"100vw",...!1},allowHTML:W}))))}N[R.MULTI]="checkbox",N[R.SINGLE]="radio",N[R.DISABLED]=null;const Z=A}}]);
//# sourceMappingURL=4461d229130cedc41c8d.chunk.js.map