(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{74:function(e,a,t){e.exports=t(93)},79:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n,r,l,o,i,c,s,m=t(0),u=t.n(m),d=t(32),p=t.n(d),b=(t(59),t(79),t(39)),h=t(10),g=t(12),E=t(101),f=t(103),v=t(28),y=t.n(v),w=t(35),_=t(30),j=t(26),N=t(102),k=t(96),O=t(97),S=t(42),C=t(62),x=t(55),F=t.n(x),$=new(function(){function e(){Object(S.a)(this,e)}return Object(C.a)(e,[{key:"getProfile",value:function(){return F()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return F()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=t(21),T=t(29),L=t(24),U=Object(L.a)(n||(n=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n      }\n    }\n  }\n"]))),B=Object(L.a)(r||(r=Object(T.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!, $first_name: String!, $last_name: String!, $phone: String!) {\n    addUser(username: $username, email: $email, password: $password, first_name: $first_name, last_name: $last_name, phone: $phone) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),P=Object(L.a)(l||(l=Object(T.a)(["\n  mutation addFile($patient_name: String!, $dob: String!, $allergies: String!, $notes: String!, $therapist_id: String!) {\n    addFile(patient_name: $patient_name, dob: $dob, allergies: $allergies, notes: $notes, therapist_id: $therapist_id) {\n      patient_name\n      dob\n      allergies\n      notes\n      therapist_id\n    }\n  }\n"]))),D=function(){var e=Object(m.useState)({username:"",email:"",password:""}),a=Object(g.a)(e,2),t=a[0],n=a[1],r=Object(m.useState)(!1),l=Object(g.a)(r,1)[0],o=Object(q.a)(B),i=Object(g.a)(o,2),c=i[0],s=i[1].error,d=Object(m.useState)(!!s),p=Object(g.a)(d,2),b=p[0],h=p[1],E=function(e){var a=e.target,r=a.name,l=a.value;n(Object(j.a)(Object(j.a)({},t),{},Object(_.a)({},r,l)))},f=function(){var e=Object(w.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,c({variables:Object(j.a)({},t)});case 6:r=e.sent,l=r.data,$.login(l.addUser.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),h(!0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{noValidate:!0,validated:l,onSubmit:f},u.a.createElement(k.a,{dismissible:!0,onClose:function(){return h(!1)},show:b,variant:"danger"},"Something went wrong with your signup!"),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"username"},"Username"),u.a.createElement(N.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:E,value:t.username,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Username is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"first_name"},"First Name"),u.a.createElement(N.a.Control,{type:"text",placeholder:"Your first name",name:"first_name",onChange:E,value:t.first_name,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"First name is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"last_name"},"Last Name"),u.a.createElement(N.a.Control,{type:"text",placeholder:"Your last name",name:"last_name",onChange:E,value:t.last_name,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Last name is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"phone"},"Phone Number"),u.a.createElement(N.a.Control,{type:"text",placeholder:"Your phone number",name:"phone",onChange:E,value:t.phone,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Your phone number is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"email"},"Email"),u.a.createElement(N.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:E,value:t.email,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Email is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"password"},"Password"),u.a.createElement(N.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:E,value:t.password,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Password is required!")),u.a.createElement(O.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},I=function(){var e=Object(m.useState)({email:"",password:""}),a=Object(g.a)(e,2),t=a[0],n=a[1],r=Object(m.useState)(!1),l=Object(g.a)(r,1)[0],o=Object(q.a)(U),i=Object(g.a)(o,2),c=i[0],s=i[1].error,d=Object(m.useState)(!!s),p=Object(g.a)(d,2),b=p[0],h=p[1],E=function(e){var a=e.target,r=a.name,l=a.value;n(Object(j.a)(Object(j.a)({},t),{},Object(_.a)({},r,l)))},f=function(){var e=Object(w.a)(y.a.mark((function e(a){var r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,c({variables:Object(j.a)({},t)});case 6:r=e.sent,l=r.data,$.login(l.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),h(!0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,{noValidate:!0,validated:l,onSubmit:f},s&&u.a.createElement(k.a,{dismissible:!0,onClose:function(){return h(!1)},show:b,variant:"danger"},"Something went wrong with your login credentials!"),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"email"},"Email"),u.a.createElement(N.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:E,value:t.email,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Email is required!")),u.a.createElement(N.a.Group,null,u.a.createElement(N.a.Label,{htmlFor:"password"},"Password"),u.a.createElement(N.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:E,value:t.password,required:!0}),u.a.createElement(N.a.Control.Feedback,{type:"invalid"},"Password is required!")),u.a.createElement(O.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Y=function(){var e=Object(m.useState)(!1),a=Object(g.a)(e,2),t=a[0],n=a[1],r=Object(m.useState)(!1),l=Object(g.a)(r,2),o=l[0],i=l[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("nav",{className:"navbar navbar-custom border-bottom sticky-top"},u.a.createElement("a",{className:"navbar-brand",href:"/"},u.a.createElement("img",{className:"photo",src:"/images/uru2we.png"})),u.a.createElement("div",{className:"form-inline"},$.loggedIn()?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"btn btn-outline-secondary my-2 my-sm-0 mx-2",type:"submit",onClick:$.logout},"Logout")):u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"btn btn-outline-secondary my-2 my-sm-0 mx-2",type:"submit",onClick:function(){return n(!0)}},"Login"),u.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0 text-white",type:"submit",onClick:function(){return i(!0)}},"Sign Up")))),u.a.createElement(E.a,{size:"sml",show:t,onHide:function(){return n(!1)},"aria-labelledby":"login-modal"},u.a.createElement(f.a.Container,null,u.a.createElement(E.a.Header,{closeButton:!0},u.a.createElement(E.a.Title,null,"Login")),u.a.createElement(E.a.Body,null,u.a.createElement("img",{className:"logologin",src:"images/b2.jpeg"}),u.a.createElement("img",{className:"logologin",src:"images/g1.jpeg"}),u.a.createElement(f.a.Content,null,u.a.createElement(I,{handleModalClose:function(){return n(!1)}}))))),u.a.createElement(E.a,{size:"sml",show:o,onHide:function(){return i(!1)},"aria-labelledby":"signup-modal"},u.a.createElement(f.a.Container,null,u.a.createElement(E.a.Header,{closeButton:!0},u.a.createElement(E.a.Title,null,"Sign Up")),u.a.createElement(E.a.Body,null,u.a.createElement("img",{className:"logosignup",src:"images/urus.png"}),u.a.createElement(f.a.Content,null,u.a.createElement(D,{handleModalClose:function(){return i(!1)}}))))))},V=function(){return u.a.createElement("footer",{className:"py-3 mt-5 site-footer site-footer--with-clipmask"},u.a.createElement("div",null,u.a.createElement("p",{className:"text-center site-footer__copyright",style:{color:"#116c95"}}),u.a.createElement("p",{className:"text-center"},u.a.createElement("a",{href:"https://github.com/acevezl/uru",target:"_blank",rel:"noopener noreferrer",style:{color:"#116c95"}})),u.a.createElement("ul",{className:"nav justify-content-center p-3 mb-3"},u.a.createElement("li",{className:"nav-item",style:{color:"#260725"}},'"Today you are you, that is truer than true. There is no one alive, that is youer than you" ~ Dr. Seuss'))," ","URU\xa92021"," "))},A=t(17),W=t(71),G=t(100),z=t(98),H=t(68),R=t(99),M=t(67),J=Object(L.a)(o||(o=Object(T.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      first_name\n      last_name\n      phone\n      files {\n        patient_name\n        dob\n        allergies\n        notes\n      }\n    }\n  }\n"]))),Z=Object(L.a)(i||(i=Object(T.a)(["\n  query therapist($id: ID!) {\n    therapist(_id: $id) {\n      _id\n      username\n      email\n      first_name\n      last_name\n      phone\n      specialties\n      skills\n      photo\n      bio\n    }\n  }\n"]))),Q=Object(L.a)(c||(c=Object(T.a)(["\n  query therapistcriteria($criteria: String!) {\n    therapistcriteria(criteria: $criteria) {\n      _id\n      username\n      email\n      first_name\n      last_name\n      phone\n      specialties\n      skills\n      photo\n      bio\n    }\n  }\n"]))),K=(Object(L.a)(s||(s=Object(T.a)(["\n  {\n    therapists {\n      _id\n      username\n      email\n      first_name\n      last_name\n      phone\n      specialties\n      skills\n      photo\n      bio\n    }\n  }\n"]))),t(104)),X=function(e){var a=e.therapists;return a.length?u.a.createElement(z.a,{className:"m-3"},a&&a.map((function(e){return u.a.createElement(H.a,{className:"col-xl-3"},u.a.createElement(K.a,{className:"mb-3",key:e._id},u.a.createElement(K.a.Img,{variant:"top",className:"site-footer3--with-clipmask",src:e.photo}),u.a.createElement(K.a.Body,{className:"search-results-card"},u.a.createElement(K.a.Title,null,u.a.createElement("h2",null,e.first_name," ",e.last_name)),u.a.createElement("br",null),u.a.createElement(K.a.Text,null,u.a.createElement("h3",null,"Specialties:"),u.a.createElement("p",null,e.specialties.map((function(e){return u.a.createElement("span",null,e,", ")}))),u.a.createElement("h3",null,"Skills:"),u.a.createElement("p",null,e.skills.map((function(e){return u.a.createElement("span",null,e,", ")}))))),u.a.createElement(K.a.Body,null,u.a.createElement(b.b,{className:"btn btn-primary",to:"/therapist/".concat(e._id)},"View Profile"))))}))):u.a.createElement("h3",null,"No therapists were found")},ee=function(){var e=Object(m.useState)(""),a=Object(g.a)(e,2),t=a[0],n=a[1],r=Object(q.b)(Q,{variables:{criteria:t}}),l=r.loading,o=r.data,i=(null===o||void 0===o?void 0:o.therapistcriteria)||[];return u.a.createElement(u.a.Fragment,null,u.a.createElement(z.a,{className:"justify-content-center"},u.a.createElement(z.a,{className:"m-5 col-10 col-sm-8"},u.a.createElement(H.a,null,u.a.createElement("h1",{style:{color:"#116c95"}},"Let us help you find a Therapist for your child."))),u.a.createElement(z.a,{className:"col-sm-8"},u.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),n(e.target.searchText.value),console.log(e.target.searchText.value)},className:"col-12"},u.a.createElement(R.a,{type:"search",className:"mb-3"},u.a.createElement(M.a,{name:"searchText",placeholder:"Seach for a specialty...",className:"p-2",onChange:function(e){n(e.target.value)}})),u.a.createElement(O.a,{type:"submit"},"Search")))),u.a.createElement(z.a,null,l?u.a.createElement("div",null,"Loading therapists..."):u.a.createElement(X,{therapists:i})))},ae=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(G.a,null,u.a.createElement(ee,null)))};var te=t(72),ne=function(e){var a=e.therapist,t=Object(q.b)(J),n=(t.loading,t.data),r=(null===n||void 0===n?void 0:n.me)||{};console.log(r);var l=Object(q.a)(P),o=Object(g.a)(l,2),i=o[0],c=(o[1].error,Object(m.useState)({patient_name:"",dob:"",allergies:"",notes:""})),s=Object(g.a)(c,2),d=s[0],p=s[1];function b(){var e={therapist_first_name:a.first_name,therapist_email:a.email,user_email:r.email,user_first_name:r.first_name};te.a.send("service_v6o96rr","template_f1mty9m",e,"user_QURpyb1Ov7NpwPVclx5Di").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}var h=Object(m.useState)(""),E=Object(g.a)(h,2),f=E[0],v=E[1],N=Object(m.useState)(!1),k=Object(g.a)(N,2),O=k[0],S=k[1],C=Object(m.useState)(!1),x=Object(g.a)(C,2),F=x[0],$=x[1],T=d.patient_name,L=d.dob,U=d.allergies,B=d.notes;function D(e){if("email"===e.target.name){var a=(t=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()));v(a?"":"Your email is invalid")}else v(e.target.value.length?"":"Your ".concat(e.target.name," is required."));var t;f||p(Object(j.a)(Object(j.a)({},d),{},Object(_.a)({},e.target.name,e.target.value)))}var I=function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a._id,e.prev=2,e.next=5,i({variables:{patient_name:T,dob:L,allergies:U,notes:B,therapist_id:n}});case 5:b(),S(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement("section",{className:"contact"},F?u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",{className:"col-12"},"Establish Care with ",a.first_name," ",a.last_name),u.a.createElement("div",{className:"contactForm mb-5"},O?u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Thank you for your interest."),u.a.createElement("p",null,"We have sent your Care request to ",a.first_name,". They will respond to your message within the next 24-48 hours."),u.a.createElement("button",{"data-testid":"button",className:"btn btn-primary",onClick:function(){$(!1),S(!1)}},"Ok")):u.a.createElement("form",{id:"contact-form",className:"mb-3",onSubmit:I},u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("label",{className:"input-group-text",htmlFor:"patient_name"},"Patient Name:")),u.a.createElement("input",{className:"form-control",type:"text",id:"patient_name",name:"patient_name",defaultValue:T,onBlur:D})),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("label",{className:"input-group-text",htmlFor:"dob"},"Date of birth:")),u.a.createElement("input",{className:"form-control",type:"text",id:"dob",name:"dob",defaultValue:L,onBlur:D})),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("label",{className:"input-group-text",htmlFor:"allergies"},"Allergies:")),u.a.createElement("input",{className:"form-control",type:"text",id:"allergies",name:"allergies",defaultValue:U,onBlur:D})),u.a.createElement("div",{className:"input-group mb-3"},u.a.createElement("div",{className:"input-group-prepend"},u.a.createElement("label",{className:"input-group-text",htmlFor:"notes"},"How can ",a.first_name," help you? ")),u.a.createElement("textarea",{className:"form-control",rows:"5",type:"text",id:"notes",name:"notes",defaultValue:B,onBlur:D})),f&&u.a.createElement("div",{className:"alert alert-danger"},f),u.a.createElement("button",{"data-testid":"button",className:"btn btn-primary mr-3",type:"submit"},"Submit"),u.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return $(!1)}},"Cancel")))):u.a.createElement("button",{type:"button",className:"btn btn-warning btn-lg px-4 me-md-2 text-white",onClick:function(){return $(!0)}},"Establish Care"))},re=function(e){var a=Object(h.f)().id,t=Object(q.b)(Z,{variables:{id:a}}),n=t.loading,r=t.data,l=(null===r||void 0===r?void 0:r.therapist)||{},o=$.loggedIn();return n?u.a.createElement("h3",null,"Loading data..."):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row justify-content-center mt-5"},u.a.createElement("div",{className:"col col-sm-5 col-xl-4 align-middle"},u.a.createElement("img",{src:l.photo,className:"site-footer3--with-clipmask mb-3",alt:l.first_name+" "+l.last_name,loading:"lazy",width:"200"}),u.a.createElement("h1",null,l.first_name," ",l.last_name),u.a.createElement("p",null,l.bio)),u.a.createElement("div",{className:"col col-sm-5 col-xl-4"},u.a.createElement("div",{className:"p-5 mt-3 rounded shadow",style:{background:"#c8c6c1"}},u.a.createElement("h2",null,"Specialties"),u.a.createElement("ul",null,l.specialties.map((function(e){return u.a.createElement("li",null,e)})))),u.a.createElement("div",{className:"p-5 mt-3 rounded shadow",style:{background:"#d1ced8"}},u.a.createElement("h2",null,"Skills"),u.a.createElement("ul",null,l.skills.map((function(e){return u.a.createElement("li",null,e)})))))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col mt-5"},o?u.a.createElement(u.a.Fragment,null,u.a.createElement(ne,{therapist:l})):u.a.createElement(u.a.Fragment,null,"Login to establish care with ",l.first_name," ",l.last_name,".")))))},le=new W.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var oe=function(){return u.a.createElement(A.a,{client:le},u.a.createElement(b.a,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(Y,null),u.a.createElement(h.c,null,u.a.createElement(h.a,{exact:!0,path:"/",component:ae}),u.a.createElement(h.a,{exact:!0,path:"/therapist/:id",component:re}),u.a.createElement(h.a,{render:function(){return u.a.createElement("h1",{className:"display-2"},"The page requested does not exist!")}})),u.a.createElement(V,null))))},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}p.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ie?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(a,e)}))}}()}},[[74,1,2]]]);
//# sourceMappingURL=main.42f1f2b8.chunk.js.map