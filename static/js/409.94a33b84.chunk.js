"use strict";(self.webpackChunkproject_group3fe=self.webpackChunkproject_group3fe||[]).push([[409],{7409:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,a,d,c,s,l,p,x,u,h=t(29439),f=t(72791),g=t(39040),y=t(11087),m=t(65451),b=t(20601),v=t(96123),j=t(82839),w=t(90466),k=t(12891),B=t(35667),Z=t(53336),D=t(87970),S=t(59434),M=t(58427),C=t(30168),z=t(76487),F=z.styled.div(r||(r=(0,C.Z)(["\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  width: 307px;\n  padding: 40px 14px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 135px;\n\n  @media screen and (min-width: 768px) {\n    width: 640px;\n    margin-bottom: 224px;\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 860px;\n    margin-bottom: 104px;\n    padding: 40px;\n  }\n"]))),I=((0,z.styled)(b.h)(i||(i=(0,C.Z)(["\n  @media screen and (max-width: 768px) {\n    height: 243px;\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 318px;\n  }\n"]))),t(80184)),K=function(){var n=(0,y.lr)(),e=(0,h.Z)(n,1)[0],t=(0,f.useState)([]),r=(0,h.Z)(t,2),i=r[0],o=r[1],a=e.get("day"),d=String(a).padStart(2,"0"),c=e.get("month"),s=String(c).padStart(2,"0"),l=e.get("year"),p=(0,S.I0)();(0,f.useEffect)((function(){c&&p((0,M.km)({month:s,year:l})).then((function(n){return o(n.payload)}))}),[p,a,c,s,l]);var x=(0,f.useState)(),u=(0,h.Z)(x,2),g=u[0],m=u[1],C=(0,f.useState)(),z=(0,h.Z)(C,2),K=z[0],_=z[1],T=(0,f.useState)(),E=(0,h.Z)(T,2),Y=E[0],P=E[1],R=(0,f.useState)(),W=(0,h.Z)(R,2),$=W[0],q=W[1],G=(0,f.useState)(),L=(0,h.Z)(G,2),A=L[0],H=L[1],J=(0,f.useState)(),N=(0,h.Z)(J,2),O=N[0],Q=N[1];(0,f.useEffect)((function(){m(i.filter((function(n){return"to-do"===n.category})).length),_(i.filter((function(n){return"in-progress"===n.category})).length),P(i.filter((function(n){return"done"===n.category})).length),q(i.filter((function(n){return"to-do"===n.category&&n.date.split("-")[2]===d})).length),H(i.filter((function(n){return"in-progress"===n.category&&n.date.split("-")[2]===d})).length),Q(i.filter((function(n){return"done"===n.category&&n.date.split("-")[2]===d})).length)}),[p,d,c,i]);var U=[{name:"To Do",ByMonth:g,ByDay:$},{name:"In Progress",ByMonth:K,ByDay:A},{name:"Done",ByMonth:Y,ByDay:O}];return(0,f.useEffect)((function(){!function(){var n=U.reduce((function(n,e){return n+e.ByDay}),0);U.map((function(e){return e.procentDay="".concat(0!==n?parseInt(e.ByDay/n*100):0,"%"),e.procentDay}))}(),function(){var n=U.reduce((function(n,e){return n+e.ByMonth}),0);U.map((function(e){return e.procentMonth="".concat(0!==n?parseInt(e.ByMonth/n*100):0,"%"),e.procentMonth}))}()})),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(F,{children:(0,I.jsx)(b.h,{height:318,children:(0,I.jsxs)(v.v,{width:760,height:440,data:U,margin:{top:40,right:0,left:0,bottom:19},fontSize:14,barGap:14,children:[(0,I.jsx)(j.q,{strokeDasharray:"3 3",vertical:!1}),(0,I.jsx)(w.K,{dataKey:"name"}),(0,I.jsx)(k.B,{label:{value:"Tasks",position:"top",dy:-24,fontSize:14,fill:"var(--second-Text-Color)"}}),(0,I.jsx)(B.u,{}),(0,I.jsx)(Z.$,{dataKey:"ByDay",fill:"#FFD2DD",barSize:27,fontSize:16,children:(0,I.jsx)(D.e,{dataKey:"procentDay",position:"top"})}),(0,I.jsx)(Z.$,{dataKey:"ByMonth",fill:"#3E85F3",barSize:27,fontSize:16,children:(0,I.jsx)(D.e,{dataKey:"procentMonth",position:"top"})})]})})})})},_=t(59513),T=t.n(_),E=(t(68639),z.styled.div(o||(o=(0,C.Z)(["\n  font-family: 'Poppins Regular';\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 335px;\n  justify-content: centre;\n  border-radius: 16px;\n  background: var(--second-Bckg-Color);\n  padding-top: 28px;\n  color: var(--second-Text-Color);\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    padding-top: 132px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1087px;\n    padding-top: 134px;\n  }\n"])))),Y=z.styled.div(a||(a=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: 576px;\n    margin-left: auto;\n    margin-right: auto;\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 780px;\n  }\n"]))),P=z.styled.ul(d||(d=(0,C.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n"]))),R=z.styled.li(c||(c=(0,C.Z)(["\n  &::before {\n    content: ' ';\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 8px;\n  }\n  &:first-child::before {\n    background: #ffd2dd;\n  }\n  &:last-child::before {\n    background: #3e85f3;\n  }\n"]))),W=z.styled.div(s||(s=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    margin-bottom: 0;\n  }\n"]))),$=z.styled.div(l||(l=(0,C.Z)(["\n  > div.react-datepicker-wrapper,\n  > div\n    > div.react-datepicker__input-container\n    > div\n    > div.react-datepicker__input-container\n    input {\n    width: 200px;\n  }\n"]))),q=(0,z.styled)(T())(p||(p=(0,C.Z)(["\n  color: #fff;\n  text-align: center;\n  font-family: 'Inter Bold';\n  font-size: 14px;\n  line-height: 1.13;\n  text-transform: uppercase;\n  border-radius: 8px;\n  background-color: #3e85f3;\n  padding: 8px 12px;\n  border: none;\n  cursor: pointer;\n  max-width: 100%;\n\n  &:focus {\n    outline: none;\n    box-shadow: rgba(62, 133, 243, 0.4) 0px 4px 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),G=z.styled.div(x||(x=(0,C.Z)(["\n  display: inline-flex;\n  border: 1px solid var(--first-Input-Border-Color);\n  border-radius: 8px;\n"]))),L=z.styled.button(u||(u=(0,C.Z)(["\n  color: #343434;\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right: 1px solid var(--first-Input-Border-Color);\n  }\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: 0px;\n  border: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  min-width: 38px;\n  padding: 8px 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: var(--second-Bckg-Color);\n  &:disabled {\n    color: #dce3e5;\n  }\n  &:hover {\n    background-color: var(--first-Bckg-Color);\n    color: var(--second-Text-Color);\n  }\n"]))),A=function(){var n=(0,y.lr)(),e=(0,h.Z)(n,2),t=(e[0],e[1]),r=new Date,i=(0,f.useState)(r),o=(0,h.Z)(i,2),a=o[0],d=o[1];return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(E,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(W,{children:[(0,I.jsx)($,{children:(0,I.jsx)(q,{selected:a,onChange:function(n){d(n),t({month:n.getMonth()+1,day:n.getDate(),year:n.getFullYear()})},dateFormat:"dd MMMM yyyy"})}),(0,I.jsxs)(G,{children:[(0,I.jsx)(L,{onClick:function(){var n=(0,g.default)(a,-1);d(n),t({month:n.getMonth()+1,day:n.getDate(),year:n.getFullYear()})},children:(0,I.jsx)(m.W.LeftChevron,{})}),(0,I.jsx)(L,{onClick:function(){var n=(0,g.default)(a,1);d(n),t({month:n.getMonth()+1,day:n.getDate(),year:n.getFullYear()})},children:(0,I.jsx)(m.W.RightChevron,{})})]})]}),(0,I.jsxs)(P,{children:[(0,I.jsx)(R,{children:"By day"}),(0,I.jsx)(R,{children:"By Month"})]})]}),(0,I.jsx)(K,{})]})})}}}]);
//# sourceMappingURL=409.94a33b84.chunk.js.map