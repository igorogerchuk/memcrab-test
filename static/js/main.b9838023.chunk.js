(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{22:function(e,t,n){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},23:function(e,t,n){e.exports={matrix:"Array_matrix__1r8Hw"}},25:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(12),c=n.n(u),i=n(2),o=n(3),l=n(5),s=n(4),m=n(6),d=n(7),f=n(1),b={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS",ILLUMINATE:"ILLUMINATE"},p=n(17),E=function(e,t){for(var n=[],r=0;r<e;r++){n[r]={id:p(),cells:[]};for(var a=0;a<t;a++)n[r].cells[a]={id:"number"+p(),amount:Math.floor(1e3*Math.random())}}return n},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={m:"",n:"",x:""},n.inputHandler=function(e){var t=e.target,r=t.id,a=t.value;switch(r){case"m":n.setState((function(e){return Object(d.a)({},e,{m:a})}));break;case"n":n.setState((function(e){return Object(d.a)({},e,{n:a})}));break;case"x":n.setState((function(e){return Object(d.a)({},e,{x:a})}))}},n.submitHandler=function(e){e.preventDefault();var t=n.state,r=t.m,a=t.n,u=t.x,c=n.props,i=c.onSaveParams,o=c.onSaveArray;r<=0||a<=0||u<0?alert("array parameters must be more then 0"):(o(E(r,a)),i({n:a,x:u}),n.setState({m:"",n:"",x:""}))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.m,n=e.n,r=e.x;return a.a.createElement("div",null,a.a.createElement("p",null,"Enter table parameters1"),a.a.createElement("form",{onSubmit:this.submitHandler},a.a.createElement("label",null,"Lines quantity:"," ",a.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:t,placeholder:"0"})),a.a.createElement("label",null,"Columns quantity:",a.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:n,placeholder:"0"})),a.a.createElement("label",null,"Illuminated cells quantity:",a.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:r,placeholder:"0"})),a.a.createElement("input",{type:"submit",value:"Generate"})))}}]),t}(r.Component),h=Object(f.b)(null,(function(e){return{onSaveArray:function(t){return e(function(e){return{type:b.SAVE_ARRAY,payload:{array:e}}}(t))},onSaveParams:function(t){return e(function(e){return{type:b.SAVE_PARAMS,payload:{params:e}}}(t))}}}))(v),y=n(13),O=n(14),j=function(e){return e.array},A=function(e){return Number(e.params.n)},_=function(e){return Number(e.params.x)},g=function(e){return e.illuminated},I=function(e,t){return j(e).find((function(e){return e.id===t}))},S=function(e,t,n){return I(e,n).cells.find((function(e){return e.id===t}))};function N(){var e=Object(y.a)(["\n  background: ",";\n  cursor: pointer;\n"]);return N=function(){return e},e}var R=O.a.td(N(),(function(e){return e.background})),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.element,n=e.sum,r=e.sumHover,u=e.onIncrease,c=e.id,i=e.illuminated,o="white",l=t.amount/n*100;return i.includes(t)&&(o="green"),r&&(o="linear-gradient(to top, #fff200, #1e9600 ".concat(l,"%, transparent ").concat(l,"%)")),a.a.createElement(R,{onClick:u,background:o,id:c},r?l.toFixed(1)+"%":t.amount)}}]),t}(r.Component),k=Object(f.b)((function(e,t){var n=t.id,r=t.lineId;return{illuminated:g(e),element:S(e,n,r)}}),(function(e,t){var n=t.id;return{onIncrease:function(){return e(function(e){return{type:b.INCREASE,payload:{id:e}}}(n))}}}))(L);function M(){var e=Object(y.a)(["\n  background-color: cadetblue;\n  cursor: pointer;\n"]);return M=function(){return e},e}var w=O.a.td(M()),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={sumHover:!1,sum:0},n.hoverHandler=function(e){var t=Number(e.target.innerText);n.setState((function(e){return{sumHover:!e.sumHover,sum:t}}))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.line,n=e.onRemove,r=e.id,u=this.state,c=u.sumHover,i=u.sum;return a.a.createElement("tr",{id:r},t.cells.map((function(e){return a.a.createElement(k,{sumHover:c,sum:i,key:e.id,id:e.id,lineId:r})})),a.a.createElement(w,{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler},t.cells.reduce((function(e,t){return e+t.amount}),0)),a.a.createElement("td",null,a.a.createElement("button",{onClick:n},"Remove")))}}]),t}(r.Component),H=Object(f.b)((function(e,t){var n=t.id;return{line:I(e,n)}}),(function(e,t){return{onRemove:function(){return e((n=t.id,{type:b.REMOVE_LINE,payload:{id:n}}));var n}}}))(C),x=n(17),D=function(e){for(var t=[],n=e[0].cells.length,r=0;r<n;r++){for(var a=0,u=0;u<e.length;u++)a+=e[u].cells[r].amount;t.push({id:x(),amount:(a/n).toFixed(2)})}return t},V=n(22),T=n.n(V),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement("tr",{className:T.a.avarage},D(e).map((function(e){return a.a.createElement("td",{key:e.id,id:e.id},e.amount)})))}}]),t}(r.Component),U=Object(f.b)((function(e){return{array:j(e)}}))(P),X=n(23),Y=n.n(X),q=n(10),F=function(e,t,n){var r=e.reduce((function(e,t){return[].concat(Object(q.a)(e),Object(q.a)(t.cells))}),[]);return n>=r.length?r:(r.sort((function(e,n){return Math.abs(e.amount-t)-Math.abs(n.amount-t)})),r.slice(0,n+1))},J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.array,n=e.numberQty,r=e.onHover;return a.a.createElement("div",null,a.a.createElement("table",{className:Y.a.matrix,onMouseOver:function(e){var a=e.target,u=a.id,c=a.innerText;if("number"===u.slice(0,6)){var i=Number(c),o=F(t,i,n);r(o)}},onMouseOut:function(e){"number"===e.target.id.slice(0,6)&&r([])}},a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(H,{key:e.id,id:e.id})})),a.a.createElement(U,null))))}}]),t}(r.Component),Q=Object(f.b)((function(e){return{array:j(e),numberQty:_(e)}}),(function(e){return{onHover:function(t){return e({type:b.ILLUMINATE,payload:{illuminated:t}})}}}))(J),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).addHandler=function(){var e=n.props,t=e.lineLength;(0,e.onAdd)(E(1,t))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),t}(r.Component),G=Object(f.b)((function(e){return{lineLength:A(e)}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:b.ADD_LINE,payload:{newLine:e}}}(t))}}}))(B),K=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),e.length>0&&a.a.createElement(Q,null),e.length>0&&a.a.createElement(G,null))}}]),t}(r.Component),z=Object(f.b)((function(e){return{array:j(e)}}))(K),W=n(8),Z=function(e,t){switch(t.type){case b.ADD_LINE:return t.payload.newLine;case b.REMOVE_LINE:return e.id!==t.payload.id;case b.INCREASE:return e.map((function(e){return function(e,t){var n=t.type,r=t.payload;switch(n){case b.INCREASE:return e.id===r.id?Object(d.a)({},e,{amount:e.amount+=1}):e}}(e,t)}))}},$=Object(W.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ADD_LINE:return[].concat(Object(q.a)(e),Object(q.a)(Z(void 0,t)));case b.REMOVE_LINE:return e.filter((function(e){return Z(e,t)}));case b.SAVE_ARRAY:return t.payload.array;case b.INCREASE:return e.map((function(e){return Object(d.a)({},e,{cells:Z(e.cells,t)})}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SAVE_PARAMS:return t.payload.params;default:return e}},illuminated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ILLUMINATE:return t.payload.illuminated;default:return e}}}),ee=Object(W.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(f.a,{store:ee},a.a.createElement(z,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b9838023.chunk.js.map