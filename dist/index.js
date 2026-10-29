"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=q(function(G,x){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(e,r,a,u,i,s,t){var p,v,n,o,f;if(e<=0)return i;for(p=g(i,0),v=!0,n=u,o=t,f=0;f<e;f++)v&&!r[n]&&(v=!1),p[o]=v,n+=a,o+=s;return i}x.exports=B
});var j=q(function(H,d){
var l=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(e,r,a,u,i){var s=l(e,a),t=l(e,i);return E(e,r,a,s,u,i,t)}d.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),y,b=A(z(__dirname,"./native.js"));C(b)?y=D:y=b;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
