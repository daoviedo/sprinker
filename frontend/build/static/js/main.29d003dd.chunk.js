(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(94),a(22)),o=a(143),u=a(144),m=a(150),s=a(147),h=a(15),d=a(12),f=a(18),E=a(19),y=a(20),g=a(140),p=a(102),v=a(141),b=a(101),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"turnOn",value:function(e){fetch("http://192.168.1.30:8080/on/"+e,{method:"POST"}).then((function(e){return console.log(e)}))}},{key:"turnOff",value:function(e){fetch("http://192.168.1.30:8080/off/"+e,{method:"POST"}).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginTop:30,textAlign:"center"}},r.a.createElement(b.a,{variant:"h6"},"Valve 1"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(1)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(1)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 2"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(2)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(2)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 3"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(3)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(3)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 4"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(4)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(4)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 5"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(5)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(5)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 6"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(6)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(6)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 7"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(7)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(7)},color:"secondary"},"OFF"))),r.a.createElement(b.a,{style:{marginTop:20},variant:"h6"},"Valve 8"),r.a.createElement(g.a,{item:!0,xs:1,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,"aria-label":"full width outlined button group"},r.a.createElement(p.a,{onClick:function(){return e.turnOn(8)},color:"primary"},"ON"),r.a.createElement(p.a,{onClick:function(){return e.turnOff(8)},color:"secondary"},"OFF"))))}}]),t}(n.Component),S=a(7),C=a(156),O=a(145),x=a(152),T=a(153),w=a(142);function j(e){return r.a.createElement("div",{style:{marginTop:30,textAlign:"center"}},r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.mon,onChange:e.handleChange("mon"),color:"primary"}),label:"Monday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.tue,onChange:e.handleChange("tue"),color:"primary"}),label:"Tuesday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.wed,onChange:e.handleChange("wed"),color:"primary"}),label:"Wednesday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.thu,onChange:e.handleChange("thu"),color:"primary"}),label:"Thursday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.fri,onChange:e.handleChange("fri"),color:"primary"}),label:"Friday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.sat,onChange:e.handleChange("sat"),color:"primary"}),label:"Saturday",labelPlacement:"top"})),r.a.createElement(g.a,{item:!0,xs:!0,style:{textAlign:"center"}},r.a.createElement(w.a,{control:r.a.createElement(T.a,{checked:e.state.sun,onChange:e.handleChange("sun"),color:"primary"}),label:"Sunday",labelPlacement:"top"}))),r.a.createElement(p.a,{onClick:e.next,variant:"contained",color:"primary",style:{marginTop:30}},"Next"))}var N=a(13),D=a(148),F=a(73);function W(e){return r.a.createElement("div",{style:{textAlign:"center",marginTop:40}},r.a.createElement(N.a,{utils:F.a},r.a.createElement(D.a,{margin:"normal",id:"time-picker",label:"Desired Time",value:e.time,onChange:e.handleDateChange,KeyboardButtonProps:{"aria-label":"change time"}})),r.a.createElement("div",{style:{width:140,margin:"auto",marginTop:30}},r.a.createElement(g.a,{item:!0,xs:!0,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0},r.a.createElement(p.a,{onClick:e.back,color:"primary"},"Back"),r.a.createElement(p.a,{onClick:e.next,color:"primary"},"Next")))))}var A=a(149);function V(e){return r.a.createElement("div",{style:{textAlign:"center",marginTop:50}},r.a.createElement(A.a,{label:"Duration(Minutes)",type:"number",variant:"outlined",value:e.duration,onChange:e.handleNumChange("duration")}),r.a.createElement("div",{style:{width:140,margin:"auto",marginTop:30}},r.a.createElement(g.a,{item:!0,xs:!0,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0},r.a.createElement(p.a,{onClick:e.back,color:"primary"},"Back"),r.a.createElement(p.a,{onClick:e.next,color:"primary"},"Next")))))}function M(e){return r.a.createElement("div",{style:{textAlign:"center",marginTop:50}},r.a.createElement(A.a,{label:"# of Valves(1-8)",type:"number",variant:"outlined",value:e.numValves,onChange:e.handleNumChange("numValves")}),r.a.createElement("div",{style:{width:140,margin:"auto",marginTop:30}},r.a.createElement(g.a,{item:!0,xs:!0,style:{margin:"auto"}},r.a.createElement(v.a,{variant:"contained",fullWidth:!0},r.a.createElement(p.a,{onClick:e.back,color:"primary"},"Back"),r.a.createElement(p.a,{onClick:e.setSchedule,color:"primary"},"Finish")))))}function P(e){var t=r.a.useState(0),a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",{style:{margin:"auto",marginTop:20,maxWidth:1200}},r.a.createElement(C.a,{activeStep:n},r.a.createElement(O.a,null,r.a.createElement(x.a,null,"Select Days of the Week")),r.a.createElement(O.a,null,r.a.createElement(x.a,null,"Select Start Time")),r.a.createElement(O.a,null,r.a.createElement(x.a,null,"Select Duration")),r.a.createElement(O.a,null,r.a.createElement(x.a,null,"Select # of Valves"))),function(t){switch(t){case 0:return r.a.createElement(j,{state:e.state,handleChange:e.handleChange,next:function(){return l((function(e){return e+1}))}});case 1:return r.a.createElement(W,{time:e.state.startTime,handleDateChange:e.handleDateChange,back:function(){return l((function(e){return e-1}))},next:function(){return l((function(e){return e+1}))}});case 2:return r.a.createElement(V,{handleNumChange:e.handleNumChange,duration:e.state.duration,back:function(){return l((function(e){return e-1}))},next:function(){return l((function(e){return e+1}))}});case 3:return r.a.createElement(M,{setSchedule:e.setSchedule,handleNumChange:e.handleNumChange,numValves:e.state.numValves,back:function(){return l((function(e){return e-1}))},next:function(){return l((function(e){return e+1}))}});default:return r.a.createElement("h1",null,"Unknown Step")}}(n))}var L=a(67),B=a.n(L),z=a(69),I=a.n(z),G=a(68),H=a.n(G),J=a(70),R=a.n(J);function U(e){return r.a.createElement(u.a,{style:{margin:"auto",marginTop:80,width:500,height:350}},r.a.createElement(b.a,{align:"center",variant:"h4"},"CURRENT SCHEDULE"),r.a.createElement(g.a,{container:!0,style:{marginLeft:36,marginTop:20}},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(B.a,{style:{fontSize:50}})),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(b.a,{style:{marginTop:11.5},variant:"h5"},function(e){var t="";for(var a in e)parseInt(a)===e.length-1?t+=e[a]:t=t+e[a]+"/";return t}(e.displayData.days)))),r.a.createElement(g.a,{container:!0,style:{marginLeft:36}},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(H.a,{style:{fontSize:50}})),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(b.a,{style:{marginTop:11.5},variant:"h5"},function(e){var t=" AM",a=parseInt(e.substring(0,2)),n=e.substring(2,5);return a>12?(a-=12,t=" PM",String(a)+n+t):e+t}(e.displayData.startTime)))),r.a.createElement(g.a,{container:!0,style:{marginLeft:36}},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(I.a,{style:{fontSize:50}})),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(b.a,{style:{marginTop:11.5},variant:"h5"},e.displayData.duration+" Minute(s)"))),r.a.createElement(g.a,{container:!0,style:{marginLeft:36,marginBottom:20}},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(R.a,{style:{fontSize:50}})),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(b.a,{style:{marginTop:11.5},variant:"h5"},e.displayData.stations+" Valve(s)"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(p.a,{onClick:e.delSchedule,variant:"contained",color:"primary"},"Modify Schedule")))}var K=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(S.a)({},e,t.target.checked))}},a.handleDateChange=function(e){a.setState({startTime:e})},a.handleNumChange=function(e){return function(t){a.setState(Object(S.a)({},e,t.target.value))}},a.state={mon:!1,tue:!1,wed:!1,thu:!1,fri:!1,sat:!1,sun:!1,scheduleDays:[],startTime:null,duration:"",numValves:"",currentSchedule:null},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSchedule()}},{key:"delSchedule",value:function(){fetch("http://192.168.1.30:8080/schedule/cancel",{method:"POST"}).then(this.setState({currentSchedule:"none"}))}},{key:"getSchedule",value:function(){var e=this;fetch("http://192.168.1.30:8080/schedule",{method:"GET"}).then((function(e){return e.json()})).then((function(t){500===t.status?e.setState({currentSchedule:"none"}):e.setState({currentSchedule:t})}))}},{key:"setSchedule",value:function(){var e=this;fetch("http://192.168.1.30:8080/schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({startTime:this.state.startTime.toTimeString().split(" ")[0].substring(0,5),duration:parseInt(this.state.duration),days:this.dayArray(),stations:parseInt(this.state.numValves)})}).then((function(){return e.getSchedule()}))}},{key:"dayArray",value:function(){var e=[];return!0===this.state.mon&&e.push("Mon"),!0===this.state.tue&&e.push("Tue"),!0===this.state.wed&&e.push("Wed"),!0===this.state.thu&&e.push("Thu"),!0===this.state.fri&&e.push("Fri"),!0===this.state.sat&&e.push("Sat"),!0===this.state.sun&&e.push("Sun"),e}},{key:"renderSchedule",value:function(){var e=this;switch(this.state.currentSchedule){case null:return r.a.createElement("div",null);case"none":return r.a.createElement(P,{setSchedule:function(){return e.setSchedule()},handleNumChange:this.handleNumChange,handleDateChange:this.handleDateChange,handleChange:this.handleChange,state:this.state});default:return r.a.createElement(U,{delSchedule:function(){return e.delSchedule()},displayData:this.state.currentSchedule})}}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderSchedule())}}]),t}(n.Component),X=a(146),$=a(72),q=a.n($),Q=a(71),Y=a.n(Q),Z=a(57),_=a.n(Z),ee=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={mockrain:null,weather:{},curTime:(new Date).toLocaleString(),loaded:!1},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.checkMockStatus(),this.getWeather(),setInterval((function(){e.setState({curTime:(new Date).toLocaleString()})}),1e3)}},{key:"getWeather",value:function(){var e=this;fetch("http://192.168.1.30:8080/weather",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({weather:t,loaded:!0})}))}},{key:"checkMockStatus",value:function(){var e=this;fetch("http://192.168.1.30:8080/mockrain",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({mockrain:t})}))}},{key:"changeMockStatus",value:function(){var e=this;fetch("http://192.168.1.30:8080/mockrain",{method:"POST"}).then((function(e){return e.json()})).then((function(t){return e.setState({mockrain:t})}))}},{key:"displaySwitch",value:function(){var e=this;return null===this.state.mockrain?r.a.createElement("div",null):r.a.createElement(w.a,{control:r.a.createElement(X.a,{checked:this.state.mockrain,onChange:function(){return e.changeMockStatus()}}),label:"Emulate Rain"})}},{key:"displayIcon",value:function(e){switch(e){case"cloudy":return r.a.createElement(Y.a,{style:{fontSize:70,marginLeft:20}});case"sunny":return r.a.createElement(_.a,{style:{fontSize:70,marginLeft:20}});case"rainy":return r.a.createElement(q.a,{style:{fontSize:70,marginLeft:20}});default:return r.a.createElement(_.a,{style:{fontSize:70,marginLeft:20}})}}},{key:"render",value:function(){return!1===this.state.loaded?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement(u.a,{style:{margin:"auto",width:500,marginTop:40}},r.a.createElement(b.a,{variant:"h5",style:{marginLeft:20,paddingTop:20}},"Houston, TX"),r.a.createElement(b.a,{style:{marginLeft:20}},this.state.curTime),r.a.createElement(b.a,{style:{marginLeft:20,marginBottom:20}},this.state.weather.icon),r.a.createElement(g.a,{container:!0,style:{paddingBottom:20}},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement("div",{style:{display:"flex"}},this.displayIcon(this.state.weather.icon),r.a.createElement(b.a,{variant:"h3",style:{marginTop:12.5,marginLeft:10}},Math.round(this.state.weather.temperature),"\xb0F"))),r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(b.a,{style:{marginTop:5},variant:"body2"},"Precipitation: "+100*this.state.weather.precipProbability+"%"),r.a.createElement(b.a,{variant:"body2"},"Humidity: "+100*this.state.weather.humidity+"%"),r.a.createElement(b.a,{variant:"body2"},"Wind: "+Math.round(this.state.weather.windSpeed)+" mph")))),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},this.displaySwitch()))}}]),t}(n.Component),te=Object(o.a)({root:{flexGrow:1}});function ae(){var e=te(),t=r.a.useState(0),a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{className:e.root},r.a.createElement(m.a,{value:n,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(s.a,{label:"Home",value:0}),r.a.createElement(s.a,{label:"Schedule",value:1}),r.a.createElement(s.a,{label:"Manual",value:2}))),function(e){switch(e){case 0:return r.a.createElement(ee,null);case 1:return r.a.createElement(K,null);case 2:return r.a.createElement(k,null);default:return r.a.createElement(ee,null)}}(n))}var ne=function(){return r.a.createElement("div",null,r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a(100)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.29d003dd.chunk.js.map