(this["webpackJsonpgrapl-fe"]=this["webpackJsonpgrapl-fe"]||[]).push([[0],{169:function(e,n,t){},218:function(e,n,t){},283:function(e,n){},287:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t(0),c=t.n(a),s=t(19),o=t.n(s),i=(t(218),t(189)),l=t(350),u=(t(169),t(13)),d=t(21),f=t(11),p=t.n(f),j=t(18),b=t(57),h=function(){return"http://"+window.location.hostname+":8900/"},g=function(){return"http://"+window.location.hostname+":5000/"},O=function(){return"http://"+window.location.hostname+":8123/"},m=t(139),x=t(327),v=t(355),y=Object(x.a)((function(e){return Object(v.a)({valErrorMsg:{marginLeft:".8rem",color:"red",fontSize:".75rem"}})})),w=h(),k=function(){var e=Object(j.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(w,"checkLogin"),{method:"post",credentials:"include"});case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return","True"===t.success);case 10:return e.prev=10,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),N=m.a().shape({userName:m.b().required("Username Required"),password:m.b().required("Password Required")}),_=function(e){var n=y(),t=c.a.useState({loginFailed:!1}),a=Object(d.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)("div",{className:"backgroundImage",children:[Object(r.jsx)("div",{className:"grapl",children:" Grapl "}),Object(r.jsx)("div",{className:"formContainer",children:Object(r.jsx)(b.c,{initialValues:{userName:"",password:""},validationSchema:N,onSubmit:function(){var e=Object(j.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(n.userName,n.password);case 2:return t=e.sent,e.next=5,P(n.userName,t);case 5:!0===e.sent?(window.history.replaceState("#/login","","#/"),window.location.reload(),console.log("Logged In")):o(Object(u.a)(Object(u.a)({},s),{},{loginFailed:!0}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.touched;return Object(r.jsxs)(b.b,{children:[Object(r.jsx)(b.a,{name:"userName",type:"text",placeholder:"Username"}),a.userName&&t.userName&&Object(r.jsx)("div",{className:n.valErrorMsg,children:t.userName}),Object(r.jsx)(b.a,{name:"password",type:"password",placeholder:"Password"})," ",Object(r.jsx)("br",{}),a.password&&t.password&&Object(r.jsx)("div",{className:n.valErrorMsg,children:t.password}),Object(r.jsx)("button",{className:"submitBtn",type:"submit",children:"Submit"}),s.loginFailed&&Object(r.jsx)("div",{className:n.valErrorMsg,children:"Unsuccessful Login"})]})}})})]})};function S(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(p.a.mark((function e(n){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new TextEncoder).encode(n),e.next=3,crypto.subtle.digest("SHA-256",t);case 3:return r=e.sent,a=Array.from(new Uint8Array(r)),e.abrupt("return",a.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(j.a)(p.a.mark((function e(n,t){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"f1dafbdcab924862a198deaa5b6bae29aef7f2a442f841da975f1c515529d254",e.next=3,S(t+"f1dafbdcab924862a198deaa5b6bae29aef7f2a442f841da975f1c515529d254"+n);case 3:r=e.sent,a=0;case 5:if(!(a<5e3)){e.next=12;break}return e.next=8,S(r);case 8:r=e.sent;case 9:a++,e.next=5;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(p.a.mark((function e(n,t){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(w,"login"),{method:"post",body:JSON.stringify({username:n,password:t}),headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return","True"===a.success);case 10:return e.prev=10,e.t0=e.catch(0),console.log("Login Error",e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),I=t(12),L=t(31),A=t(6),T=t(188),M=t(138),E=t(15),R=function(e,n){var t=e;"object"===typeof e&&(t=e.risk);var r=n.map((function(e){return e||0})).sort((function(e,n){return e-n}));if(void 0===t||0===t||0===r.length)return 0;var a,c=0,s=Object(E.a)(r);try{for(s.s();!(a=s.n()).done;){t>=a.value&&(c+=1)}}catch(o){s.e(o)}finally{s.f()}return Math.floor(c/r.length*100)},D=function(e,n){var t,r=Object(E.a)(n||[]);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.id===e)return a}}catch(c){r.e(c)}finally{r.f()}return null},z=function(e,n){var t=function(e,n){var t=D(e.source,n.nodes)||D(e.source.name,n.nodes),r=D(e.target,n.nodes)||D(e.target.name,n.nodes);if(!t||!r)return console.error("Missing srcNode/dstNode",t,e.source,r,n.nodes),0;var a=t.risk||0,c=r.risk||0;return Math.round((a+c)/2)}(e,n),r=Object(L.a)(n.nodes).map((function(e){return e.risk}));return R(t,r)},U=function(e){var n=0;e+="x";for(var t=parseInt(65745979961613.07),r=0;r<e.length;r++)n>t&&(n=parseInt(n/137)),n=131*n+e.charCodeAt(r);return n},q=function(e,n){return"Process"===e.nodeType?[31,185,128]:"File"===e.nodeType?[177,93,255]:n.rgb(e.nodeType)},B=function(e){return"hsl(".concat(40*(100-e)/100,", 100%, 50%)")},W=function(e,n){var t=z(e,n);return 0===t?"white":B(t)},G=function e(n,t,r){V(n,(function(a,c){t.has(n.uid+a+c.uid)||(t.add(n.uid+a+c.uid),r(n,a,c),e(c,t,r))}))},H=function(e,n){var t=new Set;V(e,(function(r,a){n(e,r,a),G(a,t,n)}))},J=function(e,n){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];if(Array.isArray(r)){var a,c=Object(E.a)(r);try{for(c.s();!(a=c.n()).done;){var s=a.value;void 0!==s.uid&&n(t,s)}}catch(o){c.e(o)}finally{c.f()}}else r&&void 0!==r.uid&&n(t,r)}},V=function(e,n){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=e[t];if(Array.isArray(r)){var a,c=Object(E.a)(r);try{for(c.s();!(a=c.n()).done;){var s=a.value;void 0!==s.uid&&n(t,s)}}catch(o){c.e(o)}finally{c.f()}}else r&&void 0!==r.uid&&n(t,r)}},Y=function e(n,t){t(n),J(n,(function(n,r){e(r,t)}))},Q=function e(n,t){J(n,(function(r,a){t(n,r,a),e(a,t)}))},$=g(),K=new Set(["Process","File","IpAddress","Asset","Risk","IpConnections","ProcessInboundConnections","ProcessOutboundConnections"]),X=function(e){var n,t=Object(E.a)(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.predicates&&H(r,(function(e,n,t){if(e.predicates&&!K.has(e.predicates.dgraph_type[0])){var r=Object(u.a)({},e.predicates);delete e.predicates,Object.keys(r).forEach((function(n){e[n]=r[n]}))}if(t.predicates&&!K.has(t.predicates.dgraph_type[0])){var a=Object(u.a)({},t.predicates);delete t.predicates,Object.keys(a).forEach((function(e){t[e]=a[e]}))}}))}}catch(a){t.e(a)}finally{t.f()}},Z=function(){var e=Object(j.a)(p.a.mark((function e(n){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ee(n),console.log("in retreive graph calling graphql edge",$),e.next=4,fetch("".concat($,"graphQlEndpoint/graphql"),{method:"post",body:JSON.stringify({query:t}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){return e.errors&&console.log("graphql query failed in retrieve graph, expand scope ln 63: ",e.errors),console.log("retrieveGraph res",e),e})).then((function(e){return e.data})).then((function(e){return e.lens_scope}));case 4:return r=e.sent,e.next=7,r;case 7:return a=e.sent,console.debug("LensWithScope: ",a),X(a.scope),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ee=function(e){return console.log("expanding scope for: ",e),'\n    {\n        lens_scope(lens_name: "'.concat(e,'") {\n            uid,\n            node_key,\n            lens_name,\n            lens_type,\n            dgraph_type,\n            scope {\n                ... on Process {\n                    uid,\n                    node_key, \n                    dgraph_type,\n                    process_name, \n                    process_id,\n                    children {\n                        uid, \n                        node_key, \n                        dgraph_type,\n                        process_name, \n                        process_id,\n                    }, \n                    risks {  \n                        uid,\n                        dgraph_type,\n                        node_key, \n                        analyzer_name, \n                        risk_score\n                    },\n                }\n            \n                ... on Asset {\n                    uid, \n                    node_key, \n                    dgraph_type,\n                    hostname,\n                    asset_ip{\n                        ip_address\n                    }, \n                    asset_processes{\n                        uid, \n                        node_key, \n                        dgraph_type,\n                        process_name, \n                        process_id,\n                    },\n                    files_on_asset{\n                        uid, \n                        node_key, \n                        dgraph_type,\n                        file_path\n                    }, \n                    risks {  \n                        uid,\n                        dgraph_type,\n                        node_key, \n                        analyzer_name, \n                        risk_score\n                    },\n                }\n\n                ... on File {\n                    uid,\n                    node_key, \n                    dgraph_type,\n                    risks {  \n                        uid,\n                        dgraph_type,\n                        node_key, \n                        analyzer_name, \n                        risk_score\n                    },\n                }\n\n                ... on PluginType {\n                    predicates,\n                }\n            }\n        }\n    }\n')},ne=function(e,n){var t=!1;return le(n,(function(r){Object.prototype.hasOwnProperty.call(e,r)||e[r]!==n[r]&&(e[r]=n[r],t=!0)})),t},te=function(e,n){if(!n.nodes&&!n.links)return null;var t,r={nodes:[],links:[]},a=!1,c=new Map,s=new Map,o=Object(E.a)(e.nodes);try{for(o.s();!(t=o.n()).done;){var i=t.value;c.set(i.uid,i)}}catch(w){o.e(w)}finally{o.f()}var l,u=Object(E.a)(n.nodes);try{for(u.s();!(l=u.n()).done;){var d=l.value,f=c.get(d.uid);f?ne(f,d)&&(a=!0):(c.set(d.uid,d),console.debug("new node added ",d),a=!0)}}catch(w){u.e(w)}finally{u.f()}var p,j=Object(E.a)(e.links);try{for(j.s();!(p=j.n()).done;){var b=p.value;if(b){var h=b.source.uid||b.source,g=b.target.uid||b.target;s.set(h+b.label+g,b)}}}catch(w){j.e(w)}finally{j.f()}var O,m=Object(E.a)(n.links);try{for(m.s();!(O=m.n()).done;){var x=O.value,v=x.source||x.source,y=x.target||x.target;s.get(v+x.label+y)||(console.debug("newlink",x),s.set(x.source+x.label+x.target,x),a=!0)}}catch(w){m.e(w)}finally{m.f()}return r.nodes=Array.from(c.values()),r.links=Array.from(s.values()),a?r:null},re=function(e){var n=e.dgraph_type||e.node_type;return n?Array.isArray(n)?n[0]:n:(console.warn("Unable to find type for node ",e),"Unknown")};function ae(e,n){return Math.floor(Math.random()*(n-e+1)+e)}var ce=function(e){var n=[],t=[],r=new Map;Q(e,(function(e,n,r){if("scope"!==n){if("Unknown"===re(e))return;if("Unknown"===re(r))return;if("Risk"===re(e))return;if("Risk"===re(r))return;t.push({source:e.uid,label:n,target:r.uid})}})),Y(e,(function(e){var n=re(e);if("Unknown"!==n&&"Risk"!==n){var t=function(e,n){console.log("nodetype",e);var t=n;switch(e){case"Process":return t.process_name||t.process_id||"Process";case"Asset":return t.hostname||"Asset";case"File":return t.file_path||"File";case"IpAddress":return t.external_ip||"IpAddress";case"Lens":return t.lens_name||"Lens";default:return e||""}}(n,e),a=Object(u.a)({},e);a.risk=a.risk||0,a.analyzer_names=a.analyzer_names||"";var c,s=Object(E.a)(e.risks||[]);try{for(s.s();!(c=s.n()).done;){var o=c.value;a.risk+=o.risk_score||0,a.analyzer_names&&o.analyzer_name&&(a.analyzer_names+=", "),a.analyzer_names+=o.analyzer_name||""}}catch(l){s.e(l)}finally{s.f()}J(e,(function(e,n){a[e]=void 0}));var i=Object(u.a)(Object(u.a)({name:e.uid,x:200+ae(1,5),y:150+ae(1,5)},a),{},{id:e.uid,nodeType:n,nodeLabel:t});r.set(e.uid,i)}}));var a,c=Object(E.a)(r.values());try{for(c.s();!(a=c.n()).done;){var s=a.value;n.push(s)}}catch(o){c.e(o)}finally{c.f()}return{nodes:n,links:t}},se=(t(283),function(e,n,t){var r=t<.5?t*(1+n):t+n-t*n,a=2*t-r;return[(e/=360)+1/3,e,e-1/3].map((function(e){return e<0&&e++,e>1&&e--,e=e<1/6?a+6*(r-a)*e:e<.5?r:e<2/3?a+6*(r-a)*(2/3-e):a,Math.round(255*e)}))}),oe=function(e){return"[object Array]"===Object.prototype.toString.call(e)},ie=function e(n){var t=this;Object(A.a)(this,e),this.hsl=function(e){var n,r,a=t.hash(e);if(t.hueRanges.length){var c=t.hueRanges[a%t.hueRanges.length];n=a/t.hueRanges.length%727*(c.max-c.min)/727+c.min}else n=a%359;return a=parseInt(a/360),r=t.S[a%t.S.length],a=parseInt(a/t.S.length),[n,r,t.L[a%t.L.length]]},this.rgb=function(e){var n=t.hsl(e);return se.apply(t,n)};var r=[(n=n||{}).lightness,n.saturation].map((function(e){return oe(e=e||[.35,.5,.65])?e.concat():[e]}));this.L=r[0],this.S=r[1],"number"===typeof n.hue&&(n.hue={min:n.hue,max:n.hue}),"object"!==typeof n.hue||oe(n.hue)||(n.hue=[n.hue]),"undefined"===typeof n.hue&&(n.hue=[]),this.hueRanges=n.hue.map((function(e){return{min:"undefined"===typeof e.min?0:e.min,max:"undefined"===typeof e.max?360:e.max}})),this.hash=n.hash||U},le=function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(Array.isArray(e[t])?e[t].length>0&&void 0===e[t][0].uid&&n(t):n(t))},ue=function(){var e=Object(j.a)(p.a.mark((function e(n,t,r){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return console.log("Attempted to fetch empty lensName"),e.abrupt("return");case 3:return a=t.curLensName,e.next=6,Z(n).then(function(){var e=Object(j.a)(p.a.mark((function e(c){var s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=ce(c),console.debug("state: ",t),console.debug("update",s),null!==(o=te(t.graphData,s))&&(a===n?r(Object(u.a)(Object(u.a)({},t),{},{curLensName:n,graphData:o})):(console.log("Switched lens, updating graph",t.curLensName,"ln",n),r(Object(u.a)(Object(u.a)({},t),{},{curLensName:n,graphData:s}))));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.error("Failed to retrieveGraph ",e)}));case 6:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),de=function(e){var n=e.lensName,t=e.setCurNode,s=c.a.useState(function(e){return{graphData:{nodes:[],links:[]},curLensName:e,intervalMap:{}}}(n)),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){u.current.d3Force("link",M.b()),u.current.d3Force("collide",M.a(22)),u.current.d3Force("charge",M.c()),u.current.d3Force("box",(function(){i.graphData.nodes.forEach((function(e){var n=e.x||0,t=e.y||0;Math.abs(n)>1e3&&(e.vx*=-1),Math.abs(t)>1e3&&(e.vy*=-1)}))}))}),[i]),Object(a.useEffect)((function(){var e=setInterval(Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}return console.debug("updating graph"),e.next=4,ue(n,i,l);case 4:case"end":return e.stop()}}),e)}))),1e3);return console.debug("setting lensName",n),function(){clearInterval(e)}}),[n,i,l]);var f=i.graphData,b=new ie({});return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(T.a,{graphData:f,nodeLabel:function(e){return e.nodeLabel},enableNodeDrag:!0,linkDirectionalParticles:1,linkDirectionalParticleWidth:function(e){return function(e,n){var t=z(e,n);return t>=75?5:t>=50?4:t>=25?3:2}(e,f)},linkDirectionalParticleColor:function(e){return W(e,f)},linkDirectionalParticleSpeed:.005,onNodeClick:function(e,n){t(e)},linkDirectionalArrowLength:8,linkWidth:4,linkDirectionalArrowRelPos:function(e){return function(e,n){var t=D(e.target.name,n.nodes);if(null===t||0===t.risk)return 1;var r=Object(L.a)(n.nodes).map((function(e){return e.risk})),a=R(t.risk,r);return 0===a?1:a>=75?.95:a>=50?.9:a>=25?.85:1}(e,f)},linkCanvasObjectMode:function(){return"after"},linkCanvasObject:function(e,n){var t=e.source,r=e.target;if(e.color=W(e,f),"object"===typeof t&&"object"===typeof r){var a=Object.assign.apply(Object,Object(L.a)(["x","y"].map((function(e){return Object(I.a)({},e,t[e]+(r[e]-t[e])/2)})))),c={x:r.x-t.x,y:r.y-t.y},s=Math.sqrt(Math.pow(c.x,2)+Math.pow(c.y,2))-96,o=Math.atan2(c.y,c.x);o>Math.PI/2&&(o=-(Math.PI-o)),o<-Math.PI/2&&(o=-(-Math.PI-o));var i=function(e){return"children"===e?"executed":e}(e.label);n.font="50px Arial";var l=Math.min(8,s/n.measureText(i).width);n.font="".concat(l+5,"px Arial");var u=n.measureText(i).width,d=[u+=Math.round(.25*u),l].map((function(e){return e+.2*l}));n.save(),n.translate(a.x,a.y),n.rotate(o),n.fillStyle="rgb(115,222,255,1)",n.fillRect.apply(n,[-d[0]/2,-d[1]/2].concat(Object(L.a)(d))),n.textAlign="center",n.textBaseline="middle",n.fillStyle="white",n.fillText(i,.75,3),n.restore()}},nodeCanvasObject:function(e,n,t){var r=function(e,n){var t=Object(L.a)(n.nodes).map((function(e){return e.risk})),r=R(e.risk,t);return r>=75?6:r>=25?5:4}(e,f);n.save(),n.beginPath(),n.arc(e.x,e.y,1.3*r,0,2*Math.PI,!1),n.fillStyle=function(e,n,t){var r=Object(L.a)(n.nodes).map((function(e){return e.risk})),a=R(e.risk,r);if(0===a){var c=q(e,t);return"rgba(".concat(c[0],", ").concat(c[1],", ").concat(c[2],", 1)")}return B(a)}(e,f,b),n.fill(),n.restore(),n.save(),n.beginPath(),n.arc(e.x,e.y,1.2*r,0,2*Math.PI,!1);var a=q(e,b);n.fillStyle="rgba(".concat(a[0],", ").concat(a[1],", ").concat(a[2],", 1)"),n.fill(),n.restore();var c=e.nodeLabel,s=15/t;n.font="".concat(s,"px Arial");var o=[n.measureText(c).width,s].map((function(e){return e+.2*s}));n.fillStyle="rgba(48, 48, 48, 0.8)",n.fillRect.apply(n,[e.x-o[0]/2,e.y-o[1]/2].concat(Object(L.a)(o))),n.textAlign="center",n.textBaseline="middle",n.fillStyle="white",n.fillText(c,e.x,e.y)},ref:u})})},fe=t(338),pe=t(339),je=t(336),be=t(337),he=t(333),ge=t(335),Oe=Object(x.a)({root:{fontSize:".75em"},nodeTable:{minWidth:450},tableHeader:{fontSize:".85rem",backgroundColor:"#595959"},nodeTableData:{fontSize:".75rem"}});function me(e,n){return e?Object(r.jsx)(he.a,{children:Object(r.jsxs)(ge.a,{children:[Object(r.jsx)(je.a,{align:"left",className:n.tableHeader,children:Object(r.jsx)("b",{children:" PROPERTY "})}),Object(r.jsx)(je.a,{align:"left",className:n.tableHeader,children:Object(r.jsx)("b",{children:" VALUE "})})]})}):Object(r.jsx)(r.Fragment,{})}var xe=function(e){var n=e.node,t=Oe(),a=new Set(["id","dgraph.type","dgraph_type","__indexColor","risks","uid","scope","name","nodeType","nodeLabel","x","y","index","vy","vx","fx","fy"]);V(n,(function(e,n){a.add(e)}));var c={};return le(n,(function(e){var t=n[e];a.has(e)||t&&(e.includes("_time")?c[e]=new Date(t).toLocaleString():c[e]=t)})),Object(r.jsx)(be.a,{children:Object(r.jsxs)(fe.a,{className:t.nodeTable,children:[me(n,t),Object(r.jsx)(pe.a,{children:Object.entries(c).map((function(e){var a=Object(d.a)(e,2),c=a[0],s=a[1];return Object(r.jsxs)(ge.a,{children:[Object(r.jsx)(je.a,{className:t.nodeTableData,align:"left",children:Object(r.jsx)("b",{children:c})}),Object(r.jsx)(je.a,{className:t.nodeTableData,align:"left",children:s})]},n.node_key+c)}))})]})})},ve=t(340),ye=t(155),we=t.n(ye),ke=t(183),Ne=t.n(ke),_e=t(184),Se=t.n(_e),Ce=t(344),Fe=t(352),Pe=Object(x.a)({root:{fontSize:"1rem"},button:{width:".005%",color:"white",backgroundColor:"#424242"},title:{fontSize:"25px",color:"#ffffff"},icon:{color:"#42C6FF",margin:"15px 0 0 10px"},expand:{color:"#42C6FF",margin:"0px"},header:{display:"flex"},table:{minWidth:450},lensName:{fontSize:"16px"},pagination:{margin:".5rem",backgroundColor:"#595959"}});function Ie(e){var n=Pe();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(ge.a,{children:Object(r.jsx)(je.a,{component:"th",scope:"row",children:Object(r.jsx)(ve.a,{className:n.lensName,onClick:function(){e.setLens(e.lens)},children:e.lens_type+" :\t\t"+e.lens+"\t\t"+e.score})})},e.uid)})}var Le=function(e,n,t,a,c,s,o){return Object(r.jsxs)(be.a,{children:[Object(r.jsx)(Fe.a,{className:o.pagination,"aria-label":"pagination",rowsPerPageOptions:[5,10,25],component:"div",count:e.lenses.length,rowsPerPage:t,page:n,onChangePage:a,onChangeRowsPerPage:c}),e.lenses.slice(n*t,n*t+t).map((function(e){return Object(r.jsx)(fe.a,{className:o.table,"aria-label":"lens table",children:Object(r.jsx)(pe.a,{children:Object(r.jsx)(Ie,{uid:e.uid,lens:e.lens_name,lens_type:e.lens_type,score:e.score,setLens:s},Number(e.uid))})},Number(e.uid))}))]})};function Ae(e){var n=e.setLens,t=Object(a.useState)({toggled:!0,lenses:[],first:100,offset:0}),c=Object(d.a)(t,2),s=c[0],o=c[1],i=Pe(),l=Object(a.useState)(0),f=Object(d.a)(l,2),p=f[0],j=f[1],b=Object(a.useState)(10),h=Object(d.a)(b,2),g=h[0],O=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){console.log("Fetching lenses"),Me(s.first,s.offset).then((function(e){if(e.lenses&&e.lenses!==s.lenses){var n=s.lenses.concat(e.lenses);o(Object(u.a)(Object(u.a)({},s),{},{offset:s.offset+e.lenses.length||0,lenses:n}))}}))}),1e3);return function(){return clearInterval(e)}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:i.header,children:[Object(r.jsxs)("b",{className:i.title,children:[Object(r.jsx)(Ne.a,{className:i.icon}),"LENSES"]}),Object(r.jsx)(ve.a,{className:i.button,onClick:function(){o(Object(u.a)(Object(u.a)({},s),{},{toggled:!s.toggled}))},children:Object(r.jsx)(we.a,{className:i.expand})})]}),Object(r.jsx)("div",{className:"lensToggle",children:s.toggled&&Le(s,p,g,(function(e,n){j(n)}),(function(e){console.log("Handle Row Event",e),O(parseInt(e.target.value,10)),j(0)}),n,i)}),Object(r.jsx)(Ce.a,{})]})}var Te=g(),Me=function(){var e=Object(j.a)(p.a.mark((function e(n,t){var r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="\n        {\n            lenses(first: ".concat(n,", offset: ").concat(t,") {\n                uid,\n                node_key,\n                lens_name,\n                score, \n                lens_type,\n            }\n        }\n    "),console.log("calling graphql_edge: "+Te+"with query: "+r),e.next=4,fetch("".concat(Te,"graphQlEndpoint/graphql"),{method:"post",body:JSON.stringify({query:r}),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){return e.errors&&(console.error("lenses failed",e.errors),e.data={lenses:[]}),e})).then((function(e){return e.data}));case 4:return a=e.sent,e.next=7,a;case 7:return c=e.sent,console.log("queried graphql_edge in engagement view content",c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Ee=function(e){var n=e.node;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(xe,{node:n})})};function Re(e){var n=e.curNode,t=Object(a.useState)(!0),c=Object(d.a)(t,2),s=c[0],o=c[1],i=Pe();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:i.header,children:[Object(r.jsxs)("b",{className:i.title,children:[Object(r.jsx)(Se.a,{className:i.icon})," NODE"]}),Object(r.jsx)(ve.a,{className:i.button,onClick:function(){o((function(e){return!e}))},children:Object(r.jsx)(we.a,{className:i.expand})})]}),Object(r.jsx)("div",{className:"nodeToggle",children:s&&n&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Ee,{node:n})})})]})})}function De(e){var n=e.setLens,t=e.curNode;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ae,{setLens:n}),Object(r.jsx)(Re,{curNode:t})]})}var ze=t(7),Ue=t(354),qe=t(349),Be=t(342),We=t(343),Ge=t(341),He=t(185),Je=t.n(He),Ve=t(132),Ye=t.n(Ve),Qe=t(48),$e=t(345),Ke=t(346),Xe=t(348),Ze=t(347),en=Object(x.a)({root:{maxWidth:345,postion:"fixed"},button:{border:"2px solid white",backgroundColor:"#42c6ff"}});function nn(){var e=en();return Object(r.jsxs)($e.a,{variant:"outlined",className:e.root,children:[Object(r.jsx)(Ke.a,{children:Object(r.jsx)(Ze.a,{children:Object(r.jsx)(We.a,{variant:"body2",color:"textSecondary",component:"p",children:"You are not logged in and changes cannot be saved."})})}),Object(r.jsx)(Xe.a,{children:Object(r.jsx)(ve.a,{className:e.button,size:"small",onClick:function(){window.history.replaceState("#/","","#/login"),window.location.reload()},children:"Login"})})]})}var tn=500,rn=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},button:{backgroundColor:"#42C6FF",margin:"0.25rem",padding:"0.20rem"},loggedIn:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(tn,"px)"),marginLeft:tn,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:"#42C6FF"},hide:{display:"none"},drawer:{width:tn,flexShrink:0},drawerPaper:{width:tn},drawerHeader:Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-500},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},lensName:{color:"#EAFDFF",fontSize:"1.5rem"},header:{fontSize:"35px"},headerContent:{width:"100vw",display:"flex",justifyContent:"space-between"},close:{color:"#42C6FF"},link:{color:"#42C6FF",textDecoration:"none"}})}));function an(e){var n=e.setLens,t=e.curLens,a=e.curNode,s=rn(),o=c.a.useState(!0),i=Object(d.a)(o,2),l=i[0],u=i[1];return Object(r.jsxs)("div",{className:s.root,children:[Object(r.jsx)(qe.a,{position:"fixed",className:Object(ze.a)(s.appBar,Object(I.a)({},s.appBarShift,l)),children:Object(r.jsxs)(Be.a,{children:[Object(r.jsx)(Ge.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(ze.a)(s.menuButton,l&&s.hide),children:"\u2630"}),Object(r.jsxs)("div",{className:s.headerContent,children:[Object(r.jsx)(We.a,{variant:"h5",noWrap:!0,children:Object(r.jsx)("b",{className:s.header,children:" GRAPL "})}),Object(r.jsxs)(Qe.b,{to:"/",className:s.link,children:[" ",Object(r.jsx)(Ye.a,{})," "]})]})]})}),Object(r.jsxs)(Ue.a,{className:s.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:s.drawerPaper},children:[Object(r.jsx)("div",{className:s.drawerHeader,children:Object(r.jsx)(ve.a,{onClick:function(){u(!1)},children:Object(r.jsx)(Je.a,{className:s.close})})}),Object(r.jsx)(Ce.a,{}),Object(r.jsx)(De,{setLens:n,curNode:a})]}),Object(r.jsxs)("main",{className:Object(ze.a)(s.content,Object(I.a)({},s.contentShift,l)),children:[Object(r.jsx)("div",{className:s.drawerHeader}),Object(r.jsx)("h3",{className:s.lensName,children:t||""}),Object(r.jsx)(We.a,{paragraph:!0})]})]})}var cn=function(){var e=rn(),n=c.a.useState({curLens:"",curNode:null,loggedIn:!0,renderedOnce:!1}),t=Object(d.a)(n,2),s=t[0],o=t[1];Object(a.useEffect)((function(){if(!s.renderedOnce){var e=setInterval(Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){e||console.warn("Logged out"),o(Object(u.a)(Object(u.a)({},s),{},{loggedIn:e||!1,renderedOnce:!0}))}));case 2:case"end":return e.stop()}}),e)}))),2e3);return function(){clearInterval(e)}}}),[s,o]);var i=s.loggedIn;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(an,{setLens:function(e){return o(Object(u.a)(Object(u.a)({},s),{},{curLens:e}))},curLens:s.curLens,curNode:s.curNode}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:e.loggedIn,children:i?"":Object(r.jsx)(nn,{})}),Object(r.jsx)(de,{lensName:s.curLens,setCurNode:function(e){o(Object(u.a)(Object(u.a)({},s),{},{curNode:e}))}})]})]})},sn=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},header:{justifyContent:"space-between"},link:{color:"#42C6FF",textDecoration:"none"}})})),on=function(e){var n=e.displayBtn,t=sn();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(qe.a,{position:"static",children:Object(r.jsxs)(Be.a,{className:t.header,children:[Object(r.jsx)(We.a,{variant:"h6",children:"GRAPL"}),n&&Object(r.jsx)(Qe.b,{to:"/",className:t.link,children:Object(r.jsx)(Ye.a,{})})]})})})},ln=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},button:{backgroundColor:"#42C6FF",margin:"0.25rem",padding:"0.25rem"},welcome:{width:"70%",textAlign:"center",backgroundColor:"#373740",height:"100vh",color:"white"},loggedIn:{display:"flex",justifyContent:"flex-end"},nav:{margin:"2rem",width:"30%",display:"flex",flexDirection:"column"},dashboard:{display:"flex",flexDirection:"row"},link:{color:"white",textDecoration:"none",padding:".75rem",backgroundColor:"#42C6FF",margin:"1rem",textAlign:"center",borderRadius:".35rem",textTransform:"uppercase",fontWeight:"bolder"}})})),un=h(),dn=function(){var e=Object(j.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(un,"getNotebook"),{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){return e.errors&&console.error("Unable to retrieve Sagemaker url",e.errors),e}));case 2:return n=e.sent,t=n.success.notebook_url,window.open(t),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fn=ln;function pn(){var e=fn(),n=Object(a.useState)({loggedIn:!0,renderedOnce:!1}),t=Object(d.a)(n,2),c=t[0],s=t[1];Object(a.useEffect)((function(){if(!c.renderedOnce){var e=setInterval(Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){e||console.warn("Logged out"),s({loggedIn:e||!1,renderedOnce:!0})}));case 2:case"end":return e.stop()}}),e)}))),2e3);return function(){clearInterval(e)}}}),[c,s]),console.log("state - loggedin",c.loggedIn);var o=c.loggedIn;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(on,{displayBtn:!1}),Object(r.jsxs)("div",{className:e.dashboard,children:[Object(r.jsxs)("section",{className:e.nav,children:[Object(r.jsx)(Qe.b,{to:"/engagements",className:e.link,children:" Engagements "}),Object(r.jsx)(Qe.b,{to:"/plugins",className:e.link,children:" Upload Plugin "}),Object(r.jsx)(ve.a,{onClick:dn,className:e.link,children:" Open Engagement Notebook "})]}),Object(r.jsxs)("section",{className:e.welcome,children:[Object(r.jsx)("div",{className:e.loggedIn,children:o?"":Object(r.jsx)(nn,{})}),Object(r.jsx)("h1",{children:" Welcome! "})]})]})]})}var jn=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex"},formContainer:{color:"white",margin:"1rem"},btn:{backgroundColor:"#42C6FF",margin:"0.25rem",padding:"0.25rem",borderRadius:"6px"},loggedIn:{display:"flex",justifyContent:"flex-end"},inputFiles:{border:"none",width:"35vw"},upload:{display:"flex"},succMsg:{color:"#03dac6"},errMsg:{color:"#CF6679"},pluginTable:{backgroundColor:"#292929",margin:"1em",width:"50%",height:"100%",boxShadow:" 1.5px 1.5px #000000"},uploadFormContainer:{backgroundColor:"#292929",margin:"1em",width:"50%",height:"100%",boxShadow:"1.5px 1.5px #000000",display:"flex"},uploadForm:{fontFamily:"Arial",display:"flex",fontSize:".75rem"}})})),bn=t(186),hn=t.n(bn),gn=function(){var e=Object(j.a)(p.a.mark((function e(){var n,t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O(),"listModelPlugins"),{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.prev=6,r=t.success.plugin_list,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(6),console.warn(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(){return e.apply(this,arguments)}}(),On=function(){var e=Object(j.a)(p.a.mark((function e(n){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O(),"deleteModelPlugin"),{method:"post",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({plugins_to_delete:[n]})});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),mn=function(){var e=Object(j.a)(p.a.mark((function e(n){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O(),"deploy"),{method:"post",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.success.Success);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),xn=function(){var e=Object(j.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var r=new FileReader;return r.addEventListener("load",(function(n){if(null!==n.target){var r=n.target.result;if(null===r)return console.warn("Read pluginfile was null"),void t(null);e("string"===typeof r?r:(new TextDecoder).decode(r))}else console.warn("onload event was null")})),r.readAsText(n)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),vn=function(e){var n=e.status,t=jn();return!0===n?Object(r.jsx)("div",{className:t.succMsg,children:"Plugins Successfully Deployed!"}):!1===n?Object(r.jsx)("div",{className:t.errMsg,children:"Upload Unsuccessful"}):Object(r.jsx)("div",{})},yn=function(){var e=c.a.useState({curFiles:null,success:null}),n=Object(d.a)(e,2),t=n[0],a=n[1],s=jn();return Object(r.jsxs)("div",{className:s.formContainer,children:[Object(r.jsx)("h4",{children:"UPLOAD DIRECTORY WITH PLUGINS:"}),Object(r.jsx)(b.c,{initialValues:{filename:""},onSubmit:function(e){var n={},r=[],c=t.curFiles;if(null!==c){var s,o=Object(E.a)(c);try{var i=function(){var e=s.value,t=xn(e).then((function(t){var r=e.webkitRelativePath||e.mozRelativePath;n[r]=t}));r.push(t)};for(o.s();!(s=o.n()).done;)i()}catch(d){o.e(d)}finally{o.f()}var l=!0;Promise.all(r).then((function(){return mn({plugins:n})})).then((function(e){l=l&&e})).then((function(){return a(Object(u.a)(Object(u.a)({},t),{},{success:l}))}))}else console.warn("Attempted to upload files without selecting any")},children:Object(r.jsxs)(b.b,{className:s.uploadForm,children:[Object(r.jsx)(b.a,{className:s.inputFiles,name:"plugin",directory:"",webkitdirectory:"",mozdirectory:"",type:"file",multiple:!0,placeholder:"Plugin",onChange:function(e){a(Object(u.a)(Object(u.a)({},t),{},{curFiles:e.currentTarget.files}))}}),Object(r.jsx)(ve.a,{className:"submitBtn",type:"submit",children:Object(r.jsx)(hn.a,{className:s.btn})})]})}),Object(r.jsx)("br",{}),Object(r.jsx)(vn,{status:t.success})]})},wn=t(187),kn=t.n(wn),Nn=function(){var e=jn(),n=c.a.useState({rows:[],toggle:!0}),t=Object(d.a)(n,2),s=t[0],o=t[1],i=Object(a.useState)(0),l=Object(d.a)(i,2),f=l[0],b=l[1],h=Object(a.useState)(10),g=Object(d.a)(h,2),O=g[0],m=g[1],x=O-Math.min(O,s.rows.length-f*O);return Object(a.useEffect)((function(){var e=setInterval(Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gn().then((function(e){o({toggle:s.toggle,rows:e})}));case 2:case"end":return e.stop()}}),e)}))),1e3);return function(){return clearInterval(e)}}),[s.toggle]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(be.a,{children:[Object(r.jsxs)(fe.a,{children:[Object(r.jsx)(he.a,{children:Object(r.jsx)(ge.a,{children:Object(r.jsx)(je.a,{align:"left",children:"PLUGINS"})},"plugin")}),Object(r.jsxs)(pe.a,{"aria-label":"PluginTable",children:[s.rows.slice(f*O,f*O+O).map((function(n){return Object(r.jsx)(ge.a,{children:Object(r.jsxs)(je.a,{align:"right",children:[n,Object(r.jsx)(ve.a,{onClick:function(){On(n).then((function(){o(Object(u.a)(Object(u.a)({},s),{},{toggle:s.toggle&&!1})),console.log("Plugin Deleted")}))},children:Object(r.jsx)(kn.a,{className:e.btn})})]})},n)})),x>0&&Object(r.jsx)(ge.a,{style:{height:53*x},children:Object(r.jsx)(je.a,{colSpan:6})})]})]}),Object(r.jsx)(Fe.a,{"aria-label":"pagination",rowsPerPageOptions:[5,10,25],component:"div",count:s.rows.length,rowsPerPage:O,page:f,onChangePage:function(e,n){b(n)},onChangeRowsPerPage:function(e){console.log("Event",e),m(parseInt(e.target.value,10)),b(0)}})]})})},_n=function(){var e=jn(),n=Object(a.useState)({loggedIn:!0,renderedOnce:!1}),t=Object(d.a)(n,2),c=t[0],s=t[1];Object(a.useEffect)((function(){if(!c.renderedOnce){var e=setInterval(Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().then((function(e){e||console.warn("Logged Out"),s({loggedIn:e||!1,renderedOnce:!0})}));case 2:case"end":return e.stop()}}),e)}))),2e3);return function(){clearInterval(e)}}}),[c,s]);var o=c.loggedIn;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(on,{displayBtn:!0}),Object(r.jsx)("div",{className:e.loggedIn,children:o?"":Object(r.jsx)(nn,{})}),Object(r.jsxs)("div",{className:e.upload,children:[Object(r.jsxs)("div",{className:e.uploadFormContainer,children:[Object(r.jsx)(yn,{}),Object(r.jsx)("div",{id:"message"})]}),Object(r.jsx)("div",{className:e.pluginTable,children:Object(r.jsx)(Nn,{})})]})]})},Sn=t(24);function Cn(){return console.log("Grapl loaded"),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Qe.a,{children:Object(r.jsxs)(Sn.c,{children:[Object(r.jsx)(Sn.a,{exact:!0,path:"/login",component:_}),Object(r.jsx)(Sn.a,{exact:!0,path:"/",component:pn}),Object(r.jsx)(Sn.a,{exact:!0,path:"/plugins",component:_n}),Object(r.jsx)(Sn.a,{exact:!0,path:"/engagements",component:cn})]})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fn=Object(i.a)({palette:{type:"dark",primary:{main:"#373740"}}}),Pn=document.getElementById("root");o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Qe.a,{children:Object(r.jsxs)(l.a,{theme:Fn,children:[Object(r.jsx)(Cn,{}),","]})})}),Pn),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[287,1,2]]]);
//# sourceMappingURL=main.a5277fea.chunk.js.map