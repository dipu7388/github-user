(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var o=e("fXoL");var c=e("jhN1"),r=e("tyNb"),a=e("mrSG"),i=e("tk/3");let l=(()=>{class t{constructor(t){this.http=t}get({url:t,params:n=new i.d}){return Object(a.a)(this,void 0,void 0,function*(){return this.http.get(t,{params:n,headers:new i.c}).toPromise()})}post(t,n=new i.d){return Object(a.a)(this,void 0,void 0,function*(){return this.http.post(t,{params:n}).toPromise()})}}return t.\u0275fac=function(n){return new(n||t)(o.Wb(i.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=e("ofXK"),p=e("Xa2L");const b=function(t){return[t]};function g(t,n){if(1&t&&(o.Sb(0,"a",34),o.Ac(1),o.Rb()),2&t){const t=n.$implicit;o.jc("routerLink",o.lc(2,b,null==t?null:t.path)),o.Bb(1),o.Cc(" ",null==t?null:t.label," ")}}function u(t,n){1&t&&(o.Sb(0,"div",35),o.Nb(1,"mat-spinner"),o.Rb())}let d=(()=>{class t{constructor(t,n,e){this.http=t,this.activateRoute=n,this.router=e,this.loading=!0,this.tabs=[{label:"Overview",path:"overview"},{label:"Repositories",path:"repo"},{label:"Projects",path:"project"},{label:"Packages",path:"package"}],this.start=Math.round(20*Math.random()),this.fetchUserData()}ngOnInit(){}fetchUserData(){return Object(a.a)(this,void 0,void 0,function*(){try{let[t]=yield Promise.all([this.fetchData()]);this.user=t}catch(t){}finally{this.loading=!1}})}fetchData(){let t=new i.d;return this.http.get({url:"https://api.github.com/users/"+this.activateRoute.snapshot.paramMap.get("id"),params:t})}fetchContribution(){let t=new i.d;return this.http.get({url:`https://github.com/users/${this.activateRoute.snapshot.paramMap.get("id")}/contributions`,params:t})}debounceScroll(t,n){let e;return function(...o){let c=this;clearTimeout(e),e=setTimeout(()=>{t.apply(c,o)},n)}}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(r.a),o.Mb(r.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["dk-home"]],decls:90,vars:13,consts:[["routerLink","/",2,"color","#fff"],[1,"fa","fa-github",2,"font-size","2em"],["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],[1,"wrapper"],[1,"left"],["alt","user Image",1,"user-img",3,"src"],[1,"name"],[1,"buttons"],[1,"fa","fa-heart-o"],[3,"innerHTML"],["aria-hidden","true",1,"fa","fa-users"],[1,"fa","fa-star-half-o"],[1,"fa","fa-building-o"],[1,"fa","fa-map-marker"],[3,"href"],[1,"fa","fa-link"],[1,"right"],[1,"footer"],[1,"bdr"],[1,"list-style-none"],[1,"mr-3","mr-lg-0"],["href","https://docs.github.com/en/github/site-policy/github-terms-of-service"],["href","https://docs.github.com/en/github/site-policy/github-privacy-statement"],["href","https://github.com/security"],["href","https://www.githubstatus.com/"],["href","https://docs.github.com"],["href","https://support.github.com"],["href","https://github.com/pricing"],["href","https://services.github.com"],["href","https://github.blog"],["href","https://github.com/about"],[1,"d-flex","flex-justify-center","pb-6"],[1,"f6","color-text-tertiary"],["class","loader",4,"ngIf"],["routerLinkActive","active",3,"routerLink"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"header"),o.Sb(1,"a",0),o.Nb(2,"i",1),o.Rb(),o.Sb(3,"h1"),o.Ac(4,"GitHub"),o.Rb(),o.Rb(),o.Nb(5,"br"),o.Sb(6,"nav"),o.zc(7,g,2,4,"a",2),o.Rb(),o.Sb(8,"div",3),o.Sb(9,"div",4),o.Nb(10,"img",5),o.Sb(11,"p",6),o.Ac(12),o.Rb(),o.Sb(13,"p"),o.Ac(14),o.Rb(),o.Nb(15,"br"),o.Sb(16,"div",7),o.Sb(17,"button"),o.Ac(18,"Follow"),o.Rb(),o.Sb(19,"button"),o.Nb(20,"i",8),o.Ac(21," Sponser"),o.Rb(),o.Sb(22,"button"),o.Ac(23,"..."),o.Rb(),o.Rb(),o.Nb(24,"br"),o.Nb(25,"div",9),o.Nb(26,"br"),o.Sb(27,"p"),o.Nb(28,"i",10),o.Ac(29),o.Sb(30,"b"),o.Ac(31,"."),o.Rb(),o.Ac(32),o.Nb(33,"i",11),o.Ac(34),o.Rb(),o.Nb(35,"br"),o.Sb(36,"p"),o.Nb(37,"i",12),o.Ac(38),o.Rb(),o.Sb(39,"p"),o.Nb(40,"i",13),o.Ac(41),o.Rb(),o.Sb(42,"a",14),o.Sb(43,"p"),o.Nb(44,"i",15),o.Ac(45),o.Rb(),o.Rb(),o.Rb(),o.Sb(46,"div",16),o.Nb(47,"router-outlet"),o.Rb(),o.Rb(),o.Sb(48,"div",17),o.Sb(49,"div",18),o.Sb(50,"ul",19),o.Sb(51,"li",20),o.Ac(52,"\xa9 2021 GitHub, Inc."),o.Rb(),o.Sb(53,"li",20),o.Sb(54,"a",21),o.Ac(55,"Terms"),o.Rb(),o.Rb(),o.Sb(56,"li",20),o.Sb(57,"a",22),o.Ac(58,"Privacy"),o.Rb(),o.Rb(),o.Sb(59,"li",20),o.Sb(60,"a",23),o.Ac(61,"Security"),o.Rb(),o.Rb(),o.Sb(62,"li",20),o.Sb(63,"a",24),o.Ac(64,"Status"),o.Rb(),o.Rb(),o.Sb(65,"li"),o.Sb(66,"a",25),o.Ac(67,"Docs"),o.Rb(),o.Rb(),o.Rb(),o.Sb(68,"ul",19),o.Sb(69,"li",20),o.Sb(70,"a",26),o.Ac(71,"Contact GitHub"),o.Rb(),o.Rb(),o.Sb(72,"li",20),o.Sb(73,"a",27),o.Ac(74,"Pricing"),o.Rb(),o.Rb(),o.Sb(75,"li",20),o.Sb(76,"a",25),o.Ac(77,"API"),o.Rb(),o.Rb(),o.Sb(78,"li",20),o.Sb(79,"a",28),o.Ac(80,"Training"),o.Rb(),o.Rb(),o.Sb(81,"li",20),o.Sb(82,"a",29),o.Ac(83,"Blog"),o.Rb(),o.Rb(),o.Sb(84,"li"),o.Sb(85,"a",30),o.Ac(86,"About"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(87,"div",31),o.Nb(88,"span",32),o.Rb(),o.Rb(),o.zc(89,u,2,0,"div",33)),2&t&&(o.Bb(7),o.jc("ngForOf",n.tabs),o.Bb(3),o.jc("src",null==n.user?null:n.user.avatar_url,o.sc),o.Bb(2),o.Bc(null==n.user?null:n.user.name),o.Bb(2),o.Bc(null==n.user?null:n.user.login),o.Bb(11),o.jc("innerHTML",null==n.user?null:n.user.bio,o.rc),o.Bb(4),o.Cc(" ",null==n.user?null:n.user.followers," Followers "),o.Bb(3),o.Cc(" ",null==n.user?null:n.user.following," Following "),o.Bb(2),o.Cc(" ",n.start," "),o.Bb(4),o.Bc(null==n.user?null:n.user.company),o.Bb(3),o.Bc(null==n.user?null:n.user.location),o.Bb(1),o.jc("href",null==n.user?null:n.user.blog,o.sc),o.Bb(3),o.Cc(" ",null==n.user?null:n.user.blog,""),o.Bb(44),o.jc("ngIf",n.loading))},directives:[r.d,s.j,r.f,s.k,r.c,p.b],styles:['.row[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{*zoom:1}.row[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:before, .wrapper[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:before{content:" ";display:table}.row[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:after{clear:both}.wrapper[_ngcontent-%COMP%]{width:100%}img[_ngcontent-%COMP%]{width:auto;max-width:100%;height:auto}[class*=column-][_ngcontent-%COMP%]{float:left;width:100%;min-height:1px;margin-right:24px}.row[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%]:last-child{margin-right:0}@media only screen and (min-width:60em){.wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%}.column-1[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 1 + (1 - 1) * 24px)}.column-1[_ngcontent-%COMP%], .column-2[_ngcontent-%COMP%]{display:inline-block}.column-2[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 2 + (2 - 1) * 24px)}.column-3[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 3 + (3 - 1) * 24px)}.column-3[_ngcontent-%COMP%], .column-4[_ngcontent-%COMP%]{display:inline-block}.column-4[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 4 + (4 - 1) * 24px)}.column-5[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 5 + (5 - 1) * 24px)}.column-5[_ngcontent-%COMP%], .column-6[_ngcontent-%COMP%]{display:inline-block}.column-6[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 6 + (6 - 1) * 24px)}.column-7[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 7 + (7 - 1) * 24px)}.column-7[_ngcontent-%COMP%], .column-8[_ngcontent-%COMP%]{display:inline-block}.column-8[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 8 + (8 - 1) * 24px)}.column-9[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 9 + (9 - 1) * 24px);display:inline-block}.column-10[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 10 + (10 - 1) * 24px);display:inline-block}.column-11[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 11 + (11 - 1) * 24px);display:inline-block}.column-12[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 12 + (12 - 1) * 24px);display:inline-block}}header[_ngcontent-%COMP%]{background-color:#24292e;display:flex;flex-direction:row;height:50px;place-items:center;padding:0 24px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#fff;width:100%}nav[_ngcontent-%COMP%]{padding-left:calc(25% + 24px);border-bottom:.25px solid #707070;position:sticky;top:0;z-index:2;background-color:#fff}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#555a70;padding:5px;margin:0 8px}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom:2px solid #f9826c;outline-offset:-1px}p[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{margin-right:.75em}a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wrapper[_ngcontent-%COMP%]{min-height:100%;padding:24px;max-width:1280px;margin:0 auto}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:25%;float:left;margin-top:-50px}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{border-radius:50%;z-index:3;position:relative}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#24292e;font-size:1.25em;font-weight:700}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:.3em;padding:.5em 1em;border:none;outline:none;border-radius:5px}.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:75%;float:left;height:100%;padding-left:1em;max-width:720px;position:relative}.fname[_ngcontent-%COMP%]{text-align:center}.simplebar-scroll-content[_ngcontent-%COMP%]{min-width:100%!important;max-height:inherit!important;box-sizing:initial!important}.simplebar-content[_ngcontent-%COMP%]{box-sizing:border-box!important;min-height:100%!important}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:3em 2em}.footer[_ngcontent-%COMP%]   .bdr[_ngcontent-%COMP%]{border-top:1px solid #eaecef}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0366d6;font-size:.8em}.footer[_ngcontent-%COMP%]   .list-style-none[_ngcontent-%COMP%]{list-style:none}.footer[_ngcontent-%COMP%]   .list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:.3em .5em;margin:.5em .75em}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}']}),t})();var h=e("znSr");function m(t,n){if(1&t&&(o.Sb(0,"div",7),o.Sb(1,"a",8),o.Sb(2,"p",9),o.Ac(3),o.Rb(),o.Rb(),o.Sb(4,"p",10),o.Ac(5),o.Rb(),o.Sb(6,"div",11),o.Sb(7,"span"),o.Nb(8,"i",12),o.Ac(9),o.Rb(),o.Sb(10,"span"),o.Nb(11,"i",13),o.Ac(12),o.Rb(),o.Rb(),o.Rb()),2&t){const t=n.$implicit;o.Bb(1),o.jc("href",null==t?null:t.html_url,o.sc),o.Bb(2),o.Bc(null==t?null:t.name),o.Bb(2),o.Bc(null==t?null:t.description),o.Bb(4),o.Cc(" ",null==t?null:t.language," "),o.Bb(3),o.Cc(" ",null==t?null:t.forks_count," ")}}function f(t,n){if(1&t&&(o.Sb(0,"div"),o.Sb(1,"a",8),o.Sb(2,"p",9),o.Ac(3),o.Rb(),o.Rb(),o.Sb(4,"p",10),o.Ac(5),o.Rb(),o.Rb()),2&t){const t=n.$implicit;o.Bb(1),o.jc("href","https://github.com/"+(null==t?null:t.name),o.sc),o.Bb(2),o.Bc(null==t?null:t.name),o.Bb(2),o.Cc("",null==t?null:t.count," Actions")}}function O(t,n){if(1&t&&(o.Qb(0),o.zc(1,f,6,3,"div",5),o.Pb()),2&t){const t=o.ec().$implicit;o.Bb(1),o.jc("ngForOf",null==t?null:t.repos)}}const M=function(t,n){return{"fa-caret-down":t,"fa-caret-up":n}};function C(t,n){if(1&t&&(o.Sb(0,"div",18),o.Sb(1,"div",19),o.Nb(2,"i",20),o.Rb(),o.Sb(3,"span",21),o.ac("click",function(){const t=n.$implicit;return t.show=!t.show}),o.Ac(4),o.Nb(5,"i",22),o.Rb(),o.zc(6,O,2,1,"ng-container",23),o.Rb()),2&t){const t=n.$implicit;o.Bb(4),o.Ec("Created ",t.total," ",null==t?null:t.event," in ",null==t||null==t.repos?null:t.repos.length," Repository "),o.Bb(1),o.jc("ngClass",o.mc(5,M,!t.show,t.show)),o.Bb(1),o.jc("ngIf",null==t?null:t.show)}}function P(t,n){if(1&t&&(o.Sb(0,"div",15),o.Sb(1,"h3",16),o.Sb(2,"span"),o.Ac(3),o.Rb(),o.Rb(),o.zc(4,C,7,8,"div",17),o.Rb()),2&t){const t=n.$implicit,e=o.ec().$implicit;o.Bb(3),o.Dc("",null==t?null:t.name," \xa0 ",null==e?null:e.year,""),o.Bb(1),o.jc("ngForOf",null==t?null:t.data)}}function _(t,n){if(1&t&&(o.Sb(0,"div"),o.zc(1,P,5,3,"div",14),o.Rb()),2&t){const t=n.$implicit;o.Bb(1),o.jc("ngForOf",null==t?null:t.data)}}function w(t,n){1&t&&(o.Sb(0,"div",24),o.Nb(1,"mat-spinner"),o.Rb())}const v=["January","Febuary","March","April","May","June","July","August","Septuber","October","November","December"];let x=(()=>{class t{constructor(t,n){this.http=t,this.activateRoute=n,this.evts=[],this.loading=!0,this.repos=[],this.fetchUserData(),this.fetchContri()}fetchUserData(){return Object(a.a)(this,void 0,void 0,function*(){try{let t;[t,this.repos]=yield Promise.all([this.fetchEvents(),this.fetchRepoList()]),this.evts=t.reduce((t,n)=>[...t,...n],[]);let n=this.evts.reduce((t,n)=>{let e=new Date(n.created_at).getFullYear();return t.has(e)?t.get(e).push(n):t.set(e,[n]),t},new Map),e=[];for(let[o,c]of n){let t={year:o},n=c.reduce((t,n)=>{let e=new Date(n.created_at).getMonth();return t.has(e)?t.get(e).push(n):t.set(e,[n]),t},new Map),r=[];for(let[e,o]of n){let t={month:e,name:v[e]},n=o.reduce((t,n)=>(t.has(n.type)?t.get(n.type).push(n):t.set(n.type,[n]),t),new Map);t.data=[];for(let[e,o]of n){let n={event:e},c=o.reduce((t,n)=>(t.has(n.repo.name)?t.get(n.repo.name).push(n):t.set(n.repo.name,[n]),t),new Map);n.repos=[],n.total=0;for(let[t,e]of c){let o={name:t};o.count=e.length,n.total+=o.count,n.repos.push(o)}t.data.push(n)}r.push(t)}t.data=r.sort((t,n)=>n.month-t.month),e.push(t)}this.activies=e,console.log(e)}catch(t){}finally{this.loading=!1}})}ngOnInit(){}fetchEvents(){return Promise.all([this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/events`,params:(new i.d).set("per_page","100").set("page","1")}),this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/events`,params:(new i.d).set("per_page","100").set("page","2")}),this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/events`,params:(new i.d).set("per_page","100").set("page","3")})])}fetchRepoList(){return this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/starred`,params:(new i.d).set("per_page","10").set("type","public")})}fetchContri(){return Object(a.a)(this,void 0,void 0,function*(){})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-overview"]],decls:11,vars:3,consts:[[1,"wrapper"],[1,"card-wrapper"],["class","card",4,"ngFor","ngForOf"],[1,"activities"],["src","assets/contri.png","alt",""],[4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[1,"card"],["target","_blanck",3,"href"],[1,"name"],[1,"desc"],[1,"card-bottom"],[1,"fa","fa-circle"],[1,"fa","fa-code-fork"],["class","month-data",4,"ngFor","ngForOf"],[1,"month-data"],[1,"timeline"],["class","events",4,"ngFor","ngForOf"],[1,"events"],[1,"event-badge"],[1,"fa","fa-github-square"],[1,"event",3,"click"],[1,"fa","icon",3,"ngClass"],[4,"ngIf"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"h2"),o.Ac(2,"Popular repositories"),o.Rb(),o.Sb(3,"div",1),o.zc(4,m,13,5,"div",2),o.Rb(),o.Sb(5,"div",3),o.Nb(6,"img",4),o.Sb(7,"h3"),o.Ac(8,"Contribution activity"),o.Rb(),o.zc(9,_,2,1,"div",5),o.Rb(),o.Rb(),o.zc(10,w,2,0,"div",6)),2&t&&(o.Bb(4),o.jc("ngForOf",n.repos),o.Bb(5),o.jc("ngForOf",n.activies),o.Bb(1),o.jc("ngIf",n.loading))},directives:[s.j,s.k,s.i,h.a,p.b],styles:[".wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1em;color:#24292e;font-weight:800;text-indent:1em}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 2em);margin:1em;background-color:#fff;border:1px solid #e1e4e8;border-radius:6px;padding:.8em;display:flex;flex-direction:column;font-size:.8em}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6;font-size:.9em}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{flex:1 0 auto;font-size:.7em;margin:.5em 0}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]{font-size:.6em;display:flex}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){margin-left:.5em}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#24292e;font-weight:550}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{border-bottom:1px solid #e1e4e8;height:14px;margin-bottom:1em}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#fff;margin-left:-1em}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]{padding:1em 0 1em 1.5em;border-left:1px solid #e1e4e8}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .events[_ngcontent-%COMP%]   .event-badge[_ngcontent-%COMP%]{display:inline-block;margin-left:-1.9em;margin-right:1em}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]{font-size:1em;font-weight:500;cursor:pointer}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;right:24px}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:hover{color:#0366d6}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6;font-size:.8em}.wrapper[_ngcontent-%COMP%]   .activities[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:.6em}"]}),t})(),R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-packages"]],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"p"),o.Ac(2,"package works!"),o.Rb(),o.Rb())},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})(),S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-projects"]],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"p"),o.Ac(2,"projects works!"),o.Rb(),o.Rb())},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})();function y(t,n){if(1&t&&(o.Sb(0,"div",4),o.Sb(1,"a",5),o.Sb(2,"p",6),o.Ac(3),o.Rb(),o.Rb(),o.Sb(4,"p",7),o.Ac(5),o.Rb(),o.Sb(6,"div",8),o.Sb(7,"span"),o.Nb(8,"i",9),o.Ac(9),o.Rb(),o.Sb(10,"span"),o.Nb(11,"i",10),o.Ac(12),o.Rb(),o.Rb(),o.Rb()),2&t){const t=n.$implicit;o.Bb(1),o.jc("href",null==t?null:t.html_url,o.sc),o.Bb(2),o.Bc(null==t?null:t.name),o.Bb(2),o.Bc(null==t?null:t.description),o.Bb(4),o.Cc(" ",null==t?null:t.language," "),o.Bb(3),o.Cc(" ",null==t?null:t.forks_count," ")}}function k(t,n){1&t&&(o.Sb(0,"div",11),o.Nb(1,"mat-spinner"),o.Rb())}const B=[{path:":id",component:d,children:[{path:"overview",component:x},{path:"repo",component:(()=>{class t{constructor(t,n){this.http=t,this.activateRoute=n,this.repos=[],this.loading=!0,this.fetchRepoList()}ngOnInit(){}fetchRepoList(){return Object(a.a)(this,void 0,void 0,function*(){try{this.repos=yield this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/repos`})}catch(t){}finally{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(r.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-repository"]],decls:4,vars:2,consts:[[1,"wrapper"],[1,"card-wrapper"],["class","card",4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[1,"card"],["target","_blanck",3,"href"],[1,"name"],[1,"desc"],[1,"card-bottom"],[1,"fa","fa-circle"],[1,"fa","fa-code-fork"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.zc(2,y,13,5,"div",2),o.Rb(),o.Rb(),o.zc(3,k,2,0,"div",3)),2&t&&(o.Bb(2),o.jc("ngForOf",n.repos),o.Bb(1),o.jc("ngIf",n.loading))},directives:[s.j,s.k,p.b],styles:[".wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 2em);margin:1em;background-color:#fff;border:1px solid #e1e4e8;border-radius:6px;padding:.8em;display:flex;flex-direction:column;font-size:.8em}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6;font-size:.9em}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{flex:1 0 auto;font-size:.7em;margin:.5em 0}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]{font-size:.6em;display:flex}.wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child){margin-left:.5em}"]}),t})()},{path:"package",component:R},{path:"project",component:S},{path:"",redirectTo:"overview",pathMatch:"full"}]},{path:"",redirectTo:"erossignon",pathMatch:"full"}];let A=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[r.e.forRoot(B,{relativeLinkResolution:"legacy"})],r.e]}),t})();var j=e("XNiG");let F=(()=>{class t{constructor(){this.menuFlag=!1,this.menuState=new j.a,this.menuState.next(this.menuFlag)}open(){this.menuFlag=!0,this.menuState.next(this.menuFlag)}close(){this.menuFlag=!1,this.menuState.next(this.menuFlag)}toggle(){this.menuFlag=!this.menuFlag,this.menuState.next(this.menuFlag)}menuObs(){return this.menuState}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),z=(()=>{class t{constructor(t,n,e,o){this.appStateService=t,this.http=n,this.activatedRoute=e,this.router=o,this.title="dheerendra",this.menuFlag$=this.appStateService.menuObs(),this.val=!1,this.tabs=[{label:"Overview",path:"overview"},{label:"Repositories",path:"repo"},{label:"Projects",path:"project"},{label:"Packages",path:"package"}],console.log(e.snapshot.params),e.params.subscribe(t=>{console.log(t)})}fetchData(){return Object(a.a)(this,void 0,void 0,function*(){let t=new i.d;this.loading=!0;try{yield this.http.get({url:"https://api.github.com",params:t})}catch(n){}finally{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(F),o.Mb(l),o.Mb(r.a),o.Mb(r.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["dk-root"]],decls:4,vars:0,consts:[[1,"pages-stack"],[1,"simplebar-scroll-content"],[1,"simplebar-content"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Nb(3,"router-outlet"),o.Rb(),o.Rb(),o.Rb())},directives:[r.f],styles:['.row[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{*zoom:1}.row[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:before, .wrapper[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:before{content:" ";display:table}.row[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:after{clear:both}.wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto}img[_ngcontent-%COMP%]{width:auto;max-width:100%;height:auto}[class*=column-][_ngcontent-%COMP%]{float:left;width:100%;min-height:1px;margin-right:24px}.row[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%]:last-child{margin-right:0}@media only screen and (min-width:60em){.wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%}.column-1[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 1 + (1 - 1) * 24px)}.column-1[_ngcontent-%COMP%], .column-2[_ngcontent-%COMP%]{display:inline-block}.column-2[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 2 + (2 - 1) * 24px)}.column-3[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 3 + (3 - 1) * 24px)}.column-3[_ngcontent-%COMP%], .column-4[_ngcontent-%COMP%]{display:inline-block}.column-4[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 4 + (4 - 1) * 24px)}.column-5[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 5 + (5 - 1) * 24px)}.column-5[_ngcontent-%COMP%], .column-6[_ngcontent-%COMP%]{display:inline-block}.column-6[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 6 + (6 - 1) * 24px)}.column-7[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 7 + (7 - 1) * 24px)}.column-7[_ngcontent-%COMP%], .column-8[_ngcontent-%COMP%]{display:inline-block}.column-8[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 8 + (8 - 1) * 24px)}.column-9[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 9 + (9 - 1) * 24px);display:inline-block}.column-10[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 10 + (10 - 1) * 24px);display:inline-block}.column-11[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 11 + (11 - 1) * 24px);display:inline-block}.column-12[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 12 + (12 - 1) * 24px);display:inline-block}}.pages-stack[_ngcontent-%COMP%]{background-color:#fff;height:100%;pointer-events:auto}.simplebar-content[_ngcontent-%COMP%], .simplebar-scroll-content[_ngcontent-%COMP%]{height:100%}']}),t})();var N=e("3Pt+"),I=e("0IaG"),D=e("dNgK"),$=e("qFsG"),L=e("u47x"),G=e("B/XX"),U=e("f6nW"),T=e("FvrZ"),J=e("/1cH"),H=e("TU8p"),X=e("2ChS"),K=e("bTqV"),E=e("jaxi"),q=e("Wp6s"),W=e("bSwM"),Q=e("A5z7"),Y=e("FKr1"),Z=e("iadO"),V=e("f0Cb"),tt=e("7EHt"),nt=e("kmnG"),et=e("zkoq"),ot=e("NFeN"),ct=e("MutI"),rt=e("STbY"),at=e("M9IT"),it=e("bv9b"),lt=e("QibW"),st=e("d3UM"),pt=e("XhcP"),bt=e("1jcm"),gt=e("5RNC"),ut=e("Dh3D"),dt=e("xHqg"),ht=e("+0xr"),mt=e("wZkO"),ft=e("/t3+"),Ot=e("Qu3c"),Mt=e("8yBR"),Ct=e("+rOU"),Pt=e("vxfF"),_t=e("5+WD"),wt=e("rDax"),vt=e("UXJo");let xt=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[L.a,vt.a,G.e,U.r,T.d,_t.a,J.a,H.a,X.a,K.b,E.a,q.a,W.a,Q.a,dt.a,Z.a,I.b,V.a,tt.a,et.a,ot.b,$.b,ct.a,rt.a,Y.l,at.a,it.a,p.a,lt.a,Y.s,st.b,pt.a,gt.a,bt.a,D.a,ut.a,ht.a,mt.a,ft.a,Ot.b,Mt.a,wt.f,Ct.f,Pt.d,nt.d]}),t})();var Rt=e("YUcS");let St=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[s.c,r.e,N.d,N.i,xt,Rt.a,N.i,i.b],N.d,N.i,xt,Rt.a,N.i,i.b]}),t})(),yt=(()=>{class t{}return t.\u0275mod=o.Kb({type:t,bootstrap:[z]}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[c.a,A,St]]}),t})();Object(o.U)(),c.c().bootstrapModule(yt).catch(t=>console.error(t))},zn8P:function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,4]]]);