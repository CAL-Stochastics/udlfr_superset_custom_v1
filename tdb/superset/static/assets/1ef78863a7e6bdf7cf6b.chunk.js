/*! For license information please see 1ef78863a7e6bdf7cf6b.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[452],{10752:(e,t,n)=>{var i=n(21078),r=n(35161);e.exports=function(e,t){return i(r(e,t),1/0)}},89734:(e,t,n)=>{var i=n(21078),r=n(82689),o=n(5976),a=n(16612),s=o((function(e,t){if(null==e)return[];var n=t.length;return n>1&&a(e,t[0],t[1])?t=[]:n>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),r(e,i(t,1),[])}));e.exports=s},9238:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>H,DragSource:()=>z,DropTarget:()=>L});var i=n(28195);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return"function"==typeof e}function a(){}function s(e){if(!function(e){return"object"===r(e)&&null!==e}(e))return!1;if(null===Object.getPrototypeOf(e))return!0;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function l(e){var t=e.current;return null==t?null:t.decoratedRef?t.decoratedRef.current:t}function d(e){return(t=e)&&t.prototype&&"function"==typeof t.prototype.render||function(e){var t;return"Symbol(react.forward_ref)"===(null==e||null===(t=e.$$typeof)||void 0===t?void 0:t.toString())}(e);var t}var c=n(67294),u=n(15047),h=n(8679),p=n.n(h),m=n(82514);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}var b=function(){var e=function(){function e(t){g(this,e),this.isDisposed=!1,this.action=o(t)?t:a}return v(e,[{key:"dispose",value:function(){this.isDisposed||(this.action(),this.isDisposed=!0)}}],[{key:"isDisposable",value:function(e){return Boolean(e&&o(e.dispose))}},{key:"_fixup",value:function(t){return e.isDisposable(t)?t:e.empty}},{key:"create",value:function(t){return new e(t)}}]),e}();return e.empty={dispose:a},e}(),y=function(){function e(){g(this,e),this.isDisposed=!1;for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.disposables=n}return v(e,[{key:"add",value:function(e){this.isDisposed?e.dispose():this.disposables.push(e)}},{key:"remove",value:function(e){var t=!1;if(!this.isDisposed){var n=this.disposables.indexOf(e);-1!==n&&(t=!0,this.disposables.splice(n,1),e.dispose())}return t}},{key:"clear",value:function(){if(!this.isDisposed){for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;for(var e=this.disposables.length,t=new Array(e),n=0;n<e;n++)t[n]=this.disposables[n];this.disposables=[];for(var i=0;i<e;i++)t[i].dispose()}}}]),e}(),x=function(){function e(){g(this,e),this.isDisposed=!1}return v(e,[{key:"getDisposable",value:function(){return this.current}},{key:"setDisposable",value:function(e){var t=this.isDisposed;if(!t){var n=this.current;this.current=e,n&&n.dispose()}t&&e&&e.dispose()}},{key:"dispose",value:function(){if(!this.isDisposed){this.isDisposed=!0;var e=this.current;this.current=void 0,e&&e.dispose()}}}]),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function T(e){var t=e.DecoratedComponent,n=e.createHandler,r=e.createMonitor,o=e.createConnector,a=e.registerHandler,s=e.containerDisplayName,l=e.getType,h=e.collect,g=e.options.arePropsEqual,f=void 0===g?u.w:g,v=t,T=t.displayName||t.name||"Component",k=function(){var e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(D,e);var t,s,p,g,k=(p=D,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(p);if(g){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function D(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,D),(t=k.call(this,e)).decoratedRef=c.createRef(),t.handleChange=function(){var e=t.getCurrentState();(0,u.w)(e,t.state)||t.setState(e)},t.disposable=new x,t.receiveProps(e),t.dispose(),t}return t=D,(s=[{key:"getHandlerId",value:function(){return this.handlerId}},{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.decoratedRef.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.decoratedRef.current}},{key:"shouldComponentUpdate",value:function(e,t){return!f(e,this.props)||!(0,u.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.disposable=new x,this.currentType=void 0,this.receiveProps(this.props),this.handleChange()}},{key:"componentDidUpdate",value:function(e){f(this.props,e)||(this.receiveProps(this.props),this.handleChange())}},{key:"componentWillUnmount",value:function(){this.dispose()}},{key:"receiveProps",value:function(e){this.handler&&(this.handler.receiveProps(e),this.receiveType(l(e)))}},{key:"receiveType",value:function(e){if(this.handlerMonitor&&this.manager&&this.handlerConnector&&e!==this.currentType){this.currentType=e;var t=(o=a(e,this.handler,this.manager),s=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}}(o,s)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(o,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],i=t[1];this.handlerId=n,this.handlerMonitor.receiveHandlerId(n),this.handlerConnector.receiveHandlerId(n);var r=this.manager.getMonitor().subscribeToStateChange(this.handleChange,{handlerIds:[n]});this.disposable.setDisposable(new y(new b(r),new b(i)))}var o,s}},{key:"dispose",value:function(){this.disposable.dispose(),this.handlerConnector&&this.handlerConnector.receiveHandlerId(null)}},{key:"getCurrentState",value:function(){return this.handlerConnector?h(this.handlerConnector.hooks,this.handlerMonitor,this.props):{}}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return e.receiveDragDropManager(n),"undefined"!=typeof requestAnimationFrame&&requestAnimationFrame((function(){var t;return null===(t=e.handlerConnector)||void 0===t?void 0:t.reconnect()})),c.createElement(v,Object.assign({},e.props,e.getCurrentState(),{ref:d(v)?e.decoratedRef:null}))}))}},{key:"receiveDragDropManager",value:function(e){void 0===this.manager&&((0,i.k)(void 0!==e,"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",T,T),void 0!==e&&(this.manager=e,this.handlerMonitor=r(e),this.handlerConnector=o(e.getBackend()),this.handler=n(this.handlerMonitor,this.decoratedRef)))}}])&&Z(t.prototype,s),D}(c.Component);return e.DecoratedComponent=t,e.displayName="".concat(s,"(").concat(T,")"),e}();return p()(k,t)}var k=n(33273),D=n(60938),$=n(8556);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function I(e,t){return"string"==typeof e||"symbol"===_(e)||!!t&&Array.isArray(e)&&e.every((function(e){return I(e,!1)}))}function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var F=["canDrag","beginDrag","isDragging","endDrag"],E=["beginDrag"],O=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.beginDrag=function(){if(r.props)return r.spec.beginDrag(r.props,r.monitor,r.ref.current)},this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"canDrag",value:function(){return!!this.props&&(!this.spec.canDrag||this.spec.canDrag(this.props,this.monitor))}},{key:"isDragging",value:function(e,t){return!!this.props&&(this.spec.isDragging?this.spec.isDragging(this.props,this.monitor):t===e.getSourceId())}},{key:"endDrag",value:function(){this.props&&this.spec.endDrag&&this.spec.endDrag(this.props,this.monitor,l(this.ref))}}])&&M(t.prototype,n),e}();function z(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(I(e),'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.k)(F.indexOf(t)>-1,'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',F.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),E.forEach((function(t){(0,i.k)("function"==typeof e[t],"Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",t,t,e[t])})),function(t,n){return new O(e,t,n)}}(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',n),function(e){return T({containerDisplayName:"DragSource",createHandler:a,registerHandler:k.w,createConnector:function(e){return new $.x(e)},createMonitor:function(e){return new D.p(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}var U=n(89026),P=n(56941);function N(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var A=["canDrop","hover","drop"],q=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props=null,this.spec=t,this.monitor=n,this.ref=i}var t,n;return t=e,(n=[{key:"receiveProps",value:function(e){this.props=e}},{key:"receiveMonitor",value:function(e){this.monitor=e}},{key:"canDrop",value:function(){return!this.spec.canDrop||this.spec.canDrop(this.props,this.monitor)}},{key:"hover",value:function(){this.spec.hover&&this.props&&this.spec.hover(this.props,this.monitor,l(this.ref))}},{key:"drop",value:function(){if(this.spec.drop)return this.spec.drop(this.props,this.monitor,this.ref.current)}}])&&N(t.prototype,n),e}();function L(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=e;"function"!=typeof e&&((0,i.k)(I(e,!0),'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',e),o=function(){return e}),(0,i.k)(s(t),'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',t);var a=function(e){return Object.keys(e).forEach((function(t){(0,i.k)(A.indexOf(t)>-1,'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',A.join(", "),t),(0,i.k)("function"==typeof e[t],"Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",t,t,e[t])})),function(t,n){return new q(e,t,n)}}(t);return(0,i.k)("function"==typeof n,'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),(0,i.k)(s(r),'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',n),function(e){return T({containerDisplayName:"DropTarget",createHandler:a,registerHandler:k.n,createMonitor:function(e){return new P.H(e)},createConnector:function(e){return new U.Y(e)},DecoratedComponent:e,getType:o,collect:n,options:r})}}function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function V(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function K(e,t){return K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},K(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.k)("function"==typeof e,'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',"Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",e),(0,i.k)(s(t),'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',t),function(n){var r=n,o=t.arePropsEqual,a=void 0===o?u.w:o,s=r.displayName||r.name||"Component",l=function(){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(g,t);var n,o,l,h,p=(l=g,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(l);if(h){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,e)});function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=p.apply(this,arguments)).isCurrentlyMounted=!1,e.ref=c.createRef(),e.handleChange=function(){if(e.isCurrentlyMounted){var t=e.getCurrentState();(0,u.w)(t,e.state)||e.setState(t)}},e}return n=g,(o=[{key:"getDecoratedComponentInstance",value:function(){return(0,i.k)(this.ref.current,"In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"),this.ref.current}},{key:"shouldComponentUpdate",value:function(e,t){return!a(e,this.props)||!(0,u.w)(t,this.state)}},{key:"componentDidMount",value:function(){this.isCurrentlyMounted=!0,this.handleChange()}},{key:"componentWillUnmount",value:function(){this.isCurrentlyMounted=!1,this.unsubscribeFromOffsetChange&&(this.unsubscribeFromOffsetChange(),this.unsubscribeFromOffsetChange=void 0),this.unsubscribeFromStateChange&&(this.unsubscribeFromStateChange(),this.unsubscribeFromStateChange=void 0)}},{key:"render",value:function(){var e=this;return c.createElement(m.L.Consumer,null,(function(t){var n=t.dragDropManager;return void 0===n?null:(e.receiveDragDropManager(n),e.isCurrentlyMounted?c.createElement(r,Object.assign({},e.props,e.state,{ref:d(r)?e.ref:null})):null)}))}},{key:"receiveDragDropManager",value:function(e){if(void 0===this.manager){this.manager=e,(0,i.k)("object"===j(e),"Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",s,s);var t=this.manager.getMonitor();this.unsubscribeFromOffsetChange=t.subscribeToOffsetChange(this.handleChange),this.unsubscribeFromStateChange=t.subscribeToStateChange(this.handleChange)}}},{key:"getCurrentState",value:function(){if(!this.manager)return{};var t=this.manager.getMonitor();return e(t,this.props)}}])&&V(n.prototype,o),g}(c.Component);return t.displayName="DragLayer(".concat(s,")"),t.DecoratedComponent=n,t}();return p()(l,n)}}},84785:(e,t,n)=>{"use strict";n.d(t,{DragLayer:()=>r.DragLayer,DragSource:()=>r.DragSource,DropTarget:()=>r.DropTarget});var i=n(31388);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(9238)},54238:()=>{},53279:()=>{},31388:(e,t,n)=>{"use strict";var i=n(75253);n.o(i,"DragLayer")&&n.d(t,{DragLayer:function(){return i.DragLayer}}),n.o(i,"DragSource")&&n.d(t,{DragSource:function(){return i.DragSource}}),n.o(i,"DropTarget")&&n.d(t,{DropTarget:function(){return i.DropTarget}});var r=n(53279);n.o(r,"DragLayer")&&n.d(t,{DragLayer:function(){return r.DragLayer}}),n.o(r,"DragSource")&&n.d(t,{DragSource:function(){return r.DragSource}}),n.o(r,"DropTarget")&&n.d(t,{DropTarget:function(){return r.DropTarget}});var o=n(72105);n.o(o,"DragLayer")&&n.d(t,{DragLayer:function(){return o.DragLayer}}),n.o(o,"DragSource")&&n.d(t,{DragSource:function(){return o.DragSource}}),n.o(o,"DropTarget")&&n.d(t,{DropTarget:function(){return o.DropTarget}});var a=n(54238);n.o(a,"DragLayer")&&n.d(t,{DragLayer:function(){return a.DragLayer}}),n.o(a,"DragSource")&&n.d(t,{DragSource:function(){return a.DragSource}}),n.o(a,"DropTarget")&&n.d(t,{DropTarget:function(){return a.DropTarget}})},75253:()=>{},72105:()=>{},24903:(e,t,n)=>{"use strict";t.cj=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(67294),o=l(r),a=l(n(45697)),s=n(76597);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={searchTerm:n.props.value||""},n.updateSearch=n.updateSearch.bind(n),n.filter=n.filter.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.value&&e.value!==this.props.value){var t={target:{value:e.value}};this.updateSearch(t)}}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.onChange,e.caseSensitive,e.sortResults,e.throttle,e.filterKeys,e.value,e.fuzzy,e.inputClassName),i=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","onChange","caseSensitive","sortResults","throttle","filterKeys","value","fuzzy","inputClassName"]);return i.type=i.type||"search",i.value=this.state.searchTerm,i.onChange=this.updateSearch,i.className=n,i.placeholder=i.placeholder||"Search",o.default.createElement("div",{className:t},o.default.createElement("input",i))}},{key:"updateSearch",value:function(e){var t=this,n=e.target.value;this.setState({searchTerm:n},(function(){t._throttleTimeout&&clearTimeout(t._throttleTimeout),t._throttleTimeout=setTimeout((function(){return t.props.onChange(n)}),t.props.throttle)}))}},{key:"filter",value:function(e){var t=this.props,n=t.filterKeys,i=t.caseSensitive,r=t.fuzzy,o=t.sortResults;return(0,s.createFilter)(this.state.searchTerm,e||n,{caseSensitive:i,fuzzy:r,sortResults:o})}}]),t}(r.Component);d.defaultProps={className:"",onChange:function(){},caseSensitive:!1,fuzzy:!1,throttle:200},d.propTypes={className:a.default.string,inputClassName:a.default.string,onChange:a.default.func,caseSensitive:a.default.bool,sortResults:a.default.bool,fuzzy:a.default.bool,throttle:a.default.number,filterKeys:a.default.oneOf([a.default.string,a.default.arrayOf(a.default.string)]),value:a.default.string},t.cj=s.createFilter},76597:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValuesForKey=a,t.searchStrings=s,t.createFilter=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(i){if(""===e)return!0;n.caseSensitive||(e=e.toLowerCase());var r=e.split(" ");return t?("string"==typeof t&&(t=[t]),r.every((function(e){var r=void 0;if(-1!==e.indexOf(":")){var o=e.split(":")[0];e=e.split(":")[1],r=t.filter((function(e){return e.toLowerCase().indexOf(o)>-1}))}else r=t;return r.some((function(t){return s(a(t,i),e,n)}))}))):r.every((function(e){return s([i],e,n)}))}};var i,r=(i=n(69021))&&i.__esModule?i:{default:i};function o(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?o(t):t)}),[])}function a(e,t){var n=e.split("."),i=[t];return n.forEach((function(e){var t=[];i.forEach((function(n){if(n)if(n instanceof Array){var i=parseInt(e,10);if(!isNaN(i))return t.push(n[i]);n.forEach((function(n){t.push(n[e])}))}else n&&"function"==typeof n.get?t.push(n.get(e)):t.push(n[e])})),i=t})),(i=o(i=i.map((function(e){return e&&e.push&&e.toArray?e.toArray():e})))).filter((function(e){return"string"==typeof e||"number"==typeof e}))}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.caseSensitive,o=n.fuzzy,a=n.sortResults,s=n.exactMatch;e=e.map((function(e){return e.toString()}));try{return o?("function"==typeof e.toJS&&(e=e.toJS()),new r.default(e.map((function(e){return{id:e}})),{keys:["id"],id:"id",caseSensitive:i,shouldSort:a}).search(t).length):e.some((function(e){try{return i||(e=e.toLowerCase()),s&&(t=new RegExp("^"+t+"$","i")),!(!e||-1===e.search(t))}catch(e){return!1}}))}catch(e){return!1}}},69021:function(e){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=n(1),a=n(7),s=a.get,l=(a.deepValue,a.isArray),d=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,a=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,u=void 0===c?32:c,h=n.caseSensitive,p=void 0!==h&&h,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.id,S=void 0===x?null:x,C=n.keys,Z=void 0===C?[]:C,w=n.shouldSort,R=void 0===w||w,T=n.getFn,k=void 0===T?s:T,D=n.sortFn,$=void 0===D?function(e,t){return e.score-t.score}:D,_=n.tokenize,I=void 0!==_&&_,M=n.matchAllTokens,F=void 0!==M&&M,E=n.includeMatches,O=void 0!==E&&E,z=n.includeScore,U=void 0!==z&&z,P=n.verbose,N=void 0!==P&&P;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:d,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,minMatchCharLength:y,id:S,keys:Z,includeMatches:O,includeScore:U,shouldSort:R,getFn:k,sortFn:$,verbose:N,tokenize:I,matchAllTokens:F},this.setCollection(t),this._processKeys(Z)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var i=e[t];this._keyWeights[i]=1,this._keyNames.push(i)}else{for(var r=null,o=null,a=0,s=0,l=e.length;s<l;s+=1){var d=e[s];if(!d.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=d.name;if(this._keyNames.push(c),!d.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=d.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?u:Math.max(o,u),r=null==r?u:Math.min(r,u),this._keyWeights[c]=u,a+=u}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),i=n.tokenSearchers,r=n.fullSearcher,o=this._search(i,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),i=0,r=n.length;i<r;i+=1)t.push(new o(n[i],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,i={},r=[];if("string"==typeof n[0]){for(var o=0,a=n.length;o<a;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,l=n.length;s<l;s+=1)for(var d=n[s],c=0,u=this._keyNames.length;c<u;c+=1){var h=this._keyNames[c];this._analyze({key:h,value:this.options.getFn(d,h),record:d,index:s},{resultMap:i,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,i=e.key,r=e.arrayIndex,o=void 0===r?-1:r,a=e.value,s=e.record,d=e.index,c=t.tokenSearchers,u=void 0===c?[]:c,h=t.fullSearcher,p=t.resultMap,m=void 0===p?{}:p,g=t.results,f=void 0===g?[]:g;!function e(t,r,o,a){if(null!=r)if("string"==typeof r){var s=!1,d=-1,c=0;n._log("\nKey: ".concat(""===i?"--":i));var p=h.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var g=r.split(n.options.tokenSeparator),v=g.length,b=[],y=0,x=u.length;y<x;y+=1){var S=u[y];n._log('\nPattern: "'.concat(S.pattern,'"'));for(var C=!1,Z=0;Z<v;Z+=1){var w=g[Z],R=S.search(w),T={};R.isMatch?(T[w]=R.score,s=!0,C=!0,b.push(R.score)):(T[w]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(w,'", score: ').concat(T[w]))}C&&(c+=1)}d=b[0];for(var k=b.length,D=1;D<k;D+=1)d+=b[D];d/=k,n._log("Token score average:",d)}var $=p.score;d>-1&&($=($+d)/2),n._log("Score average:",$);var _=!n.options.tokenize||!n.options.matchAllTokens||c>=u.length;if(n._log("\nCheck Matches: ".concat(_)),(s||p.isMatch)&&_){var I={key:i,arrayIndex:t,value:r,score:$};n.options.includeMatches&&(I.matchedIndices=p.matchedIndices);var M=m[a];M?M.output.push(I):(m[a]={item:o,output:[I]},f.push(m[a]))}}else if(l(r))for(var F=0,E=r.length;F<E;F+=1)e(F,r[F],o,a)}(o,a,s,d)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,i=0,r=e.length;i<r;i+=1){for(var o=e[i],a=o.output,s=a.length,l=1,d=0;d<s;d+=1){var c=a[d],u=c.key,h=n?t[u]:1,p=0===c.score&&t&&t[u]>0?Number.EPSILON:c.score;l*=Math.pow(p,h)}o.score=l,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===i(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var i=0,r=n.length;i<r;i+=1){var o=n[i];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var l={item:s.item},d=0,c=r.length;d<c;d+=1)r[d](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=d},function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=n(2),o=n(3),a=n(6),s=function(){function e(t,n){var i=n.location,r=void 0===i?0:i,o=n.distance,s=void 0===o?100:o,l=n.threshold,d=void 0===l?.6:l,c=n.maxPatternLength,u=void 0===c?32:c,h=n.isCaseSensitive,p=void 0!==h&&h,m=n.tokenSeparator,g=void 0===m?/ +/g:m,f=n.findAllMatches,v=void 0!==f&&f,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.includeMatches,S=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:d,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:g,findAllMatches:v,includeMatches:S,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,i=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return i&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,d=s.tokenSeparator;if(this.pattern.length>l)return r(e,this.pattern,d);var c=this.options,u=c.location,h=c.distance,p=c.threshold,m=c.findAllMatches,g=c.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:u,distance:h,threshold:p,findAllMatches:m,minMatchCharLength:g,includeMatches:i})}}])&&i(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(i,"|")),o=e.match(r),a=!!o,s=[];if(a)for(var l=0,d=o.length;l<d;l+=1){var c=o[l];s.push([e.indexOf(c),c.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var i=n(4),r=n(5);e.exports=function(e,t,n,o){for(var a=o.location,s=void 0===a?0:a,l=o.distance,d=void 0===l?100:l,c=o.threshold,u=void 0===c?.6:c,h=o.findAllMatches,p=void 0!==h&&h,m=o.minMatchCharLength,g=void 0===m?1:m,f=o.includeMatches,v=void 0!==f&&f,b=s,y=e.length,x=u,S=e.indexOf(t,b),C=t.length,Z=[],w=0;w<y;w+=1)Z[w]=0;if(-1!==S){var R=i(t,{errors:0,currentLocation:S,expectedLocation:b,distance:d});if(x=Math.min(R,x),-1!==(S=e.lastIndexOf(t,b+C))){var T=i(t,{errors:0,currentLocation:S,expectedLocation:b,distance:d});x=Math.min(T,x)}}S=-1;for(var k=[],D=1,$=C+y,_=1<<(C<=31?C-1:30),I=0;I<C;I+=1){for(var M=0,F=$;M<F;)i(t,{errors:I,currentLocation:b+F,expectedLocation:b,distance:d})<=x?M=F:$=F,F=Math.floor(($-M)/2+M);$=F;var E=Math.max(1,b-F+1),O=p?y:Math.min(b+F,y)+C,z=Array(O+2);z[O+1]=(1<<I)-1;for(var U=O;U>=E;U-=1){var P=U-1,N=n[e.charAt(P)];if(N&&(Z[P]=1),z[U]=(z[U+1]<<1|1)&N,0!==I&&(z[U]|=(k[U+1]|k[U])<<1|1|k[U+1]),z[U]&_&&(D=i(t,{errors:I,currentLocation:P,expectedLocation:b,distance:d}))<=x){if(x=D,(S=P)<=b)break;E=Math.max(1,2*b-S)}}if(i(t,{errors:I+1,currentLocation:b,expectedLocation:b,distance:d})>x)break;k=z}var A={isMatch:S>=0,score:0===D?.001:D};return v&&(A.matchedIndices=r(Z,g)),A}},function(e,t){e.exports=function(e,t){var n=t.errors,i=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,d=void 0===l?100:l,c=i/e.length,u=Math.abs(s-o);return d?c+u/d:u?1:c}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=-1,r=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===i?i=o:s||-1===i||((r=o-1)-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,i=0;i<n;i+=1)t[e.charAt(i)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},i=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),d=s,c=null;-1!==l&&(d=s.slice(0,l),c=s.slice(l+1));var u=t[d];if(null!=u)if(c||!r(u)&&!o(u))if(n(u))for(var h=0,p=u.length;h<p;h+=1)e(u[h],c);else c&&e(u,c);else a.push(i(u))}else a.push(t)}(e,t),a},isArray:n,isString:r,isNum:o,toString:i}}])},15208:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(67294);const r=e=>{const t=(0,i.useRef)(!1);(0,i.useEffect)((()=>{t.current?e():t.current=!0}),[e])}},78243:(e,t,n)=>{"use strict";n.d(t,{W:()=>r});var i=n(67294);function r(e){const t=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1),o=e=>{const[t]=e;r(t.intersectionRatio<1)};return(0,i.useEffect)((()=>{const n=new IntersectionObserver(o,e),i=t.current;return i&&n.observe(i),()=>{i&&n.unobserve(i)}}),[t,e]),[t,n]}},51794:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294);const r=(e,t)=>{var n,r;const[o,a]=(0,i.useState)(0),[s,l]=(0,i.useState)(!1),d=(0,i.useRef)({scrollWidth:0,parentElementWidth:0,plusRefWidth:0});return(0,i.useLayoutEffect)((()=>{var n;const i=e.current,r=null==t?void 0:t.current;if(!i)return;const{scrollWidth:o,clientWidth:s,childNodes:c}=i,u=d.current,h=(null==(n=i.parentElement)?void 0:n.clientWidth)||0,p=(null==r?void 0:r.offsetWidth)||0;if(d.current={scrollWidth:o,parentElementWidth:h,plusRefWidth:p},u.parentElementWidth!==h||u.scrollWidth!==o||u.plusRefWidth!==p)if(o>s){const e=6,t=(null==r?void 0:r.offsetWidth)||0,n=s-e,i=c.length;let o=0,d=0;for(let r=0;r<i;r+=1)n-e-o-t<=0&&(d+=1),o+=c[r].offsetWidth;i>1&&d?(l(!0),a(d)):(l(!1),a(1))}else l(!1),a(0)}),[null==(n=e.current)?void 0:n.offsetWidth,null==(r=e.current)?void 0:r.clientWidth,e]),[o,s]}},82607:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var i=n(73126),r=(n(67294),n(51995)),o=n(62529),a=n(11965);const s=(0,r.iK)((e=>{let{textColor:t,color:n,text:r,...s}=e;return(0,a.tZ)(o.Z,(0,i.Z)({text:r,color:r?n:void 0},s))}))`
  & > sup {
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    background: ${e=>{let{theme:t,color:n}=e;return n||t.colors.primary.base}};
    color: ${e=>{let{theme:t,textColor:n}=e;return n||t.colors.grayscale.light5}};
  }
`},42074:(e,t,n)=>{"use strict";n.d(t,{P:()=>c});var i=n(73126),r=(n(67294),n(4715)),o=n(51995),a=n(21804),s=n.n(a),l=n(11965);const d=o.iK.div`
  .ant-btn-group {
    button.ant-btn {
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary.dark1}};
      border-color: transparent;
      color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
      font-size: 12px;
      line-height: 13px;
      outline: none;
      text-transform: uppercase;
      &:first-of-type {
        border-radius: ${e=>{let{theme:t}=e;return`${t.gridUnit}px 0 0 ${t.gridUnit}px`}};
        margin: 0;
        width: 120px;
      }

      &:disabled {
        background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
        color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
      }
      &:nth-of-type(2) {
        margin: 0;
        border-radius: ${e=>{let{theme:t}=e;return`0 ${t.gridUnit}px ${t.gridUnit}px 0`}};
        width: ${e=>{let{theme:t}=e;return 9*t.gridUnit}}px;
        &:before,
        &:hover:before {
          border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
          content: '';
          display: block;
          height: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
          margin: 0;
          position: absolute;
          width: ${e=>{let{theme:t}=e;return.25*t.gridUnit}}px;
        }

        &:disabled:before {
          border-left: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
        }
      }
    }
  }
`,c=e=>{let{overlay:t,tooltip:n,placement:o,...a}=e;const c=function(e){return void 0===e&&(e={}),(0,l.tZ)(d,null,(0,l.tZ)(r.Gj.Button,(0,i.Z)({overlay:t},a,e)))};return n?c({buttonsRender:e=>{let[t,i]=e;return[(0,l.tZ)(r._e,{placement:o,id:`${s()(n)}-tooltip`,title:n},t),i]}}):c()}},38270:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var i=n(73126),r=n(67294),o=n(73727),a=n(94184),s=n.n(a),l=n(51995),d=n(61988),c=n(11965),u=n(58593),h=n(79789);const p=(0,l.iK)(h.Z)`
  vertical-align: middle;
`;function m(e){let{canEdit:t=!1,editing:n=!1,extraClasses:a,multiLine:l=!1,noPermitTooltip:h,onSaveTitle:m,showTooltip:g=!0,style:f,title:v="",defaultTitle:b="",placeholder:y="",certifiedBy:x,certificationDetails:S,url:C,...Z}=e;const[w,R]=(0,r.useState)(n),[T,k]=(0,r.useState)(v),[D,$]=(0,r.useState)(v),[_,I]=(0,r.useState)(null),M=(0,r.useRef)();function F(){if(!t||w)return;const e=M.current?M.current.getBoundingClientRect():null;R(!0),I(e)}function E(){const e=T.trim();t&&(R(!1),e.length?(D!==e&&$(e),v!==e&&m(e)):k(D))}function O(e){" "===e.key&&e.stopPropagation(),"Enter"===e.key&&(e.preventDefault(),E())}function z(e){t&&k(e.target.value)}function U(e){"Enter"===e.key&&(e.preventDefault(),E())}let P;(0,r.useEffect)((()=>{v!==T&&($(T),k(v))}),[v]),(0,r.useEffect)((()=>{if(w&&(M.current.focus(),M.current.setSelectionRange)){const{length:e}=M.current.value;M.current.setSelectionRange(e,e),M.current.scrollLeft=M.current.scrollWidth,M.current.scrollTop=M.current.scrollHeight}}),[w]),P=T,w||T||(P=b||v);const N=w&&_?{height:`${_.height}px`}:void 0;let A=l&&w?(0,c.tZ)("textarea",{ref:M,value:P,className:v?void 0:"text-muted",onKeyDown:O,onChange:z,onBlur:E,onClick:F,onKeyPress:U,placeholder:y,style:N}):(0,c.tZ)("input",{ref:M,type:w?"text":"button",value:P,className:v?void 0:"text-muted",onKeyDown:O,onChange:z,onBlur:E,onClick:F,onKeyPress:U,placeholder:y});return g&&!w&&(A=(0,c.tZ)(u.u,{id:"title-tooltip",title:t?(0,d.t)("Click to edit"):h||(0,d.t)("You don't have the rights to alter this title.")},A)),t||(A=C?(0,c.tZ)(o.rU,{to:C,css:e=>c.iv`
          color: ${e.colors.grayscale.dark1};
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        `},P):(0,c.tZ)("span",null,P)),(0,c.tZ)("span",(0,i.Z)({className:s()("editable-title",a,t&&"editable-title--editable",w&&"editable-title--editing"),style:f},Z),x&&(0,c.tZ)(r.Fragment,null,(0,c.tZ)(p,{certifiedBy:x,details:S,size:"xl"})," "),A)}},85931:(e,t,n)=>{"use strict";n.d(t,{m:()=>s});var i=n(73126),r=(n(67294),n(73727)),o=n(23525),a=n(11965);const s=e=>{let{to:t,component:n,replace:s,innerRef:l,children:d,...c}=e;return"string"==typeof t&&(0,o.TO)(t)?(0,a.tZ)("a",(0,i.Z)({href:(0,o.en)(t)},c),d):(0,a.tZ)(r.rU,(0,i.Z)({to:t,component:n,replace:s,innerRef:l},c),d)}},80663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(67294),r=n(29119),o=n(51995),a=n(61337),s=n(11965);const l=o.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=e=>{let{id:t,initialWidth:n,minWidth:o,maxWidth:d,enable:c,children:u}=e;const[h,p]=function(e,t){const n=(0,i.useRef)(),[r,o]=(0,i.useState)(t);return(0,i.useEffect)((()=>{var t;n.current=null!=(t=n.current)?t:(0,a.rV)(a.dR.common__resizable_sidebar_widths,{}),n.current[e]&&o(n.current[e])}),[e]),[r,function(t){o(t),(0,a.LS)(a.dR.common__resizable_sidebar_widths,{...n.current,[e]:t})}]}(t,n);return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(l,null,(0,s.tZ)(r.e,{enable:{right:c},handleClasses:{right:"sidebar-resizer"},size:{width:h,height:"100%"},minWidth:o,maxWidth:d,onResizeStop:(e,t,n,i)=>p(h+i.width)})),u(h))}},55455:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>tp});var i=n(14890),r=n(28216),o=n(67294),a=n(45697),s=n.n(a),l=n(61988),d=n(93185),c=n(14278),u=n(38703),h=n(20292),p=n(81255);function m(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===p.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var g=n(94184),f=n.n(g),v=n(51995),b=n(11965),y=n(25130),x=n(78243),S=n(57902),C=n(49484),Z=n(71262),w=n(38523),R=n(35937),T=n.n(R),k=n(23279),D=n.n(k),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},I=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},M=void 0;M="undefined"!=typeof window?window:"undefined"!=typeof self?self:n.g;var F=null,E=null,O=M.clearTimeout,z=M.setTimeout,U=M.cancelAnimationFrame||M.mozCancelAnimationFrame||M.webkitCancelAnimationFrame,P=M.requestAnimationFrame||M.mozRequestAnimationFrame||M.webkitRequestAnimationFrame;null==U||null==P?(F=O,E=function(e){return z(e,20)}):(F=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e,2),n=t[0],i=t[1];U(n),O(i)},E=function(e){var t=P((function(){O(n),e()})),n=z((function(){U(t),e()}),20);return[t,n]});var N=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=i=I(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var e=i.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(i._parentNode){var o=i._parentNode.offsetHeight||0,a=i._parentNode.offsetWidth||0,s=window.getComputedStyle(i._parentNode)||{},l=parseInt(s.paddingLeft,10)||0,d=parseInt(s.paddingRight,10)||0,c=parseInt(s.paddingTop,10)||0,u=parseInt(s.paddingBottom,10)||0,h=o-c-u,p=a-l-d;(!t&&i.state.height!==h||!n&&i.state.width!==p)&&(i.setState({height:o-c-u,width:a-l-d}),r({height:o,width:a}))}},i._setRef=function(e){i._autoSizer=e},I(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),$(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=function(e){var t=void 0,n=void 0,i=void 0,r=void 0,o=void 0,a=void 0,s=void 0,l="undefined"!=typeof document&&document.attachEvent;if(!l){a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,i=t.lastElementChild,r=n.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},o=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},s=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&F(this.__resizeRAF__),this.__resizeRAF__=E((function(){o(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}};var d=!1,c="";i="animationstart";var u="Webkit Moz O ms".split(" "),h="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),p=document.createElement("fakeelement");if(void 0!==p.style.animationName&&(d=!0),!1===d)for(var m=0;m<u.length;m++)if(void 0!==p.style[u[m]+"AnimationName"]){c="-"+u[m].toLowerCase()+"-",i=h[m],d=!0;break}t="@"+c+"keyframes "+(n="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",r=c+"animation: 1ms "+n+"; "}return{addResizeListener:function(o,d){if(l)o.attachEvent("onresize",d);else{if(!o.__resizeTriggers__){var c=o.ownerDocument,u=M.getComputedStyle(o);u&&"static"===u.position&&(o.style.position="relative"),function(n){if(!n.getElementById("detectElementResize")){var i=(t||"")+".resize-triggers { "+(r||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=n.head||n.getElementsByTagName("head")[0],a=n.createElement("style");a.id="detectElementResize",a.type="text/css",null!=e&&a.setAttribute("nonce",e),a.styleSheet?a.styleSheet.cssText=i:a.appendChild(n.createTextNode(i)),o.appendChild(a)}}(c),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=c.createElement("div")).className="resize-triggers";var h=c.createElement("div");h.className="expand-trigger",h.appendChild(c.createElement("div"));var p=c.createElement("div");p.className="contract-trigger",o.__resizeTriggers__.appendChild(h),o.__resizeTriggers__.appendChild(p),o.appendChild(o.__resizeTriggers__),a(o),o.addEventListener("scroll",s,!0),i&&(o.__resizeTriggers__.__animationListener__=function(e){e.animationName===n&&a(o)},o.__resizeTriggers__.addEventListener(i,o.__resizeTriggers__.__animationListener__))}o.__resizeListeners__.push(d)}},removeResizeListener:function(e,t){if(l)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",s,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(i,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,i=e.disableHeight,r=e.disableWidth,a=e.style,s=this.state,l=s.height,d=s.width,c={overflow:"visible"},u={},h=!1;return i||(0===l&&(h=!0),c.height=0,u.height=l),r||(0===d&&(h=!0),c.width=0,u.width=d),(0,o.createElement)("div",{className:n,ref:this._setRef,style:_({},c,a)},!h&&t(u))}}]),t}(o.PureComponent);N.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};const A=N;var q=n(74061),L=n(24903),j=n(9875),V=n(4715),K=n(35932),B=n(70707),H=n(61337),W=n(80621),Y=n(2275),J=n(87253),X=n(9882),G=n(73126),Q=n(4144),ee=n(58593),te=n(85931);const ne=e=>{let{children:t,tooltipText:n,...i}=e;const[r,a]=o.useState(!1),s=(0,o.useRef)(null);(0,o.useEffect)((()=>{a(!!s.current&&s.current.scrollWidth>s.current.clientWidth)}),[t]);const l=(0,b.tZ)("div",(0,G.Z)({},i,{ref:s,css:b.iv`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      `}),t);return r?(0,b.tZ)(ee.u,{title:n||t},l):l},ie=e=>{let{label:t,value:n,tooltipText:i}=e;return(0,b.tZ)("div",{css:e=>b.iv`
      font-size: ${e.typography.sizes.s}px;
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: ${e.gridUnit}px;
      }
    `},(0,b.tZ)("span",{css:e=>b.iv`
        margin-right: ${4*e.gridUnit}px;
        color: ${e.colors.grayscale.base};
      `},t),(0,b.tZ)("span",{css:b.iv`
        min-width: 0;
      `},(0,b.tZ)(ne,{tooltipText:i},n)))},re=e=>{let{showThumbnails:t,placeholderRef:n}=e;return(0,b.tZ)("div",{ref:n,css:e=>b.iv`
      /* Display styles */
      border: 1px solid ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit}px;
      color: ${e.colors.primary.dark1};
      font-size: ${e.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${e.gridUnit/2}px ${2*e.gridUnit}px;
      margin-left: ${4*e.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      visibility: hidden;
      position: ${t?"absolute":"unset"};
      top: ${t?"72px":"unset"};
      left: ${t?"84px":"unset"};
    `},(0,l.t)("Added"))},oe=e=>{let{placeholder:t}=e;return(0,b.tZ)("div",{css:e=>b.iv`
      /* Display styles */
      border: 1px solid ${e.colors.primary.dark1};
      border-radius: ${e.gridUnit}px;
      color: ${e.colors.primary.dark1};
      font-size: ${e.typography.sizes.xs}px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      padding: ${e.gridUnit/2}px ${2*e.gridUnit}px;
      margin-left: ${4*e.gridUnit}px;
      pointer-events: none;

      /* Position styles */
      display: ${t?"unset":"none"};
      position: absolute;
      top: ${t?`${t.offsetTop}px`:"unset"};
      left: ${t?t.offsetLeft-2+"px":"unset"};
    `},(0,l.t)("Added"))},ae=e=>{let{datasourceUrl:t,datasourceName:n="-",innerRef:i,isSelected:r=!1,lastModified:a,sliceName:s,style:u={},thumbnailUrl:h,visType:p}=e;const m=(0,d.cr)(d.TT.THUMBNAILS),[g,f]=(0,o.useState)(),{mountedPluginMetadata:v}=(0,c.gp)(),y=(0,o.useMemo)((()=>{var e;return(null==(e=v[p])?void 0:e.name)||(0,l.t)("Unknown type")}),[v,p]);return(0,b.tZ)("div",{ref:i,style:u},(0,b.tZ)("div",{css:e=>b.iv`
          border: 1px solid ${e.colors.grayscale.light2};
          border-radius: ${e.gridUnit}px;
          background: ${e.colors.grayscale.light5};
          padding: ${4*e.gridUnit}px;
          margin: 0 ${3*e.gridUnit}px ${3*e.gridUnit}px
            ${3*e.gridUnit}px;
          position: relative;
          cursor: ${r?"not-allowed":"move"};
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.3;
          color: ${e.colors.grayscale.dark1};

          &:hover {
            background: ${e.colors.grayscale.light4};
          }

          opacity: ${r?.4:"unset"};
        `},(0,b.tZ)("div",{css:b.iv`
            display: flex;
          `},m?(0,b.tZ)("div",{css:b.iv`
                width: 146px;
                height: 82px;
                flex-shrink: 0;
                margin-right: 16px;
              `},(0,b.tZ)(Q.Z,{src:h||"",fallback:"/static/assets/images/chart-card-fallback.svg",position:"top"}),r&&m?(0,b.tZ)(re,{placeholderRef:f,showThumbnails:m}):null):null,(0,b.tZ)("div",{css:b.iv`
              flex-grow: 1;
              min-width: 0;
            `},(0,b.tZ)("div",{css:e=>b.iv`
                margin-bottom: ${2*e.gridUnit}px;
                font-weight: ${e.typography.weights.bold};
                display: flex;
                justify-content: space-between;
                align-items: center;
              `},(0,b.tZ)(ne,null,s),r&&!m?(0,b.tZ)(re,{placeholderRef:f}):null),(0,b.tZ)("div",{css:b.iv`
                display: flex;
                flex-direction: column;
              `},(0,b.tZ)(ie,{label:(0,l.t)("Viz type"),value:y}),(0,b.tZ)(ie,{label:(0,l.t)("Dataset"),value:t?(0,b.tZ)(te.m,{to:t},n):n,tooltipText:n}),(0,b.tZ)(ie,{label:(0,l.t)("Modified"),value:a}))))),(0,b.tZ)(oe,{placeholder:g}))};var se=n(84785);const le={position:"fixed",pointerEvents:"none",top:0,left:0,zIndex:101,width:344},de={dragItem:s().shape({index:s().number.isRequired}),slices:s().arrayOf(Y.Rw),isDragging:s().bool.isRequired,currentOffset:s().shape({x:s().number.isRequired,y:s().number.isRequired})};function ce(e){let{dragItem:t,slices:n,isDragging:i,currentOffset:r}=e;if(!(i&&r&&t&&n))return null;const o=n[t.index];return o&&t.parentType===p.F0&&t.type===p.dW?(0,b.tZ)(ae,{style:{...le,transform:`translate(${r.x}px, ${r.y}px)`},sliceName:o.slice_name,lastModified:o.changed_on_humanized,visType:o.viz_type,datasourceUrl:o.datasource_url,datasourceName:o.datasource_name}):null}ce.propTypes=de,ce.defaultProps={currentOffset:null,dragItem:null,slices:null};const ue=(0,se.DragLayer)((e=>({dragItem:e.getItem(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})))(ce);var he,pe=n(23493),me=n.n(pe);const ge=W.Mu+1,fe=W.Mu+3,ve=W.Mu+4,be=W.Mu+5,ye={[p.U0]:{[p.yR]:W.Mu,[p.BG]:W.Mu},[p.BG]:{[p.dW]:ge,[p.t]:ge,[p.xh]:ge,[p.BA]:ge,[p.hE]:ge,[p.Nc]:ge,[p.Os]:ge,[p.yR]:ge},[p.Os]:{[p.dW]:ve,[p.t]:ve,[p.xh]:ve,[p.BA]:ve},[p.yR]:{[p.gn]:fe},[p.gn]:{[p.dW]:be,[p.t]:be,[p.xh]:be,[p.BA]:fe,[p.hE]:be,[p.Nc]:be,[p.Os]:fe,[p.yR]:fe},[p.BA]:{[p.dW]:be,[p.Nc]:be,[p.xh]:be,[p.Os]:fe,[p.hE]:fe,[p.yR]:fe},[p.dW]:{},[p.t]:{},[p.hE]:{},[p.Nc]:{},[p.xh]:{}};function xe(e){var t;const{parentType:n,childType:i,parentDepth:r}=e;if(!n||!i||"number"!=typeof r)return!1;const o=null==(t=ye[n])?void 0:t[i];return"number"==typeof o&&r<=o}const Se="DROP_TOP",Ce="DROP_RIGHT",Ze="DROP_BOTTOM",we="DROP_LEFT",Re=20,Te=20;let ke,De={};function $e(e,t){const{depth:n,parentComponent:i,component:r,orientation:o,isDraggingOverShallow:a}=t.props,s=e.getItem();if(!s||s.id===r.id)return null;const l=xe({parentType:r.type,parentDepth:n,childType:s.type}),d=i&&i.type,c=xe({parentType:d,parentDepth:n+(d===p.gn||d===p.yR?0:-1),childType:s.type});if(!l&&!c)return null;const u=(r.children||[]).length>0,h="row"===o?"vertical":"horizontal",m="row"===o?"horizontal":"vertical";if(a&&l&&!c)return"vertical"===h?u?Ce:we:u?Ze:Se;const g=t.ref.getBoundingClientRect(),f=e.getClientOffset()||De[r.id];if(!f||!g)return null;De[r.id]=f;const v=Math.abs(f.y-g.top),b=Math.abs(f.y-g.bottom),y=Math.abs(f.x-g.left),x=Math.abs(f.x-g.right);if(!a&&[v,b,y,x].every((e=>e>Te)))return null;if(c&&!l){if("vertical"===m){const e=g.left+(g.right-g.left)/2;return f.x<e?we:Ce}const e=g.top+(g.bottom-g.top)/2;return f.y<e?Se:Ze}if(c&&l){if("vertical"===m){if(y<Re)return we;if(x<Re)return Ce}else{if(v<Re)return Se;if(b<Re)return Ze}return"vertical"===h?u?Ce:we:u?Ze:Se}return null}const _e=me()((function(e,t,n){var i,r,o;if(!n.mounted)return;const a=$e(t,n);!function(e){const t="SCROLL_TOP"===e&&!ke&&0!==document.documentElement.scrollTop,n=ke&&("SCROLL_TOP"!==e||0===document.documentElement.scrollTop);t?ke=setInterval((()=>{if(0===document.documentElement.scrollTop)return clearInterval(ke),void(ke=null);let e=document.documentElement.scrollTop-120;e<0&&(e=0),window.scroll({top:e,behavior:"smooth"})}),50):n&&(clearInterval(ke),ke=null)}((null==n||null==(i=n.props)||null==(r=i.component)?void 0:r.type)===p.U0?"SCROLL_TOP":null),a?(null==n||null==(o=n.props)||o.onHover(),n.setState((()=>({dropIndicator:a})))):n.setState((()=>({dropIndicator:null})))}),100);const Ie="DRAG_DROPPABLE",Me=[Ie,{canDrag:e=>!e.disableDragDrop,beginDrag(e){const{component:t,index:n,parentComponent:i={}}=e;return{type:t.type,id:t.id,meta:t.meta,index:n,parentId:i.id,parentType:i.type}}},function(e,t){return{dragSourceRef:e.dragSource(),dragPreviewRef:e.dragPreview(),isDragging:t.isDragging()}}],Fe=[Ie,{canDrop:e=>!e.disableDragDrop,hover(e,t,n){n&&n.mounted&&_e(e,t,n)},drop(e,t,n){const i=t.getDropResult();if((!i||!i.destination)&&n.mounted)return function(e,t,n){if(!n.mounted)return;n.setState((()=>({dropIndicator:null})));const i=$e(t,n);if(!i)return;const{parentComponent:r,component:o,index:a,onDrop:s,orientation:l}=n.props,d=t.getItem(),c="row"===l&&(i===Se||i===Ze)||"column"===l&&(i===we||i===Ce)?"sibling":"child",u={source:{id:d.parentId,type:d.parentType,index:d.index},dragging:{id:d.id,type:d.type,meta:d.meta}};if("child"===c)u.destination={id:o.id,type:o.type,index:o.children.length};else{let e=r&&d.parentId===r.id&&d.index<a?a-1:a;i!==Ze&&i!==Ce||(e+=1),u.destination={id:r.id,type:r.type,index:e}}return s(u),De={},u}(0,t,n)}},function(e,t){return{droppableRef:e.dropTarget(),isDraggingOver:t.isOver(),isDraggingOverShallow:t.isOver({shallow:!0})}}],Ee={children:s().func,className:s().string,component:Y.cP,parentComponent:Y.cP,depth:s().number.isRequired,disableDragDrop:s().bool,orientation:s().oneOf(["row","column"]),index:s().number.isRequired,style:s().object,onDrop:s().func,onHover:s().func,editMode:s().bool,useEmptyDragPreview:s().bool,isDragging:s().bool,isDraggingOver:s().bool,isDraggingOverShallow:s().bool,droppableRef:s().func,dragSourceRef:s().func,dragPreviewRef:s().func},Oe={className:null,style:null,parentComponent:null,disableDragDrop:!1,children(){},onDrop(){},onHover(){},orientation:"row",useEmptyDragPreview:!1,isDragging:!1,isDraggingOver:!1,isDraggingOverShallow:!1,droppableRef(){},dragSourceRef(){},dragPreviewRef(){}},ze=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    position: relative;

    &.dragdroppable--dragging {
      opacity: 0.2;
    }

    &.dragdroppable-row {
      width: 100%;
    }

    &.dragdroppable-column .resizable-container span div {
      z-index: 10;
    }

    & {
      .drop-indicator {
        display: block;
        background-color: ${t.colors.primary.base};
        position: absolute;
        z-index: 10;
      }

      .drop-indicator--top {
        top: 0;
        left: 0;
        height: ${t.gridUnit}px;
        width: 100%;
        min-width: ${4*t.gridUnit}px;
      }

      .drop-indicator--bottom {
        top: 100%;
        left: 0;
        height: ${t.gridUnit}px;
        width: 100%;
        min-width: ${4*t.gridUnit}px;
      }

      .drop-indicator--right {
        top: 0;
        left: 100%;
        height: 100%;
        width: ${t.gridUnit}px;
        min-height: ${4*t.gridUnit}px;
      }

      .drop-indicator--left {
        top: 0;
        left: 0;
        height: 100%;
        width: ${t.gridUnit}px;
        min-height: ${4*t.gridUnit}px;
      }
    }
  `}};
`;class Ue extends o.PureComponent{constructor(e){super(e),this.state={dropIndicator:null},this.setRef=this.setRef.bind(this)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}setRef(e){var t,n;this.ref=e,this.props.useEmptyDragPreview?this.props.dragPreviewRef((he||((he=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),he),{captureDraggingState:!0}):this.props.dragPreviewRef(e),null==(t=(n=this.props).droppableRef)||t.call(n,e)}render(){const{children:e,className:t,orientation:n,dragSourceRef:i,disableDragDrop:r,isDragging:o,isDraggingOver:a,style:s,editMode:l}=this.props,{dropIndicator:d}=this.state,c=a&&d&&!r?{className:f()("drop-indicator",d===Se&&"drop-indicator--top",d===Ze&&"drop-indicator--bottom",d===we&&"drop-indicator--left",d===Ce&&"drop-indicator--right")}:null,u=l?{dragSourceRef:i,dropIndicatorProps:c}:{};return(0,b.tZ)(ze,{style:s,ref:this.setRef,className:f()("dragdroppable","row"===n&&"dragdroppable-row","column"===n&&"dragdroppable-column",o&&"dragdroppable--dragging",t)},e(u))}}Ue.propTypes=Ee,Ue.defaultProps=Oe;const Pe=(0,se.DragSource)(...Me)((0,se.DropTarget)(...Fe)(Ue)),Ne={fetchSlices:s().func.isRequired,updateSlices:s().func.isRequired,isLoading:s().bool.isRequired,slices:s().objectOf(Y.Rw).isRequired,lastUpdated:s().number.isRequired,errorMessage:s().string,userId:s().number.isRequired,selectedSliceIds:s().arrayOf(s().number),editMode:s().bool,dashboardId:s().number},Ae=["slice_name","viz_type","datasource_name"],qe={slice_name:(0,l.t)("name"),viz_type:(0,l.t)("viz type"),datasource_name:(0,l.t)("dataset"),changed_on:(0,l.t)("recent")},Le=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    padding:\n      ${4*t.gridUnit}px\n      ${3*t.gridUnit}px\n      ${4*t.gridUnit}px\n      ${3*t.gridUnit}px;\n  `}}
`,je=(0,v.iK)(V.Ph)`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  min-width: 150px;
`,Ve=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    justify-content: flex-end;
    padding-right: ${2*t.gridUnit}px;
  `}}
`,Ke=(0,v.iK)(K.Z)`
  ${e=>{let{theme:t}=e;return b.iv`
    height: auto;
    & > .anticon + span {
      margin-left: 0;
    }
    & > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      padding-bottom: 1px;
      line-height: 0;
    }
  `}}
`,Be=v.iK.div`
  flex-grow: 1;
  min-height: 0;
`;class He extends o.Component{static sortByComparator(e){const t="changed_on"===e?-1:1;return(n,i)=>n[e]<i[e]?-1*t:n[e]>i[e]?1*t:0}constructor(e){super(e),this.handleChange=D()((e=>{this.searchUpdated(e),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),e,this.state.sortBy)}),300),this.state={filteredSlices:[],searchTerm:"",sortBy:"changed_on",selectedSliceIdsSet:new Set(e.selectedSliceIds),showOnlyMyCharts:(0,H.rV)(H.dR.dashboard__editor_show_only_my_charts,!0)},this.rowRenderer=this.rowRenderer.bind(this),this.searchUpdated=this.searchUpdated.bind(this),this.handleSelect=this.handleSelect.bind(this),this.userIdForFetch=this.userIdForFetch.bind(this),this.onShowOnlyMyCharts=this.onShowOnlyMyCharts.bind(this)}userIdForFetch(){return this.state.showOnlyMyCharts?this.props.userId:void 0}componentDidMount(){this.slicesRequest=this.props.fetchSlices(this.userIdForFetch())}UNSAFE_componentWillReceiveProps(e){const t={};e.lastUpdated!==this.props.lastUpdated&&(t.filteredSlices=this.getFilteredSortedSlices(e.slices,this.state.searchTerm,this.state.sortBy,this.state.showOnlyMyCharts)),e.selectedSliceIds!==this.props.selectedSliceIds&&(t.selectedSliceIdsSet=new Set(e.selectedSliceIds)),Object.keys(t).length&&this.setState(t)}componentWillUnmount(){const e=T()(this.props.slices,(e=>this.state.selectedSliceIdsSet.has(e.slice_id)));this.props.updateSlices(e),this.slicesRequest&&this.slicesRequest.abort&&this.slicesRequest.abort()}getFilteredSortedSlices(e,t,n,i){return Object.values(e).filter((e=>!i||e.owners&&e.owners.find((e=>e.id===this.props.userId))||e.created_by&&e.created_by.id===this.props.userId)).filter((0,L.cj)(t,Ae)).sort(He.sortByComparator(n))}searchUpdated(e){this.setState((t=>({searchTerm:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,e,t.sortBy,t.showOnlyMyCharts)})))}handleSelect(e){this.setState((t=>({sortBy:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,e,t.showOnlyMyCharts)}))),this.slicesRequest=this.props.fetchSlices(this.userIdForFetch(),this.state.searchTerm,e)}rowRenderer(e){let{key:t,index:n,style:i}=e;const{filteredSlices:r,selectedSliceIdsSet:o}=this.state,a=r[n],s=o.has(a.slice_id),l=p.dW,d=W.Jd,c={chartId:a.slice_id,sliceName:a.slice_name};return(0,b.tZ)(Pe,{key:t,component:{type:l,id:d,meta:c},parentComponent:{id:W.D0,type:p.F0},index:n,depth:0,disableDragDrop:s,editMode:this.props.editMode,useEmptyDragPreview:!0,style:{}},(e=>{let{dragSourceRef:t}=e;return(0,b.tZ)(ae,{innerRef:t,style:i,sliceName:a.slice_name,lastModified:a.changed_on_humanized,visType:a.viz_type,datasourceUrl:a.datasource_url,datasourceName:a.datasource_name,thumbnailUrl:a.thumbnail_url,isSelected:s})}))}onShowOnlyMyCharts(e){e||(this.slicesRequest=this.props.fetchSlices(void 0,this.state.searchTerm,this.state.sortBy)),this.setState((t=>({showOnlyMyCharts:e,filteredSlices:this.getFilteredSortedSlices(this.props.slices,t.searchTerm,t.sortBy,e)}))),(0,H.LS)(H.dR.dashboard__editor_show_only_my_charts,e)}render(){return(0,b.tZ)("div",{css:b.iv`
          height: 100%;
          display: flex;
          flex-direction: column;
        `},(0,b.tZ)(Ve,null,(0,b.tZ)(Ke,{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>window.open(`/chart/add?dashboard_id=${this.props.dashboardId}`,"_blank","noopener noreferrer")},(0,b.tZ)(B.Z.PlusSmall,null),(0,l.t)("Create new chart"))),(0,b.tZ)(Le,null,(0,b.tZ)(j.II,{placeholder:this.state.showOnlyMyCharts?(0,l.t)("Filter your charts"):(0,l.t)("Filter charts"),className:"search-input",onChange:e=>this.handleChange(e.target.value)}),(0,b.tZ)(je,{id:"slice-adder-sortby",value:this.state.sortBy,onChange:this.handleSelect,options:Object.entries(qe).map((e=>{let[t,n]=e;return{label:(0,l.t)("Sort by %s",n),value:t}})),placeholder:(0,l.t)("Sort by")})),(0,b.tZ)("div",{css:e=>b.iv`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: ${e.gridUnit}px;
            padding: 0 ${3*e.gridUnit}px ${4*e.gridUnit}px
              ${3*e.gridUnit}px;
          `},(0,b.tZ)(J.ZP,{onChange:this.onShowOnlyMyCharts,checked:this.state.showOnlyMyCharts}),(0,l.t)("Show only my charts"),(0,b.tZ)(X.V,{placement:"top",tooltip:(0,l.t)("You can choose to display all charts that you have access to or only the ones you own.\n              Your filter selection will be saved and remain active until you choose to change it.")})),this.props.isLoading&&(0,b.tZ)(u.Z,null),!this.props.isLoading&&this.state.filteredSlices.length>0&&(0,b.tZ)(Be,null,(0,b.tZ)(A,null,(e=>{let{height:t,width:n}=e;return(0,b.tZ)(q.t7,{width:n,height:t,itemCount:this.state.filteredSlices.length,itemSize:128,searchTerm:this.state.searchTerm,sortBy:this.state.sortBy,selectedSliceIds:this.props.selectedSliceIds},this.rowRenderer)}))),this.props.errorMessage&&(0,b.tZ)("div",{css:b.iv`
              padding: 16px;
            `},this.props.errorMessage),(0,b.tZ)(ue,{slices:this.state.filteredSlices}))}}He.propTypes=Ne,He.defaultProps={selectedSliceIds:[],editMode:!1,errorMessage:""};const We=He,Ye=(0,r.$j)((function(e,t){let{sliceEntities:n,dashboardInfo:i,dashboardState:r}=e;return{height:t.height,userId:+i.userId,dashboardId:i.id,selectedSliceIds:r.sliceIds,slices:n.slices,isLoading:n.isLoading,errorMessage:n.errorMessage,lastUpdated:n.lastUpdated,editMode:r.editMode}}),(function(e){return(0,i.DE)({fetchSlices:w.ex,updateSlices:w.Ff},e)}))(We),Je=e=>{let{registryKeys:t,registry:n}=e;return()=>t.map((e=>n[e]))},Xe=e=>{let{registryKeys:t,registry:n}=e;return e=>{t=t.filter((t=>t!==e)),delete n[e]}},Ge=e=>{let{registry:t}=e;return e=>t[e]},Qe=function(e){void 0===e&&(e=[]);const t={registry:{},registryKeys:[]},n=(e=>{let{registryKeys:t,registry:n}=e;return(e,i)=>{t.push(e),n[e]={key:e,metadata:i.metadata,Component:o.lazy(i.loadComponent)}}})(t);return e.forEach((e=>{let{key:t,item:i}=e;n(t,i)})),{set:n,get:Ge(t),delete:Xe(t),getAll:Je(t)}}([]),et={id:s().string.isRequired,type:s().string.isRequired,label:s().string.isRequired,className:s().string},tt=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${4*t.gridUnit}px;
    background: ${t.colors.grayscale.light5};
    cursor: move;

    &:not(.static):hover {
      background: ${t.colors.grayscale.light4};
    }
  `}}
`,nt=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    position: relative;
    background: ${t.colors.grayscale.light4};
    width: ${10*t.gridUnit}px;
    height: ${10*t.gridUnit}px;
    margin-right: ${4*t.gridUnit}px;
    border: 1px solid ${t.colors.grayscale.light5};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${t.colors.text.label};
    font-size: ${t.typography.sizes.xxl}px;

    &.fa-window-restore {
      font-size: ${t.typography.sizes.l}px;
    }

    &.fa-area-chart {
      font-size: ${t.typography.sizes.xl}px;
    }

    &.divider-placeholder:after {
      content: '';
      height: 2px;
      width: 100%;
      background-color: ${t.colors.grayscale.light2};
    }
  `}}
`;class it extends o.PureComponent{render(){const{label:e,id:t,type:n,className:i,meta:r}=this.props;return(0,b.tZ)(Pe,{component:{type:n,id:t,meta:r},parentComponent:{id:W.D0,type:p.F0},index:0,depth:0,editMode:!0},(t=>{let{dragSourceRef:n}=t;return(0,b.tZ)(tt,{ref:n},(0,b.tZ)(nt,{className:f()("new-component-placeholder",i)}),e)}))}}function rt(){return(0,b.tZ)(it,{id:W.Nb,type:p.BA,label:(0,l.t)("Column"),className:"fa fa-long-arrow-down"})}function ot(){return(0,b.tZ)(it,{id:W.ES,type:p.hE,label:(0,l.t)("Divider"),className:"divider-placeholder"})}function at(){return(0,b.tZ)(it,{id:W.Z1,type:p.Nc,label:(0,l.t)("Header"),className:"fa fa-header"})}function st(){return(0,b.tZ)(it,{id:W.vD,type:p.Os,label:(0,l.t)("Row"),className:"fa fa-long-arrow-right"})}function lt(){return(0,b.tZ)(it,{id:W.NN,type:p.yR,label:(0,l.t)("Tabs"),className:"fa fa-window-restore"})}function dt(){return(0,b.tZ)(it,{id:W.C3,type:p.xh,label:(0,l.t)("Text"),className:"fa fa-font"})}it.propTypes=et,it.defaultProps={className:null};const ct=e=>{let{componentKey:t,metadata:n}=e;return(0,b.tZ)(it,{id:W.gR,type:p.t,label:n.name,meta:{metadata:n,componentKey:t},className:`fa fa-${n.iconName}`})},ut=e=>{let{topOffset:t=0}=e;return(0,b.tZ)("div",{css:b.iv`
      position: sticky;
      right: 0;
      top: ${t}px;
      height: calc(100vh - ${t}px);
      width: ${374}px;
    `},(0,b.tZ)("div",{css:e=>b.iv`
        position: absolute;
        height: 100%;
        width: ${374}px;
        box-shadow: -4px 0 4px 0 ${(0,C.rgba)(e.colors.grayscale.dark2,.1)};
        background-color: ${e.colors.grayscale.light5};
      `},(0,b.tZ)(Z.ZP,{id:"tabs",css:e=>b.iv`
          line-height: inherit;
          margin-top: ${2*e.gridUnit}px;
          height: 100%;

          & .ant-tabs-content-holder {
            height: 100%;
            & .ant-tabs-content {
              height: 100%;
            }
          }
        `},(0,b.tZ)(Z.ZP.TabPane,{key:1,tab:(0,l.t)("Charts"),css:b.iv`
            height: 100%;
          `},(0,b.tZ)(Ye,null)),(0,b.tZ)(Z.ZP.TabPane,{key:2,tab:(0,l.t)("Layout elements")},(0,b.tZ)(lt,null),(0,b.tZ)(st,null),(0,b.tZ)(rt,null),(0,b.tZ)(at,null),(0,b.tZ)(dt,null),(0,b.tZ)(ot,null),Qe.getAll().map((e=>{let{key:t,metadata:n}=e;return(0,b.tZ)(ct,{metadata:n,componentKey:t})}))))))};var ht=n(74599),pt=n(30381),mt=n.n(pt),gt=n(75049),ft=n(78161),vt=n(3741),bt=n(12617),yt=n(9679),xt=n(41609),St=n.n(xt),Ct=n(31069),Zt=n(83862),wt=n(27600),Rt=n(10222),Tt=n(68492),kt=n(23525);const Dt=e=>{const{copyMenuItemTitle:t,emailMenuItemTitle:n,emailSubject:i,emailBody:o,addDangerToast:a,addSuccessToast:s,dashboardId:d,dashboardComponentId:c,...u}=e,{dataMask:h,activeTabs:p}=(0,r.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs})));async function m(){return(0,kt.Nm)({dashboardId:d,dataMask:h,activeTabs:p,anchor:c})}return(0,b.tZ)(Zt.Menu,{selectable:!1},(0,b.tZ)(Zt.Menu.Item,(0,G.Z)({key:"copy-url"},u),(0,b.tZ)("div",{onClick:async function(){try{await(0,Rt.Z)(m),s((0,l.t)("Copied to clipboard!"))}catch(e){Tt.Z.error(e),a((0,l.t)("Sorry, something went wrong. Try again later."))}},role:"button",tabIndex:0},t)),(0,b.tZ)(Zt.Menu.Item,(0,G.Z)({key:"share-by-email"},u),(0,b.tZ)("div",{onClick:async function(){try{const e=encodeURIComponent(`${o}${await m()}`),t=encodeURIComponent(i);window.location.href=`mailto:?Subject=${t}%20&Body=${e}`}catch(e){Tt.Z.error(e),a((0,l.t)("Sorry, something went wrong. Try again later."))}},role:"button",tabIndex:0},n)))};var $t=n(1304),_t=n(94670);const It=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    .css-editor-header {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      margin-bottom: ${2*t.gridUnit}px;\n\n      h5 {\n        margin-top: ${t.gridUnit}px;\n      }\n    }\n    .css-editor {\n      border: 1px solid ${t.colors.grayscale.light1};\n    }\n  `}}
`,Mt={initialCss:s().string,triggerNode:s().node.isRequired,onChange:s().func,templates:s().array};class Ft extends o.PureComponent{constructor(e){super(e),this.state={css:e.initialCss},this.changeCss=this.changeCss.bind(this),this.changeCssTemplate=this.changeCssTemplate.bind(this)}componentDidMount(){_t.ry.preload()}changeCss(e){this.setState({css:e},(()=>{this.props.onChange(e)}))}changeCssTemplate(e){let{key:t}=e;this.changeCss(t)}renderTemplateSelector(){if(this.props.templates){const e=(0,b.tZ)(Zt.Menu,{onClick:this.changeCssTemplate},this.props.templates.map((e=>(0,b.tZ)(Zt.Menu.Item,{key:e.css},e.label))));return(0,b.tZ)(V.Gj,{overlay:e,placement:"bottomRight"},(0,b.tZ)(K.Z,null,(0,l.t)("Load a CSS template")))}return null}render(){return(0,b.tZ)($t.Z,{triggerNode:this.props.triggerNode,modalTitle:(0,l.t)("CSS"),modalBody:(0,b.tZ)(It,null,(0,b.tZ)("div",{className:"css-editor-header"},(0,b.tZ)("h5",null,(0,l.t)("Live CSS editor")),this.renderTemplateSelector()),(0,b.tZ)(_t.ry,{className:"css-editor",minLines:12,maxLines:30,onChange:this.changeCss,height:"200px",width:"100%",editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,value:this.state.css||""}))})}}Ft.propTypes=Mt,Ft.defaultProps={initialCss:"",onChange:()=>{}};const Et=Ft;var Ot=n(81315),zt=n(29487),Ut=n(49238),Pt=n(85633);const Nt=(0,v.iK)($t.Z)`
  .ant-modal-body {
    overflow: visible;
  }
`,At=v.iK.div`
  margin-top: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`;class qt extends o.PureComponent{constructor(e){super(e),this.modalRef=void 0,this.modalRef=o.createRef(),this.state={refreshFrequency:e.refreshFrequency},this.handleFrequencyChange=this.handleFrequencyChange.bind(this),this.onSave=this.onSave.bind(this),this.onCancel=this.onCancel.bind(this)}onSave(){var e,t;this.props.onChange(this.state.refreshFrequency,this.props.editMode),null==(e=this.modalRef)||null==(t=e.current)||t.close(),this.props.addSuccessToast((0,l.t)("Refresh interval saved"))}onCancel(){var e,t;this.setState({refreshFrequency:this.props.refreshFrequency}),null==(e=this.modalRef)||null==(t=e.current)||t.close()}handleFrequencyChange(e){const{refreshIntervalOptions:t}=this.props;this.setState({refreshFrequency:e||t[0][0]})}render(){const{refreshLimit:e=0,refreshWarning:t,editMode:n,refreshIntervalOptions:i}=this.props,{refreshFrequency:r=0}=this.state,a=!!r&&!!t&&r<e;return(0,b.tZ)(Nt,{ref:this.modalRef,triggerNode:this.props.triggerNode,modalTitle:(0,l.t)("Refresh interval"),modalBody:(0,b.tZ)("div",null,(0,b.tZ)(Ut.lX,null,(0,l.t)("Refresh frequency")),(0,b.tZ)(Ot.Z,{ariaLabel:(0,l.t)("Refresh interval"),options:i.map((e=>({value:e[0],label:(0,l.t)(e[1])}))),value:r,onChange:this.handleFrequencyChange,sortComparator:(0,Pt.mj)("value")}),a&&(0,b.tZ)(At,null,(0,b.tZ)(zt.Z,{type:"warning",message:(0,b.tZ)(o.Fragment,null,(0,b.tZ)("div",null,t),(0,b.tZ)("br",null),(0,b.tZ)("strong",null,(0,l.t)("Are you sure you want to proceed?")))}))),modalFooter:(0,b.tZ)(o.Fragment,null,(0,b.tZ)(K.Z,{buttonStyle:"primary",buttonSize:"small",onClick:this.onSave},n?(0,l.t)("Save"):(0,l.t)("Save for this session")),(0,b.tZ)(K.Z,{onClick:this.onCancel,buttonSize:"small"},(0,l.t)("Cancel")))})}}qt.defaultProps={refreshLimit:0,refreshWarning:null};const Lt=qt;var jt=n(87183);const Vt={saveType:W.TN,colorNamespace:void 0,colorScheme:void 0,shouldPersistRefreshFrequency:!1};class Kt extends o.PureComponent{constructor(e){super(e),this.modal=void 0,this.onSave=void 0,this.state={saveType:e.saveType,newDashName:`${e.dashboardTitle} ${(0,l.t)("[copy]")}`,duplicateSlices:!1},this.handleSaveTypeChange=this.handleSaveTypeChange.bind(this),this.handleNameChange=this.handleNameChange.bind(this),this.saveDashboard=this.saveDashboard.bind(this),this.toggleDuplicateSlices=this.toggleDuplicateSlices.bind(this),this.onSave=this.props.onSave.bind(this),this.modal=o.createRef()}toggleDuplicateSlices(){this.setState((e=>({duplicateSlices:!e.duplicateSlices})))}handleSaveTypeChange(e){this.setState({saveType:e.target.value})}handleNameChange(e){this.setState({newDashName:e,saveType:W.kS})}saveDashboard(){var e;const{saveType:t,newDashName:n}=this.state,{dashboardTitle:i,dashboardInfo:r,layout:o,customCss:a,dashboardId:s,refreshFrequency:d,shouldPersistRefreshFrequency:c,lastModifiedTime:u}=this.props,h=c?d:null==(e=r.metadata)?void 0:e.refresh_frequency,p={certified_by:r.certified_by,certification_details:r.certification_details,css:a,dashboard_title:t===W.kS?n:i,duplicate_slices:this.state.duplicateSlices,last_modified_time:u,owners:r.owners,roles:r.roles,metadata:{...null==r?void 0:r.metadata,positions:o,refresh_frequency:h}};var m,g;t!==W.kS||n?(this.onSave(p,s,t).then((e=>{var n,i;t===W.kS&&null!=(n=e.json)&&null!=(i=n.result)&&i.id&&(window.location.href=`/superset/dashboard/${e.json.result.id}/`)})),null==(m=this.modal)||null==(g=m.current)||null==g.close||g.close()):this.props.addDangerToast((0,l.t)("You must pick a name for the new dashboard"))}render(){return(0,b.tZ)($t.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalTitle:(0,l.t)("Save dashboard"),modalBody:(0,b.tZ)("div",null,(0,b.tZ)(jt.Y,{value:W.TN,onChange:this.handleSaveTypeChange,checked:this.state.saveType===W.TN,disabled:!this.props.canOverwrite},(0,l.t)("Overwrite Dashboard [%s]",this.props.dashboardTitle)),(0,b.tZ)("hr",null),(0,b.tZ)(jt.Y,{value:W.kS,onChange:this.handleSaveTypeChange,checked:this.state.saveType===W.kS},(0,l.t)("Save as:")),(0,b.tZ)(j.II,{type:"text",placeholder:(0,l.t)("[dashboard name]"),value:this.state.newDashName,onFocus:e=>this.handleNameChange(e.target.value),onChange:e=>this.handleNameChange(e.target.value)}),(0,b.tZ)("div",{className:"m-l-25 m-t-5"},(0,b.tZ)(J.ZP,{checked:this.state.duplicateSlices,onChange:()=>this.toggleDuplicateSlices()}),(0,b.tZ)("span",{className:"m-l-5"},(0,l.t)("also copy (duplicate) charts")))),modalFooter:(0,b.tZ)("div",null,(0,b.tZ)(K.Z,{buttonStyle:"primary",onClick:this.saveDashboard},(0,l.t)("Save")))})}}Kt.defaultProps=Vt;const Bt=Kt;var Ht=n(3003),Wt=n(14505),Yt=n(87999),Jt=n(56727),Xt=n(11370);function Gt(e){let{pathname:t,filters:n={},hash:i="",standalone:r}=e;const o=new URLSearchParams(window.location.search);St()(n)||o.set(wt.KD.preselectFilters.name,JSON.stringify((0,Xt.Z)(n))),r?o.set(wt.KD.standalone.name,r.toString()):o.delete(wt.KD.standalone.name);const a=(0,kt.eY)(wt.KD.nativeFiltersKey);a&&o.set(wt.KD.nativeFiltersKey.name,a);const s=i?`#${i}`:"";return`${t}?${o.toString()}${s}`}var Qt=n(43399);const en={addSuccessToast:s().func.isRequired,addDangerToast:s().func.isRequired,dashboardInfo:s().object.isRequired,dashboardId:s().number,dashboardTitle:s().string,dataMask:s().object.isRequired,customCss:s().string,colorNamespace:s().string,colorScheme:s().string,onChange:s().func.isRequired,updateCss:s().func.isRequired,forceRefreshAllCharts:s().func.isRequired,refreshFrequency:s().number,shouldPersistRefreshFrequency:s().bool.isRequired,setRefreshFrequency:s().func.isRequired,startPeriodicRender:s().func.isRequired,editMode:s().bool.isRequired,userCanEdit:s().bool,userCanShare:s().bool,userCanSave:s().bool,userCanCurate:s().bool.isRequired,isLoading:s().bool.isRequired,layout:s().object.isRequired,expandedSlices:s().object,onSave:s().func.isRequired,showPropertiesModal:s().func.isRequired,manageEmbedded:s().func.isRequired,logEvent:s().func,refreshLimit:s().number,refreshWarning:s().string,lastModifiedTime:s().number.isRequired},tn="refresh-dashboard",nn="edit-properties",rn="download-as-image",on="toggle-fullscreen",an="manage-embedded";class sn extends o.PureComponent{static discardChanges(){window.location.reload()}constructor(e){super(e),this.state={css:e.customCss,cssTemplates:[],showReportSubMenu:null},this.changeCss=this.changeCss.bind(this),this.changeRefreshInterval=this.changeRefreshInterval.bind(this),this.handleMenuClick=this.handleMenuClick.bind(this),this.setShowReportSubMenu=this.setShowReportSubMenu.bind(this)}UNSAFE_componentWillMount(){Ct.Z.get({endpoint:"/csstemplateasyncmodelview/api/read"}).then((e=>{let{json:t}=e;const n=t.result.map((e=>({value:e.template_name,css:e.css,label:e.template_name})));this.setState({cssTemplates:n})})).catch((()=>{this.props.addDangerToast((0,l.t)("An error occurred while fetching available CSS templates"))}))}UNSAFE_componentWillReceiveProps(e){this.props.customCss!==e.customCss&&this.setState({css:e.customCss},(()=>{(0,Wt.Z)(e.customCss)}))}setShowReportSubMenu(e){this.setState({showReportSubMenu:e})}changeCss(e){this.props.onChange(),this.props.updateCss(e)}changeRefreshInterval(e,t){this.props.setRefreshFrequency(e,t),this.props.startPeriodicRender(1e3*e)}handleMenuClick(e){let{key:t,domEvent:n}=e;switch(t){case tn:this.props.forceRefreshAllCharts(),this.props.addSuccessToast((0,l.t)("Refreshing charts"));break;case nn:this.props.showPropertiesModal();break;case rn:{var i,r;const e=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");e.style.visibility="hidden",(0,Jt.Z)(".dashboard",this.props.dashboardTitle,!0)(n).then((()=>{e.style.visibility="visible"})),null==(i=(r=this.props).logEvent)||i.call(r,vt.n2);break}case on:{const e=Gt({pathname:window.location.pathname,filters:(0,Qt.De)(),hash:window.location.hash,standalone:!(0,kt.eY)(wt.KD.standalone)});window.location.replace(e);break}case an:this.props.manageEmbedded()}}render(){var e,t,n;const{dashboardTitle:i,dashboardId:r,dashboardInfo:a,refreshFrequency:s,shouldPersistRefreshFrequency:c,editMode:u,customCss:h,colorNamespace:p,colorScheme:m,layout:g,expandedSlices:f,onSave:v,userCanEdit:y,userCanShare:x,userCanSave:S,userCanCurate:C,isLoading:Z,refreshLimit:w,refreshWarning:R,lastModifiedTime:T,addSuccessToast:k,addDangerToast:D,setIsDropdownVisible:$,isDropdownVisible:_,...I}=this.props,M=`${(0,l.t)("Superset dashboard")} ${i}`,F=(0,l.t)("Check out this dashboard: "),E=Gt({pathname:window.location.pathname,filters:(0,Qt.De)(),hash:window.location.hash}),O=null==(e=a.common)||null==(t=e.conf)?void 0:t.DASHBOARD_AUTO_REFRESH_INTERVALS;return(0,b.tZ)(Zt.Menu,(0,G.Z)({selectable:!1},I),!u&&(0,b.tZ)(Zt.Menu.Item,{key:tn,disabled:Z,onClick:this.handleMenuClick},(0,l.t)("Refresh dashboard")),!u&&(0,b.tZ)(Zt.Menu.Item,{key:on,onClick:this.handleMenuClick},(0,kt.eY)(wt.KD.standalone)?(0,l.t)("Exit fullscreen"):(0,l.t)("Enter fullscreen")),u&&(0,b.tZ)(Zt.Menu.Item,{key:nn,onClick:this.handleMenuClick},(0,l.t)("Edit properties")),u&&(0,b.tZ)(Zt.Menu.Item,{key:"edit-css"},(0,b.tZ)(Et,{triggerNode:(0,b.tZ)("span",null,(0,l.t)("Edit CSS")),initialCss:this.state.css,templates:this.state.cssTemplates,onChange:this.changeCss})),(0,b.tZ)(Zt.Menu.Divider,null),S&&(0,b.tZ)(Zt.Menu.Item,{key:"save-modal"},(0,b.tZ)(Bt,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:r,dashboardTitle:i,dashboardInfo:a,saveType:W.kS,layout:g,expandedSlices:f,refreshFrequency:s,shouldPersistRefreshFrequency:c,lastModifiedTime:T,customCss:h,colorNamespace:p,colorScheme:m,onSave:v,triggerNode:(0,b.tZ)("span",null,(0,l.t)("Save as")),canOverwrite:y})),!u&&(0,b.tZ)(Zt.Menu.Item,{key:rn,onClick:this.handleMenuClick},(0,l.t)("Download as image")),x&&(0,b.tZ)(Zt.Menu.SubMenu,{key:"share-dashboard",disabled:Z,title:(0,l.t)("Share")},(0,b.tZ)(Dt,{url:E,copyMenuItemTitle:(0,l.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,l.t)("Share permalink by email"),emailSubject:M,emailBody:F,addSuccessToast:k,addDangerToast:D,dashboardId:r})),!u&&C&&(0,b.tZ)(Zt.Menu.Item,{key:an,onClick:this.handleMenuClick},(0,l.t)("Embed dashboard")),(0,b.tZ)(Zt.Menu.Divider,null),u?null:this.state.showReportSubMenu?(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Zt.Menu.SubMenu,{title:(0,l.t)("Manage email report")},(0,b.tZ)(Ht.Z,{dashboardId:a.id,setShowReportSubMenu:this.setShowReportSubMenu,showReportSubMenu:this.state.showReportSubMenu,setIsDropdownVisible:$,isDropdownVisible:_,useTextMenu:!0})),(0,b.tZ)(Zt.Menu.Divider,null)):(0,b.tZ)(Zt.Menu,null,(0,b.tZ)(Ht.Z,{dashboardId:a.id,setShowReportSubMenu:this.setShowReportSubMenu,setIsDropdownVisible:$,isDropdownVisible:_,useTextMenu:!0})),u&&!((0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&St()(null==a||null==(n=a.metadata)?void 0:n.filter_scopes))&&(0,b.tZ)(Zt.Menu.Item,{key:"set-filter-mapping"},(0,b.tZ)(Yt.Z,{className:"m-r-5",triggerNode:(0,l.t)("Set filter mapping")})),(0,b.tZ)(Zt.Menu.Item,{key:"autorefresh-modal"},(0,b.tZ)(Lt,{addSuccessToast:this.props.addSuccessToast,refreshFrequency:s,refreshLimit:w,refreshWarning:R,onChange:this.changeRefreshInterval,editMode:u,refreshIntervalOptions:O,triggerNode:(0,b.tZ)("span",null,(0,l.t)("Set auto-refresh interval"))})))}}sn.propTypes=en,sn.defaultProps={colorNamespace:void 0,colorScheme:void 0,refreshLimit:0,refreshWarning:null};const ln=sn;var dn=n(37921);const cn={dashboardId:s().number,isPublished:s().bool.isRequired,savePublished:s().func.isRequired,canEdit:s().bool,canSave:s().bool},un=(0,l.t)("This dashboard is not published, it will not show up in the list of dashboards. Click here to publish this dashboard."),hn=(0,l.t)("This dashboard is not published which means it will not show up in the list of dashboards. Favorite it to see it there or access it by using the URL directly."),pn=(0,l.t)("This dashboard is published. Click to make it a draft.");class mn extends o.Component{componentDidMount(){this.togglePublished=this.togglePublished.bind(this)}togglePublished(){this.props.savePublished(this.props.dashboardId,!this.props.isPublished)}render(){return this.props.isPublished?this.props.canEdit&&this.props.canSave?(0,b.tZ)(ee.u,{id:"published-dashboard-tooltip",placement:"bottom",title:pn},(0,b.tZ)(dn.Z,{onClick:()=>{this.togglePublished()}},(0,l.t)("Published"))):null:this.props.canEdit&&this.props.canSave?(0,b.tZ)(ee.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:un},(0,b.tZ)(dn.Z,{onClick:()=>{this.togglePublished()}},(0,l.t)("Draft"))):(0,b.tZ)(ee.u,{id:"unpublished-dashboard-tooltip",placement:"bottom",title:hn},(0,b.tZ)(dn.Z,null,(0,l.t)("Draft")))}}mn.propTypes=cn;const gn={onUndo:s().func.isRequired,onRedo:s().func.isRequired};class fn extends o.PureComponent{constructor(e){super(e),this.handleKeydown=this.handleKeydown.bind(this)}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.ctrlKey||e.metaKey){const t="z"===e.key||90===e.keyCode,n="y"===e.key||89===e.keyCode,i=document&&document.querySelector(".dashboard-markdown--editing"),r=document&&document.querySelector(".editable-title--editing");i||r||!t&&!n||(e.preventDefault(),(t?this.props.onUndo:this.props.onRedo)())}}render(){return null}}fn.propTypes=gn;const vn=fn;var bn=n(20818);const yn=e=>{e&&clearInterval(e)};var xn=n(52564),Sn=n(22102),Cn=n(74069),Zn=n(14114);const wn=(0,gt.I)(),Rn=e=>e.split(/(?:\s|,)+/).filter((e=>e)),Tn=v.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,kn=e=>{var t;let{dashboardId:n,onHide:i}=e;const{addInfoToast:r,addDangerToast:a}=(0,Zn.e1)(),[s,d]=(0,o.useState)(!0),[c,h]=(0,o.useState)(!1),[p,m]=(0,o.useState)(null),[g,f]=(0,o.useState)(""),v=`/api/v1/dashboard/${n}/embedded`,y=!p||Rn(g).join()!==p.allowed_domains.join(),x=(0,o.useCallback)((()=>{h(!0),(0,Sn.Z)({method:"POST",endpoint:v})({allowed_domains:Rn(g)}).then((e=>{let{result:t}=e;m(t),f(t.allowed_domains.join(", ")),r((0,l.t)("Changes saved."))}),(e=>{console.error(e),a((0,l.t)((0,l.t)("Sorry, something went wrong. The changes could not be saved.")))})).finally((()=>{h(!1)}))}),[v,g]),S=(0,o.useCallback)((()=>{Cn.default.confirm({title:(0,l.t)("Disable embedding?"),content:(0,l.t)("This will remove your current embed configuration."),okType:"danger",onOk:()=>{h(!0),(0,Sn.Z)({method:"DELETE",endpoint:v})({}).then((()=>{m(null),f(""),r((0,l.t)("Embedding deactivated.")),i()}),(e=>{console.error(e),a((0,l.t)("Sorry, something went wrong. Embedding could not be deactivated."))})).finally((()=>{h(!1)}))}})}),[v]);if((0,o.useEffect)((()=>{d(!1),(0,Sn.Z)({method:"GET",endpoint:v})({}).catch((e=>{if(404===e.status)return{result:null};throw e})).then((e=>{let{result:t}=e;d(!0),m(t),f(t?t.allowed_domains.join(", "):"")}))}),[n]),!s)return(0,b.tZ)(u.Z,null);const C=wn.get("embedded.documentation.configuration_details"),Z=wn.get("embedded.documentation.description"),w=null!=(t=wn.get("embedded.documentation.url"))?t:"https://www.npmjs.com/package/@superset-ui/embedded-sdk";return(0,b.tZ)(o.Fragment,null,p?C?(0,b.tZ)(C,{embeddedId:p.uuid}):(0,b.tZ)("p",null,(0,l.t)("This dashboard is ready to embed. In your application, pass the following id to the SDK:"),(0,b.tZ)("br",null),(0,b.tZ)("code",null,p.uuid)):(0,b.tZ)("p",null,(0,l.t)("Configure this dashboard to embed it into an external web application.")),(0,b.tZ)("p",null,(0,l.t)("For further instructions, consult the")," ",(0,b.tZ)("a",{href:w,target:"_blank",rel:"noreferrer"},Z?Z():(0,l.t)("Superset Embedded SDK documentation."))),(0,b.tZ)("h3",null,(0,l.t)("Settings")),(0,b.tZ)(Ut.xJ,null,(0,b.tZ)("label",{htmlFor:"allowed-domains"},(0,l.t)("Allowed Domains (comma separated)")," ",(0,b.tZ)(X.V,{tooltip:(0,l.t)("A list of domain names that can embed this dashboard. Leaving this field empty will allow embedding from any domain.")})),(0,b.tZ)(j.II,{name:"allowed-domains",value:g,placeholder:"superset.example.com",onChange:e=>f(e.target.value)})),(0,b.tZ)(Tn,null,p?(0,b.tZ)(o.Fragment,null,(0,b.tZ)(K.Z,{onClick:S,buttonStyle:"secondary",loading:c},(0,l.t)("Deactivate")),(0,b.tZ)(K.Z,{onClick:x,buttonStyle:"primary",disabled:!y,loading:c},(0,l.t)("Save changes"))):(0,b.tZ)(K.Z,{onClick:x,buttonStyle:"primary",loading:c},(0,l.t)("Enable embedding"))))},Dn=e=>{const{show:t,onHide:n}=e;return(0,b.tZ)(Cn.default,{show:t,onHide:n,title:(0,l.t)("Embed"),hideFooter:!0},(0,b.tZ)(kn,e))},$n=(0,n(67913).Z)((()=>n.e(783).then(n.bind(n,13070)))),_n=()=>{const e=(0,r.v9)((e=>{let{dashboardState:t}=e;return t.overwriteConfirmMetadata}));return(0,b.tZ)(o.Fragment,null,e&&(0,b.tZ)($n,{overwriteConfirmMetadata:e}))},In=(0,gt.I)(),Mn={addSuccessToast:s().func.isRequired,addDangerToast:s().func.isRequired,addWarningToast:s().func.isRequired,user:s().object,dashboardInfo:s().object.isRequired,dashboardTitle:s().string,dataMask:s().object.isRequired,charts:s().objectOf(Y.$6).isRequired,layout:s().object.isRequired,expandedSlices:s().object,customCss:s().string,colorNamespace:s().string,colorScheme:s().string,setColorScheme:s().func.isRequired,setUnsavedChanges:s().func.isRequired,isStarred:s().bool.isRequired,isPublished:s().bool.isRequired,isLoading:s().bool.isRequired,onSave:s().func.isRequired,onChange:s().func.isRequired,fetchFaveStar:s().func.isRequired,fetchCharts:s().func.isRequired,saveFaveStar:s().func.isRequired,savePublished:s().func.isRequired,updateDashboardTitle:s().func.isRequired,editMode:s().bool.isRequired,setEditMode:s().func.isRequired,showBuilderPane:s().func.isRequired,updateCss:s().func.isRequired,logEvent:s().func.isRequired,hasUnsavedChanges:s().bool.isRequired,maxUndoHistoryExceeded:s().bool.isRequired,lastModifiedTime:s().number.isRequired,onRefresh:s().func.isRequired,onUndo:s().func.isRequired,onRedo:s().func.isRequired,undoLength:s().number.isRequired,redoLength:s().number.isRequired,setMaxUndoHistoryExceeded:s().func.isRequired,maxUndoHistoryToast:s().func.isRequired,refreshFrequency:s().number,shouldPersistRefreshFrequency:s().bool.isRequired,setRefreshFrequency:s().func.isRequired,dashboardInfoChanged:s().func.isRequired,dashboardTitleChanged:s().func.isRequired},Fn=e=>b.iv`
  border-bottom: 1px solid ${e.colors.grayscale.light2};
`,En=e=>b.iv`
  color: ${e.colors.primary.dark2};
`,On=e=>b.iv`
  display: flex;
  align-items: center;

  .action-schedule-report {
    margin-left: ${2*e.gridUnit}px;
  }

  .undoRedo {
    display: flex;
    margin-right: ${2*e.gridUnit}px;
  }
`,zn=(0,v.iK)(V.C0)`
  padding: 0;
  &:hover {
    background: transparent;
  }
`,Un=e=>b.iv`
  color: ${e.colors.grayscale.light1};
  &:hover {
    color: ${e.colors.grayscale.base};
  }
`,Pn=e=>b.iv`
  color: ${e.colors.grayscale.base};
`,Nn=e=>b.iv`
  color: ${e.colors.grayscale.light2};
`,An=e=>b.iv`
  min-width: ${17*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`,qn=e=>b.iv`
  min-width: ${22*e.gridUnit}px;
  height: ${8*e.gridUnit}px;
`;class Ln extends o.PureComponent{static discardChanges(){const e=new URL(window.location.href);e.searchParams.delete("edit"),window.location.assign(e)}constructor(e){super(e),this.showEmbedModal=()=>{this.setState({showingEmbedModal:!0})},this.hideEmbedModal=()=>{this.setState({showingEmbedModal:!1})},this.state={didNotifyMaxUndoHistoryToast:!1,emphasizeUndo:!1,emphasizeRedo:!1,showingPropertiesModal:!1,isDropdownVisible:!1},this.handleChangeText=this.handleChangeText.bind(this),this.handleCtrlZ=this.handleCtrlZ.bind(this),this.handleCtrlY=this.handleCtrlY.bind(this),this.toggleEditMode=this.toggleEditMode.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.startPeriodicRender=this.startPeriodicRender.bind(this),this.overwriteDashboard=this.overwriteDashboard.bind(this),this.showPropertiesModal=this.showPropertiesModal.bind(this),this.hidePropertiesModal=this.hidePropertiesModal.bind(this),this.setIsDropdownVisible=this.setIsDropdownVisible.bind(this)}componentDidMount(){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}componentDidUpdate(e){if(this.props.refreshFrequency!==e.refreshFrequency){const{refreshFrequency:e}=this.props;this.startPeriodicRender(1e3*e)}}UNSAFE_componentWillReceiveProps(e){W.Q9-e.undoLength<=0&&!this.state.didNotifyMaxUndoHistoryToast&&(this.setState((()=>({didNotifyMaxUndoHistoryToast:!0}))),this.props.maxUndoHistoryToast()),e.undoLength>W.Q9&&!this.props.maxUndoHistoryExceeded&&this.props.setMaxUndoHistoryExceeded()}componentWillUnmount(){yn(this.refreshTimer),this.props.setRefreshFrequency(0),clearTimeout(this.ctrlYTimeout),clearTimeout(this.ctrlZTimeout)}handleChangeText(e){const{updateDashboardTitle:t,onChange:n}=this.props;e&&this.props.dashboardTitle!==e&&(t(e),n())}setIsDropdownVisible(e){this.setState({isDropdownVisible:e})}handleCtrlY(){this.props.onRedo(),this.setState({emphasizeRedo:!0},(()=>{this.ctrlYTimeout&&clearTimeout(this.ctrlYTimeout),this.ctrlYTimeout=setTimeout((()=>{this.setState({emphasizeRedo:!1})}),100)}))}handleCtrlZ(){this.props.onUndo(),this.setState({emphasizeUndo:!0},(()=>{this.ctrlZTimeout&&clearTimeout(this.ctrlZTimeout),this.ctrlZTimeout=setTimeout((()=>{this.setState({emphasizeUndo:!1})}),100)}))}forceRefresh(){if(!this.props.isLoading){const e=Object.keys(this.props.charts);return this.props.logEvent(vt.H3,{force:!0,interval:0,chartCount:e.length}),this.props.onRefresh(e,!0,0,this.props.dashboardInfo.id)}return!1}startPeriodicRender(e){let t;if(e){var n,i;const{dashboardInfo:r}=this.props,o=(null==(n=r.common)||null==(i=n.conf)?void 0:i.DASHBOARD_AUTO_REFRESH_INTERVALS).find((t=>Number(t[0])===e/1e3));t=o?(0,l.t)(o[1]):mt().duration(e,"millisecond").humanize()}this.refreshTimer=function(e){let{interval:t=0,periodicRender:n,refreshTimer:i}=e;return yn(i),t>0?setInterval(n,t):0}({interval:e,periodicRender:()=>{const{fetchCharts:n,logEvent:i,charts:r,dashboardInfo:o}=this.props,{metadata:a}=o,s=a.timed_refresh_immune_slices||[],d=Object.values(r).filter((e=>-1===s.indexOf(e.id))).map((e=>e.id));return i(vt.S,{interval:e,chartCount:d.length}),this.props.addWarningToast((0,l.t)("This dashboard is currently auto refreshing; the next auto refresh will be in %s.",t)),"fetch"===o.common.conf.DASHBOARD_AUTO_REFRESH_MODE?n(d,!1,.2*e,o.id):n(d,!0,.2*e,o.id)},refreshTimer:this.refreshTimer})}toggleEditMode(){this.props.logEvent(vt.vH,{edit_mode:!this.props.editMode}),this.props.setEditMode(!this.props.editMode)}overwriteDashboard(){var e,t,n;const{dashboardTitle:i,layout:r,colorScheme:o,colorNamespace:a,customCss:s,dashboardInfo:d,refreshFrequency:c,shouldPersistRefreshFrequency:u,lastModifiedTime:h,slug:p}=this.props,m=u?c:null==(e=d.metadata)?void 0:e.refresh_frequency,g=(null==d||null==(t=d.metadata)?void 0:t.color_scheme)||o,f=(null==d||null==(n=d.metadata)?void 0:n.color_namespace)||a,v=Object.fromEntries((0,ft.ZP)().getColorMap()),b={certified_by:d.certified_by,certification_details:d.certification_details,css:s,dashboard_title:i,last_modified_time:h,owners:d.owners,roles:d.roles,slug:p,metadata:{...null==d?void 0:d.metadata,color_namespace:f,color_scheme:g,positions:r,refresh_frequency:m,shared_label_colors:v}},y=(0,yt.o)(r).length,x=d.common.conf.SUPERSET_DASHBOARD_POSITION_DATA_LIMIT||W.Bu;y>=x?this.props.addDangerToast((0,l.t)("Your dashboard is too large. Please reduce its size before saving it.")):(y>=.9*x&&this.props.addWarningToast("Your dashboard is near the size limit."),this.props.onSave(b,d.id,W.TN))}showPropertiesModal(){this.setState({showingPropertiesModal:!0})}hidePropertiesModal(){this.setState({showingPropertiesModal:!1})}render(){var e,t,n,i;const{dashboardTitle:r,layout:o,expandedSlices:a,customCss:s,colorNamespace:c,dataMask:u,setColorScheme:h,setUnsavedChanges:p,colorScheme:m,onUndo:g,onRedo:f,undoLength:v,redoLength:y,onChange:x,onSave:S,updateCss:C,editMode:Z,isPublished:w,user:R,dashboardInfo:T,hasUnsavedChanges:k,isLoading:D,refreshFrequency:$,shouldPersistRefreshFrequency:_,setRefreshFrequency:I,lastModifiedTime:M,logEvent:F}=this.props,E=T.dash_edit_perm&&!T.is_managed_externally,O=T.dash_share_perm,z=T.dash_save_perm,U=(0,d.cr)(d.TT.EMBEDDED_SUPERSET)&&(0,bt.R)("can_set_embedded","Dashboard",R.roles),P=null==(e=T.common)||null==(t=e.conf)?void 0:t.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT,N=null==(n=T.common)||null==(i=n.conf)?void 0:i.SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE,A=In.get("dashboard.nav.right");return(0,b.tZ)("div",{css:Fn,"data-test-id":T.id,className:"dashboard-header-container"},(0,b.tZ)(xn.u,{editableTitleProps:{title:r,canEdit:E&&Z,onSave:this.handleChangeText,placeholder:(0,l.t)("Add the name of the dashboard"),label:(0,l.t)("Dashboard title"),showTooltip:!1},certificatiedBadgeProps:{certifiedBy:T.certified_by,details:T.certification_details},faveStarProps:{itemId:T.id,fetchFaveStar:this.props.fetchFaveStar,saveFaveStar:this.props.saveFaveStar,isStarred:this.props.isStarred,showTooltip:!0},titlePanelAdditionalItems:[!Z&&(0,b.tZ)(mn,{dashboardId:T.id,isPublished:w,savePublished:this.props.savePublished,canEdit:E,canSave:z,visible:!Z})],rightPanelAdditionalItems:(0,b.tZ)("div",{className:"button-container"},z&&(0,b.tZ)("div",{className:"button-container"},Z&&(0,b.tZ)("div",{css:On},(0,b.tZ)("div",{className:"undoRedo"},(0,b.tZ)(ee.u,{id:"dashboard-undo-tooltip",title:(0,l.t)("Undo the action")},(0,b.tZ)(zn,{type:"text",disabled:v<1},(0,b.tZ)(B.Z.Undo,{css:[Un,this.state.emphasizeUndo&&Pn,v<1&&Nn,"",""],onClick:v&&g,iconSize:"xl"}))),(0,b.tZ)(ee.u,{id:"dashboard-redo-tooltip",title:(0,l.t)("Redo the action")},(0,b.tZ)(zn,{type:"text",disabled:y<1},(0,b.tZ)(B.Z.Redo,{css:[Un,this.state.emphasizeRedo&&Pn,y<1&&Nn,"",""],onClick:y&&f,iconSize:"xl"})))),(0,b.tZ)(K.Z,{css:qn,buttonSize:"small",onClick:this.constructor.discardChanges,buttonStyle:"default","aria-label":(0,l.t)("Discard")},(0,l.t)("Discard")),(0,b.tZ)(K.Z,{css:An,buttonSize:"small",disabled:!k,buttonStyle:"primary",onClick:this.overwriteDashboard,"aria-label":(0,l.t)("Save")},(0,l.t)("Save")))),Z?(0,b.tZ)(vn,{onUndo:this.handleCtrlZ,onRedo:this.handleCtrlY}):(0,b.tZ)("div",{css:On},A&&(0,b.tZ)(A,null),E&&(0,b.tZ)(K.Z,{buttonStyle:"secondary",onClick:this.toggleEditMode,className:"action-button",css:En,"aria-label":(0,l.t)("Edit dashboard")},(0,l.t)("Edit dashboard")))),menuDropdownProps:{getPopupContainer:e=>e.closest(".header-with-actions"),visible:this.state.isDropdownVisible,onVisibleChange:this.setIsDropdownVisible},additionalActionsMenu:(0,b.tZ)(ln,{addSuccessToast:this.props.addSuccessToast,addDangerToast:this.props.addDangerToast,dashboardId:T.id,dashboardTitle:r,dashboardInfo:T,dataMask:u,layout:o,expandedSlices:a,customCss:s,colorNamespace:c,colorScheme:m,onSave:S,onChange:x,forceRefreshAllCharts:this.forceRefresh,startPeriodicRender:this.startPeriodicRender,refreshFrequency:$,shouldPersistRefreshFrequency:_,setRefreshFrequency:I,updateCss:C,editMode:Z,hasUnsavedChanges:k,userCanEdit:E,userCanShare:O,userCanSave:z,userCanCurate:U,isLoading:D,showPropertiesModal:this.showPropertiesModal,manageEmbedded:this.showEmbedModal,refreshLimit:P,refreshWarning:N,lastModifiedTime:M,isDropdownVisible:this.state.isDropdownVisible,setIsDropdownVisible:this.setIsDropdownVisible,logEvent:F}),showFaveStar:(null==R?void 0:R.userId)&&(null==T?void 0:T.id),showTitlePanelItems:!0}),this.state.showingPropertiesModal&&(0,b.tZ)(bn.Z,{dashboardId:T.id,dashboardInfo:T,dashboardTitle:r,show:this.state.showingPropertiesModal,onHide:this.hidePropertiesModal,colorScheme:this.props.colorScheme,onSubmit:e=>{const{dashboardInfoChanged:t,dashboardTitleChanged:n}=this.props;h(e.colorScheme),t({slug:e.slug,metadata:JSON.parse(e.jsonMetadata||"{}"),certified_by:e.certifiedBy,certification_details:e.certificationDetails,owners:e.owners,roles:e.roles}),p(!0),n(e.title)},onlyApply:!0}),(0,b.tZ)(_n,null),U&&(0,b.tZ)(Dn,{show:this.state.showingEmbedModal,onHide:this.hideEmbedModal,dashboardId:T.id}),(0,b.tZ)(b.xB,{styles:b.iv`
            .ant-menu-vertical {
              border-right: none;
            }
          `}))}}Ln.propTypes=Mn,Ln.defaultProps={colorNamespace:void 0,colorScheme:void 0};const jn=Ln;function Vn(e){return Object.values(e).some((e=>e.chartUpdateStartTime>(e.chartUpdateEndTime||0)))}var Kn=n(41295),Bn=n(9467),Hn=n(12885),Wn=n(72570),Yn=n(97381);const Jn=(0,r.$j)((function(e){let{dashboardLayout:t,dashboardState:n,reports:i,dashboardInfo:r,charts:o,dataMask:a,user:s}=e;return{dashboardInfo:r,undoLength:t.past.length,redoLength:t.future.length,layout:t.present,dashboardTitle:((t.present[W.M2]||{}).meta||{}).text,expandedSlices:n.expandedSlices,refreshFrequency:n.refreshFrequency,shouldPersistRefreshFrequency:!!n.shouldPersistRefreshFrequency,customCss:n.css,colorNamespace:n.colorNamespace,colorScheme:n.colorScheme,charts:o,dataMask:a,user:s,isStarred:!!n.isStarred,isPublished:!!n.isPublished,isLoading:Vn(o),hasUnsavedChanges:!!n.hasUnsavedChanges,maxUndoHistoryExceeded:!!n.maxUndoHistoryExceeded,lastModifiedTime:Math.max(n.lastModifiedTime,r.last_modified_time),editMode:!!n.editMode,slug:r.slug,metadata:r.metadata,reports:i}}),(function(e){return(0,i.DE)({addSuccessToast:Wn.ws,addDangerToast:Wn.Gb,addWarningToast:Wn.Dz,onUndo:Hn.Ou,onRedo:Hn.az,setEditMode:Bn.Mb,showBuilderPane:Bn.O8,setColorScheme:Bn.uW,setUnsavedChanges:Bn.if,fetchFaveStar:Bn.Lb,saveFaveStar:Bn.TN,savePublished:Bn.dr,fetchCharts:Bn.Mn,updateDashboardTitle:Hn.A7,updateCss:Bn.Sn,onChange:Bn.z2,onSave:Bn.M8,setMaxUndoHistoryExceeded:Bn.uN,maxUndoHistoryToast:Bn.Qt,logEvent:Yn.logEvent,setRefreshFrequency:Bn.fE,onRefresh:Bn.Yy,dashboardInfoChanged:Kn.a8,dashboardTitleChanged:Hn.Ww,updateDataMask:ht.eG},e)}))(jn),Xn=v.iK.div`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
  }
`,Gn=v.iK.span`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,Qn=e=>{let{icon:t,label:n,onClick:i}=e;return(0,b.tZ)(Xn,{tabIndex:0,role:"button",onClick:e=>{e.preventDefault(),i(e)}},t,n&&(0,b.tZ)(Gn,null,n))};var ei=n(99299),ti=n(13433),ni=n(98286);function ii(e){let{dashboardId:t,anchorLinkId:n,placement:i="right",emailContent:a="",emailSubject:s=""}=e;const[d,c]=(0,o.useState)(""),{addDangerToast:u}=(0,Zn.e1)(),{dataMask:h,activeTabs:p}=(0,r.v9)((e=>({dataMask:e.dataMask,activeTabs:e.dashboardState.activeTabs}))),m=`mailto:?Subject=${s}%20&Body=${a}${d||""}`;return(0,b.tZ)(ei.Z,{trigger:"click",placement:i,content:(0,b.tZ)("div",{id:"shorturl-popover",onClick:e=>{e.stopPropagation()}},(0,b.tZ)(ti.Z,{text:d,copyNode:(0,b.tZ)("i",{className:"fa fa-clipboard",title:(0,l.t)("Copy to clipboard")})}),"  ",(0,b.tZ)("a",{href:m},(0,b.tZ)("i",{className:"fa fa-envelope"})))},(0,b.tZ)("span",{className:"short-link-trigger btn btn-default btn-sm",tabIndex:0,role:"button",onClick:e=>{e.stopPropagation(),(async()=>{try{const e=await(0,kt.Nm)({dashboardId:t,dataMask:h,activeTabs:p,anchor:n});c(e)}catch(e){e&&u((await(0,ni.O$)(e)).error||(0,l.t)("Something went wrong."))}})()}},(0,b.tZ)("i",{className:"short-link-trigger fa fa-link"})," "))}var ri=n(56967);function oi(e){let{id:t,dashboardId:n,placement:i="right",scrollIntoView:r=!1,showShortLinkButton:a=!0}=e;const s=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({block:"center",behavior:"smooth"})},d=(0,ri.Z)();return(0,o.useEffect)((()=>{d&&t===d&&s(t)}),[d,t]),(0,o.useEffect)((()=>{r&&s(t)}),[t,r]),(0,b.tZ)("span",{className:"anchor-link-container",id:t},a&&n&&(0,b.tZ)(ii,{anchorLinkId:t,dashboardId:n,emailSubject:(0,l.t)("Superset chart"),emailContent:(0,l.t)("Check out this chart in dashboard:"),placement:i}))}var ai=n(81395),si=n(52256),li=n(91914),di=n(18446),ci=n.n(di),ui=n(16550),hi=n(12515),pi=n(40730),mi=n(99543),gi=n(40219),fi=n(29147),vi=n(38270),bi=n(73727),yi=n(11064),xi=n(16355),Si=n(88694),Ci=n(54076);const Zi=e=>{const t="MacOS"===(0,Ci.fV)(),n=e?(0,l.t)("Click to edit %s.",e):(0,l.t)("Click to edit chart."),i=(0,l.t)("Use %s to open in a new tab.",t?(0,l.t)("⌘ + click"):(0,l.t)("ctrl + click"));return(0,b.tZ)(o.Fragment,null,(0,b.tZ)("div",null,n),(0,b.tZ)("div",null,i))};var wi=n(15423),Ri=n(21496),Ti=n(41814),ki=n(37731),Di=n(52004),$i=n(32873);const _i=(0,n(22222).P1)((e=>e.charts),(e=>Object.values(e).map((e=>e.id)))),Ii=()=>((e,t)=>{const n=(0,o.useRef)(),i=n.current,r=((e,t)=>e===t||ci()(e,t))(i,e);return(0,o.useEffect)((()=>{r||(n.current=e)})),(0,ki.Z)(i)&&r?i:e})((0,r.v9)(_i));var Mi=n(9531);const Fi=(e,t)=>{var n,i;let{type:r,meta:o}=e;return!(r!==p.gn&&r!==p.dW&&r!==p.U0||t&&"filter_box"===(null==(n=t[null==o?void 0:o.chartId])||null==(i=n.form_data)?void 0:i.viz_type))},Ei=(e,t,n,i,r,o,a)=>{var s;let d=t;if(e&&t&&Fi(e,i)&&e.type!==p.U0&&null!=r&&null!=r.includes&&r.includes(e.id)){var c;const n=a((e=>{var t,n,i,r,o,a,s,l,d,c;return null!=(t=null!=(n=null!=(i=null!=(r=null!=(o=null==e||null==(a=e.meta)?void 0:a.sliceNameOverride)?o:null==e||null==(s=e.meta)?void 0:s.sliceName)?r:null==e||null==(l=e.meta)?void 0:l.text)?i:null==e||null==(d=e.meta)?void 0:d.defaultText)?n:null==e||null==(c=e.id)||null==c.toString?void 0:c.toString())?t:""})(e),null==o||null==o.includes?void 0:o.includes(null==(c=e.meta)?void 0:c.chartId),(0,l.t)("This chart might be incompatible with the filter (datasets don't match)")),i={key:e.id,title:n,children:[]};t.children.push(i),d=i}null==e||null==(s=e.children)||null==s.forEach||s.forEach((e=>{const t=null==n?void 0:n[e];t?Ei(t,d,n,i,r,o,a):Tt.Z.warn(`Unable to find item with id: ${e} in the dashboard layout. This may indicate you have invalid references in your dashboard and the references to id: ${e} should be removed.`)}))},Oi=(e,t,n,i)=>{n.forEach((n=>{var r,o;Oi(e,t,((e,t)=>{var n;return[...(null==(n=e[t])?void 0:n.children)||[],...Object.values(e).filter((n=>n.parents&&n.parents[n.parents.length-1]===t&&!Fi(e[n.parents[n.parents.length-1]]))).map((e=>{let{id:t}=e;return t}))]})(t,n),i),(null==(r=t[n])?void 0:r.type)!==p.dW||i.includes(null==(o=t[n])?void 0:o.meta.chartId)||e.push(n)}))},zi=function(e,t){return void 0===t&&(t=[]),{rootPath:[W._4],excluded:e?[e,...t]:t}},Ui=(e,t)=>!e||e.rootPath[0]===W._4&&!e.excluded.filter((e=>e!==t)).length,Pi=(e,t,n)=>{let i=(0,b.tZ)("span",null,e);return t&&(i=(0,b.tZ)(o.Fragment,null,i," ",(0,b.tZ)(ee.u,{title:n},(0,b.tZ)(B.Z.Info,{iconSize:"m"})))),i},Ni=e=>{let{formScope:t,initialScope:n,forceUpdate:i,updateFormValues:a,chartId:s,initiallyExcludedCharts:d=[],title:c}=e;const[u,h]=(0,o.useState)([W._4]),{treeData:m,layout:g}=function(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=e=>e),void 0===i&&(i=(0,l.t)("All panels"));const a=(0,r.v9)((e=>{let{dashboardLayout:{present:t}}=e;return t})),s=(0,r.v9)((e=>{let{charts:t}=e;return t})),d={children:[],key:W._4,type:p.U0,title:i},c=(0,o.useMemo)((()=>Object.values(a).reduce(((t,n)=>{const{id:i,parents:r=[],type:o,meta:a}=n;return o===p.dW&&e!==(null==a?void 0:a.chartId)?[...new Set([...t,...r,i])]:t}),[])),[a,e]);return(0,o.useMemo)((()=>{Ei(a[W._4],d,a,s,c,t,n)}),[a,d,s,t,n]),{treeData:[d],layout:a}}(s,d,Pi,c),[f,v]=(0,o.useState)(!0),y=(0,o.useMemo)((()=>((e,t)=>{const n=[];return Oi(n,t,[...e.rootPath],[...e.excluded]),[...new Set(n)]})({...t||n},g)),[t,n,g]);return(0,b.tZ)(V.mp,{checkable:!0,selectable:!1,onExpand:e=>{h(e),v(!1)},expandedKeys:u,autoExpandParent:f,onCheck:e=>{i();const t=((e,t)=>{if(!e.length)return{rootPath:[],excluded:[]};const n=e.filter((e=>{var n;return(null==(n=t[e])?void 0:n.type)===p.dW})).map((e=>{var n;return[W._4,...(null==(n=t[e])?void 0:n.parents)||[]].filter((e=>Fi(t[e])))}));n.sort(((e,t)=>e.length-t.length));const i=n.map((e=>e[n[0].length-1])),r=[];return Object.entries(t).forEach((t=>{var n;let[o,a]=t;const s=a.parents||[];a.type===p.dW&&null!=(n=[W._4,...s])&&n.find((t=>((t,n)=>i.includes(t)&&!e.includes(n))(t,o)))&&r.push(a.meta.chartId)})),{rootPath:[...new Set(i)],excluded:r}})(e,g);void 0!==s&&(t.excluded=[...new Set([...t.excluded,s])]),a({scope:t})},checkedKeys:y,treeData:m})},Ai=(0,o.memo)(Ni),qi=-1,Li=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    font-size: ${t.typography.sizes.s}px;
    color: ${t.colors.grayscale.base};
    margin-bottom: ${7*t.gridUnit}px;
  `}}
`,ji=e=>{let{value:t,onSelectChange:n,chartConfigs:i}=e;const a=(0,v.Fg)(),s=(0,r.v9)((e=>e.dashboardLayout.present)),d=(0,o.useMemo)((()=>{const e=Object.values(s).filter((e=>e.type===p.dW));return Object.values(i).filter((e=>(0,Di._6)(e.crossFilters.scope)||e.id===t&&t!==qi)).map((t=>{const n=e.find((e=>e.meta.chartId===Number(t.id)));return{value:Number(t.id),label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[i,s,t]);return(0,b.tZ)("div",{css:b.iv`
        margin-bottom: ${6*a.gridUnit}px;
      `},(0,b.tZ)("div",{css:b.iv`
          display: flex;
          align-items: center;
          margin-bottom: ${a.gridUnit}px;
        `},(0,b.tZ)(Li,{css:b.iv`
            color: ${a.colors.grayscale.dark1};
            margin-right: ${a.gridUnit}px;
            margin-bottom: 0;
          `},`${(0,l.t)("Chart")} *`),(0,b.tZ)(ee.u,{title:(0,l.t)("Tooltip"),placement:"top"},(0,b.tZ)(B.Z.InfoCircleOutlined,{iconSize:"xs",iconColor:a.colors.grayscale.base,css:b.iv`
              & > span {
                line-height: 0;
              }
            `}))),(0,b.tZ)(V.Ph,{ariaLabel:(0,l.t)("Select chart"),options:d,value:t&&t===qi?void 0:t,onChange:e=>{n(Number(e))}}))},Vi=e=>{let{onScopeUpdate:t,currentScope:n,chartId:i,onSelectChange:o,chartConfigs:a}=e;const s=(0,v.Fg)(),d=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled}));return(0,b.tZ)("div",{css:b.iv`
        flex: 1;
      `},!d&&(0,b.tZ)(zt.Z,{message:(0,b.tZ)("span",{css:b.iv`
                font-weight: ${s.typography.weights.bold};
              `},(0,l.t)("Cross-filtering is not enabled in this dashboard")),type:"info",closable:!1,css:b.iv`
            margin-bottom: ${6*s.gridUnit}px;
          `}),(0,ki.Z)(i)&&(0,b.tZ)(ji,{value:i,onSelectChange:o,chartConfigs:a}),(0,b.tZ)(Li,null,(0,ki.Z)(i)?(0,l.t)('Select the charts to which you want to apply cross-filters when interacting with this chart. You can select "All charts" to apply filters to all charts that use the same dataset or contain the same column name in the dashboard.'):(0,l.t)('Select the charts to which you want to apply cross-filters in this dashboard. Deselecting a chart will exclude it from being filtered when applying cross-filters from any chart on the dashboard. You can select "All charts" to apply cross-filters to all charts that use the same dataset or contain the same column name in the dashboard.')),(0,b.tZ)(Ai,{updateFormValues:t,initialScope:n,forceUpdate:Ci.EI,chartId:i,title:(0,l.t)("All charts")}))};var Ki=n(27034),Bi=n(22068);const Hi="FILTER",Wi=v.iK.div`
  ${e=>{let{isDragging:t,theme:n}=e;return`\n    opacity: ${t?.3:1};\n    cursor: ${t?"grabbing":"pointer"};\n    width: 100%;\n    display: flex;\n    padding:  ${n.gridUnit}px;\n  `}}
`,Yi=(0,v.iK)(B.Z.Drag,{shouldForwardProp:e=>"isDragging"!==e})`
  ${e=>{let{isDragging:t,theme:n}=e;return`\n    font-size: ${n.typography.sizes.m}px;\n    margin-top: 15px;\n    cursor: ${t?"grabbing":"grab"};\n    padding-left: ${n.gridUnit}px;\n  `}}
`;var Ji={name:"82a6rk",styles:"flex:1"};const Xi=e=>{let{index:t,onRearrange:n,filterIds:i,children:r}=e;const a=(0,o.useRef)(null),[{isDragging:s},l]=(0,Ki.c)({item:{filterIds:i,type:Hi,index:t},collect:e=>({isDragging:e.isDragging()})}),[,d]=(0,Bi.L)({accept:Hi,hover:(e,i)=>{var r;if(!a.current)return;const o=e.index,s=t;if(o===s)return;const l=null==(r=a.current)?void 0:r.getBoundingClientRect(),d=(l.bottom-l.top)/2,c=i.getClientOffset().y-l.top;o<s&&c<d||o>s&&c>d||(n(o,s),e.index=s)}});return l(d(a)),(0,b.tZ)(Wi,{ref:a,isDragging:s},(0,b.tZ)(Yi,{isDragging:s,alt:"Move icon",className:"dragIcon",viewBox:"4 4 16 16"}),(0,b.tZ)("div",{css:Ji},r))},Gi=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n      display: flex;\n      align-items: center;\n      padding: ${2*t.gridUnit}px;\n      width: 100%;\n      border-radius: ${t.borderRadius}px;\n      cursor: pointer;\n      &.active {\n        color: ${t.colors.grayscale.dark1};\n        border-radius: ${t.borderRadius}px;\n        background-color: ${t.colors.secondary.light4};\n        span, .anticon {\n          color: ${t.colors.grayscale.dark1};\n        }\n      }\n      &:hover {\n        color: ${t.colors.primary.light1};\n        span, .anticon {\n          color: ${t.colors.primary.light1};\n        }\n      }\n      &.errored div, &.errored .warning {\n        color: ${t.colors.error.base};\n      }\n  `}}
`,Qi=(0,v.iK)(B.Z.Trash)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
`,er=(0,v.iK)(B.Z.Warning)`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  &.anticon {
    margin-left: auto;
  }
`,tr=v.iK.div`
  height: 100%;
  overflow-y: auto;
`;var nr={name:"7whenc",styles:"display:flex;width:100%"},ir={name:"1abjxqb",styles:"align-items:center;display:flex;word-break:break-all"},rr={name:"1je5tt7",styles:"align-self:flex-end;margin-left:auto"},or={name:"an0ls6",styles:"align-self:flex-start;margin-left:auto"};const ar=(0,o.forwardRef)(((e,t)=>{let{getFilterTitle:n,onChange:i,onRemove:r,restoreFilter:o,onRearrange:a,currentFilterId:s,removedFilters:d,filters:c,erroredFilters:u=[]}=e;return(0,b.tZ)(tr,{ref:t},(()=>{const e=[];return c.forEach(((t,c)=>{e.push((0,b.tZ)(Xi,{key:c,onRearrange:a,index:c,filterIds:[t]},(e=>{const t=!!d[e],a=u.includes(e),c=s===e,h=[];return a&&h.push("errored"),c&&h.push("active"),(0,b.tZ)(Gi,{role:"tab",key:`filter-title-tab-${e}`,onClick:()=>i(e),className:h.join(" ")},(0,b.tZ)("div",{css:nr},(0,b.tZ)("div",{css:ir},t?(0,l.t)("(Removed)"):n(e)),!d[e]&&a&&(0,b.tZ)(er,{className:"warning"}),t&&(0,b.tZ)("span",{css:rr,role:"button",tabIndex:0,onClick:t=>{t.preventDefault(),o(e)}},(0,l.t)("Undo?"))),(0,b.tZ)("div",{css:or},t?null:(0,b.tZ)(Qi,{onClick:t=>{t.stopPropagation(),r(e)},alt:"RemoveFilter"})))})(t)))})),e})())})),sr=ar,lr=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    margin-top: ${2*t.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}}
`,dr=e=>{let{isActive:t,onClick:n,id:i,label:r,onRemove:o}=e;const a=(0,v.Fg)();return(0,b.tZ)(Gi,{className:t?"active":"",onClick:()=>n(i)},r,(0,b.tZ)(B.Z.Trash,{iconColor:a.colors.grayscale.light3,onClick:e=>{e.stopPropagation(),o(i)},css:b.iv`
          margin-left: auto;
        `}))},cr=e=>{let{activeChartId:t,chartConfigs:n,setCurrentChartId:i,removeCustomScope:a,addNewCustomScope:s}=e;const d=(0,v.Fg)(),c=(0,r.v9)((e=>e.dashboardLayout.present)),u=(0,o.useMemo)((()=>{const e=Object.values(c).filter((e=>e.type===p.dW));return Object.values(n).filter((e=>!(0,Di._6)(e.crossFilters.scope)&&e.id!==qi)).map((t=>{const n=e.find((e=>e.meta.chartId===t.id));return{id:t.id,label:(null==n?void 0:n.meta.sliceNameOverride)||(null==n?void 0:n.meta.sliceName)||""}}))}),[n,c]),h=n[-1];return(0,b.tZ)(o.Fragment,null,(0,b.tZ)(lr,null,(0,b.tZ)(K.Z,{buttonStyle:"link",buttonSize:"xsmall",onClick:s},(0,b.tZ)(B.Z.PlusSmall,null)," ",(0,l.t)("Add custom scoping"))),(0,b.tZ)(Gi,{onClick:()=>i(void 0),className:void 0===t?"active":""},(0,l.t)("All charts/global scoping")),(0,b.tZ)("div",{css:b.iv`
          width: 100%;
          height: 1px;
          background-color: ${d.colors.grayscale.light3};
          margin: ${3*d.gridUnit}px 0;
        `}),u.map((e=>(0,b.tZ)(dr,{key:e.id,id:e.id,onClick:i,onRemove:a,isActive:t===e.id,label:e.label}))),h&&(0,b.tZ)(dr,{id:h.id,onClick:i,onRemove:a,isActive:t===h.id,label:`[${(0,l.t)("new custom scoping")}]`}))},ur=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    height: 100%;
    & > div {
      padding: ${4*t.gridUnit}px;
    }
  `}}
`,hr=e=>{let{chartId:t,currentScope:n,onScopeUpdate:i,onSelectChange:r,chartConfigs:o,setCurrentChartId:a,removeCustomScope:s,addNewCustomScope:l}=e;const d=(0,v.Fg)();return(0,b.tZ)(ur,null,(0,b.tZ)("div",{css:b.iv`
          width: 35%;
          border-right: 1px solid ${d.colors.grayscale.light2};
        `},(0,b.tZ)(cr,{setCurrentChartId:a,activeChartId:t,chartConfigs:o,removeCustomScope:s,addNewCustomScope:l})),(0,b.tZ)(Vi,{chartId:t,currentScope:n,onScopeUpdate:i,onSelectChange:r,chartConfigs:o}))},pr=(e,t)=>({rootPath:t.rootPath,excluded:t.excluded.filter((t=>t!==e))}),mr=e=>{let{initialChartId:t,isVisible:n,closeModal:i}=e;const a=(0,r.I0)(),s=(0,r.v9)((e=>e.dashboardLayout.present)),d=Ii(),[c,u]=(0,o.useState)(t),h=(0,r.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration)||{}})),p=(0,o.useMemo)((()=>({scope:Mi.eV,chartsInScope:d})),[d]),m=(0,r.v9)((e=>{var t;return(null==(t=e.dashboardInfo.metadata)?void 0:t.global_chart_configuration)||p})),[g,f]=(0,o.useState)((0,ki.Z)(t)&&(0,Di._6)(null==(v=h[t])?void 0:v.crossFilters.scope)?{...h,[t]:{id:t,crossFilters:{scope:pr(t,m.scope),chartsInScope:null==(y=h[t])?void 0:y.crossFilters.chartsInScope}}}:h);var v,y;const[x,S]=(0,o.useState)(m),C=(0,o.useCallback)((()=>{const e={...g};e[-1]&&delete e[-1],a((0,Kn.Mi)({chartConfiguration:e,globalChartConfiguration:x})),i()}),[g,i,a,x]),Z=(0,o.useCallback)((e=>{let{scope:t}=e;if((0,ki.Z)(c))f((e=>({...e,[c]:{id:c,crossFilters:{scope:t,chartsInScope:(0,$i.Q)(t,d,s)}}})));else{const e=(0,$i.Q)(t,d,s);S({scope:t,chartsInScope:e}),f((t=>((e,t)=>Object.entries(e).reduce(((e,n)=>{let[i,r]=n;return(0,Di._6)(r.crossFilters.scope)?e[i]={id:Number(r.id),crossFilters:{scope:Di.$,chartsInScope:t.filter((e=>e!==Number(r.id)))}}:e[i]=r,e}),{}))(t,e)))}}),[c,d,s]),w=(0,o.useCallback)((e=>{f((t=>{const n={...t};return e===qi?delete n[-1]:n[e]={id:e,crossFilters:{scope:Di.$,chartsInScope:x.chartsInScope.filter((t=>t!==e))}},n})),c===e&&u(void 0)}),[c,x.chartsInScope]),R=(0,o.useCallback)((()=>{u(qi),g[-1]||f((e=>({...e,[qi]:{id:qi,crossFilters:{scope:x.scope,chartsInScope:x.chartsInScope}}})))}),[g,x.chartsInScope,x.scope]),T=(0,o.useCallback)((e=>{if((0,ki.Z)(c)){var t;const n=(0,Di._6)(null==(t=g[c])?void 0:t.crossFilters.scope)?x.scope:g[c].crossFilters.scope,i={rootPath:n.rootPath,excluded:[...n.excluded.filter((e=>e!==c)),e]},r={id:e,crossFilters:{scope:i,chartsInScope:(0,$i.Q)(i,d,s)}};f((t=>{const n={...t,[e]:r};return c===qi?delete n[-1]:n[c]={id:c,crossFilters:{scope:Di.$,chartsInScope:x.chartsInScope.filter((e=>e!==c))}},n})),u(e)}}),[g,d,c,x.chartsInScope,x.scope,s]),k=(0,o.useMemo)((()=>{var e,t,n,i;const r=x.scope;return(0,ki.Z)(c)?(0,Di._6)(null==(e=g[c])||null==(t=e.crossFilters)?void 0:t.scope)?pr(c,r):null==(n=g[c])||null==(i=n.crossFilters)?void 0:i.scope:r}),[g,c,x.scope]);return(0,b.tZ)(Cn.default,{onHide:i,show:n,title:(0,l.t)("Cross-filtering scoping"),onHandledPrimaryAction:C,primaryButtonName:(0,l.t)("Save"),responsive:!0,destroyOnClose:!0,bodyStyle:{padding:0,height:700}},(0,b.tZ)(hr,{chartConfigs:g,currentScope:k,onScopeUpdate:Z,chartId:c,setCurrentChartId:u,onSelectChange:T,removeCustomScope:w,addNewCustomScope:R}))},gr=e=>{const[t,n]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>n(!0)),[]),r=(0,o.useCallback)((()=>n(!1)),[]);return[i,t?(0,b.tZ)(mr,{initialChartId:e,closeModal:r,isVisible:t}):null]},fr="download_as_image",vr="explore_chart",br="export_csv",yr="export_full_csv",xr="export_xlsx",Sr="export_full_xlsx",Cr="force_refresh",Zr="fullscreen",wr="toggle_chart_description",Rr="cross_filter_scoping",Tr=v.iK.div`
  padding: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px
    ${e=>{let{theme:t}=e;return 1.5*t.gridUnit}}px;

  .dot {
    display: block;

    height: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    width: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    border-radius: 50%;
    margin: ${e=>{let{theme:t}=e;return t.gridUnit/2}}px 0;

    background-color: ${e=>{let{theme:t}=e;return t.colors.text.label}};
  }

  &:hover {
    cursor: pointer;
  }
`,kr=v.iK.div`
  height: auto;
  margin: ${e=>{let{theme:t}=e;return t.gridUnit}}px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  line-height: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`,Dr=()=>(0,b.tZ)(Tr,null,(0,b.tZ)("span",{className:"dot"}),(0,b.tZ)("span",{className:"dot"}),(0,b.tZ)("span",{className:"dot"})),$r=b.iv`
  &&.anticon > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`,_r=e=>{let{exploreUrl:t,triggerNode:n,modalTitle:i,modalBody:r}=e;const[a,s]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>s(!0)),[]),c=(0,o.useCallback)((()=>s(!1)),[]),u=(0,ui.k6)(),h=(0,v.Fg)();return(0,b.tZ)(o.Fragment,null,(0,b.tZ)("span",{onClick:d,role:"button",tabIndex:0},n),(0,b.tZ)(Cn.default,{css:b.iv`
            .ant-modal-body {
              display: flex;
              flex-direction: column;
            }
          `,show:a,onHide:c,title:i,footer:(0,b.tZ)(o.Fragment,null,(0,b.tZ)(K.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:()=>u.push(t)},(0,l.t)("Edit chart")),(0,b.tZ)(K.Z,{buttonStyle:"primary",buttonSize:"small",onClick:c},(0,l.t)("Close"))),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*h.gridUnit,minWidth:128*h.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0},r))},Ir=(0,ui.EN)((e=>{var t,n;const[i,a]=gr(e.slice.slice_id),s=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm}))&&(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS)&&(null==(t=(0,yi.Z)().get(e.slice.viz_type))||null==(n=t.behaviors)?void 0:n.includes(xi.cg.INTERACTIVE_CHART)),{componentId:c,dashboardId:u,slice:h,isFullSize:p,cachedDttm:m=[],updatedDttm:g=null,addSuccessToast:f=(()=>{}),addDangerToast:v=(()=>{}),supersetCanShare:y=!1,isCached:x=[]}=e,S="table"===h.viz_type,C=(m||[]).map((e=>mt().utc(e).fromNow())),Z=g?mt().utc(g).fromNow():"",w=[...new Set(x.map((e=>e?(0,l.t)("Cached %s",C):Z?(0,l.t)("Fetched %s",Z):""))||"")],R=w.map(((e,t)=>(0,b.tZ)("div",{key:`tooltip-${t}`},w.length>1?(0,l.t)("Query %s: %s",t+1,e):e))),T=p?(0,l.t)("Exit fullscreen"):(0,l.t)("Enter fullscreen"),k=(0,b.tZ)(Zt.Menu,{onClick:t=>{let{key:n,domEvent:r}=t;switch(n){case Cr:e.updatedDttm&&e.forceRefresh(e.slice.slice_id,e.dashboardId),e.addSuccessToast((0,l.t)("Data refreshed"));break;case wr:null==e.toggleExpandSlice||e.toggleExpandSlice(e.slice.slice_id);break;case vr:null==e.logExploreChart||e.logExploreChart(e.slice.slice_id);break;case br:null==e.exportCSV||e.exportCSV(e.slice.slice_id);break;case Zr:e.handleToggleFullSize();break;case yr:null==e.exportFullCSV||e.exportFullCSV(e.slice.slice_id);break;case Sr:null==e.exportFullXLSX||e.exportFullXLSX(e.slice.slice_id);break;case xr:null==e.exportXLSX||e.exportXLSX(e.slice.slice_id);break;case fr:{const t=document.querySelector(".ant-dropdown:not(.ant-dropdown-hidden)");t.style.visibility="hidden",(0,Jt.Z)((o=e.slice.slice_id,`.dashboard-chart-id-${o}`),e.slice.slice_name,!0)(r).then((()=>{t.style.visibility="visible"})),null==e.logEvent||e.logEvent(vt.xE,{chartId:e.slice.slice_id});break}case Rr:i()}var o},selectable:!1},(0,b.tZ)(Zt.Menu.Item,{key:Cr,disabled:"loading"===e.chartStatus,style:{height:"auto",lineHeight:"initial"}},(0,l.t)("Force refresh"),(0,b.tZ)(kr,null,R)),(0,b.tZ)(Zt.Menu.Item,{key:Zr},T),(0,b.tZ)(Zt.Menu.Divider,null),h.description&&(0,b.tZ)(Zt.Menu.Item,{key:wr},e.isDescriptionExpanded?(0,l.t)("Hide chart description"):(0,l.t)("Show chart description")),e.supersetCanExplore&&(0,b.tZ)(Zt.Menu.Item,{key:vr},(0,b.tZ)(bi.rU,{to:e.exploreUrl},(0,b.tZ)(ee.u,{title:Zi(e.slice.slice_name)},(0,l.t)("Edit chart")))),s&&(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Zt.Menu.Item,{key:Rr},(0,l.t)("Cross-filtering scoping")),(0,b.tZ)(Zt.Menu.Divider,null)),e.supersetCanExplore&&(0,b.tZ)(Zt.Menu.Item,{key:"view_query"},(0,b.tZ)($t.Z,{triggerNode:(0,b.tZ)("span",null,(0,l.t)("View query")),modalTitle:(0,l.t)("View query"),modalBody:(0,b.tZ)(wi.Z,{latestQueryFormData:e.formData}),draggable:!0,resizable:!0,responsive:!0})),e.supersetCanExplore&&(0,b.tZ)(Zt.Menu.Item,{key:"view_results"},(0,b.tZ)(_r,{exploreUrl:e.exploreUrl,triggerNode:(0,b.tZ)("span",null,(0,l.t)("View as table")),modalTitle:(0,l.t)("Chart Data: %s",h.slice_name),modalBody:(0,b.tZ)(Ri.Tg,{queryFormData:e.formData,queryForce:!1,dataSize:20,isRequest:!0,isVisible:!0})})),(0,d.cr)(d.TT.DRILL_TO_DETAIL)&&e.supersetCanExplore&&(0,b.tZ)(Ti.p,{chartId:h.slice_id,formData:e.formData}),(h.description||e.supersetCanExplore)&&(0,b.tZ)(Zt.Menu.Divider,null),y&&(0,b.tZ)(Zt.Menu.SubMenu,{title:(0,l.t)("Share")},(0,b.tZ)(Dt,{dashboardId:u,dashboardComponentId:c,copyMenuItemTitle:(0,l.t)("Copy permalink to clipboard"),emailMenuItemTitle:(0,l.t)("Share chart by email"),emailSubject:(0,l.t)("Superset chart"),emailBody:(0,l.t)("Check out this chart: "),addSuccessToast:f,addDangerToast:v})),"filter_box"!==e.slice.viz_type&&e.supersetCanCSV&&(0,b.tZ)(Zt.Menu.SubMenu,{title:(0,l.t)("Download")},(0,b.tZ)(Zt.Menu.Item,{key:br,icon:(0,b.tZ)(B.Z.FileOutlined,{css:$r})},(0,l.t)("Export to .CSV")),(0,b.tZ)(Zt.Menu.Item,{key:xr,icon:(0,b.tZ)(B.Z.FileOutlined,{css:$r})},(0,l.t)("Export to Excel")),"filter_box"!==e.slice.viz_type&&(0,d.cr)(d.TT.ALLOW_FULL_CSV_EXPORT)&&e.supersetCanCSV&&S&&(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Zt.Menu.Item,{key:yr,icon:(0,b.tZ)(B.Z.FileOutlined,{css:$r})},(0,l.t)("Export to full .CSV")),(0,b.tZ)(Zt.Menu.Item,{key:Sr,icon:(0,b.tZ)(B.Z.FileOutlined,{css:$r})},(0,l.t)("Export to full Excel"))),(0,b.tZ)(Zt.Menu.Item,{key:fr,icon:(0,b.tZ)(B.Z.FileImageOutlined,{css:$r})},(0,l.t)("Download as image"))));return(0,b.tZ)(o.Fragment,null,p&&(0,b.tZ)(B.Z.FullscreenExitOutlined,{style:{fontSize:22},onClick:()=>{e.handleToggleFullSize()}}),(0,b.tZ)(Si.$i,{overlay:k,trigger:["click"],placement:"bottomRight"},(0,b.tZ)("span",{css:b.iv`
            display: flex;
            align-items: center;
          `,id:`slice_${h.slice_id}-controls`,role:"button","aria-label":"More Options"},(0,b.tZ)(Dr,null))),s&&a)}));var Mr=n(87185),Fr=n.n(Mr),Er=n(85716),Or=n(82607);v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    color: ${t.colors.grayscale.light5};
    background: ${t.colors.grayscale.base};
    border-radius: 1em;
    vertical-align: text-top;
    padding: ${t.gridUnit}px ${2*t.gridUnit}px;
    font-size: ${t.typography.sizes.m}px;
    font-weight: ${t.typography.weights.bold};
    min-width: 1em;
    min-height: 1em;
    line-height: 1em;
    vertical-align: middle;
    white-space: nowrap;

    svg {
      position: relative;
      color: ${t.colors.grayscale.light5};
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }

    &:hover {
      cursor: pointer;
      background: ${t.colors.grayscale.dark1};
    }

    &.has-cross-filters {
      background: ${t.colors.primary.base};
      &:hover {
        background: ${t.colors.primary.dark1};
      }
    }
  `}}
`;const zr=v.iK.span`
  ${e=>{let{theme:t}=e;return b.iv`
    font-weight: ${t.typography.weights.bold};
  `}}
`,Ur=v.iK.span`
  ${e=>{let{theme:t}=e;return b.iv`
    padding-right: ${t.gridUnit}px;
    font-style: italic;
    & > * {
      margin-right: ${t.gridUnit}px;
    }
  `}}
`,Pr=v.iK.button`
  ${e=>{let{theme:t}=e;return b.iv`
    cursor: pointer;
    display: flex;
    text-align: left;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    width: 100%;

    &::-moz-focus-inner {
      border: 0;
    }

    & i svg {
      opacity: ${t.opacity.mediumLight};
      margin-right: ${t.gridUnit}px;
      transition: opacity ease-in-out ${t.transitionTiming};
    }

    &:hover i svg {
      opacity: 1;
    }
  `}}
`,Nr=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    margin-top: ${t.gridUnit}px;
    &:not(:last-child) {
      padding-bottom: ${3*t.gridUnit}px;
    }
  `}}
`,Ar=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    min-width: 200px;
    max-width: 300px;
    overflow-x: hidden;

    color: ${t.colors.grayscale.light5};
  `}}
`,qr=v.iK.span`
  max-width: 100%;
  flex-grow: 1;
  overflow: auto;
`,Lr=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    width: 100%;
    height: 1px;
    background-color: ${t.colors.grayscale.light1};
    margin: ${4*t.gridUnit}px 0;
  `}}
`;n(14670);const jr=(0,l.t)("Please apply filter changes"),Vr=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,l.t)("Unknown value"),Kr=e=>{let{filterSetFilterValues:t,dataMaskSelected:n}=e;return t.find((e=>{let{dataMask:t={}}=e;const i=Object.entries(n);return i.every((e=>{var n;let[r,o]=e;const a=(0,mi.JB)(o.filterState,null==t||null==(n=t[r])?void 0:n.filterState,{ignoreUndefined:!0,ignoreNull:!0}),s=i.length===Object.keys(null!=t?t:{}).length;return a&&s}))}))},Br=e=>{let{indicator:{column:t,name:n,value:i,path:r=[]},onClick:o}=e;const a=Vr(i);return(0,b.tZ)(Pr,{onClick:o?()=>o([...r,`LABEL-${t}`]):void 0},o&&(0,b.tZ)("i",null,(0,b.tZ)(B.Z.SearchOutlined,{iconSize:"m",css:b.iv`
              span {
                vertical-align: 0;
              }
            `})),(0,b.tZ)("div",null,(0,b.tZ)(Ur,null,n,a?": ":""),(0,b.tZ)(qr,null,a)))},Hr=e=>{let{appliedCrossFilterIndicators:t=[],appliedIndicators:n=[],onHighlightFilterSource:i,children:a}=e;const[s,d]=(0,o.useState)(!1),c=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs}));(0,o.useEffect)((()=>{s&&window.addEventListener("resize",(()=>d(!1)),{once:!0})}),[s]),(0,o.useEffect)((()=>{d(!1)}),[c]);const u=e=>`${e.column} - ${e.name}`,h=(0,b.tZ)(Ar,null,(0,b.tZ)(b.xB,{styles:e=>(0,b.iv)(".filterStatusPopover{.ant-popover-inner{background-color:",e.colors.grayscale.dark2,"cc;.ant-popover-inner-content{padding:",2*e.gridUnit,"px;}}&.ant-popover-placement-bottom,&.ant-popover-placement-bottomLeft,&.ant-popover-placement-bottomRight{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-top,&.ant-popover-placement-topLeft,&.ant-popover-placement-topRight{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-left,&.ant-popover-placement-leftTop,&.ant-popover-placement-leftBottom{&>.ant-popover-content>.ant-popover-arrow{border-top-color:",e.colors.grayscale.dark2,"cc;border-right-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover-placement-right,&.ant-popover-placement-rightTop,&.ant-popover-placement-rightBottom{&>.ant-popover-content>.ant-popover-arrow{border-bottom-color:",e.colors.grayscale.dark2,"cc;border-left-color:",e.colors.grayscale.dark2,"cc;}}&.ant-popover{color:",e.colors.grayscale.light4,";z-index:99;}}","")}),(0,b.tZ)("div",null,t.length?(0,b.tZ)("div",null,(0,b.tZ)(zr,null,(0,l.t)("Applied cross-filters (%d)",t.length)),(0,b.tZ)(Nr,null,t.map((e=>(0,b.tZ)(Br,{key:u(e),indicator:e,onClick:i}))))):null,t.length&&n.length?(0,b.tZ)(Lr,null):null,n.length?(0,b.tZ)("div",null,(0,b.tZ)(zr,null,(0,l.t)("Applied filters (%d)",n.length)),(0,b.tZ)(Nr,null,n.map((e=>(0,b.tZ)(Br,{key:u(e),indicator:e,onClick:i}))))):null));return(0,b.tZ)(ei.Z,{overlayClassName:"filterStatusPopover",content:h,visible:s,onVisibleChange:function(e){d(e)},placement:"bottomRight",trigger:"hover"},a)};var Wr,Yr=n(55786),Jr=n(5364),Xr=n(10581),Gr=n(10916),Qr=n(69856);!function(e){e.Unset="UNSET",e.Applied="APPLIED",e.Incompatible="INCOMPATIBLE",e.CrossFilterApplied="CROSS_FILTER_APPLIED"}(Wr||(Wr={}));const eo=new Set(Object.values(Qr.i2)),to=e=>{var t;return null==e||!e.label||null!=e&&null!=(t=e.label)&&t.includes(void 0)?null!=e&&e.value?(0,Yr.Z)(null==e?void 0:e.value).join(", "):null:e.label},no=(e,t,n)=>{const i=t.columns[e],r=Array.isArray(i)?i:[i];if(null==i||t.isDateFilter&&i===Jr.vM||0===r.length)return[];if(t.isDateFilter&&eo.has(e)){const t=((e===Qr.i2.time_grain_sqla?n.time_grain_sqla:n.granularity)||[]).reduce(((e,t)=>{let[n,i]=t;return{...e,[n]:i}}),{});return r.map((e=>t[e]||e))}return r},io=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.applied_filters)||[]).map((e=>e.column)))},ro=e=>{var t,n;return new Set(((null==e||null==(t=e.queriesResponse)||null==(n=t[0])?void 0:n.rejected_filters)||[]).map((e=>(0,Xr.Z)(e.column))))},oo=(e,t,n)=>{var i,r,o,a,s;const l=null==t?void 0:t.filterState,d=null==t||null==(i=t.extraFormData)?void 0:i.filters,c=to(l),u=null==l?void 0:l.filters,h=(null==d||null==(r=d[0])?void 0:r.col)||u&&Object.keys(u)[0],p=Object.values(n).find((t=>{var n;return(null==t||null==(n=t.meta)?void 0:n.chartId)===e}));return{column:h,name:(null==p||null==(o=p.meta)?void 0:o.sliceNameOverride)||(null==p||null==(a=p.meta)?void 0:a.sliceName)||"",path:[...null!=(s=null==p?void 0:p.parents)?s:[],(null==p?void 0:p.id)||""],value:c}},ao={},so={},lo=e=>{let{label:t,column:n,type:i=Gr.gT.NativeFilters,rejectedColumns:r,appliedColumns:o}=e;const a=null!==t,s=i===Gr.gT.CrossFilters?Wr.CrossFilterApplied:Wr.Applied;return!n&&a?s:n&&null!=r&&r.has(n)?Wr.Incompatible:n&&null!=o&&o.has(n)&&a?s:Wr.Unset},co={},uo={},ho={},po=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    margin-right: ${t.gridUnit}px;\n    padding-left: ${2*t.gridUnit}px;\n    padding-right: ${2*t.gridUnit}px;\n    background: ${t.colors.grayscale.light4};\n    border-radius: 4px;\n    height: 100%;\n    .anticon {\n      vertical-align: middle;\n      color: ${t.colors.grayscale.base};\n      &:hover {\n        color: ${t.colors.grayscale.light1}\n      }\n    }\n\n    .incompatible-count {\n      font-size: ${t.typography.sizes.s}px;\n    }\n  `}}
`,mo=(0,v.iK)(Or.Z)`
  ${e=>{let{theme:t}=e;return`\n    vertical-align: middle;\n    margin-left: ${2*t.gridUnit}px;\n    &>sup {\n      padding: 0 ${t.gridUnit}px;\n      min-width: ${4*t.gridUnit}px;\n      height: ${4*t.gridUnit}px;\n      line-height: 1.5;\n      font-weight: ${t.typography.weights.medium};\n      font-size: ${t.typography.sizes.s-1}px;\n      box-shadow: none;\n    }\n  `}}
`,go=[],fo=e=>{let{chartId:t}=e;const n=(0,r.I0)(),i=(0,r.v9)((e=>e.datasources)),a=(0,r.v9)((e=>e.dashboardFilters)),s=(0,r.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters})),l=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),c=(0,r.v9)((e=>e.charts[t])),u=(0,r.v9)((e=>e.dashboardLayout.present)),h=(0,r.v9)((e=>e.dataMask)),[p,m]=(0,o.useState)(go),[g,v]=(0,o.useState)(go),y=(0,o.useCallback)((e=>{n((0,Bn.E2)(e))}),[n]),x=(0,Er.D)(c),S=null==x?void 0:x.chartStatus,C=(0,Er.D)(a),Z=(0,Er.D)(i),w=(null==c?void 0:c.chartStatus)&&["rendered","success"].includes(c.chartStatus);(0,o.useEffect)((()=>{if(!w&&g.length>0)v(go);else if("success"!==S){var e,n,r,o,s,l,d,u;(null==c||null==(e=c.queriesResponse)||null==(n=e[0])?void 0:n.rejected_filters)===(null==x||null==(r=x.queriesResponse)||null==(o=r[0])?void 0:o.rejected_filters)&&(null==c||null==(s=c.queriesResponse)||null==(l=s[0])?void 0:l.applied_filters)===(null==x||null==(d=x.queriesResponse)||null==(u=d[0])?void 0:u.applied_filters)&&a===C&&i===Z||v(((e,t,n,i)=>{const r=io(i),o=ro(i),a=Object.values(t).filter((t=>t.chartId!==e)),s=Object.entries(n).filter((e=>{let[t]=e;return a.find((e=>e.datasourceId===t))})).map((e=>{let[,t]=e;return t})),l=so[e];if(ao[e]&&(0,mi.JB)(null==l?void 0:l.appliedColumns,r)&&(0,mi.JB)(null==l?void 0:l.rejectedColumns,o)&&(0,mi.JB)(null==l?void 0:l.matchingFilters,a)&&(0,mi.JB)(null==l?void 0:l.matchingDatasources,s))return ao[e];const d=a.reduce(((t,i)=>t.concat(((e,t,n,i,r)=>{const o=(e,t)=>i.has(e)&&t.columns[e]?Wr.Applied:r.has(e)?Wr.Incompatible:Wr.Unset;return Object.keys(t.columns).filter((n=>(0,Qt.up)({filterScope:t.scopes[n]}).includes(e))).map((e=>({column:e,name:t.labels[e]||e,value:no(e,t,n),status:o(e,t),path:t.directPathToFilter})))})(e,i,n[i.datasourceId]||{},r,o))),[]);return d.sort(((e,t)=>e.name.localeCompare(t.name))),ao[e]=d,so[e]={appliedColumns:r,rejectedColumns:o,matchingFilters:a,matchingDatasources:s},d})(t,a,i,c))}}),[c,t,a,g.length,i,null==x?void 0:x.queriesResponse,S,C,Z,w]);const R=(0,Er.D)(s),T=(0,Er.D)(u),k=(0,Er.D)(h),D=(0,Er.D)(l);(0,o.useEffect)((()=>{if(!w&&p.length>0)m(go);else if("success"!==S){var e,n,i,r,o,a,g,f;(null==c||null==(e=c.queriesResponse)||null==(n=e[0])?void 0:n.rejected_filters)===(null==x||null==(i=x.queriesResponse)||null==(r=i[0])?void 0:r.rejected_filters)&&(null==c||null==(o=c.queriesResponse)||null==(a=o[0])?void 0:a.applied_filters)===(null==x||null==(g=x.queriesResponse)||null==(f=g[0])?void 0:f.applied_filters)&&s===R&&u===T&&h===k&&D===l||m(function(e,t,n,i,r,o){void 0===o&&(o=co);const a=io(i),s=ro(i),l=ho[n];if(uo[n]&&(0,mi.JB)(null==l?void 0:l.appliedColumns,a)&&(0,mi.JB)(null==l?void 0:l.rejectedColumns,s)&&(null==l?void 0:l.nativeFilters)===e&&(null==l?void 0:l.dashboardLayout)===r&&(null==l?void 0:l.chartConfiguration)===o&&(null==l?void 0:l.dataMask)===t)return uo[n];let c=[];(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&(c=e&&Object.values(e).filter((e=>{var t;return e.type===Gr.BE.NATIVE_FILTER&&(null==(t=e.chartsInScope)?void 0:t.includes(n))})).map((e=>{var n,i,r,o;const l=null==(n=e.targets)||null==(i=n[0])||null==(r=i.column)?void 0:r.name,d=null==(o=t[e.id])?void 0:o.filterState,c=to(d);return{column:l,name:e.name,path:[e.id],status:lo({label:c,column:l,rejectedColumns:s,appliedColumns:a}),value:c}})));let u=[];(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS)&&(u=function(e,t,n,i,r,o,a){void 0===i&&(i=co),void 0===a&&(a=!1);let s=[];return(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS)&&(s=Object.values(i).filter((e=>{var n,i;const r=null==(n=e.crossFilters)||null==(i=n.chartsInScope)?void 0:i.includes(t);return!(a||!r)||!(!a||r)})).map((t=>{const i=oo(Number(t.id),e[t.id],n),a=lo({label:i.value,column:i.column?(0,Xr.Z)(i.column):void 0,type:Gr.gT.CrossFilters,appliedColumns:r,rejectedColumns:o});return{...i,status:a}})).filter((e=>e.status===Wr.CrossFilterApplied))),s}(t,n,r,o,a,s));const h=u.concat(c);return uo[n]=h,ho[n]={nativeFilters:e,dashboardLayout:r,chartConfiguration:o,dataMask:t,appliedColumns:a,rejectedColumns:s},h}(s,h,t,c,u,l))}}),[c,t,l,h,s,p.length,u,null==x?void 0:x.queriesResponse,D,S,T,k,R,w]);const $=(0,o.useMemo)((()=>Fr()((e=>{const t=[Wr.Applied,Wr.Unset,Wr.Incompatible];return e.sort(((e,n)=>t.indexOf(e.status)-t.indexOf(n.status)))})([...g,...p]),((e,t)=>e.column===t.column&&e.name===t.name&&(e.status!==Wr.Applied||t.status!==Wr.Applied)))),[g,p]),_=(0,o.useMemo)((()=>$.filter((e=>e.status===Wr.CrossFilterApplied))),[$]),I=(0,o.useMemo)((()=>$.filter((e=>e.status===Wr.Applied))),[$]);return _.length||I.length?(0,b.tZ)(Hr,{appliedCrossFilterIndicators:_,appliedIndicators:I,onHighlightFilterSource:y},(0,b.tZ)(po,{className:f()("filter-counts",!!_.length&&"has-cross-filters")},(0,b.tZ)(B.Z.Filter,{iconSize:"m"}),(0,b.tZ)(mo,{className:"applied-count",count:I.length+_.length,showZero:!0}))):null},vo=o.memo(fo);var bo=n(50232);const yo=(0,l.t)("Annotation layers are still loading."),xo=(0,l.t)("One ore more annotation layers failed loading."),So=(0,v.iK)(B.Z.ApartmentOutlined)`
  ${e=>{let{theme:t}=e;return`\n    cursor: default;\n    color: ${t.colors.primary.base};\n    line-height: 1.8;\n  `}}
`,Co=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    font-size: ${t.typography.sizes.l}px;
    font-weight: ${t.typography.weights.bold};
    margin-bottom: ${t.gridUnit}px;
    display: flex;
    max-width: 100%;
    align-items: flex-start;
    min-height: 0;

    & > .header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      & > span.ant-tooltip-open {
        display: inline;
      }
    }

    & > .header-controls {
      display: flex;
      align-items: center;
      height: 24px;

      & > * {
        margin-left: ${2*t.gridUnit}px;
      }
    }

    .dropdown.btn-group {
      pointer-events: none;
      vertical-align: top;
      & > * {
        pointer-events: auto;
      }
    }

    .dropdown-toggle.btn.btn-default {
      background: none;
      border: none;
      box-shadow: none;
    }

    .dropdown-menu.dropdown-menu-right {
      top: ${5*t.gridUnit}px;
    }

    .divider {
      margin: ${t.gridUnit}px 0;
    }

    .refresh-tooltip {
      display: block;
      height: ${4*t.gridUnit}px;
      margin: ${t.gridUnit}px 0;
      color: ${t.colors.text.label};
    }
  `}}
`,Zo=e=>{let{innerRef:t=null,forceRefresh:n=(()=>({})),updateSliceName:i=(()=>({})),toggleExpandSlice:a=(()=>({})),logExploreChart:s=(()=>({})),logEvent:d,exportCSV:c=(()=>({})),exportXLSX:u=(()=>({})),editMode:h=!1,annotationQuery:p={},annotationError:m={},cachedDttm:g=null,updatedDttm:f=null,isCached:v=[],isExpanded:y=!1,sliceName:x="",supersetCanExplore:S=!1,supersetCanShare:C=!1,supersetCanCSV:Z=!1,exportFullCSV:w,exportFullXLSX:R,slice:T,componentId:k,dashboardId:D,addSuccessToast:$,addDangerToast:_,handleToggleFullSize:I,isFullSize:M,chartStatus:F,formData:E,width:O,height:z}=e;const U=(0,fi.fG)(),P=(0,o.useContext)(bo.DashboardPageIdContext),[N,A]=(0,o.useState)(null),q=(0,o.useRef)(null),L=(0,r.v9)((e=>{var t,n;return null==(t=e.dataMask[null==T?void 0:T.slice_id])||null==(n=t.filterState)?void 0:n.value})),j=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),V=!h&&S;(0,o.useEffect)((()=>{const e=q.current;V?A(Zi(x)):e&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)?A(null!=x?x:null):A(null)}),[x,O,z,V]);const K=`/explore/?dashboard_page_id=${P}&slice_id=${T.slice_id}`;return(0,b.tZ)(Co,{ref:t},(0,b.tZ)("div",{className:"header-title",ref:q},(0,b.tZ)(ee.u,{title:N},(0,b.tZ)(vi.Z,{title:x||(h?"---":""),canEdit:h,onSaveTitle:i,showTooltip:!1,url:V?K:void 0})),!!Object.values(p).length&&(0,b.tZ)(ee.u,{id:"annotations-loading-tooltip",placement:"top",title:yo},(0,b.tZ)("i",{role:"img","aria-label":yo,className:"fa fa-refresh warning"})),!!Object.values(m).length&&(0,b.tZ)(ee.u,{id:"annotation-errors-tooltip",placement:"top",title:xo},(0,b.tZ)("i",{role:"img","aria-label":xo,className:"fa fa-exclamation-circle danger"}))),(0,b.tZ)("div",{className:"header-controls"},!h&&(0,b.tZ)(o.Fragment,null,L&&(0,b.tZ)(ee.u,{placement:"top",title:(0,l.t)("This chart applies cross-filters to charts whose datasets contain columns with the same name.")},(0,b.tZ)(So,{iconSize:"m"})),!U.hideChartControls&&(0,b.tZ)(vo,{chartId:T.slice_id}),!U.hideChartControls&&(0,b.tZ)(Ir,{slice:T,isCached:v,isExpanded:y,cachedDttm:g,updatedDttm:f,toggleExpandSlice:a,forceRefresh:n,logExploreChart:s,logEvent:d,exportCSV:c,exportFullCSV:w,exportXLSX:u,exportFullXLSX:R,supersetCanExplore:S,supersetCanShare:C,supersetCanCSV:Z,componentId:k,dashboardId:D,addSuccessToast:$,addDangerToast:_,handleToggleFullSize:I,isFullSize:M,isDescriptionExpanded:y,chartStatus:F,formData:E,exploreUrl:K,crossFiltersEnabled:j}))))},wo={height:s().number.isRequired};function Ro(e){let{height:t}=e;return(0,b.tZ)("div",{className:"missing-chart-container",style:{height:t+20}},(0,b.tZ)("div",{className:"missing-chart-body"},(0,l.t)("There is no chart definition associated with this component, could it have been deleted?"),(0,b.tZ)("br",null),(0,b.tZ)("br",null),(0,l.t)("Delete this container and save to remove this message.")))}Ro.propTypes=wo;var To=n(20194);const ko={id:s().number.isRequired,componentId:s().string.isRequired,dashboardId:s().number.isRequired,width:s().number.isRequired,height:s().number.isRequired,updateSliceName:s().func.isRequired,isComponentVisible:s().bool,handleToggleFullSize:s().func.isRequired,setControlValue:s().func,chart:Y.$6.isRequired,formData:s().object.isRequired,labelColors:s().object,sharedLabelColors:s().object,datasource:s().object,slice:Y.Rw.isRequired,sliceName:s().string.isRequired,timeout:s().number.isRequired,maxRows:s().number.isRequired,filters:s().object.isRequired,refreshChart:s().func.isRequired,logEvent:s().func.isRequired,toggleExpandSlice:s().func.isRequired,changeFilter:s().func.isRequired,setFocusedFilterField:s().func.isRequired,unsetFocusedFilterField:s().func.isRequired,editMode:s().bool.isRequired,isExpanded:s().bool.isRequired,isCached:s().bool,supersetCanExplore:s().bool.isRequired,supersetCanShare:s().bool.isRequired,supersetCanCSV:s().bool.isRequired,addSuccessToast:s().func.isRequired,addDangerToast:s().func.isRequired,ownState:s().object,filterState:s().object,postTransformProps:s().func,datasetsStatus:s().oneOf(["loading","error","complete"]),isInView:s().bool,emitCrossFilters:s().bool},Do=Object.keys(ko).filter((e=>"width"!==e&&"height"!==e&&"isComponentVisible"!==e)),$o=new Set(["filter_box"]),_o=v.iK.div`
  overflow: hidden;
  position: relative;

  &.dashboard-chart--overflowable {
    overflow: visible;
  }
`,Io=v.iK.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,Mo=v.iK.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;class Fo extends o.Component{constructor(e){super(e),this.logExploreChart=()=>{this.props.logEvent(vt.oK,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached})},this.onExploreChart=async e=>{const t=e.shiftKey||e.ctrlKey||e.metaKey;try{const e=window.localStorage.getItem("last_tab_id"),n=e?String(Number.parseInt(e,10)+1):void 0,i=await(0,gi.nv)(this.props.datasource.id,this.props.datasource.type,this.props.formData,this.props.slice.slice_id,n),r=(0,hi.y8)(null,{[wt.KD.formDataKey.name]:i,[wt.KD.sliceId.name]:this.props.slice.slice_id});t?window.open(r,"_blank","noreferrer"):this.props.history.push(r)}catch(e){Tt.Z.error(e),this.props.addDangerToast((0,l.t)("An error occurred while opening Explore"))}},this.state={width:e.width,height:e.height,descriptionHeight:0},this.changeFilter=this.changeFilter.bind(this),this.handleFilterMenuOpen=this.handleFilterMenuOpen.bind(this),this.handleFilterMenuClose=this.handleFilterMenuClose.bind(this),this.exportCSV=this.exportCSV.bind(this),this.exportFullCSV=this.exportFullCSV.bind(this),this.exportXLSX=this.exportXLSX.bind(this),this.exportFullXLSX=this.exportFullXLSX.bind(this),this.forceRefresh=this.forceRefresh.bind(this),this.resize=D()(this.resize.bind(this),500),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.setHeaderRef=this.setHeaderRef.bind(this),this.getChartHeight=this.getChartHeight.bind(this),this.getDescriptionHeight=this.getDescriptionHeight.bind(this)}shouldComponentUpdate(e,t){var n,i,r,o,a,s,l,d,c;if(t.width!==this.state.width||t.height!==this.state.height||t.descriptionHeight!==this.state.descriptionHeight||!ci()(e.datasource,this.props.datasource))return!0;if((null==(n=this.props)||null==(i=n.chart)?void 0:i.chartStatus)!==(null==e||null==(r=e.chart)?void 0:r.chartStatus)&&"loading"===(null==(o=this.props)||null==(a=o.chart)?void 0:a.chartStatus))return!0;if(e.isComponentVisible){if(e.chart.triggerQuery)return!0;if(e.isFullSize!==this.props.isFullSize)return this.resize(),!1;e.width===this.props.width&&e.height===this.props.height&&e.width===this.state.width&&e.height===this.state.height||this.resize();for(let t=0;t<Do.length;t+=1){const n=Do[t];if(!(0,mi.JB)(e[n],this.props[n]))return!0}}else if((null==(s=e.formData)?void 0:s.color_scheme)!==(null==(l=this.props.formData)?void 0:l.color_scheme)||!(0,mi.JB)(null==(d=e.formData)?void 0:d.label_colors,null==(c=this.props.formData)?void 0:c.label_colors))return!0;return this.props.cacheBusterProp!==e.cacheBusterProp}componentDidMount(){if(this.props.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}componentWillUnmount(){this.resize.cancel()}componentDidUpdate(e){if(this.props.isExpanded!==e.isExpanded){const e=this.getDescriptionHeight();this.setState({descriptionHeight:e})}}getDescriptionHeight(){return this.props.isExpanded&&this.descriptionRef?this.descriptionRef.offsetHeight:0}getChartHeight(){const e=this.getHeaderHeight();return Math.max(this.state.height-e-this.state.descriptionHeight,20)}getHeaderHeight(){if(this.headerRef){const e=getComputedStyle(this.headerRef).getPropertyValue("margin-bottom"),t=parseInt(e,10)||0;return this.headerRef.offsetHeight+t}return 22}setDescriptionRef(e){this.descriptionRef=e}setHeaderRef(e){this.headerRef=e}resize(){const{width:e,height:t}=this.props;this.setState((()=>({width:e,height:t})))}changeFilter(e){void 0===e&&(e={}),this.props.logEvent(vt.Qg,{id:this.props.chart.id,columns:Object.keys(e)}),this.props.changeFilter(this.props.chart.id,e)}handleFilterMenuOpen(e,t){this.props.setFocusedFilterField(e,t)}handleFilterMenuClose(e,t){this.props.unsetFocusedFilterField(e,t)}exportFullCSV(){this.exportCSV(!0)}exportCSV(e){void 0===e&&(e=!1),this.exportTable("csv",e)}exportXLSX(){this.exportTable("xlsx",!1)}exportFullXLSX(){this.exportTable("xlsx",!0)}exportTable(e,t){const n="csv"===e?vt.PC:vt.br;this.props.logEvent(n,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),(0,hi.pe)({formData:t?{...this.props.formData,row_limit:this.props.maxRows}:this.props.formData,resultType:"full",resultFormat:e,force:!0,ownState:this.props.ownState})}forceRefresh(){return this.props.logEvent(vt.TD,{slice_id:this.props.slice.slice_id,is_cached:this.props.isCached}),this.props.refreshChart(this.props.chart.id,!0,this.props.dashboardId)}render(){const{id:e,componentId:t,dashboardId:n,chart:i,slice:r,datasource:o,isExpanded:a,editMode:s,filters:l,formData:d,labelColors:c,sharedLabelColors:u,updateSliceName:h,sliceName:p,toggleExpandSlice:m,timeout:g,supersetCanExplore:v,supersetCanShare:y,supersetCanCSV:x,addSuccessToast:S,addDangerToast:C,ownState:Z,filterState:w,handleToggleFullSize:R,isFullSize:T,setControlValue:k,postTransformProps:D,datasetsStatus:$,isInView:_,emitCrossFilters:I,logEvent:M}=this.props,{width:F}=this.state;if(!i||!r)return(0,b.tZ)(Ro,{height:this.getChartHeight()});const{queriesResponse:E,chartUpdateEndTime:O,chartStatus:z}=i,U="loading"===z,P=(null==E?void 0:E.map((e=>{let{is_cached:t}=e;return t})))||[],N=(null==E?void 0:E.map((e=>{let{cached_dttm:t}=e;return t})))||[],A=$o.has(r.viz_type),q=(0,Qt.Z3)(e)?function(e){let{activeFilters:t={},filterId:n}=e;return Object.entries(t).reduce(((e,t)=>{const[i,{values:r}]=t,{chartId:o,column:a}=(0,To._)(i);return o===n?{...e,[a]:r}:e}),{})}({activeFilters:l,filterId:e}):{};return(0,b.tZ)(Mo,{className:"chart-slice","data-test-chart-id":e,"data-test-viz-type":r.viz_type,"data-test-chart-name":r.slice_name},(0,b.tZ)(Zo,{innerRef:this.setHeaderRef,slice:r,isExpanded:a,isCached:P,cachedDttm:N,updatedDttm:O,toggleExpandSlice:m,forceRefresh:this.forceRefresh,editMode:s,annotationQuery:i.annotationQuery,logExploreChart:this.logExploreChart,logEvent:M,onExploreChart:this.onExploreChart,exportCSV:this.exportCSV,exportXLSX:this.exportXLSX,exportFullCSV:this.exportFullCSV,exportFullXLSX:this.exportFullXLSX,updateSliceName:h,sliceName:p,supersetCanExplore:v,supersetCanShare:y,supersetCanCSV:x,componentId:t,dashboardId:n,filters:l,addSuccessToast:S,addDangerToast:C,handleToggleFullSize:R,isFullSize:T,chartStatus:i.chartStatus,formData:d,width:F,height:this.getHeaderHeight()}),a&&r.description_markeddown&&(0,b.tZ)("div",{className:"slice_description bs-callout bs-callout-default",ref:this.setDescriptionRef,dangerouslySetInnerHTML:{__html:r.description_markeddown}}),(0,b.tZ)(_o,{className:f()("dashboard-chart",A&&"dashboard-chart--overflowable")},U&&(0,b.tZ)(Io,{style:{width:F,height:this.getChartHeight()}}),(0,b.tZ)(pi.Z,{width:F,height:this.getChartHeight(),addFilter:this.changeFilter,onFilterMenuOpen:this.handleFilterMenuOpen,onFilterMenuClose:this.handleFilterMenuClose,annotationData:i.annotationData,chartAlert:i.chartAlert,chartId:e,chartStatus:z,datasource:o,dashboardId:n,initialValues:q,formData:d,labelColors:c,sharedLabelColors:u,ownState:Z,filterState:w,queriesResponse:i.queriesResponse,timeout:g,triggerQuery:i.triggerQuery,vizType:r.viz_type,setControlValue:k,postTransformProps:D,datasetsStatus:$,isInView:_,emitCrossFilters:I})))}}Fo.propTypes=ko,Fo.defaultProps={isCached:!1,isComponentVisible:!0};const Eo=(0,ui.EN)(Fo),Oo={},zo=(0,r.$j)((function(e,t){var n,i,r,o,a;let{charts:s,dashboardInfo:l,dashboardState:d,dataMask:c,datasources:u,sliceEntities:h,nativeFilters:p,common:m}=e;const{id:g,extraControls:f,setControlValue:v}=t,b=s[g]||Oo,y=b&&b.form_data&&u[b.form_data.datasource]||Mi.tw,{colorScheme:x,colorNamespace:S,datasetsStatus:C}=d,Z=(null==l||null==(n=l.metadata)?void 0:n.label_colors)||{},w=(null==l||null==(i=l.metadata)?void 0:i.shared_label_colors)||{},R=(0,li.Z)({chart:b,chartConfiguration:null==(r=l.metadata)?void 0:r.chart_configuration,charts:s,filters:(0,Qt._f)(g),colorScheme:x,colorNamespace:S,sliceId:g,nativeFilters:null==p?void 0:p.filters,allSliceIds:d.sliceIds,dataMask:c,extraControls:f,labelColors:Z,sharedLabelColors:w});return R.dashboardId=l.id,{chart:b,datasource:y,labelColors:Z,sharedLabelColors:w,slice:h.slices[g],timeout:l.common.conf.SUPERSET_WEBSERVER_TIMEOUT,filters:(0,Qt.De)()||Oo,formData:R,editMode:d.editMode,isExpanded:!!d.expandedSlices[g],supersetCanExplore:!!l.superset_can_explore,supersetCanShare:!!l.superset_can_share,supersetCanCSV:!!l.superset_can_csv,ownState:null==(o=c[g])?void 0:o.ownState,filterState:null==(a=c[g])?void 0:a.filterState,maxRows:m.conf.SQL_MAX_ROW,setControlValue:v,datasetsStatus:C,emitCrossFilters:!!l.crossFiltersEnabled}}),(function(e){return(0,i.DE)({updateComponents:Hn.WZ,addSuccessToast:Wn.ws,addDangerToast:Wn.Gb,toggleExpandSlice:Bn.WL,changeFilter:ai.M6,setFocusedFilterField:Bn.GH,unsetFocusedFilterField:Bn.oY,refreshChart:si.refreshChart,logEvent:Yn.logEvent},e)}))(Eo),Uo=e=>{let{onDelete:t}=e;return(0,b.tZ)(Qn,{onClick:t,icon:(0,b.tZ)(B.Z.Trash,{iconSize:"xl"})})},Po=v.iK.div`
  .hover-menu {
    opacity: 0;
    position: absolute;
    z-index: 10;
    font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}};
  }

  .hover-menu--left {
    width: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
    top: 50%;
    transform: translate(0, -50%);
    left: ${e=>{let{theme:t}=e;return-7*t.gridUnit}}px;
    padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hover-menu--left > :nth-child(n):not(:only-child):not(:last-child) {
    margin-bottom: ${e=>{let{theme:t}=e;return 3*t.gridUnit}}px;
  }

  .hover-menu--top {
    height: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
    top: ${e=>{let{theme:t}=e;return-6*t.gridUnit}}px;
    left: 50%;
    transform: translate(-50%);
    padding: 0 ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;class No extends o.PureComponent{render(){const{innerRef:e,position:t,children:n}=this.props;return(0,b.tZ)(Po,{className:"hover-menu-container"},(0,b.tZ)("div",{ref:e,className:f()("hover-menu","left"===t&&"hover-menu--left","top"===t&&"hover-menu--top")},n))}}No.defaultProps={position:"left",innerRef:null,children:null};var Ao=n(29119);const qo={right:function(){return(0,b.tZ)("div",{className:"resize-handle resize-handle--right"})},bottom:function(){return(0,b.tZ)("div",{className:"resize-handle resize-handle--bottom"})},bottomRight:function(){return(0,b.tZ)("div",{className:"resize-handle resize-handle--bottom-right"})}},Lo={top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},jo={widthAndHeight:Lo,widthOnly:{...Lo,bottomRight:!1,bottom:!1},heightOnly:{...Lo,bottomRight:!1,right:!1},notAdjustable:{...Lo,bottomRight:!1,bottom:!1,right:!1}},Vo=Number.MAX_VALUE,Ko={id:s().string.isRequired,children:s().node,adjustableWidth:s().bool,adjustableHeight:s().bool,gutterWidth:s().number,widthStep:s().number,heightStep:s().number,widthMultiple:s().number,heightMultiple:s().number,minWidthMultiple:s().number,maxWidthMultiple:s().number,minHeightMultiple:s().number,maxHeightMultiple:s().number,staticHeight:s().number,staticHeightMultiple:s().number,staticWidth:s().number,staticWidthMultiple:s().number,onResizeStop:s().func,onResize:s().func,onResizeStart:s().func,editMode:s().bool.isRequired},Bo={children:null,adjustableWidth:!0,adjustableHeight:!0,gutterWidth:W.es,widthStep:W.cd,heightStep:W.cd,widthMultiple:null,heightMultiple:null,minWidthMultiple:1,maxWidthMultiple:Vo,minHeightMultiple:1,maxHeightMultiple:Vo,staticHeight:null,staticHeightMultiple:null,staticWidth:null,staticWidthMultiple:null,onResizeStop:null,onResize:null,onResizeStart:null},Ho=[W.cd,W.cd],Wo={right:"resizable-container-handle--right",bottom:"resizable-container-handle--bottom"},Yo=(0,v.iK)(Ao.e)`
  ${e=>{let{theme:t}=e;return b.iv`
    &.resizable-container {
      background-color: transparent;
      position: relative;

      /* re-resizable sets an empty div to 100% width and height, which doesn't
      play well with many 100% height containers we need */

      & ~ div {
        width: auto !important;
        height: auto !important;
      }
    }

    &.resizable-container--resizing {
      /* after ensures border visibility on top of any children */

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px ${t.colors.primary.base};
      }

      & > span .resize-handle {
        border-color: ${t.colors.primary.base};
      }
    }

    .resize-handle {
      opacity: 0;
      z-index: 10;

      &--bottom-right {
        position: absolute;
        border-right: 1px solid ${t.colors.text.label};
        border-bottom: 1px solid ${t.colors.text.label};
        right: ${4*t.gridUnit}px;
        bottom: ${4*t.gridUnit}px;
        width: ${2*t.gridUnit}px;
        height: ${2*t.gridUnit}px;
      }

      &--right {
        width: ${t.gridUnit/2}px;
        height: ${5*t.gridUnit}px;
        right: ${t.gridUnit}px;
        top: 50%;
        transform: translate(0, -50%);
        position: absolute;
        border-left: 1px solid ${t.colors.text.label};
        border-right: 1px solid ${t.colors.text.label};
      }

      &--bottom {
        height: ${t.gridUnit/2}px;
        width: ${5*t.gridUnit}px;
        bottom: ${t.gridUnit}px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        border-top: 1px solid ${t.colors.text.label};
        border-bottom: 1px solid ${t.colors.text.label};
      }
    }
  `}}

  &.resizable-container:hover .resize-handle,
  &.resizable-container--resizing .resize-handle {
    opacity: 1;
  }

  .dragdroppable-column & .resizable-container-handle--right {
    /* override the default because the inner column's handle's mouse target is very small */
    right: 0 !important;
  }

  & .resizable-container-handle--bottom {
    bottom: 0 !important;
  }
`;class Jo extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResize=this.handleResize.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this)}handleResizeStart(e,t,n){const{id:i,onResizeStart:r}=this.props;r&&r({id:i,direction:t,ref:n}),this.setState((()=>({isResizing:!0})))}handleResize(e,t,n){const{onResize:i,id:r}=this.props;i&&i({id:r,direction:t,ref:n})}handleResizeStop(e,t,n,i){const{id:r,onResizeStop:o,widthStep:a,heightStep:s,widthMultiple:l,heightMultiple:d,adjustableHeight:c,adjustableWidth:u,gutterWidth:h}=this.props;if(o){const e=l+Math.round(i.width/(a+h)),t=d+Math.round(i.height/s);o({id:r,widthMultiple:u?e:null,heightMultiple:c?t:null}),this.setState((()=>({isResizing:!1})))}}render(){const{children:e,adjustableWidth:t,adjustableHeight:n,widthStep:i,heightStep:r,widthMultiple:o,heightMultiple:a,staticHeight:s,staticHeightMultiple:l,staticWidth:d,staticWidthMultiple:c,minWidthMultiple:u,maxWidthMultiple:h,minHeightMultiple:p,maxHeightMultiple:m,gutterWidth:g,editMode:v}=this.props,y={width:t?(i+g)*o-g:c&&c*i||d||void 0,height:n?r*a:l&&l*r||s||void 0};let x=jo.notAdjustable;v&&t&&n?x=jo.widthAndHeight:v&&t?x=jo.widthOnly:v&&n&&(x=jo.heightOnly);const{isResizing:S}=this.state;return(0,b.tZ)(Yo,{enable:x,grid:Ho,minWidth:t?u*(i+g)-g:void 0,minHeight:n?p*r:void 0,maxWidth:t?Math.max(y.width,Math.min(Vo,h*(i+g)-g)):void 0,maxHeight:n?Math.max(y.height,Math.min(Vo,m*r)):void 0,size:y,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,handleComponent:qo,className:f()("resizable-container",S&&"resizable-container--resizing"),handleClasses:Wo},e)}}Jo.propTypes=Ko,Jo.defaultProps=Bo;const Xo=Jo;function Go(e){const t={};if(e.length>0){const n=e.slice();for(;n.length;){const e=n.pop(),i=e.split("-")[0];if(t[i.toLowerCase()]=e,!W.Ep.includes(i))break}}return t}const Qo=b.iv`
  && {
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 0;
  }
`;var ea=n(78186);const ta=(0,v.iK)(Zt.Menu.Item)`
  &.ant-menu-item {
    height: auto;
    line-height: 1.4;

    padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
    padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;

    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:hover {
      background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light3}};
    }

    &.active {
      font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
      background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    }
  }

  &.ant-menu-item-selected {
    color: unset;
  }
`;var na={name:"s5xdrg",styles:"display:flex;align-items:center"};const ia=e=>{const{value:t,options:n,onChange:i,renderButton:r=(e=>e.label),renderOption:o=(e=>(0,b.tZ)("div",{className:e.className},e.label))}=e,a=(0,v.Fg)(),s=n.find((e=>e.value===t));return(0,b.tZ)(V.Gj,{trigger:["click"],overlayStyle:{zIndex:a.zIndex.max},overlay:(0,b.tZ)(Zt.Menu,{onClick:e=>{let{key:t}=e;return i(t)}},n.map((e=>(0,b.tZ)(ta,{id:"menu-item",key:e.value,className:f()("dropdown-item",{active:e.value===t})},o(e)))))},(0,b.tZ)("div",{role:"button",css:na},s&&r(s),(0,b.tZ)(B.Z.CaretDown,{iconColor:a.colors.grayscale.base,css:(0,b.iv)({marginTop:.5*a.gridUnit},"","")})))},ra=[{value:"edit",label:(0,l.t)("Edit")},{value:"preview",label:(0,l.t)("Preview")}];class oa extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,b.tZ)(ia,{id:e,options:ra,value:t,onChange:n})}}const aa=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    position: relative;
    outline: none;

    &.with-popover-menu--focused:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid ${t.colors.primary.base};
      pointer-events: none;
    }

    .dashboard-component-tabs li &.with-popover-menu--focused:after {
      top: ${-3*t.gridUnit}px;
      left: ${-2*t.gridUnit}px;
      width: calc(100% + ${4*t.gridUnit}px);
      height: calc(100% + ${7*t.gridUnit}px);
    }
  `}}
`,sa=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    position: absolute;
    flex-wrap: nowrap;
    left: 1px;
    top: -42px;
    height: ${10*t.gridUnit}px;
    padding: 0 ${4*t.gridUnit}px;
    background: ${t.colors.grayscale.light5};
    box-shadow: 0 1px 2px 1px
      ${(0,y.Zf)(t.colors.grayscale.dark2,parseFloat(t.opacity.mediumLight)/100)};
    font-size: ${t.typography.sizes.m}px;
    cursor: default;
    z-index: 3000;

    &,
    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    /* vertical spacer after each menu item */
    .menu-item:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      background: ${t.colors.grayscale.light2};
      margin: 0 ${4*t.gridUnit}px;
    }
  `}}
`;class la extends o.PureComponent{constructor(e){super(e),this.container=void 0,this.state={isFocused:e.isFocused},this.setRef=this.setRef.bind(this),this.handleClick=this.handleClick.bind(this)}UNSAFE_componentWillReceiveProps(e){e.editMode&&e.isFocused&&!this.state.isFocused?(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState({isFocused:!0})):this.state.isFocused&&!e.editMode&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState({isFocused:!1}))}componentWillUnmount(){document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick)}setRef(e){this.container=e}handleClick(e){if(!this.props.editMode)return;const{onChangeFocus:t,shouldFocus:n,disableClick:i}=this.props,r=n(e,this.container);i||!r||this.state.isFocused?!r&&this.state.isFocused&&(document.removeEventListener("click",this.handleClick),document.removeEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!1}))),t&&t(!1)):(document.addEventListener("click",this.handleClick),document.addEventListener("drag",this.handleClick),this.setState((()=>({isFocused:!0}))),t&&t(!0))}render(){var e;const{children:t,menuItems:n,editMode:i,style:r}=this.props,{isFocused:o}=this.state;return(0,b.tZ)(aa,{ref:this.setRef,onClick:this.handleClick,role:"none",className:f()("with-popover-menu",i&&o&&"with-popover-menu--focused"),style:r},t,i&&o&&(null!=(e=null==n?void 0:n.length)?e:0)>0&&(0,b.tZ)(sa,null,n.map(((e,t)=>(0,b.tZ)("div",{className:"menu-item",key:`menu-item-${t}`},e)))))}}la.defaultProps={children:null,disableClick:!1,onChangeFocus:null,menuItems:[],isFocused:!1,shouldFocus:(e,t)=>{var n;return(null==t?void 0:t.contains(e.target))||"menu-item"===e.target.id||"menu-item"===(null==(n=e.target.parentNode)?void 0:n.id)},style:null};const da={id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,depth:s().number.isRequired,editMode:s().bool.isRequired,logEvent:s().func.isRequired,addDangerToast:s().func.isRequired,undoLength:s().number.isRequired,redoLength:s().number.isRequired,availableColumnCount:s().number.isRequired,columnWidth:s().number.isRequired,onResizeStart:s().func.isRequired,onResize:s().func.isRequired,onResizeStop:s().func.isRequired,deleteComponent:s().func.isRequired,handleComponentDrop:s().func.isRequired,updateComponents:s().func.isRequired,htmlSanitization:s().bool,htmlSchemaOverrides:s().object},ca="# ✨Header 1\n## ✨Header 2\n### ✨Header 3\n\n<br />\n\nClick here to learn more about [markdown formatting](https://bit.ly/1dQOfRK)",ua=(0,l.t)("This markdown component has an error."),ha=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    &.dashboard-markdown {
      overflow: hidden;

      h4,
      h5,
      h6 {
        font-weight: ${t.typography.weights.normal};
      }

      h5 {
        color: ${t.colors.grayscale.base};
      }

      h6 {
        font-size: ${t.typography.sizes.s}px;
      }

      .dashboard-component-chart-holder {
        overflow-y: auto;
        overflow-x: hidden;
      }

      .dashboard--editing & {
        cursor: move;
      }
    }
  `}}
`;class pa extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1,markdownSource:e.component.meta.code,editor:null,editorMode:"preview",undoLength:e.undoLength,redoLength:e.redoLength},this.renderStartTime=vt.Yd.getTimestamp(),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleChangeEditorMode=this.handleChangeEditorMode.bind(this),this.handleMarkdownChange=this.handleMarkdownChange.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleResizeStart=this.handleResizeStart.bind(this),this.setEditor=this.setEditor.bind(this)}componentDidMount(){this.props.logEvent(vt.aD,{viz_type:"markdown",start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:vt.Yd.getTimestamp()-this.renderStartTime})}static getDerivedStateFromProps(e,t){const{hasError:n,editorMode:i,markdownSource:r,undoLength:o,redoLength:a}=t,{component:s,undoLength:l,redoLength:d}=e;return l!==o||d!==a?{...t,undoLength:l,redoLength:d,markdownSource:s.meta.code,hasError:!1}:n||"preview"!==i||s.meta.code===r?t:{...t,markdownSource:s.meta.code}}static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){!this.state.editor||e.component.meta.width===this.props.component.meta.width&&e.columnWidth===this.props.columnWidth||this.state.editor.resize(!0),this.props.editMode&&_t.cE.preload()}componentDidCatch(){this.state.editor&&"preview"===this.state.editorMode&&this.props.addDangerToast((0,l.t)("This markdown component has an error. Please revert your recent changes."))}setEditor(e){e.getSession().setUseWrapMode(!0),this.setState({editor:e})}handleChangeFocus(e){const t=!!e,n=t?"edit":"preview";this.setState((()=>({isFocused:t}))),this.handleChangeEditorMode(n)}handleChangeEditorMode(e){const t={...this.state,editorMode:e};"preview"===e&&(this.updateMarkdownContent(),t.hasError=!1),this.setState(t)}updateMarkdownContent(){const{updateComponents:e,component:t}=this.props;t.meta.code!==this.state.markdownSource&&e({[t.id]:{...t,meta:{...t.meta,code:this.state.markdownSource}}})}handleMarkdownChange(e){this.setState({markdownSource:e})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleResizeStart(e){const{editorMode:t}=this.state,{editMode:n,onResizeStart:i}=this.props,r="edit"===t;i(e),n&&r&&this.updateMarkdownContent()}renderEditMode(){return(0,b.tZ)(_t.cE,{onChange:this.handleMarkdownChange,width:"100%",height:"100%",showGutter:!1,editorProps:{$blockScrolling:!0},value:"string"==typeof this.state.markdownSource?this.state.markdownSource:ca,readOnly:!1,onLoad:this.setEditor})}renderPreviewMode(){const{hasError:e}=this.state;return(0,b.tZ)(ea.Z,{source:e?ua:this.state.markdownSource||ca,htmlSanitization:this.props.htmlSanitization,htmlSchemaOverrides:this.props.htmlSchemaOverrides})}render(){const{isFocused:e,editorMode:t}=this.state,{component:n,parentComponent:i,index:r,depth:o,availableColumnCount:a,columnWidth:s,onResize:l,onResizeStop:d,handleComponentDrop:c,editMode:u}=this.props,h=i.type===p.BA?i.meta.width||W.cx:n.meta.width||W.cx,m="edit"===t;return(0,b.tZ)(Pe,{component:n,parentComponent:i,orientation:i.type===p.Os?"column":"row",index:r,depth:o,onDrop:c,disableDragDrop:e,editMode:u},(t=>{let{dropIndicatorProps:r,dragSourceRef:o}=t;return(0,b.tZ)(la,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,b.tZ)(oa,{id:`${n.id}-mode`,value:this.state.editorMode,onChange:this.handleChangeEditorMode})],editMode:u},(0,b.tZ)(ha,{className:f()("dashboard-markdown",m&&"dashboard-markdown--editing"),id:n.id},(0,b.tZ)(Xo,{id:n.id,adjustableWidth:i.type===p.Os,adjustableHeight:!0,widthStep:s,widthMultiple:h,heightStep:W.cd,heightMultiple:n.meta.height,minWidthMultiple:W.cx,minHeightMultiple:W.AA,maxWidthMultiple:a+h,onResizeStart:this.handleResizeStart,onResize:l,onResizeStop:d,editMode:!e&&u},(0,b.tZ)("div",{ref:o,className:"dashboard-component dashboard-component-chart-holder"},u&&(0,b.tZ)(No,{position:"top"},(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent})),u&&m?this.renderEditMode():this.renderPreviewMode()))),r&&(0,b.tZ)("div",r))}))}}pa.propTypes=da,pa.defaultProps={};const ma=(0,r.$j)((function(e){return{undoLength:e.dashboardLayout.past.length,redoLength:e.dashboardLayout.future.length,htmlSanitization:e.common.conf.HTML_SANITIZATION,htmlSchemaOverrides:e.common.conf.HTML_SANITIZATION_SCHEMA_EXTENSIONS}}))(pa),ga=v.iK.div`
  ${e=>{let{theme:t,position:n}=e;return b.iv`
    height: ${5*t.gridUnit}px;
    overflow: hidden;
    cursor: move;
    ${"top"===n&&b.iv`
      transform: rotate(90deg);
    `}
    & path {
      fill: ${t.colors.grayscale.base};
    }
  `}}
`;function fa(e){let{position:t="left",innerRef:n=null}=e;return(0,b.tZ)(ga,{ref:n,position:t},(0,b.tZ)(B.Z.Drag,null))}var va=n(713);const ba=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: inline-block;

    &:before {
      content: '';
      width: 1em;
      height: 1em;
      margin-right: ${2*t.gridUnit}px;
      display: inline-block;
      vertical-align: middle;
    }

    &.background--white {
      padding-left: 0;
      background: transparent;

      &:before {
        background: ${t.colors.grayscale.light5};
        border: 1px solid ${t.colors.grayscale.light2};
      }
    }

    /* Create the transparent rect icon */
    &.background--transparent:before {
      background-image: linear-gradient(
          45deg,
          ${t.colors.text.label} 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, ${t.colors.text.label} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${t.colors.text.label} 75%),
        linear-gradient(-45deg, transparent 75%, ${t.colors.text.label} 75%);
      background-size: ${2*t.gridUnit}px ${2*t.gridUnit}px;
      background-position: 0 0, 0 ${t.gridUnit}px,
        ${t.gridUnit}px ${-t.gridUnit}px, ${-t.gridUnit}px 0px;
    }
  `}}
`;function ya(e){const t=(0,l.t)("background");return(0,b.tZ)(ba,{className:f()("background-style-option",e.className)},`${e.label} ${t}`)}function xa(e){return(0,b.tZ)(ba,{className:f()("background-style-option",e.className)},e.label)}class Sa extends o.PureComponent{render(){const{id:e,value:t,onChange:n}=this.props;return(0,b.tZ)(ia,{id:e,options:va.Z,value:t,onChange:n,renderButton:ya,renderOption:xa})}}const Ca={id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,depth:s().number.isRequired,editMode:s().bool.isRequired,availableColumnCount:s().number.isRequired,columnWidth:s().number.isRequired,minColumnWidth:s().number.isRequired,onResizeStart:s().func.isRequired,onResize:s().func.isRequired,onResizeStop:s().func.isRequired,deleteComponent:s().func.isRequired,handleComponentDrop:s().func.isRequired,updateComponents:s().func.isRequired},Za=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    &.grid-column {
      width: 100%;
      position: relative;

      & > :not(.hover-menu):not(:last-child) {
        margin-bottom: ${4*t.gridUnit}px;
      }
    }

    .dashboard--editing &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      pointer-events: none;
      border: 1px dashed ${t.colors.grayscale.light2};
    }
    .dashboard--editing .resizable-container--resizing:hover > &:after,
    .dashboard--editing .hover-menu:hover + &:after {
      border: 1px dashed ${t.colors.primary.base};
      z-index: 2;
    }
  `}}
`,wa=e=>b.iv`
  min-height: ${25*e.gridUnit}px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Ra extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:r,minColumnWidth:o,depth:a,onResizeStart:s,onResize:d,onResizeStop:c,handleComponentDrop:u,editMode:h,onChangeTab:p,isComponentVisible:m}=this.props,g=e.children||[],v=va.Z.find((t=>t.value===(e.meta.background||W.HE)));return(0,b.tZ)(Pe,{component:e,parentComponent:t,orientation:"column",index:n,depth:a,onDrop:u,editMode:h},(t=>{let{dropIndicatorProps:n,dragSourceRef:u}=t;return(0,b.tZ)(Xo,{id:e.id,adjustableWidth:!0,adjustableHeight:!1,widthStep:r,widthMultiple:e.meta.width,minWidthMultiple:o,maxWidthMultiple:i+(e.meta.width||0),onResizeStart:s,onResize:d,onResizeStop:c,editMode:h},(0,b.tZ)(la,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,b.tZ)(Sa,{id:`${e.id}-background`,value:e.meta.background,onChange:this.handleChangeBackground})],editMode:h},h&&(0,b.tZ)(No,{innerRef:u,position:"top"},(0,b.tZ)(fa,{position:"top"}),(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent}),(0,b.tZ)(Qn,{onClick:this.handleChangeFocus,icon:(0,b.tZ)(B.Z.Cog,{iconSize:"xl"})})),(0,b.tZ)(Za,{className:f()("grid-column",v.className)},0===g.length?(0,b.tZ)("div",{css:wa},(0,l.t)("Empty column")):g.map(((t,n)=>(0,b.tZ)(cs,{key:t,id:t,parentId:e.id,depth:a+1,index:n,availableColumnCount:e.meta.width,columnWidth:r,onResizeStart:s,onResize:d,onResizeStop:c,isComponentVisible:m,onChangeTab:p}))),n&&(0,b.tZ)("div",n))))}))}}Ra.propTypes=Ca,Ra.defaultProps={};const Ta=Ra,ka={id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,depth:s().number.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,editMode:s().bool.isRequired,handleComponentDrop:s().func.isRequired,deleteComponent:s().func.isRequired},Da=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    width: 100%;
    padding: ${2*t.gridUnit}px 0; /* this is padding not margin to enable a larger mouse target */
    background-color: transparent;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: ${t.colors.grayscale.light2};
      display: block;
    }

    div[draggable='true'] & {
      cursor: move;
    }

    .dashboard-component-tabs & {
      padding-left: ${4*t.gridUnit}px;
      padding-right: ${4*t.gridUnit}px;
    }
  `}}
`;class $a extends o.PureComponent{constructor(e){super(e),this.handleDeleteComponent=this.handleDeleteComponent.bind(this)}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{component:e,depth:t,parentComponent:n,index:i,handleComponentDrop:r,editMode:o}=this.props;return(0,b.tZ)(Pe,{component:e,parentComponent:n,orientation:"row",index:i,depth:t,onDrop:r,editMode:o},(e=>{let{dropIndicatorProps:t,dragSourceRef:n}=e;return(0,b.tZ)("div",{ref:n},o&&(0,b.tZ)(No,{position:"left"},(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent})),(0,b.tZ)(Da,{className:"dashboard-component dashboard-component-divider"}),t&&(0,b.tZ)("div",t))}))}}$a.propTypes=ka;const _a=$a;var Ia=n(79271);const Ma={id:s().string.isRequired,dashboardId:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,depth:s().number.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,editMode:s().bool.isRequired,handleComponentDrop:s().func.isRequired,deleteComponent:s().func.isRequired,updateComponents:s().func.isRequired},Fa=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    font-weight: ${t.typography.weights.bold};
    width: 100%;
    padding: ${4*t.gridUnit}px 0;

    &.header-small {
      font-size: ${t.typography.sizes.l}px;
    }

    &.header-medium {
      font-size: ${t.typography.sizes.xl}px;
    }

    &.header-large {
      font-size: ${t.typography.sizes.xxl}px;
    }

    .dashboard--editing .dashboard-grid & {
      &:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      &:hover:after {
        border: 1px dashed ${t.colors.primary.base};
        z-index: 2;
      }
    }

    .dashboard--editing .dragdroppable-row & {
      cursor: move;
    }

    /**
   * grids add margin between items, so don't double pad within columns
   * we'll not worry about double padding on top as it can serve as a visual separator
   */
    .grid-column > :not(:last-child) & {
      margin-bottom: ${-4*t.gridUnit}px;
    }

    .background--white &,
    &.background--white,
    .dashboard-component-tabs & {
      padding-left: ${4*t.gridUnit}px;
      padding-right: ${4*t.gridUnit}px;
    }
  `}}
`;class Ea extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeSize=this.handleUpdateMeta.bind(this,"headerSize"),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeText=this.handleUpdateMeta.bind(this,"text")}handleChangeFocus(e){this.setState((()=>({isFocused:e})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}render(){const{isFocused:e}=this.state,{dashboardId:t,component:n,depth:i,parentComponent:r,index:o,handleComponentDrop:a,editMode:s}=this.props,l=Ia.Z.find((e=>e.value===(n.meta.headerSize||W.u_))),d=va.Z.find((e=>e.value===(n.meta.background||W.HE)));return(0,b.tZ)(Pe,{component:n,parentComponent:r,orientation:"row",index:o,depth:i,onDrop:a,disableDragDrop:e,editMode:s},(e=>{let{dropIndicatorProps:r,dragSourceRef:o}=e;return(0,b.tZ)("div",{ref:o},s&&i<=2&&(0,b.tZ)(No,{position:"left"},(0,b.tZ)(fa,{position:"left"})),(0,b.tZ)(la,{onChangeFocus:this.handleChangeFocus,menuItems:[(0,b.tZ)(ia,{id:`${n.id}-header-style`,options:Ia.Z,value:n.meta.headerSize,onChange:this.handleChangeSize}),(0,b.tZ)(Sa,{id:`${n.id}-background`,value:n.meta.background,onChange:this.handleChangeBackground})],editMode:s},(0,b.tZ)(Fa,{className:f()("dashboard-component","dashboard-component-header",l.className,d.className)},s&&(0,b.tZ)(No,{position:"top"},(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent})),(0,b.tZ)(vi.Z,{title:n.meta.text,canEdit:s,onSaveTitle:this.handleChangeText,showTooltip:!1}),!s&&(0,b.tZ)(oi,{id:n.id,dashboardId:t}))),r&&(0,b.tZ)("div",r))}))}}Ea.propTypes=Ma,Ea.defaultProps={};const Oa=Ea;var za=n(71894);const Ua={id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,depth:s().number.isRequired,editMode:s().bool.isRequired,availableColumnCount:s().number.isRequired,columnWidth:s().number.isRequired,occupiedColumnCount:s().number.isRequired,onResizeStart:s().func.isRequired,onResize:s().func.isRequired,onResizeStop:s().func.isRequired,handleComponentDrop:s().func.isRequired,deleteComponent:s().func.isRequired,updateComponents:s().func.isRequired},Pa=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: fit-content;

    & > :not(:last-child):not(.hover-menu) {
      margin-right: ${4*t.gridUnit}px;
    }

    &.grid-row--empty {
      min-height: ${25*t.gridUnit}px;
    }
  `}}
`,Na=e=>b.iv`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e.colors.text.label};
`;class Aa extends o.PureComponent{constructor(e){super(e),this.state={isFocused:!1,isInView:!1},this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleUpdateMeta=this.handleUpdateMeta.bind(this),this.handleChangeBackground=this.handleUpdateMeta.bind(this,"background"),this.handleChangeFocus=this.handleChangeFocus.bind(this),this.containerRef=o.createRef(),this.observerEnabler=null,this.observerDisabler=null}componentDidMount(){if((0,d.cr)(d.TT.DASHBOARD_VIRTUALIZATION)&&!(0,za.b)()){this.observerEnabler=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!this.state.isInView&&this.setState({isInView:!0})}),{rootMargin:"100% 0px"}),this.observerDisabler=new IntersectionObserver((e=>{let[t]=e;!t.isIntersecting&&this.state.isInView&&this.setState({isInView:!1})}),{rootMargin:"400% 0px"});const e=this.containerRef.current;e&&(this.observerEnabler.observe(e),this.observerDisabler.observe(e))}}componentWillUnmount(){var e,t;null==(e=this.observerEnabler)||e.disconnect(),null==(t=this.observerDisabler)||t.disconnect()}handleChangeFocus(e){this.setState((()=>({isFocused:Boolean(e)})))}handleUpdateMeta(e,t){const{updateComponents:n,component:i}=this.props;t&&i.meta[e]!==t&&n({[i.id]:{...i,meta:{...i.meta,[e]:t}}})}handleDeleteComponent(){const{deleteComponent:e,component:t,parentId:n}=this.props;e(t.id,n)}render(){const{component:e,parentComponent:t,index:n,availableColumnCount:i,columnWidth:r,occupiedColumnCount:o,depth:a,onResizeStart:s,onResize:d,onResizeStop:c,handleComponentDrop:u,editMode:h,onChangeTab:p,isComponentVisible:m}=this.props,g=e.children||[],v=va.Z.find((t=>t.value===(e.meta.background||W.HE)));return(0,b.tZ)(Pe,{component:e,parentComponent:t,orientation:"row",index:n,depth:a,onDrop:u,editMode:h},(t=>{let{dropIndicatorProps:n,dragSourceRef:u}=t;return(0,b.tZ)(la,{isFocused:this.state.isFocused,onChangeFocus:this.handleChangeFocus,disableClick:!0,menuItems:[(0,b.tZ)(Sa,{id:`${e.id}-background`,value:v.value,onChange:this.handleChangeBackground})],editMode:h},h&&(0,b.tZ)(No,{innerRef:u,position:"left"},(0,b.tZ)(fa,{position:"left"}),(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent}),(0,b.tZ)(Qn,{onClick:this.handleChangeFocus,icon:(0,b.tZ)(B.Z.Cog,{iconSize:"xl"})})),(0,b.tZ)(Pa,{className:f()("grid-row",0===g.length&&"grid-row--empty",v.className),ref:this.containerRef},0===g.length?(0,b.tZ)("div",{css:Na},(0,l.t)("Empty row")):g.map(((t,n)=>(0,b.tZ)(cs,{key:t,id:t,parentId:e.id,depth:a+1,index:n,availableColumnCount:i-o,columnWidth:r,onResizeStart:s,onResize:d,onResizeStop:c,isComponentVisible:m,onChangeTab:p,isInView:this.state.isInView}))),n&&(0,b.tZ)("div",n)))}))}}Aa.propTypes=Ua;const qa=Aa;var La=n(94301);const ja="RENDER_TAB",Va="RENDER_TAB_CONTENT",Ka={dashboardId:s().number.isRequired,id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,depth:s().number.isRequired,renderType:s().oneOf([ja,Va]).isRequired,onDropOnTab:s().func,onHoverTab:s().func,editMode:s().bool.isRequired,canEdit:s().bool.isRequired,availableColumnCount:s().number,columnWidth:s().number,onResizeStart:s().func,onResize:s().func,onResizeStop:s().func,handleComponentDrop:s().func.isRequired,updateComponents:s().func.isRequired,setDirectPathToChild:s().func.isRequired,setEditMode:s().func.isRequired},Ba={availableColumnCount:0,columnWidth:0,onDropOnTab(){},onHoverTab(){},onResizeStart(){},onResize(){},onResizeStop(){}},Ha=v.iK.div`
  ${e=>{let{isHighlighted:t,theme:{gridUnit:n,colors:i}}=e;return`\n    padding: ${n}px ${2*n}px;\n    margin: ${-n}px ${-2*n}px;\n    transition: box-shadow 0.2s ease-in-out;\n    ${t&&`box-shadow: 0 0 ${n}px ${i.primary.light1};`}\n  `}}
`,Wa=e=>e.dropIndicatorProps&&(0,b.tZ)("div",{className:"drop-indicator drop-indicator--bottom"}),Ya=e=>e.dropIndicatorProps&&(0,b.tZ)("div",{className:"drop-indicator drop-indicator--top"});class Ja extends o.PureComponent{constructor(e){super(e),this.handleChangeText=this.handleChangeText.bind(this),this.handleDrop=this.handleDrop.bind(this),this.handleOnHover=this.handleOnHover.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}handleChangeTab(e){let{pathToTabIndex:t}=e;this.props.setDirectPathToChild(t)}handleChangeText(e){const{updateComponents:t,component:n}=this.props;e&&e!==n.meta.text&&t({[n.id]:{...n,meta:{...n.meta,text:e}}})}handleDrop(e){this.props.handleComponentDrop(e),this.props.onDropOnTab(e)}handleOnHover(){this.props.onHoverTab()}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}renderTabContent(){const{component:e,parentComponent:t,depth:n,availableColumnCount:i,columnWidth:r,onResizeStart:o,onResize:a,onResizeStop:s,editMode:d,isComponentVisible:c,canEdit:u,setEditMode:h,dashboardId:p}=this.props,m=0===e.children.length;return(0,b.tZ)("div",{className:"dashboard-component-tabs-content"},d&&(0,b.tZ)(Pe,{component:e,parentComponent:t,orientation:"column",index:0,depth:n,onDrop:this.handleTopDropTargetDrop,editMode:!0,className:"empty-droptarget"},Ya),m&&(0,b.tZ)(La.x3,{title:d?(0,l.t)("Drag and drop components to this tab"):(0,l.t)("There are no components added to this tab"),description:u&&(d?(0,b.tZ)("span",null,(0,l.t)("You can")," ",(0,b.tZ)("a",{href:`/chart/add?dashboard_id=${p}`,rel:"noopener noreferrer",target:"_blank"},(0,l.t)("create a new chart"))," ",(0,l.t)("or use existing ones from the panel on the right")):(0,b.tZ)("span",null,(0,l.t)("You can add the components in the")," ",(0,b.tZ)("span",{role:"button",tabIndex:0,onClick:()=>h(!0)},(0,l.t)("edit mode")))),image:"chart.svg"}),e.children.map(((t,l)=>(0,b.tZ)(cs,{key:t,id:t,parentId:e.id,depth:n,index:l,onDrop:this.handleDrop,onHover:this.handleOnHover,availableColumnCount:i,columnWidth:r,onResizeStart:o,onResize:a,onResizeStop:s,isComponentVisible:c,onChangeTab:this.handleChangeTab}))),d&&(0,b.tZ)(Pe,{component:e,parentComponent:t,orientation:"column",index:e.children.length,depth:n,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:!0,className:"empty-droptarget"},Wa))}renderTab(){const{component:e,parentComponent:t,index:n,depth:i,editMode:r,isFocused:o,isHighlighted:a}=this.props;return(0,b.tZ)(Pe,{component:e,parentComponent:t,orientation:"column",index:n,depth:i,onDrop:this.handleDrop,onHover:this.handleOnHover,editMode:r},(t=>{let{dropIndicatorProps:i,dragSourceRef:s}=t;return(0,b.tZ)(Ha,{isHighlighted:a,className:"dragdroppable-tab",ref:s},(0,b.tZ)(vi.Z,{title:e.meta.text,defaultTitle:e.meta.defaultText,placeholder:e.meta.placeholder,canEdit:r&&o,onSaveTitle:this.handleChangeText,showTooltip:!1,editing:r&&o}),!r&&(0,b.tZ)(oi,{id:e.id,dashboardId:this.props.dashboardId,placement:n>=5?"left":"right"}),i&&(0,b.tZ)("div",i))}))}render(){const{renderType:e}=this.props;return e===ja?this.renderTab():this.renderTabContent()}}Ja.propTypes=Ka,Ja.defaultProps=Ba;const Xa=(0,r.$j)((function(e){return{canEdit:e.dashboardInfo.dash_edit_perm}}),(function(e){return(0,i.DE)({setEditMode:Bn.Mb},e)}))(Ja);function Ga(e){let{currentComponent:t,directPathToChild:n=[]}=e;if(!t||0===n.length||-1===n.indexOf(t.id))return-1;const i=n.findIndex((e=>e===t.id)),r=n[i+1];return t.children.indexOf(r)>=0?t.children.findIndex((e=>e===r)):-1}function Qa(e,t){const n=(e.parents||[]).slice();return n.push(e.id),n.push(e.children[t]),n}function es(e){if(void 0===e&&(e=[]),e.length>0){const t=e.slice();for(;t.length;){const e=t.pop(),n=e&&e.split("-")[0];if(!W.Ep.includes(n))return e}}return null}const ts={id:s().string.isRequired,parentId:s().string.isRequired,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,index:s().number.isRequired,depth:s().number.isRequired,renderTabContent:s().bool,editMode:s().bool.isRequired,renderHoverMenu:s().bool,directPathToChild:s().arrayOf(s().string),activeTabs:s().arrayOf(s().string),logEvent:s().func.isRequired,setActiveTabs:s().func,availableColumnCount:s().number,columnWidth:s().number,onResizeStart:s().func,onResize:s().func,onResizeStop:s().func,createComponent:s().func.isRequired,handleComponentDrop:s().func.isRequired,onChangeTab:s().func.isRequired,deleteComponent:s().func.isRequired,updateComponents:s().func.isRequired},ns={renderTabContent:!0,renderHoverMenu:!0,availableColumnCount:0,columnWidth:0,activeTabs:[],directPathToChild:[],setActiveTabs(){},onResizeStart(){},onResize(){},onResizeStop(){}},is=v.iK.div`
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};

  .dashboard-component-tabs-content {
    min-height: ${e=>{let{theme:t}=e;return 12*t.gridUnit}}px;
    margin-top: ${e=>{let{theme:t}=e;return t.gridUnit/4}}px;
    position: relative;
  }

  .ant-tabs {
    overflow: visible;

    .ant-tabs-nav-wrap {
      min-height: ${e=>{let{theme:t}=e;return 12.5*t.gridUnit}}px;
    }

    .ant-tabs-content-holder {
      overflow: visible;
    }
  }

  div .ant-tabs-tab-btn {
    text-transform: none;
  }
`;class rs extends o.PureComponent{constructor(e){super(e),this.getTabInfo=e=>{var t;let n=Math.max(0,Ga({currentComponent:e.component,directPathToChild:e.directPathToChild}));0===n&&null!=(t=e.activeTabs)&&t.length&&e.component.children.forEach(((t,i)=>{0===n&&e.activeTabs.includes(t)&&(n=i)}));const{children:i}=e.component,r=i[n];return{tabIndex:n,activeKey:r}},this.showDeleteConfirmModal=e=>{const{component:t,deleteComponent:n}=this.props;V.xT.confirm({title:(0,l.t)("Delete dashboard tab?"),content:(0,b.tZ)("span",null,(0,l.t)("Deleting a tab will remove all content within it. You may still reverse this action with the")," ",(0,b.tZ)("b",null,(0,l.t)("undo"))," ",(0,l.t)("button (cmd + z) until you save your changes.")),onOk:()=>{n(e,t.id);const i=t.children.indexOf(e);this.handleDeleteTab(i)},okType:"danger",okText:(0,l.t)("DELETE"),cancelText:(0,l.t)("CANCEL"),icon:null})},this.handleEdit=(e,t)=>{const{component:n,createComponent:i}=this.props;"add"===t?(null==e||null==e.stopPropagation||e.stopPropagation(),i({destination:{id:n.id,type:n.type,index:n.children.length},dragging:{id:W.Xk,type:p.gn}})):"remove"===t&&this.showDeleteConfirmModal(e)};const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.state={tabIndex:t,activeKey:n},this.handleClickTab=this.handleClickTab.bind(this),this.handleDeleteComponent=this.handleDeleteComponent.bind(this),this.handleDeleteTab=this.handleDeleteTab.bind(this),this.handleDropOnTab=this.handleDropOnTab.bind(this),this.handleDrop=this.handleDrop.bind(this)}componentDidMount(){this.props.setActiveTabs(this.state.activeKey)}componentDidUpdate(e,t){t.activeKey!==this.state.activeKey&&this.props.setActiveTabs(this.state.activeKey,t.activeKey)}UNSAFE_componentWillReceiveProps(e){const t=Math.max(0,e.component.children.length-1),n=this.props.component.children,i=e.component.children;if(this.state.tabIndex>t&&this.setState((()=>({tabIndex:t}))),e.dashboardId!==this.props.dashboardId){const{tabIndex:t,activeKey:n}=this.getTabInfo(e);this.setState((()=>({tabIndex:t,activeKey:n})))}if(e.isComponentVisible){const t=es(e.directPathToChild),r=es(this.props.directPathToChild);if(t!==r||t===r&&n!==i){const t=Ga({currentComponent:e.component,directPathToChild:e.directPathToChild});t>-1&&t!==this.state.tabIndex&&this.setState((()=>({tabIndex:t,activeKey:i[t]})))}}}handleClickTab(e){const{component:t}=this.props,{children:n}=t;if(e!==this.state.tabIndex){const n=Qa(t,e),i=n[n.length-1];this.props.logEvent(vt.Iq,{target_id:i,index:e}),this.props.onChangeTab({pathToTabIndex:n})}this.setState((()=>({activeKey:n[e]})))}handleDeleteComponent(){const{deleteComponent:e,id:t,parentId:n}=this.props;e(t,n)}handleDeleteTab(e){this.state.tabIndex===e&&this.handleClickTab(Math.max(0,e-1))}handleDropOnTab(e){const{component:t}=this.props,{destination:n}=e;if(n){const e=n.id===t.id?n.index:t.children.indexOf(n.id);e>-1&&setTimeout((()=>{this.handleClickTab(e)}),30)}}handleDrop(e){e.dragging.type!==p.yR&&this.props.handleComponentDrop(e)}render(){const{depth:e,component:t,parentComponent:n,index:i,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,renderTabContent:d,renderHoverMenu:c,isComponentVisible:u,editMode:h,nativeFilters:p}=this.props,{children:m}=t,{tabIndex:g,activeKey:f}=this.state;let v;const y=(null==p?void 0:p.focusedFilterId)||(null==p?void 0:p.hoveredFilterId);var x;return y&&(v=null==(x=p.filters[y])?void 0:x.tabsInScope),(0,b.tZ)(Pe,{component:t,parentComponent:n,orientation:"row",index:i,depth:e,onDrop:this.handleDrop,editMode:h},(i=>{let{dropIndicatorProps:p,dragSourceRef:y}=i;return(0,b.tZ)(is,{className:"dashboard-component dashboard-component-tabs"},h&&c&&(0,b.tZ)(No,{innerRef:y,position:"left"},(0,b.tZ)(fa,{position:"left"}),(0,b.tZ)(Uo,{onDelete:this.handleDeleteComponent})),(0,b.tZ)(Z.cl,{id:t.id,activeKey:f,onChange:e=>{this.handleClickTab(m.indexOf(e))},onEdit:this.handleEdit,type:h?"editable-card":"card"},m.map(((n,i)=>{var c;return(0,b.tZ)(Z.cl.TabPane,{key:n,tab:(0,b.tZ)(cs,{id:n,parentId:t.id,depth:e,index:i,renderType:ja,availableColumnCount:r,columnWidth:o,onDropOnTab:this.handleDropOnTab,onHoverTab:()=>this.handleClickTab(i),isFocused:f===n,isHighlighted:f!==n&&(null==(c=v)?void 0:c.includes(n))})},d&&(0,b.tZ)(cs,{id:n,parentId:t.id,depth:e,index:i,renderType:Va,availableColumnCount:r,columnWidth:o,onResizeStart:a,onResize:s,onResizeStop:l,onDropOnTab:this.handleDropOnTab,isComponentVisible:g===i&&u}))}))),p&&n.id!==W._4&&(0,b.tZ)("div",p))}))}}rs.propTypes=ts,rs.defaultProps=ns;const os=(0,r.$j)((function(e){return{nativeFilters:e.nativeFilters,activeTabs:e.dashboardState.activeTabs,directPathToChild:e.dashboardState.directPathToChild}}))(rs),as={[p.dW]:e=>{let{id:t,parentId:n,component:i,parentComponent:a,index:s,depth:l,availableColumnCount:d,columnWidth:c,onResizeStart:u,onResize:h,onResizeStop:m,editMode:g,isComponentVisible:y,dashboardId:x,fullSizeChartId:S,getComponentById:C=(()=>{}),deleteComponent:Z,updateComponents:w,handleComponentDrop:R,setFullSizeChartId:T,isInView:k}=e;const{chartId:D}=i.meta,$=S===D,_=(e=>{const t=(0,v.Fg)(),n=(0,r.v9)((e=>e.nativeFilters)),i=((e,t)=>{if(!e.focusedFilterField)return null;const{chartId:n,column:i}=e.focusedFilterField;return{chartId:n,scope:t[n].scopes[i]}})((0,r.v9)((e=>e.dashboardState)),(0,r.v9)((e=>e.dashboardFilters))),o=(null==n?void 0:n.focusedFilterId)||(null==n?void 0:n.hoveredFilterId);if(!i&&!o)return{};const a={borderColor:t.colors.primary.light2,opacity:1,boxShadow:`0px 0px ${2*t.gridUnit}px ${t.colors.primary.base}`,pointerEvents:"auto"};var s,l;if(o){if(null!=(s=n.filters[o])&&null!=(l=s.chartsInScope)&&l.includes(e))return a}else if(e===(null==i?void 0:i.chartId)||(0,Qt.up)({filterScope:null==i?void 0:i.scope}).includes(e))return a;return{opacity:.3,pointerEvents:"none"}})(D),I=(0,r.v9)((e=>e.dashboardState)),[M,F]=(0,o.useState)({}),[E,O]=(0,o.useState)(),[z,U]=(0,o.useState)(),[P,N]=(0,o.useState)(0),A=(0,o.useMemo)((()=>{var e;return null!=(e=null==I?void 0:I.directPathToChild)?e:[]}),[I]),q=(0,o.useMemo)((()=>{var e;return null!=(e=null==I?void 0:I.directPathLastUpdated)?e:0}),[I]),L=(0,o.useMemo)((()=>Go(A)),[A]);(0,o.useEffect)((()=>{const{label:e,chart:t}=L;q!==P&&i.id===t&&(N(q),O(i.id),U(e))}),[i,P,q,L]),(0,o.useEffect)((()=>{let e;return E&&(e=setTimeout((()=>{O(void 0),U(void 0)}),2e3)),()=>{e&&clearTimeout(e)}}),[E]);const j=(0,o.useMemo)((()=>{var e,t,n;const r=null==(e=C(null==(n=a.parents)?void 0:n.find((e=>e.startsWith(p.BA)))))||null==(t=e.meta)?void 0:t.width;let o=i.meta.width||W.cx;return a.type===p.BA?o=a.meta.width||W.cx:r&&o>r&&(o=r),o}),[i,C,a.meta.width,a.parents,a.type]),{chartWidth:V,chartHeight:K}=(0,o.useMemo)((()=>{let e=0,t=0;return $?(e=window.innerWidth-32,t=window.innerHeight-32):(e=Math.floor(j*c+(j-1)*W.es-32),t=Math.floor(i.meta.height*W.cd-32)),{chartWidth:e,chartHeight:t}}),[c,i,$,j]),B=(0,o.useCallback)((()=>{Z(t,n)}),[Z,t,n]),H=(0,o.useCallback)((e=>{w({[i.id]:{...i,meta:{...i.meta,sliceNameOverride:e}}})}),[i,w]),Y=(0,o.useCallback)((()=>{T($?null:D)}),[D,$,T]),J=(0,o.useCallback)(((e,t)=>{F((n=>({...n,[e]:t})))}),[]);return(0,b.tZ)(Pe,{component:i,parentComponent:a,orientation:a.type===p.Os?"column":"row",index:s,depth:l,onDrop:R,disableDragDrop:!1,editMode:g},(e=>{let{dropIndicatorProps:t,dragSourceRef:n}=e;return(0,b.tZ)(Xo,{id:i.id,adjustableWidth:a.type===p.Os,adjustableHeight:!0,widthStep:c,widthMultiple:j,heightStep:W.cd,heightMultiple:i.meta.height,minWidthMultiple:W.cx,minHeightMultiple:W.AA,maxWidthMultiple:d+j,onResizeStart:u,onResize:h,onResizeStop:m,editMode:g},(0,b.tZ)("div",{ref:n,style:_,css:$?Qo:void 0,className:f()("dashboard-component","dashboard-component-chart-holder",`dashboard-chart-id-${D}`,E?"fade-in":"fade-out")},!g&&(0,b.tZ)(oi,{id:i.id,scrollIntoView:E===i.id}),!!E&&(0,b.tZ)("style",null,`label[for=${z}] + .Select .Select__control {\n                    border-color: #00736a;\n                    transition: border-color 1s ease-in-out;\n                  }`),(0,b.tZ)(zo,{componentId:i.id,id:i.meta.chartId,dashboardId:x,width:V,height:K,sliceName:i.meta.sliceNameOverride||i.meta.sliceName||"",updateSliceName:H,isComponentVisible:y,handleToggleFullSize:Y,isFullSize:$,setControlValue:J,extraControls:M,isInView:k}),g&&(0,b.tZ)(No,{position:"top"},(0,b.tZ)("div",null,(0,b.tZ)(Uo,{onDelete:B})))),t&&(0,b.tZ)("div",t))}))},[p.xh]:ma,[p.BA]:Ta,[p.hE]:_a,[p.Nc]:Oa,[p.Os]:qa,[p.gn]:Xa,[p.yR]:os,[p.t]:e=>{let{component:t,parentComponent:n,index:i,depth:a,handleComponentDrop:s,editMode:d,columnWidth:c,availableColumnCount:u,onResizeStart:h,onResizeStop:m,onResize:g,deleteComponent:v,parentId:y,updateComponents:x,id:S}=e;const C=n.type===p.BA?n.meta.width||W.cx:t.meta.width||W.cx,Z=()=>{v(S,y)},w=va.Z.find((e=>e.value===(t.meta.background||W.HE))),{Component:R}=Qe.get(t.meta.componentKey),T=(0,r.v9)((e=>{let{nativeFilters:t,dataMask:n}=e;return{nativeFilters:t,dataMask:n}}));return(0,b.tZ)(Pe,{component:t,parentComponent:n,orientation:n.type===p.Os?"column":"row",index:i,depth:a,onDrop:s,editMode:d},(e=>{let{dropIndicatorProps:i,dragSourceRef:r}=e;return(0,b.tZ)(la,{menuItems:[(0,b.tZ)(Sa,{id:`${t.id}-background`,value:t.meta.background,onChange:e=>{return"background",n=e,void x({[t.id]:{...t,meta:{...t.meta,background:n}}});var n}})],editMode:d},(0,b.tZ)("div",{className:f()("dashboard-component",`dashboard-${t.componentKey}`,null==w?void 0:w.className),id:t.id},(0,b.tZ)(Xo,{id:t.id,adjustableWidth:n.type===p.Os,widthStep:c,widthMultiple:C,heightStep:W.cd,adjustableHeight:!1,heightMultiple:t.meta.height,minWidthMultiple:W.cx,minHeightMultiple:W.cx,maxWidthMultiple:u+C,onResizeStart:h,onResize:g,onResizeStop:m},(0,b.tZ)("div",{ref:r,className:"dashboard-component"},d&&(0,b.tZ)(No,{position:"top"},(0,b.tZ)(Uo,{onDelete:Z})),(0,b.tZ)(o.Suspense,{fallback:(0,b.tZ)("div",null,(0,l.t)("Loading..."))},(0,b.tZ)(R,{dashboardData:T}))))),i&&(0,b.tZ)("div",i))}))}};var ss=n(72673);const ls={id:s().string,parentId:s().string,depth:s().number,index:s().number,renderHoverMenu:s().bool,renderTabContent:s().bool,onChangeTab:s().func,component:Y.cP.isRequired,parentComponent:Y.cP.isRequired,createComponent:s().func.isRequired,deleteComponent:s().func.isRequired,updateComponents:s().func.isRequired,handleComponentDrop:s().func.isRequired,logEvent:s().func.isRequired,directPathToChild:s().arrayOf(s().string),directPathLastUpdated:s().number,dashboardId:s().number.isRequired,isComponentVisible:s().bool};class ds extends o.PureComponent{render(){const{component:e}=this.props,t=e?as[e.type]:null;return t?(0,b.tZ)(t,this.props):null}}ds.propTypes=ls,ds.defaultProps={isComponentVisible:!0};const cs=(0,r.$j)((function(e,t){let{dashboardLayout:n,dashboardState:i,dashboardInfo:r}=e;const o=n.present,{id:a,parentId:s}=t,l=o[a],d={component:l,getComponentById:e=>o[e],parentComponent:o[s],editMode:i.editMode,filters:(0,Qt.De)(),dashboardId:r.id,fullSizeChartId:i.fullSizeChartId};if(l){const e=l.type;if(e===p.Os||e===p.BA){const{occupiedWidth:t,minimumWidth:n}=(0,ss.Z)({id:a,components:o});e===p.Os&&(d.occupiedColumnCount=t),e===p.BA&&(d.minColumnWidth=n)}}return d}),(function(e){return(0,i.DE)({addDangerToast:Wn.Gb,createComponent:Hn.LM,deleteComponent:Hn.v7,updateComponents:Hn.WZ,handleComponentDrop:Hn._p,setDirectPathToChild:Bn.E2,setFullSizeChartId:Bn.zL,setActiveTabs:Bn.$_,logEvent:Yn.logEvent},e)}))(ds);var us=n(68122),hs=n(90057),ps=n(8868),ms=n(6954);const gs=function(e,t){return void 0===t&&(t=!1),function(n,i){void 0===i&&(i=!1);const r=i||t;if(!n&&e)return r?e:{"data-test":e};if(n&&!e)return r?n:{"data-test":n};if(!n&&!e)return console.warn('testWithId function has missed "prefix" and "id" params'),r?"":{"data-test":""};const o=`${e}__${n}`;return r?o:{"data-test":o}}},fs=e=>Object.values(e).reduce(((e,t)=>({...e,[t.id]:t.extraFormData})),{}),vs=(e,t)=>{var n;const i=null==t?void 0:t.value;return(null==(n=e.controlValues)?void 0:n.enableEmptyFilter)&&null==i},bs=()=>(0,r.v9)((e=>{const{charts:t,datasources:n}=e;return Object.keys(e.charts).reduce(((e,i)=>{var r,o;const a=n[null==(r=t[i])||null==(o=r.form_data)?void 0:o.datasource];return{...e,[i]:a?a.verbose_map:{}}}),{})})),ys=gs("filter-bar");var xs=n(92242);const Ss=()=>(0,r.v9)((e=>e.nativeFilters.filterSets||{})),Cs=()=>{const e=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.preselectNativeFilters})),t=(0,r.v9)((e=>e.nativeFilters.filters));return(0,o.useMemo)((()=>Object.entries(t).reduce(((t,n)=>{let[i,r]=n;return{...t,[i]:{...r,preselect:null==e?void 0:e[i]}}}),{})),[t,e])},Zs=()=>{const e=(0,r.v9)((e=>e.dataMask));return(0,o.useMemo)((()=>Object.values(e).filter((e=>String(e.id).startsWith(xs.rW))).reduce(((e,t)=>({...e,[t.id]:t})),{})),[e])};var ws=n(81788);const Rs=e=>b.iv`
  display: flex;

  && > .filter-clear-all-button {
    color: ${e.colors.grayscale.base};
    margin-left: 0;
    &:hover {
      color: ${e.colors.primary.dark1};
    }

    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
    }
  }
`,Ts=(e,t)=>b.iv`
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  position: fixed;
  z-index: 100;

  // filter bar width minus 1px for border
  width: ${t-1}px;
  bottom: 0;

  padding: ${4*e.gridUnit}px;
  padding-top: ${6*e.gridUnit}px;

  background: linear-gradient(
    ${(0,C.rgba)(e.colors.grayscale.light5,0)},
    ${e.colors.grayscale.light5} ${e.opacity.mediumLight}
  );

  & > button {
    pointer-events: auto;
  }

  & > .filter-apply-button {
    margin-bottom: ${3*e.gridUnit}px;
  }
`,ks=e=>b.iv`
  align-items: center;
  margin-left: auto;
  && > .filter-clear-all-button {
    text-transform: capitalize;
    font-weight: ${e.typography.weights.normal};
  }
  & > .filter-apply-button {
    &[disabled],
    &[disabled]:hover {
      color: ${e.colors.grayscale.light1};
      background: ${e.colors.grayscale.light3};
    }
  }
`,Ds=e=>{let{width:t=Mi.I6,onApply:n,onClearAll:i,dataMaskApplied:r,dataMaskSelected:a,isApplyDisabled:s,filterBarOrientation:d=Di.Bp.VERTICAL}=e;const c=(0,o.useMemo)((()=>Object.values(r).some((e=>{var t,n,i;return(0,ki.Z)(null==(t=a[e.id])||null==(n=t.filterState)?void 0:n.value)||!a[e.id]&&(0,ki.Z)(null==(i=e.filterState)?void 0:i.value)}))),[r,a]),u=d===Di.Bp.VERTICAL;return(0,b.tZ)("div",{css:e=>[Rs(e),u?Ts(e,t):ks(e)]},(0,b.tZ)(K.Z,(0,G.Z)({disabled:s,buttonStyle:"primary",htmlType:"submit",className:"filter-apply-button",onClick:n},ys("apply-button")),u?(0,l.t)("Apply filters"):(0,l.t)("Apply")),(0,b.tZ)(K.Z,(0,G.Z)({disabled:!c,buttonStyle:"link",buttonSize:"small",className:"filter-clear-all-button",onClick:i},ys("clear-button")),(0,l.t)("Clear all")))};var $s,_s=n(90731),Is=($s=function(e,t){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},$s(e,t)},function(e,t){function n(){this.constructor=e}$s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Ms="html",Fs="svg",Es=function(e,t){var n,i,r,o={};if(e===Ms)r=document.createElement("div");else{if(e!==Fs)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var a=0,s=Object.entries(t.attributes);a<s.length;a++){var l=s[a],d=l[0],c=l[1];r.setAttribute(d,c)}var u={element:r,elementType:e,setPortalProps:function(e){o=e},getInitialPortalProps:function(){return o},mount:function(t,r){if(r!==i){if(u.unmount(),t!==n&&!function(e,t){if(t===Ms)return e instanceof HTMLElement;if(t===Fs)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(u.element,r),n=t,i=r}},unmount:function(e){e&&e!==i||n&&i&&(n.replaceChild(i,u.element),n=void 0,i=void 0)}};return u},Os=function(e){function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return Is(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,i=t.node;return _s.createPortal(o.Children.map(n,(function(t){return o.isValidElement(t)?o.cloneElement(t,e.state.nodeProps):t})),i.element)},t}(o.PureComponent),zs=function(e){function t(t){var n=e.call(this,t)||this;return n.placeholderNode=o.createRef(),n.passPropsThroughPortal(),n}return Is(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode.setPortalProps({}),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){var e=this.props.node;e.unmount(this.placeholderNode.current),e.setPortalProps({})},t.prototype.render=function(){return o.createElement("div",{ref:this.placeholderNode})},t}(o.PureComponent),Us=Es.bind(null,Ms);Es.bind(null,Fs);const Ps=[];function Ns(){return(0,r.v9)((e=>{var t,n;return(null==(t=e.dashboardInfo)||null==(n=t.metadata)?void 0:n.native_filter_configuration)||Ps}))}function As(){return(0,r.v9)((e=>{var t;return null==(t=e.dashboardLayout)?void 0:t.present}))}function qs(){const e=As();return(0,o.useMemo)((()=>Object.values(e).some((e=>e.type===p.gn))),[e])}function Ls(){const e=(0,r.v9)((e=>{var t;return null==(t=e.dashboardState)?void 0:t.activeTabs})),t=function(){const e=As();return t=>{const n=Object.values(e).find((e=>{var n;return(null==(n=e.meta)?void 0:n.chartId)===t}));return null==n?void 0:n.parents.filter((t=>e[t].type===p.gn))}}();return n=>{var i;return(0,Gr.nY)(n)||"chartsInScope"in n&&(null==(i=n.chartsInScope)?void 0:i.some((n=>{const i=t(n);return 0===(null==i?void 0:i.length)||(null==i?void 0:i.every((t=>e.includes(t))))})))}}function js(e){const t=qs(),n=Ls();return(0,o.useMemo)((()=>{let i=[];const r=[];return t?e.forEach((e=>{n(e)?i.push(e):r.push(e)})):i=e,[i,r]}),[e,t,n])}var Vs=n(99612);const Ks=(0,o.forwardRef)(((e,t)=>{let{items:n,onOverflowingStateChange:i,dropdownContent:r,dropdownRef:a,dropdownStyle:s={},dropdownTriggerCount:d,dropdownTriggerIcon:c,dropdownTriggerText:u=(0,l.t)("More"),dropdownTriggerTooltip:h=null,forceRender:p,style:m}=e;const g=(0,v.Fg)(),{ref:f,width:y=0}=(0,Vs.NB)(),x=(0,Er.D)(y)||0,{current:S}=f,[C,Z]=(0,o.useState)([]),[w,R]=(0,o.useState)(!1),[T,k]=o.useState(-1);let D=(0,o.useRef)(null);a&&(D=a);const[$,_]=(0,o.useState)(!1),I=e=>e.reduce(((e,t)=>{let[n,i]=e;return n.push({id:t.id,element:o.cloneElement(t.element,{key:t.id})}),i.push(t.id),[n,i]}),[[],[]]),[M,F]=(0,o.useMemo)((()=>I(n.slice(0,-1!==T?T:n.length))),[n,T]),[E,O]=(0,o.useMemo)((()=>-1!==T?I(n.slice(T)):[[],[]]),[n,T]);(0,o.useLayoutEffect)((()=>{const e=null==S?void 0:S.children.item(0);if(e){const{children:t}=e,i=Array.from(t);if(C.length!==n.length){if(i.length!==n.length)return void k(-1);Z(i.map((e=>e.getBoundingClientRect().width)))}const r=i.findIndex((t=>t.getBoundingClientRect().right>e.getBoundingClientRect().right+1));let o=-1===r&&E.length>0?n.length-E.length:r;if(y>x){const e=null==S?void 0:S.children.item(1),t=(null==e?void 0:e.getBoundingClientRect().right)||0,r=((null==S?void 0:S.getBoundingClientRect().right)||0)-t;let a=0;for(let e=i.length;e<n.length&&(a+=C[e],a<=r);e+=1)o=e+1}k(o)}}),[S,n.length,C,E.length,x,y]),(0,o.useEffect)((()=>{i&&i({notOverflowed:F,overflowed:O})}),[F,i,O]);const z=-1!==T?n.length-T:0,U=(0,o.useMemo)((()=>r||z?(0,b.tZ)("div",{css:b.iv`
              display: flex;
              flex-direction: column;
              gap: ${4*g.gridUnit}px;
            `,style:s,ref:D},r?r(E):E.map((e=>e.element))):null),[r,z,g.gridUnit,s,E]);return(0,o.useLayoutEffect)((()=>{w&&setTimeout((()=>{D.current&&_(D.current.scrollHeight>500)}),100)}),[w]),(0,o.useImperativeHandle)(t,(()=>({...f.current,open:()=>R(!0)})),[f]),(0,o.useEffect)((()=>(document.onscroll=w?()=>R(!1):null,()=>{document.onscroll=null})),[w]),(0,b.tZ)("div",{ref:f,css:b.iv`
          display: flex;
          align-items: center;
        `},(0,b.tZ)("div",{css:b.iv`
            display: flex;
            align-items: center;
            gap: ${4*g.gridUnit}px;
            margin-right: ${4*g.gridUnit}px;
            min-width: 0px;
          `,style:m},M.map((e=>e.element))),U&&(0,b.tZ)(o.Fragment,null,(0,b.tZ)(b.xB,{styles:b.iv`
                .ant-popover-inner-content {
                  max-height: ${500}px;
                  overflow: ${$?"auto":"visible"};
                  padding: ${3*g.gridUnit}px ${4*g.gridUnit}px;

                  // Some OS versions only show the scroll when hovering.
                  // These settings will make the scroll always visible.
                  ::-webkit-scrollbar {
                    -webkit-appearance: none;
                    width: 14px;
                  }
                  ::-webkit-scrollbar-thumb {
                    border-radius: 9px;
                    background-color: ${g.colors.grayscale.light1};
                    border: 3px solid transparent;
                    background-clip: content-box;
                  }
                  ::-webkit-scrollbar-track {
                    background-color: ${g.colors.grayscale.light4};
                    border-left: 1px solid ${g.colors.grayscale.light2};
                  }
                }
              `}),(0,b.tZ)(ei.Z,{content:U,trigger:"click",visible:w,onVisibleChange:e=>R(e),placement:"bottom",forceRender:p},(0,b.tZ)(ee.u,{title:h},(0,b.tZ)(K.Z,{buttonStyle:"secondary"},c,u,(0,b.tZ)(Or.Z,{count:null!=d?d:z,color:(null!=d?d:z)>0?g.colors.primary.base:g.colors.grayscale.light1,showZero:!0,css:b.iv`
                      margin-left: ${2*g.gridUnit}px;
                    `}),(0,b.tZ)(B.Z.DownOutlined,{iconSize:"m",iconColor:g.colors.grayscale.light1,css:b.iv`
                      .anticon {
                        display: flex;
                      }
                    `}))))))})),Bs=Ks,Hs=e=>{let{filtersOutOfScope:t,renderer:n,hasTopMargin:i,horizontalOverflow:r,forceRender:o=!1}=e;return(0,b.tZ)(V.Ol,{ghost:!0,bordered:!0,expandIconPosition:"right",collapsible:0===t.length?"disabled":void 0,css:e=>r?(0,b.iv)("&.ant-collapse>.ant-collapse-item{&>.ant-collapse-header{padding:0;&>.ant-collapse-arrow{right:0;padding:0;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;margin-bottom:",-4*e.gridUnit,"px;}}",""):(0,b.iv)("&.ant-collapse{margin-top:",i?6*e.gridUnit:0,"px;&>.ant-collapse-item{&>.ant-collapse-header{padding-left:0;padding-bottom:",2*e.gridUnit,"px;&>.ant-collapse-arrow{right:",e.gridUnit,"px;}}& .ant-collapse-content-box{padding:",4*e.gridUnit,"px 0 0;}}}","")},(0,b.tZ)(V.Ol.Panel,{forceRender:o,header:(0,b.tZ)("span",{css:e=>(0,b.iv)("font-size:",e.typography.sizes.s,"px;","")},(0,l.t)("Filters out of scope (%d)",t.length)),key:"1"},t.map(n)))};var Ws=n(3297),Ys=n(28368),Js=n.n(Ys),Xs=n(88274);const Gs=v.iK.div`
  display: flex;
  flex-direction: row;
  background-color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].light2}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius}}px;
  border: 1px solid ${e=>{let{level:t,theme:n}=e;return n.colors[t].base}};
  color: ${e=>{let{level:t,theme:n}=e;return n.colors[t].dark2}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  width: 100%;
`,Qs=v.iK.div`
  display: flex;
  flex-direction: column;
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  overflow: hidden;
`,el=v.iK.span`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`;function tl(e){let{body:t,level:n="error",title:i}=e;const r=(0,v.Fg)().colors[n].base;return(0,b.tZ)(Gs,{level:n,role:"alert"},"error"===n?(0,b.tZ)(B.Z.ErrorSolid,{iconColor:r}):(0,b.tZ)(B.Z.WarningSolid,{iconColor:r}),(0,b.tZ)(Qs,null,(0,b.tZ)(el,null,i),(0,b.tZ)("p",null,t)))}var nl=n(72875),il=n(77997),rl=n(52794);const ol=D()(((e,t)=>{e(t?(0,rl.qN)(t):(0,rl.DU)())}),wt.oP),al=D()(((e,t)=>{e(t?(0,rl.$7)(t):(0,rl.Up)())}),wt.oP);var sl=n(1510);const ll=()=>(0,r.v9)((e=>{var t;return{outlinedFilterId:null==(t=Go(e.dashboardState.directPathToChild||[]))?void 0:t.native_filter,lastUpdated:e.dashboardState.directPathLastUpdated}})),dl=v.iK.div`
  & > div {
    height: auto !important;
    min-height: ${32}px;
  }
`,cl=[{data:[{}]}],ul=[xi.cg.NATIVE_FILTER],hl=e=>{var t,n;let{dataMaskSelected:i,filter:a,onFilterSelectionChange:s,inView:c=!0,showOverflow:h,parentRef:p,setFilterActive:m,orientation:g=Di.Bp.VERTICAL,overflow:f=!1,validateStatus:v}=e;const{id:y,targets:x,filterType:S,adhoc_filters:C,time_range:Z}=a,w=(0,yi.Z)().get(S),R=function(e,t){const n=(0,r.v9)((t=>{var n;return null==(n=t.nativeFilters.filters[e])?void 0:n.cascadeParentIds}),r.wU);return(0,o.useMemo)((()=>{let e={};return(0,Yr.Z)(n).forEach((n=>{const i=null==t?void 0:t[n];e=(0,sl.on)(e,null==i?void 0:i.extraFormData)})),e}),[t,n])}(y,i),T=(()=>{const e=(0,r.v9)((e=>e.dashboardState.isRefreshing)),t=(0,r.v9)((e=>e.dashboardState.isFiltersRefreshing));return!e&&t})(),[k,D]=(0,o.useState)([]),$=(0,r.v9)((e=>e.dashboardInfo.id)),[_,I]=(0,o.useState)(),[M,F]=(0,o.useState)({inView:!1}),[E,O]=(0,o.useState)({}),[z,U]=(0,o.useState)(c),P=(0,o.useRef)(null),[N]=x,{datasetId:A,column:q={}}=N,{name:L}=q,j=!!A,[V,K]=(0,o.useState)(j),[B,H]=(0,o.useState)(!1),W=(0,r.I0)(),{outlinedFilterId:Y,lastUpdated:J}=ll(),X=(0,o.useCallback)((()=>{H(!1),K(!1),T&&W((0,Bn.YC)())}),[W,T]);(0,o.useEffect)((()=>{!z&&c&&U(!0)}),[c,z,U]),(0,o.useEffect)((()=>{var e;if(!z)return;const t=(0,sl.zi)({...a,datasetId:A,dependencies:R,groupby:L,adhoc_filters:C,time_range:Z,dashboardId:$}),n=(null==(e=a.dataMask)?void 0:e.ownState)||{};if(!B&&(!Js()(M,t,((e,t,n)=>"url_params"===n||void 0))||!ci()(E,n)||T)){if(F(t),O(n),!j)return;H(!0),(0,si.getChartDataRequest)({formData:t,force:!1,ownState:n}).then((e=>{let{response:t,json:n}=e;if((0,d.cr)(d.TT.GLOBAL_ASYNC_QUERIES)){const e="result"in n?n.result[0]:n;if(200===t.status)D([e]),X();else{if(202!==t.status)throw new Error(`Received unexpected response status (${t.status}) while fetching chart data`);(0,il.YJ)(e).then((e=>{D(e),X()})).catch((e=>{(0,ni.O$)(e).then((e=>{I(e),X()}))}))}}else D(n.result),I(void 0),X()})).catch((e=>{(0,ni.O$)(e).then((e=>{I(e),X()}))}))}}),[z,R,A,L,X,JSON.stringify(a),j,B,T]),(0,o.useEffect)((()=>{Y&&Y===a.id&&setTimeout((()=>{var e;null==P||null==(e=P.current)||e.focus()}),f?wt.oP:0)}),[P,Y,J,a.id,f]);const G=(0,o.useCallback)((e=>s(a,e)),[a,s]),Q=(0,o.useCallback)((()=>{Y!==y&&al(W,y)}),[W,y,Y]),ee=(0,o.useCallback)((()=>{al(W),Y===y&&W((0,Bn.E2)([]))}),[W,y,Y]),te=(0,o.useCallback)((()=>ol(W,y)),[W,y]),ne=(0,o.useCallback)((()=>ol(W)),[W]),ie=(0,o.useMemo)((()=>({setDataMask:G,setHoveredFilter:te,unsetHoveredFilter:ne,setFocusedFilter:Q,unsetFocusedFilter:ee,setFilterActive:m})),[G,m,te,ne,Q,ee]),re=(0,o.useMemo)((()=>{var e;return{...null==(e=a.dataMask)?void 0:e.filterState,validateStatus:v}}),[null==(t=a.dataMask)?void 0:t.filterState,v]),oe=(0,o.useMemo)((()=>({filterBarOrientation:g,isOverflowingFilterBar:f})),[g,f]);var ae;return _?(0,b.tZ)(nl.Z,{error:null==(ae=_.errors)?void 0:ae[0],fallback:(0,b.tZ)(tl,{title:(0,l.t)("Cannot load filter"),body:_.error,level:"error"})}):(0,b.tZ)(dl,null,V?(0,b.tZ)(u.Z,{position:"inline-centered"}):(0,b.tZ)(Xs.Z,{height:32,width:"100%",showOverflow:h,formData:M,displaySettings:oe,parentRef:p,inputRef:P,queriesData:j?k:cl,chartType:S,behaviors:ul,filterState:re,ownState:null==(n=a.dataMask)?void 0:n.ownState,enableNoResults:null==w?void 0:w.enableNoResults,isRefreshing:B,hooks:ie}))},pl=o.memo(hl);var ml=n(51794);const gl=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.text)||(null==e||null==(n=e.meta)?void 0:n.defaultText)||""},fl=e=>{var t,n;return(null==e||null==(t=e.meta)?void 0:t.sliceNameOverride)||(null==e||null==(n=e.meta)?void 0:n.sliceName)||(null==e?void 0:e.id)||""},vl=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    align-items: center;
    margin: ${t.gridUnit}px 0;
    font-size: ${t.typography.sizes.s}px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    & .ant-tooltip-open {
      display: inline-flex;
    }
  `}};
`,bl=v.iK.span`
  ${e=>{let{theme:t}=e;return b.iv`
    color: ${t.colors.grayscale.base};
    padding-right: ${4*t.gridUnit}px;
    margin-right: auto;
    text-transform: uppercase;
    white-space: nowrap;
  `}};
`,yl=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    color: ${t.colors.grayscale.dark1};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline;
  `}};
`,xl=v.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Sl=v.iK.span`
  text-decoration: underline;
  cursor: pointer;
`,Cl=v.iK.span`
  ${e=>{let{theme:t}=e;return b.iv`
    color: ${t.colors.primary.base};
  `}}
`,Zl=v.iK.ul`
  ${e=>{let{theme:t}=e;return b.iv`
    padding-left: ${3*t.gridUnit}px;
    margin-bottom: 0;
  `}};
`,wl=v.iK.span`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.bold}};
`,Rl=v.iK.div`
  min-width: 0;
  display: inline-flex;
  white-space: nowrap;
`,Tl=v.iK.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`,kl=e=>{let{title:t,children:n,...i}=e;return(0,b.tZ)(ee.u,(0,G.Z)({title:t,placement:"bottom",overlayClassName:"filter-card-tooltip"},i),(0,b.tZ)(Rl,null,n))},Dl=(e,t)=>Array.isArray(e)&&e.length>0?(0,b.tZ)(o.Fragment,null,(0,b.tZ)(wl,null,t,":"),(0,b.tZ)(Zl,null,e.map((e=>(0,b.tZ)("li",null,e))))):null,$l=o.memo((e=>{let{filter:t}=e;const n=(e=>{const t=(0,r.v9)((e=>e.dashboardLayout.present)),n=Ii();return(0,o.useMemo)((()=>{var i;let r;const o=t[W._4].children[0];if(o.startsWith("TABS-")&&(r=t[o].children),0===e.scope.rootPath.length)return;if(0===e.scope.excluded.length&&(e.scope.rootPath[0]===W._4||null!=(i=r)&&i.every((t=>e.scope.rootPath.includes(t)))))return{all:[(0,l.t)("All charts")]};if(0===e.scope.excluded.length&&r)return{tabs:e.scope.rootPath.map((e=>gl(t[e]))).filter(Boolean)};const a=Object.values(t).filter((e=>e.type===p.dW));if(e.scope.rootPath[0]===W._4)return{charts:n.filter((t=>!e.scope.excluded.includes(t))).map((e=>{const t=a.find((t=>t.meta.chartId===e));return fl(t)})).filter(Boolean)};if(r){const i=[...e.scope.rootPath],r=a.filter((e=>e.parents.some((e=>i.includes(e)))));e.scope.excluded.forEach((e=>{const t=i.findIndex((t=>{var n;return null==(n=r.find((t=>t.meta.chartId===e)))?void 0:n.parents.includes(t)}));t>-1&&i.splice(t,1)}));const o=n.filter((t=>!e.scope.excluded.includes(t))).reduce(((e,t)=>{const n=r.find((e=>e.meta.chartId===t&&e.parents.every((e=>!i.includes(e)))));return n&&e.push(n),e}),[]);return{tabs:i.map((e=>gl(t[e]))).filter(Boolean),charts:o.map(fl).filter(Boolean)}}}),[n,e.scope.excluded,e.scope.rootPath,t])})(t),i=(0,o.useRef)(null),a=(0,o.useRef)(null),[s,d]=(0,ml.Z)(i,a),c=(0,o.useMemo)((()=>0!==s&&n?n.all?(0,b.tZ)("span",null,(0,l.t)("All charts")):(0,b.tZ)("div",null,Dl(n.tabs,(0,l.t)("Tabs")),Dl(n.charts,(0,l.t)("Charts"))):null),[s,n]);return(0,b.tZ)(vl,null,(0,b.tZ)(bl,null,(0,l.t)("Scope")),(0,b.tZ)(kl,{title:c},(0,b.tZ)(yl,{ref:i},n?Object.values(n).flat().map(((e,t)=>(0,b.tZ)("span",{key:e},0===t?e:`, ${e}`))):(0,l.t)("None")),d>0&&(0,b.tZ)(Cl,{ref:a},"+",s)))})),_l=e=>{let{dependency:t,hasSeparator:n}=e;const i=(0,r.I0)(),a=(0,o.useCallback)((()=>{i((0,Bn.E2)([t.id]))}),[t.id,i]);return(0,b.tZ)("span",null,n&&(0,b.tZ)("span",null,", "),(0,b.tZ)(Sl,{role:"button",onClick:a,tabIndex:0},t.name))},Il=o.memo((e=>{let{filter:t}=e;const n=(e=>{const t=(0,Yr.Z)(e.cascadeParentIds);return(0,r.v9)((e=>0===t.length?[]:t.reduce(((t,n)=>(t.push(e.nativeFilters.filters[n]),t)),[])))})(t),i=(0,o.useRef)(null),a=(0,o.useRef)(null),[s,d]=(0,ml.Z)(i,a),c=(0,v.Fg)(),u=(0,o.useMemo)((()=>s>0&&n?(0,b.tZ)(Zl,null,n.map((e=>(0,b.tZ)("li",null,(0,b.tZ)(_l,{dependency:e}))))):null),[s,n]);return Array.isArray(n)&&0!==n.length?(0,b.tZ)(vl,null,(0,b.tZ)(bl,{css:b.iv`
          display: inline-flex;
          align-items: center;
        `},(0,l.t)("Dependent on")," ",(0,b.tZ)(kl,{title:(0,l.t)("Filter only displays values relevant to selections made in other filters.")},(0,b.tZ)(B.Z.Info,{iconSize:"m",iconColor:c.colors.grayscale.light1,css:b.iv`
              margin-left: ${c.gridUnit}px;
            `}))),(0,b.tZ)(kl,{title:u},(0,b.tZ)(yl,{ref:i},n.map(((e,t)=>(0,b.tZ)(_l,{key:e.id,dependency:e,hasSeparator:0!==t})))),d&&(0,b.tZ)(Cl,{ref:a},"+",s))):null}));var Ml=n(89734),Fl=n.n(Ml),El=n(44908),Ol=n.n(El),zl=n(38325);const Ul=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n  cursor: pointer;\n  margin: ${4*t.gridUnit}px;\n  color: ${t.colors.primary.base};\n  &:hover {\n    color: ${t.colors.primary.dark1};\n  }\n`}}
`,Pl=v.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,Nl=[{label:(0,l.t)("Filter"),type:Gr.BE.NATIVE_FILTER},{label:(0,l.t)("Divider"),type:Gr.BE.DIVIDER}],Al=e=>{let{getFilterTitle:t,onChange:n,onAdd:i,onRemove:r,onRearrange:a,restoreFilter:s,currentFilterId:d,filters:c,removedFilters:u,erroredFilters:h}=e;const p=(0,o.useRef)(null),m=(0,v.Fg)(),g=(0,b.tZ)(Zt.MainNav,{mode:"horizontal"},Nl.map((e=>(0,b.tZ)(Zt.MainNav.Item,{onClick:()=>{return t=e.type,i(t),void setTimeout((()=>{var e;const t=document.getElementById("native-filters-tabs");if(t){const e=t.getElementsByClassName("ant-tabs-nav-list")[0];e.scrollTop=e.scrollHeight}null==p||null==(e=p.current)||null==e.scroll||e.scroll({top:p.current.scrollHeight,behavior:"smooth"})}),0);var t}},e.label))));return(0,b.tZ)(Pl,null,(0,b.tZ)(V.Gj,{overlay:g,arrow:!0,placement:"topLeft",trigger:["hover"]},(0,b.tZ)(Ul,null,(0,b.tZ)("div",{className:"fa fa-plus"})," ",(0,b.tZ)("span",null,(0,l.t)("Add filters and dividers")))),(0,b.tZ)("div",{css:(0,b.iv)({height:"100%",overflowY:"auto",marginLeft:3*m.gridUnit},"","")},(0,b.tZ)(sr,{ref:p,filters:c,currentFilterId:d,removedFilters:u,getFilterTitle:t,erroredFilters:h,onChange:n,onRemove:r,onRearrange:a,restoreFilter:s})))},ql=v.iK.div`
  display: flex;
  height: 100%;
`,Ll=v.iK.div`
  flex-grow: 3;
  margin-left: ${e=>{let{theme:t}=e;return-1*t.gridUnit-1}};
`,jl=v.iK.div`
  min-width: 300px;
  max-width: 300px;
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
`,Vl=e=>{let{getFilterTitle:t,onChange:n,onRemove:i,onRearrange:r,restoreFilter:o,onAdd:a,erroredFilters:s,children:l,currentFilterId:d,filters:c,removedFilters:u}=e;return(0,b.tZ)(ql,null,(0,b.tZ)(jl,null,(0,b.tZ)(Al,{currentFilterId:d,filters:c,removedFilters:u,erroredFilters:s,getFilterTitle:t,onChange:n,onAdd:e=>a(e),onRearrange:r,onRemove:e=>i(e),restoreFilter:o})),(0,b.tZ)(Ll,null,l))};var Kl=n(88889),Bl=n(15926),Hl=n.n(Bl),Wl=n(43700),Yl=n(6412),Jl=n(1090),Xl=n(61890),Gl=n(78676);const Ql=v.iK.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit+2}}px;

  .checkbox {
    margin-bottom: ${e=>{let{theme:t,checked:n}=e;return n?t.gridUnit:0}}px;
  }

  & > div {
    margin-bottom: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }
`,ed=v.iK.div`
  margin-left: ${e=>{let{theme:t}=e;return 6*t.gridUnit}}px;
`,td=e=>{const{checked:t,disabled:n,title:i,tooltip:r,children:a,onChange:s=(()=>{}),initialValue:l=!1}=e,[d,c]=(0,o.useState)(l);return(0,o.useEffect)((()=>{void 0!==t&&c(t)}),[t]),(0,b.tZ)(Ql,{checked:d},(0,b.tZ)(V.r4,{className:"checkbox",checked:d,disabled:n,onChange:e=>{const n=e.target.checked;void 0===t&&c(n),s(n)}},(0,b.tZ)(o.Fragment,null,i," ",r&&(0,b.tZ)(X.V,{placement:"top",tooltip:r}))),d&&(0,b.tZ)(ed,null,a))};var nd=n(28291);function id(e){var t;let{allowClear:n=!1,filterValues:i=(()=>!0),form:r,formField:a="column",filterId:s,datasetId:d,value:c,onChange:u,mode:h}=e;const[p,m]=(0,o.useState)(),{addDangerToast:g}=(0,Zn.e1)(),f=(0,o.useCallback)((()=>{r.setFields([{name:["filters",s,a],touched:!1,value:null}])}),[r,s,a]),v=(0,o.useMemo)((()=>(0,Yr.Z)(p).filter(i).map((e=>e.column_name)).map((e=>({label:e,value:e})))),[p,i]),y=null==(t=r.getFieldValue("filters"))?void 0:t[s].filterType,x=(0,o.useMemo)((()=>null==p?void 0:p.find((e=>e.column_name===c))),[p,c]);return(0,o.useEffect)((()=>{x&&!i(x)&&f()}),[x,y,f]),(0,nd.S)(d,(e=>{null!=e&&f(),null!=d&&(0,Yl.e)({endpoint:`/api/v1/dataset/${d}?q=${Hl().encode({columns:["columns.column_name","columns.is_dttm","columns.type_generic"]})}`}).then((e=>{let{json:{result:t}}=e;const n=Array.isArray(c)?c:[c];t.columns.some((e=>null==n?void 0:n.includes(e.column_name)))||f(),m(t.columns)}),(async e=>{const{error:t,message:n}=await(0,ni.O$)(e);let i=n||t||(0,l.t)("An error has occurred");"Forbidden"===n&&(i=(0,l.t)("You do not have permission to edit this dashboard")),g(i)}))})),(0,b.tZ)(V.Ph,{mode:h,value:"multiple"===h?c||[]:c,ariaLabel:(0,l.t)("Column select"),onChange:u,options:v,placeholder:(0,l.t)("Select a column"),notFoundContent:(0,l.t)("No compatible columns found"),showSearch:!0,allowClear:n})}var rd=n(10752),od=n.n(rd);const ad={filter_time:[Kl.Z.TEMPORAL],filter_timegrain:[Kl.Z.TEMPORAL],filter_timecolumn:[Kl.Z.TEMPORAL],filter_select:[Kl.Z.BOOLEAN,Kl.Z.STRING,Kl.Z.NUMERIC,Kl.Z.TEMPORAL],filter_range:[Kl.Z.NUMERIC]},sd="filters",ld=function(e){void 0===e&&(e=!0);const[,t]=o.useState({});return o.useCallback((()=>{e&&t({})}),[e])},dd=(e,t,n)=>{const i=e.getFieldValue(sd)||{};e.setFields([{name:sd,value:{...i,[t]:{...i[t],...n}}}])},cd=e=>({value:e.id,label:e.table_name}),ud=e=>{const t=(0,Yr.Z)(null==e?void 0:e.column_types);return 0===t.length||t.includes(Kl.Z.TEMPORAL)},hd=e=>{let{onChange:t,value:n}=e;const i=(0,o.useCallback)((e=>{let{error:t,message:n}=e,i=n||t||(0,l.t)("An error has occurred");return"Forbidden"===n&&(i=(0,l.t)("You do not have permission to edit this dashboard")),i}),[]);return(0,b.tZ)(V.qb,{ariaLabel:(0,l.t)("Dataset"),value:n,options:async(e,t,n)=>{const r="table_name",o=Hl().encode({filters:[{col:r,opr:"ct",value:e}],page:t,page_size:n,order_column:r,order_direction:"asc"});return(0,Yl.e)({endpoint:`/api/v1/dataset/?q=${o}`}).then((e=>({data:e.json.result.map(cd),totalCount:e.json.count}))).catch((async e=>{const t=i(await(0,ni.O$)(e));throw new Error(t)}))},onChange:t,notFoundContent:(0,l.t)("No compatible datasets found")})},pd=e=>(0,o.useMemo)((()=>(0,b.tZ)(hd,e)),[]),md=e=>{var t,n,i,r;let{hasDefaultValue:o,filterId:a,hasDataset:s,form:d,setDataMask:c,formData:h,enableNoResults:p}=e;const m=null==(t=d.getFieldValue("filters"))?void 0:t[a],g=null==m?void 0:m.defaultValueQueriesData,f=s&&null===g,v=null==m||null==(n=m.defaultDataMask)||null==(i=n.filterState)?void 0:i.value,y=o&&null==v;return f?(0,b.tZ)(u.Z,{position:"inline-centered"}):(0,b.tZ)(Xs.Z,{height:32,width:"filter_time"===(null==m?void 0:m.filterType)?350:270,appSection:xi.Tr.FILTER_CONFIG_MODAL,behaviors:[xi.cg.NATIVE_FILTER],formData:h,queriesData:s?null==m?void 0:m.defaultValueQueriesData:[{data:[{}]}],chartType:null==m?void 0:m.filterType,hooks:{setDataMask:c},enableNoResults:p,filterState:{...null==m||null==(r=m.defaultDataMask)?void 0:r.filterState,validateMessage:y&&(0,l.t)("Value is required"),validateStatus:y&&"error"}})};var gd,fd=n(15208);!function(e){e[e.all=0]="all",e[e.specific=1]="specific"}(gd||(gd={}));const vd=v.iK.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
  padding: 0px ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,bd=(0,v.iK)(V.qz.Item)`
  margin-bottom: 0;
`,yd=e=>{let{pathToFormValue:t=[],formScopingType:n,formFilterScope:i,forceUpdate:r,filterScope:a,updateFormValues:s,chartId:d,initiallyExcludedCharts:c}=e;const[u]=(0,o.useState)(a||zi(d,c)),h=(0,o.useRef)(u),[p]=(0,o.useState)(Ui(u,d)?gd.all:gd.specific),[m,g]=(0,o.useState)(!!a),f=(0,o.useCallback)((e=>{n===gd.specific&&(h.current=e.scope),s(e),g(!0)}),[n,s]),v=(0,o.useCallback)((()=>{if(a||m)return;const e=zi(d,c);s({scope:e,scoping:Ui(e,d)?gd.all:gd.specific})}),[d,a,m,c,s]);return(0,fd.d)(v),(0,b.tZ)(vd,null,(0,b.tZ)(bd,{name:[...t,"scoping"],initialValue:p},(0,b.tZ)(jt.Y.Group,{onChange:e=>{let{target:{value:t}}=e;const n=t===gd.all?zi(d):h.current;s({scope:n}),g(!0),r()}},(0,b.tZ)(jt.Y,{value:gd.all},(0,l.t)("Apply to all panels")),(0,b.tZ)(jt.Y,{value:gd.specific},(0,l.t)("Apply to specific panels")))),(0,b.tZ)(V.ZT.Text,{type:"secondary"},(null!=n?n:p)===gd.specific?(0,l.t)("Only selected panels will be affected by this filter"):(0,l.t)("All panels with this column will be affected by this filter")),(null!=n?n:p)===gd.specific&&(0,b.tZ)(Ai,{updateFormValues:f,initialScope:u,formScope:i,forceUpdate:r,chartId:d,initiallyExcludedCharts:c}),(0,b.tZ)(bd,{name:[...t,"scope"],hidden:!0,initialValue:u}))};var xd=n(37687);const Sd=(0,v.iK)(Ut.xJ)`
  margin-bottom: 0;
`;const Cd=v.iK.div`
  display: flex;
  flex-direction: column;
  height: 400px; // arbitrary
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,Zd=e=>{let{onClick:t}=e;return(0,b.tZ)(Cd,null,(0,b.tZ)("p",null,(0,l.t)("You have removed this filter.")),(0,b.tZ)("div",null,(0,b.tZ)(K.Z,{buttonStyle:"primary",onClick:t},(0,l.t)("Restore Filter"))))},wd=v.iK.div`
  display: flex;
  flex-direction: column;
`,Rd=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    color: ${t.colors.primary.base};\n    &:hover {\n      color: ${t.colors.primary.dark1};\n    }\n  `}}
`,Td=(0,v.iK)(B.Z.Trash)`
  ${e=>{let{theme:t}=e;return`\n    cursor: pointer;\n    margin-left: ${2*t.gridUnit}px;\n    color: ${t.colors.grayscale.base};\n    &:hover {\n      color: ${t.colors.grayscale.dark1};\n    }\n  `}}
`,kd=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: ${t.gridUnit}px;\n\n    & > div {\n      width: 270px;\n    }\n  `}}
`,Dd=v.iK.div`
  text-transform: uppercase;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,$d=e=>{let{availableFilters:t,selection:n,onChange:i,onDelete:r}=e,o=t.find((e=>e.value===n)),a=t;return o||(o={label:(0,l.t)("(deleted or invalid type)"),value:n},a=[o,...a]),(0,b.tZ)(kd,null,(0,b.tZ)(V.Ph,{ariaLabel:(0,l.t)("Limit type"),labelInValue:!0,options:a,onChange:e=>i(n,e.value),value:o}),(0,b.tZ)(Td,{iconSize:"xl",onClick:()=>r(n)}))},_d=e=>{let{availableFilters:t=[],dependencies:n=[],onDependenciesChange:i}=e;const[r,a]=(0,o.useState)(n),s=e=>{a(e),i(e)},d=(e,t)=>{const n=r.findIndex((t=>t===e)),i=[...r];i[n]=t,s(i)},c=e=>{const t=[...r];t.splice(r.indexOf(e),1),s(t)};return 0===t.length?(0,b.tZ)("span",null,(0,l.t)("No available filters.")):(0,b.tZ)(o.Fragment,null,r.map((e=>(0,b.tZ)($d,{key:e,selection:e,availableFilters:t.filter((t=>t.value===e||!r.includes(t.value))),onChange:d,onDelete:c}))),t.length>r.length&&(0,b.tZ)(Rd,{onClick:()=>{const e=t.find((e=>!r.includes(e.value)));if(e){const t=[...r];t.push(e.value),s(t)}}},(0,b.tZ)(B.Z.PlusSmall,null),(0,l.t)("Add filter")))},Id=e=>{let{availableFilters:t=[],dependencies:n=[],onDependenciesChange:i,getDependencySuggestion:r,children:o}=e;const a=t.length>0,s=n.length>0;return(0,b.tZ)(wd,null,(0,b.tZ)(td,{title:(0,l.t)("Values are dependent on other filters"),initialValue:s,onChange:e=>{const t=[];e&&!s&&a&&t.push(r()),i(t)},tooltip:(0,l.t)("Values selected in other filters will affect the filter options to only show relevant values")},s&&(0,b.tZ)(Dd,null,(0,l.t)("Values dependent on")),(0,b.tZ)(_d,{availableFilters:t,dependencies:n,onDependenciesChange:i,getDependencySuggestion:r}),o))},Md=(0,v.iK)(Z.ZP.TabPane)`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px 0px;
`,Fd=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    padding: 0px ${4*t.gridUnit}px;\n  `}}
`,Ed=v.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,Od=["enableEmptyFilter","defaultToFirstItem","multiSelect","searchAllOptions","inverseSelection"],zd=(0,v.iK)(Ut.xJ)`
  width: 49%;
  margin-bottom: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  & .ant-form-item-control-input {
    min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
`,Ud=(0,v.iK)(Ut.xJ)`
  margin-bottom: 0;
  padding-bottom: 0;
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  & .ant-form-item-control-input {
    min-height: ${e=>{let{theme:t}=e;return 10*t.gridUnit}}px;
  }
`,Pd=(0,v.iK)(Ut.xJ)`
  min-width: 50%;

  & .ant-form-item-label {
    padding-bottom: 0;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-control-input-content > div > div {
    height: auto;
  }

  .ant-form-item-extra {
    display: none;
  }

  & .ant-form-item-control-input {
    height: auto;
  }
`,Nd=v.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  text-transform: uppercase;
`,Ad=(0,v.iK)(Ut.xJ)`
  margin-bottom: 0;
`,qd=v.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ld=(0,v.iK)(B.Z.Refresh)`
  margin-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.primary.base}};
`,jd=(0,v.iK)(Wl.Z)`
  border-left: 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
  border-radius: 0;

  .ant-collapse-header {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.grayscale.light2}};
    margin-top: -1px;
    border-radius: 0;
  }

  .ant-collapse-content {
    border: 0;
  }

  .ant-collapse-content-box {
    padding-top: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
  }

  &.ant-collapse > .ant-collapse-item {
    border: 0;
    border-radius: 0;
  }
`,Vd=(0,v.iK)(Z.ZP)`
  .ant-tabs-nav {
    position: sticky;
    top: 0;
    background: ${e=>{let{theme:t}=e;return t.colors.grayscale.light5}};
    z-index: 1;
  }

  .ant-tabs-nav-list {
    padding: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`,Kd=v.iK.span`
  color: ${e=>{let{theme:t}=e;return t.colors.error.base}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  margin-left: ${e=>{let{theme:t}=e;return t.gridUnit-1}}px;
  &:before {
    content: '*';
  }
`,Bd=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    width: 49%;\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.light1};\n    margin:\n      ${2*-t.gridUnit}px\n      0px\n      ${4*t.gridUnit}px\n      ${4*t.gridUnit}px;\n  `}}
`,Hd={configuration:{key:"configuration",name:(0,l.t)("Settings")},scoping:{key:"scoping",name:(0,l.t)("Scoping")}},Wd={configuration:{key:"configuration",name:(0,l.t)("Filter Configuration")},settings:{key:"settings",name:(0,l.t)("Filter Settings")}},Yd=["filter_select","filter_range"],Jd={[(0,l.t)("Select filter")]:(0,l.t)("Value"),[(0,l.t)("Range filter")]:(0,l.t)("Numerical range"),[(0,l.t)("Time filter")]:(0,l.t)("Time range"),[(0,l.t)("Time column")]:(0,l.t)("Time column"),[(0,l.t)("Time grain")]:(0,l.t)("Time grain"),[(0,l.t)("Group By")]:(0,l.t)("Group by")},Xd=(e,t)=>{var n,i,a,s,c,h,p,m,g,f,v,y,x,S,C,Z,w,R,T,k,D,$,_,I,M;let{filterId:F,filterToEdit:E,removedFilters:O,form:z,getAvailableFilters:U,activeFilterPanelKeys:P,restoreFilter:N,handleActiveFilterPanelChange:A,setErroredFilters:q,validateDependencies:L,getDependencySuggestion:K,isActive:B}=e;const H=!!O[F],[W,Y]=(0,o.useState)(),[J,Q]=(0,o.useState)([]),[te,ne]=(0,o.useState)(Hd.configuration.key),ie=(0,r.v9)((e=>e.dashboardInfo.id)),[re,oe]=(0,o.useState)(null),ae=ld(B),[se,le]=(0,o.useState)(),de=(0,o.useMemo)((()=>({})),[]),ce=z.getFieldValue("filters"),ue=null==ce?void 0:ce[F],he=ue||re||de,pe=(null==he?void 0:he.dependencies)||(null==E?void 0:E.cascadeParentIds)||[],me=(0,yi.Z)().items,ge=Object.entries(me).filter((e=>{var t;let[,{value:n}]=e;return null==(t=n.behaviors)?void 0:t.includes(xi.cg.NATIVE_FILTER)})).map((e=>{let[t]=e;return t})),fe=(0,r.v9)((e=>{let{datasources:t}=e;return t})),ve=(0,r.v9)((e=>{let{charts:t}=e;return t})),be=(0,o.useMemo)((()=>Object.values(fe).some((e=>ud(e)))),[fe]),ye=(0,o.useMemo)((()=>{const e=Object.values(fe).find((e=>{var t;return e.id===(null==he||null==(t=he.dataset)?void 0:t.value)}));return!e||ud(e)}),[null==he||null==(n=he.dataset)?void 0:n.value,fe]),xe=!(null==(i=me[null==he?void 0:he.filterType])||null==(a=i.value)||!a.datasourceCount),Se=null!=(s=null!=(c=null==he||null==(h=he.dataset)?void 0:h.value)?c:null==E||null==(p=E.targets[0])?void 0:p.datasetId)?s:((e,t)=>{var n;const i=new Map;let r="",o=0;return Object.values(t).forEach((e=>{const{form_data:t}=e;if(t){const{datasource:e}=t,n=(i.get(e)||0)+1;i.set(e,n),n>o&&(o=n,r=e)}})),null==(n=e[r])?void 0:n.id})(fe,ve),{controlItems:Ce={},mainControlItems:Ze={}}=he?function(e){var t;let{datasetId:n,disabled:i,forceUpdate:r,form:a,filterId:s,filterType:d,filterToEdit:c,formFilter:u,removed:h}=e;const p=null!=(void 0===(m=(0,xd.Z)().get(d))&&(m={}),t=null!=(g=null==(f=od()(m.controlPanelSections))?void 0:f.reduce(((e,t)=>{let{controlSetRows:n=[]}=t;return[...e,...od()(n)]}),[]))?g:[])?t:[];var m,g,f;const v={},y={};return p.filter((e=>"groupby"===(null==e?void 0:e.name))).forEach((e=>{var t,i,d,p,m,g,f,v,x;const S=null!=(t=null==c||null==(i=c.controlValues)?void 0:i[e.name])?t:null==e||null==(d=e.config)?void 0:d.default,C=null==c||null==(p=c.targets[0])||null==(m=p.column)?void 0:m.name,Z=(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Sd,{name:["filters",s,"requiredFirst",e.name],hidden:!0,initialValue:(null==e||null==(g=e.config)?void 0:g.requiredFirst)&&(null==c?void 0:c.requiredFirst)}),(0,b.tZ)(zd,{name:["filters",s,"column"],initialValue:C,label:(0,b.tZ)(Nd,null,(null==(f=e.config)?void 0:f.label)||(0,l.t)("Column")),rules:[{required:(null==(v=e.config)?void 0:v.required)&&!h,message:(0,l.t)("Column is required")}]},(0,b.tZ)(id,{mode:(null==(x=e.config)?void 0:x.multiple)&&"multiple",form:a,filterId:s,datasetId:n,filterValues:e=>((e,t)=>{var n;return!t.type_generic||!(e in ad)||(null==(n=ad[e])?void 0:n.includes(t.type_generic))})((null==u?void 0:u.filterType)||"",e),onChange:()=>{dd(a,s,{defaultDataMask:null}),r()}})));y[e.name]={element:Z,checked:S}})),p.filter((e=>{var t;return(null==e||null==(t=e.config)?void 0:t.renderTrigger)&&"sortAscending"!==e.name&&"enableSingleValue"!==e.name})).forEach((e=>{var t,n,d,h;const p=null!=(t=null==c||null==(n=c.controlValues)?void 0:n[e.name])?t:null==e||null==(d=e.config)?void 0:d.default,m=(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Sd,{name:["filters",s,"requiredFirst",e.name],hidden:!0,initialValue:(null==e||null==(h=e.config)?void 0:h.requiredFirst)&&(null==c?void 0:c.requiredFirst)}),(0,b.tZ)(ee.u,{key:e.name,placement:"left",title:e.config.affectsDataMask&&i&&(0,l.t)('Populate "Default value" to enable this control')},(0,b.tZ)(Ud,{key:e.name,name:["filters",s,"controlValues",e.name],initialValue:p,valuePropName:"checked",colon:!1},(0,b.tZ)(V.r4,{disabled:e.config.affectsDataMask&&i,onChange:t=>{let{target:{checked:n}}=t;e.config.requiredFirst&&dd(a,s,{requiredFirst:{...null==u?void 0:u.requiredFirst,[e.name]:n}}),e.config.resetConfig&&dd(a,s,{defaultDataMask:null}),r()}},e.config.label," ",e.config.description&&(0,b.tZ)(X.V,{placement:"top",label:e.config.name,tooltip:e.config.description})))));v[e.name]={element:m,checked:p}})),{controlItems:v,mainControlItems:y}}({datasetId:Se,disabled:!1,forceUpdate:ae,form:z,filterId:F,filterType:null==he?void 0:he.filterType,filterToEdit:E,formFilter:he,removed:H}):{},we=!!Ze.groupby,Re=!(null==(g=(null!=(m=me[null==he?void 0:he.filterType])?m:{}).value)||!g.enableNoResults),Te=we&&!!J.length,ke=!xe||Se&&((null==he?void 0:he.column)||!we),De=Yd.includes(null==he?void 0:he.filterType),$e=cc.includes(null==he?void 0:he.filterType),_e=null==(f=null==he?void 0:he.isDataDirty)||f,Ie=e=>{dd(z,F,e),Y(void 0),ae()};let Me={};pe&&pe.length>0&&ce&&pe.forEach((e=>{var t,n;const i=null==(t=ce[e])||null==(n=t.defaultDataMask)?void 0:n.extraFormData;Me=(0,sl.on)(Me,i)}));const Fe=JSON.stringify(Me),Ee=(0,o.useCallback)((function(e){var t,n;if(void 0===e&&(e=!1),!xe||null==he||null==(t=he.dataset)||!t.value)return void ae();const i=(0,sl.zi)({datasetId:null==he||null==(n=he.dataset)?void 0:n.value,dashboardId:ie,groupby:null==he?void 0:he.column,...he});i.extra_form_data=Me,Ie({defaultValueQueriesData:null,isDataDirty:!1}),(0,si.getChartDataRequest)({formData:i,force:e}).then((e=>{let{response:t,json:n}=e;if((0,d.cr)(d.TT.GLOBAL_ASYNC_QUERIES)){const e="result"in n?n.result[0]:n;if(200===t.status)Ie({defaultValueQueriesData:[e]});else{if(202!==t.status)throw new Error(`Received unexpected response status (${t.status}) while fetching chart data`);(0,il.YJ)(e).then((e=>{Ie({defaultValueQueriesData:e})})).catch((e=>{(0,ni.O$)(e).then((e=>{(e=>{dd(z,F,{defaultValueQueriesData:null}),Y(e),ae()})(e)}))}))}}else Ie({defaultValueQueriesData:n.result})})).catch((e=>{(0,ni.O$)(e).then((e=>{Y(e)}))}))}),[F,ae,z,he,xe,Fe]);(0,o.useEffect)((()=>Ee()),[Fe]);const Oe=(0,sl.zi)({datasetId:Se,groupby:we?null==he?void 0:he.column:void 0,...he});Oe.extra_form_data=Me;const[ze,Ue,Pe,Ne]=((e,t)=>{var n,i;const r=!(null==e||null==(n=e.controlValues)||!n.enableEmptyFilter),a=!(null==e||null==(i=e.controlValues)||!i.defaultToFirstItem),[s,d]=(0,o.useState)(!1),[c,u]=(0,o.useState)(r),[h,p]=(0,o.useState)(""),m=function(e){void 0===e&&(e=!1);const t=r&&!a;u(t),d(!!t||e)};return(0,o.useEffect)((()=>{var t,n;m(!a&&!(null==e||null==(t=e.defaultDataMask)||null==(n=t.filterState)||!n.value))}),[a,r]),(0,o.useEffect)((()=>{var e,n;m(!a&&!(null==t||null==(e=t.defaultDataMask)||null==(n=e.filterState)||!n.value))}),[]),(0,o.useEffect)((()=>{let e="";a?e=(0,l.t)('Default value set automatically when "Select first filter value by default" is checked'):c?e=(0,l.t)('Default value must be set when "Filter value is required" is checked'):s&&(e=(0,l.t)('Default value must be set when "Filter has default value" is checked')),p(e)}),[s,c,a]),[s,c,h,m]})(he,E),Ae=!Se||se||(null==he||null==(v=he.dataset)?void 0:v.label),qe=(0,o.useCallback)((()=>{z.setFields([{name:"changed",value:!0}])}),[z]),Le=(0,o.useCallback)((e=>{dd(z,F,e),qe()}),[F,z,qe]),je=!!(null!=he&&he.adhoc_filters||null!=he&&he.time_range||null!=E&&null!=(y=E.adhoc_filters)&&y.length||null!=E&&E.time_range),Ve=void 0!==(null==he||null==(x=he.controlValues)?void 0:x.enableSingleValue)||void 0!==(null==E||null==(S=E.controlValues)?void 0:S.enableSingleValue);let Ke=null==E||null==(C=E.controlValues)?void 0:C.enableSingleValue;void 0!==(null==he||null==(Z=he.controlValues)?void 0:Z.enableSingleMaxValue)&&({enableSingleValue:Ke}=he.controlValues);const Be="boolean"==typeof(null==he||null==(w=he.controlValues)?void 0:w.sortAscending)||"boolean"==typeof(null==E||null==(R=E.controlValues)?void 0:R.sortAscending);let He=null==E||null==(T=E.controlValues)?void 0:T.sortAscending;"boolean"==typeof(null==he||null==(k=he.controlValues)?void 0:k.sortAscending)&&(He=he.controlValues.sortAscending);const We=!xe||!_e&&ke||!Ze.groupby,Ye=e=>{var t;const n=null==(t=z.getFieldValue("filters"))?void 0:t[F].controlValues;dd(z,F,{controlValues:{...n,sortAscending:e}}),ae()},Je=e=>{var t;const n=null==(t=z.getFieldValue("filters"))?void 0:t[F].controlValues;dd(z,F,{controlValues:{...n,enableSingleValue:e}}),ae()},Xe=()=>setTimeout((()=>z.validateFields([["filters",F,"adhoc_filters"],["filters",F,"time_range"]])),0),Ge=(null==he?void 0:he.time_range)&&"No filter"!==he.time_range,Qe=(null==he||null==(D=he.adhoc_filters)?void 0:D.length)>0,et=null==he||null==($=he.controlValues)?void 0:$.defaultToFirstItem,tt=(null==he?void 0:he.filterType)===(null==E?void 0:E.filterType)?null==E?void 0:E.defaultDataMask:null,nt=()=>Ge||Qe?Promise.resolve():Promise.reject(new Error((0,l.t)("Pre-filter is required"))),it=U(F),rt=it.length>0,ot=it.filter((e=>"filter_time"===e.type)).some((e=>null==pe?void 0:pe.includes(e.value)));(0,o.useEffect)((()=>{Se&&(0,Yl.e)({endpoint:`/api/v1/dataset/${Se}?q=${Hl().encode({columns:["columns.column_name","columns.expression","columns.filterable","columns.is_dttm","columns.type","columns.verbose_name","database.id","database.database_name","datasource_type","filter_select_enabled","id","is_sqllab_view","main_dttm_col","metrics.metric_name","metrics.verbose_name","schema","sql","table_name"]})}`}).then((e=>{var t,n,i;Q(null==(t=e.json)||null==(n=t.result)?void 0:n.metrics);const r=null==(i=e.json)?void 0:i.result;r.type=r.datasource_type,r.filter_select=!0,le(r)})).catch((e=>{(0,Wn.Gb)(e.message)}))}),[Se]),(0,o.useImperativeHandle)(t,(()=>({changeTab(e){ne(e)}}))),((e,t)=>{var n,i;const r=ld(),a=null==(n=e.getFieldValue("filters"))?void 0:n[t];(0,o.useEffect)((()=>{dd(e,t,{isDataDirty:!0,defaultValueQueriesData:null}),r()}),[e,null==a?void 0:a.filterType,null==a?void 0:a.column,null==a||null==(i=a.dataset)?void 0:i.value,JSON.stringify(null==a?void 0:a.adhoc_filters),null==a?void 0:a.time_range,r,t])})(z,F),(0,o.useEffect)((()=>{xe&&ke&&ze&&_e&&Ee()}),[xe,ke,ze,_e,Ee,Ae]);const at=(0,o.useMemo)((()=>{var e;const t=[];return void 0===(null==he||null==(e=he.dataset)?void 0:e.value)?[]:(Object.values(ve).forEach((e=>{var n,i,r;const o=null==(n=e.form_data)?void 0:n.datasource;void 0!==o&&(null==(i=fe[o])?void 0:i.id)!==(null==he||null==(r=he.dataset)?void 0:r.value)&&t.push(e.id)})),t)}),[JSON.stringify(ve),null==he||null==(_=he.dataset)?void 0:_.value,JSON.stringify(fe)]);if((0,o.useEffect)((()=>{H&&oe(ue)}),[H]),(0,o.useEffect)((()=>{re&&!H&&(dd(z,F,re),oe(null))}),[ue,F,z,H,re]),H)return(0,b.tZ)(Zd,{onClick:()=>N(F)});const st=(0,b.tZ)(Ud,{name:["filters",F,"granularity_sqla"],label:(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Nd,null,(0,l.t)("Time column"))," ",(0,b.tZ)(X.V,{placement:"top",tooltip:ot?(0,l.t)("Time column to apply dependent temporal filter to"):(0,l.t)("Time column to apply time range to")})),initialValue:null==E?void 0:E.granularity_sqla},(0,b.tZ)(id,{allowClear:!0,form:z,formField:"granularity_sqla",filterId:F,filterValues:e=>!!e.is_dttm,datasetId:Se,onChange:e=>{dd(z,F,{granularity_sqla:e}),ae()}}));return(0,b.tZ)(Vd,{activeKey:te,onChange:e=>ne(e),centered:!0},(0,b.tZ)(Md,{tab:Hd.configuration.name,key:Hd.configuration.key,forceRender:!0},(0,b.tZ)(Fd,null,(0,b.tZ)(zd,{name:["filters",F,"type"],hidden:!0,initialValue:Gr.BE.NATIVE_FILTER},(0,b.tZ)(j.II,null)),(0,b.tZ)(zd,{name:["filters",F,"name"],label:(0,b.tZ)(Nd,null,(0,l.t)("Filter name")),initialValue:null==E?void 0:E.name,rules:[{required:!H,message:(0,l.t)("Name is required")}]},(0,b.tZ)(j.II,dc("name-input"))),(0,b.tZ)(zd,(0,G.Z)({name:["filters",F,"filterType"],rules:[{required:!H,message:(0,l.t)("Name is required")}],initialValue:(null==E?void 0:E.filterType)||"filter_select",label:(0,b.tZ)(Nd,null,(0,l.t)("Filter Type"))},dc("filter-type")),(0,b.tZ)(V.Ph,{ariaLabel:(0,l.t)("Filter type"),options:ge.map((e=>{var t,n,i;const r=null==(t=me[e])?void 0:t.value.name,o=r?Jd[r]:void 0,a=1===(null==(n=ad[e])?void 0:n.length)&&(null==(i=ad[e])?void 0:i.includes(Kl.Z.TEMPORAL))&&!be;return{value:e,label:o||r,customLabel:a?(0,b.tZ)(ee.u,{title:(0,l.t)("Datasets do not contain a temporal column")},o||r):void 0,disabled:a}})),onChange:e=>{dd(z,F,{filterType:e,defaultDataMask:null,column:null}),ae()}}))),"filter_time"===(null==he?void 0:he.filterType)&&(0,b.tZ)(Bd,null,(0,l.t)("Dashboard time range filters apply to temporal columns defined in\n          the filter section of each chart. Add temporal columns to the chart\n          filters to have this dashboard filter impact those charts.")),xe&&(0,b.tZ)(Ed,null,Ae?(0,b.tZ)(zd,(0,G.Z)({name:["filters",F,"dataset"],label:(0,b.tZ)(Nd,null,(0,l.t)("Dataset")),initialValue:se?{label:se.table_name,value:se.id}:void 0,rules:[{required:!H,message:(0,l.t)("Dataset is required")}]},dc("datasource-input")),(0,b.tZ)(pd,{onChange:e=>{e.value!==Se&&dd(z,F,{dataset:e,defaultDataMask:null,column:null}),ae()}})):(0,b.tZ)(zd,{label:(0,b.tZ)(Nd,null,(0,l.t)("Dataset"))},(0,b.tZ)(u.Z,{position:"inline-centered"})),xe&&Object.keys(Ze).map((e=>Ze[e].element))),(0,b.tZ)(jd,{defaultActiveKey:P,onChange:e=>{A(e)},expandIconPosition:"right",key:`native-filter-config-${F}`},"filter_time"!==(null==he?void 0:he.filterType)&&(0,b.tZ)(Wl.Z.Panel,{forceRender:!0,header:Wd.configuration.name,key:`${F}-${Wd.configuration.key}`},$e&&rt&&(0,b.tZ)(Ud,{name:["filters",F,"dependencies"],initialValue:pe},(0,b.tZ)(Id,{availableFilters:it,dependencies:pe,onDependenciesChange:e=>{dd(z,F,{dependencies:e}),ae(),L(),qe()},getDependencySuggestion:()=>K(F)},ot?st:void 0)),xe&&De&&(0,b.tZ)(Ad,{name:["filters",F,"preFilter"]},(0,b.tZ)(td,{initialValue:je,title:(0,l.t)("Pre-filter available values"),tooltip:(0,l.t)("Add filter clauses to control the filter's source query,\n                    though only in the context of the autocomplete i.e., these conditions\n                    do not impact how the filter is applied to the dashboard. This is useful\n                    when you want to improve the query's performance by only scanning a subset\n                    of the underlying data or limit the available values displayed in the filter."),onChange:e=>{qe(),e&&Xe()}},(0,b.tZ)(Pd,{name:["filters",F,"adhoc_filters"],css:(0,b.iv)({width:270},"",""),initialValue:null==E?void 0:E.adhoc_filters,required:!0,rules:[{validator:nt}]},(0,b.tZ)(Xl.Z,{columns:(null==se||null==(I=se.columns)?void 0:I.filter((e=>e.filterable)))||[],savedMetrics:(null==se?void 0:se.metrics)||[],datasource:se,onChange:e=>{dd(z,F,{adhoc_filters:e}),ae(),Xe()},label:(0,b.tZ)("span",null,(0,b.tZ)(Nd,null,(0,l.t)("Pre-filter")),!Ge&&(0,b.tZ)(Kd,null))})),ye&&(0,b.tZ)(Ud,{name:["filters",F,"time_range"],label:(0,b.tZ)(Nd,null,(0,l.t)("Time range")),initialValue:(null==E?void 0:E.time_range)||(0,l.t)("No filter"),required:!Qe,rules:[{validator:nt}]},(0,b.tZ)(Jl.ZP,{name:"time_range",onChange:e=>{dd(z,F,{time_range:e}),ae(),Xe()}})),Ge&&!ot?st:void 0)),"filter_range"!==(null==he?void 0:he.filterType)?(0,b.tZ)(Ad,{name:["filters",F,"sortFilter"]},(0,b.tZ)(td,{initialValue:Be,title:(0,l.t)("Sort filter values"),onChange:e=>{Ye(e||void 0),qe()}},(0,b.tZ)(Ud,{name:["filters",F,"controlValues","sortAscending"],initialValue:He,label:(0,b.tZ)(Nd,null,(0,l.t)("Sort type"))},(0,b.tZ)(jt.Y.Group,{onChange:e=>{Ye(e.target.value)}},(0,b.tZ)(jt.Y,{value:!0},(0,l.t)("Sort ascending")),(0,b.tZ)(jt.Y,{value:!1},(0,l.t)("Sort descending")))),Te&&(0,b.tZ)(Pd,{name:["filters",F,"sortMetric"],initialValue:null==E?void 0:E.sortMetric,label:(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Nd,null,(0,l.t)("Sort Metric"))," ",(0,b.tZ)(X.V,{placement:"top",tooltip:(0,l.t)("If a metric is specified, sorting will be done based on the metric value")}))},(0,b.tZ)(V.Ph,{allowClear:!0,ariaLabel:(0,l.t)("Sort metric"),name:"sortMetric",options:J.map((e=>{var t;return{value:e.metric_name,label:null!=(t=e.verbose_name)?t:e.metric_name}})),onChange:e=>{void 0!==e&&(dd(z,F,{sortMetric:e}),ae())}})))):(0,b.tZ)(Ad,{name:["filters",F,"rangeFilter"]},(0,b.tZ)(td,{initialValue:Ve,title:(0,l.t)("Single Value"),onChange:e=>{Je(e?Gl.c.Exact:void 0),qe()}},(0,b.tZ)(Ud,{name:["filters",F,"controlValues","enableSingleValue"],initialValue:Ke,label:(0,b.tZ)(Nd,null,(0,l.t)("Single value type"))},(0,b.tZ)(jt.Y.Group,{onChange:e=>Je(e.target.value)},(0,b.tZ)(jt.Y,{value:Gl.c.Minimum},(0,l.t)("Minimum")),(0,b.tZ)(jt.Y,{value:Gl.c.Exact},(0,l.t)("Exact")),(0,b.tZ)(jt.Y,{value:Gl.c.Maximum},(0,l.t)("Maximum"))))))),(0,b.tZ)(Wl.Z.Panel,{forceRender:!0,header:Wd.settings.name,key:`${F}-${Wd.settings.key}`},(0,b.tZ)(zd,{name:["filters",F,"description"],initialValue:null==E?void 0:E.description,label:(0,b.tZ)(Nd,null,(0,l.t)("Description"))},(0,b.tZ)(j.Kx,null)),(0,b.tZ)(Ad,{name:["filters",F,"defaultValueQueriesData"],hidden:!0,initialValue:null}),(0,b.tZ)(Ad,{name:["filters",F,"defaultValue"]},(0,b.tZ)(td,{checked:ze,disabled:Ue||et,initialValue:ze,title:(0,l.t)("Filter has default value"),tooltip:Pe,onChange:e=>{Ne(e),e||dd(z,F,{defaultDataMask:null}),qe()}},!H&&(0,b.tZ)(Pd,{name:["filters",F,"defaultDataMask"],initialValue:tt,label:(0,b.tZ)(Nd,null,(0,l.t)("Default Value")),required:ze,rules:[{validator:()=>{var e,t;if(null!=he&&null!=(e=he.defaultDataMask)&&null!=(t=e.filterState)&&t.value){const e=z.getFieldsError();return q((t=>t.length&&!e.find((e=>e.errors.length>0))?[]:t)),Promise.resolve()}return q((e=>e.includes(F)?e:[...e,F])),Promise.reject(new Error((0,l.t)("Default value is required")))}}]},W||We?(0,b.tZ)(qd,null,W?(0,b.tZ)(nl.Z,{error:null==(M=W.errors)?void 0:M[0],fallback:(0,b.tZ)(tl,{title:(0,l.t)("Cannot load filter"),body:W.error,level:"error"})}):(0,b.tZ)(md,{setDataMask:e=>{var t,n;ci()(null==tt||null==(t=tt.filterState)?void 0:t.value,null==e||null==(n=e.filterState)?void 0:n.value)||qe(),dd(z,F,{defaultDataMask:e}),z.validateFields([["filters",F,"defaultDataMask"]]),ae()},hasDefaultValue:ze,filterId:F,hasDataset:xe,form:z,formData:Oe,enableNoResults:Re}),xe&&Se&&(0,b.tZ)(ee.u,{title:(0,l.t)("Refresh the default values")},(0,b.tZ)(Ld,{onClick:()=>Ee(!0)}))):(0,l.t)('Fill all required fields to enable "Default Value"')))),Object.keys(Ce).sort(((e,t)=>Od.indexOf(e)-Od.indexOf(t))).map((e=>Ce[e].element))))),(0,b.tZ)(Md,{tab:Hd.scoping.name,key:Hd.scoping.key,forceRender:!0},(0,b.tZ)(yd,{updateFormValues:Le,pathToFormValue:["filters",F],forceUpdate:ae,filterScope:null==E?void 0:E.scope,formFilterScope:null==he?void 0:he.scope,formScopingType:null==he?void 0:he.scoping,initiallyExcludedCharts:at})))},Gd=o.memo((0,o.forwardRef)(Xd));var Qd={name:"1216n71",styles:"text-align:left;flex:1;& .ant-alert-action{align-self:center;}"},ec={name:"zjik7",styles:"display:flex"};function tc(e){let{title:t,onConfirm:n,onDismiss:i,children:r}=e;return(0,b.tZ)(zt.Z,{closable:!1,type:"warning",key:"alert",message:t,css:Qd,description:r,action:(0,b.tZ)("div",{css:ec},(0,b.tZ)(K.Z,{key:"cancel",buttonSize:"small",buttonStyle:"secondary",onClick:i},(0,l.t)("Keep editing")),(0,b.tZ)(K.Z,{key:"submit",buttonSize:"small",buttonStyle:"primary",onClick:n},(0,l.t)("Yes, cancel")))})}const nc=e=>{let{canSave:t=!0,onCancel:n,handleSave:i,onDismiss:r,onConfirmCancel:a,saveAlertVisible:s}=e;return s?(0,b.tZ)(tc,{key:"cancel-confirm",title:(0,l.t)("There are unsaved changes."),onConfirm:a,onDismiss:r},(0,l.t)("Are you sure you want to cancel?")):(0,b.tZ)(o.Fragment,null,(0,b.tZ)(K.Z,{key:"cancel",buttonStyle:"secondary",onClick:n},(0,l.t)("Cancel")),(0,b.tZ)(K.Z,{disabled:!t,key:"submit",buttonStyle:"primary",onClick:i},(0,l.t)("Save")))},ic=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${4*t.gridUnit}px;\n  `}}
`,rc=e=>{let{componentId:t,divider:n}=e;return(0,b.tZ)(ic,null,(0,b.tZ)(Ut.xJ,{initialValue:n?n.title:"",label:(0,l.t)("Title"),name:["filters",t,"title"],rules:[{required:!0,message:(0,l.t)("Title is required"),whitespace:!0}]},(0,b.tZ)(j.II,null)),(0,b.tZ)(Ut.xJ,{initialValue:n?n.description:"",label:(0,l.t)("Description"),name:["filters",t,"description"]},(0,b.tZ)(j.Kx,{rows:4})),(0,b.tZ)(Ut.xJ,{hidden:!0,name:["filters",t,"type"],initialValue:Gr.BE.DIVIDER}))},oc=(0,v.iK)(Cn.o)`
  min-width: ${880}px;
  width: ${e=>{let{expanded:t}=e;return t?"100%":880}} !important;

  @media (max-width: ${912}px) {
    width: 100% !important;
    min-width: auto;
  }

  .ant-modal-body {
    padding: 0px;
  }

  ${e=>{let{expanded:t}=e;return t&&b.iv`
      height: 100%;

      .ant-modal-body {
        flex: 1 1 auto;
      }
      .ant-modal-content {
        height: 100%;
      }
    `}}
`,ac=v.iK.div`
  display: flex;
  height: ${e=>{let{expanded:t}=e;return t?"100%":"700px"}};
  flex-direction: row;
  flex: 1;
  .filters-list {
    width: ${e=>{let{theme:t}=e;return 50*t.gridUnit}}px;
    overflow: auto;
  }
`,sc=(0,v.iK)(V.qz)`
  width: 100%;
`,lc=v.iK.div`
  margin-left: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
`,dc=gs("filters-config-modal"),cc=["filter_range","filter_select","filter_time"],uc=[],hc={},pc={filters:{}};function mc(e){let{isOpen:t,initialFilterId:n,createNewOnOpen:i,onSave:a,onCancel:s}=e;const d=(0,r.I0)(),c=(0,v.Fg)(),[u]=V.qz.useForm(),h=(0,o.useRef)(),p=Ns(),m=function(){const e=Ns();return(0,o.useMemo)((()=>e.reduce(((e,t)=>(e[t.id]=t,e)),{})),[e])}(),[g,f]=(0,o.useState)(uc),[y,x]=(0,o.useState)(hc),[C,Z]=(0,o.useState)(!1),w=(0,o.useMemo)((()=>Ol()([...(0,xs.QN)(p),...g]).filter((e=>{var t;return!y[e]||(null==(t=y[e])?void 0:t.isPending)}))),[p,g,y]),R=null!=n?n:w[0],[T,k]=(0,o.useState)(R),[$,_]=(0,o.useState)(uc),[I,M]=(0,o.useState)(pc),F=g.filter((e=>!y[e])),E=(0,o.useCallback)((e=>{const t=y[e];null!=t&&t.isPending&&clearTimeout(t.timerId),x((t=>({...t,[e]:null})))}),[y]),O=(0,o.useMemo)((()=>Object.keys(m)),[m]),[z,U]=(0,o.useState)(O),[P,N]=(0,o.useState)([R]),A=e=>[`${e}-${Wd.configuration.key}`,`${e}-${Wd.settings.key}`],[q,L]=(0,o.useState)(A(R)),j=(0,o.useCallback)((e=>{const t=(0,xs.W6)(e);f([...g,t]),k(t),Z(!1),U([...z,t]),L(A(t))}),[g,z,k,U,f]);((e,t,n)=>{const i=(0,Er.D)(e);(0,o.useEffect)((()=>{n&&e&&!i&&t(Gr.BE.NATIVE_FILTER)}),[n,e,i,t])})(t,j,i),((e,t,n,i)=>{(0,o.useEffect)((()=>{const r=e[t];if(r&&!r.isPending){const r=n.flat().find((n=>!e[n]&&n!==t));r&&i(r)}}),[t,e,n,i])})(y,T,z,k);const K=(0,xs.EJ)(x,U,Z),H=function(e){void 0===e&&(e=!1),f(uc),k(R),x(hc),Z(!1),M(pc),_(uc),w.length>0&&L(A(w[0])),e||U(O),N([R]),u.resetFields(["filters"]),u.setFieldsValue({changed:!1})},W=(0,o.useCallback)((e=>{const t=I.filters[e],n=m[e];return t&&"name"in t&&t.name||t&&"title"in t&&t.title||n&&"name"in n&&n.name||n&&"title"in n&&n.title||(0,l.t)("[untitled]")}),[m,I.filters]),Y=(0,o.useCallback)((e=>{var t;if(y[e])return!1;const n=(null==(t=u.getFieldValue("filters"))?void 0:t[e])||m[e];return n&&"filterType"in n&&cc.includes(n.filterType)}),[m,u,y]),J=(0,o.useCallback)((e=>w.filter((t=>t!==e)).filter((e=>Y(e))).map((e=>{var t;return{label:W(e),value:e,type:null==(t=m[e])?void 0:t.filterType}}))),[Y,w,W]),X=(0,o.useCallback)((()=>{const e=u.getFieldsError(),t=[];e.forEach((e=>{const n=e.name[1];e.errors.length>0&&!t.includes(n)&&t.push(n)})),!t.length&&$.length>0?_(uc):t.length>0&&!ci()(Fl()($),Fl()(t))&&_(t)}),[u,$]),G=async()=>{const e=await(0,xs.G$)(u,T,k);if(X(),e){const t=(e=>{const t=Object.keys(m).reduce(((e,t)=>{var n;const i=m[t],r=null==(n=i.cascadeParentIds)?void 0:n.filter((e=>Y(e)));return r&&d((0,rl.rF)(t,r)),{...e,[t]:{...i,cascadeParentIds:r}}}),{}),n=null==e?void 0:e.filters;return n&&Object.keys(n).forEach((e=>{const t=n[e];if(!("dependencies"in t))return;const{dependencies:i}=t;i&&(t.dependencies=i.filter((e=>Y(e))))})),t})(e);(0,xs.GA)(t,z,y,a,e)(),H(!0)}else h.current.changeTab("configuration")},Q=()=>{H(),s()},ee=()=>{const e=u.getFieldValue("changed"),t=z.length!==O.length||z.some(((e,t)=>e!==O[t]));F.length>0||u.isFieldsTouched()||e||t?Z(!0):Q()},te=(0,o.useCallback)((()=>{const e=new Map,t=u.getFieldValue("filters");return t&&Object.keys(t).forEach((n=>{const i=t[n],r=m[n];let o=[];i&&"dependencies"in i?o=[...i.dependencies]:null!=r&&r.cascadeParentIds&&(o=[...r.cascadeParentIds]),e.set(n,o)})),e}),[m,u]),ne=(0,o.useCallback)((()=>{const e=te();w.filter((e=>!y[e])).forEach((t=>{const n={name:["filters",t,"dependencies"],errors:(0,xs.uh)(e,t)?[(0,l.t)("Cyclic dependency detected")]:[]};u.setFields([n])})),X()}),[te,w,u,X,y]),ie=(0,o.useCallback)((e=>{const t=te(),n=z.filter((t=>t!==e&&Y(t)));return n.find((n=>{const i=t.get(e)||[];return i.push(n),!(0,xs.uh)(t,e)||(i.pop(),!1)}))||n[0]}),[te,Y,z]),[re,oe]=(0,o.useState)(!1),ae=(0,zl.Z)((()=>{oe(!re)})),se=re?B.Z.FullscreenExitOutlined:B.Z.FullscreenOutlined,le=(0,o.useMemo)((()=>D()(((e,t)=>{const n=e.filters&&Object.values(e.filters).some((e=>e.name&&null!==e.name)),i=e.filters&&Object.values(e.filters).some((e=>e.title&&null!==e.title));(n||i)&&M(t),Z(!1),X()}),us.M)),[X]);(0,o.useEffect)((()=>{St()(y)||_((e=>e.filter((e=>!y[e]))))}),[y]),(0,o.useEffect)((()=>{P.includes(T)||N([...P,T])}),[T]);const de=(0,o.useCallback)((e=>L(e)),[L]),ce=(0,o.useMemo)((()=>z.map((e=>{if(!P.includes(e))return null;const t=e.startsWith(xs.Ky),n=T===e;return(0,b.tZ)("div",{key:e,style:{height:"100%",overflowY:"auto",display:n?"":"none"}},t?(0,b.tZ)(rc,{componentId:e,divider:m[e]}):(0,b.tZ)(Gd,{ref:h,form:u,filterId:e,filterToEdit:m[e],removedFilters:y,restoreFilter:E,getAvailableFilters:J,key:e,activeFilterPanelKeys:q,handleActiveFilterPanelChange:de,isActive:n,setErroredFilters:_,validateDependencies:ne,getDependencySuggestion:ie}))}))),[P,z,T,m,u,y,E,J,q,ne,ie,de]);return(0,b.tZ)(oc,{visible:t,maskClosable:!1,title:(0,l.t)("Add and edit filters"),expanded:re,destroyOnClose:!0,onCancel:ee,onOk:G,centered:!0,footer:(0,b.tZ)("div",{css:b.iv`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          `},(0,b.tZ)(nc,{onDismiss:()=>Z(!1),onCancel:ee,handleSave:G,canSave:!$.length,saveAlertVisible:C,onConfirmCancel:Q}),(0,b.tZ)(lc,null,(0,b.tZ)(se,{iconSize:"l",iconColor:c.colors.grayscale.dark2,onClick:ae})))},(0,b.tZ)(S.Z,null,(0,b.tZ)(ac,{expanded:re},(0,b.tZ)(sc,{form:u,onValuesChange:le,layout:"vertical"},(0,b.tZ)(Vl,{erroredFilters:$,onRemove:K,onAdd:j,onChange:e=>{k(e),L(A(e))},getFilterTitle:W,currentFilterId:T,removedFilters:y,restoreFilter:E,onRearrange:(e,t)=>{const n=[...z],i=n.splice(e,1)[0];n.splice(t,0,i),U(n)},filters:z},ce)))))}const gc=o.memo(mc),fc=(0,v.iK)(K.Z)`
  padding: 0;
`,vc=e=>{let{createNewOnOpen:t,dashboardId:n,initialFilterId:i,onClick:a,children:s}=e;const l=(0,r.I0)(),[d,c]=(0,o.useState)(!1),u=(0,o.useCallback)((()=>{c(!1)}),[c]),h=(0,o.useCallback)((async e=>{l(await(0,rl.RY)(e)),u()}),[l,u]),p=(0,o.useCallback)((()=>{c(!0),a&&a()}),[c,a]);return(0,b.tZ)(o.Fragment,null,(0,b.tZ)(fc,(0,G.Z)({},ys("create-filter"),{buttonStyle:"link",buttonSize:"xsmall",onClick:p}),s),(0,b.tZ)(gc,{isOpen:d,onSave:h,onCancel:u,initialFilterId:i,createNewOnOpen:t,key:`filters-for-${n}`}))},bc=o.memo(vc),yc=e=>{let{filter:t,hidePopover:n}=e;const i=(0,v.Fg)(),a=(0,o.useRef)(null),[s]=(0,ml.Z)(a),l=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.id})),d=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm}));return(0,b.tZ)(vl,{css:e=>b.iv`
        margin-bottom: ${3*e.gridUnit}px;
        justify-content: space-between;
      `},(0,b.tZ)(Tl,null,(0,b.tZ)(B.Z.FilterSmall,{css:e=>b.iv`
            margin-right: ${e.gridUnit}px;
          `}),(0,b.tZ)(kl,{title:s?t.name:null},(0,b.tZ)(xl,{ref:a},t.name))),d&&(0,b.tZ)(vc,{dashboardId:l,onClick:n,initialFilterId:t.id},(0,b.tZ)(B.Z.Edit,{iconSize:"l",iconColor:i.colors.grayscale.light1})))},xc=e=>{let{filter:t}=e;const n=(0,o.useMemo)((()=>(0,yi.Z)().get(t.filterType)),[t.filterType]);return(0,b.tZ)(vl,null,(0,b.tZ)(bl,null,(0,l.t)("Filter type")),(0,b.tZ)(yl,null,null==n?void 0:n.name))},Sc=e=>{let{filter:t,hidePopover:n}=e;return(0,b.tZ)("div",null,(0,b.tZ)(yc,{filter:t,hidePopover:n}),(0,b.tZ)(xc,{filter:t}),(0,b.tZ)($l,{filter:t}),(0,b.tZ)(Il,{filter:t}))},Cc=e=>{let{children:t,filter:n,getPopupContainer:i,isVisible:r=!0,placement:a}=e;const[s,l]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{r||l(!1)}),[r]),(0,b.tZ)(ei.Z,{placement:a,overlayClassName:"filter-card-popover",mouseEnterDelay:.2,mouseLeaveDelay:.2,onVisibleChange:e=>{l(r&&e)},visible:r&&s,content:(0,b.tZ)(Sc,{filter:n,hidePopover:()=>{l(!1)}}),getPopupContainer:null!=i?i:()=>document.body},t)};var Zc;!function(e){e.AllFilters="allFilters",e.FilterSets="filterSets"}(Zc||(Zc={}));const wc=(e,t)=>{const n=Ss(),i=Object.values(n),r=(0,o.useMemo)((()=>!!i.find((t=>{let{name:n}=t;return n===e}))),[i,e]);return t!==e&&r},Rc=v.iK.div`
  display: flex;
  & button {
    ${e=>{let{disabled:t}=e;return"pointer-events: "+(t?"none":"all")}};
    flex: 1;
  }
`,Tc=v.iK.div`
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`,kc=e=>{let{onCancel:t,editMode:n,onEdit:i,onCreate:r,disabled:a,filterSetName:s}=e;const d=wc(s),c=!s||d||a;return(0,b.tZ)(o.Fragment,null,n?(0,b.tZ)(Tc,null,(0,b.tZ)(K.Z,{buttonStyle:"tertiary",buttonSize:"small",onClick:t},(0,l.t)("Cancel")),(0,b.tZ)(ee.u,{placement:"right",title:!s&&(0,l.t)("Please filter set name")||d&&(0,l.t)("Filter set with this name already exists")||a&&jr},(0,b.tZ)(Rc,{disabled:c},(0,b.tZ)(K.Z,(0,G.Z)({disabled:c,buttonStyle:"primary",htmlType:"submit",buttonSize:"small",onClick:r},ys("create-filter-set-button")),(0,l.t)("Create"))))):(0,b.tZ)(ee.u,{placement:"bottom",title:a&&jr},(0,b.tZ)(Rc,{disabled:a},(0,b.tZ)(K.Z,(0,G.Z)({disabled:a,buttonStyle:"tertiary",buttonSize:"small",onClick:i},ys("new-filter-set-button")),(0,l.t)("Create new filter set")))))},Dc=v.iK.div`
  display: flex;
  align-items: center;
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
`,$c=(0,v.iK)(V.Ol)`
  &.ant-collapse-ghost > .ant-collapse-item {
    & > .ant-collapse-content > .ant-collapse-content-box {
      padding: 0;
      padding-top: 0;
      padding-bottom: 0;
      font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
    }
    & > .ant-collapse-header {
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      max-width: max-content;
      & .ant-collapse-arrow {
        position: static;
        padding-left: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
      }
  }
`,_c=v.iK.div`
  padding-top: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  padding-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,Ic=e=>{let{dataMask:t,filterSet:n}=e;const i=(0,v.Fg)(),r=Cs(),o=Object.values(r).filter(Gr.kI);let a=null!=o?o:[];return null!=n&&n.nativeFilters&&(a=Object.values(null==n?void 0:n.nativeFilters).filter(Gr.kI)),(0,b.tZ)($c,{ghost:!0,expandIconPosition:"right",defaultActiveKey:n?void 0:["filters"],expandIcon:e=>{let{isActive:t}=e;const n=i.colors.grayscale.base,r=t?B.Z.CaretUpOutlined:B.Z.CaretDownOutlined;return(0,b.tZ)(r,{iconColor:n})}},(0,b.tZ)(V.Ol.Panel,(0,G.Z)({},ys("collapse-filter-set-description"),{header:(0,b.tZ)(Dc,null,(0,b.tZ)(V.ZT.Text,{type:"secondary"},(0,l.t)("Filters (%d)",a.length))),key:"filters"}),a.map((e=>{var i,o,a,s,d;let{id:c,name:u}=e;const h=n&&!(0,mi.JB)(null==(i=r[c])?void 0:i.controlValues,null==n||null==(o=n.nativeFilters)||null==(a=o[c])?void 0:a.controlValues,{ignoreUndefined:!0}),p=!Object.keys(r).includes(c);return(0,b.tZ)(V._e,{title:p&&(0,l.t)("This filter doesn't exist in dashboard. It will not be applied.")||h&&(0,l.t)("Filter metadata changed in dashboard. It will not be applied."),placement:"bottomLeft",key:c},(0,b.tZ)(_c,null,(0,b.tZ)(V.ZT.Text,{strong:!0,delete:p,mark:h},u,": "),(0,b.tZ)(V.ZT.Text,{delete:p,mark:h},Vr(null==t||null==(s=t[c])||null==(d=s.filterState)?void 0:d.value)||(0,b.tZ)(V.ZT.Text,{type:"secondary"},(0,l.t)("None")))))}))))},Mc=(0,v.iK)(K.Z)`
  padding: 0;
`,Fc=v.iK.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ec=v.iK.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > *,
  & > button.superset-button {
    ${e=>{let{theme:t}=e;return`margin-left: ${2*t.gridUnit}px`}};
  }
`,Oc=e=>{var t,n;let{editMode:i,setFilterSetName:r,onDelete:a,onEdit:s,filterSetName:d,dataMaskSelected:c,filterSet:u,isApplied:h,onRebuild:p}=e;const m=(0,v.Fg)(),g=(0,b.tZ)(Zt.Menu,null,(0,b.tZ)(Zt.Menu.Item,{onClick:s},(0,l.t)("Edit")),(0,b.tZ)(Zt.Menu.Item,{onClick:p},(0,b.tZ)(ee.u,{placement:"right",title:(0,l.t)("Remove invalid filters")},(0,l.t)("Rebuild"))),(0,b.tZ)(Zt.Menu.Item,{onClick:a,danger:!0},(0,l.t)("Delete")));return(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Fc,null,(0,b.tZ)(V.ZT.Text,{strong:!0,editable:{editing:i,icon:(0,b.tZ)("span",null),onChange:r}},null!=(t=null==u?void 0:u.name)?t:d),(0,b.tZ)(Ec,null,h&&(0,b.tZ)(B.Z.CheckOutlined,{iconSize:"m",iconColor:m.colors.success.base}),a&&(0,b.tZ)(V.Gj,{overlay:g,placement:"bottomRight",trigger:["click"]},(0,b.tZ)(Mc,(0,G.Z)({onClick:e=>{e.stopPropagation(),e.preventDefault()}},ys("filter-set-menu-button"),{buttonStyle:"link",buttonSize:"xsmall"}),(0,b.tZ)(B.Z.EllipsisOutlined,{iconSize:"m"}))))),(0,b.tZ)(Ic,{filterSet:u,dataMask:null!=(n=null==u?void 0:u.dataMask)?n:c}))},zc=v.iK.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${e=>{let{theme:t}=e;return 27*t.gridUnit}}px;

  & button.superset-button {
    margin-left: 0;
  }
  & input {
    width: 100%;
  }
`,Uc=v.iK.div`
  ${e=>{let{theme:t,"data-selected":n,onClick:i}=e;return`\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 1fr;\n    grid-gap: ${t.gridUnit}px;\n    border-bottom: 1px solid ${t.colors.grayscale.light2};\n    padding: ${2*t.gridUnit}px ${4*t.gridUnit}px;\n    cursor: ${i?"pointer":"auto"};\n    background: ${n?t.colors.primary.light5:"transparent"};\n  `}}
`,Pc=(0,l.t)("New filter set"),Nc=e=>{let{dataMaskSelected:t,onEditFilterSet:n,disabled:i,onFilterSelectionChange:a,tab:s}=e;const l=(0,r.I0)(),[d,c]=(0,o.useState)(Pc),[u,h]=(0,o.useState)(!1),p=Zs(),m=Ss(),g=Object.values(m),f=Cs(),v=Object.values(f),[y,x]=(0,o.useState)(null);(0,o.useEffect)((()=>{var e;if(s===Zc.AllFilters)return;if(!g.length)return void x(null);const n=Kr({dataMaskSelected:t,filterSetFilterValues:g});x(null!=(e=null==n?void 0:n.id)?e:null)}),[s,t,g]);const S=(e,t)=>{var n,i,r;return!v.find((t=>(null==t?void 0:t.id)===e))||!(0,mi.JB)(null==(n=f[e])?void 0:n.controlValues,null==t||null==(i=t.nativeFilters)||null==(r=i[e])?void 0:r.controlValues,{ignoreUndefined:!0})},C=(e,t)=>{var n;const i=null==t?void 0:t.target;if(i){var r;const e=i.closest(`[data-anchor=${ys("filter-set-wrapper",!0)}]`);if(null!=e&&null!=(r=e.querySelector(".ant-collapse-header"))&&r.contains(i)||null!=i&&i.closest(".ant-dropdown"))return}if(x(e),!e)return;const o=m[e];(null!=(n=Object.values(null==o?void 0:o.dataMask))?n:[]).forEach((e=>{const{extraFormData:t,filterState:n,id:i}=e;S(i,o)||a({id:i},{extraFormData:t,filterState:n})}))};return(0,b.tZ)(zc,null,!y&&(0,b.tZ)(Uc,null,(0,b.tZ)(Oc,{dataMaskSelected:t,editMode:u,setFilterSetName:c,filterSetName:d}),(0,b.tZ)(kc,{filterSetName:d.trim(),disabled:i,onCancel:()=>{h(!1),c(Pc)},editMode:u,onEdit:()=>h(!0),onCreate:()=>{const e={name:d.trim(),nativeFilters:f,dataMask:Object.keys(f).reduce(((e,t)=>({...e,[t]:p[t]})),{})};l((0,rl.xQ)(e)),h(!1),c(Pc)}})),g.map((e=>(0,b.tZ)(Uc,(0,G.Z)({},ys("filter-set-wrapper"),{"data-anchor":ys("filter-set-wrapper",!0),"data-selected":e.id===y,onClick:t=>C(e.id,t),key:e.id}),(0,b.tZ)(Oc,{isApplied:e.id===y&&!i,onDelete:()=>{return t=e.id,l((0,rl.$l)(t)),void(t===y&&x(null));var t},onEdit:()=>{return t=e.id,C(t),void n(t);var t},onRebuild:()=>(e=>{var t;const n=m[e],i=Object.values(null!=(t=null==n?void 0:n.dataMask)?t:{}).filter((e=>{const{id:t}=e;return!S(t,n)})).reduce(((e,t)=>({...e,[t.id]:f[t.id]})),{}),r={...n,nativeFilters:i,dataMask:Object.keys(i).reduce(((e,t)=>{var i;return{...e,[t]:null==(i=n.dataMask)?void 0:i[t]}}),{})};l((0,rl.ql)(r))})(e.id),dataMaskSelected:t,filterSet:e})))))},Ac=v.iK.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  background: ${e=>{let{theme:t}=e;return t.colors.primary.light4}};
  padding: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
`,qc=(0,v.iK)(V.ZT.Text)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary.dark2}};
`,Lc=(0,v.iK)(V.ZT.Text)`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  & .anticon {
    padding: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,jc=v.iK.div`
  display: flex;
  & button {
    ${e=>{let{disabled:t}=e;return"pointer-events: "+(t?"none":"all")}};
    flex: 1;
  }
`,Vc=e=>{let{filterSetId:t,onCancel:n,dataMaskSelected:i,disabled:a}=e;const s=Zs(),d=(0,r.I0)(),c=Ss(),u=Cs(),h=Object.values(c),[p,m]=(0,o.useState)(c[t].name),g=wc(p,c[t].name),f=(0,o.useMemo)((()=>Kr({dataMaskSelected:i,filterSetFilterValues:h})),[i,h]),v=f&&f.id!==t,y=a||v||g;return(0,b.tZ)(Ac,null,(0,b.tZ)(qc,{strong:!0},(0,l.t)("Editing filter set:")),(0,b.tZ)(qc,{editable:{editing:!0,icon:(0,b.tZ)("span",null),onChange:m}},p),(0,b.tZ)(Tc,null,(0,b.tZ)(K.Z,{ghost:!0,buttonStyle:"tertiary",buttonSize:"small",onClick:n},(0,l.t)("Cancel")),(0,b.tZ)(V._e,{placement:"right",title:g&&(0,l.t)("Filter set with this name already exists")||v&&(0,l.t)("Filter set already exists")||a&&jr},(0,b.tZ)(jc,{disabled:y},(0,b.tZ)(K.Z,(0,G.Z)({disabled:y,buttonStyle:"primary",htmlType:"submit",buttonSize:"small",onClick:()=>{d((0,rl.ql)({id:t,name:p,nativeFilters:u,dataMask:{...s}})),n()}},ys("filter-set-edit-save")),(0,l.t)("Save"))))),v&&(0,b.tZ)(Lc,{mark:!0},(0,b.tZ)(B.Z.WarningOutlined,{iconSize:"m"}),(0,l.t)('This filter set is identical to: "%s"',null==f?void 0:f.name)))};var Kc=n(42074);const{SubMenu:Bc}=Zt.Menu,Hc=(0,v.iK)(Kc.P)`
  button.ant-btn:first-of-type {
    display: none;
  }
  > button.ant-btn:nth-of-type(2) {
    display: inline-flex;
    background-color: transparent !important;
    height: unset;
    padding: 0;
    border: none;
    width: auto !important;

    .anticon {
      line-height: 0;
    }
    &:after {
      box-shadow: none !important;
    }
  }
`,Wc=(0,v.iK)(Zt.Menu)`
  ${e=>{let{theme:t}=e;return`\n    .info {\n      font-size: ${t.typography.sizes.s}px;\n      color: ${t.colors.grayscale.base};\n      padding: ${t.gridUnit}px ${3*t.gridUnit}px ${t.gridUnit}px ${3*t.gridUnit}px;\n    }\n    .ant-dropdown-menu-item-selected {\n      color: ${t.colors.grayscale.dark1};\n      background-color: ${t.colors.primary.light5};\n    }\n  `}}
`,Yc=(0,v.iK)(Zt.Menu.Item)`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
  border-bottom: ${e=>{let{divider:t,theme:n}=e;return t?`1px solid ${n.colors.grayscale.light3};`:"none;"}};
`,Jc=v.iK.div`
  display: flex;
  justify-content: space-between;
  > span {
    width: 100%;
  }
`,Xc=e=>{const t=(0,v.Fg)(),{icon:n,info:i,menuItems:r,selectedKeys:a,onSelect:s}=e,l=(0,o.useMemo)((()=>(e,n,i)=>(0,b.tZ)(Yc,{key:n,divider:i},(0,b.tZ)(Jc,null,(0,b.tZ)("span",null,e),(null==a?void 0:a.includes(n))&&(0,b.tZ)(B.Z.Check,{iconColor:t.colors.primary.base,className:"tick-menu-item",iconSize:"xl"})))),[a,t.colors.primary.base]),d=(0,o.useMemo)((()=>(0,b.tZ)(Wc,{selectedKeys:a,onSelect:s,selectable:!0},i&&(0,b.tZ)("div",{className:"info"},i),r.map((e=>{var t;return null!=(t=e.children)&&t.length?(0,b.tZ)(Bc,{title:e.label,key:e.key},e.children.map((e=>l(e.label,e.key)))):l(e.label,e.key,e.divider)})))),[a,s,i,r,l]);return(0,b.tZ)(Hc,{overlay:d,trigger:["click"],icon:n})},Gc=v.iK.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .enable-cross-filters-text {
    padding-left: ${e=>{let{theme:t}=e;return 2*t.gridUnit+"px"}};
  }
`,Qc=(0,v.iK)(J.ZP)`
  ${e=>{let{theme:t}=e;return`\n  &,\n  svg {\n    display: inline-block;\n    width: ${4*t.gridUnit}px;\n    height: ${4*t.gridUnit}px;\n  }\n`}}
`,eu="cross-filters-menu-key",tu="cross-filters-scoping-menu-key",nu=()=>{const e=(0,r.I0)(),t=(0,v.Fg)(),n=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.crossFiltersEnabled})),i=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.filterBarOrientation})),[a,s]=(0,o.useState)(i),c=(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS),u=n&&c,[h,p]=(0,o.useState)(u),m=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),g=m&&(0,d.cr)(d.TT.HORIZONTAL_FILTER_BAR),[f,y]=gr(),x=(0,o.useCallback)((async t=>{t||e((0,ht.sh)()),await e((0,Kn.C6)(t))}),[e]),S=(0,o.useCallback)((()=>{p(!h),x(!h)}),[h,x]),C=(0,o.useCallback)((async t=>{if(t!==i){s(t);try{await e((0,Kn.Mn)(t))}catch{s(i)}}}),[e,i]),Z=(0,o.useCallback)((e=>{const t=e.key;var n;t===eu?S():(n=t)===Di.Bp.VERTICAL||n===Di.Bp.HORIZONTAL?C(t):t===tu&&f()}),[f,S,C]),w=(0,o.useMemo)((()=>(0,b.tZ)(Gc,null,(0,b.tZ)(Qc,{className:"enable-cross-filters",checked:h,onChange:e=>p(e||!1)})," ",(0,b.tZ)("span",{className:"enable-cross-filters-text"},(0,l.t)("Enable cross-filtering")))),[h]),R=(0,o.useMemo)((()=>{const e=[];return c&&m&&(e.push({key:eu,label:w}),e.push({key:tu,label:(0,l.t)("Cross-filtering scoping"),divider:g})),g&&e.push({key:"placement",label:(0,l.t)("Orientation of filter bar"),children:[{key:Di.Bp.VERTICAL,label:(0,l.t)("Vertical (Left)")},{key:Di.Bp.HORIZONTAL,label:(0,l.t)("Horizontal (Top)")}]}),e}),[m,g,w,c]);return R.length?(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Xc,{onSelect:Z,icon:(0,b.tZ)(B.Z.Gear,{name:"gear",iconColor:t.colors.grayscale.base}),menuItems:R,selectedKeys:[a]}),y):null},iu=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${2*t.gridUnit}px ${2*t.gridUnit}px;

    & > span {
      font-size: ${t.typography.sizes.l}px;
      flex-grow: 1;
      font-weight: ${t.typography.weights.bold};
    }

    & > div:first-of-type {
      line-height: 0;
    }

    & > button > span.anticon {
      line-height: 0;
    }
  `}}
`,ru=(0,v.iK)(K.Z)`
  padding: 0;
`,ou=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${3*t.gridUnit}px ${2*t.gridUnit}px ${t.gridUnit}px;\n\n    .ant-dropdown-trigger span {\n      padding-right: ${2*t.gridUnit}px;\n    }\n  `}}
`,au=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    margin-top: ${2*t.gridUnit}px;

    & button > [role='img']:first-of-type {
      margin-right: ${t.gridUnit}px;
      line-height: 0;
    }

    span[role='img'] {
      padding-bottom: 1px;
    }

    .ant-btn > .anticon + span {
      margin-left: 0;
    }
  `}}
`,su=e=>{let{toggleFiltersBar:t}=e;const n=(0,v.Fg)(),i=Cs(),a=(0,o.useMemo)((()=>Object.values(i)),[i]),s=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),c=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.id}));return(0,b.tZ)(ou,null,(0,b.tZ)(iu,null,(0,b.tZ)("span",null,(0,l.t)("Filters")),(0,b.tZ)(nu,null),(0,b.tZ)(ru,(0,G.Z)({},ys("collapse-button"),{buttonStyle:"link",buttonSize:"xsmall",onClick:()=>t(!1)}),(0,b.tZ)(B.Z.Expand,{iconColor:n.colors.grayscale.base}))),s&&(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&(0,b.tZ)(au,null,(0,b.tZ)(bc,{dashboardId:c,createNewOnOpen:0===a.length},(0,b.tZ)(B.Z.PlusSmall,null)," ",(0,l.t)("Add/Edit Filters"))))},lu=o.memo(su),du=e=>{const{dataMask:t,chartConfiguration:n,dashboardLayout:i,verboseMaps:r}=e;return Object.keys(n).map((e=>{const n=Number(e),o=oo(n,t[n],i);if((0,ki.Z)(o.column)&&(0,ki.Z)(o.value)){var a;const e=(null==(a=r[n])?void 0:a[(0,Xr.Z)(o.column)])||o.column;return{...o,column:e,emitterId:n}}return null})).filter(Boolean)},cu=b.iv`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
`,uu=v.iK.b`
  ${e=>{let{theme:t}=e;return`\n    max-width: ${25*t.gridUnit}px;\n  `}}
  ${cu}
`,hu=(0,v.iK)("span")`
  ${e=>{let{theme:t}=e;return`\n    max-width: ${25*t.gridUnit}px;\n    padding-right: ${t.gridUnit}px;\n  `}}
  ${cu}
`,pu=(0,v.iK)(V.Vp)`
  ${e=>{let{theme:t}=e;return`\n    border: 1px solid ${t.colors.grayscale.light3};\n    border-radius: 2px;\n    .anticon-close {\n      vertical-align: middle;\n    }\n  `}}
`,mu=e=>{var t;const{filter:n,orientation:i,removeCrossFilter:r}=e,o=(0,v.Fg)(),[a,s]=(0,Ws.Z)(),[l,d]=(0,Ws.Z)(),c=(0,Xr.Z)(null!=(t=n.column)?t:"");return(0,b.tZ)(pu,{css:b.iv`
        ${i===Di.Bp.VERTICAL?`\n            margin-top: ${2*o.gridUnit}px;\n          `:`\n            margin-left: ${2*o.gridUnit}px;\n          `}
      `,closable:!0,onClose:()=>r(n.emitterId)},(0,b.tZ)(ee.u,{title:s?c:null},(0,b.tZ)(hu,{ref:a},c)),(0,b.tZ)(ee.u,{title:d?n.value:null},(0,b.tZ)(uu,{ref:l},n.value)))},gu=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    font-size: ${t.typography.sizes.s}px;\n    color: ${t.colors.grayscale.base};\n    vertical-align: middle;\n    align-items: center;\n  `}}
`,fu=(0,v.iK)(B.Z.SearchOutlined)`
  ${e=>{let{theme:t}=e;return`\n    & > span.anticon.anticon-search {\n      color: ${t.colors.grayscale.light1};\n      margin-left: ${t.gridUnit}px;\n      transition: 0.3s;\n      vertical-align: middle;\n      line-height: 0;\n      &:hover {\n        color: ${t.colors.grayscale.base};\n      }\n    }\n  `}}
`,vu=e=>{const{title:t,orientation:n,onHighlightFilterSource:i}=e,[r,o]=(0,Ws.Z)(),a=(0,v.Fg)();return(0,b.tZ)(gu,null,(0,b.tZ)(ee.u,{title:o?t:null},(0,b.tZ)("span",{css:b.iv`
            max-width: ${n===Di.Bp.VERTICAL?45*a.gridUnit+"px":15*a.gridUnit+"px"};
            line-height: 1.4;
            ${cu}
          `,ref:r},t)),(0,b.tZ)(ee.u,{title:(0,l.t)("Locate the chart")},(0,b.tZ)(fu,{iconSize:"s",role:"button",tabIndex:0,onClick:i})))},bu=e=>{const{filter:t,orientation:n,last:i}=e,a=(0,v.Fg)(),s=(0,r.I0)(),l=(0,o.useCallback)((e=>{e&&s((0,Bn.E2)(e))}),[s]);return(0,b.tZ)("div",{key:`${t.name}${t.emitterId}`,css:b.iv`
        ${n===Di.Bp.VERTICAL?`\n            display: block;\n            margin-bottom: ${4*a.gridUnit}px;\n          `:"\n            display: flex;\n          "}
      `},(0,b.tZ)(vu,{title:t.name,orientation:n||Di.Bp.HORIZONTAL,onHighlightFilterSource:()=>l(t.path)}),(t.column||t.value)&&(0,b.tZ)(mu,{filter:t,orientation:n,removeCrossFilter:e=>{s((0,ht.eG)(e,{extraFormData:{filters:[]},filterState:{value:null,selectedValues:null}}))}}),i&&(0,b.tZ)("span",{css:b.iv`
            ${n===Di.Bp.HORIZONTAL?`\n                width: 1px;\n                height: 22px;\n                margin-left: ${4*a.gridUnit}px;\n                margin-right: ${a.gridUnit}px;\n              `:`\n                width: 100%;\n                height: 1px;\n                display: block;\n                margin-bottom: ${4*a.gridUnit}px;\n                margin-top: ${4*a.gridUnit}px;\n            `}
            background: ${a.colors.grayscale.light2};
          `}))},yu=(0,v.iK)(Wl.Z)`
  ${e=>{let{theme:t}=e;return`\n    .ant-collapse-header {\n      margin-bottom: ${4*t.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-header {\n      padding-bottom: 0;\n    }\n    .ant-collapse-item > .ant-collapse-header > .ant-collapse-arrow {\n      font-size: ${t.typography.sizes.xs}px;\n      padding-top: ${3*t.gridUnit}px;\n    }\n    .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {\n      padding-top: 0;\n    }\n  `}}
`,xu=v.iK.span`
  ${e=>{let{theme:t}=e;return`\n    font-size: ${t.typography.sizes.s}px;\n  `}}
`,Su=e=>{const{crossFilters:t}=e,n=(0,v.Fg)(),i=(0,o.useMemo)((()=>t.map((e=>(0,b.tZ)(bu,{key:e.emitterId,filter:e,orientation:Di.Bp.VERTICAL})))),[t]);return t.length?(0,b.tZ)(yu,{ghost:!0,defaultActiveKey:"crossFilters",expandIconPosition:"right"},(0,b.tZ)(Wl.Z.Panel,{key:"crossFilters",header:(0,b.tZ)(xu,null,(0,l.t)("Cross-filters"))},i,(0,b.tZ)("span",{css:b.iv`
            width: 100%;
            height: 1px;
            display: block;
            background: ${n.colors.grayscale.light3};
            margin: ${8*n.gridUnit}px auto 0 auto;
          `}))):null},Cu=()=>{const e=(0,r.v9)((e=>e.dataMask)),t=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),n=(0,r.v9)((e=>e.dashboardLayout.present)),i=bs(),o=du({dataMask:e,chartConfiguration:t,dashboardLayout:n,verboseMaps:i});return(0,b.tZ)(Su,{crossFilters:o})},Zu=v.iK.div`
  width: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;

  & .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  &.open {
    width: ${e=>{let{width:t}=e;return t}}px; // arbitrary...
  }
`,wu=v.iK.div`
  ${e=>{let{theme:t,width:n}=e;return`\n    & .ant-typography-edit-content {\n      left: 0;\n      margin-top: 0;\n      width: 100%;\n    }\n    position: absolute;\n    top: 0;\n    left: 0;\n    flex-direction: column;\n    flex-grow: 1;\n    width: ${n}px;\n    background: ${t.colors.grayscale.light5};\n    border-right: 1px solid ${t.colors.grayscale.light2};\n    border-bottom: 1px solid ${t.colors.grayscale.light2};\n    min-height: 100%;\n    display: none;\n    &.open {\n      display: flex;\n    }\n  `}}
`,Ru=v.iK.div`
  ${e=>{let{theme:t,offset:n}=e;return`\n    position: absolute;\n    top: ${n}px;\n    left: 0;\n    height: 100%;\n    width: ${8*t.gridUnit}px;\n    padding-top: ${2*t.gridUnit}px;\n    display: none;\n    text-align: center;\n    &.open {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: ${2*t.gridUnit}px;\n    }\n    svg {\n      cursor: pointer;\n    }\n  `}}
`,Tu=(0,v.iK)(B.Z.Collapse)`
  ${e=>{let{theme:t}=e;return`\n    color: ${t.colors.primary.base};\n    margin-bottom: ${3*t.gridUnit}px;\n  `}}
`,ku=(0,v.iK)(B.Z.Filter)`
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
`,Du=(0,v.iK)(V.D6)`
  & .ant-tabs-nav-list {
    width: 100%;
  }
  & .ant-tabs-tab {
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;
  }

  & > .ant-tabs-nav .ant-tabs-nav-operations {
    display: none;
  }
`,$u=v.iK.div`
  margin-top: ${e=>{let{theme:t}=e;return 8*t.gridUnit}}px;
`,_u=v.iK.div`
  padding: ${e=>{let{theme:t}=e;return 4*t.gridUnit}}px;
  // 108px padding to make room for buttons with position: absolute
  padding-bottom: ${e=>{let{theme:t}=e;return 27*t.gridUnit}}px;
`,Iu=(0,o.createContext)(!1),Mu=e=>{let{actions:t,canEdit:n,dataMaskSelected:i,filtersOpen:r,filterValues:a,height:s,isDisabled:c,isInitialized:h,offset:p,onSelectionChange:m,toggleFiltersBar:g,width:v}=e;const[y,x]=(0,o.useState)(null),S=Ss(),C=Object.values(S),[Z,w]=(0,o.useState)(Zc.AllFilters),R=a.filter(Gr.kI),[T,k]=(0,o.useState)(!1),D=(0,o.useRef)(),$=(0,o.useCallback)((()=>g(!0)),[g]),_=(0,o.useMemo)((()=>me()((()=>{clearTimeout(D.current),k(!0),D.current=setTimeout((()=>{k(!1)}),300)}),200)),[]);(0,o.useEffect)((()=>(document.onscroll=_,()=>{document.onscroll=null})),[_]);const I=(0,o.useMemo)((()=>({overflow:"auto",height:s,overscrollBehavior:"contain"})),[s]),M=R.length,F=(0,o.useMemo)((()=>0===a.length?(0,b.tZ)($u,null,(0,b.tZ)(La.Tc,{title:(0,l.t)("No global filters are currently added"),image:"filter.svg",description:n&&(0,l.t)('Click on "+Add/Edit Filters" button to create new dashboard filters')})):(0,b.tZ)(_u,null,(0,b.tZ)(oh,{dataMaskSelected:i,onFilterSelectionChange:m}))),[n,i,a.length,m]),E=(0,o.useMemo)((()=>(0,b.tZ)(Du,{centered:!0,onChange:w,defaultActiveKey:Zc.AllFilters,activeKey:y?Zc.AllFilters:void 0},(0,b.tZ)(V.D6.TabPane,{tab:(0,l.t)("All filters (%(filterCount)d)",{filterCount:M}),key:Zc.AllFilters,css:I},y&&(0,b.tZ)(Vc,{dataMaskSelected:i,disabled:!c,onCancel:()=>x(null),filterSetId:y}),F),(0,b.tZ)(V.D6.TabPane,{disabled:!!y,tab:(0,l.t)("Filter sets (%(filterSetCount)d)",{filterSetCount:C.length}),key:Zc.FilterSets,css:I},(0,b.tZ)(Nc,{onEditFilterSet:x,disabled:!c,dataMaskSelected:i,tab:Z,onFilterSelectionChange:m})))),[i,y,F,C.length,c,M,m,Z,I]),O=(0,o.useMemo)((()=>(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS)?(0,b.tZ)(Cu,null):null),[]),z=(0,o.useMemo)((()=>(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)?t:null),[t]),U=(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS_SET)&&(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS);return(0,b.tZ)(Iu.Provider,{value:T},(0,b.tZ)(Zu,(0,G.Z)({},ys(),{className:f()({open:r}),width:v}),(0,b.tZ)(Ru,(0,G.Z)({},ys("collapsable"),{className:f()({open:!r}),onClick:$,offset:p}),(0,b.tZ)(Tu,(0,G.Z)({},ys("expand-button"),{iconSize:"l"})),(0,b.tZ)(ku,(0,G.Z)({},ys("filter-icon"),{iconSize:"l"}))),(0,b.tZ)(wu,{className:f()({open:r}),width:v},(0,b.tZ)(lu,{toggleFiltersBar:g}),h?U?(0,b.tZ)(o.Fragment,null,O,E):(0,b.tZ)("div",{css:I,onScroll:_},(0,b.tZ)(o.Fragment,null,O,(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&F)):(0,b.tZ)("div",{css:(0,b.iv)({height:s},"","")},(0,b.tZ)(u.Z,null)),z)))},Fu=o.memo(Mu);var Eu;!function(e){e.Right="right",e.Bottom="bottom",e.Left="left"}(Eu||(Eu={}));const Ou=v.iK.div`
  position: absolute;
  right: 0;
`,zu=v.iK.h4`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.s}}px;
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.dark1}};
  margin: 0;
  overflow-wrap: anywhere;
`,Uu=(0,v.iK)(zu)`
  font-weight: ${e=>{let{theme:t}=e;return t.typography.weights.normal}};
  color: ${e=>{let{theme:t}=e;return t.colors.grayscale.base}};
  max-width: ${e=>{let{theme:t}=e;return 15*t.gridUnit}}px;
  ${Ws.B};
`,Pu=(0,v.iK)(Uu)`
  max-width: none;
`,Nu=v.iK.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
`,Au=(0,v.iK)(Nu)`
  margin-bottom: unset;
`,qu=(0,v.iK)(Nu)`
  width: 100%;
`,Lu=(0,v.iK)(Ut.l0)`
  width: 100%;
  && .ant-form-item-label > label {
    text-transform: none;
    width: 100%;
    padding-right: ${e=>{let{theme:t}=e;return 11*t.gridUnit}}px;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,ju=(0,v.iK)(Ut.l0)`
  && .ant-form-item-label > label {
    margin-bottom: 0;
    text-transform: none;
  }
  .ant-form-item-tooltip {
    margin-bottom: ${e=>{let{theme:t}=e;return t.gridUnit}}px;
  }
`,Vu=(0,v.iK)(Lu)`
  && .ant-form-item-label {
    line-height: 1;
    & > label {
      padding-right: unset;
    }
  }
`,Ku=(0,v.iK)(Ut.xJ)`
  .ant-form-item-label {
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }
  }
`,Bu=(0,v.iK)(Ut.xJ)`
  && {
    margin-bottom: 0;
    align-items: center;
  }

  .ant-form-item-label {
    padding-bottom: 0;
    margin-right: ${e=>{let{theme:t}=e;return 2*t.gridUnit}}px;
    label.ant-form-item-required:not(.ant-form-item-required-mark-optional) {
      &::after {
        display: none;
      }
    }

    & > label::after {
      display: none;
    }
  }

  .ant-form-item-control {
    width: ${e=>{let{theme:t}=e;return 41*t.gridUnit}}px;
  }
`,Hu=Ku,Wu=v.iK.div`
  font-size: ${e=>{let{theme:t}=e;return t.typography.sizes.m}}px;
  display: flex;
`,Yu=()=>(0,b.tZ)("span",{css:e=>({color:e.colors.error.base,fontSize:`${e.typography.sizes.s}px`,paddingLeft:"1px"})},"*"),Ju=e=>{let{description:t}=e;return(0,b.tZ)(Wu,null,(0,b.tZ)(ee.u,{title:t,placement:"right",overlayInnerStyle:{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:20,WebkitBoxOrient:"vertical",textOverflow:"ellipsis"},getPopupContainer:e=>e.parentElement},(0,b.tZ)("i",{className:"fa fa-info-circle text-muted",css:e=>({paddingLeft:`${e.gridUnit}px`,cursor:"pointer"})})))},Xu=e=>{var t,n,i;let{dataMaskSelected:r,filter:a,icon:s,onFilterSelectionChange:l,inView:d,showOverflow:c,parentRef:u,orientation:h=Di.Bp.VERTICAL,overflow:p=!1}=e;const m=(0,o.useMemo)((()=>Us()),[]),[g,f]=(0,o.useState)(!1),{name:v="<undefined>"}=a,y=Ls()(a)&&vs(a,null==(t=a.dataMask)?void 0:t.filterState)?"error":void 0,x=!(null==(n=a.controlValues)||!n.enableEmptyFilter),{FilterControlContainer:S,FormItem:C,FilterControlTitleBox:Z,FilterControlTitle:w}=((e,t)=>(0,o.useMemo)((()=>e===Di.Bp.HORIZONTAL?t?{FilterControlContainer:Vu,FormItem:Hu,FilterControlTitleBox:qu,FilterControlTitle:Pu}:{FilterControlContainer:ju,FormItem:Bu,FilterControlTitleBox:Au,FilterControlTitle:Uu}:{FilterControlContainer:Lu,FormItem:Ku,FilterControlTitleBox:Nu,FilterControlTitle:zu}),[e,t]))(h,p),R=(0,o.useMemo)((()=>{var e;return(0,b.tZ)(Z,null,(0,b.tZ)(w,null,v),x&&(0,b.tZ)(Yu,null),(null==(e=a.description)?void 0:e.trim())&&(0,b.tZ)(Ju,{description:a.description}),(0,b.tZ)(Ou,null,s))}),[Z,w,v,x,a.description,s]),T=(0,o.useContext)(Iu),k=(0,o.useMemo)((()=>h===Di.Bp.HORIZONTAL?p?Eu.Left:Eu.Bottom:Eu.Right),[h,p]);return(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Os,{node:m},(0,b.tZ)(pl,{dataMaskSelected:r,filter:a,showOverflow:c,onFilterSelectionChange:l,inView:d,parentRef:u,setFilterActive:f,orientation:h,overflow:p,validateStatus:y})),(0,b.tZ)(S,{layout:h!==Di.Bp.HORIZONTAL||p?"vertical":"horizontal"},(0,b.tZ)(Cc,{filter:a,isVisible:!g&&!T,placement:k},(0,b.tZ)("div",null,(0,b.tZ)(C,{label:R,required:null==a||null==(i=a.controlValues)?void 0:i.enableEmptyFilter,validateStatus:y},(0,b.tZ)(zs,{node:m}))))))},Gu=o.memo(Xu),Qu=e=>{let{title:t,description:n}=e;return(0,b.tZ)("div",null,(0,b.tZ)("h3",null,t),n?(0,b.tZ)("p",null,n):null)},eh=e=>{let{title:t,description:n}=e;const i=(0,v.Fg)(),[r,o]=(0,Ws.Z)();return(0,b.tZ)("div",{css:b.iv`
        display: flex;
        align-items: center;
        height: ${6*i.gridUnit}px;
        border-left: 1px solid ${i.colors.grayscale.light2};
        padding-left: ${4*i.gridUnit}px;

        .filter-item-wrapper:first-child & {
          border-left: none;
          padding-left: 0;
        }
      `},(0,b.tZ)(ee.u,{overlay:o?t:null},(0,b.tZ)("h3",{ref:r,css:b.iv`
            ${Ws.B};
            max-width: ${32.5*i.gridUnit}px;
            font-size: ${i.typography.sizes.m}px;
            font-weight: ${i.typography.weights.normal};
            margin: 0;
            color: ${i.colors.grayscale.dark1};
          `},t)),n?(0,b.tZ)(ee.u,{overlay:n},(0,b.tZ)(B.Z.BookOutlined,{iconSize:"l",iconColor:i.colors.grayscale.base,css:b.iv`
              margin: 0 ${1.5*i.gridUnit}px;
              vertical-align: unset;
              line-height: unset;
            `})):null)},th=e=>{let{title:t,description:n}=e;const i=(0,v.Fg)(),[r,o]=(0,Ws.Z)(),[a,s]=(0,Ws.Z)();return(0,b.tZ)("div",{css:b.iv`
        border-top: 1px solid ${i.colors.grayscale.light2};
        padding-top: ${4*i.gridUnit}px;
        margin-bottom: ${4*i.gridUnit}px;
      `},(0,b.tZ)(ee.u,{overlay:o?(0,b.tZ)("strong",null,t):null},(0,b.tZ)("h3",{ref:r,css:b.iv`
            ${Ws.B};
            display: block;
            color: ${i.colors.grayscale.dark1};
            font-weight: ${i.typography.weights.normal};
            font-size: ${i.typography.sizes.m}px;
            margin: 0 0 ${i.gridUnit}px 0;
          `},t)),n?(0,b.tZ)(ee.u,{overlay:s?n:null},(0,b.tZ)("p",{ref:a,css:b.iv`
              ${Ws.B};
              display: block;
              font-size: ${i.typography.sizes.s}px;
              color: ${i.colors.grayscale.base};
              margin: ${i.gridUnit}px 0 0 0;
            `},n)):null)},nh=e=>{let{title:t,description:n,orientation:i=Di.Bp.VERTICAL,overflow:r=!1}=e;return i===Di.Bp.HORIZONTAL?r?(0,b.tZ)(th,{title:t,description:n}):(0,b.tZ)(eh,{title:t,description:n}):(0,b.tZ)(Qu,{title:t,description:n})},ih=e=>{let{overflowedCrossFilters:t,filtersInScope:n,filtersOutOfScope:i,renderer:r,rendererCrossFilter:o,showCollapsePanel:a,forceRenderOutOfScope:s}=e;return(0,b.tZ)("div",{css:e=>b.iv`
      width: ${56*e.gridUnit}px;
      padding: ${e.gridUnit}px 0;
    `},t.map((e=>o(e,Di.Bp.VERTICAL,t.at(-1)))),n.map(r),a&&(0,b.tZ)(Hs,{filtersOutOfScope:i,renderer:r,forceRender:s,horizontalOverflow:!0}))},rh=e=>{let{dataMaskSelected:t,onFilterSelectionChange:n}=e;const i=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return(0,d.cr)(d.TT.HORIZONTAL_FILTER_BAR)?t.filterBarOrientation:Di.Bp.VERTICAL})),{outlinedFilterId:a,lastUpdated:s}=ll(),[c,u]=(0,o.useState)([]),h=(0,o.useRef)(null),p=(0,r.v9)((e=>e.dataMask)),m=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,r.v9)((e=>e.dashboardLayout.present)),f=bs(),v=(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS),y=(0,o.useMemo)((()=>v?du({dataMask:p,chartConfiguration:m,dashboardLayout:g,verboseMaps:f}):[]),[m,g,p,v]),{filterControlFactory:x,filtersWithValues:S}=((e,t)=>{const n=Cs(),i=(0,o.useMemo)((()=>Object.values(n)),[n]),r=(0,o.useMemo)((()=>i.map((t=>({...t,dataMask:e[t.id]})))),[i,e]);return{filterControlFactory:(0,o.useCallback)(((n,i,o)=>{const a=r[n];return(0,Gr.nY)(a)?(0,b.tZ)(nh,{title:a.title,description:a.description,orientation:i,overflow:o}):(0,b.tZ)(Gu,{dataMaskSelected:e,filter:a,onFilterSelectionChange:t,inView:!1,orientation:i,overflow:o})}),[r,e,t]),filtersWithValues:r}})(t,n),C=(0,o.useMemo)((()=>{const e=new Array(S.length);for(let t=0;t<S.length;t+=1)e[t]=Us();return e}),[S.length]),Z=new Set(S.map((e=>e.id))),[w,R]=js(S),T=(0,o.useMemo)((()=>S.some((e=>e.requiredFirst))),[S]),k=qs()&&S.length>0,D=(0,o.useCallback)(((e,t)=>{let{id:n}=e;const i=S.findIndex((e=>e.id===n)),r=null!=t?t:n;return(0,b.tZ)(o.Fragment,{key:r},"",(0,b.tZ)(zs,{node:C[i],inView:!0}))}),[S,C]),$=(0,o.useMemo)((()=>w.filter((e=>{let{id:t}=e;return null==c?void 0:c.includes(t)}))),[w,c]),_=(0,o.useMemo)((()=>y.filter((e=>{let{emitterId:t,name:n}=e;return null==c?void 0:c.includes(`${n}${t}`)}))),[c,y]),I=(0,o.useMemo)((()=>[...$.filter((e=>(0,Gr.S0)(e))),..._]),[_,$]),M=(0,o.useCallback)(((e,t,n)=>(0,b.tZ)(bu,{filter:e,orientation:t,last:w.length>0&&`${n.name}${n.emitterId}`==`${e.name}${e.emitterId}`})),[w.length]),F=(0,o.useMemo)((()=>{const e=y.map((e=>({id:`${e.name}${e.emitterId}`,element:M(e,Di.Bp.HORIZONTAL,y.at(-1))})));if((0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)){const t=w.map(((e,t)=>({id:e.id,element:(0,b.tZ)("div",{className:"filter-item-wrapper",css:b.iv`
              flex-shrink: 0;
            `},D(e,t))})));return[...e,...t]}return[...e]}),[w,D,M,y]),E=(0,o.useMemo)((()=>{const e=new Set(R.map((e=>{let{id:t}=e;return t}))),t=new Set($.map((e=>{let{id:t}=e;return t})));return S.map((n=>e.has(n.id)||t.has(n.id)))}),[R,S,$]);return(0,o.useEffect)((()=>{var e;a&&c.includes(a)&&(null==h||null==(e=h.current)||e.open())}),[a,s,h,c]),(0,b.tZ)(o.Fragment,null,C.filter(((e,t)=>Z.has(S[t].id))).map(((e,t)=>(0,b.tZ)(Os,{node:e,key:S[t].id},x(t,i,E[t])))),i===Di.Bp.VERTICAL&&(0,b.tZ)(o.Fragment,null,w.map(D),k&&(0,b.tZ)(Hs,{filtersOutOfScope:R,forceRender:T,hasTopMargin:w.length>0,renderer:D})),i===Di.Bp.HORIZONTAL&&(0,b.tZ)("div",{css:e=>b.iv`
        padding: 0 ${4*e.gridUnit}px;
        min-width: 0;
        flex: 1;
      `},(0,b.tZ)(Bs,{items:F,dropdownTriggerIcon:(0,b.tZ)(B.Z.FilterSmall,{css:b.iv`
              && {
                margin-right: -4px;
                display: flex;
              }
            `}),dropdownTriggerText:(0,l.t)("More filters"),dropdownTriggerCount:I.length,dropdownTriggerTooltip:0===I.length?(0,l.t)("No applied filters"):(0,l.t)("Applied filters: %s",I.map((e=>e.name)).join(", ")),dropdownContent:$.length||_.length||R.length&&k?()=>(0,b.tZ)(ih,{overflowedCrossFilters:_,filtersInScope:$,filtersOutOfScope:R,renderer:D,rendererCrossFilter:M,showCollapsePanel:k,forceRenderOutOfScope:T}):void 0,forceRender:T,ref:h,onOverflowingStateChange:e=>{let{overflowed:t}=e;(t.length!==c.length||c.reduce(((e,n,i)=>e||n!==t[i]),!1))&&u(t)}})))},oh=o.memo(rh),ah=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    padding: ${3*t.gridUnit}px ${2*t.gridUnit}px ${3*t.gridUnit}px ${4*t.gridUnit}px;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: inset 0px -2px 2px -1px ${t.colors.grayscale.light2};\n  `}}
`,sh=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    line-height: 0;\n\n    .loading {\n      margin: ${2*t.gridUnit}px auto ${2*t.gridUnit}px;\n      padding: 0;\n    }\n  `}}
`,lh=v.iK.div`
  ${e=>{let{theme:t}=e;return`\n    font-weight: ${t.typography.weights.bold};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n  `}}
`,dh=v.iK.div`
  ${e=>{let{theme:t,hasFilters:n}=e;return`\n    height: 24px;\n    display: flex;\n    align-items: center;\n    padding: 0 ${4*t.gridUnit}px 0 ${4*t.gridUnit}px;\n    border-right: ${n?`1px solid ${t.colors.grayscale.light2}`:0};\n\n    button {\n      display: flex;\n      align-items: center;\n      > .anticon {\n        height: 24px;\n        padding-right: ${t.gridUnit}px;\n      }\n      > .anticon + span, > .anticon {\n          margin-right: 0;\n          margin-left: 0;\n        }\n    }\n  `}}
`,ch=e=>{let{actions:t,canEdit:n,dashboardId:i,dataMaskSelected:a,filterValues:s,isInitialized:c,onSelectionChange:h}=e;const p=(0,r.v9)((e=>e.dataMask)),m=(0,r.v9)((e=>{var t;return null==(t=e.dashboardInfo.metadata)?void 0:t.chart_configuration})),g=(0,r.v9)((e=>e.dashboardLayout.present)),f=(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS),v=bs(),y=f?du({dataMask:p,chartConfiguration:m,dashboardLayout:g,verboseMaps:v}):[],x=s.length>0||y.length>0,S=(0,o.useMemo)((()=>(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)?t:null),[t]);return(0,b.tZ)(ah,ys(),(0,b.tZ)(sh,null,c?(0,b.tZ)(o.Fragment,null,(0,b.tZ)(nu,null),n&&(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&(0,b.tZ)(dh,{hasFilters:x},(0,b.tZ)(bc,{dashboardId:i,createNewOnOpen:0===s.length},(0,b.tZ)(B.Z.PlusSmall,null)," ",(0,l.t)("Add/Edit Filters"))),!x&&(0,b.tZ)(lh,null,(0,l.t)("No filters are currently added to this dashboard.")),x&&(0,b.tZ)(oh,{dataMaskSelected:a,onFilterSelectionChange:h}),S):(0,b.tZ)(u.Z,{position:"inline-centered"})))},uh=o.memo(ch),hh=v.iK.div`
  display: none;
`,ph=[wt.KD.nativeFilters.name,wt.KD.permalinkKey.name],mh=D()((async(e,t,n,i,r)=>{const{location:o}=e,{search:a}=o,s=new URLSearchParams(a),l=new URLSearchParams;let d;s.forEach(((e,t)=>{ph.includes(t)||l.append(t,e)}));const c=(0,kt.eY)(wt.KD.nativeFiltersKey),u=JSON.stringify(i);d=n&&c&&await(0,ws.TZ)(t,u,c,r)?c:await(0,ws.u7)(t,u,r),d&&l.set(wt.KD.nativeFiltersKey.name,d),window.location.pathname.includes("/superset/dashboard")&&(e.location.pathname=window.location.pathname,e.replace({search:l.toString()}))}),us.M),gh=e=>{let{orientation:t=Di.Bp.VERTICAL,verticalConfig:n,hidden:i=!1}=e;const a=(0,ui.k6)(),s=Zs(),[l,d]=(0,hs.x)(s),c=(0,r.I0)(),[u,h]=(0,o.useState)(0),p=(0,ms.z)(),m=Cs(),g=(0,Er.D)(m),f=Object.values(m),v=f.filter(Gr.kI),y=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return null==t?void 0:t.id})),x=(0,Er.D)(y),S=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),[C]=js(v),Z=(0,o.useRef)(l);Z.current=l;const w=(0,o.useCallback)(((e,t)=>{d((n=>{var i,r,o;void 0!==(null==(i=t.filterState)?void 0:i.value)&&void 0===(null==(r=Z.current[e.id])||null==(o=r.filterState)?void 0:o.value)&&e.requiredFirst&&c((0,ht.eG)(e.id,t)),n[e.id]={...(0,ps.H)(e.id),...t}}))}),[c,d]);(0,o.useEffect)((()=>{if(g&&y===x){const e={};Object.values(m).forEach((t=>{const n=null==g?void 0:g[t.id];if(!n)return;const i=t.filterType,r=t.targets,o=t.defaultDataMask,a=null==n?void 0:n.filterType,s=null==n?void 0:n.targets,l=null==n?void 0:n.defaultDataMask,d=i!==a,c=!ci()(r,s),u=!ci()(o,l);(d||c||u)&&(e[t.id]=(0,ps.H)(t.id))})),St()(e)||(d((t=>({...t,...e}))),Object.keys(e).forEach((e=>c((0,ht.ze)(e)))))}}),[JSON.stringify(m),JSON.stringify(g),x]);const R=JSON.stringify(s);(0,o.useEffect)((()=>{d((()=>s))}),[R,d]),(0,o.useEffect)((()=>{mh(a,y,u,s,p)}),[y,R,a,u,p]);const T=(0,o.useCallback)((()=>{const e=Object.keys(l);h(1),e.forEach((e=>{l[e]&&c((0,ht.eG)(e,l[e]))}))}),[l,c]),k=(0,o.useCallback)((()=>{const e=[];let t=!1;C.filter(Gr.kI).forEach((n=>{const{id:i}=n;var r;l[i]&&(null!=(r=n.controlValues)&&r.enableEmptyFilter&&(t=!1),e.push(i),d((e=>{var t;void 0!==(null==(t=e[i].filterState)?void 0:t.value)&&(e[i].filterState.value=void 0)})))})),t&&e.forEach((e=>c((0,ht.ze)(e))))}),[l,c,C,d]);((e,t)=>{const n=Cs(),i=Zs();(0,o.useEffect)((()=>{Object.keys(e).forEach((e=>{n[e]||t((t=>{delete t[e]}))}))}),[i,e,n,t])})(l,d);const D=((e,t,n)=>{const i=Object.values(e),r=Object.values(t);return(0,mi.JB)(fs(e),fs(t),{ignoreUndefined:!0})||i.length!==r.length||n.some((t=>{var n;return vs(t,null==e||null==(n=e[null==t?void 0:t.id])?void 0:n.filterState)}))})(l,s,C.filter(Gr.kI)),$=(()=>{const[e,t]=(0,o.useState)(!1),n=Cs(),i=(0,r.v9)((e=>e.charts));let a=0;return e||(a=document.querySelectorAll('[data-ui-anchor="chart"]').length),(0,o.useEffect)((()=>{if(e)return;if(Object.values(n).find((e=>{let{requiredFirst:t}=e;return t})))return void t(!0);let r;0===a&&(r=setTimeout((()=>{t(!0)}),1e3)),a>0&&void 0!==r&&clearTimeout(r);const o=Object.values(i).filter((e=>{let{chartStatus:t}=e;return"loading"!==t})).length;a>0&&o>=a&&t(!0)}),[i,e,a]),e})(),_=(0,b.tZ)(Ds,{filterBarOrientation:t,width:null==n?void 0:n.width,onApply:T,onClearAll:k,dataMaskSelected:l,dataMaskApplied:s,isApplyDisabled:D}),I=t===Di.Bp.HORIZONTAL?(0,b.tZ)(uh,{actions:_,canEdit:S,dashboardId:y,dataMaskSelected:l,filterValues:f,isInitialized:$,onSelectionChange:w}):n?(0,b.tZ)(Fu,{actions:_,canEdit:S,dataMaskSelected:l,filtersOpen:n.filtersOpen,filterValues:f,isInitialized:$,isDisabled:D,height:n.height,offset:n.offset,onSelectionChange:w,toggleFiltersBar:n.toggleFiltersBar,width:n.width}):null;return i?(0,b.tZ)(hh,null,I):I},fh=o.memo(gh);var vh=n(80663);const bh=e=>{const t=e[W._4],n=null==t?void 0:t.children[0];return n===W.PV?e[W._4]:e[n]},yh=(e,t)=>"ant-tabs-nav-wrap"===e.target.className||t.contains(e.target);var xh=n(81545),Sh=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall","resizeObserverPolyfill"];function Ch(){return Ch=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ch.apply(this,arguments)}var Zh=[],wh={width:"100%",height:"100%"};function Rh(e){var t=e.className,n=e.children,i=e.debounceTime,r=void 0===i?300:i,a=e.ignoreDimensions,s=void 0===a?Zh:a,l=e.parentSizeStyles,d=void 0===l?wh:l,c=e.enableDebounceLeadingCall,u=void 0===c||c,h=e.resizeObserverPolyfill,p=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,Sh),m=(0,o.useRef)(null),g=(0,o.useRef)(0),f=(0,o.useState)({width:0,height:0,top:0,left:0}),v=f[0],b=f[1],y=(0,o.useMemo)((function(){var e=Array.isArray(s)?s:[s];return D()((function(t){b((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),r,{leading:u})}),[r,u,s]);return(0,o.useEffect)((function(){var e=new(h||window.ResizeObserver)((function(e){e.forEach((function(e){var t,n=null!=(t=null==e?void 0:e.contentRect)?t:{},i=n.left,r=n.top,o=n.width,a=n.height;g.current=window.requestAnimationFrame((function(){y({width:o,height:a,top:r,left:i})}))}))}));return m.current&&e.observe(m.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),y.cancel()}}),[y,h]),o.createElement("div",Ch({style:d,ref:m,className:t},p),n(Ch({},v,{ref:m.current,resize:y})))}Rh.propTypes={className:s().string,debounceTime:s().number,enableDebounceLeadingCall:s().bool,ignoreDimensions:s().oneOfType([s().any,s().arrayOf(s().any)]),children:s().func.isRequired};var Th=n(78718),kh=n.n(Th);const Dh={depth:s().number.isRequired,editMode:s().bool,gridComponent:Y.cP,handleComponentDrop:s().func.isRequired,isComponentVisible:s().bool.isRequired,resizeComponent:s().func.isRequired,setDirectPathToChild:s().func.isRequired,width:s().number.isRequired,dashboardId:s().number},$h=e=>e.dropIndicatorProps&&(0,b.tZ)("div",{className:"drop-indicator drop-indicator--bottom"}),_h=e=>e.dropIndicatorProps&&(0,b.tZ)("div",{className:"drop-indicator drop-indicator--top"}),Ih=v.iK.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Mh=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: flex;
    flex-direction: column;

    /* gutters between rows */
    & > div:not(:last-child):not(.empty-droptarget) {
      margin-bottom: ${4*t.gridUnit}px;
    }

    & > .empty-droptarget {
      width: 100%;
      height: 100%;
    }

    & > .empty-droptarget:first-child {
      height: ${12*t.gridUnit}px;
      margin-top: ${-6*t.gridUnit}px;
      margin-bottom: ${-6*t.gridUnit}px;
    }

    & > .empty-droptarget:only-child {
      height: 80vh;
    }
  `}}
`,Fh=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    // /* Editing guides */
    &.grid-column-guide {
      position: absolute;
      top: 0;
      min-height: 100%;
      background-color: ${(0,y.Zf)(t.colors.primary.base,parseFloat(t.opacity.light)/100)};
      pointer-events: none;
      box-shadow: inset 0 0 0 1px
        ${(0,y.Zf)(t.colors.primary.base,parseFloat(t.opacity.mediumHeavy)/100)};
    }
  `}};
`;class Eh extends o.PureComponent{constructor(e){super(e),this.state={isResizing:!1},this.handleResizeStart=this.handleResizeStart.bind(this),this.handleResizeStop=this.handleResizeStop.bind(this),this.handleTopDropTargetDrop=this.handleTopDropTargetDrop.bind(this),this.getRowGuidePosition=this.getRowGuidePosition.bind(this),this.setGridRef=this.setGridRef.bind(this),this.handleChangeTab=this.handleChangeTab.bind(this)}getRowGuidePosition(e){return e&&this.grid?e.getBoundingClientRect().bottom-this.grid.getBoundingClientRect().top-2:null}setGridRef(e){this.grid=e}handleResizeStart(){this.setState((()=>({isResizing:!0})))}handleResizeStop(e){let{id:t,widthMultiple:n,heightMultiple:i}=e;this.props.resizeComponent({id:t,width:n,height:i}),this.setState((()=>({isResizing:!1})))}handleTopDropTargetDrop(e){e&&this.props.handleComponentDrop({...e,destination:{...e.destination,index:0}})}handleChangeTab(e){let{pathToTabIndex:t}=e;this.props.setDirectPathToChild(t)}render(){var e,t,n;const{gridComponent:i,handleComponentDrop:r,depth:a,width:s,isComponentVisible:d,editMode:c,canEdit:u,setEditMode:h,dashboardId:m}=this.props,g=(s+W.es)/W.cz-W.es,{isResizing:f}=this.state,v=0===(null==i||null==(e=i.children)?void 0:e.length),y=v&&i.type===p.gn,x=c&&(0,b.tZ)(La.XJ,{title:(0,l.t)("Drag and drop components and charts to the dashboard"),description:(0,l.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,b.tZ)(o.Fragment,null,(0,b.tZ)("i",{className:"fa fa-plus"}),(0,l.t)("Create a new chart")),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${m}`,"_blank","noopener noreferrer")},image:"chart.svg"}),S=c?(0,b.tZ)(La.XJ,{title:(0,l.t)("Drag and drop components to this tab"),description:(0,l.t)("You can create a new chart or use existing ones from the panel on the right"),buttonText:(0,b.tZ)(o.Fragment,null,(0,b.tZ)("i",{className:"fa fa-plus"}),(0,l.t)("Create a new chart")),buttonAction:()=>{window.open(`/chart/add?dashboard_id=${m}`,"_blank","noopener noreferrer")},image:"chart.svg"}):(0,b.tZ)(La.XJ,{title:(0,l.t)("There are no components added to this tab"),description:u&&(0,l.t)("You can add the components in the edit mode."),buttonText:u&&(0,l.t)("Edit the dashboard"),buttonAction:u&&(()=>{h(!0)}),image:"chart.svg"});return s<100?null:(0,b.tZ)(o.Fragment,null,v&&(0,b.tZ)(Ih,null,y?S:x),(0,b.tZ)("div",{className:"dashboard-grid",ref:this.setGridRef},(0,b.tZ)(Mh,{className:"grid-content"},c&&(0,b.tZ)(Pe,{component:i,depth:a,parentComponent:null,index:0,orientation:"column",onDrop:this.handleTopDropTargetDrop,className:"empty-droptarget",editMode:!0},$h),null==i||null==(t=i.children)?void 0:t.map(((e,t)=>(0,b.tZ)(cs,{key:e,id:e,parentId:i.id,depth:a+1,index:t,availableColumnCount:W.cz,columnWidth:g,isComponentVisible:d,onResizeStart:this.handleResizeStart,onResize:this.handleResize,onResizeStop:this.handleResizeStop,onChangeTab:this.handleChangeTab}))),c&&(null==i||null==(n=i.children)?void 0:n.length)>0&&(0,b.tZ)(Pe,{component:i,depth:a,parentComponent:null,index:i.children.length,orientation:"column",onDrop:r,className:"empty-droptarget",editMode:!0},_h),f&&Array(W.cz).fill(null).map(((e,t)=>(0,b.tZ)(Fh,{key:`grid-column-${t}`,className:"grid-column-guide",style:{left:t*W.es+t*g,width:g}}))))))}}Eh.propTypes=Dh,Eh.defaultProps={};const Oh=Eh,zh=(0,r.$j)((function(e){let{dashboardState:t,dashboardInfo:n}=e;return{editMode:t.editMode,canEdit:n.dash_edit_perm,dashboardId:n.id}}),(function(e){return(0,i.DE)({handleComponentDrop:Hn._p,resizeComponent:Hn.iO,setDirectPathToChild:Bn.E2,setEditMode:Bn.Mb},e)}))(Oh);var Uh=n(51127),Ph=n.n(Uh);const Nh=e=>{let{topLevelTabs:t}=e;const n=(()=>{const e=(0,r.v9)((e=>{var t;return null==(t=e.nativeFilters)?void 0:t.filters}));return(0,o.useMemo)((()=>e?Object.values(e).map((e=>kh()(e,["id","scope","type"]))):[]),[JSON.stringify(e)])})(),i=(0,r.I0)(),a=(0,r.v9)((e=>e.dashboardLayout.present)),s=(0,r.v9)((e=>e.dashboardInfo)),l=(0,r.v9)((e=>e.dashboardState.directPathToChild)),c=(0,r.v9)((e=>Object.values(e.charts).map((e=>e.id)))),u=(0,o.useMemo)((()=>{const e=Ga({currentComponent:bh(a),directPathToChild:l});return e>-1?e:((e,t)=>Math.max(0,Ga({currentComponent:bh(e),directPathToChild:t})))(a,l)}),[a,l]);(0,o.useEffect)((()=>{if(!(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)||0===n.length)return;const e=n.map((e=>{if(e.id.startsWith(xs.Ky))return{filterId:e.id,tabsInScope:[],chartsInScope:[]};const t=(0,$i.Q)(e.scope,c,a),n=(0,sl.Rz)(a,t);return{filterId:e.id,tabsInScope:Array.from(n),chartsInScope:t}}));i((0,rl.xk)(e))}),[n,a,i]);const h=(0,o.useCallback)((()=>{const e=s.metadata;if(null!=e&&e.color_scheme){const n={...e},r=null==n?void 0:n.color_scheme,o=(null==n?void 0:n.color_scheme_domain)||[],a=(0,xh.Z)(),l=a.get(r,!0)||void 0,d=(null==l?void 0:l.colors)||[],c=a.defaultKey,u=!!l,h=()=>{Ct.Z.put({endpoint:`/api/v1/dashboard/${s.id}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({json_metadata:Ph()(n)})}).catch((e=>console.log(e)))},p=e=>{i((0,Bn.uW)(e))},m=()=>{i((0,Kn.a8)({metadata:n})),h()};if(u)u&&!o.length&&(n.color_scheme_domain=d,m()),u&&o.length&&d.toString()!==o.toString()&&(n.color_scheme_domain=d,n.shared_label_colors={},p(r),m());else{var t;const e=(null==c?void 0:c.toString())||"supersetColors";n.color_scheme=e,n.color_scheme_domain=(null==(t=a.get(c))?void 0:t.colors)||[],n.shared_label_colors={},p(e),m()}}}),[c]);(0,fd.d)(h);const p=t?t.children:[W.PV],m=Math.min(u,p.length-1),g=0===m?W.PV:m.toString();return(0,b.tZ)("div",{className:"grid-container"},(0,b.tZ)(Rh,null,(e=>{let{width:t}=e;return(0,b.tZ)(Z.ZP,{id:W.PV,activeKey:g,renderTabBar:()=>(0,b.tZ)(o.Fragment,null),fullWidth:!1,animated:!1,allowOverflow:!0},p.map(((e,n)=>(0,b.tZ)(Z.ZP.TabPane,{key:0===n?W.PV:n.toString()},(0,b.tZ)(zh,{gridComponent:a[e],depth:W.Mu+1,width:t,isComponentVisible:n===u})))))})))},Ah=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    /* Special cases */

    /* A row within a column has inset hover menu */
    .dragdroppable-column .dragdroppable-row .hover-menu--left {
      left: ${-3*t.gridUnit}px;
      background: ${t.colors.grayscale.light5};
      border: 1px solid ${t.colors.grayscale.light2};
    }

    .dashboard-component-tabs {
      position: relative;
    }

    /* A column within a column or tabs has inset hover menu */
    .dragdroppable-column .dragdroppable-column .hover-menu--top,
    .dashboard-component-tabs .dragdroppable-column .hover-menu--top {
      top: ${-3*t.gridUnit}px;
      background: ${t.colors.grayscale.light5};
      border: 1px solid ${t.colors.grayscale.light2};
    }

    /* move Tabs hover menu to top near actual Tabs */
    .dashboard-component-tabs > .hover-menu-container > .hover-menu--left {
      top: 0;
      transform: unset;
      background: transparent;
    }

    /* push Chart actions to upper right */
    .dragdroppable-column .dashboard-component-chart-holder .hover-menu--top,
    .dragdroppable .dashboard-component-header .hover-menu--top {
      right: ${2*t.gridUnit}px;
      top: ${2*t.gridUnit}px;
      background: transparent;
      border: none;
      transform: unset;
      left: unset;
    }
    div:hover > .hover-menu-container .hover-menu,
    .hover-menu-container .hover-menu:hover {
      opacity: 1;
    }

    p {
      margin: 0 0 ${2*t.gridUnit}px 0;
    }

    i.danger {
      color: ${t.colors.error.base};
    }

    i.warning {
      color: ${t.colors.alert.base};
    }
  `}}
`,qh=v.iK.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  z-index: 11;
  width: ${e=>{let{width:t}=e;return t}}px;
  ${e=>{let{hidden:t}=e;return t&&"display: none;"}}
`,Lh=v.iK.div`
  position: sticky;
  top: -1px;
  width: ${e=>{let{width:t}=e;return t}}px;
  flex: 0 0 ${e=>{let{width:t}=e;return t}}px;
`,jh=v.iK.div`
  grid-column: 2;
  grid-row: 1;
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100vw;
`,Vh=v.iK.div`
  grid-column: 2;
  grid-row: 2;
  // @z-index-above-dashboard-header (100) + 1 = 101
  ${e=>{let{fullSizeChartId:t}=e;return t&&"z-index: 101;"}}
`,Kh=v.iK.div`
  ${e=>{let{theme:t}=e;return b.iv`
    &.dashboard {
      position: relative;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100%;

      /* drop shadow for top-level tabs only */
      & .dashboard-component-tabs {
        box-shadow: 0 ${t.gridUnit}px ${t.gridUnit}px 0
          ${(0,y.Zf)(t.colors.grayscale.dark2,parseFloat(t.opacity.light)/100)};
        padding-left: ${2*t.gridUnit}px; /* note this is added to tab-level padding, to match header */
      }

      .dropdown-toggle.btn.btn-primary .caret {
        color: ${t.colors.grayscale.light5};
      }

      .background--transparent {
        background-color: transparent;
      }

      .background--white {
        background-color: ${t.colors.grayscale.light5};
      }
    }
    &.dashboard--editing {
      .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed transparent;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
      }

      .resizable-container {
        & .dashboard-component-chart-holder {
          .dashboard-chart {
            .chart-container {
              cursor: move;
              opacity: 0.2;
            }

            .slice_container {
              /* disable chart interactions in edit mode */
              pointer-events: none;
            }
          }

          &:hover .dashboard-chart .chart-container {
            opacity: 0.7;
          }
        }

        &:hover,
        &.resizable-container--resizing:hover {
          & > .dashboard-component-chart-holder:after {
            border: 1px dashed ${t.colors.primary.base};
          }
        }
      }

      .resizable-container--resizing:hover > .grid-row:after,
      .hover-menu:hover + .grid-row:after,
      .dashboard-component-tabs > .hover-menu:hover + div:after {
        border: 1px dashed ${t.colors.primary.base};
        z-index: 2;
      }

      .grid-row:after,
      .dashboard-component-tabs > .hover-menu + div:after {
        border: 1px dashed ${t.colors.grayscale.light2};
      }

      /* provide hit area in case row contents is edge to edge */
      .dashboard-component-tabs-content {
        .dragdroppable-row {
          padding-top: ${4*t.gridUnit}px;
        }

        & > div:not(:last-child):not(.empty-droptarget) {
          margin-bottom: ${4*t.gridUnit}px;
        }
      }

      .dashboard-component-chart-holder {
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          border: 1px solid transparent;
        }

        &:hover:after {
          border: 1px dashed ${t.colors.primary.base};
          z-index: 2;
        }
      }

      .contract-trigger:before {
        display: none;
      }
    }

    & .dashboard-component-tabs-content {
      & > div:not(:last-child):not(.empty-droptarget) {
        margin-bottom: ${4*t.gridUnit}px;
      }

      & > .empty-droptarget {
        position: absolute;
        width: 100%;
      }

      & > .empty-droptarget:first-child {
        height: ${4*t.gridUnit}px;
        top: -2px;
        z-index: 10;
      }

      & > .empty-droptarget:last-child {
        height: ${3*t.gridUnit}px;
        bottom: 0;
      }
    }

    .empty-droptarget:first-child .drop-indicator--bottom {
      top: ${6*t.gridUnit}px;
    }
  `}}
`,Bh=v.iK.div`
  ${e=>{let{theme:t,editMode:n,marginLeft:i}=e;return b.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: auto;
    flex: 1;

    .grid-container .dashboard-component-tabs {
      box-shadow: none;
      padding-left: 0;
    }

    .grid-container {
      /* without this, the grid will not get smaller upon toggling the builder panel on */
      width: 0;
      flex: 1;
      position: relative;
      margin-top: ${6*t.gridUnit}px;
      margin-right: ${8*t.gridUnit}px;
      margin-bottom: ${6*t.gridUnit}px;
      margin-left: ${i}px;

      ${n&&`\n      max-width: calc(100% - ${Mi.XX+16*t.gridUnit}px);\n    `}

      /* this is the ParentSize wrapper */
    & > div:first-child {
        height: inherit !important;
      }
    }

    .dashboard-builder-sidepane {
      width: ${Mi.XX}px;
      z-index: 1;
    }

    .dashboard-component-chart-holder {
      width: 100%;
      height: 100%;
      background-color: ${t.colors.grayscale.light5};
      position: relative;
      padding: ${4*t.gridUnit}px;
      overflow-y: visible;

      // transitionable traits to show filter relevance
      transition: opacity ${t.transitionTiming}s ease-in-out,
        border-color ${t.transitionTiming}s ease-in-out,
        box-shadow ${t.transitionTiming}s ease-in-out;

      &.fade-in {
        border-radius: ${t.borderRadius}px;
        box-shadow: inset 0 0 0 2px ${t.colors.primary.base},
          0 0 0 3px
            ${(0,y.Zf)(t.colors.primary.base,parseFloat(t.opacity.light)/100)};
      }

      &.fade-out {
        border-radius: ${t.borderRadius}px;
        box-shadow: none;
      }

      & .missing-chart-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        justify-content: center;

        .missing-chart-body {
          font-size: ${t.typography.sizes.s}px;
          position: relative;
          display: flex;
        }
      }
    }
  `}}
`,Hh=()=>{var e,t;const i=(0,r.I0)(),a=(0,fi.fG)(),s=(0,v.Fg)(),c=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return`${t.id}`})),h=(0,r.v9)((e=>e.dashboardLayout.present)),p=(0,r.v9)((e=>e.dashboardState.editMode)),m=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),g=(0,r.v9)((e=>{let{dashboardState:t}=e;return t.dashboardIsSaving})),y=(0,r.v9)((e=>e.dashboardState.fullSizeChartId)),C=(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS),Z=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return(0,d.cr)(d.TT.HORIZONTAL_FILTER_BAR)?t.filterBarOrientation:Di.Bp.VERTICAL})),w=(0,o.useCallback)((e=>{let{pathToTabIndex:t}=e;i((0,Bn.E2)(t))}),[i]),R=(0,o.useCallback)((()=>{i((0,Hn.g3)());const e=Qa(bh(h),0);i((0,Bn.E2)(e))}),[h,i]),T=(0,o.useCallback)((e=>i((0,Hn._p)(e))),[i]),k=o.useRef(null),D=h[W._4],$=null==D?void 0:D.children[0],_=$!==W.PV?h[$]:void 0,I=(0,kt.eY)(wt.KD.standalone),M=I===W._B.REPORT,F=a.hideTitle||I===W._B.HIDE_NAV_AND_TITLE||M,[E,O]=(0,o.useState)(0);(0,o.useEffect)((()=>{var e,t;let i;return O((null==(e=k.current)||null==(t=e.getBoundingClientRect())?void 0:t.height)||0),n.g.hasOwnProperty("ResizeObserver")&&k.current&&(i=new ResizeObserver((e=>{O((t=>{var n,i;return(null==e||null==(n=e[0])||null==(i=n.contentRect)?void 0:i.height)||t}))})),i.observe(k.current)),()=>{var e;null==(e=i)||e.disconnect()}}),[]);const{showDashboard:z,dashboardFiltersOpen:U,toggleDashboardFiltersOpen:P,nativeFiltersEnabled:N}=(()=>{const[e,t]=(0,o.useState)(!1),n=(0,r.v9)((e=>{let{dashboardInfo:t}=e;return t.dash_edit_perm})),i=Cs(),a=Object.values(i),s=(0,kt.eY)(wt.KD.expandFilters),[l,c]=(0,o.useState)(null!=s?s:!!a.length),u=(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS)&&(n||!n&&0!==a.length),h=a.filter((e=>e.requiredFirst)),p=Zs(),m=e||!u||!(u&&h.length&&h.find((e=>{var t,n;let{id:i}=e;return void 0===(null==(t=p[i])||null==(n=t.filterState)?void 0:n.value)}))),g=(0,o.useCallback)((e=>{c(null!=e?e:!l)}),[l]);return(0,o.useEffect)((()=>{!1===s||0===a.length&&u?g(!1):g(!0)}),[a.length]),(0,o.useEffect)((()=>{m&&t(!0)}),[m]),{showDashboard:m,dashboardFiltersOpen:l,toggleDashboardFiltersOpen:g,nativeFiltersEnabled:u}})(),[A,q]=(0,x.W)({threshold:[1]}),L=(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS_SET)&&(0,d.cr)(d.TT.DASHBOARD_NATIVE_FILTERS),j=(C||N)&&!p,V=`calc(100vh - ${Mi.UN+(q||I?0:Mi.Ky)+(L?Mi.a7:0)}px)`,K=U?0:E+20,H=(0,o.useMemo)((()=>({marginLeft:U||p||!N||Z===Di.Bp.HORIZONTAL?0:-32})),[U,p,Z,N]),Y=(0,o.useRef)(_);(0,o.useEffect)((()=>{var e,t,n;const r=null==(e=Y.current)||null==(t=e.children)?void 0:t.length,o=null==_||null==(n=_.children)?void 0:n.length;if(void 0!==r&&void 0!==o&&o>r){const e=Qa(bh(h),o-1);i((0,Bn.E2)(e))}Y.current=_}),[_]);const J=(0,o.useCallback)((e=>{let{dropIndicatorProps:t}=e;return(0,b.tZ)("div",null,!F&&(0,b.tZ)(Jn,null),j&&Z===Di.Bp.HORIZONTAL&&(0,b.tZ)(fh,{orientation:Di.Bp.HORIZONTAL,hidden:M}),t&&(0,b.tZ)("div",t),!M&&_&&!a.hideNav&&(0,b.tZ)(la,{shouldFocus:yh,menuItems:[(0,b.tZ)(Qn,{icon:(0,b.tZ)(B.Z.FallOutlined,{iconSize:"xl"}),label:(0,l.t)("Collapse tab content"),onClick:R})],editMode:p},(0,b.tZ)(cs,{id:null==_?void 0:_.id,parentId:W._4,depth:W.Mu+1,index:0,renderTabContent:!1,renderHoverMenu:!1,onChangeTab:w})))}),[N,Z,p,w,R,F,M,_,a.hideNav]),X=U||p||!N||Z===Di.Bp.HORIZONTAL?8*s.gridUnit:0;return(0,b.tZ)(Ah,null,j&&Z===Di.Bp.VERTICAL&&(0,b.tZ)(o.Fragment,null,(0,b.tZ)(vh.Z,{id:`dashboard:${c}`,enable:U,minWidth:Mi.I6,maxWidth:Mi.aF,initialWidth:Mi.I6},(e=>{const t=U?e:Mi.gz;return(0,b.tZ)(qh,{width:t,hidden:M},(0,b.tZ)(Lh,{ref:A,width:t},(0,b.tZ)(S.Z,null,(0,b.tZ)(fh,{orientation:Di.Bp.VERTICAL,verticalConfig:{filtersOpen:U,toggleFiltersBar:P,width:t,height:V,offset:K}}))))}))),(0,b.tZ)(jh,{ref:k},(0,b.tZ)(Pe,{component:D,parentComponent:null,depth:W.Mu,index:0,orientation:"column",onDrop:T,editMode:p,disableDragDrop:!!_,style:H},J)),(0,b.tZ)(Vh,{fullSizeChartId:y},(0,b.tZ)(b.xB,{styles:b.iv`
            // @z-index-above-dashboard-header (100) + 1 = 101
            ${y&&"div > .filterStatusPopover.ant-popover{z-index: 101}"}
          `}),!p&&!_&&0===(null==(e=h[W.PV])||null==(t=e.children)?void 0:t.length)&&(0,b.tZ)(La.XJ,{title:(0,l.t)("There are no charts added to this dashboard"),description:m&&(0,l.t)("Go to the edit mode to configure the dashboard and add charts"),buttonText:m&&(0,l.t)("Edit the dashboard"),buttonAction:()=>i((0,Bn.Mb)(!0)),image:"dashboard.svg"}),(0,b.tZ)(Kh,{className:f()("dashboard",p&&"dashboard--editing")},(0,b.tZ)(Bh,{className:"dashboard-content",editMode:p,marginLeft:X},z?(0,b.tZ)(Nh,{topLevelTabs:_}):(0,b.tZ)(u.Z,null),p&&(0,b.tZ)(ut,{topOffset:E})))),g&&(0,b.tZ)(u.Z,{css:b.iv`
            && {
              position: fixed;
            }
          `}))},Wh=[p.dW,p.xh,p.t];function Yh(e){return!Object.values(e).some((e=>{let{type:t}=e;return t&&Wh.includes(t)}))}const Jh={actions:s().shape({addSliceToDashboard:s().func.isRequired,removeSliceFromDashboard:s().func.isRequired,triggerQuery:s().func.isRequired,logEvent:s().func.isRequired,clearDataMaskState:s().func.isRequired}).isRequired,dashboardInfo:Y.$X.isRequired,dashboardState:Y.DZ.isRequired,charts:s().objectOf(Y.$6).isRequired,slices:s().objectOf(Y.Rw).isRequired,activeFilters:s().object.isRequired,chartConfiguration:s().object,datasources:s().object.isRequired,ownDataCharts:s().object.isRequired,layout:s().object.isRequired,impressionId:s().string.isRequired,initMessages:s().array,timeout:s().number,userId:s().string};class Xh extends o.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",Xh.unload):window.removeEventListener("beforeunload",Xh.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,n;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(n=e.ownDataCharts)?n:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,h.Z)(),{dashboardState:t,layout:n}=this.props,i={is_soft_navigation:vt.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:vt.Yd.getTimestamp(),is_empty:Yh(n),is_published:t.isPublished,bootstrap_data_length:e.length},r=(0,ri.Z)();r&&(i.target_id=r),this.props.actions.logEvent(vt.Wl,i),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:vt.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=m(this.props.layout),n=m(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<n.length?n.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(n=e.layout,i=t,Object.values(n).find((e=>e&&e.type===p.dW&&e.meta&&e.meta.chartId===i))));var n,i})):t.length>n.length&&t.filter((e=>-1===n.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:n,appliedOwnDataCharts:i}=this,{activeFilters:r,ownDataCharts:o,chartConfiguration:a}=this.props;(0,d.cr)(d.TT.DASHBOARD_CROSS_FILTERS)&&!a||(t||(0,mi.JB)(i,o,{ignoreUndefined:!0})&&(0,mi.JB)(n,r,{ignoreUndefined:!0})||this.applyFilters(),e?Xh.onBeforeUnload(!0):Xh.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:vt.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(vt.Ev,{...this.visibilityEventData,duration:vt.Yd.getTimestamp()-e})}}getAllCharts(){return Object.values(this.props.charts)}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:n}=this.props,i=Object.keys(t),r=Object.keys(e),o=new Set(i.concat(r)),a=((e,t)=>{const n=Object.keys(e),i=Object.keys(t),r=(o=n,a=i,[...o.filter((e=>!a.includes(e))),...a.filter((e=>!o.includes(e)))]).filter((n=>e[n]||t[n]));var o,a;return new Set([...n,...i]).forEach((n=>{(0,mi.JB)(e[n],t[n])||r.push(n)})),[...new Set(r)]})(n,this.appliedOwnDataCharts);[...o].forEach((n=>{if(!i.includes(n)&&r.includes(n))a.push(...e[n].scope);else if(r.includes(n)){if((0,mi.JB)(e[n].values,t[n].values,{ignoreUndefined:!0})||a.push(...t[n].scope),!(0,mi.JB)(e[n].scope,t[n].scope)){const i=(t[n].scope||[]).concat(e[n].scope||[]);a.push(...i)}}else a.push(...t[n].scope)})),this.refreshCharts([...new Set(a)]),this.appliedFilters=t,this.appliedOwnDataCharts=n}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,b.tZ)(u.Z,null):(0,b.tZ)(o.Fragment,null,(0,b.tZ)(Hh,null))}}Xh.contextType=c.Zn,Xh.propTypes=Jh,Xh.defaultProps={initMessages:[],timeout:60,userId:""};const Gh=Xh;var Qh=n(50810),ep=n(87915);const tp=(0,r.$j)((function(e){var t,n,i,r,o;const{datasources:a,sliceEntities:s,charts:l,dataMask:d,dashboardInfo:c,dashboardState:u,dashboardLayout:h,impressionId:p,nativeFilters:m}=e;return{initMessages:null==(t=c.common)?void 0:t.flash_messages,timeout:null==(n=c.common)||null==(i=n.conf)?void 0:i.SUPERSET_WEBSERVER_TIMEOUT,userId:c.userId,dashboardInfo:c,dashboardState:u,charts:l,datasources:a,activeFilters:{...(0,Qt.De)(),...(0,ep.g)({chartConfiguration:null==(r=c.metadata)?void 0:r.chart_configuration,nativeFilters:m.filters,dataMask:d,allSliceIds:u.sliceIds})},chartConfiguration:null==(o=c.metadata)?void 0:o.chart_configuration,ownDataCharts:(0,ep.U)(d,"ownState"),slices:s.slices,layout:h.present,impressionId:p}}),(function(e){return{actions:(0,i.DE)({setDatasources:Qh.Fy,clearDataMaskState:ht.sh,addSliceToDashboard:Bn.Pi,removeSliceFromDashboard:Bn.rL,triggerQuery:si.triggerQuery,logEvent:Yn.logEvent},e)}}))(Gh)},18451:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});var i=n(28216);function r(){return(0,i.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},90057:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,x:()=>o});var i=n(12902),r=n(67294);function o(e){var t=(0,r.useState)((function(){return(0,i.vV)("function"==typeof e?e():e,!0)})),n=t[1];return[t[0],(0,r.useCallback)((function(e){n("function"==typeof e?(0,i.ZP)(e):(0,i.vV)(e))}),[])]}function a(e,t,n){var o=(0,r.useMemo)((function(){return(0,i.ZP)(e)}),[e]);return(0,r.useReducer)(o,t,n)}}}]);
//# sourceMappingURL=1ef78863a7e6bdf7cf6b.chunk.js.map