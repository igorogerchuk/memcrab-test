(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{22:function(e,t,n){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},23:function(e,t,n){e.exports={matrix:"Array_matrix__1r8Hw"}},25:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(12),c=n.n(u),o=n(2),i=n(3),l=n(5),s=n(4),m=n(6),d=n(7),p=n(1),f={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS",ILLUMINATE:"ILLUMINATE"},E=n(17),b=function(e,t){for(var n=[],a=0;a<e;a++){n[a]={id:E(),cells:[]};for(var r=0;r<t;r++)n[a].cells[r]={id:"number"+E(),amount:Math.floor(1e3*Math.random())}}return n},h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={m:"",n:"",x:""},n.inputHandler=function(e){var t=e.target,a=t.id,r=t.value;switch(a){case"m":n.setState((function(e){return Object(d.a)({},e,{m:r})}));break;case"n":n.setState((function(e){return Object(d.a)({},e,{n:r})}));break;case"x":n.setState((function(e){return Object(d.a)({},e,{x:r})}))}},n.submitHandler=function(e){e.preventDefault();var t=n.state,a=t.m,r=t.n,u=t.x,c=n.props,o=c.onSaveParams,i=c.onSaveArray;a<=0||r<=0||u<0?alert("array parameters must be more then 0"):(i(b(a,r)),o({n:r,x:u}),n.setState({m:"",n:"",x:""}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.m,n=e.n,a=e.x;return r.a.createElement("div",null,r.a.createElement("p",null,"Enter table parameters3"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",null,"Lines quantity:"," ",r.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:t,placeholder:"0"})),r.a.createElement("label",null,"Columns quantity:",r.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:n,placeholder:"0"})),r.a.createElement("label",null,"Illuminated cells quantity:",r.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:a,placeholder:"0"})),r.a.createElement("input",{type:"submit",value:"Generate"})))}}]),t}(a.Component),v=Object(p.b)(null,(function(e){return{onSaveArray:function(t){return e(function(e){return{type:f.SAVE_ARRAY,payload:{array:e}}}(t))},onSaveParams:function(t){return e(function(e){return{type:f.SAVE_PARAMS,payload:{params:e}}}(t))}}}))(h),y=n(14),O=n(15),A=function(e){return e.array},j=function(e){return e.params.n},_=function(e){return e.params.x};function g(){var e=Object(y.a)(["\n  background: ",";\n  cursor: pointer;\n"]);return g=function(){return e},e}function S(){var e=Object(y.a)(["\n  background-color: cadetblue;\n  cursor: pointer;\n"]);return S=function(){return e},e}var I=O.a.td(S()),R=O.a.td(g(),(function(e){return e.background})),L=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={sumHover:!1,sum:0},n.increaseHandler=function(e){(0,n.props.onIncrease)(e.target.id)},n.hoverHandler=function(e){var t=Number(e.target.innerText);n.setState((function(e){return{sumHover:!e.sumHover,sum:t}}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.illuminated,t.line),a=t.onRemove,u=this.state,c=u.sumHover,o=u.sum;return r.a.createElement("tr",null,n.map((function(t){var n="white",a=t.amount/o*100;return c&&(n="linear-gradient(to top, #fff200, #1e9600 ".concat(a,"%, transparent ").concat(a,"%)")),r.a.createElement(R,{key:t.id,id:t.id,onClick:e.increaseHandler,background:n},c?a.toFixed(1)+"%":t.amount)})),r.a.createElement(I,{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler},n.reduce((function(e,t){return e+t.amount}),0)),r.a.createElement("td",null,r.a.createElement("button",{onClick:a},"Remove")))}}]),t}(a.Component),N=Object(p.b)(null,(function(e,t){return{onRemove:function(){return e((n=t.id,{type:f.REMOVE_LINE,payload:{id:n}}));var n},onIncrease:function(t){return e(function(e){return{type:f.INCREASE,payload:{id:e}}}(t))}}}))(L),H=n(17),w=function(e){for(var t=[],n=e[0].cells.length,a=0;a<n;a++){for(var r=0,u=0;u<e.length;u++)r+=e[u].cells[a].amount;t.push({id:H(),amount:(r/n).toFixed(2)})}return t},k=n(22),C=n.n(k),M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return r.a.createElement("tr",{className:C.a.avarage},w(e).map((function(e){return r.a.createElement("td",{key:e.id,id:e.id},e.amount)})))}}]),t}(a.Component),x=Object(p.b)((function(e){return{array:A(e)}}))(M),D=n(23),V=n.n(D),T=n(11),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new t(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},n.illuminateHandler=function(e){},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return r.a.createElement("div",null,r.a.createElement("table",{className:V.a.matrix,onMouseOver:this.illuminateHandler,onMouseOut:this.illuminateHandler},r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,line:e.cells})})),r.a.createElement(x,null))))}}]),t}(a.Component),U=Object(p.b)((function(e){return{array:A(e),numberQty:_(e)}}),(function(e){return{onHover:function(t){return e({type:f.ILLUMINATE,payload:{illuminated:t}})}}}))(P),X=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).addHandler=function(){var e=n.props,t=e.lineLength;(0,e.onAdd)(b(1,t))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),t}(a.Component),Y=Object(p.b)((function(e){return{lineLength:j(e)}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:f.ADD_LINE,payload:{newLine:e}}}(t))}}}))(X),q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),e.length>0&&r.a.createElement(U,null),e.length>0&&r.a.createElement(Y,null))}}]),t}(a.Component),F=Object(p.b)((function(e){return{array:A(e)}}))(q),J=n(8),B=function(e,t){switch(t.type){case f.ADD_LINE:return t.payload.newLine;case f.REMOVE_LINE:return e.id!==t.payload.id;case f.INCREASE:return e.map((function(e){return function(e,t){var n=t.type,a=t.payload;switch(n){case f.INCREASE:return e.id===a.id?Object(d.a)({},e,{amount:e.amount+=1}):e}}(e,t)}))}},G=Object(J.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.ADD_LINE:return[].concat(Object(T.a)(e),Object(T.a)(B(void 0,t)));case f.REMOVE_LINE:return e.filter((function(e){return B(e,t)}));case f.SAVE_ARRAY:return t.payload.array;case f.INCREASE:return e.map((function(e){return Object(d.a)({},e,{cells:B(e.cells,t)})}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SAVE_PARAMS:return t.payload.params;default:return e}},illuminated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.ILLUMINATE:return t.payload.illuminated;default:return e}}}),K=Object(J.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(p.a,{store:K},r.a.createElement(F,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.704c4b27.chunk.js.map