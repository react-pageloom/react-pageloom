"use strict";var e=require("../../_virtual/_tslib.js"),s=require("react"),a=require("../../node_modules/@theme-ui/core/jsx-runtime/dist/theme-ui-core-jsx-runtime.esm.js"),r=require("../../utils/classNames.js"),i=require("../logo/Logo.js"),l=require("../navigation/Navigation.js"),o=require("./Header.styled.js");const t=s.forwardRef(((t,n)=>{var{className:d,children:c,blockLinks:u,snap:m=!1,fixedNav:N=!1}=t,g=e.__rest(t,["className","children","blockLinks","snap","fixedNav"]);const j=r.classNames("loom-header_root",d);let h=null;const v=[];return s.Children.forEach(c,(e=>{if(!s.isValidElement(e))return;e.type.displayName===i.HeaderLogo.displayName?h=e:v.push(e)})),a.jsxs(o.Header,Object.assign({id:"loom-header",className:j,$snap:m,$fixedNav:N,ref:n},g,{children:[!N&&a.jsx(l.PageNavigation,{blockLinks:u,fixedNav:N,logoElement:h}),v]}))}));t.displayName="PageHeader",exports.PageHeader=t;