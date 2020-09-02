(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{204:function(e,t,n){e.exports=n(407)},209:function(e,t,n){},210:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(65),o=n.n(i),s=(n(209),n(26)),c=n(38),l=n(28),u=n(27),h=(n(210),n(10)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event,n=[{name:"people coming",value:t.yes_rsvp_count},{name:"open slots",value:t.rsvp_limit-t.yes_rsvp_count}],a=["#8884d8","#37c0ba"];return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__name"},"Name: ",this.props.event.name),r.a.createElement("p",{className:"event__date"},"Date: ",this.props.event.local_date),r.a.createElement("p",{className:"event__Overview--groupName"},"Event Group:",this.props.event.group.name),this.props.event.venue&&r.a.createElement("p",{className:"event__Overview--venue"},"Location:",this.props.event.venue.name," | ",this.props.event.venue.address_1," ","| ",this.props.event.venue.city),t.rsvp_limit&&r.a.createElement(h.h,{height:300,width:300},r.a.createElement(h.g,null,r.a.createElement(h.f,{data:n,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:40,label:!0},n.map((function(e,t){return r.a.createElement(h.d,{key:"cell-".concat(t),fill:a[t]})}))),r.a.createElement(h.e,{iconSize:10,iconType:"triangle",layout:"horizontal",verticalAlign:"bottom",align:"center"}),r.a.createElement(h.i,null))),!t.rsvp_limit&&r.a.createElement("p",null,t.yes_rsvp_count," People coming"),e&&r.a.createElement("button",{className:"details-btn",onClick:this.handleShowDetails},"hide details"),!e&&r.a.createElement("button",{className:"details-btn",onClick:this.handleShowDetails},"show details")),e&&r.a.createElement("div",null,r.a.createElement("h3",null,"Event Information"),r.a.createElement("h4",null,r.a.createElement("a",{href:this.props.event.link,target:"blank"},"GoTo MeetUp")),r.a.createElement("div",{className:"eventInformation",dangerouslySetInnerHTML:{__html:this.props.event.description}})))}}]),n}(a.Component),p=function(e){var t=e.events;return r.a.createElement("ul",{className:"EventList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))},d=n(15),v=n(16),f=n.n(v),g=n(43),b=n(31),w=n(73),E=n.n(w),y={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2020-03-31",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}]};function k(e){return _.apply(this,arguments)}function _(){return(_=Object(g.a)(f.a.mark((function e(t){var n,a,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,S();case 4:if(!(n=e.sent)){e.next=13;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,E.a.get(a);case 9:return r=e.sent,(i=r.data).length&&localStorage.setItem("lastEvents",JSON.stringify(i)),e.abrupt("return",i);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(g.a)(f.a.mark((function e(t,n,a){var r,i,o,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",y);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,S();case 7:if(!(i=e.sent)){e.next=17;break}return o="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(o+="&lat="+t+"&lon="+n),a&&(o+="&page="+a),t&&n&&a&&(o+="&lat="+t+"&lon="+n+"&page="+a),e.next=15,E.a.get(o);case 15:return s=e.sent,e.abrupt("return",s.data);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t||(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=rhn3t2og7hsen40fqej3nr42e6&response_type=code&redirect_uri=https://enyelsequeira.github.io/meetup/"),x("get",t)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:x("renew",localStorage.getItem("refresh_token"))}function x(e,t){return N.apply(this,arguments)}function N(){return(N=Object(g.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://vzf28f072l.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://vzf28f072l.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,E.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=n(427),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"1em"}},r.a.createElement(z.a,{variant:"subtitle1",align:"center"},this.props.text))}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(D),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="green",a}return n}(D),M=n(430),I=n(431),T=n(432),W=n(429),L=Object(W.a)((function(e){var t;return{root:(t={display:"flex",alignItems:"center",margin:"auto",padding:"0 5px",width:400,height:40,borderRadius:"15px",border:"1px solid red",marginTop:20},Object(d.a)(t,e.breakpoints.down("xs"),{width:180,marginRight:35,height:40}),Object(d.a)(t,e.breakpoints.down("sm"),{width:180,marginRight:35,height:40}),Object(d.a)(t,e.breakpoints.only("md"),{width:250,marginRight:"auto",marginLeft:"10px",height:40}),t),input:{background:"white",margin:"auto",width:"80",color:"#e16162",borderRadius:"10px"},divider:{height:28,margin:4}}})),P=function(e){var t,n=e.updateEvents,i=Object(a.useState)(""),o=Object(b.a)(i,2),s=o[0],c=o[1],l=Object(a.useState)([]),u=Object(b.a)(l,2),h=u[0],m=u[1],p=Object(a.useState)(""),v=Object(b.a)(p,2),w=v[0],E=v[1],y=L(),_=function(){var e=Object(g.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,c(n),e.next=4,k(n);case 4:a=e.sent,(r=a.filter((function(e){return e.city.toLowerCase().startsWith(n.toLowerCase())}))).length&&n?(E(""),m(r)):(E("Sorry we can't find the city you are looking for. Please try Again"),m([]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(M.a,{container:!0,className:"CitySearch"},r.a.createElement(A,{text:w}),r.a.createElement(I.a,{component:"form",className:y.root},r.a.createElement(T.a,(t={type:"text",className:"city"},Object(d.a)(t,"className",y.input),Object(d.a)(t,"value",s),Object(d.a)(t,"onChange",_),Object(d.a)(t,"placeholder","Search For an Event"),Object(d.a)(t,"inputProps",{"aria-label":"search google maps"}),t))),r.a.createElement("ul",{className:"suggestions"},h.length?h.map((function(e){return r.a.createElement("li",{className:"suggestion",key:e.name_string,onClick:function(){return t=e.name_string,a=e.lat,r=e.lon,c(t),m([]),void n(a,r);var t,a,r}},e.name_string)})):null))},R=function(e){var t=Object(a.useState)(32),n=Object(b.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(""),c=Object(b.a)(s,2),l=c[0],u=c[1];return r.a.createElement(M.a,{container:!0,className:"numberOfEvents"},r.a.createElement("label",{className:"label"},"Number of Events "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:i,onChange:function(t){var n=t.target.value;o(n),e.updateEvents(null,null,n),u(n<1?"number of Events must be greater than 1":"")}}),r.a.createElement(C,{className:"error",text:l}))},J=n(178),U=n.n(J),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},e.updateEvents=function(t,n,a){t&&n?O(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?O(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):O(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e.countEventsOnADate=function(t){if(void 0===e.state.events.events)return 0;for(var n=0,a=0;a<e.state.events.events.length;a+=1)e.state.events.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=U()(),a=0;a<7;a+=1){var r=n.format("YYYY-MM-DD"),i=e.countEventsOnADate(r);t.push({date:r,number:i}),n.add(1,"days")}return t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement(M.a,{container:!0,className:"container",justify:"center"},r.a.createElement(M.a,{item:!0,className:"App"},r.a.createElement(P,{updateEvents:this.updateEvents}),this.state.events&&r.a.createElement(R,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(M.a,{item:!0,className:"chart"},r.a.createElement(h.h,{height:400},r.a.createElement(h.b,{data:this.getData(),fill:"#8884d8",margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(h.c,null),r.a.createElement(h.j,{type:"category",dataKey:"date",name:"date"}),r.a.createElement(h.k,{type:"number",dataKey:"number",name:"number of events"}),r.a.createElement(h.a,{type:"number",dataKey:"number",name:"number of events"}),r.a.createElement(h.e,null),r.a.createElement(h.a,{dataKey:"date",fill:"#8884d8"})))),r.a.createElement(M.a,{item:!0,className:"events"},this.state.events.events&&r.a.createElement(p,{events:this.state.events.events}))))}}]),n}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=n(179);o.a.render(r.a.createElement(G,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}(),K.config("58db6860e5a9407b94af6934c1c00257").install()}},[[204,1,2]]]);
//# sourceMappingURL=main.18cc81d0.chunk.js.map