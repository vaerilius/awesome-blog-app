(window.webpackJsonpfrondend=window.webpackJsonpfrondend||[]).push([[0],{260:function(e,t,a){e.exports=a(440)},440:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),l=a.n(c),i=a(21),s=a(38),u=a(9),o=a.n(u),m=a(19),d=a(62),p=a(36),f=a.n(p),b="/api/blogs",g=null,v=function(){return{headers:{Authorization:g}}},E={getAll:function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addBlog:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(b,t,v());case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateBlog:function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(b,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),removeBlog:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(b,"/").concat(t),v());case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),commentBlog:function(){var e=Object(m.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(b,"/").concat(a,"/comments"),t,v);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)},destroyToken:function(){g=null}};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return Object(d.a)(t.blogs);case"ADD_BLOG":return[].concat(Object(d.a)(e),[t.blog]);case"LIKE_BLOG":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"REMOVE_BLOG":return e.filter((function(e){return e.id!==t.id}));case"COMMENT_BLOG":return Object(d.a)(e).map((function(e){return e.id!==t.blog.id?e:t.blog}));default:return e}},w={login:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login/",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":case"LOGIN_USER":return t.user;case"LOGOUT_USER":return null;default:return e}},j={signUpUser:function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/users/",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllUsers:function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/users/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return Object(d.a)(t.users);case"SIGNUP_USER":return[].concat(Object(d.a)(e),[t.createdUser]);default:return e}},k=a(23),U=function(e){var t=Object(n.useState)(""),a=Object(k.a)(t,2),r=a[0],c=a[1];return[{type:e,value:r,onChange:function(e){c(e.target.value)}},function(){c("")}]},B=Object(i.b)((function(e){return{blogs:e.blogs}}),{onAddBlog:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.addBlog(e);case 2:n=t.sent,a({type:"ADD_BLOG",blog:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=U("text"),a=Object(k.a)(t,2),n=a[0],c=a[1],l=U("text"),i=Object(k.a)(l,2),s=i[0],u=i[1],o=U("text"),m=Object(k.a)(o,2),d=m[0],p=m[1];return r.a.createElement("form",{className:"ui form",onSubmit:function(t){t.preventDefault();var a={title:n.value,url:s.value,author:"timo testaaja",description:d.value};e.onAddBlog(a),e.newBlogRef.current.toggleVisibility(),c(),u(),p()}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"title"),r.a.createElement("input",n)),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"url"),r.a.createElement("input",s)),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",Object.assign({rows:"2"},d))),r.a.createElement("button",{className:"ui button",type:"submit"},"Create new blog"))})),S=a(24),L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.b,{to:"blogs/".concat(e.blog.id)},r.a.createElement("img",{src:e.blog.url,alt:e.blog.url,style:{height:"15rem",width:"auto",maxHeight:"25rem",minHeight:"15rem"}})))},I=a(443),R=r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(k.a)(a,2),l=c[0],i=c[1],s={display:l?"none":""},u={display:l?"":"none"},o=function(){i(!l)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),r.a.createElement("div",null,r.a.createElement("div",{style:s},r.a.createElement(I.a,{onClick:o},e.buttonLabel)),r.a.createElement("div",{style:u},e.children,r.a.createElement(I.a,{onClick:o},"Cancel")))}));R.displayName="Togglable";var _=R,T=Object(i.b)((function(e){return{blogs:e.blogs,user:e.user}}))((function(e){var t=r.a.createRef();return r.a.createElement("div",{className:"ui grid container center aligned"},r.a.createElement("div",{className:"center aligned one column row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("h2",null,"Blogs / pictures"),e.user?r.a.createElement(_,{buttonLabel:"Create new Blog",ref:t},r.a.createElement(B,{newBlogRef:t})):null))),e.blogs.map((function(e){return r.a.createElement("div",{className:"ui small images rounded",key:e.id},r.a.createElement(L,{blog:e}))})))})),C=a(453),D=a(249),G=a(63),A=Object(i.b)((function(e){return{user:e.user}}),{onLikeBlog:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h({},e,{likes:e.likes+1}),t.next=3,E.updateBlog(e.id,n);case 3:r=t.sent,a({type:"LIKE_BLOG",data:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},onRemoveBlog:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.removeBlog(e);case 2:a({type:"REMOVE_BLOG",id:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},onAddComment:function(e,t){return function(){var a=Object(m.a)(o.a.mark((function a(n){var r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.commentBlog(e,t);case 2:r=a.sent,n({type:"COMMENT_BLOG",blog:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=U("text"),a=Object(k.a)(t,2),n=a[0],c=a[1];if(void 0===e.blog)return r.a.createElement("h2",null,"loading");return r.a.createElement("div",{className:"ui vertically divided grid centered"},r.a.createElement("div",{className:"two column row "},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui fluid card centered "},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Title: ",e.blog.title)),r.a.createElement("div",{className:"image"},r.a.createElement(C.a,{trigger:r.a.createElement(D.a,{src:e.blog.url,alt:"aaa"})},r.a.createElement(C.a.Content,{image:!0},r.a.createElement(D.a,{wrapped:!0,size:"huge",src:e.blog.url})))),r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"right floated"},r.a.createElement("i",{className:"heart outline like icon"}),e.blog.likes," Likes"),r.a.createElement("i",{className:"comment icon"}),e.blog.comments.length," comments"),e.user?r.a.createElement("button",{className:"ui button",onClick:function(){return e.onLikeBlog(e.blog)}},r.a.createElement("i",{className:"heart icon"}),"Like"):null,e.user?r.a.createElement("div",{className:"ui fluid icon input"},r.a.createElement("input",Object.assign({placeholder:"Comment.."},n)),r.a.createElement("button",{className:"ui button",onClick:function(){e.onAddComment({comment:n.value},e.blog.id),c()}},r.a.createElement("i",{className:"comment icon"}),"Comment")):null,e.user?r.a.createElement(S.b,{to:"/blogs",className:"ui button",onClick:function(){window.confirm("Do you really want to remove so nice picture")&&e.onRemoveBlog(e.blog.id)}},r.a.createElement("i",{className:"trash icon"}),"Remove"):null)),r.a.createElement("div",{className:"column "},r.a.createElement("div",{className:"ui fluid card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"center aligned header"},r.a.createElement(D.a,{wrapped:!0,size:"tiny",src:e.blog.user.picture}),r.a.createElement("h3",null,e.blog.user.name)),r.a.createElement("div",{className:"center aligned description"},r.a.createElement("p",{className:"ui header"},"Description: "),r.a.createElement("p",null,e.blog.description))),r.a.createElement("div",{className:"extra content"},r.a.createElement("p",{className:"ui icon header"},"Comments: "),r.a.createElement("div",{className:"ui list"},e.blog.comments.map((function(e){return r.a.createElement("div",{className:"center aligned item",key:e},e)}))))))),r.a.createElement(S.b,{to:"/blogs"},r.a.createElement(I.a,{primary:!0},"Back to blogs ",r.a.createElement(G.a,{name:"step backward"}))))})),P=function(e){var t=e.user;return r.a.createElement("div",{className:"item",key:t.id},r.a.createElement("div",{className:"right floated"},"Blogs: ",t.blogs.length),r.a.createElement("img",{className:"ui avatar image",src:t.picture,alt:t.picture}),r.a.createElement("div",{className:"content"},r.a.createElement(S.b,{to:"/users/".concat(t.id)},t.name)))},z=Object(i.b)((function(e){return{blogs:e.blogs,users:e.users}}))((function(e){return e.users?r.a.createElement("div",{className:"ui grid container center aligned"},r.a.createElement("div",{className:"center aligned one column row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("h2",null,"Users"))),r.a.createElement("div",{className:"ui huge middle aligned list"},e.users.map((function(e){return r.a.createElement(P,{user:e,key:e.id})}))))):r.a.createElement("div",null," loading...")})),M=function(e){var t=e.user;return r.a.createElement("div",{className:"ui grid container center aligned"},r.a.createElement("div",{className:"center aligned one column row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.picture,alt:t.picture})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.name)),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Pictures / Blogs:"),r.a.createElement("div",{className:"description"},t.blogs.map((function(e){return r.a.createElement(S.b,{key:e.id,to:"/blogs/".concat(e.id)},e.title)})))))))))},q=a(54),H=Object(i.b)((function(e){return{user:e.user}}),{logout:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.destroyToken(),window.localStorage.removeItem("user"),t({type:"LOGOUT_USER"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return r.a.createElement("div",{className:"ui fixed inverted main menu"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"launch icon item"},r.a.createElement("i",{className:"image icon"})),r.a.createElement("div",{className:"item"},r.a.createElement(S.b,{to:"/"},"Home")),r.a.createElement("div",{className:"item"},r.a.createElement(S.b,{to:"/blogs"},"blogs")),r.a.createElement("div",{className:"item"},r.a.createElement(S.b,{to:"/users"},"Users")),r.a.createElement("div",{className:"right menu"},r.a.createElement("div",{className:"ui item"},e.user?null:r.a.createElement(S.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"ui item"},e.user?r.a.createElement("img",{className:"ui avatar image",alt:"",src:e.user.picture}):null,e.user?r.a.createElement("span",null,e.user.name):null),r.a.createElement("div",{className:"ui item"},e.user?r.a.createElement("div",{onClick:function(){return e.logout()}},"Logout"):r.a.createElement(q.a,{to:"/"})))))})),V=a(452),J=a(76),F=Object(i.b)((function(e){return{user:e.user}}),{signUp:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.signUpUser(e);case 2:n=t.sent,console.log(n),a({type:"SIGNUP_USER",createdUser:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=U("text"),a=Object(k.a)(t,2),n=a[0],c=a[1],l=U("text"),i=Object(k.a)(l,2),s=i[0],u=i[1],o=U("text"),m=Object(k.a)(o,2),d=m[0],p=m[1],f=U("password"),b=Object(k.a)(f,2),g=b[0],v=b[1];return r.a.createElement("div",{className:"ui raised very padded text segment"},r.a.createElement("h1",{className:"ui center aligned icon header"},"Sign Up",r.a.createElement("i",{className:"images outline icon"})),r.a.createElement(J.a,{onSubmit:function(){var t={username:n.value,password:g.value,picture:d.value,name:s.value};e.signUp(t),u(""),p(""),v(""),c("")}},r.a.createElement("div",{className:"field"},r.a.createElement(J.b,Object.assign({label:"Username"},n))),r.a.createElement("div",{className:"field"},r.a.createElement(J.b,Object.assign({label:"Password"},g))),r.a.createElement("div",{className:"field"},r.a.createElement(J.b,Object.assign({label:"Name"},s))),r.a.createElement("div",{className:"field"},r.a.createElement(J.b,Object.assign({label:"Picture"},d))),r.a.createElement(I.a,{className:"ui button submit",type:"submit"},"Sign Up")))})),K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui raised very padded text segment"},r.a.createElement("h1",{className:"ui center aligned icon header"},"Awesome Blog App",r.a.createElement("i",{className:"images outline icon"})),r.a.createElement("h2",{className:"ui header"},"Home / landing page"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor mi ut lacinia semper. Aliquam non rutrum massa. Vestibulum commodo congue metus, a euismod diam accumsan non. Quisque lobortis vitae risus in porta. Aliquam viverra volutpat diam, vitae dapibus orci sodales ut. Integer interdum lorem sit amet purus blandit congue ac sed tortor. Ut mollis diam purus, a vehicula ante lacinia ac. Duis in justo tellus              Pellentesque sollicitudin suscipit nunc vel placerat. Sed pharetra diam nulla, vitae placerat dolor lacinia vel. Suspendisse porttitor aliquet interdum.")),r.a.createElement(F,null))},Q=Object(i.b)((function(e){return{user:e.user}}),{login:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.login(e);case 3:(n=t.sent)&&(window.localStorage.setItem("user",JSON.stringify(n)),E.setToken(n.token),a({type:"LOGIN_USER",user:n})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=U("text"),a=Object(k.a)(t,2),n=a[0],c=a[1],l=U("password"),i=Object(k.a)(l,2),s=i[0],u=i[1];return r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("h2",{className:"ui center aligned icon header"},r.a.createElement("i",{className:"unlock icon"}),"Login"),r.a.createElement("form",{className:"ui form",onSubmit:function(t){t.preventDefault(),e.login({username:n.value,password:s.value}),u(""),c("")}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Username"),r.a.createElement("input",n)),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",s)),e.user?r.a.createElement(q.a,{to:"/blogs"}):r.a.createElement("button",{className:"ui button submit",type:"submit"},"Login")))})),W=Object(i.b)((function(e){return console.log(e),{blogs:e.blogs,user:e.user,users:e.users}}),{initializeBlogs:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:a=e.sent,t({type:"INIT_BLOGS",blogs:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},initializeUser:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=JSON.parse(window.localStorage.getItem("user")))?(E.setToken(a.token),t({type:"INIT_USER",user:a})):t({type:"INIT_USER",user:null});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},initializeUsers:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAllUsers();case 2:a=e.sent,t({type:"INIT_USERS",users:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(n.useEffect)((function(){e.initializeBlogs(),e.initializeUser(),e.initializeUsers()}),[]),e.users?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(V.a,{style:{margin:"3rem"}},r.a.createElement(H,null),r.a.createElement(q.b,{exact:!0,path:"/",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(q.b,{exact:!0,path:"/blogs/:id",render:function(t){var a=t.match;return r.a.createElement(A,{blog:e.blogs.find((function(e){return e.id===a.params.id}))})}}),r.a.createElement(q.b,{exact:!0,path:"/blogs",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(q.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(q.b,{exact:!0,path:"/users",render:function(){return r.a.createElement(z,null)}}),e.users?r.a.createElement(q.b,{exact:!0,path:"/users/:id",render:function(t){var a=t.match;return r.a.createElement(M,{user:e.users.find((function(e){return e.id===a.params.id}))})}}):r.a.createElement("div",null," loading")))):r.a.createElement("div",null,"loading")})),X=a(61),Y=a(247),Z=a(248),$=Object(X.combineReducers)({blogs:O,user:y,users:x}),ee=Object(X.createStore)($,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)(Y.a)));l.a.render(r.a.createElement(i.a,{store:ee},r.a.createElement(W,null)),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.1f82f513.chunk.js.map