"use strict";(self.webpackChunkproject_group3fe=self.webpackChunkproject_group3fe||[]).push([[82],{6082:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});var r,i=s(6293),n=s(4165),t=s(5861),l=s(9439),o=s(2791),d=s(5705),p=s(6727),m=s(9434),c=s(7689),u=s(1757),h=s(2195),w=s(2140),x=s(184),y=p.Ry().shape({email:p.Z_().email("This is an ERROR email").required("Please enter your email").matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),password:p.Z_().min(8,"Need to be more than 8 symbols!").required("Please enter your password").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/)}),j=function(){var e=(0,c.s0)(),a=(0,m.I0)(),s=(0,o.useState)(!1),r=(0,l.Z)(s,2),i=r[0],p=r[1];return(0,x.jsxs)(u.PQ,{children:[(0,x.jsx)(u.eb,{children:"Log In"}),(0,x.jsx)(d.J9,{initialValues:{email:"",password:""},validateOnChange:!1,validateOnBlur:!0,validationSchema:y,onSubmit:function(){var s=(0,t.Z)((0,n.Z)().mark((function s(r,i){var t,l;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=i.resetForm,s.prev=1,s.next=4,a((0,h.x4)({email:r.email,password:r.password}));case 4:"rejected"!==(l=s.sent).meta.requestStatus?(t(),e("/calendar")):l.payload.includes("401")&&p(!0),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),alert("Sorry, problem at server");case 11:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(e,a){return s.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.touched;return(0,x.jsxs)(u.Gq,{children:[(0,x.jsxs)(u.IT,{children:[(0,x.jsx)(u.eH,{htmlFor:"email",$validate:("Please enter your email"===a.email&&s.email?"empty":(a.email&&("This is an ERROR email"===a.email||a.email.includes("match"))||i)&&"error")||s.email&&"okay",children:"Email"}),(0,x.jsx)(u.ob,{name:"email",type:"email",placeholder:"nadiia@gmail.com",$validate:("Please enter your email"===a.email&&s.email?"empty":(a.email&&("This is an ERROR email"===a.email||a.email.includes("match"))||i)&&"error")||s.email&&"okay"}),"Please enter your email"===a.email&&s.email&&(0,x.jsx)(u.Oy,{children:a.email})||a.email&&("This is an ERROR email"===a.email||a.email.includes("match"))&&(0,x.jsx)(u.BD,{children:"This is an ERROR email"})||i&&(0,x.jsx)(u.BD,{children:"Email or password is uncorrect"})]}),(0,x.jsxs)(u.IT,{children:[(0,x.jsx)(u.eH,{htmlFor:"password",$validate:("Please enter your password"===a.password&&s.password?"empty":(a.password&&s.password||i)&&"error")||s.password&&"okay",children:"Password"}),(0,x.jsx)(u.iO,{name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022",$validate:("Please enter your password"===a.password&&s.password?"empty":(a.password&&s.password||i)&&"error")||s.password&&"okay"}),"Please enter your password"===a.password&&s.password&&(0,x.jsx)(u.Oy,{children:a.password})||a.password&&a.password.includes("password must match the following")&&s.password&&(0,x.jsx)(u.BD,{children:"This password should contain  at least eight characters and at least one number and one letter"})||a.password&&s.password&&(0,x.jsx)(u.BD,{children:a.password})||i&&(0,x.jsx)(u.BD,{children:"Email or password is uncorrect"})]}),(0,x.jsxs)(u.Sn,{type:"submit",children:["Log In",(0,x.jsx)(w.W.LoginWhiteIcon,{})]})]})}})]})},f=s(168),g=s(5867).ZP.div(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  padding: 155px 15px 156px 15px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #dcebf7;\n  @media (min-width: 768px) {\n    padding-top: 227px;\n  }\n  @media (min-width: 1440px) {\n    padding-top: 124px;\n  }\n"]))),v=function(){return(0,x.jsxs)(g,{children:[(0,x.jsx)(j,{}),(0,x.jsx)(i.E,{path:"/register",text:"Sign Up"})]})}}}]);
//# sourceMappingURL=82.99616a86.chunk.js.map