(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(_,e,t){_.exports=t(19)},15:function(_,e,t){},17:function(_,e,t){},19:function(_,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),s=t(8),o=t.n(s),l=(t(15),t(2)),c=t(3),n=t(5),i=t(4),u=t(6),p=t(9),m=(t(17),function(_){function e(){return Object(l.a)(this,e),Object(n.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(u.a)(e,_),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(p.a,null)}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),Calculator=function(_Component){function Calculator(_){var e;return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,_))).state={prev:"",display_text:"",symbol_state:!1,err_msg:!1},e.updateDisplayText=e.updateDisplayText.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.isInt=e.isInt.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.cls=e.cls.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.del=e.del.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.symbolHandler=e.symbolHandler.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.numHandler=e.numHandler.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.equalsHandler=e.equalsHandler.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.dotHandler=e.dotHandler.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e.dotBeforeNum=e.dotBeforeNum.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(e))),e}return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"updateDisplayText",value:function(_){var e=parseInt(_);"cls"===_?(this.cls(),this.setState({err_msg:!1})):"del"===_?this.state.err_msg?(this.cls(),this.setState({err_msg:!1})):this.del():"%"===_||"*"===_||"/"===_||"-"===_||"+"===_?this.state.err_msg||this.symbolHandler(_):"."===_?this.state.err_msg||this.dotHandler():e>=0&&e<=9?this.state.err_msg||this.numHandler(_):"="===_&&(this.state.err_msg||this.equalsHandler())}},{key:"isInt",value:function(_){return _%1===0}},{key:"cls",value:function(){this.setState(function(_,e){return{prev:""}}),this.setState(function(_,e){return{display_text:""}}),console.log("(cls)")}},{key:"del",value:function(){var _=this.state.display_text.toString(),e=_.length,t=_.slice(0,e-1),r=_[e-1];console.log("(del) prevStr: "+_+", newStr: "+t),this.setState(function(_,e){return{display_text:t}}),"%"!==r&&"*"!==r&&"/"!==r&&"-"!==r&&"+"!==r||this.setState(function(_,e){return{symbol_count:_.symbol_count-1}}),0===t.length&&(this.setState({display_text:this.state.prev}),this.setState({prev:""}))}},{key:"symbolHandler",value:function(_){var e=_;if(console.log("(symbol) symbol: ("+_+") symbol_state: "+this.state.symbol_state),this.state.symbol_state){var t=this.state.display_text.toString(),r=t.length;t=t.slice(0,r-1)+e,this.setState({display_text:t})}else this.setState(function(_,t){return{display_text:_.display_text+e}}),this.setState({symbol_state:!0})}},{key:"numHandler",value:function(_){1===this.state.display_text.toString().length&&"0"===this.state.display_text[0]?this.setState(function(e,t){return{display_text:_.toString()}}):this.setState(function(e,t){return{display_text:e.display_text+_.toString()}}),console.log("(integer) "+_),console.log("(display_text) "+this.state.display_text),this.setState({symbol_state:!1})}},{key:"equalsHandler",value:function equalsHandler(){var output;try{output=eval(this.state.display_text),this.setState({prev:this.state.display_text}),this.setState({display_text:this.isInt(output)?output.toString():output.toPrecision(5).toString()})}catch(e){e instanceof SyntaxError&&(this.setState({prev:e.message}),this.setState({display_text:"Click cls to reset"}),this.setState({err_msg:!0}))}}},{key:"dotHandler",value:function(){var _;this.dotBeforeNum()||(_=0===this.state.display_text.toString().length?"0.":this.state.display_text+".",this.setState({display_text:_}))}},{key:"dotBeforeNum",value:function(){for(var _=this.state.display_text.toString(),e=!1,t=_.length-1;t>=0;){if("."===_[t]){e=!0;break}if("%"===_[t]||"*"===_[t]||"/"===_[t]||"-"===_[t]||"+"===_[t]){e=!1;break}t-=1}return e}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OutputDisplay,{prev:this.state.prev,display_text:this.state.display_text,err_msg:this.state.err_msg}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Buttons,{updateDisplayText:this.updateDisplayText,handleKeyPress:this.handleKeyPress}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MetaAuthor,null))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component),OutputDisplay=function(_){function e(){return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"display-output-wrapper"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"output-text"+(this.props.err_msg?" err-msg":"")},this.props.prev),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"output-text"+(this.props.err_msg?" err-msg":"")},this.props.display_text))}}]),e}(react__WEBPACK_IMPORTED_MODULE_6__.Component),Buttons=function(_){function e(_){var t;return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),(t=Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).call(this,_))).state={},t.clicker=t.clicker.bind(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(t))),t}return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"clicker",value:function(_){this.props.updateDisplayText(_.target.textContent)}},{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"Buttons"},["cls","del","%","*","7","8","9","/","4","5","6","-","1","2","3","+","","0",".","="].map(function(e,t){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"btn-"+t+" btn"+(2===t||3===t||7===t||11===t||15===t||18===t||19===t?" symbol":""),onClick:_.clicker},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"div-text"},e))}))}}]),e}(react__WEBPACK_IMPORTED_MODULE_6__.Component),MetaAuthor=function(_){function e(){return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_home_rupam_Desktop_reactJS_projects_project_1_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"metaAuthor"},"Author: Rupam Kerketta")}}]),e}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Calculator}},[[10,2,1]]]);
//# sourceMappingURL=main.8589efd3.chunk.js.map