!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="20b6521b-8ed9-4667-9072-33e4a3b757af",e._sentryDebugIdIdentifier="sentry-dbid-20b6521b-8ed9-4667-9072-33e4a3b757af")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{1129:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Breakpoints=t.BreakpointConstraint=void 0;var n,i,a=r(6046);function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,u=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(u)throw n}}return a}}(e,t)||s(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.BreakpointConstraint=i,(n=i||(t.BreakpointConstraint=i={})).at="at",n.lessThan="lessThan",n.greaterThan="greaterThan",n.greaterThanOrEqual="greaterThanOrEqual",n.between="between";var d=function(){function e(t){var r,n=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),p(this,"_sortedBreakpoints",void 0),p(this,"_breakpoints",void 0),p(this,"_mediaQueries",void 0),p(this,"findBreakpointsForWidths",function(e,t){var r=n.findBreakpointAtWidth(e);if(r){var i=n.findBreakpointAtWidth(t);return i&&r!==i?n._sortedBreakpoints.slice(n._sortedBreakpoints.indexOf(r),n._sortedBreakpoints.indexOf(i)+1):[r]}}),p(this,"findBreakpointAtWidth",function(e){return n._sortedBreakpoints.find(function(t,r){var i=n._sortedBreakpoints[r+1];return i?e>=n._breakpoints[t]&&e<n._breakpoints[i]:e>=n._breakpoints[t]})}),p(this,"valuesWithBreakpointProps",function(e){var t,r=e.length,i=[];return n._sortedBreakpoints.forEach(function(n,a){var o=e[a];a<r&&(!t||t[0]!==o)?(t=[o,[n]],i.push(t)):t[1].push(n)}),i.map(function(e,t){var r=u(e,2),n=r[0],a=r[1],o={};return t===i.length-1?o.greaterThanOrEqual=a[0]:1===a.length?o.at=a[0]:o.between=[a[0],i[t+1][1][0]],[n,o]})}),this._breakpoints=t,this._sortedBreakpoints=Object.keys(t).map(function(e){return[e,t[e]]}).sort(function(e,t){return e[1]<t[1]?-1:1}).map(function(e){return e[0]});var a=this._sortedBreakpoints.slice(0,-1).reduce(function(e,t,r){return o(e).concat(o(n._sortedBreakpoints.slice(r+1).map(function(e){return[t,e]})))},[]);this._mediaQueries=(p(r={},i.at,this._createBreakpointQueries(i.at,this._sortedBreakpoints)),p(r,i.lessThan,this._createBreakpointQueries(i.lessThan,this._sortedBreakpoints.slice(1))),p(r,i.greaterThan,this._createBreakpointQueries(i.greaterThan,this._sortedBreakpoints.slice(0,-1))),p(r,i.greaterThanOrEqual,this._createBreakpointQueries(i.greaterThanOrEqual,this._sortedBreakpoints)),p(r,i.between,this._createBreakpointQueries(i.between,a)),r)}return f(e,null,[{key:"validKeys",value:function(){return[i.at,i.lessThan,i.greaterThan,i.greaterThanOrEqual,i.between]}}]),f(e,[{key:"toVisibleAtBreakpointSet",value:function(e){if((e=this._normalizeProps(e)).lessThan){var t=this.sortedBreakpoints.findIndex(function(t){return t===e.lessThan});return this.sortedBreakpoints.slice(0,t)}if(e.greaterThan){var r=this.sortedBreakpoints.findIndex(function(t){return t===e.greaterThan});return this.sortedBreakpoints.slice(r+1)}if(e.greaterThanOrEqual){var n=this.sortedBreakpoints.findIndex(function(t){return t===e.greaterThanOrEqual});return this.sortedBreakpoints.slice(n)}if(e.between){var i=e.between,a=this.sortedBreakpoints.findIndex(function(e){return e===i[0]}),o=this.sortedBreakpoints.findIndex(function(e){return e===i[1]});return this.sortedBreakpoints.slice(a,o)}return[]}},{key:"toRuleSets",value:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.validKeys();return Object.entries(r.reduce(function(e,r){return e[r]=t._mediaQueries[r],e},{})).reduce(function(e,t){var r=u(t,2),n=r[0];return r[1].forEach(function(t,r){e.push((0,a.createRuleSet)((0,a.createClassName)(n,r),"not all and ".concat(t)))}),e},[])}},{key:"shouldRenderMediaQuery",value:function(e,t){var r=this;if((e=this._normalizeProps(e)).lessThan){var n=this._breakpoints[e.lessThan];return Math.min.apply(Math,o(t.map(function(e){return r._breakpoints[e]})))<n}if(e.greaterThan){var i=this._breakpoints[this._findNextBreakpoint(e.greaterThan)];return Math.max.apply(Math,o(t.map(function(e){return r._breakpoints[e]})))>=i}if(e.greaterThanOrEqual){var a=this._breakpoints[e.greaterThanOrEqual];return Math.max.apply(Math,o(t.map(function(e){return r._breakpoints[e]})))>=a}if(e.between){var u=this._breakpoints[e.between[0]],s=this._breakpoints[e.between[1]],c=t.map(function(e){return r._breakpoints[e]});return!(Math.max.apply(Math,o(c))<u||Math.min.apply(Math,o(c))>=s)}return!1}},{key:"_normalizeProps",value:function(e){if(e.at){var t=this._sortedBreakpoints.indexOf(e.at),r=this._sortedBreakpoints[t+1];return r?{between:[e.at,r]}:{greaterThanOrEqual:e.at}}return e}},{key:"_createBreakpointQuery",value:function(e){if((e=this._normalizeProps(e)).lessThan){var t=this._breakpoints[e.lessThan];return"(max-width:".concat(t-.02,"px)")}if(e.greaterThan){var r=this._breakpoints[this._findNextBreakpoint(e.greaterThan)];return"(min-width:".concat(r,"px)")}if(e.greaterThanOrEqual){var n=this._breakpoints[e.greaterThanOrEqual];return"(min-width:".concat(n,"px)")}if(e.between){var i=this._breakpoints[e.between[0]],a=this._breakpoints[e.between[1]];return"(min-width:".concat(i,"px) and (max-width:").concat(a-.02,"px)")}throw Error("Unexpected breakpoint props: ".concat(JSON.stringify(e)))}},{key:"_createBreakpointQueries",value:function(e,t){var r=this;return t.reduce(function(t,n){return t.set(Array.isArray(n)?n.join("-"):n,r._createBreakpointQuery(p({},e,n))),t},new Map)}},{key:"_findNextBreakpoint",value:function(e){var t=this._sortedBreakpoints[this._sortedBreakpoints.indexOf(e)+1];if(!t)throw Error("There is no breakpoint larger than ".concat(e));return t}},{key:"sortedBreakpoints",get:function(){return this._sortedBreakpoints}},{key:"dynamicResponsiveMediaQueries",get:function(){return Array.from(this._mediaQueries[i.at].entries()).reduce(function(e,t){var r=u(t,2);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){p(e,t,r[t])})}return e}({},e,p({},r[0],r[1]))},{})}},{key:"largestBreakpoint",get:function(){return this._sortedBreakpoints[this._sortedBreakpoints.length-1]}}]),e}();t.Breakpoints=d},1211:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createResponsiveComponents=function(){var e=a.default.createContext({});return e.displayName="Media.DynamicContext",{Consumer:e.Consumer,Provider:function(t){var r,i;function d(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,d),t=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return l(e)}(this,s(d).call(this,e)),f(l(l(t)),"isSupportedEnvironment",function(){return"undefined"!=typeof window&&void 0!==window.matchMedia}),f(l(l(t)),"setupMatchers",function(e){return Object.keys(e).reduce(function(t,r){return o({},t,f({},r,window.matchMedia(e[r])))},{})}),f(l(l(t)),"checkMatchers",function(e){return Object.keys(e).reduce(function(t,r){return o({},t,f({},r,e[r].matches))},{})}),f(l(l(t)),"mediaQueryStatusChangedCallback",function(){var e=t.checkMatchers(t.state.mediaQueryMatchers);t.setState({mediaQueryMatches:e})});var t,r,i=void 0;return t.isSupportedEnvironment()?(i=t.setupMatchers(e.mediaQueries),r=t.checkMatchers(i)):r=Object.keys(e.mediaQueries).reduce(function(t,r){return o({},t,f({},r,!!e.initialMatchingMediaQueries&&e.initialMatchingMediaQueries.includes(r)))},{}),t.state={mediaQueryMatchers:i,mediaQueryMatches:r},t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,t),r=[{key:"componentDidMount",value:function(){if(this.state.mediaQueryMatchers){var e=this.mediaQueryStatusChangedCallback;Object.values(this.state.mediaQueryMatchers).forEach(function(t){t.addListener(e)})}}},{key:"componentWillUnmount",value:function(){if(this.state.mediaQueryMatchers){var e=this.mediaQueryStatusChangedCallback;Object.values(this.state.mediaQueryMatchers).forEach(function(t){return t.removeListener(e)})}}},{key:"shouldComponentUpdate",value:function(e,t){return!!this.state.mediaQueryMatchers&&(e.children!==this.props.children||!p(this.state.mediaQueryMatches,t.mediaQueryMatches))}},{key:"render",value:function(){return a.default.createElement(e.Provider,{value:this.state.mediaQueryMatches},this.props.children)}}],u(d.prototype,r),i&&u(d,i),d}(a.default.Component)}};var i,a=(i=r(7294))&&i.__esModule?i:{default:i};function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){f(e,t,r[t])})}return e}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e,t){for(var r in e)if(e[r]!==t[r])return!1;return!0}},971:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Interactions=t.InteractionKey=void 0;var n,i=r(6046);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,u=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(u)throw n}}return a}}(e,t)||o(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.InteractionKey=n,(n||(t.InteractionKey=n={})).interaction="interaction";var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),l(this,"_interactions",void 0),this._interactions=t}return c(e,null,[{key:"validKeys",value:function(){return[n.interaction]}}]),c(e,[{key:"toRuleSets",value:function(){return Object.entries(this._interactions).reduce(function(e,t){var r=a(t,2),s=r[0],c=r[1];return((function(e){if(Array.isArray(e))return u(e)})(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([(0,i.createRuleSet)((0,i.createClassName)(n.interaction,s),c)])},[])}},{key:"shouldRenderMediaQuery",value:function(e,t){return!!(t&&t.includes(e))}},{key:"interactions",get:function(){return Object.keys(this._interactions)}},{key:"dynamicResponsiveMediaQueries",get:function(){return Object.entries(this._interactions).reduce(function(e,t){var r=a(t,2);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){l(e,t,r[t])})}return e}({},e,l({},r[0],r[1]))},{})}}]),e}();t.Interactions=f},8603:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.createMedia=function(e){var t,r=(0,u.castBreakpointsToIntegers)(e.breakpoints),n=new o.MediaQueries(r,e.interactions||{}),l=(0,a.createResponsiveComponents)(),f=i.default.createContext({});f.displayName="Media.Context";var p=i.default.createContext({hasParentMedia:!1,breakpointProps:{}});f.displayName="MediaParent.Context";var d=(0,u.memoize)(function(e){return{onlyMatch:e}});return{Media:function(e){(function(e){var t=Object.keys(e).filter(function(e){return c.includes(e)});if(t.length<1)throw Error("1 of ".concat(c.join(", ")," is required."));if(t.length>1)throw Error("Only 1 of ".concat(t.join(", ")," is allowed at a time."))})(e),e.children;var t,r=e.className,a=e.style,o=e.interaction,s=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["children","className","style","interaction"]),l=i.default.useMemo(function(){return(0,u.memoize)(function(e){return{hasParentMedia:!0,breakpointProps:e}})},[]),d=i.default.useContext(p),y=l(s),h=i.default.useContext(f).onlyMatch,b=i.default.useId(),m="undefined"!=typeof window,v=(0,u.useIsFirstRender)();if(e.interaction)t=(0,u.createClassName)("interaction",e.interaction);else{if(e.at){var k=n.breakpoints.largestBreakpoint;e.at===k&&console.warn("[@artsy/fresnel] `at` is being used with the largest breakpoint. Consider using `<Media greaterThanOrEqual="+'"'.concat(k,'">` to account for future ')+"breakpoint definitions outside of this range.")}var g=(0,u.propKey)(s),O=s[g];t=(0,u.createClassName)(g,O)}var _=(!d.hasParentMedia||(0,u.intersection)(n.breakpoints.toVisibleAtBreakpointSet(d.breakpointProps),n.breakpoints.toVisibleAtBreakpointSet(s)).length>0)&&(void 0===h||n.shouldRenderMediaQuery(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},s,{interaction:o}),h)),j=" fresnel-".concat(b);return t+=j,m&&v&&!_&&Array.from(document.getElementsByClassName(j)).forEach(function(e){return e.innerHTML=""}),i.default.createElement(p.Provider,{value:y},e.children instanceof Function?e.children(t,_):i.default.createElement("div",{className:["fresnel-container",t,r].filter(Boolean).join(" "),style:a,suppressHydrationWarning:!0},_?e.children:null))},MediaContextProvider:function(e){var t=e.disableDynamicMediaQueries,r=e.onlyMatch,a=e.children;if(!t)return i.default.createElement(l.Provider,{mediaQueries:n.dynamicResponsiveMediaQueries,initialMatchingMediaQueries:(0,u.intersection)(n.mediaQueryTypes,r)},i.default.createElement(l.Consumer,null,function(e){var t=Object.keys(e).filter(function(t){return e[t]}),n=d((0,u.intersection)(t,r));return i.default.createElement(f.Provider,{value:n},a)}));var o=d(r);return i.default.createElement(f.Provider,{value:o},a)},createMediaStyle:n.toStyle,SortedBreakpoints:function(e){if(Array.isArray(e))return s(e)}(t=n.breakpoints.sortedBreakpoints)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),findBreakpointAtWidth:n.breakpoints.findBreakpointAtWidth,findBreakpointsForWidths:n.breakpoints.findBreakpointsForWidths,valuesWithBreakpointProps:n.breakpoints.valuesWithBreakpointProps}};var n,i=(n=r(7294))&&n.__esModule?n:{default:n},a=r(1211),o=r(6482),u=r(6046);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=o.MediaQueries.validKeys()},6482:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.MediaQueries=void 0;var n=r(1129),i=r(971),a=r(6046);function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(){function e(t,r){var a=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),l(this,"_breakpoints",void 0),l(this,"_interactions",void 0),l(this,"toStyle",function(e){return[".fresnel-container{margin:0;padding:0;}"].concat(o(a._breakpoints.toRuleSets(e)),o(a._interactions.toRuleSets())).join("\n")}),this._breakpoints=new n.Breakpoints(t),this._interactions=new i.Interactions(r||{})}return c(e,null,[{key:"validKeys",value:function(){return o(n.Breakpoints.validKeys()).concat(o(i.Interactions.validKeys()))}}]),c(e,[{key:"shouldRenderMediaQuery",value:function(e,t){var r=e.interaction,n=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["interaction"]);if(r)return this._interactions.shouldRenderMediaQuery(r,t);var i=(0,a.intersection)(t,this._breakpoints.sortedBreakpoints);return this._breakpoints.shouldRenderMediaQuery(n,i)}},{key:"breakpoints",get:function(){return this._breakpoints}},{key:"mediaQueryTypes",get:function(){return o(this._breakpoints.sortedBreakpoints).concat(o(this._interactions.interactions))}},{key:"dynamicResponsiveMediaQueries",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){l(e,t,r[t])})}return e}({},this._breakpoints.dynamicResponsiveMediaQueries,this._interactions.dynamicResponsiveMediaQueries)}}]),e}();t.MediaQueries=f},6046:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.propKey=function(e){return Object.keys(e)[0]},t.intersection=function(e,t){return t?e.filter(function(e){return t.indexOf(e)>=0}):a(e)},t.createRuleSet=function(e,t){return"@media ".concat(t,"{.").concat(e,"{display:none!important;}}")},t.createClassName=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return["fresnel"].concat(a(t.reduce(function(e,t){return Array.isArray(t)?a(e).concat(a(t)):a(e).concat([t])},[]))).join("-")},t.castBreakpointsToIntegers=function(e){var t=Object.keys(e);return t.reduce(function(r,n,a){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.forEach(function(t){i(e,t,r[t])})}return e}({},r,i({},t[a],Math.round(Number(e[n]))))},{})},t.memoize=function(e){var t={};return function(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=JSON.stringify(n);return t[a]||(t[a]=e.apply(void 0,n)),t[a]}},t.useIsFirstRender=function(){var e=(0,n.useRef)(!0);return!!e.current&&(e.current=!1,!0)};var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}},2082:function(e,t,r){Object.defineProperty(t,"Wm",{enumerable:!0,get:function(){return n.createMedia}});var n=r(8603);r(1129)}}]);