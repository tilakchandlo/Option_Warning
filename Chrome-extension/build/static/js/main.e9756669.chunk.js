(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(30),a(31),a(32),a(7)),o=a(9),u=a(10),s=a(12),m=a(11),d=a(16),p=a(14),h=a(45),E=a(46),y=a(23),f=a(47),b=a(20),v=a(48),g=a(49),k=a(21),P=a.n(k),S={textAlign:"left",margin:"10px"},x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(b.a)({},t,a))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit({id:P.a.generate(),strikePrice:parseFloat(n.state.strikePrice),buySell:n.state.buySell,tradeType:n.state.tradeType,price:parseFloat(n.state.price)}),n.setState({strikePrice:"",buySell:"",tradeType:"",price:""})},n.state={id:"",strikePrice:"",buySell:"",tradeType:"",price:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.strikePrice,a=e.buySell,n=e.tradeType,l=e.price;return r.a.createElement(v.a,{onSubmit:this.handleSubmit,style:S},r.a.createElement(v.a.Group,{controlId:"formGridStrikePrice"},r.a.createElement(v.a.Label,null,"Strike Price"),r.a.createElement(v.a.Control,{type:"text",name:"strikePrice",value:t,onChange:this.handleChange})),r.a.createElement(v.a.Group,{controlId:"formGridTradeType"},r.a.createElement(v.a.Label,null,"Trade Type"),r.a.createElement(v.a.Row,null,r.a.createElement(y.a,null,r.a.createElement(v.a.Control,{as:"select",name:"buySell",value:a,onChange:this.handleChange},r.a.createElement("option",null,"Choose"),r.a.createElement("option",{value:"Buy"},"Buy"),r.a.createElement("option",{value:"Sell"},"Sell"))),r.a.createElement(y.a,null,r.a.createElement(v.a.Control,{as:"select",name:"tradeType",value:n,onChange:this.handleChange},r.a.createElement("option",null,"Choose"),r.a.createElement("option",{value:"Call"},"Call"),r.a.createElement("option",{value:"Put"},"Put"))))),r.a.createElement(v.a.Group,{controlId:"formGridPrice"},r.a.createElement(v.a.Label,null,"Price"),r.a.createElement(v.a.Control,{type:"text",name:"price",value:l,onChange:this.handleChange})),r.a.createElement("span",null,"Contract size: 100"),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"primary",type:"submit"},"Add"))}}]),a}(n.Component);function C(e,t){var a,n=0,r=Object(p.a)(t.entries());try{for(r.s();!(a=r.n()).done;){var l=Object(d.a)(a.value,2)[1],c=l.strikePrice,i=l.price,o=0;"Call"===l.tradeType?o=Math.max(e-c,0)-i:"Put"===l.tradeType&&(o=Math.max(c-e,0)-i),"Sell"===l.buySell&&(o=-o),n+=1*o*100}}catch(u){r.e(u)}finally{r.f()}return n}var O={cursor:"pointer"},T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrades=function(e){var t=[e.strikePrice].concat(Object(i.a)(n.state.strikePrices));t.sort((function(e,t){return e-t})),n.setState((function(a){return{trades:[e].concat(Object(i.a)(a.trades)),strikePrices:t}}))},n.handleDelete=function(e){n.setState((function(t){return{trades:t.trades.filter((function(t){return t.id!==e.id})),strikePrices:t.strikePrices.filter((function(t){return t!==e.strikePrice}))}}))},n.calculateProfitLoss=function(e){},n.state={trades:[],strikePrices:[0]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.trades,a=[],n=this.state.strikePrices,l=n[n.length-1]+1;n=[].concat(Object(i.a)(n),[l]);var c,o=Object(p.a)(n.entries());try{for(o.s();!(c=o.n()).done;){a=[C(Object(d.a)(c.value,2)[1],t)].concat(Object(i.a)(a))}}catch(P){o.e(P)}finally{o.f()}var u=a[0],s=a[1];a.shift();var m=0;m=u>s?Number.POSITIVE_INFINITY:Math.max.apply(null,a);var b=0,v=!1;u<s?(b=Number.NEGATIVE_INFINITY,v=!0):(b=Math.min.apply(null,a))<-1e4&&(v=!0);var g="",k="";return g=m<0?"-$"+Math.abs(m).toFixed(2):"$"+m.toFixed(2),k=b<0?"-$"+Math.abs(b).toFixed(2):"$"+b.toFixed(2),r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(y.a,null,r.a.createElement(x,{onSubmit:this.addTrades}),r.a.createElement(f.a,null,r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,"$",t.strikePrice," ",t.tradeType),r.a.createElement("td",null,"Sell"===t.buySell?"-$"+t.price.toFixed(2):"$"+t.price.toFixed(2)),r.a.createElement("td",{style:O,onClick:function(){return e.handleDelete(t)}},"x"))})))),r.a.createElement(f.a,{style:{textAlign:"left"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Max profit:"),r.a.createElement("td",null,g)),r.a.createElement("tr",null,r.a.createElement("td",null,"Max loss:"),r.a.createElement("td",null,k)))),v&&r.a.createElement("div",null,"Warning: system suggest not to trade. Exceed max loss of $10000."))))}}]),a}(n.Component),j={margin:"20px",width:"300px"};var I=function(){return r.a.createElement("div",{className:"App",style:j},r.a.createElement("h2",null,"Option Warning"),r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e9756669.chunk.js.map