(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{22:function(e,t,n){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},23:function(e,t,n){e.exports={matrix:"Array_matrix__1r8Hw"}},25:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(12),c=n.n(u),o=n(2),i=n(3),l=n(5),s=n(4),m=n(6),d=n(7),b=n(1),p={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS",ILLUMINATE:"ILLUMINATE"},f=n(17),E=function(e,t){for(var n=[],r=0;r<e;r++){n[r]={id:f(),cells:[]};for(var a=0;a<t;a++)n[r].cells[a]={id:"number"+f(),amount:Math.floor(1e3*Math.random())}}return n},h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={m:"",n:"",x:""},n.inputHandler=function(e){var t=e.target,r=t.id,a=t.value;switch(r){case"m":n.setState((function(e){return Object(d.a)({},e,{m:a})}));break;case"n":n.setState((function(e){return Object(d.a)({},e,{n:a})}));break;case"x":n.setState((function(e){return Object(d.a)({},e,{x:a})}))}},n.submitHandler=function(e){e.preventDefault();var t=n.state,r=t.m,a=t.n,u=t.x,c=n.props,o=c.onSaveArray;c.onSaveParams;r<=0||a<=0||u<0?alert("array parameters must be more then 0"):(o(E(r,a)),n.setState({m:"",n:"",x:""}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.m,n=e.n,r=e.x;return a.a.createElement("div",null,a.a.createElement("p",null,"Enter table parameters"),a.a.createElement("form",{onSubmit:this.submitHandler},a.a.createElement("label",null,"Lines quantity:"," ",a.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:t,placeholder:"0"})),a.a.createElement("label",null,"Columns quantity:",a.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:n,placeholder:"0"})),a.a.createElement("label",null,"Illuminated cells quantity:",a.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:r,placeholder:"0"})),a.a.createElement("input",{type:"submit",value:"Generate"})))}}]),t}(r.Component),v=Object(b.b)(null,(function(e){return{onSaveArray:function(t){return e(function(e){return{type:p.SAVE_ARRAY,payload:{array:e}}}(t))},onSaveParams:function(t){return e(function(e){return{type:p.SAVE_PARAMS,payload:{params:e}}}(t))}}}))(h),y=n(14),O=n(15),j=function(e){return e.array},A=function(e){return e.params.n},_=function(e){return e.params.x};function g(){var e=Object(y.a)(["\n  cursor: pointer;\n  background-color: ",";\n"]);return g=function(){return e},e}function S(){var e=Object(y.a)(["\n  background-color: cadetblue;\n"]);return S=function(){return e},e}var N=O.a.td(S()),R=O.a.td(g(),(function(e){return e.bgColor})),I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={hover:!1,sum:0},n.increaseHandler=function(e){"number"===e.target.id.slice(0,6)&&(0,n.props.onIncrease)(e.target.id)},n.hoverHandler=function(e){var t=Number(e.target.innerText);n.setState((function(e){return{hover:!e.hover,sum:t}}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.closestNumbers,r=t.line,u=t.onRemove,c=this.state,o=c.hover,i=c.sum;return a.a.createElement("tr",null,r.map((function(t){return a.a.createElement(R,{key:t.id,id:t.id,onClick:e.increaseHandler,bgColor:n.includes(t)?"green":"white"},o?(t.amount/i*100).toFixed(1)+"%":t.amount)})),a.a.createElement(N,{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler},r.reduce((function(e,t){return e+t.amount}),0)),a.a.createElement("td",null,a.a.createElement("button",{onClick:u},"Remove")))}}]),t}(r.Component),L=Object(b.b)((function(e){return{array:j(e)}}),(function(e,t){return{onRemove:function(){return e((n=t.id,{type:p.REMOVE_LINE,payload:{id:n}}));var n},onIncrease:function(t){return e(function(e){return{type:p.INCREASE,payload:{id:e}}}(t))}}}))(I),C=n(17),w=function(e){for(var t=[],n=e[0].cells.length,r=0;r<n;r++){for(var a=0,u=0;u<e.length;u++)a+=e[u].cells[r].amount;t.push({id:C(),amount:(a/n).toFixed(2)})}return t},M=n(22),k=n.n(M),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement("tr",{className:k.a.avarage},w(e).map((function(e){return a.a.createElement("td",{key:e.id,id:e.id},e.amount)})))}}]),t}(r.Component),H=Object(b.b)((function(e){return{array:j(e)}}))(x),D=n(23),V=n.n(D),T=n(11),P=function(e,t,n){var r,a=[];return e.forEach((function(e){return e.cells.forEach((function(e){e.id===t?r=e:a.push(e)}))})),a.sort((function(e,t){return Math.abs(e.amount-r.amount)-Math.abs(t.amount-r.amount)})),[r].concat(Object(T.a)(a.slice(0,n)))},U=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new t(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={hover:!1,closestNumbers:[]},n.illuminateHandler=function(e){var t=e.target.id;if("number"===t.slice(0,6)){var r=n.props,a=r.array,u=r.numberQty;n.setState((function(e){return{hover:!e.hover,closestNumbers:e.hover?[]:P(a,t,u)}}))}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array,t=this.state.closestNumbers;return a.a.createElement("div",null,a.a.createElement("table",{className:V.a.matrix,onMouseOver:this.illuminateHandler,onMouseOut:this.illuminateHandler},a.a.createElement("tbody",null,e.map((function(e){return a.a.createElement(L,{key:e.id,id:e.id,line:e.cells,closestNumbers:t})})),a.a.createElement(H,null))))}}]),t}(r.Component),X=Object(b.b)((function(e){return{array:j(e),numberQty:_(e)}}))(U),Y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).addHandler=function(){var e=n.props,t=e.lineLength;(0,e.onAdd)(E(1,t))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),t}(r.Component),q=Object(b.b)((function(e){return{lineLength:A(e)}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:p.ADD_LINE,payload:{newLine:e}}}(t))}}}))(Y),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),e.length>0&&a.a.createElement(X,null),e.length>0&&a.a.createElement(q,null))}}]),t}(r.Component),J=Object(b.b)((function(e){return{array:j(e)}}))(F),Q=n(8),B=function(e,t){switch(t.type){case p.ADD_LINE:return t.payload.newLine;case p.REMOVE_LINE:return e.id!==t.payload.id;case p.INCREASE:return e.map((function(e){return function(e,t){var n=t.type,r=t.payload;switch(n){case p.INCREASE:return e.id===r.id?Object(d.a)({},e,{amount:e.amount+=1}):e}}(e,t)}))}},G=Object(Q.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD_LINE:return[].concat(Object(T.a)(e),Object(T.a)(B(void 0,t)));case p.REMOVE_LINE:return e.filter((function(e){return B(e,t)}));case p.SAVE_ARRAY:return t.payload.array;case p.INCREASE:return e.map((function(e){return Object(d.a)({},e,{cells:B(e.cells,t)})}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SAVE_PARAMS:return t.payload.params;default:return e}}}),K=Object(Q.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(b.a,{store:K},a.a.createElement(J,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.33b24ae3.chunk.js.map