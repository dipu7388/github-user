(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var o=e("fXoL");var c=e("jhN1"),a=e("tyNb"),r=e("mrSG"),i=e("tk/3");let l=(()=>{class t{constructor(t){this.http=t}get({url:t,params:n=new i.d}){return Object(r.a)(this,void 0,void 0,function*(){return this.http.get(t,{params:n,headers:new i.c}).toPromise()})}post(t,n=new i.d){return Object(r.a)(this,void 0,void 0,function*(){return this.http.post(t,{params:n}).toPromise()})}}return t.\u0275fac=function(n){return new(n||t)(o.Wb(i.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=e("ofXK"),s=e("Xa2L");const u=function(t){return[t]};function d(t,n){if(1&t&&(o.Sb(0,"a",10),o.zc(1),o.Rb()),2&t){const t=n.$implicit;o.jc("routerLink",o.lc(2,u,null==t?null:t.path)),o.Bb(1),o.Bc(" ",null==t?null:t.label," ")}}function g(t,n){1&t&&(o.Sb(0,"div",11),o.Nb(1,"mat-spinner"),o.Rb())}let b=(()=>{class t{constructor(t,n,e){this.http=t,this.activateRoute=n,this.router=e,this.loading=!0,this.tabs=[{label:"Overview",path:"overview"},{label:"Repositories",path:"repo"},{label:"Projects",path:"project"},{label:"Packages",path:"package"}],this.fetchUserData()}ngOnInit(){}fetchUserData(){return Object(r.a)(this,void 0,void 0,function*(){try{let[t]=yield Promise.all([this.fetchData()]);this.user=t}catch(t){}finally{this.loading=!1}})}fetchData(){let t=new i.d;return this.http.get({url:"https://api.github.com/users/"+this.activateRoute.snapshot.paramMap.get("id"),params:t})}fetchContribution(){let t=new i.d;return this.http.get({url:`https://github.com/users/${this.activateRoute.snapshot.paramMap.get("id")}/contributions`,params:t})}debounceScroll(t,n){let e;return function(...o){let c=this;clearTimeout(e),e=setTimeout(()=>{t.apply(c,o)},n)}}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(a.a),o.Mb(a.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["dk-home"]],decls:25,vars:7,consts:[["routerLink","/"],[1,"fa","fa-github",2,"font-size","2em"],["routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],[1,"wrapper"],[1,"left"],["alt","user Image",1,"user-img",3,"src"],["aria-hidden","true",1,"fa","fa-users"],[1,"fa","location"],[1,"right"],["class","loader",4,"ngIf"],["routerLinkActive","active",3,"routerLink"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"header"),o.Sb(1,"a",0),o.Nb(2,"i",1),o.Rb(),o.Sb(3,"h1"),o.zc(4,"GitHub"),o.Rb(),o.Rb(),o.Nb(5,"br"),o.Sb(6,"nav"),o.yc(7,d,2,4,"a",2),o.Rb(),o.Sb(8,"div",3),o.Sb(9,"div",4),o.Nb(10,"img",5),o.Sb(11,"p"),o.zc(12),o.Rb(),o.Sb(13,"p"),o.Nb(14,"i",6),o.zc(15),o.Sb(16,"b"),o.zc(17,"."),o.Rb(),o.zc(18),o.Rb(),o.Sb(19,"p"),o.Nb(20,"i",7),o.zc(21),o.Rb(),o.Rb(),o.Sb(22,"div",8),o.Nb(23,"router-outlet"),o.Rb(),o.Rb(),o.yc(24,g,2,0,"div",9)),2&t&&(o.Bb(7),o.jc("ngForOf",n.tabs),o.Bb(3),o.jc("src",null==n.user?null:n.user.avatar_url,o.rc),o.Bb(2),o.Ac(null==n.user?null:n.user.login),o.Bb(3),o.Bc(" ",null==n.user?null:n.user.followers," Followers "),o.Bb(3),o.Bc(" ",null==n.user?null:n.user.following," Following "),o.Bb(3),o.Ac(null==n.user?null:n.user.location),o.Bb(3),o.jc("ngIf",n.loading))},directives:[a.d,p.j,a.f,p.k,a.c,s.b],styles:['.row[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{*zoom:1}.row[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:before, .wrapper[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:before{content:" ";display:table}.row[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:after{clear:both}.wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto}img[_ngcontent-%COMP%]{width:auto;max-width:100%;height:auto}[class*=column-][_ngcontent-%COMP%]{float:left;width:100%;min-height:1px;margin-right:24px}.row[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%]:last-child{margin-right:0}@media only screen and (min-width:60em){.wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%}.column-1[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 1 + (1 - 1) * 24px)}.column-1[_ngcontent-%COMP%], .column-2[_ngcontent-%COMP%]{display:inline-block}.column-2[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 2 + (2 - 1) * 24px)}.column-3[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 3 + (3 - 1) * 24px)}.column-3[_ngcontent-%COMP%], .column-4[_ngcontent-%COMP%]{display:inline-block}.column-4[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 4 + (4 - 1) * 24px)}.column-5[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 5 + (5 - 1) * 24px)}.column-5[_ngcontent-%COMP%], .column-6[_ngcontent-%COMP%]{display:inline-block}.column-6[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 6 + (6 - 1) * 24px)}.column-7[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 7 + (7 - 1) * 24px)}.column-7[_ngcontent-%COMP%], .column-8[_ngcontent-%COMP%]{display:inline-block}.column-8[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 8 + (8 - 1) * 24px)}.column-9[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 9 + (9 - 1) * 24px);display:inline-block}.column-10[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 10 + (10 - 1) * 24px);display:inline-block}.column-11[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 11 + (11 - 1) * 24px);display:inline-block}.column-12[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 12 + (12 - 1) * 24px);display:inline-block}}header[_ngcontent-%COMP%]{background-color:#24292e;display:flex;flex-direction:row;height:50px;place-items:center;padding:0 24px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;color:#fff;width:100%}nav[_ngcontent-%COMP%]{padding-left:calc(25% + 24px);border-bottom:.25px solid #707070;position:sticky;top:0;z-index:2;background-color:#f6f6f6}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#555a70;padding:5px;margin:0 8px}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom:2px solid #f9826c;outline-offset:-1px}.wrapper[_ngcontent-%COMP%]{height:100%;padding:24px}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:25%;float:left;margin-top:-50px}.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]{border-radius:50%;z-index:3;position:relative}.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:75%;float:left;height:100%}.fname[_ngcontent-%COMP%]{text-align:center}.simplebar-scroll-content[_ngcontent-%COMP%]{min-width:100%!important;max-height:inherit!important;box-sizing:initial!important}.simplebar-content[_ngcontent-%COMP%]{box-sizing:border-box!important;min-height:100%!important}']}),t})();function h(t,n){if(1&t&&(o.Sb(0,"div",3),o.Sb(1,"p",4),o.zc(2),o.Rb(),o.Sb(3,"p"),o.zc(4),o.Rb(),o.Sb(5,"p"),o.zc(6),o.Rb(),o.Rb()),2&t){const t=n.$implicit;o.Bb(2),o.Bc("Type : ",null==t?null:t.type,""),o.Bb(2),o.Bc("Repo name: ",null==t||null==t.repo?null:t.repo.name,""),o.Bb(2),o.Bc("Event By:",null==t||null==t.actor?null:t.actor.login,"")}}function m(t,n){1&t&&(o.Sb(0,"div",5),o.Nb(1,"mat-spinner"),o.Rb())}let f=(()=>{class t{constructor(t,n){this.http=t,this.activateRoute=n,this.evts=[],this.loading=!0,this.fetchEvents()}ngOnInit(){}fetchEvents(){return Object(r.a)(this,void 0,void 0,function*(){try{this.evts=yield this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/events/public`})}catch(t){}finally{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(a.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-overview"]],decls:3,vars:2,consts:[[1,"wrapper"],["class","card",4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[1,"card"],[1,"name"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.yc(1,h,7,3,"div",1),o.Rb(),o.yc(2,m,2,0,"div",2)),2&t&&(o.Bb(1),o.jc("ngForOf",n.evts),o.Bb(1),o.jc("ngIf",n.loading))},directives:[p.j,p.k,s.b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-packages"]],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"p"),o.zc(2,"package works!"),o.Rb(),o.Rb())},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-projects"]],decls:3,vars:0,consts:[[1,"wrapper"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"p"),o.zc(2,"projects works!"),o.Rb(),o.Rb())},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})();function M(t,n){if(1&t&&(o.Sb(0,"div",3),o.Sb(1,"p",4),o.zc(2),o.Rb(),o.Sb(3,"p"),o.zc(4),o.Rb(),o.Sb(5,"p"),o.zc(6),o.Rb(),o.Rb()),2&t){const t=n.$implicit;o.Bb(2),o.Ac(null==t?null:t.name),o.Bb(2),o.Ac(null==t?null:t.language),o.Bb(2),o.Ac(null==t?null:t.description)}}function P(t,n){1&t&&(o.Sb(0,"div",5),o.Nb(1,"mat-spinner"),o.Rb())}const x=[{path:":id",component:b,children:[{path:"overview",component:f},{path:"repo",component:(()=>{class t{constructor(t,n){this.http=t,this.activateRoute=n,this.repos=[],this.loading=!0,this.fetchRepoList()}ngOnInit(){}fetchRepoList(){return Object(r.a)(this,void 0,void 0,function*(){try{this.repos=yield this.http.get({url:`https://api.github.com/users/${this.activateRoute.parent.snapshot.params.id}/repos`})}catch(t){}finally{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(l),o.Mb(a.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-repository"]],decls:3,vars:2,consts:[[1,"wrapper"],["class","card",4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[1,"card"],[1,"name"],[1,"loader"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.yc(1,M,7,3,"div",1),o.Rb(),o.yc(2,P,2,0,"div",2)),2&t&&(o.Bb(1),o.jc("ngForOf",n.repos),o.Bb(1),o.jc("ngIf",n.loading))},directives:[p.j,p.k,s.b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:calc(50% - 24 * 2px);margin:24px;border-radius:5px;border:.25px solid #000;padding:16px}.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#0366d6}"]}),t})()},{path:"package",component:w},{path:"project",component:O},{path:"",redirectTo:"overview",pathMatch:"full"}]},{path:"",redirectTo:"dipu7388",pathMatch:"full"}];let C=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[a.e.forRoot(x,{relativeLinkResolution:"legacy"})],a.e]}),t})();var _=e("XNiG");let v=(()=>{class t{constructor(){this.menuFlag=!1,this.menuState=new _.a,this.menuState.next(this.menuFlag)}open(){this.menuFlag=!0,this.menuState.next(this.menuFlag)}close(){this.menuFlag=!1,this.menuState.next(this.menuFlag)}toggle(){this.menuFlag=!this.menuFlag,this.menuState.next(this.menuFlag)}menuObs(){return this.menuState}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),y=(()=>{class t{constructor(t,n,e,o){this.appStateService=t,this.http=n,this.activatedRoute=e,this.router=o,this.title="dheerendra",this.menuFlag$=this.appStateService.menuObs(),this.val=!1,this.tabs=[{label:"Overview",path:"overview"},{label:"Repositories",path:"repo"},{label:"Projects",path:"project"},{label:"Packages",path:"package"}],console.log(e.snapshot.params),e.params.subscribe(t=>{console.log(t)})}fetchData(){return Object(r.a)(this,void 0,void 0,function*(){let t=new i.d;this.loading=!0;try{yield this.http.get({url:"https://api.github.com",params:t})}catch(n){}finally{this.loading=!1}})}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(v),o.Mb(l),o.Mb(a.a),o.Mb(a.b))},t.\u0275cmp=o.Gb({type:t,selectors:[["dk-root"]],decls:4,vars:0,consts:[[1,"pages-stack"],[1,"simplebar-scroll-content"],[1,"simplebar-content"]],template:function(t,n){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Nb(3,"router-outlet"),o.Rb(),o.Rb(),o.Rb())},directives:[a.f],styles:['.row[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{*zoom:1}.row[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:before, .wrapper[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:before{content:" ";display:table}.row[_ngcontent-%COMP%]:after, .wrapper[_ngcontent-%COMP%]:after{clear:both}.wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto}img[_ngcontent-%COMP%]{width:auto;max-width:100%;height:auto}[class*=column-][_ngcontent-%COMP%]{float:left;width:100%;min-height:1px;margin-right:24px}.row[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%]:last-child{margin-right:0}@media only screen and (min-width:60em){.wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%}.column-1[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 1 + (1 - 1) * 24px)}.column-1[_ngcontent-%COMP%], .column-2[_ngcontent-%COMP%]{display:inline-block}.column-2[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 2 + (2 - 1) * 24px)}.column-3[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 3 + (3 - 1) * 24px)}.column-3[_ngcontent-%COMP%], .column-4[_ngcontent-%COMP%]{display:inline-block}.column-4[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 4 + (4 - 1) * 24px)}.column-5[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 5 + (5 - 1) * 24px)}.column-5[_ngcontent-%COMP%], .column-6[_ngcontent-%COMP%]{display:inline-block}.column-6[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 6 + (6 - 1) * 24px)}.column-7[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 7 + (7 - 1) * 24px)}.column-7[_ngcontent-%COMP%], .column-8[_ngcontent-%COMP%]{display:inline-block}.column-8[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 8 + (8 - 1) * 24px)}.column-9[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 9 + (9 - 1) * 24px);display:inline-block}.column-10[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 10 + (10 - 1) * 24px);display:inline-block}.column-11[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 11 + (11 - 1) * 24px);display:inline-block}.column-12[_ngcontent-%COMP%]{width:calc((100% - ((12 - 1) * 24px)) / 12 * 12 + (12 - 1) * 24px);display:inline-block}}.pages-stack[_ngcontent-%COMP%]{background-color:#f6f6f6;height:100%;pointer-events:auto}.simplebar-content[_ngcontent-%COMP%], .simplebar-scroll-content[_ngcontent-%COMP%]{height:100%}']}),t})();var k=e("3Pt+"),R=e("0IaG"),S=e("dNgK"),j=e("qFsG"),z=e("u47x"),B=e("B/XX"),F=e("f6nW"),I=e("FvrZ"),N=e("/1cH"),G=e("TU8p"),L=e("2ChS"),U=e("bTqV"),D=e("jaxi"),T=e("Wp6s"),A=e("bSwM"),X=e("A5z7"),J=e("FKr1"),K=e("iadO"),$=e("f0Cb"),E=e("7EHt"),W=e("kmnG"),q=e("zkoq"),H=e("NFeN"),Q=e("MutI"),Y=e("STbY"),Z=e("M9IT"),V=e("bv9b"),tt=e("QibW"),nt=e("d3UM"),et=e("XhcP"),ot=e("1jcm"),ct=e("5RNC"),at=e("Dh3D"),rt=e("xHqg"),it=e("+0xr"),lt=e("wZkO"),pt=e("/t3+"),st=e("Qu3c"),ut=e("8yBR"),dt=e("+rOU"),gt=e("vxfF"),bt=e("5+WD"),ht=e("rDax"),mt=e("UXJo");let ft=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[z.a,mt.a,B.e,F.r,I.d,bt.a,N.a,G.a,L.a,U.b,D.a,T.a,A.a,X.a,rt.a,K.a,R.b,$.a,E.a,q.a,H.b,j.b,Q.a,Y.a,J.l,Z.a,V.a,s.a,tt.a,J.s,nt.b,et.a,ct.a,ot.a,S.a,at.a,it.a,lt.a,pt.a,st.b,ut.a,ht.f,dt.f,gt.d,W.d]}),t})();var wt=e("YUcS");let Ot=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[p.c,a.e,k.d,k.i,ft,wt.a,k.i,i.b],k.d,k.i,ft,wt.a,k.i,i.b]}),t})(),Mt=(()=>{class t{}return t.\u0275mod=o.Kb({type:t,bootstrap:[y]}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},providers:[],imports:[[c.a,C,Ot]]}),t})();Object(o.U)(),c.c().bootstrapModule(Mt).catch(t=>console.error(t))},zn8P:function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,4]]]);