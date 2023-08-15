"use strict";(self.webpackChunkproject_group3fe=self.webpackChunkproject_group3fe||[]).push([[36],{5036:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,i,o,d,a,l,s,c,u,f,p,x,h,g=t(9439),m=t(2791),b=t(6602),v=t(168),y=t(6487),w=y.css,j=y.styled,E=w(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: 0px;\n  border: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  min-width: 38px;\n  padding: 8px 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fff;\n  ","\n  &:hover,\n  &:focus {\n    background-color: #f8f8f8;\n  }\n"])),""),k=j.div(i||(i=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  @media screen and (min-width: 768px) {\n    justify-content: initial;\n    margin-bottom: initial;\n  }\n"]))),M=j.div(o||(o=(0,v.Z)(["\n  color: #fff;\n  text-align: center;\n  font-family: 'Inter Bold';\n  font-size: 16px;\n  line-height: 1.13;\n  text-transform: uppercase;\n  border-radius: 8px;\n  background-color: #3e85f3;\n  padding: 8px 12px;\n  margin-right: 8px;\n"]))),Z=j.div(d||(d=(0,v.Z)(["\n  display: inline-flex;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n"]))),C=j.button(a||(a=(0,v.Z)(["\n  color: #343434;\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right: 1px solid rgba(220, 227, 229, 0.5);\n  }\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  ",";\n"])),E),z=t(3329),D=function(n){var e=n.date,t=n.prevHandler,r=n.nextHandler;return(0,z.jsxs)(k,{children:[(0,z.jsx)(M,{children:e}),(0,z.jsxs)(Z,{children:[(0,z.jsx)(C,{onClick:t,children:(0,z.jsx)(b.W.LeftChevron,{})}),(0,z.jsx)(C,{onClick:r,children:(0,z.jsx)(b.W.RightChevron,{})})]})]})},H=t(6487),N=(0,H.css)(l||(l=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: 0px;\n  border: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-family: 'Inter Medium';\n  font-size: 16px;\n  line-height: 1.13;\n  min-width: 82px;\n  padding: 8px 16px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: inherit;\n  background-color: #e3f3ff;\n  &.active {\n    background-color: #cae8ff;\n  }\n  &:hover,\n  &:focus {\n    background-color: #cae8ff;\n  }\n"]))),F=H.styled.div(s||(s=(0,v.Z)(["\n  display: inline-flex;\n  color: #3e85f3;\n  border-radius: 8px;\n"]))),I=H.styled.button(c||(c=(0,v.Z)(["\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right: 1px solid rgba(62, 133, 243, 0.2);\n  }\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  ",";\n"])),N),L=function(n){var e=n.type;return(0,z.jsxs)(F,{children:[(0,z.jsx)(I,{className:"month"===e?"active":null,type:"button",onClick:function(){console.log("Click month button")},disabled:"month"===e?"disabled":null,children:"Month"}),(0,z.jsx)(I,{className:"day"===e?"active":null,type:"button",onClick:function(){console.log("Click day button")},disabled:"day"===e?"disabled":null,children:"Day"})]})},S=t(1951),W=H.styled.div(u||(u=(0,v.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:nth-last-child(-n + 2) {\n    color: #3e85f3;\n  }\n"]))),R=function(n){var e=n.width,t=n.day;return(0,z.jsx)(W,{children:e>768?(0,S.default)(t,"EEE"):(0,S.default)(t,"EEEEE")})},T=H.styled.div(f||(f=(0,v.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:nth-last-child(-n + 2) {\n    color: #3e85f3;\n  }\n"]))),A=H.styled.span(p||(p=(0,v.Z)(["\n  color: #343434;\n  font-family: 'Inter Bold';\n  font-size: 12px;\n  line-height: 1.17;\n  margin-top: 6px;\n  &.current-date {\n    color: #fff;\n    border-radius: 8px;\n    background: #3e85f3;\n    padding: 4px 8px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n    margin-top: 4px;\n  }\n"]))),B=function(n){var e=n.width,t=n.day,r=n.isActive;return(0,z.jsxs)(T,{children:[e>768?(0,S.default)(t,"EEE"):(0,S.default)(t,"EEEEE"),(0,z.jsx)(A,{className:r?"current-date":null,children:(0,S.default)(t,"d")})]},t)},O=H.styled.div(x||(x=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    flex-direction: inherit;\n    margin-bottom: 32px;\n  }\n"]))),Y=H.styled.div(h||(h=(0,v.Z)(["\n  display: flex;\n  justify-content: space-around;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n"]))),_=t(3629),q=t(4565),G=t(8527),J=t(4522);var K=t(9040),P=t(4690),Q=function(n){var e=n.type,t=void 0===e?"day":e,r=(0,m.useState)(new Date),i=(0,g.Z)(r,2),o=i[0],d=i[1],a=(0,m.useState)(window.innerWidth),l=(0,g.Z)(a,2),s=l[0],c=l[1];(0,m.useEffect)((function(){var n=function(){return c(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]);var u="month"===t?(0,S.default)(o,"MMMM"):(0,S.default)(o,"d MMMM"),f=function(n,e){var t;(0,J.Z)(1,arguments);var r=n||{},i=(0,G.default)(r.start),o=(0,G.default)(r.end).getTime();if(!(i.getTime()<=o))throw new RangeError("Invalid interval");var d=[],a=i;a.setHours(0,0,0,0);var l=Number(null!==(t=null===e||void 0===e?void 0:e.step)&&void 0!==t?t:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;a.getTime()<=o;)d.push((0,G.default)(a)),a.setDate(a.getDate()+l),a.setHours(0,0,0,0);return d}({start:(0,_.default)(o,{weekStartsOn:1}),end:(0,q.default)(o,{weekStartsOn:1})});return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(O,{children:[(0,z.jsx)(D,{date:u,prevHandler:function(){d("month"===t?function(n){return new Date(n.getFullYear(),n.getMonth()-1)}:function(n){return(0,K.default)(n,-1)})},nextHandler:function(){d("month"===t?function(n){return new Date(n.getFullYear(),n.getMonth()+1)}:function(n){return(0,K.default)(n,1)})}}),(0,z.jsx)(L,{type:t})]}),(0,z.jsx)(Y,{children:f.map((function(n){var e=(0,P.default)(n,o);return"month"===t?(0,z.jsx)(R,{day:n,width:s},n):(0,z.jsx)(B,{day:n,width:s,isActive:e},n)}))})]})},U=t(7689),V=function(){var n=(0,U.s0)(),e=(0,S.default)(new Date,"MMMM").toLowerCase();return(0,m.useEffect)((function(){n("month/".concat(e))}),[n,e]),(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Q,{})})}}}]);
//# sourceMappingURL=36.93a8c6a8.chunk.js.map