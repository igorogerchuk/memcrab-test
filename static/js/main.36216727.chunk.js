(this["webpackJsonpmemcrab-test"]=this["webpackJsonpmemcrab-test"]||[]).push([[0],{18:function(e,n,t){e.exports={sumCell:"ArrayRow_sumCell__3n7Ta"}},19:function(e,n,t){e.exports={avarage:"AvarageRow_avarage__2TjEK"}},20:function(e,n,t){e.exports={matrix:"Array_matrix__1r8Hw"}},21:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(10),c=t.n(u),o=t(8),i=t(2),l=t(3),s=t(5),d=t(4),m=t(6),f=t(1),p={REMOVE_LINE:"REMOVE_LINE",ADD_LINE:"ADD_LINE",SAVE_ARRAY:"SAVE_ARRAY",INCREASE:"INCREASE",SAVE_PARAMS:"SAVE_PARAMS",ILLUMINATE:"ILLUMINATE"},E=t(15),v=function(e,n){for(var t=[],a=0;a<e;a++){t[a]={id:E(),cells:[]};for(var r=0;r<n;r++)t[a].cells[r]={id:E(),amount:Math.floor(1e3*Math.random())}}return t},b=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={m:"",n:"",x:""},t.inputHandler=function(e){var n=e.target,a=n.id,r=n.value;switch(a){case"m":t.setState((function(e){return Object(o.a)({},e,{m:r})}));break;case"n":t.setState((function(e){return Object(o.a)({},e,{n:r})}));break;case"x":t.setState((function(e){return Object(o.a)({},e,{x:r})}))}},t.submitHandler=function(e){e.preventDefault();var n=t.state,a=n.m,r=n.n,u=n.x,c=t.props,o=c.onSaveParams,i=c.onSaveArray;a<=0||r<=0||u<0?alert("array parameters must be more then 0"):(i(v(a,r)),o({n:r,x:u}),t.setState({m:"",n:"",x:""}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state,n=e.m,t=e.n,a=e.x;return r.a.createElement("div",null,r.a.createElement("p",null,"Enter table parameters"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("label",null,"Lines quantity:"," ",r.a.createElement("input",{type:"number",name:"lines",id:"m",onChange:this.inputHandler,value:n,placeholder:"0"})),r.a.createElement("label",null,"Columns quantity:",r.a.createElement("input",{type:"number",name:"columns",id:"n",onChange:this.inputHandler,value:t,placeholder:"0"})),r.a.createElement("label",null,"Illuminated cells quantity:",r.a.createElement("input",{type:"number",name:"illuminate",id:"x",onChange:this.inputHandler,value:a,placeholder:"0"})),r.a.createElement("input",{type:"submit",value:"Generate"})))}}]),n}(a.Component),h=Object(f.b)(null,(function(e){return{onSaveArray:function(n){return e(function(e){return{type:p.SAVE_ARRAY,payload:{array:e}}}(n))},onSaveParams:function(n){return e(function(e){return{type:p.SAVE_PARAMS,payload:{params:e}}}(n))}}}))(b),y=t(17),O=function(e){return e.array},A=function(e){return Number(e.params.n)},j=function(e){return Number(e.params.x)},_=function(e){return e.illuminated},I=function(e,n){return O(e).find((function(e){return e.id===n}))},g=function(e,n,t){return I(e,t).cells.find((function(e){return e.id===n}))},R=t(15),S=Object(y.a)([O,A],(function(e,n){for(var t=[],a=0;a<n;a++){for(var r=0,u=0;u<e.length;u++)r+=e[u].cells[a].amount;t.push({id:R(),amount:(r/e.length).toFixed(2)})}return t})),N=t(7),L=function(e,n,t){var a=e.reduce((function(e,n){return[].concat(Object(N.a)(e),Object(N.a)(n.cells))}),[]);if(t>=a.length-1)return a;a.sort((function(e,t){return Math.abs(e.amount-n.amount)-Math.abs(t.amount-n.amount)}));var r=a.slice(0,t+1).map((function(e){return e.id}));return r.includes(n.id)?r:[n.id].concat(Object(N.a)(r.slice(1,t+1)))},H=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).hoverOnHandler=function(){var e=t.props,n=e.array,a=e.numberQty,r=e.element;(0,e.onHover)(L(n,r,a))},t.hoverOffHandler=function(){(0,t.props.onHover)([])},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.element,t=e.sum,a=e.sumHover,u=e.onIncrease,c=e.id,o=e.illuminated,i={background:"white"},l=n.amount/t*100;return o.length>0&&o.includes(n.id)&&(i.background="green"),a&&(i.background="linear-gradient(to top, #fff200, #1e9600 ".concat(l,"%, transparent ").concat(l,"%)")),r.a.createElement("td",{onClick:u,id:c,onMouseEnter:this.hoverOnHandler,onMouseLeave:this.hoverOffHandler,style:i},a?l.toFixed(1)+"%":n.amount)}}]),n}(a.Component),w=Object(f.b)((function(e,n){var t=n.id,a=n.lineId;return{array:O(e),numberQty:j(e),illuminated:_(e),element:g(e,t,a)}}),(function(e,n){var t=n.id,a=n.lineId;return{onIncrease:function(){return e(function(e,n){return{type:p.INCREASE,payload:{id:e,lineId:n}}}(t,a))},onHover:function(n){return e({type:p.ILLUMINATE,payload:{illuminated:n}})}}}))(H),M=t(18),C=t.n(M),x=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={sumHover:!1},t.hoverHandler=function(){t.setState((function(e){return{sumHover:!e.sumHover}}))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.line,t=e.onRemove,a=e.id,u=this.state.sumHover,c=n.cells.reduce((function(e,n){return e+n.amount}),0);return r.a.createElement("tr",{id:a},n.cells.map((function(e){return r.a.createElement(w,{sumHover:u,sum:c,key:e.id,id:e.id,lineId:a})})),r.a.createElement("td",{onMouseEnter:this.hoverHandler,onMouseLeave:this.hoverHandler,className:C.a.sumCell},c),r.a.createElement("td",null,r.a.createElement("button",{onClick:t},"Remove")))}}]),n}(a.Component),k=Object(f.b)((function(e,n){var t=n.id;return{line:I(e,t)}}),(function(e,n){return{onRemove:function(){return e((t=n.id,{type:p.REMOVE_LINE,payload:{id:t}}));var t}}}))(x),D=t(19),V=t.n(D),T=Object(f.b)((function(e){return{averageRow:S(e)}}))((function(e){var n=e.averageRow;return r.a.createElement("tr",{className:V.a.avarage},n.map((function(e){return r.a.createElement("td",{key:e.id,id:e.id},e.amount)})))})),P=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).addHandler=function(){var e=t.props,n=e.lineLength;(0,e.onAdd)(v(1,n))},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.addHandler},"Add Line")}}]),n}(a.Component),U=Object(f.b)((function(e){return{lineLength:A(e)}}),(function(e){return{onAdd:function(n){return e(function(e){return{type:p.ADD_LINE,payload:{newLine:e}}}(n))}}}))(P),X=t(20),Y=t.n(X),q=Object(f.b)((function(e){return{array:O(e)}}))((function(e){var n=e.array;return n.length>0&&r.a.createElement("table",{className:Y.a.matrix},r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(k,{key:e.id,id:e.id})})),r.a.createElement(T,null),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(U,null)))))})),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(q,null))},J=t(9),Q=function(e,n){switch(n.type){case p.ADD_LINE:return n.payload.newLine;case p.REMOVE_LINE:return e.id!==n.payload.id;case p.INCREASE:return e.id===n.payload.lineId?Object(o.a)({},e,{cells:e.cells.map((function(e){return function(e,n){var t=n.type,a=n.payload;switch(t){case p.INCREASE:return e.id===a.id?Object(o.a)({},e,{amount:e.amount+=1}):e}}(e,n)}))}):e}},B=Object(J.b)({array:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.ADD_LINE:return[].concat(Object(N.a)(e),Object(N.a)(Q(void 0,n)));case p.REMOVE_LINE:return e.filter((function(e){return Q(e,n)}));case p.SAVE_ARRAY:return n.payload.array;case p.INCREASE:return e.map((function(e){return Q(e,n)}));default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.SAVE_PARAMS:return n.payload.params;default:return e}},illuminated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.ILLUMINATE:return n.payload.illuminated;default:return e}}}),G=Object(J.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(f.a,{store:G},r.a.createElement(F,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.36216727.chunk.js.map