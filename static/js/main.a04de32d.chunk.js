(this["webpackJsonpcampus-connect"]=this["webpackJsonpcampus-connect"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/campus-splash.3195ce31.jpg"},32:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(24),l=a.n(s),o=a(4),r=(a(15),a(17),a(38),a(25)),i=a.n(r),u=a(9),m=a.n(u),d=m.a.initializeApp({apiKey:"AIzaSyCyDHGruN8xp9eVLQMLnZvRfebsz0Xf0PI",authDomain:"school-chat-app-b3b2e.firebaseapp.com",databaseURL:"https://school-chat-app-b3b2e.firebaseio.com",projectId:"school-chat-app-b3b2e",storageBucket:"school-chat-app-b3b2e.appspot.com",messagingSenderId:"1015167689558",appId:"1:1015167689558:web:38f0fe084e2aa585c0acf7",measurementId:"G-2W8824YD6F"}).firestore(),h=m.a.auth(),p=new m.a.auth.GoogleAuthProvider,b=d;a(46);function f(e){var t=e.setClass,a=e.setSchool,n=e.classes,s=e.schools,l=e.setSelectedClass,o=e.setSelectedSchool,r=e.selectedSchool,i=e.selectedClass,u=e.onSubmit;return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(r),t(i),u&&u()},className:e.className},c.a.createElement("label",{htmlFor:"input-school"},"School:"),c.a.createElement("select",{onChange:function(e){return o(e.target.value)},id:"input-school",name:"input-school",value:r},s&&s.map((function(e){return c.a.createElement("option",{key:e.id.split(" ").join(""),value:e.id},e.id)}))),c.a.createElement("label",{htmlFor:"input-class"},"Class:"),c.a.createElement("select",{onChange:function(e){return l(e.target.value)},id:"input-class",name:"input-class",value:i},n&&n.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.id)}))),c.a.createElement("button",null,"Submit"))}var S=a(26);function E(e){return c.a.createElement("button",{className:e.className,onClick:function(){h.signInWithPopup(p)}},"Sign in with Google")}var v=function(e){var t=e.setClass,a=e.setSchool,n=e.classes,s=e.schools,l=e.setCurrentScreen,r=e.setSelectedSchool,u=e.setSelectedClass,m=e.selectedClass,d=e.selectedSchool,p=Object(S.a)(h),b=Object(o.a)(p,1)[0];return c.a.createElement("div",{className:"Home"},c.a.createElement("header",null,c.a.createElement("h1",null,"Campus Connect"),c.a.createElement("nav",{className:"top-bar"},c.a.createElement("ul",null,b&&("conor@conorroberts.com"===h.currentUser.email||"sante4832@gmail.com"===h.currentUser.email)&&c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return l("admin")}},"Admin"))))),c.a.createElement("main",null,c.a.createElement("div",{className:"splash-container"},c.a.createElement("img",{src:i.a,alt:"Campus splash"})),b?c.a.createElement(f,{onSubmit:function(){return l("chat")},className:"home-picker",setClass:t,setSchool:a,schools:s,classes:n,selectedClass:m,selectedSchool:d,setSelectedClass:u,setSelectedSchool:r}):c.a.createElement(E,{className:"google-signin"})),c.a.createElement("footer",{className:"contact-container"},c.a.createElement("span",null,"Conor Roberts : Conor@ConorRoberts.com",c.a.createElement("br",null),"Eric Santos : santeric2001@gmail.com")))},C=a(10),g=a.n(C),j=a(14),N=(a(48),a(27)),O=a.n(N),y=a(11),k=a(28),w=a.n(k),x=a(30),F=a.n(x);function I(e){var t=e.setClass,a=e.currentClass,n=e.setSchool,s=e.currentSchool,l=e.classes,o=e.schools,r=e.setSelectedSchool,i=e.setSelectedClass,u=e.selectedClass,m=e.selectedSchool,d=e.setCurrentScreen;return c.a.createElement("div",{className:"Chat"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"sidebar-container"},c.a.createElement(w.a,{className:"menu-icon"}),c.a.createElement("div",{className:"side-menu"},c.a.createElement(f,{className:"chat-picker",setClass:t,setSchool:n,schools:o,classes:l,selectedClass:u,selectedSchool:m,setSelectedClass:i,setSelectedSchool:r}))),c.a.createElement("div",{className:"class-label-container"},c.a.createElement("span",null,a)),c.a.createElement(F.a,{onClick:function(){return d("home")},className:"home-icon"})),c.a.createElement(A,{currentClass:a,currentSchool:s}))}function U(e){var t=e.message,a=t.text,n=t.sender_name,s=t.sender_email,l=t.photoURL;return c.a.createElement("div",{className:"message"},c.a.createElement("div",null,l?c.a.createElement("img",{alt:"Profile icon",src:l}):""),c.a.createElement("p",null,c.a.createElement("strong",null,n," (",s,")"),c.a.createElement("br",null),a))}function A(e){var t=Object(n.useRef)(),a=b.collection("schools").doc(e.currentSchool).collection("classes").doc(e.currentClass).collection("messages"),s=a.orderBy("timestamp"),l=Object(y.a)(s,{idField:"id"}),r=Object(o.a)(l,1)[0],i=Object(n.useState)(""),u=Object(o.a)(i,2),m=u[0],d=u[1],p=function(){var e=Object(j.a)(g.a.mark((function e(t){var n,c,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=h.currentUser,c=n.displayName,s=n.email,l=n.photoURL,!m){e.next=6;break}return e.next=5,a.add({text:m,timestamp:O.a.firestore.FieldValue.serverTimestamp(),sender_name:c,sender_email:s,photoURL:l});case 5:d("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return t.current.scrollIntoView({behavior:"smooth"})}),[r]),c.a.createElement("div",{className:"chat-component"},c.a.createElement("div",{className:"chat-window"},c.a.createElement("p",{className:"beginning-label"},"This is the beginning of the messages"),r&&r.map((function(e){return c.a.createElement(U,{key:e.id,message:e})})),c.a.createElement("div",{ref:t})),c.a.createElement("form",{className:"form-container",onSubmit:p},c.a.createElement("input",{className:"send-box",value:m,onChange:function(e){return d(e.target.value)},placeholder:"   Message..."}),c.a.createElement("button",{className:"send-btn",type:"submit"},"Send")))}a(54);function R(e){var t=e.setCurrentScreen,a=e.schools,s=Object(n.useState)(""),l=Object(o.a)(s,2),r=l[0],i=l[1],u=Object(n.useState)("University of Guelph"),d=Object(o.a)(u,2),h=d[0],p=d[1];function f(){return(f=Object(j.a)(g.a.mark((function e(t,a,n){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=b.collection("schools").doc(a).collection("classes").doc(n)).set({id:n}),s=c.collection("messages"),e.next=6,s.add({text:"First message",timestamp:m.a.firestore.FieldValue.serverTimestamp(),sender_name:"Admin",sender_email:"admin"});case 6:console.log("Added class to ".concat(a," > ").concat(n,".")),i("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"Admin"},c.a.createElement("button",{className:"home-button",onClick:function(){return t("home")}},"Home"),c.a.createElement("form",{className:"admin-form",onSubmit:function(e){return function(e,t,a){return f.apply(this,arguments)}(e,h,r)}},c.a.createElement("label",{htmlFor:"input-school"},"School:"),c.a.createElement("select",{onChange:function(e){return p(e.target.value)},id:"input-school",name:"input-school",value:h},a&&a.map((function(e){return c.a.createElement("option",{key:e.id.split(" ").join(""),value:e.id},e.id)}))),c.a.createElement("input",{value:r,placeholder:"Class name...",onChange:function(e){return i(e.target.value)}}),c.a.createElement("button",null,"Add Class")))}function D(e){var t=Object(n.useState)("University of Guelph"),a=Object(o.a)(t,2),s=a[0],l=a[1],r=Object(n.useState)("MCS1000"),i=Object(o.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(s),h=Object(o.a)(d,2),p=h[0],f=h[1],S=Object(n.useState)(u),E=Object(o.a)(S,2),C=E[0],g=E[1],j=b.collection("schools"),N=j.doc(p).collection("classes"),O=Object(y.a)(j,{idField:"id"}),k=Object(o.a)(O,1)[0],w=Object(y.a)(N,{idField:"id"}),x=Object(o.a)(w,1)[0],F=Object(n.useState)("home"),U=Object(o.a)(F,2),A=U[0],D=U[1];return"chat"===A?c.a.createElement(I,{currentClass:u,currentSchool:s,selectedClass:C,selectedSchool:p,setClass:m,setSchool:l,schools:k,classes:x,schoolsQuery:j,classesQuery:N,setCurrentScreen:D,setSelectedClass:g,setSelectedSchool:f}):"home"===A?c.a.createElement(v,{setCurrentScreen:D,currentClass:u,currentSchool:s,selectedClass:C,selectedSchool:p,setSelectedClass:g,setSelectedSchool:f,setClass:m,setSchool:l,schools:k,classes:x,schoolsQuery:j,classesQuery:N}):"admin"===A?c.a.createElement(R,{setCurrentScreen:D,schools:k}):void 0}l.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a04de32d.chunk.js.map