"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1563],{36750:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(4942),o=n(5259),r=n(11482),s=n(77552),a=n(33230);class l extends o.Z{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(t){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo(t){let{info:e}=t;const{object:n}=e;return n&&n.__source&&n.__source.parent&&n.__source.parent.id===this.id?(e.object=n.__source.object,e.index=n.__source.index,e):e}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){return e&&e.length}getSubLayerClass(t,e){const{_subLayerProps:n}=this.props;return n&&n[t]&&n[t].type||e}getSubLayerRow(t,e,n){return t.__source={parent:this,object:e,index:n},t}getSubLayerAccessor(t){if("function"==typeof t){const e={index:-1,data:this.props.data,target:[]};return(n,i)=>n&&n.__source?(e.index=n.__source.index,t(n.__source.object,e)):t(n,i)}return t}getSubLayerProps(t){var e;void 0===t&&(t={});const{opacity:n,pickable:i,visible:o,parameters:r,getPolygonOffset:s,highlightedObjectIndex:l,autoHighlight:c,highlightColor:d,coordinateSystem:p,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:f,extensions:m,fetch:y,operation:v,_subLayerProps:P}=this.props,x={id:"",updateTriggers:{},opacity:n,pickable:i,visible:o,parameters:r,getPolygonOffset:s,highlightedObjectIndex:l,autoHighlight:c,highlightColor:d,coordinateSystem:p,coordinateOrigin:u,wrapLongitude:g,positionFormat:h,modelMatrix:f,extensions:m,fetch:y,operation:v},b=P&&t.id&&P[t.id],_=b&&b.updateTriggers,S=t.id||"sublayer";if(b){const e=this.props[a.Wb],n=t.type?t.type._propTypes:{};for(const t in b){const i=n[t]||e[t];i&&"accessor"===i.type&&(b[t]=this.getSubLayerAccessor(b[t]))}}Object.assign(x,t,b),x.id="".concat(this.props.id,"-").concat(S),x.updateTriggers={all:null===(e=this.props.updateTriggers)||void 0===e?void 0:e.all,...t.updateTriggers,..._};for(const t of m){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(x,e,{updateTriggers:Object.assign(x.updateTriggers,e.updateTriggers)})}return x}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_postUpdate(t,e){let n=this.internalState.subLayers;const i=!n||this.needsUpdate();if(i){const t=this.renderLayers();n=(0,s.x)(t,Boolean),this.internalState.subLayers=n}(0,r.Z)("compositeLayer.renderLayers",this,i,n);for(const t of n)t.parent=this}}(0,i.Z)(l,"layerName","CompositeLayer")},48897:(t,e,n)=>{n.d(e,{Z:()=>y});var i=n(4942),o=n(5259),r=n(37832),s=n(13717),a=n(33321),l=n(39769),c=n(53982),d=n(44500),p=n(25215);class u extends d.Z{constructor(t){super({...t,attributes:{positions:{size:3,padding:18,initialize:!0,type:t.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(t){return this.attributes[t]}getGeometryFromBuffer(t){return this.normalize?super.getGeometryFromBuffer(t):null}normalizeGeometry(t){return this.normalize?function(t,e,n,i){let o;if(Array.isArray(t[0])){const n=t.length*e;o=new Array(n);for(let n=0;n<t.length;n++)for(let i=0;i<e;i++)o[n*e+i]=t[n][i]||0}else o=t;return n?(0,p.dj)(o,{size:e,gridResolution:n}):i?(0,p.ct)(o,{size:e}):o}(t,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):t}getGeometrySize(t){if(g(t)){let e=0;for(const n of t)e+=this.getGeometrySize(n);return e}const e=this.getPathLength(t);return e<2?0:this.isClosed(t)?e<3?0:e+2:e}updateGeometryAttributes(t,e){if(0!==e.geometrySize)if(t&&g(t))for(const n of t){const t=this.getGeometrySize(n);e.geometrySize=t,this.updateGeometryAttributes(n,e),e.vertexStart+=t}else this._updateSegmentTypes(t,e),this._updatePositions(t,e)}_updateSegmentTypes(t,e){const n=this.attributes.segmentTypes,i=!!t&&this.isClosed(t),{vertexStart:o,geometrySize:r}=e;n.fill(0,o,o+r),i?(n[o]=4,n[o+r-2]=4):(n[o]+=1,n[o+r-2]+=2),n[o+r-1]=4}_updatePositions(t,e){const{positions:n}=this.attributes;if(!n||!t)return;const{vertexStart:i,geometrySize:o}=e,r=new Array(3);for(let e=i,s=0;s<o;e++,s++)this.getPointOnPath(t,s,r),n[3*e]=r[0],n[3*e+1]=r[1],n[3*e+2]=r[2]}getPathLength(t){return t.length/this.positionSize}getPointOnPath(t,e,n){void 0===n&&(n=[]);const{positionSize:i}=this;e*i>=t.length&&(e+=1-t.length/i);const o=e*i;return n[0]=t[o],n[1]=t[o+1],n[2]=3===i&&t[o+2]||0,n}isClosed(t){if(!this.normalize)return Boolean(this.opts.loop);const{positionSize:e}=this,n=t.length-e;return t[0]===t[n]&&t[1]===t[n+1]&&(2===e||t[2]===t[n+2])}}function g(t){return Array.isArray(t[0])}const h=[0,0,0,255],f={widthUnits:"meters",widthScale:{type:"number",min:0,value:1},widthMinPixels:{type:"number",min:0,value:0},widthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},jointRounded:!1,capRounded:!1,miterLimit:{type:"number",min:0,value:4},billboard:!1,_pathType:null,getPath:{type:"accessor",value:t=>t.path},getColor:{type:"accessor",value:h},getWidth:{type:"accessor",value:1},rounded:{deprecatedFor:["jointRounded","capRounded"]}},m={enter:(t,e)=>e.length?e.subarray(e.length-t.length):t};class y extends o.Z{constructor(){super(...arguments),(0,i.Z)(this,"state",void 0)}getShaders(){return super.getShaders({vs:"#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute float instanceTypes;\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec3 instanceLeftPositions64Low;\nattribute vec3 instanceStartPositions64Low;\nattribute vec3 instanceEndPositions64Low;\nattribute vec3 instanceRightPositions64Low;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float capType;\nuniform float miterLimit;\nuniform bool billboard;\nuniform int widthUnits;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\nvec3 getLineJoinOffset(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  vec2 width\n) {\n  bool isEnd = positions.x > 0.0;\n  float sideOfPath = positions.y;\n  float isJoint = float(sideOfPath == 0.0);\n\n  vec3 deltaA3 = (currPoint - prevPoint);\n  vec3 deltaB3 = (nextPoint - currPoint);\n\n  mat3 rotationMatrix;\n  bool needsRotation = !billboard && project_needs_rotation(currPoint, rotationMatrix);\n  if (needsRotation) {\n    deltaA3 = deltaA3 * rotationMatrix;\n    deltaB3 = deltaB3 * rotationMatrix;\n  }\n  vec2 deltaA = deltaA3.xy / width;\n  vec2 deltaB = deltaB3.xy / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = dirA + dirB;\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 dir = isEnd ? dirA : dirB;\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);\n  float cornerPosition = sideOfPath * turnDirection;\n\n  float miterSize = 1.0 / max(sinHalfA, EPSILON);\n  miterSize = mix(\n    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),\n    miterSize,\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))\n    * (sideOfPath + isJoint * turnDirection);\n  bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));\n  bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));\n  bool isCap = isStartCap || isEndCap;\n  if (isCap) {\n    offsetVec = mix(perp * sideOfPath, dir * capType * 4.0 * flipIfTrue(isStartCap), isJoint);\n    vJointType = capType;\n  } else {\n    vJointType = jointType;\n  }\n  vPathLength = L;\n  vCornerOffset = offsetVec;\n  vMiterLength = dot(vCornerOffset, miterVec * turnDirection);\n  vMiterLength = isCap ? isJoint : vMiterLength;\n\n  vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);\n  vPathPosition = vec2(\n    dot(offsetFromStartOfPath, perp),\n    dot(offsetFromStartOfPath, dir)\n  );\n  geometry.uv = vPathPosition;\n\n  float isValid = step(instanceTypes, 3.5);\n  vec3 offset = vec3(offsetVec * width * isValid, 0.0);\n\n  if (needsRotation) {\n    offset = rotationMatrix * offset;\n  }\n  return offset;\n}\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  geometry.pickingColor = instancePickingColors;\n\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);\n\n  geometry.worldPosition = currPosition;\n  vec2 widthPixels = vec2(clamp(\n    project_size_to_pixel(instanceStrokeWidths * widthScale, widthUnits),\n    widthMinPixels, widthMaxPixels) / 2.0);\n  vec3 width;\n\n  if (billboard) {\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    width = vec3(widthPixels, 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 offset = getLineJoinOffset(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w,\n      project_pixel_size_to_clipspace(width.xy)\n    );\n\n    DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);\n    gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    prevPosition = project_position(prevPosition, prevPosition64Low);\n    currPosition = project_position(currPosition, currPosition64Low);\n    nextPosition = project_position(nextPosition, nextPosition64Low);\n\n    width = vec3(project_pixel_size(widthPixels), 0.0);\n    DECKGL_FILTER_SIZE(width, geometry);\n\n    vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);\n    geometry.position = vec4(currPosition + offset, 1.0);\n    gl_Position = project_common_position_to_clipspace(geometry.position);\n    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float miterLimit;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nvarying float vJointType;\n\nvoid main(void) {\n  geometry.uv = vPathPosition;\n\n  if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {\n    if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {\n      discard;\n    }\n    if (vJointType < 0.5 && vMiterLength > miterLimit + 1.0) {\n      discard;\n    }\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n",modules:[r.Z,s.Z]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({positions:{size:3,vertexOffset:1,type:5130,fp64:this.use64bitPositions(),transition:m,accessor:"getPath",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:5121,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:"getWidth",transition:m,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:5121,normalized:!0,accessor:"getColor",transition:m,defaultValue:h},instancePickingColors:{size:3,type:5121,accessor:(t,e)=>{let{index:n,target:i}=e;return this.encodePickingColor(t&&t.__source?t.__source.index:n,i)}}}),this.setState({pathTesselator:new u({fp64:this.use64bitPositions()})})}updateState(t){super.updateState(t);const{props:e,changeFlags:n}=t,i=this.getAttributeManager();if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)){const{pathTesselator:t}=this.state,o=e.data.attributes||{};t.updateGeometry({data:e.data,geometryBuffer:o.getPath,buffers:o,normalize:!e._pathType,loop:"loop"===e._pathType,getGeometry:e.getPath,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:n.dataChanged}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||i.invalidateAll()}if(n.extensionsChanged){var o;const{gl:t}=this.context;null===(o=this.state.model)||void 0===o||o.delete(),this.state.model=this._getModel(t),i.invalidateAll()}}getPickingInfo(t){const e=super.getPickingInfo(t),{index:n}=e,{data:i}=this.props;return i[0]&&i[0].__source&&(e.object=i.find((t=>t.__source.index===n))),e}disablePickingIndex(t){const{data:e}=this.props;if(e[0]&&e[0].__source)for(let n=0;n<e.length;n++)e[n].__source.index===t&&this._disablePickingIndex(n);else super.disablePickingIndex(t)}draw(t){let{uniforms:e}=t;const{jointRounded:n,capRounded:i,billboard:o,miterLimit:r,widthUnits:s,widthScale:l,widthMinPixels:c,widthMaxPixels:d}=this.props;this.state.model.setUniforms(e).setUniforms({jointType:Number(n),capType:Number(i),billboard:o,widthUnits:a.iI[s],widthScale:l,miterLimit:r,widthMinPixels:c,widthMaxPixels:d}).draw()}_getModel(t){return new l.Z(t,{...this.getShaders(),id:this.props.id,geometry:new c.Z({drawMode:4,attributes:{indices:new Uint16Array([0,1,2,1,4,2,1,3,4,3,5,4]),positions:{value:new Float32Array([0,0,0,-1,0,1,1,-1,1,1,1,0]),size:2}}}),isInstanced:!0})}calculatePositions(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("positions")}calculateSegmentTypes(t){const{pathTesselator:e}=this.state;t.startIndices=e.vertexStarts,t.value=e.get("segmentTypes")}}(0,i.Z)(y,"defaultProps",f),(0,i.Z)(y,"layerName","PathLayer")},67186:(t,e,n)=>{function i(t){let{data:e,getIndex:n,dataRange:i,replace:o}=t;const{startRow:r=0,endRow:s=1/0}=i,a=e.length;let l=a,c=a;for(let t=0;t<a;t++){const i=n(e[t]);if(l>t&&i>=r&&(l=t),i>=s){c=t;break}}let d=l;const p=c-l!==o.length?e.slice(c):void 0;for(let t=0;t<o.length;t++)e[d++]=o[t];if(p){for(let t=0;t<p.length;t++)e[d++]=p[t];e.length=d}return{startRow:l,endRow:l+o.length}}n.d(e,{b:()=>i})},34634:(t,e,n)=>{n.d(e,{F:()=>f});var i=n(18446),o=n.n(i),r=n(67294),s=n(90530),a=n(10025),l=n(85716),c=n(51995),d=n(32103),p=n(11965);const u=c.iK.div`
  ${t=>{let{theme:e,top:n,left:i}=t;return`\n    position: absolute;\n    top: ${n}px;\n    left: ${i}px;\n    padding: ${2*e.gridUnit}px;\n    margin: ${2*e.gridUnit}px;\n    background: ${e.colors.grayscale.dark2};\n    color: ${e.colors.grayscale.light5};\n    maxWidth: 300px;\n    fontSize: ${e.typography.sizes.s}px;\n    zIndex: 9;\n    pointerEvents: none;\n  `}}
