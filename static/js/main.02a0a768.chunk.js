(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{22:function(e,t,n){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},23:function(e,t,n){e.exports={matrix:"Array_matrix__1r8Hw"}},25:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(12),c=n.n(u),o=n(2),i=n(3),l=n(5),s=n(4),m=n(6),d=n(7),f=n(1),p={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS"},b=n(17),E=function(e,t){for(var n=[],a=0;a<e;a++){n[a]={id:b(),cells:[]};for(var r=0;r<t;r++)n[a].cells[r]={id:"number"+b(),amount:Math.floor(1e3*Math.random())}}return n},h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={m:"",n:"",x:""},n.inputHandler=function(e){var t=e.target,a=t.id,r=t.value;switch(a){case"m":n.setState((function(e){return Object(d.a)({},e,{m:r})}));break;case"n":n.setState((function(e){return Object(d.a)({},e,{n:r})}));break;case"x":n.setState((function(e){return Object(d.a)({},e,{x:r})}))}},n.submitHandler=function(e){e.preventDefault();var t=n.state,a=t.m,r=t.n,u=t.x,c=n.props,o=c.onSaveParams,i=c.onSaveArray;a<=0||r<=0||u<0?alert("array parameters must be more then 0"):(i(E(a,r)),o({n:r,x:u}),n.setState({m:"",n:"",x:""}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.m,n=e.n,a=e.x;return r.a.createElement("div",null,r.a.createElement("p",null,"Enter table parameters1"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",null,"Lines quantity:"," ",r.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:t,placeholder:"0"})),r.a.createElement("label",null,"Columns quantity:",r.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:n,placeholder:"0"})),r.a.createElement("label",null,"Illuminated cells quantity:",r.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:a,placeholder:"0"})),r.a.createElement("input",{type:"submit",value:"Generate"})))}}]),t}(a.Component),v=Object(f.b)(null,(function(e){return{onSaveArray:function(t){return e(function(e){return{type:p.SAVE_ARRAY,payload:{array:e}}}(t))},onSaveParams:function(t){return e(function(e){return{type:p.SAVE_PARAMS,payload:{params:e}}}(t))}}}))(h),O=n(14),y=n(15);function j(){var e=Object(O.a)(["\n  background: ",";\n  cursor: pointer;\n"]);return j=function(){return e},e}function A(){var e=Object(O.a)(["\n  background-color: cadetblue;\n  cursor: pointer;\n"]);return A=function(){return e},e}var _=y.a.td(A()),S=y.a.td(j(),(function(e){return e.background})),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1,sum:0},n.increaseHandler=function(e){(0,n.props.onIncrease)(e.target.id)},n.hoverHandler=function(e){var t=Number(e.target.innerText);n.setState((function(e){return{hover:!e.hover,sum:t}}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.closestNumbers,t.line),a=t.onRemove,u=this.state,c=u.hover,o=u.sum;return r.a.createElement("tr",null,n.map((function(t){var n="white",a=t.amount/o*100;return c&&(n="linear-gradient(to top, #fff200, #1e9600 ".concat(a,"%, transparent ").concat(a,"%)")),r.a.createElement(S,{key:t.id,id:t.id,onClick:e.increaseHandler,background:n},c?a.toFixed(1)+"%":t.amount)})),r.a.createElement(_,{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler},n.reduce((function(e,t){return e+t.amount}),0)),r.a.createElement("td",null,r.a.createElement("button",{onClick:a},"Remove")))}}]),t}(a.Component),R=Object(f.b)(null,(function(e,t){return{onRemove:function(){return e((n=t.id,{type:p.REMOVE_LINE,payload:{id:n}}));var n},onIncrease:function(t){return e(function(e){return{type:p.INCREASE,payload:{id:e}}}(t))}}}))(g),N=n(17),I=function(e){for(var t=[],n=e[0].cells.length,a=0;a<n;a++){for(var r=0,u=0;u<e.length;u++)r+=e[u].cells[a].amount;t.push({id:N(),amount:(r/n).toFixed(2)})}return t},k=n(22),w=n.n(k),C=function(e){return e.array},L=function(e){return e.params.n},x=function(e){return e.params.x},H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return r.a.createElement("tr",{className:w.a.avarage},I(e).map((function(e){return r.a.createElement("td",{key:e.id,id:e.id},e.amount)})))}}]),t}(a.Component),M=Object(f.b)((function(e){return{array:C(e)}}))(H),D=n(23),V=n.n(D),P=n(11),T=function(e,t,n){var a,r=[];return e.forEach((function(e){return e.cells.forEach((function(e){e.id===t?a=e:r.push(e)}))})),r.sort((function(e,t){return Math.abs(e.amount-a.amount)-Math.abs(t.amount-a.amount)})),[a].concat(Object(P.a)(r.slice(0,n)))},X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new t(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state=[],n.illuminateOnHandler=function(e){var t=e.target.id;if("number"===t.slice(0,6)){var a=n.props,r=a.array,u=a.numberQty,c=T(r,t,u);n.setState(c)}},n.illuminateOffHandler=function(e){"number"===e.target.id.slice(0,6)&&n.setState([])},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.array;return r.a.createElement("div",null,r.a.createElement("table",{className:V.a.matrix,onMouseOver:this.illuminateOnHandler,onMouseOut:this.illuminateOffHandler},r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement(R,{key:t.id,id:t.id,line:t.cells,closestNumbers:e.state})})),r.a.createElement(M,null))))}}]),t}(a.Component),Y=Object(f.b)((function(e){return{array:C(e),numberQty:x(e)}}))(X),q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).addHandler=function(){var e=n.props,t=e.lineLength;(0,e.onAdd)(E(1,t))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),t}(a.Component),F=Object(f.b)((function(e){return{lineLength:L(e)}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:p.ADD_LINE,payload:{newLine:e}}}(t))}}}))(q),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),e.length>0&&r.a.createElement(Y,null),e.length>0&&r.a.createElement(F,null))}}]),t}(a.Component),Q=Object(f.b)((function(e){return{array:C(e)}}))(J),U=n(8),B=function(e,t){switch(t.type){case p.ADD_LINE:return t.payload.newLine;case p.REMOVE_LINE:return e.id!==t.payload.id;case p.INCREASE:return e.map((function(e){return function(e,t){var n=t.type,a=t.payload;switch(n){case p.INCREASE:return e.id===a.id?Object(d.a)({},e,{amount:e.amount+=1}):e}}(e,t)}))}},G=Object(U.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD_LINE:return[].concat(Object(P.a)(e),Object(P.a)(B(void 0,t)));case p.REMOVE_LINE:return e.filter((function(e){return B(e,t)}));case p.SAVE_ARRAY:return t.payload.array;case p.INCREASE:return e.map((function(e){return Object(d.a)({},e,{cells:B(e.cells,t)})}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SAVE_PARAMS:return t.payload.params;default:return e}}}),K=Object(U.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(f.a,{store:K},r.a.createElement(Q,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.02a0a768.chunk.js.map