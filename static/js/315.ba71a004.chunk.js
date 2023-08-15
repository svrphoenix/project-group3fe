"use strict";(self.webpackChunkproject_group3fe=self.webpackChunkproject_group3fe||[]).push([[315],{8315:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,d,a,l,s,c,u,f,p,x,h=t(9439),g=t(2791),b=t(6602),m=t(168),v=t(6487),y=v.css,j=v.styled,w=y(r||(r=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: 0px;\n  border: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  min-width: 38px;\n  padding: 8px 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #fff;\n  ","\n  &:hover,\n  &:focus {\n    background-color: #f8f8f8;\n  }\n"])),""),k=j.div(i||(i=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: space-between;\n  margin-bottom: 18px;\n  @media screen and (min-width: 768px) {\n    justify-content: initial;\n    margin-bottom: initial;\n  }\n"]))),E=j.div(o||(o=(0,m.Z)(["\n  color: #fff;\n  text-align: center;\n  font-family: 'Inter Bold';\n  font-size: 16px;\n  line-height: 1.13;\n  text-transform: uppercase;\n  border-radius: 8px;\n  background-color: #3e85f3;\n  padding: 8px 12px;\n  margin-right: 8px;\n"]))),Z=j.div(d||(d=(0,m.Z)(["\n  display: inline-flex;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  border-radius: 8px;\n"]))),M=j.button(a||(a=(0,m.Z)(["\n  color: #343434;\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right: 1px solid rgba(220, 227, 229, 0.5);\n  }\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  ",";\n"])),w),C=t(3329),z=function(n){var e=n.date;return(0,C.jsxs)(k,{children:[(0,C.jsx)(E,{children:e}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(M,{onClick:function(){console.log("Previous Month")},children:(0,C.jsx)(b.W.LeftChevron,{})}),(0,C.jsx)(M,{onClick:function(){console.log("Next Month")},children:(0,C.jsx)(b.W.RightChevron,{})})]})]})},N=t(6487),D=(0,N.css)(l||(l=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: 0px;\n  border: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-family: 'Inter Medium';\n  font-size: 16px;\n  line-height: 1.13;\n  min-width: 82px;\n  padding: 8px 16px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: inherit;\n  background-color: #e3f3ff;\n  &.active {\n    background-color: #cae8ff;\n  }\n  &:hover,\n  &:focus {\n    background-color: #cae8ff;\n  }\n"]))),I=N.styled.div(s||(s=(0,m.Z)(["\n  display: inline-flex;\n  color: #3e85f3;\n  border-radius: 8px;\n"]))),S=N.styled.button(c||(c=(0,m.Z)(["\n  &:first-child {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right: 1px solid rgba(62, 133, 243, 0.2);\n  }\n  &:last-child {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  ",";\n"])),D),W=function(n){var e=n.type;return(0,C.jsxs)(I,{children:[(0,C.jsx)(S,{className:"month"===e?"active":null,type:"button",onClick:function(){console.log("Click month button")},children:"Month"}),(0,C.jsx)(S,{className:"day"===e?"active":null,type:"button",onClick:function(){console.log("Click day button")},children:"Day"})]})},L=N.styled.div(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    flex-direction: inherit;\n    margin-bottom: 32px;\n  }\n"]))),R=N.styled.div(f||(f=(0,m.Z)(["\n  display: flex;\n  justify-content: space-around;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n"]))),T=N.styled.div(p||(p=(0,m.Z)(["\n  padding: 16px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  &:nth-last-child(-n + 2) {\n    color: #3e85f3;\n  }\n"]))),B=N.styled.span(x||(x=(0,m.Z)(["\n  color: #343434;\n  font-family: 'Inter Bold';\n  font-size: 12px;\n  line-height: 1.17;\n  margin-top: 6px;\n  &.current-date {\n    color: #fff;\n    border-radius: 8px;\n    background: #3e85f3;\n    padding: 4px 8px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n    margin-top: 4px;\n  }\n"]))),F=t(1951),H=t(3629),O=t(4565),_=t(8527),P=t(4522);var q=t(4690),A=function(n){var e=n.type,t=void 0===e?"day":e,r=(0,g.useState)(new Date),i=(0,h.Z)(r,1)[0],o=(0,g.useState)(window.innerWidth),d=(0,h.Z)(o,2),a=d[0],l=d[1];(0,g.useEffect)((function(){var n=function(){return l(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]);var s="month"===t?(0,F.default)(i,"MMMM"):(0,F.default)(i,"d MMMM"),c=function(n,e){var t;(0,P.Z)(1,arguments);var r=n||{},i=(0,_.default)(r.start),o=(0,_.default)(r.end).getTime();if(!(i.getTime()<=o))throw new RangeError("Invalid interval");var d=[],a=i;a.setHours(0,0,0,0);var l=Number(null!==(t=null===e||void 0===e?void 0:e.step)&&void 0!==t?t:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;a.getTime()<=o;)d.push((0,_.default)(a)),a.setDate(a.getDate()+l),a.setHours(0,0,0,0);return d}({start:(0,H.default)(i,{weekStartsOn:1}),end:(0,O.default)(i,{weekStartsOn:1})});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(z,{date:s}),(0,C.jsx)(W,{type:t})]}),(0,C.jsx)(R,{children:c.map((function(n){var e=(0,q.default)(n,i);return"month"===t?(0,C.jsx)(T,{children:a>768?(0,F.default)(n,"EEE"):(0,F.default)(n,"EEEEE")},n):(0,C.jsxs)(T,{children:[a>768?(0,F.default)(n,"EEE"):(0,F.default)(n,"EEEEE"),(0,C.jsx)(B,{className:e?"current-date":null,children:(0,F.default)(n,"d")})]},n)}))})]})},G=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(A,{})})}}}]);
//# sourceMappingURL=315.ba71a004.chunk.js.map