`;function g(t){const{tooltip:e}=t;if(null==e)return null;const{x:n,y:i,content:o}=e,r="string"==typeof o?(0,d.Ul)(o):o;return(0,p.tZ)(u,{top:i,left:n},r)}const h=(0,r.memo)((0,r.forwardRef)(((t,e)=>{const[n,i]=(0,r.useState)(null),[c,d]=(0,r.useState)(null),[u,h]=(0,r.useState)(t.viewport),f=(0,l.D)(t.viewport);(0,r.useImperativeHandle)(e,(()=>({setTooltip:i})),[]);const m=(0,r.useCallback)((()=>{if(c&&Date.now()-c>250){const e=t.setControlValue;e&&e("viewport",u),d(null)}}),[c,t.setControlValue,u]);(0,r.useEffect)((()=>{const t=setInterval(m,250);return clearInterval(t)}),[m]),(0,r.useEffect)((()=>{o()(t.viewport,f)||h(t.viewport)}),[f,t.viewport]);const y=(0,r.useCallback)((t=>{let{viewState:e}=t;h(e),d(Date.now())}),[]),v=(0,r.useCallback)((()=>t.layers.some((t=>"function"==typeof t))?t.layers.map((t=>"function"==typeof t?t():t)):t.layers),[t.layers]),{children:P=null,height:x,width:b}=t;return(0,p.tZ)(r.Fragment,null,(0,p.tZ)("div",{style:{position:"relative",width:b,height:x}},(0,p.tZ)(a.Z,{controller:!0,width:b,height:x,layers:v(),viewState:u,glOptions:{preserveDrawingBuffer:!0},onViewStateChange:y},(0,p.tZ)(s.Z3,{preserveDrawingBuffer:!0,mapStyle:t.mapStyle||"light",mapboxApiAccessToken:t.mapboxApiAccessToken})),P),(0,p.tZ)(g,{tooltip:n}))}))),f=(0,c.iK)(h)`
  .deckgl-tooltip > div {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`},51805:(t,e,n)=>{n.d(e,{Z:()=>o}),n(67294);var i=n(11965);const o=t=>{let{label:e,value:n}=t;return(0,i.tZ)("div",null,e,(0,i.tZ)("strong",null,n))}},70325:(t,e,n)=>{n.d(e,{Z:()=>d});var i=n(67294),o=n(51995),r=n(67190),s=n(11965);const a=o.iK.div`
  ${t=>{let{theme:e}=t;return`\n    font-size: ${e.typography.sizes.s}px;\n    position: absolute;\n    background: ${e.colors.grayscale.light5};\n    box-shadow: 0 0 ${e.gridUnit}px ${e.colors.grayscale.light2};\n    margin: ${6*e.gridUnit}px;\n    padding: ${3*e.gridUnit}px ${5*e.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        color: ${e.colors.grayscale.base};\n        text-decoration: none;\n\n        & span {\n          margin-right: ${3*e.gridUnit}px;\n        }\n      }\n    }\n  `}}
`,l=" - ",c=t=>{let{format:e=null,forceCategorical:n=!1,position:i="tr",categories:o={},toggleCategory:c=(()=>{}),showSingleCategory:d=(()=>{})}=t;const p=t=>{if(!e||n)return t;const i=parseFloat(t);return(0,r.uf)(e,i)};if(0===Object.keys(o).length||null===i)return null;const u=Object.entries(o).map((t=>{let[n,i]=t;const o={color:`rgba(${i.color.join(", ")})`},r=i.enabled?"◼":"◻";return(0,s.tZ)("li",{key:n},(0,s.tZ)("a",{href:"#",onClick:()=>c(n),onDoubleClick:()=>d(n)},(0,s.tZ)("span",{style:o},r)," ",(t=>{if(!e)return t;if(t.includes(l)){const e=t.split(l);return p(e[0])+l+p(e[1])}return p(t)})(n)))})),g={position:"absolute",["t"===(null==i?void 0:i.charAt(0))?"top":"bottom"]:"0px",["r"===(null==i?void 0:i.charAt(1))?"right":"left"]:"10px"};return(0,s.tZ)(a,{className:"dupa",style:g},(0,s.tZ)("ul",null,u))},d=(0,i.memo)(c)},61563:(t,e,n)=>{n.r(e),n.d(e,{default:()=>j,getLayer:()=>z});var i=n(67294),o=n(61988),r=n(4942),s=n(36750),a=n(41576),l=n(91575),c=n(91567),d=n(48897),p=n(40245),u=n(67186);const g=[0,0,0,255],h={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:t=>t.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:g},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class f extends s.Z{initializeState(){this.state={paths:[]},this.props.getLineDashArray&&a.Z.removed("getLineDashArray","PathStyleExtension")()}updateState(t){let{changeFlags:e}=t;const n=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(n&&Array.isArray(e.dataChanged)){const t=this.state.paths.slice(),n=e.dataChanged.map((e=>(0,u.b)({data:t,getIndex:t=>t.__source.index,dataRange:e,replace:this._getPaths(e)})));this.setState({paths:t,pathsDiff:n})}else n&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(t){void 0===t&&(t={});const{data:e,getPolygon:n,positionFormat:i,_normalize:o}=this.props,r=[],s="XY"===i?2:3,{startRow:a,endRow:c}=t,{iterable:d,objectInfo:u}=(0,l.jB)(e,a,c);for(const t of d){u.index++;let e=n(t,u);o&&(e=p.Fv(e,s));const{holeIndices:i}=e,a=e.positions||e;if(i)for(let e=0;e<=i.length;e++){const n=a.slice(i[e-1]||0,i[e]||a.length);r.push(this.getSubLayerRow({path:n},t,u.index))}else r.push(this.getSubLayerRow({path:a},t,u.index))}return r}renderLayers(){const{data:t,_dataDiff:e,stroked:n,filled:i,extruded:o,wireframe:r,_normalize:s,_windingOrder:a,elevationScale:l,transitions:p,positionFormat:u}=this.props,{lineWidthUnits:h,lineWidthScale:f,lineWidthMinPixels:m,lineWidthMaxPixels:y,lineJointRounded:v,lineMiterLimit:P,lineDashJustified:x}=this.props,{getFillColor:b,getLineColor:_,getLineWidth:S,getLineDashArray:w,getElevation:L,getPolygon:C,updateTriggers:A,material:T}=this.props,{paths:E,pathsDiff:Z}=this.state,F=this.getSubLayerClass("fill",c.Z),k=this.getSubLayerClass("stroke",d.Z),O=this.shouldRenderSubLayer("fill",E)&&new F({_dataDiff:e,extruded:o,elevationScale:l,filled:i,wireframe:r,_normalize:s,_windingOrder:a,getElevation:L,getFillColor:b,getLineColor:o&&r?_:g,material:T,transitions:p},this.getSubLayerProps({id:"fill",updateTriggers:A&&{getPolygon:A.getPolygon,getElevation:A.getElevation,getFillColor:A.getFillColor,lineColors:o&&r,getLineColor:A.getLineColor}}),{data:t,positionFormat:u,getPolygon:C});return[!o&&O,!o&&n&&this.shouldRenderSubLayer("stroke",E)&&new k({_dataDiff:Z&&(()=>Z),widthUnits:h,widthScale:f,widthMinPixels:m,widthMaxPixels:y,jointRounded:v,miterLimit:P,dashJustified:x,_pathType:"loop",transitions:p&&{getWidth:p.getLineWidth,getColor:p.getLineColor,getPath:p.getPolygon},getColor:this.getSubLayerAccessor(_),getWidth:this.getSubLayerAccessor(S),getDashArray:this.getSubLayerAccessor(w)},this.getSubLayerProps({id:"stroke",updateTriggers:A&&{getWidth:A.getLineWidth,getColor:A.getLineColor,getDashArray:A.getLineDashArray}}),{data:E,positionFormat:u,getPath:t=>t.path}),o&&O]}}(0,r.Z)(f,"layerName","PolygonLayer"),(0,r.Z)(f,"defaultProps",h);var m=n(70325),y=n(51805),v=n(81763),P=n.n(v),x=n(4065),b=n(39828),_=n(2995),S=n(45511),w=n(89503);const L=10;function C(t,e,n){let{break_points:i,num_buckets:o}=t;if(!e)return[];if(void 0===i||0===i.length){const t=o?parseInt(o,10):L,[i,r]=(0,x.extent)(e,n).map((t=>"string"==typeof t?parseFloat(t):t));if(void 0===i||void 0===r)return[];const s=(r-i)/t,a=0===s?0:Math.max(0,Math.ceil(Math.log10(1/s))),l=r>parseFloat(r.toFixed(a))?1:0,c=i<parseFloat(i.toFixed(a))?i-1:i;return new Array(t+1+l).fill(0).map(((t,e)=>(c+e*s).toFixed(a)))}return i.sort(((t,e)=>parseFloat(t)-parseFloat(e)))}function A(t,e,n){let{break_points:i,num_buckets:o,linear_color_scheme:r,opacity:s}=t;const a=i||o?C({break_points:i,num_buckets:o},e,n):null,l=Array.isArray(r)?new _.Z({colors:r,id:"custom"}):(0,S.Z)().get(r);if(!l)return null;let c,d;if(null!==a){const t=a.length-1,e=t>1?l.getColors(t):[l.colors[l.colors.length-1]],n=e[0],i=e[e.length-1];e.unshift(n),e.push(i);const o=a.map(parseFloat);c=(0,b.Z)().domain(o).range(e),d=e=>!!e&&(e>o[t]||e<o[0])}else{const t=(0,x.extent)(e,n);c=t.some(P())?l.createLinearScale((0,x.extent)(e,n)):l.createLinearScale(),d=()=>!1}return t=>{const e=n(t);if(!e)return[0,0,0,0];const i=(0,w.hexToRGB)(c(e));return d(e)?i[3]=0:i[3]=s/100*255,i}}var T=n(58371),E=n(63241);function Z(t){return"geometry"in t.polygon?t.polygon.geometry.coordinates[0]:t.polygon}var F=n(40461),k=n(34634),O=n(11965);function z(t,e,n,i,r,s){const a=t,l=a.fill_color_picker,c=a.stroke_color_picker;let d=[...e.data.features];a.js_data_mutator&&(d=(0,E.Z)(a.js_data_mutator)(d));const p=a.metric?a.metric.label||a.metric:null,u=null===a.metric?()=>[l.r,l.g,l.b,255*l.a]:A(a,d,(t=>t[p])),g=t=>{const e=(null==u?void 0:u(t))||[0,0,0,0];return r.length>0&&!r.includes(t[a.line_column])&&(e[3]/=2),e},h=a.line_column&&a.metric&&["json","geohash","zipcode"].includes(a.line_type)?function(t){return e=>{const n=t.metric.label||t.metric;return(0,O.tZ)("div",{className:"deckgl-tooltip"},e.object.name&&(0,O.tZ)(y.Z,{label:(0,o.t)("name")+": ",value:`${e.object.name}`}),e.object[t.line_column]&&(0,O.tZ)(y.Z,{label:`${t.line_column}: `,value:`${e.object[t.line_column]}`}),t.metric&&(0,O.tZ)(y.Z,{label:`${n}: `,value:`${e.object[n]}`}))}}(a):()=>null;return new f({id:`path-layer-${a.slice_id}`,data:d,filled:a.filled,stroked:a.stroked,getPolygon:Z,getFillColor:g,getLineColor:[c.r,c.g,c.b,255*c.a],getLineWidth:a.line_width,extruded:a.extruded,lineWidthUnits:a.line_width_unit,getElevation:t=>function(t,e){return 0===e(t)[3]?0:t.elevation}(t,g),elevationScale:a.multiplier,fp64:!0,...(0,T.N)(a,i,h,s)})}const R=t=>{const e=(0,i.useRef)(),n=(0,i.useCallback)((()=>{let e={...t.viewport};if(t.formData.autozoom){const n=t.payload.data.features||[];e=(0,F.Z)(e,{width:t.width,height:t.height,points:n.flatMap(Z)})}return e.zoom<0&&(e.zoom=0),e}),[t]),[o,r]=(0,i.useState)(0),[s,a]=(0,i.useState)(n()),[l,c]=(0,i.useState)(t.payload.form_data),[d,p]=(0,i.useState)([]);(0,i.useEffect)((()=>{const{payload:e}=t;e.form_data!==l&&(a(n()),p([]),r(0),c(e.form_data))}),[n,t,l,s]);const u=(0,i.useCallback)((t=>{const{current:n}=e;n&&n.setTooltip(t)}),[]),g=(0,i.useCallback)((e=>{const{formData:n,onAddFilter:i}=t,s=(new Date).getDate(),a=s-o<=250,l=[...d];if(a)l.splice(0,l.length,e);else if(n.toggle_polygons){const t=l.indexOf(e);-1===t?l.push(e):l.splice(t,1)}else l.splice(0,1,e);p(l),r(s),n.table_filter&&i(n.line_column,d,!1,!0)}),[o,t,d]),h=(0,i.useCallback)((()=>void 0===t.payload.data.features?[]:[z(t.formData,t.payload,t.onAddFilter,u,d,g)]),[g,t.formData,t.onAddFilter,t.payload,d,u]),{payload:f,formData:y,setControlValue:v}=t,P=y.metric?y.metric.label||y.metric:null,x=function(t,e,n){const i=C(t,e,n),o=A(t,e,n),r={};return i.slice(1).forEach(((e,n)=>{const s=`${i[n]} - ${i[n+1]}`,a=.5*(parseFloat(i[n])+parseFloat(i[n+1])),l=t.metric?t.metric.label||t.metric:null;r[s]={color:null==o?void 0:o({[l||t.metric]:a}),enabled:!0}})),r}(y,f.data.features,(t=>t[P]));return(0,O.tZ)("div",{style:{position:"relative"}},(0,O.tZ)(k.F,{ref:e,viewport:s,layers:h(),setControlValue:v,mapStyle:y.mapbox_style,mapboxApiAccessToken:f.data.mapboxApiKey,width:t.width,height:t.height}),null!==y.metric&&(0,O.tZ)(m.Z,{categories:x,position:y.legend_position,format:y.legend_format}))},j=(0,i.memo)(R)},58371:(t,e,n)=>{n.d(e,{N:()=>r,Z:()=>a});var i=n(4065),o=n(63241);function r(t,e,n,i){const r=t;let s,a,l=n;return r.js_tooltip&&(l=(0,o.Z)(r.js_tooltip)),l&&(s=t=>(t.picked?e({content:l(t),x:t.x,y:t.y}):e(null),!0)),r.js_onclick_href?a=t=>{const e=(0,o.Z)(r.js_onclick_href)(t);return window.open(e),!0}:r.table_filter&&void 0!==i&&(a=t=>(i(t.object[r.line_column]),!0)),{onClick:a,onHover:s,pickable:Boolean(s)}}const s={p1:.01,p5:.05,p95:.95,p99:.99};function a(t,e){if(void 0===t&&(t="sum"),void 0===e&&(e=null),"count"===t)return t=>t.length;let n;return n=t in s?(n,o)=>{let r;return r=e?n.sort(((t,n)=>i.ascending(e(t),e(n)))):n.sort(i.ascending),i.quantile(r,s[t],o)}:i[t],e?t=>n(t.map((t=>e(t)))):t=>n(t)}},89503:(t,e,n)=>{n.r(e),n.d(e,{hexToRGB:()=>o});var i=n(50667);function o(t,e){if(void 0===e&&(e=255),!t)return[0,0,0,e];const{r:n,g:o,b:r}=(0,i.B8)(t);return[n,o,r,e]}},40461:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(17013),o=n(4065);const r=[-90,90],s=[-180,180];function a(t,e,n){let[i,o]=t,[r,s]=e;return void 0===n&&(n=.25),i<o?[i,o]:[Math.max(r,i-n),Math.min(s,o+n)]}function l(t,e){let{points:n,width:l,height:c,minExtent:d,maxZoom:p,offset:u,padding:g=20}=e;const{bearing:h,pitch:f}=t,m=function(t){const e=a((0,o.extent)(t,(t=>t[1])),r),n=a((0,o.extent)(t,(t=>t[0])),s);return[[n[0],e[0]],[n[1],e[1]]]}(n);try{return{...(0,i.Xg)({bounds:m,width:l,height:c,minExtent:d,maxZoom:p,offset:u,padding:g}),bearing:h,pitch:f}}catch(t){console.error("Could not fit viewport",t)}return t}},63241:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(55140),o=n.n(i),r=n(59050),s=n(4065),a=n(89503);const l={console,_:r.ZP,colors:a,d3array:s};function c(t,e,n){const i={},r=`SAFE_EVAL_${Math.floor(1e6*Math.random())}`;i[r]={};const s=`${r}=${t}`,a={...l,...e};Object.keys(a).forEach((t=>{i[t]=a[t]}));try{return o().runInNewContext(s,i,n),i[r]}catch(t){return()=>t}}}}]);
//# sourceMappingURL=7bc7f3b1f0439d08c187.chunk.js.map