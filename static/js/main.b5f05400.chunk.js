(this.webpackJsonpunwind=this.webpackJsonpunwind||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(25),l=n.n(s),o=(n(91),n(5)),r=n(44),c=n(45),u=n(27),h=n(71),m=n(70),d=n(148),p=n(147),v=n(152),b=n(155),f=n(153),C=n(154),k=n(145),E=n(69),g=n.n(E),O=(n(92),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1,inputMinutes:0,inputSeconds:0,time:{},seconds:0,buttonMessage:"Add"},a.handleClickOpen=a.handleClickOpen.bind(Object(u.a)(a)),a.handleClose=a.handleClose.bind(Object(u.a)(a)),a.timer=[],a.startTimer=a.startTimer.bind(Object(u.a)(a)),a.countDown=a.countDown.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"secondsToTime",value:function(e){var t=e%3600,n=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(n)}}},{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e})}},{key:"startTimer",value:function(e){var t=this;this.handleClose(),this.setState({buttonMessage:"On"});var n=0,a=parseInt(this.state.inputMinutes),i=parseInt(this.state.inputSeconds);isNaN(a)&&(a=0),isNaN(i)&&(i=0),n+=60*a+i,this.setState({seconds:n},(function(){t.state.seconds>0&&t.timer.push(setInterval(t.countDown,1e3))})),e.preventDefault()}},{key:"countDown",value:function(){if(this.timer.length>1)for(var e=0;e<this.timer.length-1;e++)clearInterval(this.timer[e]);var t=this.state.seconds-1;this.setState({time:this.secondsToTime(t),seconds:t}),t<=0&&(clearInterval(this.timer[this.timer.length-1]),alert("Your time is up!"),this.setState({buttonMessage:"Add"}))}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement(d.a,{variant:"outlined",color:"primary",id:"timer",size:"large",startIcon:a.createElement(g.a,null),onClick:this.handleClickOpen},this.state.buttonMessage),a.createElement(v.a,{open:this.state.open,onClose:this.handleClose},a.createElement(k.a,null,"Set a timer?"),a.createElement(f.a,null,a.createElement(C.a,null,"Alert when break is over and it's time to go back to work."),a.createElement(p.a,{autoFocus:!0,fullWidth:!0,autoComplete:"off",margin:"normal",id:"outlined-helperText",label:"Minutes",onChange:this.handleChange,name:"inputMinutes"})),a.createElement(b.a,null,a.createElement(d.a,{onClick:this.handleClose},"Cancel"),a.createElement(d.a,{onClick:this.startTimer},"Submit"))))}}]),n}(a.Component));n(101),n(102);var M=function(){return i.a.createElement("div",{className:"HeroContainer"},i.a.createElement("p",{className:"pre-text"},"Let's go to..."),i.a.createElement("p",{className:"location"},"Maldives?"),i.a.createElement(d.a,{variant:"contained",id:"start-button",onClick:(console.log("button clicked"),"")},"START"))};var S=function(){return i.a.createElement("div",null,i.a.createElement(M,null),i.a.createElement(O,null))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root"))},86:function(e,t,n){e.exports=n(104)},91:function(e,t,n){},92:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.b5f05400.chunk.js.map