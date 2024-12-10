(function(){"use strict";var e={360:function(e,t,o){var n=o(3751),a=o(641);function r(e,t){const o=(0,a.g2)("router-link"),n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("nav",null,[(0,a.bF)(o,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Home")]))),_:1}),t[2]||(t[2]=(0,a.eW)(" | ")),(0,a.bF)(o,{to:"/about"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("test")]))),_:1})]),(0,a.bF)(n)],64)}var s=o(6262);const i={},l=(0,s.A)(i,[["render",r]]);var u=l,c=o(5220),d=o.p+"img/logo-cc.c9d7b9f8.png";const p={class:"wrapper"};function m(e,t,o,n,r,s){const i=(0,a.g2)("Login");return(0,a.uX)(),(0,a.CE)("div",p,[t[0]||(t[0]=(0,a.Lk)("img",{alt:"Vue logo",src:d},null,-1)),(0,a.bF)(i)])}var f=o(7884);function h(e,t,o,r,s,i){return(0,a.uX)(),(0,a.CE)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...t)=>e.handleLogin&&e.handleLogin(...t)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.teamName=e),placeholder:"Team name",class:"team-input"},null,512),[[n.Jo,s.teamName]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.login&&i.login(...e)),class:"login-button"},"Log in")],32)}o(4114);var v={data(){return{teamName:""}},methods:{login(){this.teamName.trim()&&this.$router.push({name:"Vote",query:{team:this.teamName}})}}};const b=(0,s.A)(v,[["render",h],["__scopeId","data-v-8c1bf2ea"]]);var k=b,g=function(e,t,o,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(r<3?a(s):r>3?a(t,o,s):a(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};let L=class extends f.lD{};L=g([(0,f.JY)({components:{Login:k}})],L);var y=L;const C=(0,s.A)(y,[["render",m],["__scopeId","data-v-614157c0"]]);var w=C;const E={class:"default-page-wrapper"},T={class:"button-container"};function D(e,t,o,n,r,s){return(0,a.uX)(),(0,a.CE)("div",E,[t[2]||(t[2]=(0,a.Lk)("h3",null,"Welcome Admin to secret santa christmas cocktails!",-1)),t[3]||(t[3]=(0,a.Lk)("p",null,"To begin please click the team who are currently presenting their cocktail. ",-1)),(0,a.Lk)("div",T,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>n.navigateTo("/hlj"))},"Hannah, Louis & Jack"),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>n.navigateTo("/vote"))},"test")])])}var _={name:"AdminPage",setup(){const e=(0,c.rd)(),t=t=>{e.push(t)};return{navigateTo:t}}};const j=(0,s.A)(_,[["render",D]]);var P=j,A=o(33);const O={class:"team-wrapper"},S={class:"back"},X=["value"],V=["value"],F=["value"];function x(e,t,o,r,s,i){return(0,a.uX)(),(0,a.CE)("div",O,[(0,a.Lk)("div",S,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goBack&&e.goBack(...t)),class:"back-btn"},t[5]||(t[5]=[(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[(0,a.Lk)("path",{d:"M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"})],-1),(0,a.eW)(" Back ")]))]),t[13]||(t[13]=(0,a.Lk)("div",{class:"text"},[(0,a.Lk)("h3",null,"Time to vote on Hannah, Louis & Jack's cocktail."),(0,a.Lk)("h4",null,"Use the inputs below to vote for each category. (0 - 10)")],-1)),(0,a.Lk)("form",{onSubmit:t[4]||(t[4]=(0,n.D$)(((...t)=>e.handleSubmit&&e.handleSubmit(...t)),["prevent"]))},[t[9]||(t[9]=(0,a.Lk)("label",{for:"presentation"},"Presentation",-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedPresentation=t),required:""},[t[6]||(t[6]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.points,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,A.v_)(e),9,X)))),128))],512),[[n.u1,e.selectedPresentation]]),t[10]||(t[10]=(0,a.Lk)("label",{for:"decorations"},"Decorations",-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedDecorations=t),required:""},[t[7]||(t[7]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.points,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,A.v_)(e),9,V)))),128))],512),[[n.u1,e.selectedDecorations]]),t[11]||(t[11]=(0,a.Lk)("label",{for:"taste"},"Taste",-1)),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedTaste=t),required:""},[t[8]||(t[8]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.points,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,A.v_)(e),9,F)))),128))],512),[[n.u1,e.selectedTaste]]),t[12]||(t[12]=(0,a.Lk)("button",{type:"submit"},"Submit",-1))],32),t[14]||(t[14]=(0,a.Lk)("div",{class:"text"},[(0,a.Lk)("p",null,"If this is the wrong team press back at the top of this screen.")],-1))])}var I=(0,a.pM)({name:"hlj",data(){return{selectedPresentation:"",selectedDecorations:"",selectedTaste:"",points:Array.from({length:11},((e,t)=>t))}},methods:{handleSubmit(){console.log("Presentation Score:",this.selectedPresentation),console.log("Decorations Score:",this.selectedDecorations),console.log("Taste Score:",this.selectedTaste),alert(`You selected:\nPresentation: ${this.selectedPresentation}\nDecorations: ${this.selectedDecorations}\nTaste: ${this.selectedTaste}`),window.location.href="/next-page"}},setup(){const e=(0,c.rd)(),t=()=>{e.back()};return{goBack:t}}});const N=(0,s.A)(I,[["render",x],["__scopeId","data-v-e62986ca"]]);var U=N;const W={class:"voting-page"},B=["value"],H=["value"],K=["value"],$=["value"];function J(e,t,o,r,s,i){return(0,a.uX)(),(0,a.CE)("div",W,[(0,a.Lk)("h2",null,"Welcome, "+(0,A.v_)(s.teamName)+"!",1),(0,a.Lk)("p",null,[t[6]||(t[6]=(0,a.eW)("Use the form below to vote for each category (0 - 10). ")),(0,a.Lk)("span",{onClick:t[0]||(t[0]=(...e)=>i.showHint&&i.showHint(...e)),class:"hint-button"},"Hint")]),(0,a.Lk)("form",{onSubmit:t[5]||(t[5]=(0,n.D$)(((...e)=>i.submitVote&&i.submitVote(...e)),["prevent"]))},[t[11]||(t[11]=(0,a.Lk)("label",{for:"team"},[(0,a.eW)("Team "),(0,a.Lk)("span",null,"(The team who's cocktail you've just tasted)"),(0,a.eW)(":")],-1)),(0,a.bo)((0,a.Lk)("select",{id:"team","onUpdate:modelValue":t[1]||(t[1]=e=>s.formData.team=e)},[t[7]||(t[7]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose team --",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.teams,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,A.v_)(e),9,B)))),128))],512),[[n.u1,s.formData.team]]),t[12]||(t[12]=(0,a.Lk)("label",{for:"taste"},"Taste:",-1)),(0,a.bo)((0,a.Lk)("select",{id:"taste","onUpdate:modelValue":t[2]||(t[2]=e=>s.formData.taste=e)},[t[8]||(t[8]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(11,(e=>(0,a.Lk)("option",{key:e,value:e-1},(0,A.v_)(e-1),9,H))),64))],512),[[n.u1,s.formData.taste]]),t[13]||(t[13]=(0,a.Lk)("label",{for:"presentation"},"Presentation:",-1)),(0,a.bo)((0,a.Lk)("select",{id:"presentation","onUpdate:modelValue":t[3]||(t[3]=e=>s.formData.presentation=e)},[t[9]||(t[9]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(11,(e=>(0,a.Lk)("option",{key:e,value:e-1},(0,A.v_)(e-1),9,K))),64))],512),[[n.u1,s.formData.presentation]]),t[14]||(t[14]=(0,a.Lk)("label",{for:"christmasness"},"Christmasness:",-1)),(0,a.bo)((0,a.Lk)("select",{id:"christmasness","onUpdate:modelValue":t[4]||(t[4]=e=>s.formData.christmasness=e)},[t[10]||(t[10]=(0,a.Lk)("option",{disabled:"",value:""},"-- Choose points --",-1)),((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(11,(e=>(0,a.Lk)("option",{key:e,value:e-1},(0,A.v_)(e-1),9,$))),64))],512),[[n.u1,s.formData.christmasness]]),t[15]||(t[15]=(0,a.Lk)("button",{type:"submit",class:"submit-button"},"Submit",-1))],32)])}var q={data(){return{teamName:this.$route.query.team||"",formData:{team:"",taste:"",presentation:"",christmasness:""},teams:["Hannah, Louis & Jack","Ben, Abbie, Dom & Mary","Josh, Elise & Peter","Jonny, Emily & Stuart"]}},methods:{submitVote(){console.log("Votes submitted:",this.formData),alert("Thanks for voting!")},showHint(){alert("0 is Awful - 10 is Amazing")}}};const M=(0,s.A)(q,[["render",J]]);var R=M;const z=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,5609))},{path:"/admin",name:"AdminPage",component:P},{path:"/hlj",name:"hlj",component:U},{path:"/vote",name:"Vote",component:R}],Y=(0,c.aE)({history:(0,c.Bt)("/christmas-cocktails/"),routes:z});var G=Y;(0,n.Ef)(u).use(G).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.994c60f9.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="christmas-cocktail-app:";o.l=function(n,a,r,s){if(e[n])e[n].push(a);else{var i,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[a];var p=function(t,o){i.onerror=i.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/christmas-cocktails/"}(),function(){var e={524:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=r);var s=o.p+o.u(t),i=new Error,l=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,a[1](i)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,s=n[0],i=n[1],l=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var c=l(o)}for(t&&t(n);u<s.length;u++)r=s[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunkchristmas_cocktail_app"]=self["webpackChunkchristmas_cocktail_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(360)}));n=o.O(n)})();
//# sourceMappingURL=app.605901a7.js.map