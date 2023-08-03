"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[538],{3538:(w,s,r)=>{r.r(s),r.d(s,{AuthModule:()=>S});var u=r(6895),d=r(5241),p=r(5861),i=r(433),e=r(4650),c=r(143),f=r(1785),h=r(5593),v=r(1795),Z=r(3425),b=r(1989),x=r(1740);function y(t,m){1&t&&(e.TgZ(0,"div",22),e._uU(1," * Please enter valid email address ! "),e.qZA())}function A(t,m){1&t&&(e.TgZ(0,"div",22),e._uU(1," * Password must be more than 7 digit ! "),e.qZA())}const T=function(){return{width:"100%"}};let g=(()=>{class t{constructor(n,o,l){this.coreService=n,this.formBuilder=o,this.authService=l,this.formSubmitted=!1,this.valCheck=["remember"]}ngOnInit(){this.createForm()}createForm(){this.loginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(8)]]})}submitLoginForm(n){var o=this;return(0,p.Z)(function*(){o.formSubmitted=!0,o.loginForm.valid&&(yield o.authService.login(n),o.formSubmitted=!1)})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.p),e.Y36(i.qu),e.Y36(f.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:31,vars:8,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/layout/images/logo-dark.svg","alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],["src","assets/demo/images/login/avatar.png","alt","Image","height","50",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[3,"formGroup","ngSubmit"],["for","email",1,"block","text-900","text-xl","font-medium","mb-2"],[1,"mb-5"],["id","email","type","text","formControlName","email","placeholder","Email address","pInputText","",1,"w-full","md:w-30rem",2,"padding","1rem"],["class","p-error",4,"ngIf"],["for","password",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password","formControlName","password","placeholder","Password","inputStyleClass","w-full p-3 md:w-30rem",3,"toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In","type","submit",1,"w-full","p-3","text-xl"],[1,"p-error"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"div",7),e._uU(8,"Welcome Back"),e.qZA(),e.TgZ(9,"span",8),e._uU(10,"Login to continue to your account"),e.qZA()(),e.TgZ(11,"div")(12,"form",9),e.NdJ("ngSubmit",function(){return o.submitLoginForm(o.loginForm.value)}),e.TgZ(13,"label",10),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",11),e._UZ(16,"input",12),e.YNc(17,y,2,0,"div",13),e.qZA(),e.TgZ(18,"label",14),e._uU(19,"Password"),e.qZA(),e.TgZ(20,"div",11),e._UZ(21,"p-password",15),e.YNc(22,A,2,0,"div",13),e.qZA(),e.TgZ(23,"div",16)(24,"div",17),e._UZ(25,"p-checkbox",18),e.TgZ(26,"label",19),e._uU(27,"Remember me"),e.qZA()(),e.TgZ(28,"a",20),e._uU(29,"Forgot password?"),e.qZA()(),e._UZ(30,"button",21),e.qZA()()()()()()),2&n){let l,a;e.xp6(12),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",o.formSubmitted&&((null==(l=o.loginForm.get("email"))?null:l.hasError("required"))||(null==(l=o.loginForm.get("email"))?null:l.hasError("email")))),e.xp6(4),e.Akn(e.DdM(7,T)),e.Q6J("toggleMask",!0),e.xp6(1),e.Q6J("ngIf",o.formSubmitted&&((null==(a=o.loginForm.get("password"))?null:a.hasError("required"))||(null==(a=o.loginForm.get("password"))?null:a.value.length)<8)),e.xp6(3),e.Q6J("binary",!0)}},dependencies:[u.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,h.Hq,v.H,Z.ro,b.XZ,x.o],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:g},{path:"login",component:g},{path:"**",redirectTo:"/notfound"}]),d.Bz]}),t})();var F=r(7446);let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,F.m,C]}),t})()}}]);