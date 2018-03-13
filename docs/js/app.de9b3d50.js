webpackJsonp([1],{"/nqI":function(t,e){},0:function(t,e,a){t.exports=a("NHnr")},"3lL0":function(t,e){},CkTM:function(t,e){},DEKx:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("/5sW"),i=(a("EuXz"),{data:function(){return{routeTransition:""}},watch:{$route:function(t,e){var a=this.isChild(e.name),s=this.isChild(t.name),i="home"==e.name,n=!i;switch(!0){case a&&n:this.routeTransition="child-home";break;case i&&s:this.routeTransition="home-child";break;default:this.routeTransition="faded";break}}},methods:{isChild:function(t){return"work"==t||"about"==t||"contact"==t||"thanks"==t}}}),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:t.routeTransition,mode:"out-in"}},[a("router-view")],1)],1)},o=[],r=a("XyMi");function l(t){a("QBtf")}var c=!1,m=l,u=null,h=null,v=Object(r["a"])(i,n,o,c,m,u,h),_=v.exports,d=a("/ocq"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[a("path",{attrs:{d:"M48.9 79.3c-.1-.4-.5-8.2-.8-17.3l-.6-16.5-2.3 8.9c-1.2 4.8-3.2 11-4.3 13.7-1.9 4.3-2.5 4.9-5 4.9-3.8 0-4.6-2.2-6.6-16.5C27.6 43.3 27.2 41.9 26 44c-.9 1.7-7.7 28.2-8.2 32-.4 3-3.5 3.4-5.2.7-.9-1.3-.1-5.7 3.5-20C21.6 35.4 24.9 27 27.9 27s3.6 2 6.2 18.8c1.3 8.4 2.6 14.7 3 14 .4-.7 2.1-7.1 3.8-14.3C45.7 25.7 46.7 23 49.5 23c1.2 0 2.6.7 2.9 1.6s.9 7.7 1.3 15.2l.6 13.6L57 45c3.4-10.9 4.8-13.2 8-12.8 3.1.4 3.8 2.8 3.9 14.7.1 5.2.4 9.2.7 8.8.3-.3 1.6-5.4 2.9-11.4 2.5-11.9 5.8-21.5 8-23.3.8-.6 2.4-1 3.7-.8l2.3.3v56l-2.2.3c-1.3.2-2.5-.4-3.1-1.5-.5-1-.9-9.8-.8-19.5 0-9.7 0-17.5-.2-17.3-.1.1-1.4 6-2.7 13.1-3 15.7-4.1 19.1-6.4 20.4-4 2.1-6.6-3.3-7.9-16l-.8-7.5L59.7 59c-5.7 21.9-5.2 20.5-8.1 20.8-1.4.2-2.7 0-2.7-.5z"}})])},f=[],g=null,b=!1,k=null,w=null,C=null,y=Object(r["a"])(g,p,f,b,k,w,C),x=y.exports,S={components:{appLogo:x}},E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page",attrs:{id:"home-page"}},[a("div",{staticClass:"logo"},[a("app-logo")],1),t._v(" "),a("p",{staticClass:"name"},[t._v("Max Miracolo")]),t._v(" "),t._m(0),t._v(" "),a("router-link",{staticClass:"link",staticStyle:{"z-index":"3"},attrs:{to:"/work"}},[t._v("Work")]),t._v(" "),a("router-link",{staticClass:"link",staticStyle:{"z-index":"2"},attrs:{to:"/about"}},[t._v("About")]),t._v(" "),a("router-link",{staticClass:"link",staticStyle:{"z-index":"1"},attrs:{to:"/contact"}},[t._v("Contact")])],1)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"title"},[t._v("Frontend Developer "),a("br"),t._v("& UI Designer")])}];function z(t){a("PGHY")}var L=!1,j=z,$=null,I=null,A=Object(r["a"])(S,E,M,L,j,$,I),O=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"child-page about"},[a("h2",{staticClass:"about__question"},[t._v("Who Am I?")]),t._v(" "),a("p",{staticClass:"about__answer"},[t._v("I'm Max Miracolo, a Frontend Developer & UI Designer based in New York City.")]),t._v(" "),a("p",{staticClass:"about__answer"},[t._v("Over the past 6 years I've spent most of my time at two companies; a fast-paced startup called Assured Labor, and Macy's as an in-house permanent freelancer on their dev team.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",{staticClass:"about__answer"},[t._v("Outside of work, some of my hobbies include video editing, photography, drawing, puzzles & board games, soccer, biking, and learning new skills (I've taken courses in woodworking, drawing & painting, and ceramics to name a few).")]),t._v(" "),a("div",{staticClass:"icons"},[a("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/maxmiracolo",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"}})])]),t._v(" "),a("a",{staticClass:"icon codepen",attrs:{href:"https://codepen.io/mcolo",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M427 201.9c-.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0l156.5-104.2c4-2.6 6.6-7.4 6.6-12.2V203.9c-.1-.7-.1-1.3-.2-2 0-.2.1.7 0 0zm-156.3-74.8l115.2 76.8-51.5 34.4-63.8-42.7v-68.5zm-29.4 0v68.6l-63.8 42.7L126 204l115.3-76.9zm-127 104.3l36.8 24.6-36.8 24.6v-49.2zm127 153.5l-115.2-76.8 51.5-34.4 63.8 42.6v68.6zm14.7-94.1L204 256l52-34.8 52 34.8-52 34.8zm14.7 94.1v-68.6l63.8-42.6 51.5 34.4-115.3 76.8zm127-104.3L360.9 256l36.8-24.6v49.2z"}})])]),t._v(" "),a("a",{staticClass:"icon github",attrs:{href:"https://github.com/mcolo",target:"_blank"}},[a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}})])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"about__answer"},[t._v("I've worked with frontend technologies like "),a("span",{staticClass:"about__highlight"},[t._v("Handlebars")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("VueJS 2")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("React")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("Angular 1.x")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("Bootstrap")]),t._v(" am proficient in languages like "),a("span",{staticClass:"about__highlight"},[t._v("Javascript")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("HTML")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("CSS/SASS/LESS")]),t._v(" and frequently use applications/services like "),a("span",{staticClass:"about__highlight"},[t._v("Photoshop")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("Git")]),t._v(" "),a("span",{staticClass:"about__highlight"},[t._v("Sublime")]),t._v(" and "),a("span",{staticClass:"about__highlight"},[t._v("JIRA")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"about__answer"},[t._v(" For more information, take a look at "),a("a",{staticClass:"about__link",attrs:{href:"http://maxmiracolo.com/src/images/MaxMiracolo-Resume.pdf",target:"_blank"}},[t._v("my resume")])])}];function F(t){a("SfD/")}var T=null,W=!1,H=F,q="data-v-668018c9",B=null,N=Object(r["a"])(T,D,P,W,H,q,B),V=N.exports,G=a("JnrT"),J=a.n(G),U={data:function(){return{messageFocus:!1,emailFocus:!1,email:"",message:"",errors:{}}},mounted:function(){J()(document.getElementById("message"))},computed:{activateEmailLabel:function(){return this.emailFocus||this.email?"active":"inactive"},activateMessageLabel:function(){return this.messageFocus||this.message?"active":"inactive"},emailClass:function(){return this.email&&!this.errors.email?"valid":this.errors.email?"invalid":void 0},messageClass:function(){return this.message&&!this.errors.message?"valid":this.errors.message?"invalid":void 0}},methods:{validateForm:function(t){if(this.errors={},this.email?this.email&&!this.validEmail(this.email)&&(this.errors.email="Please enter a valid email address."):this.errors.email="Please enter an email address.",this.message||(this.errors.message="Please enter a message."),!this.errors.message&&!this.errors.email)return!0;t.preventDefault()},validEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}},Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"child-page contact"},[a("form",{staticClass:"form",attrs:{action:"https://formspree.io/max.miracolo@gmail.com",method:"POST",name:"contactForm",novalidate:""},on:{submit:t.validateForm}},[a("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"_gotcha"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"_next",value:"/thanks"}}),t._v(" "),a("label",[a("span",{staticClass:"form__label",class:t.activateEmailLabel},[t._v("\n        Email "),a("span",{staticClass:"error"},[t._v(t._s(t.errors.email))])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input input--email",class:t.emailClass,attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{keydown:function(e){t.errors.email=null},focus:function(e){t.emailFocus=!0},blur:function(e){t.emailFocus=!1},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("label",[a("span",{staticClass:"form__label",class:t.activateMessageLabel},[t._v("\n        Message "),a("span",{staticClass:"error"},[t._v(t._s(t.errors.message))])]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",class:t.messageClass,attrs:{name:"message",id:"message",rows:"1"},domProps:{value:t.message},on:{keydown:function(e){t.errors.message=null},focus:function(e){t.messageFocus=!0},blur:function(e){t.messageFocus=!1},input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"submit",class:t.email&&t.message?"active":"disabled",attrs:{type:"submit"}},[t._v("Send Message")])])])},R=[];function Y(t){a("kH+f")}var K=!1,X=Y,Z="data-v-8e5373e2",tt=null,et=Object(r["a"])(U,Q,R,K,X,Z,tt),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thanks-page"},[t._m(0),t._v(" "),a("div",[a("router-link",{staticClass:"thanks__link",attrs:{to:"/work"}},[t._v("work")]),t._v(" "),a("router-link",{staticClass:"thanks__link",attrs:{to:"/about"}},[t._v("about")]),t._v(" "),a("router-link",{staticClass:"thanks__link",attrs:{to:"/contact"}},[t._v("contact")])],1)])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thanks"},[a("h2",{staticClass:"thanks__title"},[t._v("thanks!")]),t._v(" "),a("p",{staticClass:"thanks__message"},[t._v("I'll get back to you shortly.")])])}];function nt(t){a("/nqI")}var ot=null,rt=!1,lt=nt,ct=null,mt=null,ut=Object(r["a"])(ot,st,it,rt,lt,ct,mt),ht=ut.exports,vt={props:["img"]},_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"phone"},[a("div",{staticClass:"speaker"}),t._v(" "),a("div",{staticClass:"screen"},[a("img",{staticClass:"screen__img display-img",attrs:{src:t.img,alt:""}})]),t._v(" "),a("div",{staticClass:"home-button"})])},dt=[],pt=!1,ft=null,gt=null,bt=null,kt=Object(r["a"])(vt,_t,dt,pt,ft,gt,bt),wt=kt.exports,Ct={props:["img"]},yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"browser"},[a("div",{staticClass:"controls"}),t._v(" "),a("div",{staticClass:"window"},[a("img",{staticClass:"browser__img display-img",attrs:{src:t.img,alt:""}})])])},xt=[],St=!1,Et=null,Mt=null,zt=null,Lt=Object(r["a"])(Ct,yt,xt,St,Et,Mt,zt),jt=Lt.exports,$t={props:["content"],components:{cssPhone:wt,cssBrowser:jt},data:function(){return{largeScreen:this.isLargeScreen()}},methods:{isLargeScreen:function(){return window.innerWidth>768}},created:function(){var t=this;window.addEventListener("resize",function(){t.largeScreen=t.isLargeScreen()})}},It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sample"},[a("div",{staticClass:"sample__content"},[a("h2",{staticClass:"content__title"},[t._v(t._s(t.content.title))]),t._v(" "),t.largeScreen?t._e():a("div",{staticClass:"sample__img--sm"},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.content.imgData.browser}})]),t._v(" "),t._l(t.content.summary,function(e){return a("p",{staticClass:"content__summary"},[t._v(t._s(e))])}),t._v(" "),a("a",{staticClass:"content__link",attrs:{href:t.content.link.url,target:"_blank"}},[t._v(t._s(t.content.link.title))])],2),t._v(" "),t.largeScreen?a("div",{staticClass:"sample__img"},[a("div",{staticClass:"showcase"},[a("css-browser",{attrs:{img:t.content.imgData.browser}}),t._v(" "),t.content.imgData.phone?a("css-phone",{attrs:{img:t.content.imgData.phone}}):t._e()],1)]):t._e()])},At=[];function Ot(t){a("p7Qu")}var Dt=!1,Pt=Ot,Ft=null,Tt=null,Wt=Object(r["a"])($t,It,At,Dt,Pt,Ft,Tt),Ht=Wt.exports,qt={data:function(){return{works:[{id:1,title:"Mobile Steam Unit",summary:['"Part brand, part band,” Mobile Steam Unit needed a site to accurately reflect the recent corporate infusion to their blue-collar rock band. From new musical themes that touch on office life to live streaming "quarterly press conferences" to crafting jingles for startups, they were headed into uncharted territory that required an apt web presence. I designed this site to capture the feel of a modern startup drawing influence from companies like Stripe, Slack, Oscar, Handy and more. The color palette is bright and fun to match the vibrant energy the band delivers.',"My favorite aspect of the site is the team section profile pictures. Each band member has a cheesy corporate photo that upon hover reveals a shot of them on stage. I really wanted to recreate this effect on mobile and came up with the idea to trigger the reveal based on the scroll position. I'm thrilled with how it and the rest of the site came out!"],imgData:{browser:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520655193/portfolio/steam-browser.jpg",phone:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/steam-phone.jpg"},link:{url:"https://mcolo.github.io/msu",title:"Mobile Steam Unit Website"}},{id:2,title:"Sweet Synth Prince",summary:["A new mysterious band with minimal social media presence asked me to create a site for their band, or as they like to refer to it their “cult”. Pure Waveform is a mantra or motto they imparted to me and was the main inspiration behind the SVG wave effect in the header section (my favorite bit of the site, the effect is most fluid with a trackpad as opposed to mouse scroll wheel).","A small part of the inspiration came from antiquated cult sites like Heavens Gate, Angels Light and others that spew tons of information and pictures without any semblance of coherence. While there isn't a ton of content and there is some structure we decided that the random waveform graphs and bizarre text & imagery would be powerful enough."],imgData:{browser:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ssp-browser.jpg",phone:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ssp-phone.jpg"},link:{url:"http://sweetsynthprince.com/",title:"Sweet Synth Prince Website"}},{id:3,title:"Michael & Sophia's Wedding",summary:["This website was made for my brother and his wife's wedding. They had searched for a simple wedding template on various CMS services but found them all to be too tacky and flashy for their taste. Since it was a destination wedding there was a lot of information about both the venue and the country that they wanted to share. All of this in combination with the likelihood that most guests would be browsing the site on a mobile device while on their visit led me to create a very simple layout that was easy to navigate."],imgData:{browser:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ms-browser.jpg",phone:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520650214/portfolio/ms-phone.jpg"},link:{url:"https://mcolo.github.io/ms-wedding",title:"Michael & Sophia's Wedding Website"}},{id:4,title:"Animated Icon Customizer",summary:["After finding myself creating the same icon animations over and over I decided to create an interactive interface to generate the code for me. Previously, every time I would want to use one of these icons with slightly different sizes it required re-doing some math so the animations would be be precise. Now it’s as easy as moving a couple sliders. This was written in Angular, my framework of choice at the time."],imgData:{browser:"https://res.cloudinary.com/ddkucvkg0/image/upload/v1520892619/portfolio/icon-browser.jpg"},link:{url:"http://mxmrcl.com/icons/#/",title:"Animated Icon Customizer Website"}}]}},components:{appWorkSample:Ht}},Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"child-page work"},t._l(t.works,function(t){return a("app-work-sample",{key:t.id,attrs:{content:t}})}))},Nt=[],Vt=!1,Gt=null,Jt=null,Ut=null,Qt=Object(r["a"])(qt,Bt,Nt,Vt,Gt,Jt,Ut),Rt=Qt.exports,Yt={components:{appLogo:x}},Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("router-link",{attrs:{to:"/"}},[a("app-logo",{staticClass:"nav__logo"})],1),t._v(" "),a("router-link",{staticClass:"nav__link nav__link--contact",attrs:{to:"/contact"}},[t._v("contact")]),t._v(" "),a("router-link",{staticClass:"nav__link nav__link--about",attrs:{to:"/about"}},[t._v("about")]),t._v(" "),a("router-link",{staticClass:"nav__link nav__link--work",attrs:{to:"/work"}},[t._v("work")])],1)},Xt=[];function Zt(t){a("CkTM")}var te=!1,ee=Zt,ae="data-v-3098b68f",se=null,ie=Object(r["a"])(Yt,Kt,Xt,te,ee,ae,se),ne=ie.exports,oe={components:{appLogo:x}},re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("app-logo",{staticClass:"footer__logo"}),t._v(" "),a("div",{staticClass:"footer__links"},[a("div",{staticClass:"link-group"},[a("div",[a("router-link",{staticClass:"footer__link internal",attrs:{to:"/work"}},[t._v("Work")])],1),t._v(" "),a("div",[a("router-link",{staticClass:"footer__link internal",attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),a("div",[a("router-link",{staticClass:"footer__link internal",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])],1)},le=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-group"},[a("div",[a("a",{staticClass:"footer__link",attrs:{href:"https://www.linkedin.com/in/maxmiracolo",target:"_blank"}},[t._v("LinkedIn")])]),t._v(" "),a("div",[a("a",{staticClass:"footer__link",attrs:{href:"mailto:max.miracolo@gmail.com",target:"_blank"}},[t._v("Email")])]),t._v(" "),a("div",[a("a",{staticClass:"footer__link",attrs:{href:"",target:"_blank"}},[t._v("Resume")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link-group"},[a("div",[a("a",{staticClass:"footer__link",attrs:{href:"https://codepen.io/mcolo",target:"_blank"}},[t._v("CodePen")])]),t._v(" "),a("div",[a("a",{staticClass:"footer__link",attrs:{href:"https://github.com/mcolo",target:"_blank"}},[t._v("GitHub")])])])}];function ce(t){a("3lL0")}var me=!1,ue=ce,he=null,ve=null,_e=Object(r["a"])(oe,re,le,me,ue,he,ve),de=_e.exports,pe={components:{appNav:ne,appFooter:de}},fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("app-nav"),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),t._v(" "),a("app-footer")],1)},ge=[];function be(t){a("DEKx")}var ke=!1,we=be,Ce="data-v-4d02f3b3",ye=null,xe=Object(r["a"])(pe,fe,ge,ke,we,Ce,ye),Se=xe.exports;s["a"].use(d["a"]);var Ee=[{path:"/",component:O,name:"home"},{path:"/work",component:Se,children:[{path:"",component:Rt,name:"work"},{path:"/about",component:V,name:"about"},{path:"/contact",component:at,name:"contact"}]},{path:"/thanks",component:ht,name:"thanks"},{path:"*",redirect:"/"}],Me=new d["a"]({routes:Ee,linkActiveClass:"nav__link--active",mode:"history"});s["a"].config.productionTip=!1,new s["a"]({router:Me,render:function(t){return t(_)}}).$mount("#app")},PGHY:function(t,e){},QBtf:function(t,e){},"SfD/":function(t,e){},"kH+f":function(t,e){},p7Qu:function(t,e){}},[0]);
//# sourceMappingURL=app.de9b3d50.js.map