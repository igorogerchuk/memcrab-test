(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{22:function(e,t,n){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},23:function(e,t,n){e.exports={matrix:"Array_matrix__1r8Hw"}},25:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(12),c=n.n(u),o=n(2),i=n(3),l=n(5),s=n(4),d=n(6),m=n(8),f=n(1),p={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS",ILLUMINATE:"ILLUMINATE"},b=n(17),v=function(e,t){for(var n=[],r=0;r<e;r++){n[r]={id:b(),cells:[]};for(var a=0;a<t;a++)n[r].cells[a]={id:b(),amount:Math.floor(1e3*Math.random())}}return n},E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={m:"",n:"",x:""},n.inputHandler=function(e){var t=e.target,r=t.id,a=t.value;switch(r){case"m":n.setState((function(e){return Object(m.a)({},e,{m:a})}));break;case"n":n.setState((function(e){return Object(m.a)({},e,{n:a})}));break;case"x":n.setState((function(e){return Object(m.a)({},e,{x:a})}))}},n.submitHandler=function(e){e.preventDefault();var t=n.state,r=t.m,a=t.n,u=t.x,c=n.props,o=c.onSaveParams,i=c.onSaveArray;r<=0||a<=0||u<0?alert("array parameters must be more then 0"):(i(v(r,a)),o({n:a,x:u}),n.setState({m:"",n:"",x:""}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.m,n=e.n,r=e.x;return a.a.createElement("div",null,a.a.createElement("p",null,"Enter table parameters:"),a.a.createElement("form",{onSubmit:this.submitHandler},a.a.createElement("label",null,"Lines quantity:"," ",a.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:t,placeholder:"0"})),a.a.createElement("label",null,"Columns quantity:",a.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:n,placeholder:"0"})),a.a.createElement("label",null,"Illuminated cells quantity:",a.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:r,placeholder:"0"})),a.a.createElement("input",{type:"submit",value:"Generate"})))}}]),t}(r.Component),h=Object(f.b)(null,(function(e){return{onSaveArray:function(t){return e(function(e){return{type:p.SAVE_ARRAY,payload:{array:e}}}(t))},onSaveParams:function(t){return e(function(e){return{type:p.SAVE_PARAMS,payload:{params:e}}}(t))}}}))(E),y=n(13),O=n(14),j=function(e){return e.array},A=function(e){return Number(e.params.n)},_=function(e){return Number(e.params.x)},g=function(e){return e.illuminated},I=function(e,t){return j(e).find((function(e){return e.id===t}))},S=function(e,t,n){return I(e,n).cells.find((function(e){return e.id===t}))},N=n(7),R=function(e,t,n){var r=e.reduce((function(e,t){return[].concat(Object(N.a)(e),Object(N.a)(t.cells))}),[]);if(n>=r.length-1)return r;r.sort((function(e,n){return Math.abs(e.amount-t.amount)-Math.abs(n.amount-t.amount)}));var a=r.slice(0,n+1);return a.includes(t)?a:[t].concat(Object(N.a)(a.slice(1,n+1)))};function L(){var e=Object(y.a)(["\n  background: ",";\n  cursor: pointer;\n"]);return L=function(){return e},e}var H=O.a.td(L(),(function(e){return e.background})),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).hoverOnHandler=function(){var e=n.props,t=e.array,r=e.numberQty,a=e.element;(0,e.onHover)(R(t,a,r))},n.hoverOffHandler=function(){(0,n.props.onHover)([])},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.element,n=e.sum,r=e.sumHover,u=e.onIncrease,c=e.id,o=e.illuminated,i="white",l=t.amount/n*100;return o.length>0&&o.includes(t)&&(i="green"),r&&(i="linear-gradient(to top, #fff200, #1e9600 ".concat(l,"%, transparent ").concat(l,"%)")),a.a.createElement(H,{onClick:u,background:i,id:c,onMouseEnter:this.hoverOnHandler,onMouseLeave:this.hoverOffHandler},r?l.toFixed(1)+"%":t.amount)}}]),t}(r.Component),w=Object(f.b)((function(e,t){var n=t.id,r=t.lineId;return{array:j(e),numberQty:_(e),illuminated:g(e),element:S(e,n,r)}}),(function(e,t){var n=t.id,r=t.lineId;return{onIncrease:function(){return e(function(e,t){return{type:p.INCREASE,payload:{id:e,lineId:t}}}(n,r))},onHover:function(t){return e({type:p.ILLUMINATE,payload:{illuminated:t}})}}}))(k);function M(){var e=Object(y.a)(["\n  background-color: cadetblue;\n  cursor: pointer;\n"]);return M=function(){return e},e}var C=O.a.td(M()),x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={sumHover:!1,sum:0},n.hoverHandler=function(e){var t=Number(e.target.innerText);n.setState((function(e){return{sumHover:!e.sumHover,sum:t}}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.line,n=e.onRemove,r=e.id,u=this.state,c=u.sumHover,o=u.sum;return a.a.createElement("tr",{id:r},t.cells.map((function(e){return a.a.createElement(w,{sumHover:c,sum:o,key:e.id,id:e.id,lineId:r})})),a.a.createElement(C,{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler},t.cells.reduce((function(e,t){return e+t.amount}),0)),a.a.createElement("td",null,a.a.createElement("button",{onClick:n},"Remove")))}}]),t}(r.Component),D=Object(f.b)((function(e,t){var n=t.id;return{line:I(e,n)}}),(function(e,t){return{onRemove:function(){return e((n=t.id,{type:p.REMOVE_LINE,payload:{id:n}}));var n}}}))(x),V=n(17),T=function(e){for(var t=[],n=e[0].cells.length,r=0;r<n;r++){for(var a=0,u=0;u<e.length;u++)a+=e[u].cells[r].amount;t.push({id:V(),amount:(a/n).toFixed(2)})}return t},P=n(22),U=n.n(P),X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement("tr",{className:U.a.avarage},T(e).map((function(e){return a.a.createElement("td",{key:e.id,id:e.id},e.amount)})))}}]),t}(r.Component),Y=Object(f.b)((function(e){return{array:j(e)}}))(X),q=n(23),F=n.n(q),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement("div",null,a.a.createElement("table",{className:F.a.matrix},a.a.createElement("tbody",null,e.map((function(e){return a.a.createElement(D,{key:e.id,id:e.id})})),a.a.createElement(Y,null))))}}]),t}(r.Component),Q=Object(f.b)((function(e){return{array:j(e)}}))(J),B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).addHandler=function(){var e=n.props,t=e.lineLength;(0,e.onAdd)(v(1,t))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),t}(r.Component),G=Object(f.b)((function(e){return{lineLength:A(e)}}),(function(e){return{onAdd:function(t){return e(function(e){return{type:p.ADD_LINE,payload:{newLine:e}}}(t))}}}))(B),K=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.array;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),e.length>0&&a.a.createElement(Q,null),e.length>0&&a.a.createElement(G,null))}}]),t}(r.Component),z=Object(f.b)((function(e){return{array:j(e)}}))(K),W=n(9),Z=function(e,t){switch(t.type){case p.ADD_LINE:return t.payload.newLine;case p.REMOVE_LINE:return e.id!==t.payload.id;case p.INCREASE:return e.id===t.payload.lineId?Object(m.a)({},e,{cells:e.cells.map((function(e){return function(e,t){var n=t.type,r=t.payload;switch(n){case p.INCREASE:return e.id===r.id?Object(m.a)({},e,{amount:e.amount+=1}):e}}(e,t)}))}):e}},$=Object(W.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD_LINE:return[].concat(Object(N.a)(e),Object(N.a)(Z(void 0,t)));case p.REMOVE_LINE:return e.filter((function(e){return Z(e,t)}));case p.SAVE_ARRAY:return t.payload.array;case p.INCREASE:return e.map((function(e){return Z(e,t)}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SAVE_PARAMS:return t.payload.params;default:return e}},illuminated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ILLUMINATE:return t.payload.illuminated;default:return e}}}),ee=Object(W.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(f.a,{store:ee},a.a.createElement(z,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b761918a.chunk.js.map